# Tide — Documentazione MVP

**Tide** è la dashboard interna di **The Wave** (The Wave Studio) per i **surfer** — le persone del team.

Un’unica “spiaggia” per auth, profilo, ferie, sprint, time tracking, documenti, daily, wellbeing (boa + segnali marea), meeting, poll e Tide Alerts — con esperienza fresca, positiva e coerente con la cultura onda/surf dell’agenzia.

| | |
| :-- | :-- |
| **Prodotto** | Tide · The Wave |
| **Utenti** | Surfer (user) · Board (admin) |
| **Stack** | Next.js + TypeScript · Supabase · shadcn/ui · TanStack Query |
| **Stato** | Spec MVP — draft per validazione board |
| **Tagline** | *La marea del team, in un’unica spiaggia.* |

**Prototipo clickable (GitHub Pages):** [lukens94.github.io/tide-mvp](https://lukens94.github.io/tide-mvp/) — demo statica, toggle Surfer / Board in sidebar.

---

## Chi è The Wave

**The Wave** è una digital agency che accompagna i clienti nella *digital transformation*: competenze tecniche al servizio delle aziende sul mercato digitale.

La vision non è solo qualità tecnica nazionale — è anche la qualità dell’ambiente di lavoro: **l’isola felice**. Identità: *«Noi siamo i surfer. Noi siamo l’onda.»* Cavalcare il cambiamento, non subirirlo.

**Cultura (pilastri)** che Tide deve rendere operativi, non solo dichiarati:

| Pilastro | Come entra in Tide |
| :-- | :-- |
| **Feedback** | Poll, meeting board, daily, wellbeing — spazio per dire ciò che fa bene al team |
| **Formazione** | Documenti, note sprint, memoria di rituali (base per workshop futuri) |
| **Team building** | Ops, poll flash, vista di squadra — senso di famiglia, non solo tool HR |
| **Talento** | Profilo, sprint/SP, time — visibilità sul lavoro di professionisti |
| **Responsabilità** | Ferie self-service, time T&M, daily — flessibilità con accountability |
| **Agile / Scrum** | Sprint Surf + Daily Wave (daily scritto + **La mia marea** self-report; sprint 10 gg) |

Tone: fresco, alla mano, ispirato a street art e cultura pop; interno orientato ad ascolto e feedback; esterno come parlare con un amico di vecchia data.

---

## Perché esiste Tide

Oggi ferie, sprint, ore T&M, documenti, daily, wellbeing, meeting e sondaggi vivono su tool diversi o a mano. Tide diventa **unica fonte di verità** operativa della spiaggia: self-service per il surfer, vista d’insieme (e approvazioni) per il board — e infrastruttura per proteggere l’*isola felice* mentre il team scala.

---

## Come leggere questa cartella

Ordine consigliato per chi arriva da zero:

| # | Documento | A cosa serve |
| :- | :-- | :-- |
| 1 | [Nome MVP: Tide](nome-mvp-raccomandazione.md) | Branding, tone of voice, copy e naming sezioni |
| 2 | [PRD — Tide MVP](prd-tide-mvp.md) | Spec di prodotto: problema, obiettivi, ruoli, feature map, stack, scope MVP |
| 3 | [Wireframe testuale page-by-page](wireframe-page-by-page.md) | UI desktop-first: layout shell, schermate, componenti shadcn, flussi Surfer/Board |
| 4 | [Schema Supabase SQL + Tipi TypeScript](schema-supabase.md) | Dati: enum, tabelle, RLS, storage, tipi TS allineati al PRD |
| 5 | [DSM — istruzioni design tokens](dsm-tide-instructions.md) | Colori, tipografia, shadow, mappatura shadcn/Tailwind |
| 6 | [MVP HTML clickable](mvp/index.html) | Prototipo statico: shell dashboard + tutte le feature Surfer/Board |

---

## Mappa rapida per ruolo

| Se stai… | Parti da |
| :-- | :-- |
| Validando nome e tone of voice | [Naming](nome-mvp-raccomandazione.md) |
| Definendo o sfidando lo scope MVP | [PRD](prd-tide-mvp.md) |
| Disegnando o implementando UI | [Wireframe](wireframe-page-by-page.md) · [DSM](dsm-tide-instructions.md) · [MVP live](https://lukens94.github.io/tide-mvp/) |
| Impostando DB, auth e permessi | [Schema Supabase](schema-supabase.md) |

---

## Ambito MVP (sintesi)

- **Surfer**: profilo, ferie e saldo, sprint/SP propri, time T&M, documenti personali, daily, Wellbeing Buoy (boa + segnali), poll/meeting, notifiche.
- **Board**: approvazioni ferie, gestione sprint e team, upload documenti, marea di squadra (Wellbeing Buoy), meeting/poll, invite utenti e ruoli, insight/benchmark (AI light).

Dettaglio feature-by-feature: sezione *Scope MVP* del [PRD](prd-tide-mvp.md).
