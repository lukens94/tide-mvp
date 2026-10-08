import * as React from 'react';
import { Button } from '@/components/atoms/button';
import { cn } from '@/lib/utils';

export interface EmptyStateProps {
  icon?: React.ReactNode;
  title: React.ReactNode;
  message?: React.ReactNode;
  ctaLabel?: string;
  onCta?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export function EmptyState({
  icon,
  title,
  message,
  ctaLabel,
  onCta,
  className,
  style,
}: EmptyStateProps): React.ReactElement {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-tide-4 px-tide-8 py-tide-12 text-center',
        className,
      )}
      style={style}
    >
      {icon ? <div className="text-tide-cream-mut [&_svg]:size-10">{icon}</div> : null}
      <h3 className="font-heavy text-tide-xl text-tide-black">{title}</h3>
      {message ? <p className="max-w-sm text-tide-sm text-tide-cream-mut">{message}</p> : null}
      {ctaLabel ? <Button onClick={onCta}>{ctaLabel}</Button> : null}
    </div>
  );
}
