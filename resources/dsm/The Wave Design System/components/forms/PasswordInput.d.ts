import * as React from 'react';

export interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  /** Use on cream cards. @default false */
  light?: boolean;
  wrapStyle?: React.CSSProperties;
}

/** Password field with a show/hide eye toggle. */
export function PasswordInput(props: PasswordInputProps): JSX.Element;
