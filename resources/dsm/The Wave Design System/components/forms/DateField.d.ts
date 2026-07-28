import * as React from 'react';

export interface DateFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Use on cream cards. @default false */
  light?: boolean;
}

/** Native date input styled to match the form fields. */
export function DateField(props: DateFieldProps): JSX.Element;
