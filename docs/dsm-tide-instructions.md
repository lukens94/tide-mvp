# Tide — Design System (DSM)

**Prodotto:** Tide · The Wave  
**Versione:** 2.0  
**Fonte di verità:** [`resources/dsm/The Wave Design System/`](../resources/dsm/The%20Wave%20Design%20System/)  
**Stack target:** Next.js · TypeScript · **Tailwind CSS v3** (`tailwind.config.ts`) · Lucide  
**Vincolo:** non usare Tailwind v4 (`@theme`, `@tailwindcss/postcss`). Theme e token vivono in `tailwind.config.ts`.

Documento funzionale del Design System di **The Wave**. È il **cuore visuale e interattivo** di Tide: ogni schermata, componente e copy deve rispettare queste regole. I valori sotto sono estratti verbatim dai token e dai componenti nelle risorse — **non inventare varianti non elencate**.

---

## 1. Introduzione

### 1.1 Cos’è

Il DSM cattura l’identità prodotto di The Wave: un **workspace dark warm** costruito su card cream (“carta”), azioni blu elettrico e una voce “system” in IBM Plex Mono per label e dati.

Origine: reverse-engineered dal prodotto interno **Storypoints Workspace** (sprint, timesheet, note di progetto, gamification XP/livelli/badge). Nessun documento formale precedente — token, componenti e UI kit sono stati estratti dal CSS e dalla logica di render reali.

### 1.2 Ruolo in Tide

Tide è la dashboard interna dei surfer. Il DSM definisce:

| Livello | Cosa governa |
| :------ | :----------- |
| **Fondamenti** | Voce, palette, type, spacing, radii, motion |
| **Componenti** | Atomic Design: atoms → molecules → organisms → templates → pages |
| **Pattern** | Shell dark + card cream, hero blu, gamification |
| **UI kit** | Storypoints Workspace come esempio end-to-end |
| **Codice** | Tailwind **v3** + `tailwind.config.ts` (§ 11) · pagina `/dsm` |

Le risorse in `resources/dsm/` **non** fanno parte del bundle Next.js: sono riferimento per implementazione e design review.

### 1.3 Mappa delle risorse

| Path | Contenuto |
| :--- | :-------- |
| `tokens/` | CSS custom properties: colori, tipografia, spacing, effetti, base |
| `components/core/` | 26 primitive UI (Button, Card, Hero, Modal, …) |
| `components/forms/` | 9 form kit (FormField, PasswordInput, Switch, …) |
| `guidelines/` | Specimen HTML (colori, type, spacing, brand) |
| `ui_kits/storypoints/` | Recreazione prodotto (Auth → Dashboard → Tracking) |
| `assets/` | Logo wordmark cream + font Univers LT Pro (OTF) |
| `styles.css` | Entry point globale (`@import` di tutti i token) |
| `_ds_manifest.json` | Catalogo machine-readable (componenti, token, theme) |

---

## 2. Fondamenti — Contenuto e voce

### 2.1 Lingua e tono

- **Lingua:** italiano. Copy di prodotto in italiano salvo richiesta esplicita.
- **Tono:** incoraggiante, diretto, un po’ giocoso. La gamification parla come un coach amichevole (“Continua così!”, “Livello 3 raggiunto!”). Gli errori sono chiari e onesti (“Non salvato”, “Inserisci email e password.”).
- **Vibe:** tool indie-studio professionale con reward loop da gioco — dati seri, ricompense leggere.

### 2.2 Casing

| Contesto | Regola |
| :------- | :----- |
| **Titoli e numeri grandi** | Sentence case, peso heavy (es. “Workspace progetti”, “Nessuno sprint”) |
| **Label, button, tab, meta** | IBM Plex Mono, **UPPERCASE**, letter-spacing ampio (`.08–.14em`) — es. “STORY POINTS PER PROGETTO”, “SPRINT” |

Questa dualità (Univers heavy vs IBM Plex Mono uppercase) è la firma tipografica del sistema.

### 2.3 Icone (no emoji)

**Niente emoji nell’UI di Tide.** Nav, empty state, badge, motivazionali e controlli usano icone **Lucide** (pacchetto `lucide-react`) o SVG inline nello stesso stile stroke — vedi § 7.

Nota storica: lo Storypoints Workspace originale usava emoji in nav/gamification; per Tide quella pratica **non** è parte del DSM.

### 2.4 Numeri

| Tipo | Formato |
| :--- | :------ |
| Story points | Fino a 1 decimale (`2.5 SP`) |
| Contatori sprint | Zero-padded (`02 Sprint`) |
| Percentuali | Arrotondate (`67% completato`) |
| Allineamento | `tabular-nums` ovunque i numeri si allineano |

---

## 3. Colori

Fonte: [`tokens/colors.css`](../resources/dsm/The%20Wave%20Design%20System/tokens/colors.css).

### 3.1 Brand core (5 colori)

| Token | Hex | Uso |
| :---- | :-- | :-- |
| `--black` | `#323232` | Near-black ink — mai puro `#000` |
| `--cream` | `#FAF7EB` | Carta brand — surface delle card di contenuto |
| `--sand` | `#CDC3BA` | Accent surface muted (stat tile) |
| `--blue` | `#0057FF` | **Unico colore azione** — CTA, focus, nav attiva, progress |
| `--blue-2` | `#1A66FF` | Hover del primary (più chiaro) |
| `--yellow` | `#FFD400` | Highlight ad alta energia — raro (una tile) |

### 3.2 Superfici dark (tema default)

