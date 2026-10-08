# Gamification — Tide

**Sistema di progressione, XP, livelli, badge e premi · The Wave**

| Campo                  | Valore                                                       |
| ---------------------- | ------------------------------------------------------------ |
| **Prodotto**           | Tide                                                         |
| **Versione documento** | 1.0 — Spec gamification                                      |
| **Stato**              | Draft per validazione board                                  |
| **Owner**              | The Wave design / product                                    |
| **Data**               | Luglio 2026                                                  |
| **Riferimenti**        | [PRD](prd-tide-mvp.md) · [DSM](dsm-tide-instructions.md) · [Wireframe](wireframe-page-by-page.md) · [Schema](schema-supabase.md) |

---

## 1. Senso generale

### 1.1 Perché esiste

Tide non è un gioco. È la dashboard operativa della spiaggia Wave — ferie, sprint, time, daily, wellbeing, poll, meeting. La gamification esiste per **rendere più naturale e piacevole** ciò che il team deve già fare: i rituali che proteggono l’_isola felice_.

Il sistema risponde a una domanda semplice:

> _«Ho fatto oggi le cose che tengono il team allineato e in salute?»_

Non:

> _«Chi ha lavorato di più?»_

### 1.2 Filosofia

| Principio | Cosa significa in pratica |
| :-------- | :------------------------ |
| **Ricompensa abitudini, non performance HR** | XP per aver completato un rituale (daily, marea, time log), non per ore lavorate o SP chiusi in eccesso |
| **Dati seri, ricompense leggere** | Metriche operative (SP, ore, ferie) restano oggettive; XP e badge sono un layer motivazionale sopra |
| **Mai ranking tra surfer** | Nessuna leaderboard pubblica, nessun confronto individuale in Wellbeing Buoy |
| **Wellbeing non punitivo** | Compilare la marea dà XP; uno score basso non toglie punti né rompe lo streak |
| **Una sola valuta visibile: XP** | Gli Story Points restano unità di lavoro sprint, separati dalla progressione personale |
| **Coach amichevole, non arcade** | Copy incoraggiante (“Continua così!”, “Livello 4 raggiunto”) — tono DSM Tide, icone Lucide, niente emoji in UI |

### 1.3 Cosa NON è

- Un sistema di valutazione delle persone
- Un modo per misurare produttività o confrontare colleghi
- Un sostituto di feedback umano, boa wellbeing o 1:1
- Un incentivo a “farmare” ore o SP oltre il necessario

### 1.4 Dove vive in prodotto

| Superficie | Ruolo gamification |
| :--------- | :----------------- |
| **Wave Home** (`/dashboard`) | LevelBadge, StreakPill, GameStat XP, griglia badge, CTA “Prossimo passo” |
| **Daily Wave** | Eventi XP primari (daily + marea) |
| **Time Current** | XP giornaliero time log (cap) |
| **Sprint Surf** | Bonus sprint, badge craft |
| **Poll / Meeting** | XP partecipazione |
| **My Beach** (profilo) | Badge earned, storico XP, premi sbloccati |
| **Board** | Solo metriche aggregate adozione — mai classifica individuale XP |

Componenti DSM: `Hero`, `LevelBadge`, `StreakPill`, `GameStat`, `Badge`, `ProgressBar`, `Toast`.

### 1.5 Tre layer distinti

```
┌─────────────────────────────────────────────────────────┐
│  OPERATIVO     SP · ore · ferie · marea · segnali       │  ← dati lavoro / wellbeing
├─────────────────────────────────────────────────────────┤
│  PROGRESSIONE  XP cumulativi · Livello · Streak         │  ← meta-progressione personale
├─────────────────────────────────────────────────────────┤
│  ACHIEVEMENT   Badge earned / locked                    │  ← milestone e momenti
└─────────────────────────────────────────────────────────┘
```

---

## 2. Livelli e curva XP

### 2.1 Naming livelli (metafora onda)

Ogni livello ha un nome mare/surf coerente con il tone Tide. Il numero è la progressione tecnica; il nome è il copy in UI.

