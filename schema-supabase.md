# Tide — Schema Supabase SQL + Tipi TypeScript

Allineato al PRD MVP Tide per **The Wave** (digital agency · cultura surfer · Scrum 10 gg / daily scritto): ruoli `user` / `admin`, RLS, Storage documenti, Realtime-ready. Dopo il deploy puoi rigenerare i tipi con la CLI Supabase.[^1][^2]

---

## 1. SQL — Enum e utility

```sql
-- ============================================================
-- Tide MVP — Supabase schema
-- Run in SQL Editor (ordine: enums → tables → functions → RLS → storage)
-- ============================================================

-- ENUMS
create type public.user_role as enum ('user', 'admin');

create type public.leave_type as enum ('ferie', 'permesso');
create type public.leave_unit as enum ('full_day', 'half_morning', 'half_afternoon');
create type public.leave_status as enum ('pending', 'approved', 'rejected', 'cancelled');

create type public.story_status as enum ('todo', 'doing', 'done');
create type public.sprint_status as enum ('planned', 'active', 'completed');

create type public.document_folder as enum (
  'buste_paga',
  'documenti_personali',
  'contratti',
  'shared_team'
);

create type public.notification_type as enum (
  'leave_status',
  'poll_new',
  'poll_closed',
  'meeting_invite',
  'document_uploaded',
  'daily_reminder',
  'wellbeing_published',
  'burnout_alert',
  'sprint_update',
  'system'
);

create type public.meeting_status as enum ('scheduled', 'live', 'done', 'cancelled');
create type public.poll_status as enum ('open', 'closed');

-- updated_at helper
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- Helper: current user is admin (SECURITY DEFINER per evitare ricorsione RLS)
create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.profiles p
    where p.id = auth.uid()
      and p.role = 'admin'
      and p.is_active = true
  );
$$;

create or replace function public.current_profile_id()
returns uuid
language sql
stable
as $$
  select auth.uid();
$$;
```

---

## 2. SQL — Tabelle core

