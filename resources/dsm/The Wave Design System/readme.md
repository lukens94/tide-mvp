# The Wave — Design System

A design system for **The Wave** (thewavestudio.it), a creative/dev studio. It is derived from the studio's internal product, the **Storypoints Workspace** — a sprint & story-point tracking dashboard used to plan sprints, log hours on a timesheet, keep per-project notes, and gamify progress with XP, levels, and badges.

The system captures The Wave's product identity: a **dark, warm workspace** built on cream "paper" cards, electric blue actions, and a Space-Mono "system voice" for labels and data.

---

## Sources

Everything here was reverse-engineered from real code. Store these for future reference (the reader may or may not have access):

- **GitHub — product codebase:** `simo99-design/storypoint` (branch `main`). Vanilla HTML/CSS/JS single-page app (`index.html`, `styles.css`, `app.js`) with a Supabase backend and `react-nice-avatar` for avatars.
- **Uploaded logo:** `uploads/Logo_The wave.png` → copied to `assets/logo-thewave-cream.png`. A cream "THE WAVE" wordmark (1840×200, transparent) intended for **dark backgrounds only**.
- **Live product:** the app references `https://www.thewavestudio.it/favicon.ico` as its brand mark.

No formal design-system doc was provided; tokens, components, and the UI kit were extracted from `styles.css` (40 KB of hand-authored CSS) and `app.js` (the render logic).

---

## Content fundamentals

**Language: Italian.** All product copy is in Italian, informal and second-person implied ("Continua così!", "Crea il tuo primo sprint per iniziare a tracciare le ore"). Keep new copy in Italian unless asked otherwise.

**Tone:** encouraging, direct, a little playful. The gamification layer speaks like a friendly coach — "Continua così! 🎯", "Livello 3 raggiunto! 🎉", "🔥 5 giorni di fila". Errors are plain and honest ("Non salvato", "Inserisci email e password.").

**Casing:**
- **Titles & big numbers** — sentence case, heavy weight (e.g. "Workspace progetti", "Nessuno sprint").
- **Labels, buttons, tabs, meta** — Space Mono, **UPPERCASE**, wide letter-spacing (e.g. "STORY POINTS PER PROGETTO", "SPRINT", "CALENDARIO ORE"). This is the system's signature move: anything that acts like a machine label is mono + uppercase.

**Emoji: yes, but scoped.** Emoji are a real part of the brand — but only in the **playful/gamification and navigation** contexts, never in dense data UI. Examples in use:
- Nav icons: 🎮 Dashboard, 📊 Tracking
- Badges: 🚀 Primo progetto, 🗓️ Pianificatore, ✅ Spedizioniere, ⭐ Mezzo cento, 🏆 Centurione, 🔥 Maratoneta, 📆 Costante
- Motivational: 🎯, 🎉, 🔥
- Empty states: 📁 (no projects), 🗓️ (no dates), 🚀 (no sprint)
- Random-avatar button: 🎲

Do **not** put emoji in tables, timesheets, form labels, or metrics.

**Numbers:** story points shown with up to one decimal ("2.5 SP"), sprint counts zero-padded ("02 Sprint"), percentages rounded ("67% completato"). Tabular-nums everywhere numbers align.

**Vibe:** a focused indie-studio tool that doesn't take itself too seriously — professional data with a game-like reward loop.

---

## Visual foundations

**Palette (5 brand colors + surfaces).** Black `#323232`, Cream `#FAF7EB`, Sand `#CDC3BA`, Blue `#0057FF`, Yellow `#FFD400`. Never pure black or pure white — the neutrals are warm. Blue is the single action color (buttons, focus, active nav, progress fills). Yellow is a rare high-energy highlight (one stat tile). Sand is a quiet secondary surface.

**Two surface worlds.** The app runs on **dark warm panels** (`#2A2A28` / `#363633` over a `#1F1F1D` backdrop) — but the *content* lives on **cream cards** (`#FAF7EB`, radius 22px). This dark-shell / cream-content contrast is the defining layout motif. A light theme (`body.theme-light`) flips only the dark panels to warm off-whites; cream cards and brand colors stay put.

**Type.** **Univers LT Pro** (the classic Swiss grotesk) for everything display and UI, run heavy (Black / 800–900 is the workhorse weight) with tight negative tracking on headings and the giant 92px SP counter; a condensed cut (`--font-cond`) is available for especially tight numerals. Space Mono for the "system voice" — labels, buttons, tabs, timestamps, hints — always uppercase, letter-spacing .08–.14em.

**Backgrounds.** Flat solid colors only. **No gradients, no images, no textures, no patterns.** The blue hero and colored tiles are solid fills. Depth comes from surface layering (panel → panel-2 → cream card), not from shadows or gradients.

**Corners.** Generous and consistent. Controls 11–12px, tiles/sections 14–16px, modals/workspace cards 18px, hero/panels 20px, the main cream card and sp-rows 22px. Chips and progress bars are fully pill (99px). Avatars and the level badge are circles.

**Borders.** Hairline 1px. On dark: `#45443F` (controls) / `#3A3A36` (dividers). On cream: `#E3DFD2` (borders) / `#EAE6DA` (dividers). One special case: the workspace card has a **5px colored top border** matching the active project color.

**Shadows.** Subtle and purposeful, not decorative. Tiles lift `0 8px 20px rgba(0,0,0,.18)` on hover; the primary button glows blue `0 6px 18px rgba(0,87,255,.35)` on hover; modals sit on `0 30px 80px rgba(0,0,0,.5)`; avatars get a ringed shadow (panel ring + blue ring + drop). Flat surfaces have no shadow.