| Livello | Nome | XP cumulativi | Gap dal livello precedente | Badge livello (sblocco automatico) |
| :-----: | :--- | :-----------: | :------------------------: | :--------------------------------- |
| **1** | Schiuma | 0 | — | — (livello iniziale) |
| **2** | Ripple | 100 | **+100** | `ripple-rider` |
| **3** | Swell | 250 | **+150** | `swell-surfer` |
| **4** | Crest | 450 | **+200** | `crest-catcher` |
| **5** | Break | 700 | **+250** | `break-maker` |
| **6** | Outer Reef | 1 000 | **+300** | `reef-navigator` |
| **7** | Channel | 1 350 | **+350** | `channel-rider` |
| **8** | Offshore | 1 750 | **+400** | `offshore-pro` |
| **9** | Pipeline | 2 200 | **+450** | `pipeline-master` |
| **10** | Legend | 2 700 | **+500** | `wave-legend` |

**Oltre il livello 10:** per MVP non si prevede cap. In fase 2 si può introdurre “Prestige” (reset cosmetico + anello profilo) senza azzerare badge.

### 2.2 Ritmo atteso

Con un surfer “regolare” (daily 4–5 gg/settimana, marea, time log, qualche poll):

| Periodo | XP indicativi | Livello tipico |
| :------ | :------------ | :------------- |
| Prima settimana | ~120–180 | 2 (Ripple) |
| Primo mese | ~400–550 | 3–4 (Swell → Crest) |
| Tre mesi | ~900–1 200 | 5–6 (Break → Outer Reef) |
| Sei mesi | ~1 500–2 000 | 7–8 (Channel → Offshore) |
| Un anno | ~2 500+ | 9–10 (Pipeline → Legend) |

La curva è **lenta**: raggiungere Legend deve essere un traguardo raro, non una settimana di grind.

### 2.3 UI livello in Wave Home

```
┌─ Hero / Header gamification ─────────────────────────────┐
│  [LevelBadge 4]   Crest · Livello 4                        │
│  340 XP totali                                             │
│  ████████░░░░  110 / 250 XP al livello 5                   │
│  [StreakPill: 5 giorni di fila]                            │
└────────────────────────────────────────────────────────────┘
```

- `LevelBadge`: numero livello + animazione `level-pop` al level-up
- `ProgressBar`: XP nel range corrente (es. 450→700 per Crest→Break)
- Copy sotto barra: `«{gap} XP al livello {n+1}»`

---

## 3. Come si guadagnano XP

### 3.1 Regole globali

1. **Idempotenza:** ogni evento XP ha una chiave univoca per utente + periodo (es. `daily_complete:2026-07-29`). Mai doppio accredito.
2. **Cap giornaliero soft:** max **50 XP/giorno** da azioni ripetibili (es. più to-do chiusi non sommano all’infinito).
3. **Solo azioni verificabili:** il server calcola XP da record reali (daily salvato, time entry, voto poll), non da input client.
4. **Weekend/festivi:** streak e bonus settimanali usano il **calendario lavorativo Wave** (lun–ven, esclusi festivi IT configurabili).
5. **Board:** le azioni admin (approvare ferie, compilare boa) **non** generano XP — evita gaming del ruolo.

### 3.2 Loop giornaliero (core)

| Evento | Codice evento | XP | Condizione | Cap |
| :----- | :------------ | :-: | :--------- | :-- |
| Daily Wave completato | `daily_complete` | **+15** | Tutti e 3 i campi Scrum compilati e salvati | 1×/giorno |
| La mia marea compilata | `mood_checkin` | **+5** | Score 1–5 salvato (nel daily o standalone) | 1×/giorno |
| Time log giornaliero | `time_log` | **+10** | ≥ 1 time entry valida nel giorno | 1×/giorno |
| Avanzamento lavoro | `work_progress` | **+5** | Story → done, to-do workspace chiuso, o SP aggiornato | max **+10**/giorno (2 eventi) |

**Giornata “completa” tipica:** 15 + 5 + 10 + 5 = **35 XP** (o 40 con secondo avanzamento).