```sql
-- ------------------------------------------------------------
-- PROFILES (1:1 con auth.users)
-- ------------------------------------------------------------
create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text not null,
  full_name text,
  first_name text,
  last_name text,
  avatar_url text,
  bio text check (char_length(bio) <= 160),
  phone text,
  slack_handle text,
  role public.user_role not null default 'user',
  is_active boolean not null default true,
  start_date date,
  -- saldi ferie/permessi (giorni, step 0.5)
  leave_balance_ferie numeric(6,1) not null default 0
    check (leave_balance_ferie >= 0),
  leave_balance_permessi numeric(6,1) not null default 0
    check (leave_balance_permessi >= 0),
  -- preferenze
  email_digest boolean not null default true,
  notify_leave boolean not null default true,
  notify_poll boolean not null default true,
  notify_meeting boolean not null default true,
  notify_document boolean not null default true,
  theme text not null default 'system'
    check (theme in ('system', 'light', 'ocean_dark')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index profiles_role_idx on public.profiles (role);
create index profiles_active_idx on public.profiles (is_active);

create trigger profiles_set_updated_at
  before update on public.profiles
  for each row execute function public.set_updated_at();

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name, first_name, last_name)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', split_part(new.email, '@', 1)),
    new.raw_user_meta_data->>'first_name',
    new.raw_user_meta_data->>'last_name'
  );
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();


-- ------------------------------------------------------------
-- PROJECTS (T&M + daily)
-- ------------------------------------------------------------
create table public.projects (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  code text unique,
  client_label text,
  is_tm boolean not null default true,
  is_active boolean not null default true,
  created_by uuid references public.profiles (id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger projects_set_updated_at
  before update on public.projects
  for each row execute function public.set_updated_at();

-- Assegnazione surfer ↔ progetto
create table public.project_members (
  project_id uuid not null references public.projects (id) on delete cascade,
  user_id uuid not null references public.profiles (id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (project_id, user_id)
);

create index project_members_user_idx on public.project_members (user_id);


-- ------------------------------------------------------------
-- LEAVE REQUESTS
-- ------------------------------------------------------------
create table public.leave_requests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  leave_type public.leave_type not null,
  unit public.leave_unit not null default 'full_day',
  start_date date not null,
  end_date date not null,
  days numeric(6,1) not null check (days > 0),
  note text,
  status public.leave_status not null default 'pending',
  admin_note text,
  reviewed_by uuid references public.profiles (id) on delete set null,
  reviewed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint leave_dates_ok check (end_date >= start_date)
);

create index leave_requests_user_idx on public.leave_requests (user_id);
create index leave_requests_status_idx on public.leave_requests (status);
create index leave_requests_dates_idx on public.leave_requests (start_date, end_date);

create trigger leave_requests_set_updated_at
  before update on public.leave_requests
  for each row execute function public.set_updated_at();

-- Aggiorna saldo quando approved (semplice; per reject/cancel non ri-accredita se non era approved)
create or replace function public.apply_leave_balance()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  bal_col text;
begin
  if tg_op = 'UPDATE'
     and new.status = 'approved'
     and old.status is distinct from 'approved' then
    if new.leave_type = 'ferie' then
      update public.profiles
      set leave_balance_ferie = greatest(0, leave_balance_ferie - new.days)
      where id = new.user_id;
    else
      update public.profiles
      set leave_balance_permessi = greatest(0, leave_balance_permessi - new.days)
      where id = new.user_id;
    end if;
  end if;

  -- re-accredito se da approved → cancelled/rejected
  if tg_op = 'UPDATE'
     and old.status = 'approved'
     and new.status in ('cancelled', 'rejected') then
    if new.leave_type = 'ferie' then
      update public.profiles
      set leave_balance_ferie = leave_balance_ferie + new.days
      where id = new.user_id;
    else
      update public.profiles
      set leave_balance_permessi = leave_balance_permessi + new.days
      where id = new.user_id;
    end if;
  end if;

  return new;
end;
$$;

create trigger leave_apply_balance
  after update of status on public.leave_requests
  for each row execute function public.apply_leave_balance();


-- ------------------------------------------------------------
-- SPRINTS + STORIES
-- ------------------------------------------------------------
create table public.sprints (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  goal text,
  start_date date not null,
  end_date date not null,
  status public.sprint_status not null default 'planned',
  created_by uuid references public.profiles (id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint sprint_dates_ok check (end_date >= start_date)
);

create trigger sprints_set_updated_at
  before update on public.sprints
  for each row execute function public.set_updated_at();

create table public.sprint_stories (
  id uuid primary key default gen_random_uuid(),
  sprint_id uuid not null references public.sprints (id) on delete cascade,
  title text not null,
  description text,
  story_points integer not null default 0 check (story_points >= 0),
  status public.story_status not null default 'todo',
  assignee_id uuid references public.profiles (id) on delete set null,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index sprint_stories_sprint_idx on public.sprint_stories (sprint_id);
create index sprint_stories_assignee_idx on public.sprint_stories (assignee_id);

create trigger sprint_stories_set_updated_at
  before update on public.sprint_stories
  for each row execute function public.set_updated_at();


-- ------------------------------------------------------------
-- TIME ENTRIES
-- ------------------------------------------------------------
create table public.time_entries (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  project_id uuid not null references public.projects (id) on delete restrict,
  work_date date not null,
  hours numeric(5,2) not null check (hours > 0 and hours <= 24),
  note text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index time_entries_user_date_idx on public.time_entries (user_id, work_date desc);
create index time_entries_project_idx on public.time_entries (project_id);

create trigger time_entries_set_updated_at
  before update on public.time_entries
  for each row execute function public.set_updated_at();


-- ------------------------------------------------------------
-- DOCUMENTS (metadata; file in Storage)
-- ------------------------------------------------------------
create table public.documents (
  id uuid primary key default gen_random_uuid(),
  owner_user_id uuid references public.profiles (id) on delete cascade,
  -- null owner + folder shared_team = team-wide
  folder public.document_folder not null,
  title text not null,
  file_path text not null, -- storage path
  mime_type text,
  size_bytes bigint,
  uploaded_by uuid references public.profiles (id) on delete set null,
  is_deleted boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index documents_owner_idx on public.documents (owner_user_id);
create index documents_folder_idx on public.documents (folder);

create trigger documents_set_updated_at
  before update on public.documents
  for each row execute function public.set_updated_at();


-- ------------------------------------------------------------
-- DAILY NOTES
-- content: { yesterday, today, blockers } jsonb
-- ------------------------------------------------------------
create table public.daily_notes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  project_id uuid references public.projects (id) on delete set null,
  note_date date not null default (timezone('Europe/Rome', now()))::date,
  yesterday text,
  today text,
  blockers text,
  content jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, project_id, note_date)
);

create index daily_notes_user_date_idx on public.daily_notes (user_id, note_date desc);
create index daily_notes_date_idx on public.daily_notes (note_date desc);

create trigger daily_notes_set_updated_at
  before update on public.daily_notes
  for each row execute function public.set_updated_at();


-- ------------------------------------------------------------
-- DAILY MOOD — “La mia marea” (self-report surfer, 1×/giorno)
-- Compilato nel Daily Wave; alimenta Wellbeing Buoy e segnali marea.
-- ------------------------------------------------------------
create table public.daily_mood_checkins (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  check_date date not null default (timezone('Europe/Rome', now()))::date,
  mood_score smallint not null check (mood_score between 1 and 5),
  mood_note text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, check_date)
);

create index daily_mood_user_date_idx on public.daily_mood_checkins (user_id, check_date desc);
create index daily_mood_date_idx on public.daily_mood_checkins (check_date desc);

create trigger daily_mood_set_updated_at
  before update on public.daily_mood_checkins
  for each row execute function public.set_updated_at();


-- ------------------------------------------------------------
-- WELLBEING REPORTS (compilati da admin — “la boa”)
-- ------------------------------------------------------------
create table public.wellbeing_reports (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  score smallint not null check (score between 1 and 5),
  work_status text,
  notes text,
  report_date date not null default (timezone('Europe/Rome', now()))::date,
  created_by uuid not null references public.profiles (id) on delete restrict,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index wellbeing_user_date_idx on public.wellbeing_reports (user_id, report_date desc);

create trigger wellbeing_set_updated_at
  before update on public.wellbeing_reports
  for each row execute function public.set_updated_at();


-- ------------------------------------------------------------
-- MEETINGS
-- ------------------------------------------------------------
create table public.meetings (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  starts_at timestamptz not null,
  ends_at timestamptz,
  status public.meeting_status not null default 'scheduled',
  notes text,
  created_by uuid references public.profiles (id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger meetings_set_updated_at
  before update on public.meetings
  for each row execute function public.set_updated_at();

create table public.meeting_participants (
  meeting_id uuid not null references public.meetings (id) on delete cascade,
  user_id uuid not null references public.profiles (id) on delete cascade,
  primary key (meeting_id, user_id)
);

create table public.meeting_agenda_items (
  id uuid primary key default gen_random_uuid(),
  meeting_id uuid not null references public.meetings (id) on delete cascade,
  title text not null,
  is_done boolean not null default false,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table public.meeting_action_items (
  id uuid primary key default gen_random_uuid(),
  meeting_id uuid not null references public.meetings (id) on delete cascade,
  title text not null,
  owner_id uuid references public.profiles (id) on delete set null,
  is_done boolean not null default false,
  due_date date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger meeting_action_items_set_updated_at
  before update on public.meeting_action_items
  for each row execute function public.set_updated_at();


-- ------------------------------------------------------------
-- POLLS
-- ------------------------------------------------------------
create table public.polls (
  id uuid primary key default gen_random_uuid(),
  question text not null,
  is_multi boolean not null default false,
  is_anonymous boolean not null default false,
  status public.poll_status not null default 'open',
  closes_at timestamptz,
  created_by uuid references public.profiles (id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger polls_set_updated_at
  before update on public.polls
  for each row execute function public.set_updated_at();

create table public.poll_options (
  id uuid primary key default gen_random_uuid(),
  poll_id uuid not null references public.polls (id) on delete cascade,
  label text not null,
  sort_order integer not null default 0
);

create table public.poll_votes (
  id uuid primary key default gen_random_uuid(),
  poll_id uuid not null references public.polls (id) on delete cascade,
  option_id uuid not null references public.poll_options (id) on delete cascade,
  user_id uuid not null references public.profiles (id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (poll_id, option_id, user_id)
);

-- un voto per poll se non multi: enforce in app; multi: più option per user ok
create index poll_votes_poll_idx on public.poll_votes (poll_id);


-- ------------------------------------------------------------
-- NOTIFICATIONS
-- ------------------------------------------------------------
create table public.notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  type public.notification_type not null default 'system',
  title text not null,
  body text,
  link_path text,
  payload jsonb not null default '{}'::jsonb,
  is_read boolean not null default false,
  created_at timestamptz not null default now()
);

create index notifications_user_unread_idx
  on public.notifications (user_id, is_read, created_at desc);


-- ------------------------------------------------------------
-- BURNOUT SCORES (cache calcolata)
-- ------------------------------------------------------------
create table public.burnout_scores (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  score numeric(5,2) not null check (score >= 0 and score <= 100),
  label text, -- es. 'marea_calma' | 'corrente' | 'tempesta'
  factors jsonb not null default '{}'::jsonb,
  suggestions text[],
  computed_at timestamptz not null default now(),
  unique (user_id) -- ultimo score; storico opzionale in v1.1
);

-- Storico opzionale leggero
create table public.burnout_score_history (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  score numeric(5,2) not null,
  label text,
  factors jsonb not null default '{}'::jsonb,
  computed_at timestamptz not null default now()
);

create index burnout_history_user_idx
  on public.burnout_score_history (user_id, computed_at desc);


-- ------------------------------------------------------------
-- NEWSLETTER LOG (admin)
-- ------------------------------------------------------------
create table public.newsletter_sends (
  id uuid primary key default gen_random_uuid(),
  subject text not null,
  body_md text not null,
  sent_by uuid references public.profiles (id) on delete set null,
  recipient_count integer not null default 0,
  only_digest_opt_in boolean not null default true,
  created_at timestamptz not null default now()
);


-- ------------------------------------------------------------
-- AI ANALYSIS LOG (admin, audit)
-- ------------------------------------------------------------
create table public.ai_analysis_runs (
  id uuid primary key default gen_random_uuid(),
  created_by uuid references public.profiles (id) on delete set null,
  scope text not null default 'team' check (scope in ('team', 'user')),
  target_user_id uuid references public.profiles (id) on delete set null,
  range_from date,
  range_to date,
  input_snapshot jsonb not null default '{}'::jsonb,
  output_text text,
  model text,
  created_at timestamptz not null default now()
);
```

