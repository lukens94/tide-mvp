'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  UserRound,
  CalendarDays,
  Waves,
  Timer,
  FileText,
  PencilLine,
  LifeBuoy,
  Calendar,
  Vote,
  BookOpen,
  Bell,
  Folder,
  Flame,
} from 'lucide-react';
import { AppShell, useAppShell } from '@/components/templates/app-shell';
import { NavItem } from '@/components/molecules/nav-item';
import { NavGroup } from '@/components/molecules/nav-group';
import { PageHeader } from '@/components/molecules/page-header';
import { Avatar } from '@/components/atoms/avatar';
import { IconButton } from '@/components/atoms/icon-button';
import { Button } from '@/components/atoms/button';
import { Chip } from '@/components/atoms/chip';
import { Hero } from '@/components/organisms/hero';
import { Card } from '@/components/organisms/card';
import { GameStat, StatTile, StreakPill, LevelBadge, Badge } from '@/components/molecules';
import { ThemeToggle } from '@/components/dsm/theme-toggle';
import { cn } from '@/lib/utils';

function DashboardFooter(): React.ReactElement {
  const { collapsed } = useAppShell();

  if (collapsed) {
    return (
      <div className="flex justify-center">
        <Avatar initials="LV" size={32} ring title="Luca Valenti" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-tide-3">
      <Avatar initials="LV" size={36} ring />
      <div className="min-w-0">
        <p className="truncate font-heavy text-tide-xs text-ink">Luca Valenti</p>
        <p className="font-mono text-mono-2xs uppercase text-ink-muted">Surfer</p>
      </div>
    </div>
  );
}

function Topbar(): React.ReactElement {
  return (
    <>
      <div className="min-w-0 text-tide-sm text-ink-muted">
        Tide / <strong className="font-semibold text-ink">Wave Home</strong>
      </div>
      <div className="flex items-center gap-tide-2">
        <input
          type="search"
          placeholder="Cerca in Tide…"
          className={cn(
            'hidden w-48 rounded-tide-lg border border-tide-border bg-tide-panel-2 px-3 py-1.5 text-tide-sm text-ink placeholder:text-ink-muted outline-none transition',
            'focus-visible:ring-2 focus-visible:ring-tide-blue sm:block md:w-56',
          )}
        />
        <ThemeToggle compact />
        <IconButton aria-label="Tide Alerts" title="Tide Alerts">
          <Bell className="size-4" />
          <span className="absolute right-1.5 top-1.5 size-1.5 rounded-full bg-tide-danger" />
        </IconButton>
        <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
          Esci
        </Button>
      </div>
    </>
  );
}

export default function DashboardPage(): React.ReactElement {
  const pathname = usePathname();

  return (
    <AppShell
      footer={<DashboardFooter />}
      topbar={<Topbar />}
      sidebar={
        <>
          <NavGroup label="Spiaggia">
            <NavItem href="/" icon={<LayoutDashboard className="size-4" />} active={pathname === '/'}>
              Wave Home
            </NavItem>
            <NavItem href="/#profile" icon={<UserRound className="size-4" />}>
              My Beach
            </NavItem>
            <NavItem href="/#leave" icon={<CalendarDays className="size-4" />}>
              Leave Tide
            </NavItem>
            <NavItem href="/#sprints" icon={<Waves className="size-4" />}>
              Sprint Surf
            </NavItem>
            <NavItem href="/#time" icon={<Timer className="size-4" />}>
              Time Current
            </NavItem>
            <NavItem href="/#docs" icon={<FileText className="size-4" />}>
              Doc Shell
            </NavItem>
            <NavItem href="/#daily" icon={<PencilLine className="size-4" />}>
              Daily Wave
            </NavItem>
            <NavItem href="/#wellbeing" icon={<LifeBuoy className="size-4" />}>
              Wellbeing Buoy
            </NavItem>
          </NavGroup>

          <NavGroup label="Ops">
            <NavItem href="/#meetings" icon={<Calendar className="size-4" />}>
              Meetings
            </NavItem>
            <NavItem
              href="/#polls"
              icon={<Vote className="size-4" />}
              badge={
                <Chip size="sm" color="#FF6B35">
                  1
                </Chip>
              }
            >
              Polls
            </NavItem>
          </NavGroup>

          <NavGroup label="Sistema">
            <NavItem
              href="/dsm"
              icon={<BookOpen className="size-4" />}
              active={pathname.startsWith('/dsm')}
            >
              Design System
            </NavItem>
          </NavGroup>
        </>
      }
    >
      <div className="mx-auto max-w-6xl">
        <PageHeader
          eyebrow="Wave Home"
          title="Ciao Luca"
          description="La marea di oggi è calma — imbraccia la tavola."
          actions={
            <>
              <Button size="sm" icon={<PencilLine className="size-3" />}>
                Scrivi daily
              </Button>
              <Button size="sm" variant="outline">
                Richiedi ferie
              </Button>
            </>
          }
        />

        <div className="mb-tide-7 grid gap-gutter sm:grid-cols-2 lg:grid-cols-4">
          <Card dense>
            <p className="font-mono text-mono-2xs uppercase text-tide-cream-mut">Ferie saldo</p>
            <p className="mt-1 font-heavy text-tide-2xl tabular-nums leading-none">
              12<span className="text-tide-sm font-normal text-tide-cream-mut">g</span>
            </p>
            <p className="mt-tide-2 text-tide-xs text-tide-cream-mut">Permessi 3g</p>
          </Card>
          <Card dense>
            <p className="font-mono text-mono-2xs uppercase text-tide-cream-mut">Sprint SP</p>
            <p className="mt-1 font-heavy text-tide-2xl tabular-nums leading-none">
              8<span className="text-tide-sm font-normal text-tide-cream-mut">/21</span>
            </p>
            <div className="mt-tide-3 h-1.5 overflow-hidden rounded-pill bg-tide-cream-line">
              <div className="h-full w-[38%] rounded-pill bg-tide-blue" />
            </div>
          </Card>
          <Card dense>
            <p className="font-mono text-mono-2xs uppercase text-tide-cream-mut">Ore settimana</p>
            <p className="mt-1 font-heavy text-tide-2xl tabular-nums leading-none">
              32<span className="text-tide-sm font-normal text-tide-cream-mut">h</span>
            </p>
            <p className="mt-tide-2 text-tide-xs text-tide-cream-mut">Target 40h</p>
          </Card>
          <Card dense className="cursor-pointer transition hover:-translate-y-px hover:shadow-tile">
            <p className="font-mono text-mono-2xs uppercase text-tide-cream-mut">Marea</p>
            <p className="mt-1 font-heavy text-tide-xl leading-none">Calma</p>
            <p className="mt-tide-2 text-tide-xs text-tide-cream-mut">Boa 4/5 · radar 2.1</p>
          </Card>
        </div>

        <div className="mb-tide-7 grid gap-gutter lg:grid-cols-2">
          <Hero compact name="Sprint 07" range="14–25 Lug 2026" done={18.5} total={28} />
          <Card dense>
            <div className="flex flex-wrap items-center justify-between gap-tide-3">
              <div>
                <h2 className="font-heavy text-tide-lg">Prossimo passo</h2>
                <p className="mt-1 text-tide-sm text-tide-cream-mut">
                  Compila il Daily Wave e aggiorna i SP dello sprint.
                </p>
              </div>
              <div className="flex items-center gap-tide-2 rounded-tide-xl bg-tide-blue px-tide-4 py-tide-2">
                <LevelBadge level={3} size={40} />
                <StreakPill>5 gg</StreakPill>
              </div>
            </div>
            <div className="mt-tide-5 flex flex-wrap gap-tide-2">
              <Button size="sm" icon={<Timer className="size-3" />}>
                Apri tracking
              </Button>
              <Link href="/dsm">
                <Button size="sm" variant="outline">
                  Apri DSM
                </Button>
              </Link>
            </div>
          </Card>
        </div>

        <div className="mb-tide-7 grid gap-tide-3 sm:grid-cols-2 lg:grid-cols-4">
          <GameStat num="128" label="XP totali" />
          <StatTile num="12" label="Sprint" tone="sand" />
          <StatTile num="67%" label="Done" tone="dark" />
          <StatTile num="2.5" label="SP oggi" tone="yellow" />
        </div>

        <div className="grid gap-tide-3 md:grid-cols-2">
          <Badge
            icon={<Folder className="size-4 text-tide-blue" />}
            name="Primo progetto"
            desc="Crea il tuo primo progetto"
          />
          <Badge
            icon={<Flame className="size-4" />}
            name="Streak master"
            desc="7 giorni consecutivi"
            locked
          />
        </div>
      </div>
    </AppShell>
  );
}
