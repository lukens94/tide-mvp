# Storypoints Workspace — UI kit

A high-fidelity recreation of **The Wave's** internal product, the *Storypoints Workspace* — a sprint & story-point tracker. Built entirely from the design-system primitives in `components/core/`.

## Files
- `index.html` — interactive entry point. Opens on the **login** screen; "Accedi" dismisses it into the app. Sidebar switches between **Dashboard** (gamification) and **Tracking**; Tracking has three tabs (**Sprint**, **Calendario Ore**, **Workspace Progetti**). Checkboxes, tabs, week selector, and project selector are all live.
- `Screens.jsx` — all screens (`AuthScreen`, `Sidebar`, `Dashboard`, `Tracking`, `SprintSummary`, `CalendarPane`, `WorkspacePane`, `App`), assigned to `window` (`TWApp`, …).

## Screens
1. **Auth** — centered login card, blue header, cream inputs.
2. **Dashboard** — bento gamification grid: XP/level hero, four game stats, achievement badges (earned/locked), tracking callout.
3. **Sprint summary** — blue SP hero + stat tiles + per-project story-point rows on a cream card.
4. **Timesheet calendar** — Mon–Fri × hourly grid with colored project cells, week selector, assigned-project chips.
5. **Workspace** — per-project rich-text brief + to-do checklist, with a project color top-border.

## Notes
- Data is static sample data (see `PROJECTS` / `GRID` in `Screens.jsx`), shaped like the real app's state.
- Components come from `window.TheWaveDesignSystem_664d29` via the compiled `_ds_bundle.js`.
- The real product persists to Supabase and uses `react-nice-avatar`; those are represented statically here (a solid-color avatar dot).
