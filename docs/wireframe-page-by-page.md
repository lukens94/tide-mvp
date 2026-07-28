# Tide — Wireframe testuale page-by-page

Tone leggero, layout desktop-first, componenti **shadcn/ui** mappati per ogni schermata.[^1][^2]

---

## Design system shell (globale)

### Layout root autenticato

```
┌─────────────────────────────────────────────────────────────┐
│ Sidebar (collapsible)     │  Topbar                         │
│                           │  Breadcrumb · Search · Bell · 👤 │
│  🌊 Tide             ├─────────────────────────────────┤
│  ─────────────            │                                 │
│  Wave Home                │         MAIN CONTENT            │
│  My Beach                 │         (ScrollArea)            │
│  Leave Tide               │                                 │
│  Sprint Surf              │                                 │
│  Time Current             │                                 │
│  Doc Shell                │                                 │
│  Daily Wave               │                                 │
│  Wellbeing Buoy           │                                 │
│  Ops ▸ Meetings / Polls   │                                 │
│  ─────────────            │                                 │
│  [Admin only] Users…      │                                 │
│                           │                                 │
│  Avatar + nome + role     │                                 │
└─────────────────────────────────────────────────────────────┘
```

**shadcn**

- `Sidebar` + `SidebarProvider` + `SidebarInset` + `SidebarTrigger`
- `SidebarMenu`, `SidebarMenuItem`, `SidebarMenuButton`, `SidebarGroup`, `SidebarSeparator`
- Topbar: `Breadcrumb`, `Button` (ghost icon), `Input` (search opzionale), `DropdownMenu` (avatar), `Badge` su bell
- Notifiche: `Popover` o `Sheet` laterale + lista `ScrollArea`
- Feedback: `Sonner` (toast)
- Loading: `Skeleton` su card/table
- Empty: pattern custom su `Card` + copy onda (“Nessuna onda oggi…”)

**Ruoli**

- Voci Admin nascoste se `role !== 'admin'` (non solo CSS: anche route guard).
- Badge `Board` sull’avatar admin.

---

## 0. Auth

### 0.1 Login — `/login`

```
┌──────────────────────────────────────┐
│           🌊 Tide               │
│     “Entra in Tide”                  │
│                                      │
│  Email     [ Input                 ] │
│  Password  [ Input type=password   ] │
│            [ ] Ricordami  Switch     │
│                                      │
│  [ Button primary: Surf in → ]       │
│  Link: Password dimenticata?         │
│                                      │
│  Separator “oppure”                  │
│  [ Button outline: Magic link ]      │
└──────────────────────────────────────┘
```

**shadcn:** `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `Form` + `Field`, `Input`, `Label`, `Button`, `Checkbox` o `Switch`, `Separator`, `Alert` (errori).

**UX:** copy leggero; errori chiari; focus su email; loading `Spinner` sul button.

---

### 0.2 Reset password — `/reset-password`

```
Card centrata
  “Recupera l’accesso”
  Input email
  Button “Invia link”
  Link “Torna al login”
```

**shadcn:** stessi di login + `Alert` success.

---

### 0.3 Invite / first access — `/invite?token=…`

```
Card
  “Benvenuto a bordo, surfer”
  Nome (readonly o edit)
  Password + Confirm password
  Button “Attiva account”
```

**shadcn:** `Card`, `Form`, `Input`, `Button`, `Progress` opzionale (step 1/1).

---

## 1. Wave Home — `/dashboard`

Home personalizzata: snapshot della giornata.

```
┌─ Header ──────────────────────────────────────────────────┐
│ Ciao Luca 👋  “La marea di oggi è calma”                  │
│ [Button: Scrivi daily]  [Button outline: Richiedi ferie]  │
└───────────────────────────────────────────────────────────┘

┌ Card ┐ ┌ Card ┐ ┌ Card ┐ ┌ Card ┐
│Ferie │ │Sprint│ │Ore   │ │Burn- │
│saldo │ │SP    │ │settim│ │out   │
│ 12g  │ │ 8/21 │ │ 32h  │ │ 😊   │
└──────┘ └──────┘ └──────┘ └──────┘

┌───────────── 2 col ─────────────────┐
│ Card: Daily di oggi (preview)       │
│   Textarea readonly / link “Apri”    │
│                                     │
│ Card: Prossime onde                 │
│   · Meeting 15:00                   │
│   · Poll aperto “Standup remote?”   │
│   · Ferie pending (admin badge)     │
└─────────────────────────────────────┘

