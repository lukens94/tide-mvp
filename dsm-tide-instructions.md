# Tide — Design System Manager (DSM)

**Prodotto:** Tide · The Wave  
**Versione:** 1.0  
**Stack target:** Next.js · Tailwind CSS · shadcn/ui  
**Fonte:** token brand Wave (colori, shadow, tipografia Univers LT Pro)

Documento operativo per chi configura il DSM (Figma Variables, Tailwind theme, shadcn CSS variables). I valori sotto sono la **fonte di verità** — non inventare varianti non elencate.

---

## 1. Principi

| Regola | Dettaglio |
| :-- | :-- |
| **Naming** | `{categoria}/{nome}` in design tool · `--tide-{categoria}-{nome}` in CSS · `tide.{categoria}.{nome}` in Tailwind |
| **Unità tipografiche** | Specifiche in **pt** (design). In codice convertire in **rem** con base `16px` (`1pt = 1px` nel handoff web). |
| **Pesi font** | Solo tre pesi ufficiali: **93 Extra Bold Ext**, **65 Bold**, **55 Roman**. |
| **Varianti body/label** | Dove compare `55 Roman / 65 Bold`, la variante Bold è per enfasi inline — non un token separato. |
| **shadcn** | Mappare i token semantici shadcn (`--primary`, `--destructive`, …) sui token Tide — non duplicare palette parallele. |

---

## 2. Colori

### 2.1 Primary

| Token DSM | Hex | Uso |
| :-- | :-- | :-- |
| `Primary/Blue` | `#0057FF` | CTA principali, link attivi, focus ring, accent brand |
| `Primary/Dark Blue` | `#0043C5` | Hover/pressed su elementi blue, stati attivi sidebar |
| `Primary/Yellow` | `#FFD400` | Highlight, badge informativi, accent secondario “sole” |
| `Primary/Orange` | `#F97D16` | Accent warm, stati di attenzione non critici |

### 2.2 Secondary

| Token DSM | Hex | Uso |
| :-- | :-- | :-- |
| `Secondary/White` | `#FAF7ED` | Background pagina, surface principale (cream) |
| `Secondary/Beige` | `#E2DBBE` | Surface secondarie, card alternate, divider soft |
| `Secondary/Black` | `#313131` | Testo primario, titoli su sfondo chiaro |
| `Secondary/Mid Gray` | `#717171` | Testo secondario, placeholder, meta info |
| `Secondary/Light Gray` | `#D9D9D9` | Bordi, separatori, disabled background |

### 2.3 State

| Token DSM | Hex | Uso |
| :-- | :-- | :-- |
| `State/Red` | `#FF0808` | Errori, validazione, alert critici, destructive |
| `State/Light Red` | `#FFE6E6` | Background alert/error, banner soft |

### 2.4 Mappatura semantica shadcn

Usare questa tabella quando si configura `globals.css` / `tailwind.config`:

| Token shadcn | Token Tide |
| :-- | :-- |
| `--background` | `Secondary/White` |
| `--foreground` | `Secondary/Black` |
| `--card` | `Secondary/White` |
| `--card-foreground` | `Secondary/Black` |
| `--popover` | `Secondary/White` |
| `--popover-foreground` | `Secondary/Black` |
| `--primary` | `Primary/Blue` |
| `--primary-foreground` | `#FFFFFF` |
| `--secondary` | `Secondary/Beige` |
| `--secondary-foreground` | `Secondary/Black` |
| `--muted` | `Secondary/Beige` |
| `--muted-foreground` | `Secondary/Mid Gray` |
| `--accent` | `Primary/Yellow` |
| `--accent-foreground` | `Secondary/Black` |
| `--destructive` | `State/Red` |
| `--destructive-foreground` | `#FFFFFF` |
| `--border` | `Secondary/Light Gray` |
| `--input` | `Secondary/Light Gray` |
| `--ring` | `Primary/Blue` |

**Tema `ocean_dark`** (preferenza utente in schema Supabase): derivare da `Secondary/Black` come background e `Secondary/White` come foreground — mantenere `Primary/Blue` e `State/Red` invariati.

---

## 3. Shadow

| Token DSM | Valore CSS | Uso |
| :-- | :-- | :-- |
| `Shadow/Card` | `0px 2px 16px 0px rgba(0, 0, 0, 0.04)` | Card, popover, dropdown, modali leggere |

**Tailwind**

```css
--shadow-card: 0px 2px 16px 0px rgba(0, 0, 0, 0.04);
```

```ts
// tailwind.config — extend boxShadow
card: "var(--shadow-card)"
```

Non aggiungere altre elevation nel MVP salvo necessità esplicita (es. modal overlay usa backdrop, non shadow extra).