| Token | Hex | Uso |
| :---- | :-- | :-- |
| `--app-bg` | `#1F1F1D` | Backdrop più profondo dietro l’app |
| `--panel` | `#2A2A28` | Background app / sezioni |
| `--panel-2` | `#363633` | Raised: sidebar, field, badge, tile |
| `--border` | `#45443F` | Bordi controlli su dark |
| `--line` | `#3A3A36` | Divider hairline su dark |
| `--muted` | `#9B9890` | Testo secondario su dark |

**Motivo di layout distintivo:** shell dark warm + contenuto su **card cream**. Il contrasto dark-shell / cream-content è il pattern fondante.

### 3.3 Inchiostri su cream (testo/linee *sopra* le card)

| Token | Hex | Uso |
| :---- | :-- | :-- |
| `--cream-in` | `#FFFDF6` | Fill inset degli input su cream |
| `--cream-line` | `#EAE6DA` | Divider su cream |
| `--cream-bd` | `#E3DFD2` | Border su cream |
| `--cream-mut` | `#8A877E` | Testo secondario su cream |
| `--cream-dim` | `#BDBAB1` | Testo terziario / hint su cream |
| `--cream-cell` | `#EFEBDD` | Cella calendario vuota |
| `--cream-cell-h` | `#E3DDC9` | Cella vuota hover |

### 3.4 Status

| Token | Hex | Uso |
| :---- | :-- | :-- |
| `--danger` | `#FF6B6B` | Testo errori / destructive |
| `--danger-2` | `#FF5A5A` | Fill bottone destructive |
| `--success` | `#0057FF` | Success riusa il brand blue |

### 3.5 Data-viz (palette progetti/chart, ciclata)

| Token | Hex |
| :---- | :-- |
| `--viz-1` | `#0057FF` |
| `--viz-2` | `#FFD400` |
| `--viz-3` | `#CDC3BA` |
| `--viz-4` | `#323232` |
| `--viz-5` | `#1A66FF` |
| `--viz-6` | `#00A98F` |
| `--viz-7` | `#FF6B35` |

### 3.6 Alias semantici (preferire nei componenti)

| Alias | Risolve a | Ruolo |
| :---- | :-------- | :---- |
| `--surface-app` | `var(--panel)` | Surface app |
| `--surface-raised` | `var(--panel-2)` | Surface raised |
| `--surface-card` | `var(--cream)` | Card di contenuto |
| `--surface-accent` | `var(--blue)` | Accent surface |
| `--text-on-dark` | `var(--cream)` | Testo su dark |
| `--text-on-dark-mut` | `var(--muted)` | Testo muted su dark |
| `--text-on-cream` | `var(--black)` | Testo su cream |
| `--text-on-cream-mut` | `var(--cream-mut)` | Testo muted su cream |
| `--text-on-blue` | `var(--cream)` | Testo su hero blu |
| `--text-on-blue-mut` | `#BCD0FF` | Label muted su hero blu |
| `--border-control` | `var(--border)` | Bordo controllo |
| `--border-divider` | `var(--line)` | Divider |
| `--accent` | `var(--blue)` | Accent |
| `--accent-hover` | `var(--blue-2)` | Accent hover |
| `--focus-ring` | `var(--blue)` | Focus ring |

### 3.7 Tema light (opt-in)

Attivato con `<body class="theme-light">`. **Solo** le superfici dark flipano; brand e inchiostri cream restano invariati.

| Token | Light |
| :---- | :---- |
| `--app-bg` | `#E9E5D9` |
| `--panel` | `#F4F1E8` |
| `--panel-2` | `#FBF9F1` |
| `--border` | `#DCD7C8` |
| `--line` | `#E5E0D1` |
| `--muted` | `#6F685F` |
| `--text-on-dark` | `var(--black)` |
| `--text-on-dark-mut` | `var(--muted)` |

### 3.8 Regole hard

- **Nessun gradiente, nessuna immagine di sfondo, nessuna texture, nessun pattern.** Solo fill solidi.
- Blu è l’**unico** colore azione. Giallo è highlight raro.
- Mai nero o bianco puri nei neutrali — sempre warm.

---

## 4. Tipografia

Fonte: [`tokens/typography.css`](../resources/dsm/The%20Wave%20Design%20System/tokens/typography.css), [`tokens/fonts.css`](../resources/dsm/The%20Wave%20Design%20System/tokens/fonts.css).

### 4.1 Famiglie

| Token | Stack | Ruolo |
| :---- | :---- | :---- |
| `--font-sans` | `'Univers LT Pro', 'Schibsted Grotesk', Helvetica, Arial, sans-serif` | Display + UI |
| `--font-cond` | `'Univers LT Pro Cond', 'Univers LT Pro', Helvetica, Arial, sans-serif` | Numerali/heading stretti |
| `--font-mono` | `'IBM Plex Mono', ui-monospace, 'SFMono-Regular', monospace` | Voce system (label, button, tab, dati) |

Helper CSS: `.mono { font-family: var(--font-mono); }`.

**Nota storica:** il prodotto originale usava Schibsted Grotesk (Google Fonts) come stand-in web di Univers. I file OTF Univers sono ora primari; Schibsted resta fallback web.

### 4.2 Mapping pesi Univers → CSS

| Taglio Univers | `font-weight` | File tipico |
| :------------- | :------------ | :---------- |
| 45 Light | `300` | `UniversLTPro-45Light.otf` |
| 55 Roman | `400–500` | `UniversLTPro-55Roman.otf` |
| 65 Bold | `600–700` | `UniversLTPro-65Bold.otf` |
| 75 Black | `800–900` | `UniversLTPro-75Black.otf` |
| Condensed / Bold Cond | `400` / `700` | `UniversLTPro-Condensed.otf` / `BoldCond.otf` |

