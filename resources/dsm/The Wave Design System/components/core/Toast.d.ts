import * as React from 'react';

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** @default 'neutral' */
  type?: 'neutral' | 'success' | 'error';
}

/** Transient notification on the dark raised surface. */
export function Toast(props: ToastProps): JSX.Element;
