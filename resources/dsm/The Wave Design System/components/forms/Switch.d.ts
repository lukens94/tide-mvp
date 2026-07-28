import * as React from 'react';

export interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  /** Optional trailing label. */
  label?: React.ReactNode;
  /** True when placed on a cream surface. @default false */
  onCream?: boolean;
  style?: React.CSSProperties;
}

/** On/off toggle; track fills brand blue when on. */
export function Switch(props: SwitchProps): JSX.Element;
