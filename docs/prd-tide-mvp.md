# PRD — Tide MVP

**Internal Surfer Dashboard · The Wave**

| Campo                  | Valore                                                       |
| ---------------------- | ------------------------------------------------------------ |
| **Prodotto**           | Tide                                                         |
| **Versione documento** | 1.0 — MVP Spec                                               |
| **Stato**              | Draft per validazione board                                  |
| **Owner prodotto**     | The Wave                                                     |
| **Data**               | Luglio 2026                                                  |
| **Stack**              | Next.js + TypeScript · Supabase · shadcn/ui · TanStack Query |

---

## 1. Executive Summary

Tide è la dashboard unica per la gestione interna dei **surfer** di **The Wave** — digital agency che supporta i clienti nella digital transformation e che misura il proprio successo anche sulla qualità dell’ambiente di lavoro (_l’isola felice_).

Un’unica onda che porta con sé auth, profilo, ferie, sprint, time tracking, documenti, daily, wellbeing e tool operativi — con un’esperienza fresca, positiva e leggera, coerente con l’identità _«Noi siamo i surfer. Noi siamo l’onda.»_

L’MVP separa chiaramente **User (Surfer)** e **Admin (Board)**: il surfer naviga la propria spiaggia; il board vede l’oceano intero (marea di squadra, andamento settimana/mese, benchmark).

### Contesto azienda (da culture deck Wave)

| Dimensione     | Cosa significa per Tide                                                                                                                      |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **Mission**    | Agenzia digitale: competenze tecniche per il mercato digitale dei clienti — Tide libera tempo operativo così i surfer restano su quel lavoro |
| **Vision**     | Punto di riferimento su qualità tecnica **e** qualità del posto di lavoro — Tide è infrastruttura dell’isola felice                          |
| **Surfer**     | Non “dipendente HR”: membro di una famiglia professionale che dà/riceve feedback, si forma, lavora in Agile                                  |
| **Pilastri**   | Feedback · Formazione · Team building · Talento · Responsabilità · Scrum                                                                     |
| **Scrum Wave** | Sprint da **10 giorni lavorativi** (avvio 1° e 3° lunedì del mese) · Planning · **Daily scritto** (in Tide) · Review a fine sprint           |

---

## 2. Problema e opportunità

### Problema

Oggi i processi interni (ferie, sprint, ore TM, buste paga, daily, wellbeing, meeting e sondaggi) sono sparsi su tool diversi o gestiti a mano. Questo genera:

- saldo ferie non sempre aggiornato
- daily e story point difficili da tracciare in un’unica vista (mentre i rituali Scrum Wave sono già definiti)
- zero visibilità strutturata su burnout e benessere — in contrasto con una cultura che mette al centro soddisfazione e trasparenza
- meeting e poll ad hoc, senza memoria (feedback e team building restano “a voce”)

### Opportunità

Un unico Tide riduce il rumore operativo, **rende operativa la cultura Wave** (feedback, responsabilità, Agile), protegge l’isola felice mentre il team cresce, e prepara un “Wave OS” interno riusabile in futuro su tool per business locali.

---

## 3. Obiettivi MVP

| Obiettivo                 | Descrizione                                   | Metrica di successo                                                 |
| ------------------------- | --------------------------------------------- | ------------------------------------------------------------------- |
| **Unica fonte di verità** | Tutti i flussi surfer in un’app               | ≥ 90% dei surfer usano Tide come primo tool interno entro 30 giorni |
| **Self-service**          | Ferie, profilo, documenti, daily senza ticket | Riduzione ≥ 50% richieste ad hoc su ferie/documenti                 |
| **Visibilità agile**      | Sprint + story point + time TM                | 100% sprint attivi tracciati in Tide                                |
| **Wellbeing Buoy**        | Boa + segnali marea personali                 | Boa compilata ≥ 1×/mese per surfer                                  |
| **Ops leggeri**           | Meeting board + poll flash                    | ≥ 1 meeting/poll gestito via Tide per sprint                        |