Token peso:

| Token | Valore |
| :---- | :----- |
| `--fw-regular` | `400` |
| `--fw-medium` | `500` |
| `--fw-semibold` | `600` |
| `--fw-bold` | `700` |
| `--fw-heavy` | `800` |
| `--fw-black` | `900` |

**Workhorse display:** `800` (heavy). Tracking negativo su heading e sul contatore SP 92px.

### 4.3 Scala display / UI (Univers)

| Token | Size | Uso tipico |
| :---- | :--- | :--------- |
| `--text-hero` | `92px` | Contatore gigante story points |
| `--text-4xl` | `48px` | Headline grande |
| `--text-3xl` | `32px` | Headline |
| `--text-2xl` | `24px` | Titoli di pannello |
| `--text-xl` | `20px` | Titoli section |
| `--text-lg` | `18px` | UI large |
| `--text-md` | `16px` | Body base |
| `--text-sm` | `15px` | Body small |
| `--text-xs` | `13px` | Caption |

### 4.4 Scala mono (IBM Plex Mono, UPPERCASE, tracked)

| Token | Size | Uso tipico |
| :---- | :--- | :--------- |
| `--mono-md` | `11.5px` | Button, tab, field pill |
| `--mono-sm` | `10.5px` | Section label |
| `--mono-xs` | `10px` | Hint, caption |
| `--mono-2xs` | `9.5px` | Meta dense (calendario) |

### 4.5 Line height e letter spacing

| Token LH | Valore | Token LS | Valore |
| :------- | :----- | :------- | :----- |
| `--lh-tight` | `1.0` | `--ls-hero` | `-0.04em` |
| `--lh-snug` | `1.25` | `--ls-tight` | `-0.02em` |
| `--lh-normal` | `1.5` | `--ls-snug` | `-0.01em` |
| `--lh-relaxed` | `1.6` | `--ls-normal` | `0` |
| | | `--ls-label` | `0.08em` |
| | | `--ls-wide` | `0.12em` |
| | | `--ls-wider` | `0.14em` |

### 4.6 Regole d’uso

| Elemento | Famiglia | Note |
| :------- | :------- | :--- |
| Titoli pagina / pane | Univers heavy | Sentence case, tracking tight |
| Contatore SP hero | Univers (o Cond) | `--text-hero`, `--ls-hero` |
| Body | Univers regular | `--text-md`, `--lh-normal` |
| Button, tab, select, label form | IBM Plex Mono | UPPERCASE + `--ls-label` / `--ls-wide` |
| Timestamp, meta, hint | IBM Plex Mono | UPPERCASE, scale mono-xs/2xs |

---

## 5. Spaziatura

Fonte: [`tokens/spacing.css`](../resources/dsm/The%20Wave%20Design%20System/tokens/spacing.css).

Il ritmo osservato non è una griglia 4/8 rigida: è costruito sul **gutter 14px** (bento grid, gap tra card).

### 5.1 Scala

| Token | Valore | Nota |
| :---- | :----- | :--- |
| `--space-1` | `4px` | |
| `--space-2` | `6px` | |
| `--space-3` | `8px` | |
| `--space-4` | `10px` | |
| `--space-5` | `12px` | |
| `--space-6` | `14px` | **Gutter signature** |
| `--space-7` | `16px` | |
| `--space-8` | `18px` | Padding interno card |
| `--space-9` | `20px` | |
| `--space-10` | `22px` | Padding interno card large |
| `--space-12` | `26px` | Padding hero |
| `--space-14` | `30px` | Padding orizzontale header |

### 5.2 Padding componenti

| Token | Valore | Uso |
| :---- | :----- | :-- |
| `--pad-btn` | `12px 17px` | Primary button |
| `--pad-pill` | `11px 16px` | Field pill |
| `--pad-tab` | `10px 18px` | Tab |
| `--pad-input` | `13px 15px` | Input in modal |
| `--pad-card` | `20px 22px 22px` | Card cream |
| `--pad-hero` | `26px` | Hero blu |

### 5.3 Sidebar

| Token | Valore |
| :---- | :----- |
| `--sidebar-w` | `210px` |
| `--sidebar-w-min` | `72px` (collapsed, solo icone) |

### 5.4 Layout

- CSS Grid **bento** con gutter 14px; card che riempiono e scrollano internamente.
- Focus ring: box-shadow 2px blu.

---

## 6. Radii, ombre, overlay, motion

Fonte: [`tokens/effects.css`](../resources/dsm/The%20Wave%20Design%20System/tokens/effects.css).

### 6.1 Corner radii

Generosi e consistenti. Le card sono le più arrotondate.

| Token | Valore | Uso |
| :---- | :----- | :-- |
| `--r-xs` | `6px` | Checkbox, swatch piccoli |
| `--r-sm` | `8px` | Tool rich-text |
| `--r-md` | `9px` | Cella calendario, week button |
| `--r-lg` | `11px` | Nav item, tab, ghost button |
| `--r-xl` | `12px` | Button, field pill, icon button |
| `--r-2xl` | `14px` | Stat tile, game stat |
| `--r-3xl` | `16px` | Sezioni, modal inner |
| `--r-4xl` | `18px` | Modal, workspace card |
| `--r-5xl` | `20px` | Hero, SP panel |
| `--r-6xl` | `22px` | **Card cream principale**, SP row |
| `--r-pill` | `99px` | Chip, progress bar |
| `--r-full` | `50%` | Avatar, level badge |

Caso speciale: la workspace card ha un **bordo superiore colorato da 5px** sul colore del progetto attivo.

### 6.2 Ombre

Sottili e finalizzate — non decorative. Superfici flat senza shadow.

