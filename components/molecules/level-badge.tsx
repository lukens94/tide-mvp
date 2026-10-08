import * as React from 'react';
import { cn } from '@/lib/utils';

export interface LevelBadgeProps {
  level: React.ReactNode;
  label?: string;
  size?: number;
  onBlue?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function LevelBadge({
  level,
  label = 'Livello',
  size = 84,
  onBlue = true,
  className,
  style,
}: LevelBadgeProps): React.ReactElement {
  return (
    <div
      className={cn(
        'inline-flex flex-col items-center justify-center rounded-full',
        onBlue ? 'bg-white/15 text-tide-cream' : 'bg-tide-panel-2 text-ink',
        className,
      )}
      style={{ width: size, height: size, ...style }}
    >
      <span className="font-mono text-mono-2xs uppercase text-[var(--text-on-blue-mut)]">
        {label}
      </span>
      <span className="font-heavy text-tide-2xl leading-none">{level}</span>
    </div>
  );
}
