import * as React from 'react';
import { cn } from '@/lib/utils';

export interface GameStatProps extends React.HTMLAttributes<HTMLDivElement> {
  num: React.ReactNode;
  label: React.ReactNode;
}

export function GameStat({ num, label, className, ...rest }: GameStatProps): React.ReactElement {
  return (
    <div
      className={cn(
        'rounded-tide-2xl border border-tide-border bg-tide-panel-2 p-tide-4',
        className,
      )}
      {...rest}
    >
      <p className="font-heavy text-tide-xl tabular-nums text-ink">{num}</p>
      <p className="mt-tide-2 font-mono text-mono-xs uppercase text-ink-muted">{label}</p>
    </div>
  );
}
