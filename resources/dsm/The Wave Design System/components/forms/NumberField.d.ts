import * as React from 'react';

export interface NumberFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  value?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  /** Increment. @default 0.5 */
  step?: number;
  /** Use on cream cards. @default false */
  light?: boolean;
  style?: React.CSSProperties;
}

/** Mono, right-aligned numeric input with − / + steppers (story points). */
export function NumberField(props: NumberFieldProps): JSX.Element;