> Il daily è l’evento **primario** dello streak. Time log e marea sono bonus complementari.

### 3.3 Loop settimanale

| Evento | Codice evento | XP | Condizione |
| :----- | :------------ | :-: | :--------- |
| Settimana daily | `weekly_daily_4of5` | **+40** | Daily completato ≥ 4 giorni lavorativi nella settimana |
| Settimana time | `weekly_time_complete` | **+25** | Time log presente ogni giorno lavorativo della settimana |
| Poll risposto | `poll_vote` | **+8** | Voto registrato prima della scadenza |
| Meeting confermato | `meeting_attend` | **+5** | Presenza confermata o partecipazione registrata |

Bonus settimanali accreditati **lunedì mattina** (cron) per la settimana precedente.

### 3.4 Loop sprint (10 giorni lavorativi)

| Evento | Codice evento | XP | Condizione |
| :----- | :------------ | :-: | :--------- |
| Sprint daily streak | `sprint_daily_8of10` | **+50** | Daily completato ≥ 8/10 giorni dello sprint attivo |
| Sprint chiuso | `sprint_close` | **+30** | SP done aggiornati su tutte le story assegnate a fine sprint |
| Ostacolo segnalato | `blocker_logged` | **+5** | Campo “ostacoli” compilato nel daily (1×/sprint) |
| Ostacolo risolto | `blocker_resolved` | **+10** | Ostacolo marcato risolto (board o self, 1×/sprint) |

### 3.5 Milestone una tantum (onboarding e primi passi)

| Evento | Codice evento | XP | Condizione |
| :----- | :------------ | :-: | :--------- |
| Profilo completo | `profile_complete` | **+20** | Nome, avatar, bio, telefono o slack compilati |
| Primo daily | `first_daily` | **+25** | Primo daily Wave salvato in assoluto |
| Primo time log | `first_time` | **+20** | Prima time entry |
| Prima richiesta ferie | `first_leave` | **+15** | Prima richiesta Leave Tide inviata |
| Primo documento letto | `first_doc` | **+10** | Download o apertura doc personale |
| Primo voto poll | `first_poll` | **+10** | Primo voto in assoluto |

### 3.6 Streak

**Definizione:** giorni lavorativi consecutivi con `daily_complete` salvato entro la deadline configurabile (default: fine giornata, es. 18:00).

| Regola | Dettaglio |
| :----- | :-------- |
| Conteggio | Solo giorni lavorativi; sab/dom e festivi non incrementano né rompono |
| Visualizzazione | `StreakPill` in header Wave Home |
| Milestone streak | Badge dedicati (vedi §4.2), non XP extra oltre il daily base |
| Freeze (fase 2) | 1 “salva-streak” / mese spendibile dal negozio premi (§5) |

**Cosa NON rompe lo streak:** marea bassa, ferie approvate, assenza time log, weekend.

### 3.7 Cosa NON dà XP

| Azione | Motivo |
| :----- | :----- |
| Ore lavorate oltre il minimo giornaliero | Anti grind / anti burnout |
| SP chiusi in quantità | Metrica operativa, non abitudine |
| Marea score alto vs basso | Wellbeing non competitivo |
| Approvare ferie (board) | Ruolo admin |
| Compilare boa per altri (board) | Azione di cura, non gioco |
| Login ripetuto nella stessa giornata | Nessun incentivo a “aprire l’app” a vuoto |

---

## 4. Badge

### 4.1 Tipologie

| Famiglia | Scopo | Esempio |
| :------- | :---- | :------ |
| **Livello** | Sblocco automatico al raggiungimento di un livello | `crest-catcher` al livello 4 |
| **Rituale** | Abitudini daily, marea, time, streak | `streak-7`, `marea-regular` |
| **Craft** | Sprint, SP, workspace, ostacoli | `sprint-closer`, `unblocker` |
| **Isola felice** | Team, feedback, partecipazione | `poll-voice`, `meeting-crew` |
| **Segreto** | Easter egg rari (opzionale fase 2) | `midnight-daily` |

