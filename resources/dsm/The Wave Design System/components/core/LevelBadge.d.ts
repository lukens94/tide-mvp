import * as React from 'react';

export interface LevelBadgeProps {
  level: React.ReactNode;
  /** Small label above the number. @default 'Livello' */
  label?: string;
  /** Diameter in px. @default 84 */
  size?: number;
  /** Translucent-white disc for the blue hero. @default true */
  onBlue?: boolean;
  style?: React.CSSProperties;
}

/** Circular level indicator for the gamification hero. */
export function LevelBadge(props: LevelBadgeProps): JSX.Element;