| Token | Valore | Uso |
| :---- | :----- | :-- |
| `--shadow-tile` | `0 8px 20px rgba(0,0,0,.18)` | Lift hover sulle tile |
| `--shadow-cell` | `0 4px 12px rgba(0,0,0,.18)` | Hover cella calendario |
| `--shadow-btn` | `0 6px 18px rgba(0,87,255,.35)` | Glow blu sul primary hover |
| `--shadow-modal` | `0 30px 80px rgba(0,0,0,.5)` | Modal |
| `--shadow-toast` | `0 10px 30px rgba(0,0,0,.4)` | Toast |
| `--shadow-avatar` | `0 0 0 4px var(--panel-2), 0 0 0 6px var(--blue), 0 8px 24px rgba(0,0,0,.4)` | Avatar con doppio anello |

### 6.3 Overlay

| Token | Valore |
| :---- | :----- |
| `--overlay-bg` | `rgba(15,15,13,.6)` |
| `--overlay-blur` | `blur(3px)` |

Semi-trasparenti bianchi (`rgba(255,255,255,.05–.22)`) creano sub-surface dentro l’hero blu (track progress, level badge). Altrimenti le surface sono opache.

### 6.4 Motion

Rapida e springy.

| Token | Valore | Uso |
| :---- | :----- | :-- |
| `--ease-spring` | `cubic-bezier(.2,.8,.2,1)` | Progress fill, modal pop-in |
| `--ease-standard` | `ease` | Hover controlli |
| `--dur-fast` | `.12s` | Hover rapido |
| `--dur-base` | `.15s` | Hover standard |
| `--dur-slow` | `.25s` / `.26s` pop-in | Transizioni più lunghe |
| `--dur-bar` | `.5s` | Fill progress bar |

**Interazioni signature:**

- Button **lift** `translateY(-1px)` on hover, **press** `translateY(1px) scale(.97)` on active
- Tile lift on hover; icon button e celle scalano leggermente
- Modal `popIn` (scale `.94→1` + slide up); overlay fade-in
- Keyframe `level-pop` sul level badge (anello espanso al level-up)

**Reduced motion:** rispettare `prefers-reduced-motion` (vedi `tokens/base.css`).

---

## 7. Iconografia e brand

### 7.1 Icone