Stati UI: **earned** (colorato, icona Lucide) · **locked** (silhouette, desc condizione).

### 4.2 Badge per livello (sblocco automatico)

| Livello raggiunto | Slug badge | Nome UI | Descrizione | Icona Lucide |
| :---------------- | :--------- | :------ | :---------- | :----------- |
| 2 — Ripple | `ripple-rider` | Ripple Rider | Hai raggiunto il livello Ripple | `Waves` |
| 3 — Swell | `swell-surfer` | Swell Surfer | Hai raggiunto il livello Swell | `Wind` |
| 4 — Crest | `crest-catcher` | Crest Catcher | Hai raggiunto il livello Crest | `Mountain` |
| 5 — Break | `break-maker` | Break Maker | Hai raggiunto il livello Break | `Zap` |
| 6 — Outer Reef | `reef-navigator` | Reef Navigator | Hai raggiunto il livello Outer Reef | `Compass` |
| 7 — Channel | `channel-rider` | Channel Rider | Hai raggiunto il livello Channel | `Navigation` |
| 8 — Offshore | `offshore-pro` | Offshore Pro | Hai raggiunto il livello Offshore | `Anchor` |
| 9 — Pipeline | `pipeline-master` | Pipeline Master | Hai raggiunto il livello Pipeline | `Activity` |
| 10 — Legend | `wave-legend` | Wave Legend | Hai raggiunto il livello Legend | `Trophy` |

Al level-up: toast + animazione badge + eventuale notifica Tide Alert.

### 4.3 Badge rituali (non legati al livello)

| Slug | Nome UI | Condizione | Icona |
| :--- | :------ | :--------- | :---- |
| `first-daily` | Prima onda | Primo daily salvato | `Sunrise` |
| `streak-3` | Tre giorni | Streak daily ≥ 3 | `Flame` |
| `streak-7` | Settimana intera | Streak daily ≥ 7 | `Flame` |
| `streak-14` | Due settimane | Streak daily ≥ 14 | `Flame` |
| `streak-30` | Mese di marea | Streak daily ≥ 30 | `Flame` |
| `marea-20` | Marea regolare | 20 check-in marea | `Heart` |
| `marea-60` | Ascolto costante | 60 check-in marea | `Heart` |
| `time-keeper-10` | Time keeper | 10 giorni con time log | `Clock` |
| `time-keeper-50` | Orologio solare | 50 giorni con time log | `Clock` |
| `daily-100` | Cento onde | 100 daily completati | `BookOpen` |

### 4.4 Badge craft (sprint e lavoro)

| Slug | Nome UI | Condizione | Icona |
| :--- | :------ | :--------- | :---- |
| `profile-complete` | Spiaggia pronta | Profilo completo | `User` |
| `first-leave` | Prima pausa | Prima richiesta ferie | `Palmtree` |
| `sprint-first` | Primo surf | Partecipazione a 1 sprint completo | `Flag` |
| `sprint-5` | Veterano sprint | 5 sprint completati | `Flag` |
| `sprint-closer` | Sprint closer | 3 sprint chiusi con SP done aggiornati | `CheckCircle` |
| `unblocker` | Unblocker | 5 ostacoli segnalati e risolti | `Unlock` |
| `sp-50` | Mezzo cento | 50 SP totali lavorati (lifetime) | `Star` |
| `sp-100` | Centurione | 100 SP totali lavorati (lifetime) | `Star` |

### 4.5 Badge isola felice (team e feedback)

| Slug | Nome UI | Condizione | Icona |
| :--- | :------ | :--------- | :---- |
| `poll-voice` | Voce in poll | 10 voti poll | `Vote` |
| `meeting-crew` | Meeting crew | 10 meeting confermati | `Users` |
| `first-doc` | Doc shell | Primo documento aperto | `FileText` |
| `feedback-giver` | Feedback wave | 5 poll con commento opzionale | `MessageCircle` |

### 4.6 Griglia in Wave Home

- Mostra **max 6 badge**: ultimi earned + prossimi 2 locked più vicini al completamento
- Link “Vedi tutti” → tab Badge in My Beach
- Counter: `Obiettivi · 12/28`

