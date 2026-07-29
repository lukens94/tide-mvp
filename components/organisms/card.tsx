import * as React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  /** Tighter radius + padding for dashboard grids */
  dense?: boolean;
}

export function Card({
  children,
  dense = false,
  className,
  ...rest
}: CardProps): React.ReactElement {
  return (
    <div
      className={cn(
        'bg-surface-card text-tide-black',
        dense
          ? 'rounded-tide-3xl p-[var(--pad-card-dense)]'
          : 'rounded-tide-6xl p-[20px_22px_22px]',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