---

## 3. SQL — RLS (Row Level Security)

```sql
-- Enable RLS
alter table public.profiles enable row level security;
alter table public.projects enable row level security;
alter table public.project_members enable row level security;
alter table public.leave_requests enable row level security;
alter table public.sprints enable row level security;
alter table public.sprint_stories enable row level security;
alter table public.time_entries enable row level security;
alter table public.documents enable row level security;
alter table public.daily_notes enable row level security;
alter table public.daily_mood_checkins enable row level security;
alter table public.wellbeing_reports enable row level security;
alter table public.meetings enable row level security;
alter table public.meeting_participants enable row level security;
alter table public.meeting_agenda_items enable row level security;
alter table public.meeting_action_items enable row level security;
alter table public.polls enable row level security;
alter table public.poll_options enable row level security;
alter table public.poll_votes enable row level security;
alter table public.notifications enable row level security;
alter table public.burnout_scores enable row level security;
alter table public.burnout_score_history enable row level security;
alter table public.newsletter_sends enable row level security;
alter table public.ai_analysis_runs enable row level security;

-- ---- PROFILES ----
create policy "profiles_select_own_or_admin"
  on public.profiles for select
  using (id = auth.uid() or public.is_admin());

create policy "profiles_update_own"
  on public.profiles for update
  using (id = auth.uid())
  with check (id = auth.uid());

-- Admin può aggiornare tutti (role, saldi, is_active)
create policy "profiles_update_admin"
  on public.profiles for update
  using (public.is_admin());

-- Insert solo via trigger (no policy insert user); service role bypassa

-- ---- PROJECTS ----
create policy "projects_select_authenticated"
  on public.projects for select
  to authenticated
  using (is_active = true or public.is_admin());

create policy "projects_admin_all"
  on public.projects for all
  using (public.is_admin())
  with check (public.is_admin());

-- ---- PROJECT MEMBERS ----
create policy "project_members_select"
  on public.project_members for select
  to authenticated
  using (user_id = auth.uid() or public.is_admin());

create policy "project_members_admin"
  on public.project_members for all
  using (public.is_admin())
  with check (public.is_admin());

-- ---- LEAVE ----
create policy "leave_select_own_or_admin"
  on public.leave_requests for select
  using (user_id = auth.uid() or public.is_admin());

create policy "leave_insert_own"
  on public.leave_requests for insert
  with check (user_id = auth.uid());

create policy "leave_update_own_pending"
  on public.leave_requests for update
  using (user_id = auth.uid() and status = 'pending')
  with check (user_id = auth.uid());

create policy "leave_admin_all"
  on public.leave_requests for all
  using (public.is_admin())
  with check (public.is_admin());

-- ---- SPRINTS ----
create policy "sprints_select_auth"
  on public.sprints for select
  to authenticated
  using (true);

create policy "sprints_admin_write"
  on public.sprints for all
  using (public.is_admin())
  with check (public.is_admin());

create policy "stories_select_auth"
  on public.sprint_stories for select
  to authenticated
  using (true);

create policy "stories_update_assignee_or_admin"
  on public.sprint_stories for update
  using (assignee_id = auth.uid() or public.is_admin())
  with check (assignee_id = auth.uid() or public.is_admin());

create policy "stories_admin_insert_delete"
  on public.sprint_stories for all
  using (public.is_admin())
  with check (public.is_admin());

-- ---- TIME ----
create policy "time_select_own_or_admin"
  on public.time_entries for select
  using (user_id = auth.uid() or public.is_admin());

create policy "time_insert_own"
  on public.time_entries for insert
  with check (user_id = auth.uid());

create policy "time_update_own"
  on public.time_entries for update
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

create policy "time_delete_own"
  on public.time_entries for delete
  using (user_id = auth.uid());

create policy "time_admin_all"
  on public.time_entries for all
  using (public.is_admin())
  with check (public.is_admin());

-- ---- DOCUMENTS ----
create policy "docs_select_own_or_shared_or_admin"
  on public.documents for select
  using (
    public.is_admin()
    or (is_deleted = false and owner_user_id = auth.uid())
    or (is_deleted = false and folder = 'shared_team')
  );

create policy "docs_admin_write"
  on public.documents for all
  using (public.is_admin())
  with check (public.is_admin());

-- ---- DAILY ----
create policy "daily_select_own_or_admin"
  on public.daily_notes for select
  using (user_id = auth.uid() or public.is_admin());

create policy "daily_insert_own"
  on public.daily_notes for insert
  with check (user_id = auth.uid());

create policy "daily_update_own"
  on public.daily_notes for update
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

create policy "daily_delete_own"
  on public.daily_notes for delete
  using (user_id = auth.uid());

create policy "daily_admin_all"
  on public.daily_notes for all
  using (public.is_admin())
  with check (public.is_admin());

-- ---- DAILY MOOD (La mia marea) ----
create policy "mood_select_own_or_admin"
  on public.daily_mood_checkins for select
  using (user_id = auth.uid() or public.is_admin());

create policy "mood_insert_own"
  on public.daily_mood_checkins for insert
  with check (user_id = auth.uid());

create policy "mood_update_own"
  on public.daily_mood_checkins for update
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

create policy "mood_delete_own"
  on public.daily_mood_checkins for delete
  using (user_id = auth.uid());

create policy "mood_admin_all"
  on public.daily_mood_checkins for all
  using (public.is_admin())
  with check (public.is_admin());

-- ---- WELLBEING ----
create policy "wellbeing_select_own_or_admin"
  on public.wellbeing_reports for select
  using (user_id = auth.uid() or public.is_admin());

create policy "wellbeing_admin_write"
  on public.wellbeing_reports for all
  using (public.is_admin())
  with check (public.is_admin());

-- ---- MEETINGS ----
create policy "meetings_select_participant_or_admin"
  on public.meetings for select
  using (
    public.is_admin()
    or exists (
      select 1 from public.meeting_participants mp
      where mp.meeting_id = id and mp.user_id = auth.uid()
    )
  );

create policy "meetings_admin_write"
  on public.meetings for all
  using (public.is_admin())
  with check (public.is_admin());

create policy "meeting_participants_select"
  on public.meeting_participants for select
  using (
    user_id = auth.uid()
    or public.is_admin()
    or exists (
      select 1 from public.meeting_participants mp
      where mp.meeting_id = meeting_id and mp.user_id = auth.uid()
    )
  );

create policy "meeting_participants_admin"
  on public.meeting_participants for all
  using (public.is_admin())
  with check (public.is_admin());

create policy "agenda_select"
  on public.meeting_agenda_items for select
  using (
    public.is_admin()
    or exists (
      select 1 from public.meeting_participants mp
      where mp.meeting_id = meeting_id and mp.user_id = auth.uid()
    )
  );

create policy "agenda_admin_write"
  on public.meeting_agenda_items for all
  using (public.is_admin())
  with check (public.is_admin());

create policy "action_select"
  on public.meeting_action_items for select
  using (
    public.is_admin()
    or owner_id = auth.uid()
    or exists (
      select 1 from public.meeting_participants mp
      where mp.meeting_id = meeting_id and mp.user_id = auth.uid()
    )
  );

create policy "action_update_owner_or_admin"
  on public.meeting_action_items for update
  using (owner_id = auth.uid() or public.is_admin())
  with check (owner_id = auth.uid() or public.is_admin());

create policy "action_admin_all"
  on public.meeting_action_items for all
  using (public.is_admin())
  with check (public.is_admin());

-- ---- POLLS ----
create policy "polls_select_auth"
  on public.polls for select
  to authenticated
  using (true);

create policy "polls_admin_write"
  on public.polls for all
  using (public.is_admin())
  with check (public.is_admin());

create policy "poll_options_select"
  on public.poll_options for select
  to authenticated
  using (true);

create policy "poll_options_admin"
  on public.poll_options for all
  using (public.is_admin())
  with check (public.is_admin());

create policy "poll_votes_select"
  on public.poll_votes for select
  to authenticated
  using (
    public.is_admin()
    or user_id = auth.uid()
    or exists (
      select 1 from public.polls p
      where p.id = poll_id and p.is_anonymous = false
    )
  );

create policy "poll_votes_insert_own"
  on public.poll_votes for insert
  with check (
    user_id = auth.uid()
    and exists (
      select 1 from public.polls p
      where p.id = poll_id and p.status = 'open'
    )
  );

-- ---- NOTIFICATIONS ----
create policy "notifications_select_own"
  on public.notifications for select
  using (user_id = auth.uid());

create policy "notifications_update_own"
  on public.notifications for update
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

create policy "notifications_admin_insert"
  on public.notifications for insert
  with check (public.is_admin() or user_id = auth.uid());

-- ---- BURNOUT ----
create policy "burnout_select_own_or_admin"
  on public.burnout_scores for select
  using (user_id = auth.uid() or public.is_admin());

create policy "burnout_admin_write"
  on public.burnout_scores for all
  using (public.is_admin())
  with check (public.is_admin());

create policy "burnout_hist_select_own_or_admin"
  on public.burnout_score_history for select
  using (user_id = auth.uid() or public.is_admin());

create policy "burnout_hist_admin_write"
  on public.burnout_score_history for all
  using (public.is_admin())
  with check (public.is_admin());

-- ---- NEWSLETTER + AI (admin only) ----
create policy "newsletter_admin"
  on public.newsletter_sends for all
  using (public.is_admin())
  with check (public.is_admin());

create policy "ai_runs_admin"
  on public.ai_analysis_runs for all
  using (public.is_admin())
  with check (public.is_admin());
```