- **Sorgente:** pacchetto [`lucide-react`](https://lucide.dev) in Tide, oppure SVG inline equivalenti.
- **Stile:** Lucide / Feather — `fill="none"`, `stroke="currentColor"`, `stroke-width` ~2.0–2.4, `stroke-linecap/linejoin="round"`, viewBox 24×24.
- **Size tipico:** 13–18px (controlli più grandi, es. IconButton, possono scalare).
- **Vietato:** emoji come icone UI, icon font, sprite, PNG icon.

Esempi di mapping (sostituiscono le emoji dello Storypoints originale):

| Contesto | Lucide (esempio) |
| :------- | :--------------- |
| Dashboard / game | `Gamepad2`, `LayoutDashboard` |
| Tracking / chart | `BarChart3`, `Clock` |
| Empty folder / progetti | `Folder`, `FolderOpen` |
| Calendario / date | `Calendar` |
| Achievement / success | `Rocket`, `Star`, `Trophy`, `Check` |
| Streak / energia | `Flame` |
| Avatar random | `Dices` |
| Azioni comuni | `Plus`, `X`, `Pencil`, `LogOut`, `Eye`, `Users`, `Menu`, `ChevronDown` |

Drag handle: glyph `⠿` (U+2837) o icona Lucide `GripVertical`.

### 7.2 Logo

| Asset | Uso |
| :---- | :-- |
| `assets/logo-thewave-cream.png` | Wordmark cream “THE WAVE” — **solo su sfondi dark o blu** |

Non inventare un symbol/favicon: non è fornito nelle risorse. Se serve un mark senza asset, renderizzare “The Wave” in Univers heavy.

### 7.3 Imagery

Essenzialmente assente — tool di dati. Unica “immagine”: avatar generati (palette on-brand: blue / sand / black / cream / yellow). Niente foto, niente illustrazioni.

---

## 8. Catalogo componenti

### 8.0 Architettura — Atomic Design

In Tide la UI library **non** usa le cartelle `core/` / `forms/` delle risorse Storypoints (quelle restano solo fonte storica). Si usa **Atomic Design**:

| Livello | Regola | Path |
| :------ | :----- | :--- |
| **Atoms** | Controllo singolo, nessun dominio Tide | `components/atoms/` |
| **Molecules** | Composizione di 2+ atoms, ancora generica | `components/molecules/` |
| **Organisms** | Blocchi UI ricchi / dominio (hero, row sprint, modal) | `components/organisms/` |
| **Templates** | Layout shell (sidebar + content) senza dati reali | `components/templates/` |
| **Pages** | Route Next.js che assemblano template + dati | `app/` |

**Import rule:** un livello può importare solo se stesso o livelli inferiori (un atom non importa una molecule; una page può importare tutto).

#### Mappatura catalogo → livelli

| Livello | Componenti |
| :------ | :--------- |
| **Atoms** | `Button`, `IconButton`, `Input`, `Textarea`, `Select`, `Checkbox`, `Switch`, `Chip`, `Spinner`, `Avatar`, `ProgressBar`, `WeekButton`, `Toast` |
| **Molecules** | `FormField`, `PasswordInput`, `SearchInput`, `NumberField`, `DateField`, `ChipSelect`, `ColorSwatchPicker`, `RadioGroup`, `NavItem`, `Tabs`, `SegmentedControl`, `Badge`, `LevelBadge`, `StreakPill`, `EmptyState`, `StatTile`, `GameStat` |
| **Organisms** | `Card`, `Hero`, `Modal`, `ConfirmDialog`, `SprintProjectRow` |
| **Templates** | `AppShell`, `DsmShell` |
| **Pages** | `app/dsm/...` (foundations + gallery); in seguito schermate prodotto Tide |

Ogni componente: un file + barrel export per livello (`components/atoms/index.ts`, …). Props sotto. Icone solo Lucide. Theme via Tailwind **v3** + `tailwind.config.ts` (§ 11). La pagina navigabile del design system è `/dsm`.

Fonte storica API: `resources/dsm/.../components/{core,forms}/*.d.ts`.

Convenzione ricorrente:

- `light` / `onCream` — adatta colori quando il controllo sta sulla card cream
- Label mono UPPERCASE dove previsto
- Focus ring brand blue

---

### 8.1 Azioni (atoms)

#### Button

Primary (blu, lift on hover) o ghost (testo mono). Sempre IBM Plex Mono, UPPERCASE, tracking ampio.

| Prop | Tipo | Default |
| :--- | :--- | :------ |
| `variant` | `'primary' \| 'ghost'` | `'primary'` |
| `icon` | `ReactNode` | — |
| `disabled` | `boolean` | `false` |
| `children` | `ReactNode` | — |

Estende `ButtonHTMLAttributes`.

#### IconButton

Controllo quadrato 42px; hover/active fill blu.

| Prop | Tipo | Default |
| :--- | :--- | :------ |
| `children` | `ReactNode` (SVG) | required |
| `active` | `boolean` | `false` |
| `size` | `number` (px) | `42` |
| `title` | `string` | — |

---

### 8.2 Form — core

#### Input

Campo testo con label mono uppercase e focus ring blu.

| Prop | Tipo | Default |
| :--- | :--- | :------ |
| `label` | `string` | — |
| `light` | `boolean` | `false` |
| `wrapStyle` | `CSSProperties` | — |

#### Textarea

Multiline, stesso look di Input (`label`, `light`, `wrapStyle`).

#### Select

Dropdown “field pill” — mono uppercase, chevron inline.

| Prop | Tipo | Default |
| :--- | :--- | :------ |
| `options` | `string \| { value, label }[]` | required |
| `value` | `string` | — |
| `onChange` | `ChangeEventHandler` | — |
| `light` | `boolean` | `false` |

#### Checkbox

Square arrotondato; checked = fill blu + strike sul label.

| Prop | Tipo | Default |
| :--- | :--- | :------ |
| `label` | `ReactNode` | required |
| `checked` | `boolean` | — |
| `onChange` | `(checked: boolean) => void` | — |
| `onCream` | `boolean` | `true` |

---

### 8.3 Form — kit

#### FormField

Wrapper: label mono + required + hint + error.

| Prop | Tipo | Default |
| :--- | :--- | :------ |
| `label` | `string` | — |
| `htmlFor` | `string` | — |
| `required` | `boolean` | — |
| `hint` / `error` | `ReactNode` | — |
| `light` | `boolean` | `false` |
| `children` | `ReactNode` | — |

#### PasswordInput

Come Input + toggle show/hide (eye). Props: `label`, `light`, `wrapStyle`.

#### SearchInput

Campo con lente leading e clear opzionale (`onClear`). Prop `light`.

#### NumberField

Input numerico mono, allineato a destra, stepper − / + (story points).

| Prop | Tipo | Default |
| :--- | :--- | :------ |
| `value` | `number` | — |
| `onChange` | `(value: number) => void` | — |
| `min` / `max` | `number` | — |
| `step` | `number` | `0.5` |
| `light` | `boolean` | `false` |

#### DateField

Native date input styled come gli altri field. Prop `light`.

#### ChipSelect

Gruppo pill single-select (pattern avatar-picker); chip attivo fill blu.

| Prop | Tipo |
| :--- | :--- |
| `options` | `ChipOption[]` |
| `value` | `string` |
| `onChange` | `(value: string) => void` |

#### ColorSwatchPicker

Riga di swatch circolari; selezionato = bordo cream + anello blu. Default colori = palette data-viz.

| Prop | Tipo | Default |
| :--- | :--- | :------ |
| `colors` | `string[]` | viz palette |
| `value` / `onChange` | `string` / `(color) => void` | — |
| `size` | `number` (px) | `24` |

#### RadioGroup

Lista radio con dot blu. Props: `options`, `value`, `onChange`, `inline` (default `false`), `onCream` (default `false`).

#### Switch

Toggle on/off; track fill blu quando on. Props: `checked`, `onChange`, `disabled`, `label`, `onCream`.

---

### 8.4 Navigazione e layout

#### NavItem

Riga sidebar; attivo = fill blu. Props: `icon` (Lucide/SVG), `children`, `active` (default `false`).

#### Tabs

Tab bar orizzontale; tab attivo = fill black + testo cream.

| Prop | Tipo |
| :--- | :--- |
| `tabs` | `TabOption[]` |
| `value` | `string` |
| `onChange` | `(value: string) => void` |

#### SegmentedControl

Toggle a segmenti (view switch); segmento attivo fill blu. Props: `options`, `value`, `onChange`.

#### Card

Surface cream “paper” (radius 22px) che ospita il contenuto sulla shell dark. Solo `children` (+ HTML attrs).

#### Hero

Hero blu signature con contatore SP 92px + progress bar.

| Prop | Tipo | Default |
| :--- | :--- | :------ |
| `name` | `string` | — (nome sprint) |
| `range` | `string` | — (range date mono) |
| `done` | `ReactNode` | required |
| `total` | `number` | — (suffix `/ N`) |
| `pct` | `number` | derivato da done/total |
| `capLabel` | `string` | `'Story points'` |

#### EmptyState

Placeholder centrato per card cream vuote.

| Prop | Tipo | Default |
| :--- | :--- | :------ |
| `icon` | `ReactNode` (Lucide/SVG) | — (passare un’icona Lucide; non usare emoji) |
| `title` | `ReactNode` | required |
| `message` | `ReactNode` | — |
| `ctaLabel` / `onCta` | `string` / `() => void` | — |

#### Modal

Dialog centrato su overlay blurred, header bar blu.

| Prop | Tipo | Default |
| :--- | :--- | :------ |
| `title` | `ReactNode` | required |
| `children` | `ReactNode` | — |
| `footer` | `ReactNode` | — (azioni right-aligned) |
| `onClose` | `() => void` | — |
| `maxWidth` | `string` | `'30rem'` |

#### ConfirmDialog

Conferma compatta su overlay dark (niente header blu).

| Prop | Tipo | Default |
| :--- | :--- | :------ |
| `message` | `ReactNode` | required |
| `okLabel` | `string` | `'Conferma'` |
| `cancelLabel` | `string` | `'Annulla'` |
| `danger` | `boolean` | `true` (confirm rosso) |
| `onOk` / `onCancel` | `() => void` | — |

#### Toast

Notifica transient sulla surface raised dark.

| Prop | Tipo | Default |
| :--- | :--- | :------ |
| `children` | `ReactNode` | required |
| `type` | `'neutral' \| 'success' \| 'error'` | `'neutral'` |

---

### 8.5 Dati e gamification

#### StatTile

Tile numero grande. Tone: `sand` (default) | `dark` | `yellow`. Lift on hover. Props: `num`, `label`, `tone`.

#### GameStat

Card metrica dark bordered: numero grande sopra label mono uppercase. Props: `num`, `label`.

#### ProgressBar

Track pill + fill.

| Prop | Tipo | Default |
| :--- | :--- | :------ |
| `value` | `number` (0–100) | — |
| `onBlue` | `boolean` | `false` (track translucido, fill cream) |
| `tone` | `string` | override fill (es. colore progetto) |
| `height` | `number` | — |

#### SprintProjectRow

Card progetto colorata: codice, nome, SP assigned vs worked, progress.

| Prop | Tipo | Default |
| :--- | :--- | :------ |
| `code` | `string` | required (es. `"RCA"`) |
| `name` | `string` | required |
| `color` | `string` (hex) | `'#0057FF'` |
| `assigned` / `worked` | `number` | — |

Ink auto-contrasta sul colore di riga.

#### Chip

Pill mono piccola, tipicamente tinta col colore progetto. Props: `children`, `color` (default `'#0057FF'`).

#### Badge

Achievement gamification (earned o locked).

| Prop | Tipo | Default |
| :--- | :--- | :------ |
| `icon` | `ReactNode` (Lucide/SVG) | required |
| `name` / `desc` | `ReactNode` | required |
| `locked` | `boolean` | `false` (dim + desaturate) |

#### LevelBadge

Indicatore livello circolare per l’hero gamification.

| Prop | Tipo | Default |
| :--- | :--- | :------ |
| `level` | `ReactNode` | required |
| `label` | `string` | `'Livello'` |
| `size` | `number` (px) | `84` |
| `onBlue` | `boolean` | `true` (disc translucido sull’hero) |

#### StreakPill

Pill mono di status (es. streak) per l’hero blu. Props: `children`, `onBlue` (default `true`).

#### WeekButton

Selettore settimana mono per surface cream. Props: `children`, `active` (default `false`).

#### Avatar

Cerchio — immagine o disco iniziali; ring opzionale (panel + blu).

| Prop | Tipo | Default |
| :--- | :--- | :------ |
| `src` | `string` | — |
| `initials` | `string` | — |
| `color` | `string` | `'var(--yellow)'` |
| `size` | `number` (px) | `38` |
| `ring` | `boolean` | `false` |

#### Spinner

Indicatore loading circolare con arco blu leading. Prop `size` (default `42`).

---

## 9. UI kit — Storypoints Workspace

Path: [`ui_kits/storypoints/`](../resources/dsm/The%20Wave%20Design%20System/ui_kits/storypoints/).

Recreazione high-fidelity del prodotto interno, costruita sulle primitive del DSM. Dati sample statici; componenti da `_ds_bundle.js`.

### 9.1 Schermate

| # | Schermata | Pattern DSM |
| :- | :-------- | :---------- |
| 1 | **Auth** | Card centrata, header blu, input cream (`light`) |
| 2 | **Dashboard** | Bento gamification: Hero XP/livello, GameStat ×4, Badge earned/locked, callout tracking |
| 3 | **Sprint summary** | Hero SP blu + StatTile + SprintProjectRow su Card cream |
| 4 | **Timesheet calendar** | Griglia Lun–Ven × ore, celle progetto colorate, WeekButton, Chip assegnati |
| 5 | **Workspace** | Brief rich-text + checklist to-do per progetto; bordo top 5px color progetto |

### 9.2 Shell app

- Sidebar fissa 210px (collapse 72px) con **NavItem** (icona Lucide + label)
- Switch Dashboard ↔ Tracking; Tracking ha **Tabs**: Sprint · Calendario Ore · Workspace Progetti
- Login dismissibile → app shell

### 9.3 Valore per Tide

Questo UI kit è il **riferimento end-to-end** di composizione: mostra come shell dark, card cream, hero blu e controlli mono convivono in un flusso reale. Le sezioni Tide (sprint, time, profilo, wellbeing, …) devono ricomporre gli stessi pattern, non reinventare surface o tipografia.

---

## 10. Linee guida d’uso per Tide

### 10.1 Come applicare il DSM

1. **Shell** — ogni vista autenticata vive su `--app-bg` / `--panel` con contenuto primario in `Card` cream.
2. **Azioni** — un solo accent primario (`--blue`). Giallo solo per highlight eccezionale.
3. **Voce** — titoli Univers heavy sentence-case; controlli e meta in IBM Plex Mono UPPERCASE.
4. **Form** — usare `FormField` + `light`/`onCream` quando i controlli stanno sulla cream card.
5. **Feedback** — Toast / ConfirmDialog / EmptyState / Spinner del catalogo; non inventare overlay custom.
6. **Gamification** — Hero, LevelBadge, StreakPill, Badge, GameStat solo dove il prodotto Tide prevede reward loop (es. wellbeing, streak daily).
7. **Tema** — default dark; light via `theme-light` (o equivalente preferenza utente) senza toccare brand/cream.
8. **Motion** — rispettare easing/durate token e `prefers-reduced-motion`.
9. **Icone** — solo Lucide (`lucide-react`) o SVG stroke equivalenti; **niente emoji** in UI.
10. **Logo** — wordmark cream solo su dark/blue.

### 10.2 Checklist coerenza

- [ ] Nessun hex fuori dalle tabelle § 3
- [ ] Nessun gradiente / texture / foto di sfondo
- [ ] Card di contenuto = cream + `--r-6xl` (22px)
- [ ] Button/tab/label = IBM Plex Mono UPPERCASE
- [ ] Titoli = Univers heavy, sentence case
- [ ] Un solo colore azione: `--blue` / `--blue-2`
- [ ] Ombre solo dai token § 6.2
- [ ] Componenti nuovi partono dal catalogo § 8 (estendere tipando, non forkare a caso)
- [ ] Copy IT, tono incoraggiante; **nessuna emoji** in UI (icone Lucide/SVG)
- [ ] Numeri: tabular-nums; SP con al più 1 decimale
- [ ] Theme Tailwind solo via `tailwind.config.ts` (v3) — nessun `@theme` / setup v4

### 10.3 Font e licenza

Univers LT Pro è un font commerciale (Linotype/Monotype). Verificare licenza web prima del deploy. In repo le risorse forniscono OTF in `assets/fonts/`; in produzione preferire `.woff2` licenziati. IBM Plex Mono (Google Fonts) è ok per web.

### 10.4 Relazione con altri documenti Tide

| Documento | Relazione |
| :-------- | :-------- |
| [PRD — Tide MVP](prd-tide-mvp.md) | Scope prodotto; il DSM è il layer visuale |
| [Wireframe page-by-page](wireframe-page-by-page.md) | Layout schermate — allineare shell/card al DSM |
| [Schema Supabase](schema-supabase.md) | Preferenza tema utente (mappare su `theme-light` / dark default) |
| [resources/dsm/](../resources/dsm/) | Asset e codice sorgente del design system |

---

## 11. Implementazione — Tailwind CSS v3

### 11.1 Vincoli

| Regola | Dettaglio |
| :----- | :-------- |
| **Versione** | Tailwind **v3.x** (ultima 3.4.x consigliata). **Non** Tailwind v4. |
| **Config** | File root `tailwind.config.ts` (TypeScript) — unica fonte del theme Tide. |
| **CSS entry** | `app/globals.css` con direttive `@tailwind base/components/utilities` + CSS variables DSM. |
| **PostCSS** | `postcss.config.mjs` con `tailwindcss` + `autoprefixer` (non `@tailwindcss/postcss`). |
| **Utility** | Preferire classi del theme (`bg-tide-panel`, `font-mono`, `rounded-tide-6xl`, …) invece di hex inline. |

### 11.2 CSS variables (`app/globals.css`)

Definire sotto `:root` i token delle sezioni 3–6 (colori, type, spacing, radii, shadow, motion). Scope light:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  /* Brand + dark surfaces + cream inks + semantic — valori § 3–6 */
  --black: #323232;
  --cream: #faf7eb;
  --sand: #cdc3ba;
  --blue: #0057ff;
  --blue-2: #1a66ff;
  --yellow: #ffd400;
  /* … resto dei token da tokens/*.css … */
}

