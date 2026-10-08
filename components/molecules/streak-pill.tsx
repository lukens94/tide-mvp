import * as React from 'react';
import { cn } from '@/lib/utils';

export interface StreakPillProps {
  children: React.ReactNode;
  onBlue?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function StreakPill({
  children,
  onBlue = true,
  className,
  style,
}: StreakPillProps): React.ReactElement {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-pill px-3 py-1 font-mono text-mono-xs font-bold uppercase',
        onBlue ? 'bg-white/15 text-tide-cream' : 'bg-tide-panel-2 text-ink-muted',
        className,
      )}
      style={style}
    >
      {children}
    </span>
  );
}