---

## 4. Brand Tone of Voice

Allineato al tone of voice Wave (cultura interna + comunicazione surfer).

- **Tema**: onda, mare, spiaggia, corrente, marea, surf — l’onda come cambiamento continuo che si cavalca, non si subisce.
- **Tone**: fresco, alla mano, ispirato a street art e cultura pop — zero corporate pesante.
- **Interno**: ascolto, feedback bidirezionale, libertà di opinione con rispetto; copy che sprona a dire ciò che fa bene a The Wave.
- **Sensazione**: solare e amichevole — “come parlare con un amico di vecchia data”, anche quando il tool parla di ferie o burnout.
- **Esempi copy**:
  - “Saldo ferie sempre aggiornato — come la marea.”
  - “La tua onda di oggi: daily e avanzamenti.”
  - “Wellbeing Buoy: la boa e i segnali della marea — ascolto prima che diventi tempesta.”
  - “Entra in Tide — imbraccia la tavola.”
- **Naming sezioni** (proposti): Wave Home · My Beach (profilo) · Leave Tide (ferie) · Sprint Surf · Time Current · Doc Shell · Daily Wave · **Wellbeing Buoy** (boa + segnali marea) · Ops Board · Tide Alerts (notifiche).

**Mappa cultura → prodotto**

| Pilastro Wave  | Feature Tide (MVP)                                                     |
| -------------- | ---------------------------------------------------------------------- |
| Feedback       | Poll, Meeting Board, Daily Wave, note wellbeing                        |
| Formazione     | Doc Shell + memoria sprint/review (base; workshop dedicati = post-MVP) |
| Team building  | Ops, poll flash, Marea di squadra (Board) in Wellbeing Buoy            |
| Talento        | Profilo, Sprint Surf (SP), Time Current                                |
| Responsabilità | Leave Tide self-service, time log, daily                               |
| Agile / Scrum  | Sprint Surf + Daily Wave (rituali Wave)                                |

---

## 5. Utenti e ruoli

| Ruolo             | Chi è                                       | Cosa può fare                                                                                                                                                                          |
| ----------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Surfer (User)** | Membro del team Wave (dipendente / collab.) | Gestisce il proprio profilo, ferie, daily, time, documenti, risponde a poll/meeting, vede i _propri_ insight in Wellbeing Buoy (boa + segnali marea)                                   |
| **Board (Admin)** | Founder / lead / HR ops                     | Approva ferie, organizza sprint, carica documenti, compila boa wellbeing, vede marea di squadra (heatmap, trend, alert), gestisce poll e meeting board, attiva AI analysis + benchmark |

**Auth**: un solo flusso di login; i permessi derivano dal ruolo in Supabase (`role: 'user' | 'admin'`).

---

## 6. Stack tecnologico

| Layer                 | Scelta                                      | Note                                                                          |
| --------------------- | ------------------------------------------- | ----------------------------------------------------------------------------- |
| Framework             | Next.js (App Router) + TypeScript           | SSR/SSG dove serve, route protette                                            |
| DB + Auth + Storage   | Supabase                                    | Auth (email/magic o OAuth), Postgres, RLS, Storage per documenti              |
| UI / DSM              | shadcn/ui + Tailwind                        | Design system coeso, tema “ocean” (palette custom)                            |
| Data fetching / cache | TanStack Query                              | Cache, invalidation, optimistic updates                                       |
| AI (MVP light)        | API LLM via server actions / route handlers | Solo analisi testo/dati aggregati, no training su dati sensibili senza policy |
| Notifiche             | Supabase Realtime + in-app toast            | Live notification in-app; email opzionale (Resend/Supabase)                   |

**Vincoli non funzionali MVP**

- RLS su tutte le tabelle (user vede solo i propri dati; admin scope team).
- Responsive desktop-first (dashboard uso desk).
- Performance: first meaningful paint < 2s su rete media.
- Accessibilità base: focus, contrast, label.

