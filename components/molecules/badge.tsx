import * as React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  name: React.ReactNode;
  desc: React.ReactNode;
  locked?: boolean;
}

export function Badge({
  icon,
  name,
  desc,
  locked = false,
  className,
  ...rest
}: BadgeProps): React.ReactElement {
  return (
    <div
      className={cn(
        'flex gap-tide-3 rounded-tide-2xl border border-tide-border bg-tide-panel-2 p-tide-4',
        locked && 'opacity-40 grayscale',
        className,
      )}
      {...rest}
    >
      <span className="inline-flex size-7 shrink-0 items-center justify-center text-ink">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="font-heavy text-tide-sm text-ink">{name}</p>
        <p className="mt-1 font-mono text-mono-xs uppercase text-ink-muted">{desc}</p>
      </div>
    </div>
  );
}