Admin only (sotto o seconda riga):
┌ Card Team Tide ─────────────────────┐
│ Segnali marea · media boa │
│ mini Chart + link “Vedi board”      │
└─────────────────────────────────────┘
```

**shadcn:** `Card`, `Badge`, `Button`, `Avatar`, `Progress` (SP sprint), `Chart` (sparkline ore), `HoverCard` su segnali marea, `Separator`, `Skeleton` first load.

**Concetto:** una sola scroll, max 5–6 azioni primarie. Niente dump di tabelle.

---

## 2. My Beach (Profilo) — `/profile`

```
Tabs: [ Profilo | Preferenze | Sicurezza ]

Tab Profilo
┌ Avatar ──────────┐  ┌ Form ─────────────────────────┐
│  [Avatar large]  │  │ Nome Cognome                  │
│  Button “Cambia” │  │ Bio (Textarea max 160)        │
│                  │  │ Telefono · Slack handle       │
└──────────────────┘  │ Ruolo (Badge readonly)        │
                      │ Data ingresso (readonly)      │
                      │ [Salva onda]                  │
                      └───────────────────────────────┘

Tab Preferenze
  Switch: Digest email settimanale
  Switch: Notifiche ferie / poll / meeting / docs
  Select: Tema (System / Light / Ocean dark)

Tab Sicurezza
  Button “Cambia password” → Dialog
```

**shadcn:** `Tabs`, `Avatar`, `Form`, `Input`, `Textarea`, `Label`, `Switch`, `Select`, `Button`, `Dialog` (password), `Badge`, `Separator`.

**Admin su altro user** (`/admin/users/[id]`): stessi campi readonly + `Select` role + `Switch` active.

---

## 3. Leave Tide (Ferie) — `/leave`

### Surfer

```
┌ Stat cards ─────────────────────────────┐
│ Saldo ferie 12g │ Permessi 3g │ Pending 1│
└─────────────────────────────────────────┘

[ Button: Nuova richiesta ] → Dialog/Sheet

Tabs: [ Le mie richieste | Calendario ]

Table richieste
| Tipo | Dal | Al | Giorni | Stato Badge | Note |
| Ferie| …  | … | 5      | pending     | …   |

Calendario: Calendar month con range highlight
```

**Dialog “Nuova richiesta”**

```
Select: Ferie | Permesso
Date range: DatePicker (from–to)
Radio: Intera | Mezza (mattina/pomeriggio)
Textarea: Note
Button: Invia sulla cresta
```

**shadcn:** `Card`, `Tabs`, `Table` o `Data Table`, `Badge` (pending/approved/rejected), `Dialog` o `Sheet`, `Select`, `Calendar` + `Popover` (date range), `RadioGroup`, `Textarea`, `Button`, `AlertDialog` (annulla richiesta pending).

### Admin — stessa route con vista ampliata o `/leave/admin`

```
Tabs: [ Inbox pending | Team calendar | Saldi ]

Inbox: Table + azioni Approve / Reject
  → AlertDialog reject con Textarea motivo

Team calendar: Calendar + Avatar stack per giorno
Saldi: Table user · balance · Button “Aggiusta saldo” Dialog
```

**shadcn extra:** `AlertDialog`, `Avatar` group, `DropdownMenu` (azioni riga), `Tooltip`.

---

## 4. Sprint Surf — `/sprints`

Default Wave: sprint **10 gg lavorativi**, avvio tipico 1°/3° lunedì del mese; eventi Planning · Daily · Review.

### Lista sprint

```
Header: “Sprint Surf”  [Admin: Nuovo sprint]

Tabs o ToggleGroup: Active | Past

Grid di Card sprint
  Nome · date · Badge “W34” · “10 gg”
  Sprint Goal (1 riga)
  Progress SP done/total
  Avatar assignees
  Click → dettaglio
```

### Dettaglio sprint — `/sprints/[id]`

```
┌ Header sprint ─────────────────────────────┐
│ Nome · Sprint Goal · date (10 gg)          │
│ Progress bar SP  ·  Chart burndown mini    │
│ Link: Planning · Review (Meeting Board)    │
└────────────────────────────────────────────┘

Board colonne (Kanban semplice) o Table:
  Todo | Doing | Done
  Card storia: titolo, Badge SP, Avatar assignee
  Surfer: drag solo proprie / change status Select
  Admin: Dialog crea/edit storia