**Nota RLS:** le policy `FOR ALL` admin affiancate a policy user possono sovrapporsi; in Postgres bastano che **una** policy passi (OR). Per update profilo, limita in app i campi che l’user può mandare (non `role` / saldi) oppure usa trigger che blocca escalation.[^2][^3]

---

## 4. SQL — Storage bucket documenti

```sql
-- Bucket privato
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'wave-documents',
  'wave-documents',
  false,
  10485760, -- 10MB
  array['application/pdf', 'image/png', 'image/jpeg', 'application/zip']
)
on conflict (id) do nothing;

-- Path consigliato: {user_id}/{folder}/{filename}
-- oppure team/{folder}/{filename} per shared

create policy "storage_read_own_or_admin"
  on storage.objects for select
  using (
    bucket_id = 'wave-documents'
    and (
      public.is_admin()
      or (storage.foldername(name))[^1] = auth.uid()::text
      or (storage.foldername(name))[^1] = 'team'
    )
  );

create policy "storage_admin_insert"
  on storage.objects for insert
  with check (
    bucket_id = 'wave-documents'
    and public.is_admin()
  );

create policy "storage_admin_update_delete"
  on storage.objects for update
  using (bucket_id = 'wave-documents' and public.is_admin());

create policy "storage_admin_delete"
  on storage.objects for delete
  using (bucket_id = 'wave-documents' and public.is_admin());
```