---

## 7. Scope MVP — Feature map

### 7.1 Matrice User vs Admin

| Feature                | Surfer (User)                               | Board (Admin)                                       |
| ---------------------- | ------------------------------------------- | --------------------------------------------------- |
| Auth completo          | Login, logout, reset pwd, session           | + invite user, change role                          |
| Profilo                | View + edit info private                    | View team, edit limitato (ruolo, status)            |
| Ferie e permessi       | Richiedi + saldo live                       | Approva/rifiuta + saldo team                        |
| Sprint Manager         | Vista sprint assegnati, SP propri           | Crea/edita sprint, assegna, overview SP team        |
| Time Tracker           | Log ore su progetti TM                      | Report ore per progetto/persona                     |
| Document Area          | Download buste paga / doc personali         | Upload, folder, permessi per user                   |
| Daily Notepad          | Scrivi avanzamenti su progetti assegnati    | Vista team daily (filtro data/progetto)             |
| Wellbeing Buoy         | Vista personale: marea self + boa + segnali | Vista squadra: marea team, compila boa, storico, AI |
| Meeting Board          | Partecipa / note meeting                    | Crea board dinamici, agenda, action item            |
| Polling Manager        | Rispondi a sondaggi flash                   | Crea poll, chiudi, risultati                        |
| Live Notification      | Riceve in-app                               | Configura tipi, broadcast                           |
| AI Analisi + Benchmark | Insight personali (se abilitati)            | Analisi dati team + benchmark                       |
| Email / Newsletter     | Preferenze ricezione                        | Invio newsletter / digest                           |

---

## 8. Specifiche funzionali dettagliate

### 8.1 Auth (completo)

**User stories**

- Come surfer, voglio accedere in modo sicuro e recuperare la password.
- Come admin, voglio invitare un nuovo surfer con ruolo predefinito.

**Requisiti**

- Sign-in email + password (Supabase Auth).
- Magic link opzionale (nice-to-have se tempo).
- Reset password.
- Protected routes (middleware Next.js).
- Sessione persistente + refresh.
- Logout.
- Admin: invite by email → user crea password al primo accesso.

**Criteri di accettazione**

- Utente non autenticato non accede a `/dashboard/*`.
- Ruolo letto da `profiles.role` e applicato via RLS + UI guard.

---

### 8.2 Profilo (edit info private)

**Surfer**

- Campi: nome, cognome, avatar, bio leggera, contatti, preferenze (tema, notifiche, email digest).
- Edit inline / form con validazione Zod.
- Avatar upload → Supabase Storage.

**Admin**

- Lista surfer, filtri, set role, stato attivo/inattivo.
- Non modifica dati “privati” sensibili oltre a quanto necessario (ruolo, team, start date).

---

### 8.3 Ferie e permessi (Leave Tide)

**Surfer**

- Saldo sempre aggiornato (giorni ferie + permessi residui).
- Richiesta: tipo (ferie / permesso), range date, note.
- Storico richieste con stato: pending / approved / rejected.
- Notifica quando lo stato cambia.

**Admin**

- Inbox richieste con approve / reject + commento.
- Aggiornamento automatico saldo.
- Calendario team (vista mensile assenze).

**Regole business (MVP)**

- Saldo iniziale configurabile da admin per user.
- No overlap critico bloccante (solo warning se date sovrapposte ad altri).
- Unità: mezza giornata / giornata intera.

---

### 8.4 Sprint Manager (Sprint Surf)

**Contesto**: The Wave adotta **Scrum**. Workflow a sprint per progetti complessi/innovativi; Tide è la casa digitale di questi rituali (non sostituisce la riunione, la prepara e ne conserva memoria).

**Convenzioni Wave (MVP default)**

