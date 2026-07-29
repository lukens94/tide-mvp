'use client';

import * as React from 'react';

export type TideTheme = 'dark' | 'light';

interface ThemeContextValue {
  theme: TideTheme;
  setTheme: (theme: TideTheme) => void;
  toggleTheme: () => void;
}

const STORAGE_KEY = 'tide-theme';

const ThemeContext = React.createContext<ThemeContextValue | null>(null);

const listeners = new Set<() => void>();

function emit(): void {
  listeners.forEach((listener) => listener());
}

function applyThemeClass(theme: TideTheme): void {
  if (typeof document === 'undefined') return;
  document.body.classList.remove('theme-dark', 'theme-light');
  document.body.classList.add(theme === 'light' ? 'theme-light' : 'theme-dark');
}

function readStoredTheme(): TideTheme {
  if (typeof window === 'undefined') return 'dark';
  try {
    return window.localStorage.getItem(STORAGE_KEY) === 'light' ? 'light' : 'dark';
  } catch {
    return 'dark';
  }
}

function subscribe(onStoreChange: () => void): () => void {
  listeners.add(onStoreChange);
  const onStorage = (event: StorageEvent): void => {
    if (event.key === STORAGE_KEY || event.key === null) onStoreChange();
  };
  window.addEventListener('storage', onStorage);
  return () => {
    listeners.delete(onStoreChange);
    window.removeEventListener('storage', onStorage);
  };
}

function getServerSnapshot(): TideTheme {
  return 'dark';
}

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const theme = React.useSyncExternalStore(subscribe, readStoredTheme, getServerSnapshot);

  const setTheme = React.useCallback((next: TideTheme) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore quota / private mode
    }
    applyThemeClass(next);
    emit();
  }, []);

  const toggleTheme = React.useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [setTheme, theme]);

  const value = React.useMemo(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, setTheme, toggleTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const ctx = React.useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return ctx;
}

/** Inline bootstrap — first script in <body> to avoid theme FOUC. */
export const THEME_BOOTSTRAP_SCRIPT = `(function(){try{var t=localStorage.getItem('${STORAGE_KEY}');var c=t==='light'?'theme-light':'theme-dark';document.body.classList.remove('theme-dark','theme-light');document.body.classList.add(c);}catch(e){document.body.classList.add('theme-dark');}})();`;
