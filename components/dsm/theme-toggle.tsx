'use client';

import * as React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/components/providers/theme-provider';
import { cn } from '@/lib/utils';

export interface ThemeToggleProps {
  className?: string;
  /** Compact icon-only control for topbars */
  compact?: boolean;
}

export function ThemeToggle({ className, compact = false }: ThemeToggleProps): React.ReactElement {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  if (compact) {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        className={cn(
          'inline-flex size-9 items-center justify-center rounded-tide-lg border border-tide-border text-ink-muted transition',
          'hover:border-tide-blue hover:bg-[var(--nav-hover)] hover:text-ink',
          className,
        )}
        aria-label={isLight ? 'Passa al tema dark' : 'Passa al tema light'}
        title={isLight ? 'Tema dark' : 'Tema light'}
      >
        {isLight ? <Moon className="size-4" /> : <Sun className="size-4" />}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        'inline-flex items-center gap-tide-2 rounded-tide-xl border border-tide-border px-3 py-2 font-mono text-mono-sm font-bold uppercase transition',
        'text-ink-muted hover:border-tide-blue hover:text-ink',
        className,
      )}
    >
      {isLight ? <Moon className="size-3.5" /> : <Sun className="size-3.5" />}
      Tema: {isLight ? 'light' : 'dark'}
    </button>
  );
}
