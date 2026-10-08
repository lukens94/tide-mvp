import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  type?: 'neutral' | 'success' | 'error';
}

export function Toast({
  children,
  type = 'neutral',
  className,
  ...rest
}: ToastProps): React.ReactElement {
  return (
    <div
      role="status"
      className={cn(
        'rounded-tide-xl px-4 py-3 font-mono text-mono-sm uppercase shadow-toast',
        type === 'neutral' && 'bg-tide-panel-2 text-tide-cream',
        type === 'success' && 'bg-tide-blue text-tide-cream',
        type === 'error' && 'bg-tide-danger-2 text-tide-cream',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
