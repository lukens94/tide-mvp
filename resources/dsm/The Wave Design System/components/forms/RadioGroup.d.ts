import * as React from 'react';

export type RadioOption = string | { value: string; label: string };

export interface RadioGroupProps {
  name?: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  /** Lay out horizontally. @default false */
  inline?: boolean;
  /** True when placed on a cream surface. @default false */
  onCream?: boolean;
  style?: React.CSSProperties;
}

/** Classic radio list with a brand-blue filled dot. */
export function RadioGroup(props: RadioGroupProps): JSX.Element;