---

## 4. Tipografia — Univers LT Pro

### 4.1 Famiglia e pesi

| Peso design | Nome file / CSS | `font-weight` | Note |
| :-- | :-- | :-- | :-- |
| **93 Extra Bold Ext** | `UniversLTPro-93ExBoldExt` | `800` | Headline, Label M/S, Button S |
| **65 Bold** | `UniversLTPro-65Bold` | `700` | Body bold, Label L bold, Button L |
| **55 Roman** | `UniversLTPro-55Roman` | `400` | Body regular, Button M |

**Fallback stack**

```css
font-family: "Univers LT Pro", "Univers", system-ui, -apple-system, sans-serif;
```

> Univers LT Pro è un font commerciale (Linotype/Monotype). Verificare licenza web prima del deploy. In dev usare fallback system finché i file `.woff2` non sono in `public/fonts/`.

### 4.2 Scale tipografica

#### Headline

| Token | Peso | Size (pt) | Line height | Size (rem) | `line-height` |
| :-- | :-- | :-- | :-- | :-- | :-- |
| `Typography/Headline 1` | 93 Extra Bold Ext | 48 | 120% | `3rem` | `1.2` |
| `Typography/Headline 2` | 93 Extra Bold Ext | 36 | 120% | `2.25rem` | `1.2` |
| `Typography/Headline 3` | 93 Extra Bold Ext | 20 | 120% | `1.25rem` | `1.2` |

#### Body

| Token | Peso | Size (pt) | Line height | Size (rem) | `line-height` |
| :-- | :-- | :-- | :-- | :-- | :-- |
| `Typography/Body L` | 55 Roman · 65 Bold | 20 | 150% | `1.25rem` | `1.5` |
| `Typography/Body M` | 55 Roman · 65 Bold | 16 | 150% | `1rem` | `1.5` |
| `Typography/Body S` | 55 Roman · 65 Bold | 14 | 150% | `0.875rem` | `1.5` |
| `Typography/Body XS` | 55 Roman · 65 Bold | 12 | 150% | `0.75rem` | `1.5` |

#### Label

| Token | Peso | Size (pt) | Line height | Size (rem) | `line-height` |
| :-- | :-- | :-- | :-- | :-- | :-- |
| `Typography/Label L` | 55 Roman · 65 Bold | 16 | 120% | `1rem` | `1.2` |
| `Typography/Label M` | 93 Extra Bold Ext | 14 | 120% | `0.875rem` | `1.2` |
| `Typography/Label S` | 93 Extra Bold Ext | 12 | 120% | `0.75rem` | `1.2` |

#### Button e Link

| Token | Peso | Size (pt) | Line height | Size (rem) | `line-height` |
| :-- | :-- | :-- | :-- | :-- | :-- |
| `Typography/Button L` | 65 Bold | 16 | 100% | `1rem` | `1` |
| `Typography/Button M` | 55 Roman | 14 | 100% | `0.875rem` | `1` |
| `Typography/Button S` | 93 Extra Bold Ext | 12 | 100% | `0.75rem` | `1` |

### 4.3 Mappatura HTML / componenti

| Elemento UI | Token tipografico |
| :-- | :-- |
| Titolo pagina (h1) | Headline 1 |
| Titolo sezione (h2) | Headline 2 |
| Titolo card / widget (h3) | Headline 3 |
| Paragrafo default | Body M |
| Testo helper, caption | Body S / Body XS |
| `Label` form (shadcn) | Label L |
| Badge, tag, overline | Label M / Label S |
| `Button` size default | Button M |
| `Button` size lg | Button L |
| `Button` size sm | Button S |
| Link inline | Button M · colore `Primary/Blue` · hover `Primary/Dark Blue` |

---

## 5. Istruzioni DSM — Figma

1. **Crea collection `Tide/Colours`** con modalità `Light` (default). Raggruppa in sottocartelle: Primary, Secondary, State.
2. **Crea collection `Tide/Shadow`** con variabile `Shadow/Card` (effect style, non colore).
3. **Crea text styles** con naming esatto della sezione 4 (`Typography/Headline 1`, …). Ogni style deve referenziare Univers LT Pro col peso corretto.
4. **Non creare** colori fuori tabella — per stati hover usare opacità sul token base (es. Primary/Blue al 90%) solo se documentato in component spec.
5. **Pubblica** la library e abilita per il file wireframe Tide. Aggiorna versione DSM ad ogni modifica token.

---

## 6. Istruzioni DSM — Codice (Tailwind + shadcn)

### 6.1 CSS variables (`app/globals.css`)

