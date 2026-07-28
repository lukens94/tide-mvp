import * as React from 'react';

export interface CheckboxProps {
  label: React.ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  /** True when placed on a cream surface (affects label color). @default true */
  onCream?: boolean;
  style?: React.CSSProperties;
}

/** Rounded-square checkbox; done state fills blue and strikes the label. */
export function Checkbox(props: CheckboxProps): JSX.Element;
