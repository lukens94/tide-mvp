import * as React from 'react';
import { cn } from '@/lib/utils';

export interface DateFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  light?: boolean;
}

export function DateField({
  light = false,
  className,
  ...rest
}: DateFieldProps): React.ReactElement {
  return (
    <input
      type="date"
      className={cn(
        'w-full rounded-tide-xl border px-[15px] py-[13px] font-mono text-mono-md uppercase outline-none transition duration-base',
        'focus-visible:ring-2 focus-visible:ring-tide-blue',
        light
          ? 'border-tide-cream-bd bg-tide-cream-in text-tide-black'
          : 'border-tide-border bg-tide-panel-2 text-tide-cream',
        className,
      )}
      {...rest}
    />
  );
}
