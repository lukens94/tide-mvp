import * as React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon node — a Lucide/Feather-style SVG. */
  children: React.ReactNode;
  /** Force the filled/active look. @default false */
  active?: boolean;
  /** Square edge length in px. @default 42 */
  size?: number;
  title?: string;
}

/** 42px square icon control; hover/active fills brand blue. */
export function IconButton(props: IconButtonProps): JSX.Element;
