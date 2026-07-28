import * as React from 'react';

export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  /** Background color (hex); ink auto-contrasts. @default '#0057FF' */
  color?: string;
}

/** Small mono pill tag, typically tinted with a project color. */
export function Chip(props: ChipProps): JSX.Element;
