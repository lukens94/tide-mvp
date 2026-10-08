'use client';

import * as React from 'react';
import { PanelLeftClose, PanelLeft } from 'lucide-react';
import { useTheme } from '@/components/providers/theme-provider';
import { cn } from '@/lib/utils';

interface AppShellContextValue {
  collapsed: boolean;
}

const AppShellContext = React.createContext<AppShellContextValue>({ collapsed: false });

export function useAppShell(): AppShellContextValue {
  return React.useContext(AppShellContext);
}

export interface AppShellProps {
  sidebar: React.ReactNode;
  footer?: React.ReactNode;
  /** Sticky topbar (breadcrumb, search, alerts) — MVP dashboard pattern */
  topbar?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  /** Classes on content area — default includes gutter padding. Pass `p-0` for custom headers. */
  mainClassName?: string;
  brand?: React.ReactNode;
}

export function AppShell({
  sidebar,
  footer,
  topbar,
  children,
  className,
  mainClassName,
  brand,
}: AppShellProps): React.ReactElement {
  const [collapsed, setCollapsed] = React.useState(false);
  const { theme } = useTheme();

  return (
    <AppShellContext.Provider value={{ collapsed }}>
      <div className={cn('flex min-h-screen bg-tide-app-bg text-ink', className)}>
        <aside
          className={cn(
            'sticky top-0 flex h-screen shrink-0 flex-col border-r border-tide-line bg-tide-panel-2 transition-[width] duration-slow ease-spring',
            collapsed ? 'w-sidebar-min' : 'w-sidebar',
          )}
        >
          <div
            className={cn(
              'flex h-14 shrink-0 items-center border-b border-tide-line',
              collapsed ? 'justify-center px-2' : 'justify-between gap-2 px-3',
            )}
          >
            {!collapsed ? (
              brand ?? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src="/logo-thewave-cream.png"
                  alt="The Wave"
                  className={cn(
                    'h-5 w-auto max-w-[140px] object-contain transition',
                    theme === 'light' && 'brightness-0',
                  )}
                />
              )
            ) : null}
            <button
              type="button"
              onClick={() => setCollapsed((c) => !c)}
              className="rounded-tide-md p-1.5 text-ink-muted transition hover:bg-[var(--nav-hover)] hover:text-ink"
              aria-label={collapsed ? 'Espandi sidebar' : 'Comprimi sidebar'}
            >
              {collapsed ? <PanelLeft className="size-4" /> : <PanelLeftClose className="size-4" />}
            </button>
          </div>

          <nav
            className={cn(
              'flex flex-1 flex-col gap-0.5 overflow-auto p-tide-3',
              collapsed && 'items-center',
            )}
          >
            {sidebar}
          </nav>

          {footer ? (
            <div
              className={cn(
                'shrink-0 border-t border-tide-line',
                collapsed ? 'p-tide-2' : 'p-tide-4',
              )}
            >
              {footer}
            </div>
          ) : null}
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          {topbar ? (
            <header className="sticky top-0 z-20 flex h-topbar shrink-0 items-center justify-between gap-tide-4 border-b border-tide-line bg-tide-panel/92 px-tide-7 backdrop-blur-md">
              {topbar}
            </header>
          ) : null}
          <main className={cn('min-w-0 flex-1 overflow-auto', mainClassName ?? 'p-tide-7')}>
            {children}
          </main>
        </div>
      </div>
    </AppShellContext.Provider>
  );
}