```

**Admin Dialog “Nuovo sprint”**

```
Input nome, Date range, Textarea goal
```

**Admin Dialog “Storia”**

```
Input titolo, Input number SP, Select assignee, Select status
```

**shadcn:** `Card`, `Badge`, `Progress`, `Chart` (line burndown), `Tabs`, `Table` o colonne con `ScrollArea`, `Dialog`, `Select`, `Input`, `Avatar`, `DropdownMenu`, `Tooltip`.
Kanban nativo shadcn non c’è: colonne custom + `@dnd-kit` se vuoi drag; MVP ok con `Select` status.

### Admin overview team SP

```
Table: Surfer | SP assigned | Done | %
Chart bar per persona
```

---

## 5. Time Current — `/time`

```
Header + [ Log ore ]

Card filtri: Select progetto | Date range week | Button “Questa settimana”

Vista settimanale (grid 7 giorni)
  Lun Mar Mer … Dom
  celle con ore + click per edit

Oppure Table entries
| Data | Progetto | Ore | Nota | Azioni |

Summary Card: Totale settimana · per progetto (list + Progress)
```

**Dialog / Sheet “Log ore”**

```
Select progetto T&M
DatePicker
Input number ore (step 0.5)
Textarea nota
Button Salva
```

**Admin**

```
Tabs: [ Mio log | Report team ]
Report: filtri progetto/persona/range
Table aggregata + Button Export CSV (outline)
CRUD progetti: Sheet “Progetti” Table + Dialog create
```

**shadcn:** `Select`, `Calendar`/`DatePicker`, `Table`, `Dialog`/`Sheet`, `Input`, `Textarea`, `Card`, `Tabs`, `Progress`, `Button`, `DropdownMenu`.

---

## 6. Doc Shell — `/documents`

```
Layout 2 colonne (Resizable opzionale)

Left: tree cartelle
  📁 Buste paga
  📁 Documenti personali
  📁 Contratti
  📁 Shared team

Right: lista file
  Table o grid Card
  Nome · tipo Badge · data · [Download Button]
  Preview PDF → Dialog o nuova tab
```

**Surfer:** solo download/list.
**Admin:** `Button Upload` → `Dialog` con dropzone custom + `Input type=file`, `Select` user target, `Select` tipo cartella.

**shadcn:** `Card`, `Table`, `Button`, `Badge`, `Dialog`, `Select`, `Breadcrumb` path, `ScrollArea`, `DropdownMenu` (admin: soft delete), `AlertDialog` delete, `Skeleton`.

**Concetto:** path Storage `user_id/folder/file`; signed URL al download.

---

## 7. Daily Wave — `/daily`

Il daily Wave è **scritto** e asincrono: i tre punti Scrum in Tide, senza meeting sync alle 12:30.

```
Header: “Daily Wave · Venerdì 17 lug”
[ DatePicker giorno ]  [ Button: Copia da ieri ]

┌ Card “La mia marea” (1×/giorno, prima dei progetti) ─────┐
│ Copy: “Come stai oggi? La tua voce, non la boa del board.” │
│ ToggleGroup / score-pick mood 1–5 (label mare)             │
│ Textarea opzionale: “Qualcosa da aggiungere?” (max 160)  │
│ Badge auto-save “Marea salvata · 09:15”                    │
└────────────────────────────────────────────────────────────┘

Per ogni progetto assegnato (o un unico form multi-sezione):

Card Progetto “Client X”
  Textarea “Ieri ho…”
  Textarea “Nelle prossime 24h…”
  Textarea “Ostacoli / blocchi”
  Badge auto-save “Salvato · 10:42”

Footer sticky (mobile-ish):
  [ Salva tutto ]  [ Vai a Time log ]
```

**Label marea self (1–5):** Serve una mano · Vento contrario · Marea piatta · Buona energia · Marea alta

**Storico**

```
Tabs: [ Oggi | Storico ]
Storico: lista date Collapsible → preview note + badge marea del giorno
```

**Admin — feed team**

```
Filtri: Date | Select surfer | Select progetto
Feed Card per persona:
  Avatar · nome · Badge marea oggi (es. “4 · Buona energia”)
  testo daily (clamp + “espandi”)
  utile per follow-up asincrono
```

**shadcn:** `Card`, `Textarea`, `Label`, `Badge`, `Button`, `Tabs`, `Collapsible`, `Select`, `Calendar`, `ScrollArea`, `Separator`, `Avatar`, `Tooltip`, `ToggleGroup` (marea self).

**Concetto UX:** La mia marea in cima — 5 secondi, opzionale la nota; poi i tre punti Scrum. Reminder soft se manca daily o marea del giorno.

---

## 8. Wellbeing Buoy — `/wellbeing`

Sezione unificata: **marea self** (daily) + **boa** (board) + **segnali marea** (radar). Una route — niente `/burnout` separata.

### Surfer — tab “La mia marea”

```
Alert privacy: solo tu e il board · niente ranking

