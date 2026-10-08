import * as React from 'react';
import { cn } from '@/lib/utils';

export interface StatTileProps extends React.HTMLAttributes<HTMLDivElement> {
  num: React.ReactNode;
  label: React.ReactNode;
  tone?: 'sand' | 'dark' | 'yellow';
}

export function StatTile({
  num,
  label,
  tone = 'sand',
  className,
  ...rest
}: StatTileProps): React.ReactElement {
  return (
    <div
      className={cn(
        'rounded-tide-2xl p-tide-4 transition duration-base hover:-translate-y-px hover:shadow-tile',
        tone === 'sand' && 'bg-tide-sand text-tide-black',
        tone === 'dark' && 'bg-tide-panel-2 text-ink',
        tone === 'yellow' && 'bg-tide-yellow text-tide-black',
        className,
      )}
      {...rest}
    >
      <p className="font-heavy text-tide-2xl tabular-nums leading-none">{num}</p>
      <p className="mt-tide-2 font-mono text-mono-xs uppercase opacity-80">{label}</p>
    </div>
  );
}