body.theme-light {
  /* Solo flip superfici dark — § 3.7 */
}
```

I valori restano identici ai file in `resources/dsm/.../tokens/`. Non inventare alias paralleli.

### 11.3 `tailwind.config.ts` — struttura

```ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  // Il flip light/dark è via CSS vars su body.theme-light (§ 3.7), non via dark: di Tailwind.
  theme: {
    extend: {
      colors: {
        tide: {
          black: 'var(--black)',
          cream: 'var(--cream)',
          sand: 'var(--sand)',
          blue: 'var(--blue)',
          'blue-2': 'var(--blue-2)',
          yellow: 'var(--yellow)',
          panel: 'var(--panel)',
          'panel-2': 'var(--panel-2)',
          'app-bg': 'var(--app-bg)',
          border: 'var(--border)',
          line: 'var(--line)',
          muted: 'var(--muted)',
          'cream-in': 'var(--cream-in)',
          'cream-line': 'var(--cream-line)',
          'cream-bd': 'var(--cream-bd)',
          'cream-mut': 'var(--cream-mut)',
          'cream-dim': 'var(--cream-dim)',
          'cream-cell': 'var(--cream-cell)',
          'cream-cell-h': 'var(--cream-cell-h)',
          danger: 'var(--danger)',
          'danger-2': 'var(--danger-2)',
          success: 'var(--success)',
          viz: {
            1: 'var(--viz-1)',
            2: 'var(--viz-2)',
            3: 'var(--viz-3)',
            4: 'var(--viz-4)',
            5: 'var(--viz-5)',
            6: 'var(--viz-6)',
            7: 'var(--viz-7)',
          },
        },
        // Alias semantici
        surface: {
          app: 'var(--surface-app)',
          raised: 'var(--surface-raised)',
          card: 'var(--surface-card)',
          accent: 'var(--surface-accent)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        cond: ['var(--font-cond)'],
        mono: ['var(--font-mono)'],
      },
      fontSize: {
        hero: ['var(--text-hero)', { lineHeight: 'var(--lh-tight)', letterSpacing: 'var(--ls-hero)' }],
        '4xl': ['var(--text-4xl)', { lineHeight: 'var(--lh-snug)' }],
        '3xl': ['var(--text-3xl)', { lineHeight: 'var(--lh-snug)' }],
        '2xl': ['var(--text-2xl)', { lineHeight: 'var(--lh-snug)' }],
        xl: ['var(--text-xl)', { lineHeight: 'var(--lh-snug)' }],
        lg: ['var(--text-lg)', { lineHeight: 'var(--lh-normal)' }],
        md: ['var(--text-md)', { lineHeight: 'var(--lh-normal)' }],
        sm: ['var(--text-sm)', { lineHeight: 'var(--lh-normal)' }],
        xs: ['var(--text-xs)', { lineHeight: 'var(--lh-normal)' }],
        'mono-md': ['var(--mono-md)', { letterSpacing: 'var(--ls-label)' }],
        'mono-sm': ['var(--mono-sm)', { letterSpacing: 'var(--ls-label)' }],
        'mono-xs': ['var(--mono-xs)', { letterSpacing: 'var(--ls-wide)' }],
        'mono-2xs': ['var(--mono-2xs)', { letterSpacing: 'var(--ls-wider)' }],
      },
      fontWeight: {
        heavy: 'var(--fw-heavy)',
        black: 'var(--fw-black)',
      },
      spacing: {
        1: 'var(--space-1)',
        2: 'var(--space-2)',
        3: 'var(--space-3)',
        4: 'var(--space-4)',
        5: 'var(--space-5)',
        6: 'var(--space-6)', // gutter 14px
        7: 'var(--space-7)',
        8: 'var(--space-8)',
        9: 'var(--space-9)',
        10: 'var(--space-10)',
        12: 'var(--space-12)',
        14: 'var(--space-14)',
        sidebar: 'var(--sidebar-w)',
        'sidebar-min': 'var(--sidebar-w-min)',
      },
      borderRadius: {
        'tide-xs': 'var(--r-xs)',
        'tide-sm': 'var(--r-sm)',
        'tide-md': 'var(--r-md)',
        'tide-lg': 'var(--r-lg)',
        'tide-xl': 'var(--r-xl)',
        'tide-2xl': 'var(--r-2xl)',
        'tide-3xl': 'var(--r-3xl)',
        'tide-4xl': 'var(--r-4xl)',
        'tide-5xl': 'var(--r-5xl)',
        'tide-6xl': 'var(--r-6xl)',
        pill: 'var(--r-pill)',
      },
      boxShadow: {
        tile: 'var(--shadow-tile)',
        cell: 'var(--shadow-cell)',
        btn: 'var(--shadow-btn)',
        modal: 'var(--shadow-modal)',
        toast: 'var(--shadow-toast)',
        avatar: 'var(--shadow-avatar)',
      },
      transitionTimingFunction: {
        spring: 'var(--ease-spring)',
      },
      transitionDuration: {
        fast: 'var(--dur-fast)',
        base: 'var(--dur-base)',
        slow: 'var(--dur-slow)',
        bar: 'var(--dur-bar)',
      },
    },
  },
  plugins: [],
};