┌ La mia marea (self) ────┐ ┌ La boa (board) ─────────┐ ┌ Segnali marea ─────────┐
│ Score + label oggi      │ │ Score boa + label       │ │ Score radar + label    │
│ da Daily Wave           │ │ Nota board + data       │ │ Suggerimenti (Alert)   │
│ Link “Aggiorna nel daily”│ │ work_status badge      │ │ Fattori spiegati       │
└─────────────────────────┘ └─────────────────────────┘ └────────────────────────┘

Grid fattori: Ore · Ferie · Daily · Ultima boa

Card storico marea self (timeline date / label)
Card storico boa board (timeline)

Footer: “Aggiorna la marea nel Daily Wave”

Empty marea self: “Non hai ancora detto come stai oggi — aprilo dal Daily Wave”
Empty boa: “Ancora nessuna boa dal board — ti aggiorneranno dopo il prossimo 1:1”
```

### Board — tab “Marea di squadra”

```
Card media marea team (self) + media boa + chart trend 30gg
Card segnali attivi (soglia radar, boa mancanti, cali umore oggi)

Heatmap / lista radar per surfer (Avatar · bar · badge)

Table: Surfer | Marea oggi | Boa | Radar | Stato | Ultima boa | [Lascia boa]
Alert se soglia superata o marea self ≤ 2 per 2+ giorni
```

### Board — tab “Lascia la boa”

```
Select surfer
Select tipo check-in (1:1 mensile · follow-up sprint · spot)
ToggleGroup score 1–5 con label marea
Select work_status (Onda regolare · Cresta · Mare mosso · Riposo · Bloccato)
Textarea note (prompt: cosa va bene? cosa pesa? azione?)
DatePicker
Switch “Notifica surfer (Tide Alert)”
Button “Lascia la boa”
```

### Board — tab “Storico”

```
Select surfer → Table date | boa | stato | note | compilato da
```

### Board — tab “Lettura oceano”

```
Button “Genera lettura dell’oceano”
Skeleton → summary testuale clima squadra
Benchmark interno vs media 30gg
Disclaimer privacy
```

**shadcn:** `Card`, `Chart`, `Tabs`, `Select`, `Slider`/`ToggleGroup`, `Textarea`, `Table`, `Avatar`, `Badge`, `Button`, `Alert`, `Switch`, `Skeleton`.

**Privacy copy:** niente ranking pubblico; tone “boa di salvataggio”, non valutazione HR.

**Score labels boa (1–5):** Serve una mano · Vento contrario · Marea piatta · Buona energia · Marea alta

---

## 9. Ops — Meeting Board — `/ops/meetings`

### Lista

```
[ Nuovo meeting ] Admin
Table/Cards: titolo · data · partecipanti Avatar · Badge status
```

### Dettaglio meeting — `/ops/meetings/[id]`

```
Header: titolo, data, Badge Live/Scheduled/Done

Layout Resizable 2 pannelli:
LEFT Agenda
  Checklist items (Checkbox + testo)
  Admin: add item Input + Button

RIGHT Note live
  Textarea condivisa o lista note timestamped
  Action items:
    Table: testo | owner Select | done Checkbox
```

**shadcn:** `Card`, `Checkbox`, `Input`, `Button`, `Textarea`, `Table`, `Select`, `Avatar`, `Badge`, `Resizable` (`ResizablePanelGroup`), `ScrollArea`, `Dialog` create meeting, `Calendar` datetime.

**Surfer:** vede solo meeting dove è partecipante; edit note se flag; action item proprie toggle done.

---

## 10. Ops — Polling Manager — `/ops/polls`

### Lista

```
Tabs: [ Aperti | Chiusi ]
Card poll: domanda · Badge · countdown · % voti
```

### Surfer — vota

```
Card domanda
RadioGroup o Checkbox (multi)
Button “Invia voto”
Dopo voto: risultati se policy “live” o “dopo chiusura”
```

### Admin — crea

```
Dialog/Sheet
  Input domanda
  dynamic options: Input + Button “Aggiungi opzione”
  Switch multi-choice
  Switch anonimo (default off)
  DateTime scadenza
  Button Pubblica
```

### Admin — risultati

```
Chart bar + Table opzione/voti/%
Button Chiudi poll
```

**shadcn:** `Card`, `RadioGroup`, `Checkbox`, `Dialog`, `Input`, `Switch`, `Button`, `Badge`, `Progress`, `Chart`, `Tabs`, `Alert`.

---

## 11. Live Notification — Tide Alerts

Non è una page full; è **pattern globale**.

```
Topbar Bell Button + Badge count
  ↓