---

## 5. Spesa XP e premi

### 5.1 Modello economico

Gli XP hanno **due funzioni**:

1. **Progressione (permanente):** XP cumulativi determinano il livello — **non si spendono** per salire.
2. **Valuta spendibile (Tide Coins):** una frazione degli XP guadagnati si converte in **Tide Coins** spendibili nel negozio premi.

```
XP guadagnati (lifetime)  →  livello (sempre crescente)
XP guadagnati (periodo)   →  Tide Coins (spendibili)
```

**Conversione (proposta MVP):**

| Regola | Valore |
| :----- | :----- |
| Ogni **10 XP** guadagnati | **+1 Tide Coin** |
| Accredito | Immediato all’evento XP |
| Scadenza coins | Nessuna (MVP) |
| Cap saldo coins | 500 (anti accumulo infinito; overflow → donazione team, fase 2) |

> In UI si mostra sempre **XP totali** (progressione) e, in My Beach / negozio, il saldo **Tide Coins**.

### 5.2 Negozio premi — categorie

I premi sono **leggeri, culturali o cosmetici**. Mai impatto su ferie, stipendio, valutazione o priorità di lavoro reale.

#### A. Cosmetici profilo (sempre disponibili)

| Premio | Costo (coins) | Effetto | Livello minimo |
| :----- | :------------ | :------ | :------------- |
| Anello avatar sabbia | 15 | Ring color `sand` su Avatar | 2 |
| Anello avatar blu oceano | 25 | Ring color `blue` su Avatar | 3 |
| Anello avatar oro onda | 50 | Ring animato subtle | 5 |
| Sfondo profilo “Schiuma” | 20 | Pattern leggero in My Beach | 2 |
| Sfondo profilo “Tramonto” | 40 | Gradiente cream/sand | 4 |
| Titolo profilo custom | 30 | Sottotitolo sotto nome (max 24 char, moderato) | 3 |

#### B. Utilità soft (limitate, non pay-to-win)

| Premio | Costo (coins) | Effetto | Limite |
| :----- | :------------ | :------ | :----- |
| Salva-streak | 40 | Protegge streak 1 giorno lavorativo saltato | 1×/mese |
| Estensione storico daily | 30 | Vista storico daily da 30 → 90 giorni | Permanente |
| Tema profilo extra | 25 | Sblocca palette `ocean_light` in preferenze | Permanente |
| Digest personalizzato | 20 | Aggiunge sezione “le tue onde” al digest settimanale | Permanente |

#### C. Premi culturali / team (stock limitato o stagionale)

| Premio | Costo (coins) | Effetto | Note |
| :----- | :------------ | :------ | :--- |
| Shoutout in digest | 60 | Menzione nel digest settimanale Wave (“Onda della settimana”) | Max 3/settimana totali team; approvazione board |
| Caffè con il board | 100 | Slot 15 min coffee chat con founder/lead | 2 slot/mese; prenotazione calendario |
| Adesivo Tide / merch | 80 | Richiesta adesivo fisico o sticker pack digitale | Stock fisico gestito ops |
| Scegli prossimo poll flash | 70 | Propone tema poll alla prossima riunione ops | 1×/mese per team |

#### D. Sblocchi per livello (gratuiti al level-up)

Oltre al badge, ogni livello sblocca **automaticamente** un perk senza spendere coins:

| Livello | Perk gratuito |
| :------ | :------------ |
| 2 — Ripple | Storico XP ultimi 30 giorni in My Beach |
| 3 — Swell | 1 slot badge “in evidenza” sul profilo |
| 4 — Crest | Filtro extra nello storico daily |
| 5 — Break | Accesso a 1 tema profilo premium |
| 6 — Outer Reef | Badge animato (earned pulse) |
| 7 — Channel | Estensione bio profilo (160 → 240 char) |
| 8 — Offshore | 2 slot badge in evidenza |
| 9 — Pipeline | Invito early a feature beta Tide |
| 10 — Legend | Badge Legend esclusivo + anello profilo Legend permanente |

