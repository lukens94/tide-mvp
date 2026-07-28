import * as React from 'react';

export type ChipOption = string | { value: string; label: string };

export interface ChipSelectProps {
  options: ChipOption[];
  value?: string;
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
}

/** Single-select pill group (avatar-picker pattern); active chip fills blue. */
export function ChipSelect(props: ChipSelectProps): JSX.Element;