Popover (desktop) / Sheet (mobile)
  Tabs: Tutte | Non lette
  Lista item:
    icon · titolo · tempo relativo · mark read
  Footer: “Segna tutte lette” · Link Preferenze
```

**Tipi:** ferie status, nuovo poll, meeting, doc caricato, daily reminder, boa aggiornata (`wellbeing_published`), alert marea squadra (`burnout_alert`, solo admin).

**shadcn:** `Popover`/`Sheet`, `Button`, `Badge`, `Tabs`, `ScrollArea`, `Separator`, `Sonner` per toast real-time.

**Page opzionale** `/notifications` con `Table` storico.

---

## 12. Admin — Users \& invites — `/admin/users`

```
Header [ Invita surfer ]
Table: Avatar | Nome | Email | Role Badge | Status | Azioni
Filtri: Input search | Select role

Dialog Invita:
  Input email
  Select role user/admin
  Button Invia invite

Dropdown riga: Cambia role · Disattiva · Apri profilo
```

**shadcn:** `Table`/`Data Table`, `Dialog`, `Input`, `Select`, `Badge`, `DropdownMenu`, `Avatar`, `AlertDialog`.

---

## 13. Admin — AI + Benchmark — `/admin/ai`

Analisi cross-metriche (boa, ore, ferie, SP). La **Lettura oceano** su segnali marea resta in Wellbeing Buoy tab admin; questa pagina è per benchmark più ampi.

```
Card “Analisi dati”
  Select range
  Multi-select metriche: boa, ore, ferie, SP
  Button “Analizza”
  Output Markdown-like in Card (prosa + bullet)
  Chart confronto periodi
```

**shadcn:** `Card`, `Select`, `Button`, `Chart`, `Skeleton`, `Alert` disclaimer.

---

## 14. Email / Newsletter — `/admin/newsletter` (admin)

```
Form
  Input oggetto
  Textarea body (markdown semplice)
  Switch “Solo chi ha digest ON”
  Button Anteprima Dialog
  Button Invia → AlertDialog conferma
Lista ultimi invii Table
```

**shadcn:** `Form`, `Input`, `Textarea`, `Switch`, `Button`, `Dialog`, `AlertDialog`, `Table`, `Badge`.

**Surfer:** solo in Preferenze profilo (`Switch` digest).

---

## Mappa rapida componenti ↔ feature

| Area           | Componenti shadcn chiave                                       |
| :------------- | :------------------------------------------------------------- |
| Shell          | Sidebar, Breadcrumb, DropdownMenu, Popover, Sonner, Skeleton   |
| Auth           | Card, Form, Input, Button, Alert                               |
| Home           | Card, Badge, Progress, Chart, Button                           |
| Profilo        | Tabs, Avatar, Form, Switch, Dialog                             |
| Ferie          | Table, Dialog, Calendar, Badge, AlertDialog                    |
| Sprint         | Card, Progress, Chart, Dialog, Select, Badge                   |
| Time           | Table, Select, DatePicker, Dialog, Tabs                        |
| Docs           | Table, Dialog, Badge, ScrollArea, DropdownMenu                 |
| Daily          | Card, Textarea, Tabs, Collapsible, Badge                       |
| Wellbeing Buoy | Slider/ToggleGroup, Chart, Table, Tabs, Alert, Badge, Skeleton |
| Meetings       | Resizable, Checkbox, Table, Textarea                           |
| Polls          | RadioGroup, Dialog, Chart, Progress, Switch                    |
| Admin users    | Data Table, Dialog, Select, Badge                              |
| Newsletter     | Form, Textarea, AlertDialog, Table                             |

---

## Flusso navigazione tipico (giornata surfer)

1. Login → **Wave Home** (saldo, sprint, CTA daily)
2. **Daily Wave** (compila **La mia marea** + i 3 punti Scrum)
3. **Time Current** (log ore se T\&M)
4. **Sprint Surf** (sposta storie / check Sprint Goal)
5. Notifica poll → **Polling**
6. Fine settimana → check **Leave Tide** / **Doc Shell** (busta paga)

**Admin in più:** Leave inbox → Meeting board (Planning/Review) → Wellbeing Buoy (lascia boa + marea squadra + AI).

---

## Priorità implementazione UI (allineata agli sprint PRD)

| Sprint | Schermate da wireframe → UI                               |
| :----- | :-------------------------------------------------------- |
| S1     | Auth, Shell Sidebar, Home, Profile, Notifications popover |
| S2     | Leave, Documents, Time                                    |
| S3     | Sprint, Daily, Meetings                                   |
| S4     | Polls, Wellbeing Buoy, Newsletter admin                   |
