import * as React from 'react';

export interface FormFieldProps {
  label?: string;
  htmlFor?: string;
  required?: boolean;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  /** Use on cream cards. @default false */
  light?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Labeling wrapper: mono label + optional required mark, hint, error. */
export function FormField(props: FormFieldProps): JSX.Element;
