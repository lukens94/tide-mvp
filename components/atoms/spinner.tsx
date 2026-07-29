import * as React from 'react';
import { cn } from '@/lib/utils';

export interface SpinnerProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function Spinner({ size = 42, className, style }: SpinnerProps): React.ReactElement {
  return (
    <span
      className={cn(
        'inline-block animate-spin rounded-full border-2 border-tide-border border-t-tide-blue',
        className,
      )}
      style={{ width: size, height: size, ...style }}
      role="status"
      aria-label="Caricamento"
    />
  );
}
