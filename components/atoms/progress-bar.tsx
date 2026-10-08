import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ProgressBarProps {
  value?: number;
  onBlue?: boolean;
  tone?: string;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function ProgressBar({
  value = 0,
  onBlue = false,
  tone,
  height = 8,
  className,
  style,
}: ProgressBarProps): React.ReactElement {
  const pct = Math.max(0, Math.min(100, value));

  return (
    <div
      className={cn(
        'w-full overflow-hidden rounded-pill',
        onBlue ? 'bg-white/15' : 'bg-tide-panel-2',
        className,
      )}
      style={{ height, ...style }}
      role="progressbar"
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className={cn(
          'h-full rounded-pill transition-all duration-bar ease-spring',
          !tone && (onBlue ? 'bg-tide-cream' : 'bg-tide-blue'),
        )}
        style={{
          width: `${pct}%`,
          backgroundColor: tone,
        }}
      />
    </div>
  );
}
