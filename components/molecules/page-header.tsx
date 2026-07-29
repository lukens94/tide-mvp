import * as React from 'react';
import { cn } from '@/lib/utils';

export interface PageHeaderProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Mono uppercase eyebrow (e.g. Wave Home) */
  eyebrow?: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
}

/** Compact page chrome — MVP density with DSM type tokens. */
export function PageHeader({
  title,
  description,
  eyebrow,
  actions,
  className,
}: PageHeaderProps): React.ReactElement {
  return (
    <div
      className={cn(
        'mb-tide-7 flex flex-wrap items-end justify-between gap-tide-4',
        className,
      )}
    >
      <div className="min-w-0">
        {eyebrow ? (
          <p className="font-mono text-mono-xs uppercase text-ink-muted">{eyebrow}</p>
        ) : null}
        <h1
          className={cn(
            'font-heavy text-tide-2xl tracking-tight text-ink sm:text-tide-3xl',
            eyebrow && 'mt-1',
          )}
        >
          {title}
        </h1>
        {description ? (
          <p className="mt-tide-2 max-w-xl text-tide-sm text-ink-muted">{description}</p>
        ) : null}
      </div>
      {actions ? <div className="flex flex-wrap items-center gap-tide-2">{actions}</div> : null}
    </div>
  );
}