---

## 5. SQL — Realtime (opzionale)

```sql
-- Dashboard → Database → Replication: abilita per
alter publication supabase_realtime add table public.notifications;
alter publication supabase_realtime add table public.poll_votes;
alter publication supabase_realtime add table public.leave_requests;
```

---

## 6. SQL — Seed minimo (dev)

```sql
-- Dopo aver creato 2 utenti da Auth, aggiorna ruoli:
-- update public.profiles set role = 'admin' where email = 'board@thewave.studio';
-- update public.profiles set leave_balance_ferie = 20, leave_balance_permessi = 5 where role = 'user';

insert into public.projects (name, code, client_label, is_tm)
values
  ('Internal Tide', 'TIDE-INT', 'The Wave', false),
  ('Client Alpha T&M', 'ALPHA-TM', 'Client Alpha', true);
```

---

## 7. TypeScript — tipi applicativi

Dopo lo schema, genera i tipi ufficiali:

```bash
npx supabase gen types typescript --project-id "$PROJECT_REF" --schema public > src/types/database.types.ts
```

Sotto: tipi manuali allineati allo schema (utili subito + helper).

```ts
// src/types/tide.ts

/** Enums (mirror SQL) */
export type UserRole = "user" | "admin";
export type LeaveType = "ferie" | "permesso";
export type LeaveUnit = "full_day" | "half_morning" | "half_afternoon";
export type LeaveStatus = "pending" | "approved" | "rejected" | "cancelled";
export type StoryStatus = "todo" | "doing" | "done";
export type SprintStatus = "planned" | "active" | "completed";
export type DocumentFolder =
  | "buste_paga"
  | "documenti_personali"
  | "contratti"
  | "shared_team";
export type NotificationType =
  | "leave_status"
  | "poll_new"
  | "poll_closed"
  | "meeting_invite"
  | "document_uploaded"
  | "daily_reminder"
  | "wellbeing_published"
  | "burnout_alert"
  | "sprint_update"
  | "system";
export type MeetingStatus = "scheduled" | "live" | "done" | "cancelled";
export type PollStatus = "open" | "closed";
export type ThemePreference = "system" | "light" | "ocean_dark";
export type BurnoutLabel = "marea_calma" | "corrente" | "tempesta" | string;

export interface Profile {
  id: string;
  email: string;
  full_name: string | null;
  first_name: string | null;
  last_name: string | null;
  avatar_url: string | null;
  bio: string | null;
  phone: string | null;
  slack_handle: string | null;
  role: UserRole;
  is_active: boolean;
  start_date: string | null; // ISO date
  leave_balance_ferie: number;
  leave_balance_permessi: number;
  email_digest: boolean;
  notify_leave: boolean;
  notify_poll: boolean;
  notify_meeting: boolean;
  notify_document: boolean;
  theme: ThemePreference;
  created_at: string;
  updated_at: string;
}

export type ProfileUpdate = Partial<
  Pick<
    Profile,
    | "full_name"
    | "first_name"
    | "last_name"
    | "avatar_url"
    | "bio"
    | "phone"
    | "slack_handle"
    | "email_digest"
    | "notify_leave"
    | "notify_poll"
    | "notify_meeting"
    | "notify_document"
    | "theme"
  >
>;

/** Admin-only fields — mai esporre in form user */
export type ProfileAdminUpdate = Partial<
  Pick<
    Profile,
    | "role"
    | "is_active"
    | "start_date"
    | "leave_balance_ferie"
    | "leave_balance_permessi"
  >
>;

export interface Project {
  id: string;
  name: string;
  code: string | null;
  client_label: string | null;
  is_tm: boolean;
  is_active: boolean;
  created_by: string | null;
  created_at: string;
  updated_at: string;
}

export interface ProjectMember {
  project_id: string;
  user_id: string;
  created_at: string;
}

export interface LeaveRequest {
  id: string;
  user_id: string;
  leave_type: LeaveType;
  unit: LeaveUnit;
  start_date: string;
  end_date: string;
  days: number;
  note: string | null;
  status: LeaveStatus;
  admin_note: string | null;
  reviewed_by: string | null;
  reviewed_at: string | null;
  created_at: string;
  updated_at: string;
}

export type LeaveRequestInsert = {
  leave_type: LeaveType;
  unit?: LeaveUnit;
  start_date: string;
  end_date: string;
  days: number;
  note?: string | null;
};

export interface Sprint {
  id: string;
  name: string;
  goal: string | null;
  start_date: string;
  end_date: string;
  status: SprintStatus;
  created_by: string | null;
  created_at: string;
  updated_at: string;
}

export interface SprintStory {
  id: string;
  sprint_id: string;
  title: string;
  description: string | null;
  story_points: number;
  status: StoryStatus;
  assignee_id: string | null;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface TimeEntry {
  id: string;
  user_id: string;
  project_id: string;
  work_date: string;
  hours: number;
  note: string | null;
  created_at: string;
  updated_at: string;
}

export type TimeEntryInsert = {
  project_id: string;
  work_date: string;
  hours: number;
  note?: string | null;
};

export interface DocumentMeta {
  id: string;
  owner_user_id: string | null;
  folder: DocumentFolder;
  title: string;
  file_path: string;
  mime_type: string | null;
  size_bytes: number | null;
  uploaded_by: string | null;
  is_deleted: boolean;
  created_at: string;
  updated_at: string;
}

export type MoodLabel =
  | "serve_una_mano"
  | "vento_contrario"
  | "marea_piatta"
  | "buona_energia"
  | "marea_alta";

export interface DailyMoodCheckin {
  id: string;
  user_id: string;
  check_date: string;
  mood_score: 1 | 2 | 3 | 4 | 5;
  mood_note: string | null;
  created_at: string;
  updated_at: string;
}

export type DailyMoodUpsert = {
  check_date: string;
  mood_score: 1 | 2 | 3 | 4 | 5;
  mood_note?: string | null;
};

export interface DailyNoteContent {
  yesterday?: string;
  today?: string;
  blockers?: string;
}

export interface DailyNote {
  id: string;
  user_id: string;
  project_id: string | null;
  note_date: string;
  yesterday: string | null;
  today: string | null;
  blockers: string | null;
  content: DailyNoteContent;
  created_at: string;
  updated_at: string;
}

export type DailyNoteUpsert = {
  project_id?: string | null;
  note_date: string;
  yesterday?: string | null;
  today?: string | null;
  blockers?: string | null;
  content?: DailyNoteContent;
};

export interface WellbeingReport {
  id: string;
  user_id: string;
  score: 1 | 2 | 3 | 4 | 5;
  work_status: string | null;
  notes: string | null;
  report_date: string;
  created_by: string;
  created_at: string;
  updated_at: string;
}

export interface Meeting {
  id: string;
  title: string;
  description: string | null;
  starts_at: string;
  ends_at: string | null;
  status: MeetingStatus;
  notes: string | null;
  created_by: string | null;
  created_at: string;
  updated_at: string;
}

export interface MeetingAgendaItem {
  id: string;
  meeting_id: string;
  title: string;
  is_done: boolean;
  sort_order: number;
  created_at: string;
}

export interface MeetingActionItem {
  id: string;
  meeting_id: string;
  title: string;
  owner_id: string | null;
  is_done: boolean;
  due_date: string | null;
  created_at: string;
  updated_at: string;
}

export interface Poll {
  id: string;
  question: string;
  is_multi: boolean;
  is_anonymous: boolean;
  status: PollStatus;
  closes_at: string | null;
  created_by: string | null;
  created_at: string;
  updated_at: string;
}

export interface PollOption {
  id: string;
  poll_id: string;
  label: string;
  sort_order: number;
}

export interface PollVote {
  id: string;
  poll_id: string;
  option_id: string;
  user_id: string;
  created_at: string;
}

export interface Notification {
  id: string;
  user_id: string;
  type: NotificationType;
  title: string;
  body: string | null;
  link_path: string | null;
  payload: Record<string, unknown>;
  is_read: boolean;
  created_at: string;
}

export interface BurnoutFactors {
  hours_recent?: number;
  leave_balance?: number;
  wellbeing_score?: number;
  mood_score_self?: number;
  daily_streak?: number;
  [key: string]: unknown;
}

export interface BurnoutScore {
  id: string;
  user_id: string;
  score: number;
  label: BurnoutLabel | null;
  factors: BurnoutFactors;
  suggestions: string[] | null;
  computed_at: string;
}

export interface NewsletterSend {
  id: string;
  subject: string;
  body_md: string;
  sent_by: string | null;
  recipient_count: number;
  only_digest_opt_in: boolean;
  created_at: string;
}

export interface AiAnalysisRun {
  id: string;
  created_by: string | null;
  scope: "team" | "user";
  target_user_id: string | null;
  range_from: string | null;
  range_to: string | null;
  input_snapshot: Record<string, unknown>;
  output_text: string | null;
  model: string | null;
  created_at: string;
}

/** View models utili in UI */
export interface SprintWithStories extends Sprint {
  stories: SprintStory[];
  sp_total: number;
  sp_done: number;
}

export interface LeaveRequestWithUser extends LeaveRequest {
  profile?: Pick<Profile, "id" | "full_name" | "avatar_url" | "email">;
}

export interface DailyNoteWithProject extends DailyNote {
  project?: Pick<Project, "id" | "name" | "code">;
}

export interface PollWithOptions extends Poll {
  options: PollOption[];
  votes_count?: number;
  user_voted_option_ids?: string[];
}
```

