'use client';

import * as React from 'react';
import Link from 'next/link';
import { useAppShell } from '@/components/templates/app-shell';
import { cn } from '@/lib/utils';

export interface NavItemProps {
  icon: React.ReactNode;
  active?: boolean;
  href?: string;
  title?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
  /** Optional trailing badge (e.g. poll count) */
  badge?: React.ReactNode;
}

export function NavItem({
  icon,
  active = false,
  href,
  title,
  className,
  children,
  onClick,
  badge,
}: NavItemProps): React.ReactElement {
  const { collapsed } = useAppShell();
  const label = typeof children === 'string' ? children : title;

  const classes = cn(
    'flex w-full items-center rounded-tide-lg font-sans text-tide-sm font-medium transition duration-base',
    collapsed ? 'justify-center px-2 py-2' : 'gap-tide-3 px-3 py-2 text-left',
    active
      ? 'bg-tide-blue font-semibold text-tide-cream'
      : 'text-ink-muted hover:bg-[var(--nav-hover)] hover:text-ink',
    className,
  );

  const content = (
    <>
      <span className="inline-flex size-4 shrink-0 items-center justify-center">{icon}</span>
      {!collapsed ? (
        <>
          <span className="min-w-0 flex-1 truncate">{children}</span>
          {badge ? <span className="shrink-0">{badge}</span> : null}
        </>
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link href={href} title={collapsed ? label : title} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      title={collapsed ? label : title}
      className={classes}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