export default config;
```

### 11.4 Esempi di classi

| Intent | Classe Tailwind |
| :----- | :-------------- |
| Backdrop app | `bg-tide-app-bg` |
| Panel / raised | `bg-tide-panel` / `bg-tide-panel-2` |
| Card cream | `bg-surface-card rounded-tide-6xl` |
| CTA primaria | `bg-tide-blue hover:bg-tide-blue-2 text-tide-cream shadow-btn` |
| Label system | `font-mono text-mono-md uppercase tracking-[var(--ls-label)]` |
| Titolo pane | `font-sans text-2xl font-heavy` |
| Focus ring | `focus-visible:ring-2 focus-visible:ring-tide-blue` |

### 11.5 Dipendenze attese

```json
{
  "devDependencies": {
    "tailwindcss": "^3.4.0",
    "postcss": "^8",
    "autoprefixer": "^10"
  }
}
```

**Non** installare `tailwindcss@4` né `@tailwindcss/postcss`.

### 11.6 Migrazione dallo scaffold attuale

Lo scaffold Next del repo può ancora usare Tailwind v4 (`@import "tailwindcss"`, `@theme inline`). Prima di implementare UI Tide:

1. Downgrade a `tailwindcss@^3.4`
2. Rimuovere `@tailwindcss/postcss` / `tw-animate-css` se legato al pipeline v4
3. Aggiungere `tailwind.config.ts` come sopra
4. Riscrivere `app/globals.css` con `@tailwind` + variabili DSM
5. Allineare PostCSS a `tailwindcss` + `autoprefixer`

---

_Ultimo aggiornamento: Luglio 2026 · Owner: The Wave design/dev · Fonte: The Wave Design System (Storypoints Workspace)_
