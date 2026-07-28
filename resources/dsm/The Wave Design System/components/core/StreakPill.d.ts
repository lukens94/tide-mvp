import * as React from 'react';

export interface StreakPillProps {
  children: React.ReactNode;
  /** Translucent-white pill for the blue hero. @default true */
  onBlue?: boolean;
  style?: React.CSSProperties;
}

/** Small mono status pill (e.g. a streak) for the blue hero. */
export function StreakPill(props: StreakPillProps): JSX.Element;
