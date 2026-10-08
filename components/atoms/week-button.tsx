import * as React from 'react';
import { cn } from '@/lib/utils';

export interface WeekButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export function WeekButton({
  active = false,
  className,
  children,
  ...rest
}: WeekButtonProps): React.ReactElement {
  return (
    <button
      type="button"
      className={cn(
        'rounded-tide-md px-3 py-2 font-mono text-mono-xs font-bold uppercase transition duration-base',
        active
          ? 'bg-tide-blue text-tide-cream'
          : 'bg-tide-cream-cell text-tide-cream-mut hover:bg-tide-cream-cell-h',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