### 5.3 Cosa NON si può comprare

| Escluso | Motivo |
| :------ | :----- |
| Giorni ferie extra | Troppo HR / compliance |
| Salto code approvazioni | Integrità processi |
| XP / livelli | Progressione solo meritocratica su azioni reali |
| Visibilità forzata su colleghi | Privacy e cultura |
| Voti poll extra | Integrità sondaggi |

### 5.4 Flusso acquisto

```
My Beach → tab "Premi"
  ├── Saldo Tide Coins
  ├── Catalogo (filtro: Cosmetici | Utilità | Team)
  ├── Premi già posseduti
  └── Storico transazioni

Acquisto → ConfirmDialog → addebito coins → applicazione perk → Toast conferma
```

---

## 6. Wave Home — composizione UI

### 6.1 Layout consigliato (MVP)

La home resta **operativa**; la gamification è cornice motivazionale, non schermata arcade.

```
┌─ Header ────────────────────────────────────────────────────┐
│ Ciao Luca · "La marea di oggi è calma"                      │
│ [LevelBadge 4] [StreakPill 5 gg]                            │
│ CTA primarie: [Scrivi daily] [Logga ore]                    │
└─────────────────────────────────────────────────────────────┘

┌─ Hero sprint (operativo) ─────────┐ ┌─ Prossimo passo ────────┐
│ Sprint 07 · SP 18.5/28           │ │ "Manca il daily · +15 XP"│
│ ProgressBar SP                   │ │ [Vai al daily]           │
└──────────────────────────────────┘ └─────────────────────────┘

┌─ GameStat ×4 ───────────────────────────────────────────────┐
│ XP totali | Streak | Daily settimana | Badge 12/28          │
└─────────────────────────────────────────────────────────────┘

┌─ Operativo (PRD) ───────────────────────────────────────────┐
│ Ferie saldo · Ore settimana · Preview daily · Prossime onde │
└─────────────────────────────────────────────────────────────┘

┌─ Obiettivi (badge grid, max 6) ─────────────────────────────┐
│ earned + locked prossimi                                    │
└─────────────────────────────────────────────────────────────┘
```

**Regola:** un solo hero blu dominante — sprint SP in hero; LevelBadge + StreakPill in header (come prototipo `app/page.tsx` e Storypoints Workspace).

### 6.2 Feedback in tempo reale

| Evento | Feedback UI |
| :----- | :------------ |
| Salva daily | Toast `Daily salvato · +15 XP · +2 coins` |
| Marea | Toast aggregato o silenzioso `+5 XP` |
| Level-up | Toast + `level-pop` su LevelBadge + modale breve |
| Badge unlock | Badge passa locked → earned + Toast |
| Acquisto premio | ConfirmDialog → Toast `Premio attivato` |
| Cap giornaliero XP | Nessun XP extra; UI non insiste |

---

## 7. Board e metriche aggregate

Il board **non** vede classifiche XP individuali.

| Metrica (aggregata) | Uso |
| :------------------ | :-- |
| % team con daily oggi | Adozione rituali |
| Streak medio team | Salute abitudini (anonimo) |
| Badge sbloccati / surfer attivi | Engagement tool |
| Tide Coins spesi / mese | Interesse negozio premi |

Vista opzionale in Ops Board: “Salute rituali” — grafico adozione, non ranking nomi.

---

## 8. Modello dati (bozza)

Estensione proposta allo [schema Supabase](schema-supabase.md).

### 8.1 Tabelle