### Helper su `Database` generato

```ts
// src/types/supabase-helpers.ts
import type { Database } from "./database.types";

export type Tables<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Row"];

export type InsertDto<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Insert"];

export type UpdateDto<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Update"];

export type Enums<T extends keyof Database["public"]["Enums"]> =
  Database["public"]["Enums"][T];

// Esempi:
// type ProfileRow = Tables<'profiles'>
// type LeaveInsert = InsertDto<'leave_requests'>
```

### Client tipizzato

```ts
// src/lib/supabase/client.ts
import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "@/types/database.types";

export function createClient() {
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}
```

---

## 8. Mappa feature → tabelle

| Feature PRD    | Tabelle                                                                            |
| :------------- | :--------------------------------------------------------------------------------- |
| Auth + profilo | `auth.users`, `profiles`                                                           |
| Ferie          | `leave_requests` + saldi su `profiles`                                             |
| Sprint         | `sprints`, `sprint_stories`                                                        |
| Time T\&M      | `projects`, `project_members`, `time_entries`                                      |
| Documenti      | `documents` + Storage `wave-documents`                                             |
| Daily          | `daily_notes` · `daily_mood_checkins` (La mia marea, self-report)                  |
| Wellbeing Buoy | `daily_mood_checkins` (marea self) · `wellbeing_reports` (boa board) · `burnout_scores`, `burnout_score_history` (segnali) — UI `/wellbeing` |
| Meeting board  | `meetings`, `meeting_participants`, `meeting_agenda_items`, `meeting_action_items` |
| Poll           | `polls`, `poll_options`, `poll_votes`                                              |
| Notifiche      | `notifications`                                                                    |
| Newsletter     | `newsletter_sends`                                                                 |
| AI analysis    | `ai_analysis_runs`                                                                 |

---

## 9. Caveat operativi

1. **Escalation role:** l’user non deve poter `update` la propria riga con `role: 'admin'`. Preferisci colonne separate o trigger `prevent_role_self_escalation`.
2. **Saldo ferie:** il trigger scala solo su `approved`; valida in Edge Function che `days <= balance` prima dell’approve.
3. **Poll anonimi:** con RLS attuale i voti restano leggibili ad admin; per anonimato forte usa aggregate view senza `user_id` esposto al client.
4. **Segnali marea write:** calcolo da cron/Edge Function con **service role**, non dal browser. Dati esposti in Wellbeing Buoy insieme alla boa.
5. **Tipi:** dopo ogni migration → `supabase gen types` e commit del file.[^1]

---

## 10. Ordine di deploy consigliato

1. Enums + functions (`set_updated_at`, `is_admin`, `handle_new_user`)
2. Tables + indexes + triggers
3. RLS policies
4. Storage bucket + policies
5. Seed admin role
6. `gen types` → wire TanStack Query
