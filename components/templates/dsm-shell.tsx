'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Palette,
  Type,
  Ruler,
  Atom,
  Component,
  Boxes,
  LayoutTemplate,
  ArrowLeft,
} from 'lucide-react';
import { AppShell, useAppShell } from '@/components/templates/app-shell';
import { NavItem } from '@/components/molecules/nav-item';
import { ThemeToggle } from '@/components/dsm/theme-toggle';

interface DsmNavEntry {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const NAV: DsmNavEntry[] = [
  { href: '/dsm', label: 'Foundations', icon: <LayoutDashboard className="size-4" /> },
  { href: '/dsm/colors', label: 'Colors', icon: <Palette className="size-4" /> },
  { href: '/dsm/typography', label: 'Typography', icon: <Type className="size-4" /> },
  { href: '/dsm/spacing', label: 'Spacing', icon: <Ruler className="size-4" /> },
  { href: '/dsm/atoms', label: 'Atoms', icon: <Atom className="size-4" /> },
  { href: '/dsm/molecules', label: 'Molecules', icon: <Component className="size-4" /> },
  { href: '/dsm/organisms', label: 'Organisms', icon: <Boxes className="size-4" /> },
  { href: '/dsm/templates', label: 'Templates', icon: <LayoutTemplate className="size-4" /> },
];

function DsmFooter(): React.ReactElement {
  const { collapsed } = useAppShell();

  if (collapsed) {
    return (
      <Link
        href="/"
        title="Torna a Tide"
        className="flex items-center justify-center rounded-tide-md p-2 text-ink-muted transition hover:bg-[var(--nav-hover)] hover:text-ink"
      >
        <ArrowLeft className="size-4" />
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className="flex items-center gap-tide-2 font-mono text-mono-xs uppercase text-ink-muted transition hover:text-ink"
    >
      <ArrowLeft className="size-3.5" />
      Torna a Tide
    </Link>
  );
}

export interface DsmShellProps {
  title: string;
  description?: React.ReactNode;
  children: React.ReactNode;
}

export function DsmShell({ title, description, children }: DsmShellProps): React.ReactElement {
  const pathname = usePathname();

  return (
    <AppShell
      mainClassName="p-0"
      footer={<DsmFooter />}
      topbar={
        <>
          <div className="min-w-0 text-tide-sm text-ink-muted">
            DSM / <strong className="font-semibold text-ink">{title}</strong>
          </div>
          <ThemeToggle compact />
        </>
      }
      sidebar={
        <>
          {NAV.map((item) => {
            const active =
              item.href === '/dsm' ? pathname === '/dsm' : pathname.startsWith(item.href);
            return (
              <NavItem key={item.href} href={item.href} icon={item.icon} active={active}>
                {item.label}
              </NavItem>
            );
          })}
        </>
      }
    >
      <header className="border-b border-tide-line bg-tide-panel px-tide-7 py-tide-6 sm:px-tide-10">
        <h2 className="font-heavy text-tide-2xl tracking-tight text-ink sm:text-tide-3xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-tide-2 max-w-2xl text-tide-sm text-ink-muted">{description}</p>
        ) : null}
      </header>
      <div className="space-y-gutter p-tide-7 sm:p-tide-10">{children}</div>
    </AppShell>
  );
}
