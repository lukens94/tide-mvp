import * as React from 'react';

export interface SpinnerProps {
  /** Diameter in px. @default 42 */
  size?: number;
  style?: React.CSSProperties;
}

/** Circular loading indicator with a blue leading arc. */
export function Spinner(props: SpinnerProps): JSX.Element;
