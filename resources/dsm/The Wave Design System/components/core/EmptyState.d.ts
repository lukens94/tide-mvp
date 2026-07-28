import * as React from 'react';

export interface EmptyStateProps {
  /** Emoji icon. @default '📁' */
  icon?: React.ReactNode;
  title: React.ReactNode;
  message?: React.ReactNode;
  /** Optional CTA button label. */
  ctaLabel?: string;
  onCta?: () => void;
  style?: React.CSSProperties;
}

/** Centered empty-panel placeholder for cream cards. */
export function EmptyState(props: EmptyStateProps): JSX.Element;