- Durata sprint: **10 giorni lavorativi**.
- Cadenza: avvio tipico al **1° e 3° lunedì** del mese (configurabile; l’admin può creare date custom).
- Eventi: **Sprint Planning** (inizio) · **Daily scritto** (ogni giorno lavorativo, in Tide) · **Sprint Review** (fine).
- Planning: accordo su Sprint Goals + piano di esecuzione.
- Daily: i tre punti Scrum compilati per iscritto (non meeting sync alle 12:30).
- Review: incremento, blocchi, input per il planning successivo.

**Surfer**

- Lista sprint attivi/passati a cui è assegnato.
- Card storie: titolo, SP, status (todo / doing / done).
- Visibilità Sprint Goal dello sprint corrente.
- Aggiornamento status storie proprie (se policy lo consente).

**Admin**

- Crea sprint: nome, start/end (default 10 gg lavorativi), Sprint Goal.
- Aggiungi storie + SP + assignee.
- Burndown semplice (SP done vs remaining) — chart base.
- Overview team: SP per persona nello sprint corrente.
- Link / reminder a Planning e Review (Meeting Board o eventi dedicati).

**Fuori MVP**: Jira/Linear sync bidirezionale (futuro).

---

### 8.5 Time Tracker (Time Current)

**Surfer**

- Seleziona progetto TM, data, ore, nota breve.
- Vista settimanale delle ore loggate.
- Totale ore per progetto (mese corrente).

**Admin**

- Report per progetto / per surfer / range date.
- Export CSV (nice-to-have se in tempo).
- Progetti TM CRUD (nome, cliente interno, attivo).

---

### 8.6 Document Area (Doc Shell)

**Surfer**

- Cartelle: Buste paga · Documenti personali · Contratti (read-only).
- Download file; preview PDF se possibile.
- Nessun upload da user nell’MVP (solo admin carica).

**Admin**

- Upload file per user o “team shared”.
- Tag/tipo documento.
- Soft delete.
- Storage path isolato per user (`user_id/...`).

---

### 8.7 Daily Notepad (Daily Wave)

**Scopo**: il **daily di The Wave è scritto** — asincrono, in Tide. Non c’è più daily sync alle 12:30: ogni surfer compila i tre punti Scrum; il board (e il team) li legge quando serve.

**Surfer**

- Ogni giorno lavorativo: notepad per progetto assegnato (o un blocco unico con tag progetto).
- Campi allineati al rituale Scrum: **cosa fatto ieri** · **cosa farò nelle prossime 24h** · **ostacoli / blocchi**.
- **La mia marea** (in cima al daily, una volta al giorno): score umore 1–5 con label mare + nota opzionale breve. Il surfer manifesta il proprio stato d’animo — non è la boa del board, è la sua voce.
- Reminder soft (Tide Alerts) se il daily del giorno non è ancora compilato entro una deadline configurabile (es. fine mattina / fine giornata).
- Storico propri daily (ultimi 30 giorni) incluso storico marea self-report.

**Admin**

- Feed team filtrabile per data / persona / progetto.
- Vista “oggi” di tutti per follow-up asincrono (ostacoli, avanzamenti, **marea self-report** del giorno).
- Visibilità ostacoli aperti e cali di umore (segnali utili anche ai segnali marea in Wellbeing Buoy).

---

### 8.8 Wellbeing Buoy (boa + segnali marea)

**Scopo**: unica sezione per benessere e prevenzione burnout — rende misurabile la vision sull’ambiente di lavoro (_isola felice_) senza tono punitivo. **Tre layer complementari**, una sola UI:

| Layer             | Cosa è                                     | Chi alimenta                                                | Cosa vede il surfer                                               |
| ----------------- | ------------------------------------------ | ----------------------------------------------------------- | ----------------------------------------------------------------- |
| **La mia marea**  | Self-report giornaliero (stato d’animo)    | Surfer nel **Daily Wave** (1×/giorno)                       | Score 1–5 + label + nota opzionale; storico personale             |
| **La boa**        | Check-in umano del board (1:1, spot check) | Board compila dopo ascolto                                  | Score 1–5 con label, note, stato lavorativo, storico              |
| **Segnali marea** | Radar automatico su segnali operativi      | Sistema (cron) da ore, ferie, daily, marea self, ultima boa | Score + label (“Marea calma”), fattori spiegati, 1–2 suggerimenti |