```sql
-- Estensione profiles
alter table public.profiles add column if not exists xp_total integer not null default 0;
alter table public.profiles add column if not exists level integer not null default 1;
alter table public.profiles add column if not exists tide_coins integer not null default 0;
alter table public.profiles add column if not exists streak_current integer not null default 0;
alter table public.profiles add column if not exists streak_best integer not null default 0;
alter table public.profiles add column if not exists streak_updated_on date;

-- Eventi XP (audit + idempotenza)
create table public.xp_events (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  event_type text not null,
  idempotency_key text not null,
  xp_amount integer not null,
  coins_amount integer not null default 0,
  source_type text,
  source_id uuid,
  created_at timestamptz not null default now(),
  unique (user_id, idempotency_key)
);

-- Catalogo badge
create table public.badges (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  description text not null,
  icon text not null,
  family text not null check (family in ('level','ritual','craft','team','secret')),
  level_required integer,
  sort_order integer not null default 0
);

-- Badge utente
create table public.user_badges (
  user_id uuid not null references public.profiles(id) on delete cascade,
  badge_id uuid not null references public.badges(id) on delete cascade,
  earned_at timestamptz not null default now(),
  primary key (user_id, badge_id)
);

-- Catalogo premi
create table public.rewards (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  description text not null,
  cost_coins integer not null,
  category text not null check (category in ('cosmetic','utility','team')),
  level_required integer not null default 1,
  max_per_user integer,
  max_per_month integer,
  is_active boolean not null default true
);

-- Premi acquistati
create table public.user_rewards (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  reward_id uuid not null references public.rewards(id),
  purchased_at timestamptz not null default now(),
  metadata jsonb
);
```

### 8.2 Logica server

- Funzione `award_xp(user_id, event_type, idempotency_key, source?)` → insert evento, update `xp_total`, ricalcola `level`, accredita coins, valuta badge
- Cron settimanale per bonus `weekly_*`
- RLS: utente legge solo i propri eventi; board legge solo aggregate (view materializzata)

---

## 9. Roadmap implementazione

| Fase | Scope | Priorità |
| :--- | :---- | :------- |
| **MVP** | XP daily + marea + time (cap); livelli 1–10; streak; badge rituali core; LevelBadge + StreakPill + GameStat in Wave Home; toast XP | P0 |
| **MVP+** | Bonus settimanali; badge craft; griglia obiettivi; tab Badge in My Beach | P1 |
| **v1.1** | Tide Coins + negozio cosmetici; salva-streak; perk level-up gratuiti | P1 |
| **v1.2** | Premi team (shoutout, coffee); metriche aggregate board; badge segreti | P2 |
| **Fuori scope** | Leaderboard, shop ferie, XP su ore brute, penalità wellbeing | — |

---

## 10. Copy e tone (esempi)

| Contesto | Copy |
| :------- | :--- |
| Level-up | «Livello 4 · Crest — continua così!» |
| Streak | «5 giorni di fila» |
| Prossimo passo | «Manca il daily di oggi · +15 XP» |
| Badge locked | «7 giorni consecutivi» |
| Badge earned | «Streak master» |
| Negozio | «Spendi le tue Tide Coins» |
| Empty coins | «Guadagna XP per ottenere coins» |
| Wellbeing | Mai «Hai perso punti per umore basso» |

---

## 11. Decisioni aperte (validazione board)

| # | Domanda | Opzioni |
| :- | :------ | :------ |
| 1 | Conversione XP → coins | 10:1 (proposta) vs 5:1 (più generoso) |
| 2 | Deadline daily per streak | Fine giornata vs mezzogiorno |
| 3 | Premi fisici (adesivi) | Ops gestisce stock vs solo digitali in MVP |
| 4 | Cap coins 500 | Mantenere vs illimitato |
| 5 | Livelli oltre 10 | Prestige vs cap a Legend |

---

## 12. Riferimenti incrociati

| Documento | Sezione rilevante |
| :-------- | :---------------- |
| [PRD](prd-tide-mvp.md) | §8.7 Daily Wave · §8.8 Wellbeing Buoy · Wave Home |
| [DSM](dsm-tide-instructions.md) | §8.5 Dati e gamification · §10.1 regola 6 |
| [Wireframe](wireframe-page-by-page.md) | §1 Wave Home |
| [Schema](schema-supabase.md) | `profiles`, eventi futuri §8 qui |
| Storypoints UI kit | `resources/dsm/The Wave Design System/ui_kits/storypoints/` |

---

_Ultimo aggiornamento: Luglio 2026 · Owner: The Wave design/dev_
