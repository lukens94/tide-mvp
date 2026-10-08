'use client';

import * as React from 'react';
import { useAppShell } from '@/components/templates/app-shell';
import { cn } from '@/lib/utils';

export interface NavGroupProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

/** Section label for sidebar nav (Spiaggia / Ops / Board). */
export function NavGroup({ label, children, className }: NavGroupProps): React.ReactElement {
  const { collapsed } = useAppShell();

  return (
    <div className={cn('flex flex-col gap-0.5', className)}>
      {!collapsed ? (
        <p className="px-3 pb-1 pt-tide-3 font-mono text-mono-2xs uppercase text-ink-muted first:pt-0">
          {label}
        </p>
      ) : (
        <div className="my-tide-2 h-px w-6 self-center bg-tide-line" aria-hidden />
      )}
      {children}
    </div>
  );
}