**Surfer**

- Tab **La mia marea**: tre card (marea self · boa board · segnali), fattori (ore, ferie, daily), storici, privacy copy.
- Compila **La mia marea** ogni giorno nel Daily Wave — voce propria, non sostituisce la boa del board.
- Nessun confronto con colleghi.

**Admin**

- Tab **Marea di squadra**: heatmap radar, tabella surfer (marea oggi · boa · radar · stato), alert soglia, media team.
- Tab **Lascia la boa**: compila per surfer — score 1–5, `work_status`, note, tipo check-in, notifica Tide Alert.
- Tab **Storico**: per persona, date/score/note/compilato da (boa) + trend marea self.
- Tab **Lettura oceano**: AI summary su dati aggregati + benchmark interno 30gg.

**Copy / tone**

- Mai “valutazione”, “ranking”, “sei bruciato”.
- Metafore mare coerenti; azioni concrete (“mezza giornata di riva”, “programma 1:1”).
- Privacy: solo user + admin vedono dati individuali.

**Route**: `/wellbeing` — `/burnout` non esiste come pagina separata (redirect a `/wellbeing`).

**Data model**: `daily_mood_checkins` (marea self) + `wellbeing_reports` (boa) + `burnout_scores` / `burnout_score_history` (segnali).

---

### 8.9 Workflow Ops

#### Meeting Board

- **Admin**: crea meeting (titolo, data, partecipanti), agenda items, note live, action item con owner.
- **Surfer**: vede meeting a cui è invitato, contribuisce note se abilitato, vede action item proprie.

#### Polling Manager

- **Admin**: crea poll flash (domanda, opzioni, multi/single, scadenza).
- **Surfer**: vota una volta.
- **Admin**: risultati in real-time (o post-chiusura).
- Anonimo vs nominativo: flag in creazione (default nominativo per MVP interno).

---

### 8.10 Live Notification (Tide Alerts)

- In-app: bell + lista (ferie approvate, nuovo poll, meeting, doc caricato, commento admin).
- Realtime via Supabase Realtime dove utile.
- Mark as read.
- Preferenze: on/off per categoria (user).

---

### 8.11 Email / Newsletter

**MVP**

- Preferenze user: ricevi digest settimanale sì/no.
- Admin: invio email transazionali chiave (ferie approved/rejected, invite).
- Newsletter interna semplice: oggetto + body markdown → invio a lista surfer attivi (provider: Resend o Supabase Edge + SMTP).

**Fuori MVP**: editor drag-drop, segmentazione avanzata, open rate analytics.

---

## 9. Information Architecture (navigazione)

```
/login
/dashboard                    → Wave Home (summary cards)
  /profile                    → My Beach
  /leave                      → Leave Tide
  /sprints                    → Sprint Surf
  /time                       → Time Current
  /documents                  → Doc Shell
  /daily                      → Daily Wave
  /wellbeing                  → Wellbeing Buoy (surfer: mia marea | board: squadra + compila + AI)
  /ops
    /meetings                 → Meeting Board
    /polls                    → Polling Manager
  /admin/*                    → solo Board (users, projects, invites, AI bench cross-metriche)
```

Sidebar + topbar con notifiche. Ruolo determina voci e badge “Board only”.

---

## 10. Data model (alto livello Supabase)

Tabelle core (indicative):

- `profiles` (id, email, full_name, avatar_url, role, leave_balance, …)
- `leave_requests` (user_id, type, start, end, status, admin_note)
- `sprints`, `sprint_stories` (sp, status, assignee)
- `projects`, `time_entries`
- `documents` (owner_user_id, path, type, uploaded_by)
- `daily_notes` (user_id, project_id, date, content json)
- `daily_mood_checkins` (user_id, check_date, mood_score, mood_note) — La mia marea
- `wellbeing_reports` (user_id, score, notes, created_by admin)
- `meetings`, `meeting_items`
- `polls`, `poll_options`, `poll_votes`
- `notifications`
- `burnout_scores` (cached o computed view)

