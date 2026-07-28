import * as React from 'react';

export interface WeekButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  /** Active (filled blue) state. @default false */
  active?: boolean;
}

/** Small mono week selector for cream surfaces. */
export function WeekButton(props: WeekButtonProps): JSX.Element;
