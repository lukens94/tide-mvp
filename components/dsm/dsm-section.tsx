import * as React from 'react';
import { cn } from '@/lib/utils';

export interface DsmSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export function DsmSection({
  title,
  description,
  children,
  className,
}: DsmSectionProps): React.ReactElement {
  return (
    <section className={cn('rounded-tide-4xl bg-tide-panel p-tide-7', className)}>
      <h3 className="font-heavy text-tide-xl text-ink">{title}</h3>
      {description ? (
        <p className="mt-tide-2 text-tide-sm text-tide-muted">{description}</p>
      ) : null}
      <div className="mt-tide-6">{children}</div>
    </section>
  );
}