**RLS**: policy per `auth.uid()`; admin via `role = 'admin'`.

---

## 11. Flussi chiave (happy path)

1. **Onboarding surfer**: invite email → set password → completa profilo → land su Wave Home.
2. **Richiesta ferie**: form → pending → notifica admin → approve → saldo −n → notifica user.
3. **Daily routine**: apre Daily Wave → compila **La mia marea** (umore) → ieri / prossime 24h / ostacoli → (opz.) log time → check sprint.
4. **Admin follow-up**: feed Daily + Sprint overview (+ Meeting Board per Planning/Review).
5. **Wellbeing check**: board compila boa → notifica surfer; cron ricalcola segnali marea → surfer vede tab unica; admin heatmap + AI summary in stessa sezione.

---

## 12. Fuori scope MVP (v1.1+)

- App mobile nativa
- Sync Jira/Linear/Slack bi-direzionale
- Chat interna
- Payroll automatico
- Multi-tenant / white-label per clienti esterni
- Benchmark di mercato esterni
- Multi-lingua
- Offline-first

---

## 13. Metriche e validazione

| KPI                       | Target 60 giorni post-launch              |
| ------------------------- | ----------------------------------------- |
| DAU / surfer attivi       | ≥ 70% del team                            |
| Ferie richieste via Tide  | 100% delle richieste                      |
| Daily compilati           | ≥ 4 giorni/settimana per surfer full-time |
| Tempo medio approve ferie | < 24h lavorative                          |
| Admin usa Wellbeing Buoy  | ≥ 1 review team/settimana                 |

---

## 14. Rischi e mitigazioni

| Rischo                          | Mitigazione                                                                           |
| ------------------------------- | ------------------------------------------------------------------------------------- |
| Scope creep (troppe feature AI) | AI solo su Wellbeing Buoy (tab Lettura oceano) + 1 benchmark interno in `/admin`      |
| Privacy wellbeing               | RLS stretta, no confronto peer per user, copy leggero non punitivo, sezione unificata |
| Adozione bassa                  | Daily + ferie come “must open”; onboarding guidato 5 min                              |
| Documenti sensibili             | Storage privato, signed URL, solo owner + admin                                       |

---

## 15. Deliverable tecnici MVP

1. Repo Next.js + shadcn theme “ocean”
2. Schema Supabase + RLS + seed demo
3. Auth + layout dashboard role-aware
4. Moduli: Profile, Leave, Sprint, Time, Docs, Daily, Wellbeing Buoy, Meeting, Poll, Notifications
5. Segnali marea rule-based + endpoint AI summary (tab Wellbeing Buoy, admin)
6. Email transazionali base
7. README + env example + checklist deploy (Vercel + Supabase)

---

## 16. Roadmap suggerita (4 sprint da 1 settimana)

| Sprint                 | Focus                                                               |
| ---------------------- | ------------------------------------------------------------------- |
| **S1 — Foundation**    | Auth, profiles, layout, design tokens onda, notifiche shell         |
| **S2 — Core HR**       | Ferie, documenti, time tracker                                      |
| **S3 — Agile + Daily** | Sprint manager, daily notepad, meeting board                        |
| **S4 — Ops + Insight** | Poll, Wellbeing Buoy (boa + segnali + AI), email, polish admin dash |

---

## 17. Open decisions (da chiudere in board)

1. Saldo ferie: chi imposta il policy annuale (giorni default)?
2. Daily: un notepad multi-progetto o un entry per progetto?
3. Burnout: ricalcolo notturno vs on-demand?
4. Provider email (Resend vs altro)?
5. ~~Naming definitivo prodotto~~ → **Tide** (chiuso).

---
