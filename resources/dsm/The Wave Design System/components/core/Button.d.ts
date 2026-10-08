import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default 'primary' */
  variant?: 'primary' | 'ghost';
  /** Optional leading icon node (Lucide/Feather-style SVG). */
  icon?: React.ReactNode;
  disabled?: boolean;
  children?: React.ReactNode;
}

/**
 * Primary or ghost action button. IBM Plex Mono, uppercase, springy hover/press.
 * @startingPoint section="Core" subtitle="Primary & ghost action buttons" viewport="700x140"
 */
export function Button(props: ButtonProps): JSX.Element;
