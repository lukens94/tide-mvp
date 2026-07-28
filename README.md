# Tide

**Tide** is the internal surfer dashboard for **The Wave** — one beach for auth, profile, leave, sprint, time tracking, docs, daily, wellbeing, meetings, polls, and alerts.

_La marea del team, in un’unica spiaggia._

|             |                                                              |
| :---------- | :----------------------------------------------------------- |
| **Product** | Tide · The Wave                                              |
| **Users**   | Surfer (user) · Board (admin)                                |
| **Stack**   | Next.js + TypeScript · Supabase · shadcn/ui · TanStack Query |
| **Status**  | Scaffold + MVP specs                                         |

Full product and tech details: [docs/prd-tide-mvp.md](docs/prd-tide-mvp.md).

---

## Getting started

**Requirements:** Node.js 20+, [pnpm](https://pnpm.io/) 11+

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Open [http://127.0.0.1:3000](http://127.0.0.1:3000).

**From Cursor:** `Terminal → Run Task… → dev`, or open **Run and Debug** (`⇧⌘D`) and start **Next.js: dev server**.

### Environment

Copy [`.env.example`](.env.example) to `.env.local` and fill in:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

### Scripts

| Command             | Description            |
| :------------------ | :--------------------- |
| `pnpm dev`          | Next.js dev server     |
| `pnpm build`        | Production build       |
| `pnpm start`        | Serve production build |
| `pnpm lint`         | ESLint                 |
| `pnpm format`       | Prettier write         |
| `pnpm format:check` | Prettier check         |

### Commit messages

Commits must follow [Conventional Commits](https://www.conventionalcommits.org/) (enforced by Husky + commitlint), e.g. `feat:`, `fix:`, `chore:`, `docs:`.

---

## Documentation

Product specs live under [`docs/`](docs/INDEX.md):

| Doc                                          | Purpose                      |
| :------------------------------------------- | :--------------------------- |
| [INDEX](docs/INDEX.md)                       | Reading order and role map   |
| [PRD](docs/prd-tide-mvp.md)                  | Product scope and stack      |
| [Wireframes](docs/wireframe-page-by-page.md) | Page-by-page UI              |
| [Schema Supabase](docs/schema-supabase.md)   | DB, RLS, TypeScript types    |
| [DSM tokens](docs/dsm-tide-instructions.md)  | Design tokens for future DSM |

---

## DSM resources (reference only)

These assets live under [`resources/dsm/`](resources/dsm/) and are **not** part of the Next.js app. Use them as reference for the future Tide design system:

- [`Storypoints Workspace.html`](resources/dsm/Storypoints%20Workspace.html)
- [`The Wave Design System/`](resources/dsm/The%20Wave%20Design%20System/)

---

## MVP prototype

Static clickable prototype (GitHub Pages):

- Source: [`mvp/`](mvp/)
- Live: [lukens94.github.io/tide-mvp](https://lukens94.github.io/tide-mvp/)
