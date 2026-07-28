import * as React from 'react';

export interface ProgressBarProps {
  /** 0–100. */
  value?: number;
  /** Render for the blue hero (translucent track, cream fill). @default false */
  onBlue?: boolean;
  /** Override fill color (e.g. a project color). */
  tone?: string;
  height?: number;
  style?: React.CSSProperties;
}

/** Pill-shaped progress track + fill. */
export function ProgressBar(props: ProgressBarProps): JSX.Element;