**Motion.** Quick and springy. `cubic-bezier(.2,.8,.2,1)` for progress-bar fills (.5s) and modal pop-ins (.26s); `ease` at .12–.15s for control hovers. Signature interactions: buttons **lift** `translateY(-1px)` on hover and **press down** `translateY(1px) scale(.97)` on active; tiles lift on hover; icon buttons and cells scale up slightly. Modals `popIn` (scale .94→1 + slide up), overlays fade the backdrop in. A `level-pop` keyframe pulses the level badge with an expanding ring on level-up.

**Hover states.** Controls gain a blue border and/or blue fill; ghost text goes from muted → cream/black; nav items get a faint white wash then blue when active. Press states shrink slightly.

**Transparency & blur.** The modal overlay is `rgba(15,15,13,.6)` with `backdrop-filter: blur(3px)`. Semi-transparent whites (`rgba(255,255,255,.05–.22)`) create sub-surfaces inside the blue hero (progress track, level badge). Otherwise surfaces are opaque.

**Layout.** CSS Grid "bento" dashboards (14px gutters) that fill both width and height. A fixed 210px sidebar that collapses to 72px (icons only). Cards flex to fill and scroll internally rather than overflow. Focus ring is a 2px blue box-shadow.

**Imagery.** There is essentially none — this is a data tool. The only "imagery" is generated avatars (react-nice-avatar) constrained to an on-brand background palette (blue / sand / black / cream / yellow). No photography, no illustration.

---

## Iconography

**Inline SVG, Feather / Lucide style.** All functional icons are hand-inlined SVGs with a consistent stroke look: `fill="none"`, `stroke="currentColor"`, `stroke-width` ~2.0–2.4, `stroke-linecap="round"`, `stroke-linejoin="round"`, 24×24 viewBox. This matches **Lucide / Feather** exactly. Icons are typically rendered 13–18px.

Observed icons: hamburger menu, plus, close (×), folder, chevron-down (as CSS background on selects), bold/italic/list (rich-text toolbar), checkmark (polyline), pencil/edit, logout (log-out), eye (password toggle), users (collaborators), drag handle (⠿ braille char).

**No icon font, no sprite, no PNG icons** — every icon is inline SVG. Because there is no bundled icon set, this system links **[Lucide](https://lucide.dev)** from CDN as the sanctioned source, since the product's inline SVGs are drawn in Lucide's style. Use Lucide for any new icon (`lucide` web font or SVG). This is a documented substitution — the studio hand-draws equivalents, but Lucide is a pixel-match for their stroke style.

**Emoji as icons.** In gamification and nav contexts, emoji stand in for icons (see Content fundamentals). The drag handle uses the Braille glyph `⠿` (U+2837). The chevron on `<select>`s is an inline SVG encoded as a `data:` URL background-image.

**Brand mark.** The only logo asset is the cream "THE WAVE" wordmark (`assets/logo-thewave-cream.png`), for dark backgrounds. There is no standalone symbol/favicon in the provided assets (the app fetches one remotely). Do not invent one — set the wordmark on a dark or blue surface, or render "The Wave" in heavy Schibsted Grotesk where a mark is needed.

---

## Index / manifest

**Root**
- `styles.css` — global entry point (consumers link this). `@import`s everything below.
- `readme.md` — this file.
- `SKILL.md` — Agent-Skill wrapper for use in Claude Code.

**`tokens/`** — CSS custom properties (all reachable from `styles.css`)
- `fonts.css` — Univers LT Pro `@font-face` (brand sans, self-hosted OTF) + Space Mono import.
- `colors.css` — brand palette, dark surfaces, cream inks, semantic aliases, light-theme scope.
- `typography.css` — families, type scale, mono label scale, weights, line-heights, tracking.
- `spacing.css` — 14px-gutter spacing scale + component paddings + sidebar widths.
- `effects.css` — radii, shadows, overlay/blur, motion (easings & durations).
- `base.css` — reset, body defaults, `.mono` helper, reduced-motion.

**`components/`** — reusable React primitives (see each `*.prompt.md`)
- `core/` — Button, IconButton, Select, Input, Textarea, Checkbox, Tabs, SegmentedControl, Card, StatTile, Hero, ProgressBar, SprintProjectRow, Chip, Badge, GameStat, LevelBadge, StreakPill, Avatar, NavItem, WeekButton, EmptyState, Spinner, Modal, ConfirmDialog, Toast.
- `forms/` — FormField (label + hint + error wrapper), PasswordInput, SearchInput, NumberField, DateField, ChipSelect, ColorSwatchPicker, RadioGroup, Switch. (The base Input, Select, Textarea, and Checkbox live in `core/` and compose with these.)

**`ui_kits/`**
- `storypoints/` — the Storypoints Workspace product recreation (auth, gamification dashboard, sprint summary, timesheet calendar, project workspace).

**`assets/`**
- `logo-thewave-cream.png` — the wordmark (dark backgrounds only).

**Foundation cards** (populate the Design System tab): `guidelines/` holds the specimen `.html` cards for Type, Colors, Spacing, and Brand.

---

## Intentional additions / substitutions

- **Brand sans is Univers LT Pro** (self-hosted OTF in `assets/fonts/`). The product code shipped **Schibsted Grotesk** from Google Fonts only as a "Univers-like" web stand-in (its own CSS comment says so); the real Univers files were later supplied, so Univers is now primary with Schibsted Grotesk kept as the web fallback. **Space Mono** (the data/label voice) is the real font, from Google Fonts.
- **Icons: Lucide via CDN** substitutes for the product's hand-inlined SVGs, which are drawn in Lucide's exact style. Flagged above.
- **No logo symbol** was provided beyond the wordmark; none was invented.
