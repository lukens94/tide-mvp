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

function applyThemeClass(theme: TideTheme): void {
  document.body.classList.remove('theme-dark', 'theme-light');
  document.body.classList.add(theme === 'light' ? 'theme-light' : 'theme-dark');
}

function readStoredTheme(): TideTheme {
  if (typeof window === 'undefined') return 'dark';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === 'light' ? 'light' : 'dark';
}

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const [theme, setThemeState] = React.useState<TideTheme>('dark');

  React.useEffect(() => {
    const initial = readStoredTheme();
    setThemeState(initial);
    applyThemeClass(initial);
  }, []);

  const setTheme = React.useCallback((next: TideTheme) => {
    setThemeState(next);
    applyThemeClass(next);
    window.localStorage.setItem(STORAGE_KEY, next);
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
