import * as React from 'react';

export interface NavItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Leading icon — emoji or SVG. */
  icon: React.ReactNode;
  children: React.ReactNode;
  /** Active (filled blue) state. @default false */
  active?: boolean;
}

/** Sidebar navigation row; active fills brand blue. */
export function NavItem(props: NavItemProps): JSX.Element;
