import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Emoji icon (brand uses emoji for achievements). */
  icon: React.ReactNode;
  name: React.ReactNode;
  desc: React.ReactNode;
  /** Dim + desaturate as not-yet-earned. @default false */
  locked?: boolean;
}

/** Gamification achievement badge (earned or locked). */
export function Badge(props: BadgeProps): JSX.Element;
