import * as React from 'react';

export type SelectOption = string | { value: string; label: string };

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  options: SelectOption[];
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  /** Use on cream cards (light fill, dark text). @default false */
  light?: boolean;
}

/** The "field pill" dropdown — mono uppercase, inline chevron. */
export function Select(props: SelectProps): JSX.Element;