Definire sotto `:root` i token colore e shadow della sezione 2–3, poi mappare le variabili shadcn come in tabella 2.4.

### 6.2 Tailwind extend

```ts
// Esempio struttura — adattare al tailwind.config del repo
theme: {
  extend: {
    colors: {
      tide: {
        blue: "#0057FF",
        "dark-blue": "#0043C5",
        yellow: "#FFD400",
        orange: "#F97D16",
        white: "#FAF7ED",
        beige: "#E2DBBE",
        black: "#313131",
        "mid-gray": "#717171",
        "light-gray": "#D9D9D9",
        red: "#FF0808",
        "light-red": "#FFE6E6",
      },
    },
    boxShadow: {
      card: "var(--shadow-card)",
    },
    fontFamily: {
      sans: ['"Univers LT Pro"', "Univers", "system-ui", "sans-serif"],
    },
    fontSize: {
      "headline-1": ["3rem", { lineHeight: "1.2", fontWeight: "800" }],
      "headline-2": ["2.25rem", { lineHeight: "1.2", fontWeight: "800" }],
      "headline-3": ["1.25rem", { lineHeight: "1.2", fontWeight: "800" }],
      "body-l": ["1.25rem", { lineHeight: "1.5", fontWeight: "400" }],
      "body-m": ["1rem", { lineHeight: "1.5", fontWeight: "400" }],
      "body-s": ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }],
      "body-xs": ["0.75rem", { lineHeight: "1.5", fontWeight: "400" }],
      "label-l": ["1rem", { lineHeight: "1.2", fontWeight: "400" }],
      "label-m": ["0.875rem", { lineHeight: "1.2", fontWeight: "800" }],
      "label-s": ["0.75rem", { lineHeight: "1.2", fontWeight: "800" }],
      "button-l": ["1rem", { lineHeight: "1", fontWeight: "700" }],
      "button-m": ["0.875rem", { lineHeight: "1", fontWeight: "400" }],
      "button-s": ["0.75rem", { lineHeight: "1", fontWeight: "800" }],
    },
  },
},
```

### 6.3 Font loading (`app/layout.tsx`)

```tsx
import localFont from "next/font/local";

const universLTPro = localFont({
  src: [
    { path: "../public/fonts/UniversLTPro-55Roman.woff2", weight: "400" },
    { path: "../public/fonts/UniversLTPro-65Bold.woff2", weight: "700" },
    { path: "../public/fonts/UniversLTPro-93ExBoldExt.woff2", weight: "800" },
  ],
  variable: "--font-univers",
  display: "swap",
});
```

Applicare `className={universLTPro.variable}` su `<html>` e `font-sans` sul body.

### 6.4 Componenti shadcn

| Componente | Token da applicare |
| :-- | :-- |
| `Button` | `Button M/L/S` · primary bg `Primary/Blue` · hover `Primary/Dark Blue` |
| `Card` | bg `Secondary/White` · shadow `Shadow/Card` · titolo `Headline 3` |
| `Input` / `Textarea` | testo `Body M` · label `Label L` · border `Secondary/Light Gray` · focus ring `Primary/Blue` |
| `Badge` | `Label S` · varianti info/warn con `Primary/Yellow` / `Primary/Orange` |
| `Alert` destructive | bg `State/Light Red` · testo/icona `State/Red` |
| `Sidebar` | bg `Secondary/White` · item attivo `Primary/Dark Blue` su testo/border |

---

## 7. Checklist handoff design → dev

- [ ] Tutti i colori in Figma usano variabili `Tide/Colours` — nessun hex hardcoded nei componenti
- [ ] Tutti i text layer usano text styles `Typography/*`
- [ ] Card e surface elevati usano solo `Shadow/Card`
- [ ] Export font `.woff2` (400, 700, 800) in repo o CDN licenziato
- [ ] `globals.css` allineato a tabella mappatura shadcn (§ 2.4)
- [ ] Contrasto WCAG AA verificato su coppie testo/sfondo critiche (`Secondary/Black` su `Secondary/White`, bianco su `Primary/Blue`, `State/Red` su `State/Light Red`)

---

## 8. Riferimenti progetto

| Documento | Relazione |
| :-- | :-- |
| [PRD — Tide MVP](prd-tide-mvp.md) | Stack shadcn, tema “ocean”, milestone S1 Foundation |
| [Wireframe page-by-page](wireframe-page-by-page.md) | Shell layout, componenti shadcn per schermata |
| [Schema Supabase](schema-supabase.md) | Preferenza tema utente (`light` · `ocean_dark` · `system`) |

---

*Ultimo aggiornamento: Luglio 2026 · Owner: The Wave design/dev*
