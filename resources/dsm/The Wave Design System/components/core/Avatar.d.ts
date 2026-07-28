import * as React from 'react';

export interface AvatarProps {
  /** Image URL; if omitted, shows a colored disc with initials. */
  src?: string;
  initials?: string;
  /** Disc color when no image. @default 'var(--yellow)' */
  color?: string;
  /** Diameter in px. @default 38 */
  size?: number;
  /** Add the signature panel+blue double ring. @default false */
  ring?: boolean;
  title?: string;
  style?: React.CSSProperties;
}

/** Circular avatar — image or initials disc, optional ringed shadow. */
export function Avatar(props: AvatarProps): JSX.Element;
