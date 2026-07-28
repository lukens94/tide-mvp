import * as React from 'react';

export interface HeroProps {
  /** Optional sprint name shown above the counter. */
  name?: string;
  /** Optional mono date range. */
  range?: string;
  /** The big number (story points done). */
  done: React.ReactNode;
  /** Optional total for the "/ N" suffix. */
  total?: number;
  /** Explicit completion percent (else derived from done/total). */
  pct?: number;
  /** Label above the counter. @default 'Story points' */
  capLabel?: string;
  style?: React.CSSProperties;
}

/**
 * The signature blue hero with the giant 92px story-point counter + progress bar.
 * @startingPoint section="Core" subtitle="Blue story-point hero counter" viewport="700x360"
 */
export function Hero(props: HeroProps): JSX.Element;
