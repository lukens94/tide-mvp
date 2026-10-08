import * as React from 'react';
import { ProgressBar } from '@/components/atoms/progress-bar';
import { cn } from '@/lib/utils';

export interface HeroProps {
  name?: string;
  range?: string;
  done: React.ReactNode;
  total?: number;
  pct?: number;
  capLabel?: string;
  /** Dashboard density — smaller numeral, tighter padding */
  compact?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function Hero({
  name,
  range,
  done,
  total,
  pct,
  capLabel = 'Story points',
  compact = false,
  className,
  style,
}: HeroProps): React.ReactElement {
  const numericDone = typeof done === 'number' ? done : Number(done);
  const derivedPct =
    pct ??
    (total && !Number.isNaN(numericDone) ? Math.round((numericDone / total) * 100) : undefined);

  return (
    <section
      className={cn(
        'bg-tide-blue text-tide-cream',
        compact ? 'rounded-tide-4xl p-tide-7' : 'rounded-tide-5xl p-tide-12',
        className,
      )}
      style={style}
    >
      <div className="flex flex-wrap items-start justify-between gap-tide-4">
        <div>
          {name ? (
            <h2
              className={cn(
                'font-heavy tracking-tight',
                compact ? 'text-tide-xl' : 'text-tide-2xl',
              )}
            >
              {name}
            </h2>
          ) : null}
          {range ? (
            <p className="mt-1 font-mono text-mono-xs uppercase text-[var(--text-on-blue-mut)]">
              {range}
            </p>
          ) : null}
        </div>
        <p className="font-mono text-mono-sm uppercase text-[var(--text-on-blue-mut)]">{capLabel}</p>
      </div>
      <p
        className={cn(
          'mt-tide-5 font-heavy tabular-nums leading-none',
          compact
            ? 'text-tide-4xl tracking-tight'
            : 'text-tide-hero tracking-[var(--ls-hero)] mt-tide-6',
        )}
      >
        {done}
        {total !== undefined ? (
          <span
            className={cn(
              'text-[var(--text-on-blue-mut)]',
              compact ? 'text-tide-xl' : 'text-tide-3xl',
            )}
          >
            {' '}
            / {total}
          </span>
        ) : null}
      </p>
      {derivedPct !== undefined ? (
        <div className={cn(compact ? 'mt-tide-4' : 'mt-tide-6')}>
          <ProgressBar value={derivedPct} onBlue height={compact ? 8 : 10} />
          <p className="mt-tide-2 font-mono text-mono-xs uppercase text-[var(--text-on-blue-mut)]">
            {derivedPct}% completato
          </p>
        </div>
      ) : null}
    </section>
  );
}
