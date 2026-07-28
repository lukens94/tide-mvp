import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Mono uppercase label rendered above the field. */
  label?: string;
  /** Use on cream cards (light fill, dark text). @default false */
  light?: boolean;
  /** Style for the wrapping element. */
  wrapStyle?: React.CSSProperties;
}

/** Labelled text field with brand-blue focus ring. */
export function Input(props: InputProps): JSX.Element;
