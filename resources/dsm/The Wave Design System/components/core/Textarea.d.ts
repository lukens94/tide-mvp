import * as React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Mono uppercase label above the field. */
  label?: string;
  /** Use on cream cards (light fill, dark text). @default false */
  light?: boolean;
  wrapStyle?: React.CSSProperties;
}

/** Multiline text field matching Input's look. */
export function Textarea(props: TextareaProps): JSX.Element;
