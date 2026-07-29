import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  light?: boolean;
  density?: 'md' | 'sm';
  wrapStyle?: React.CSSProperties;
}

export function Input({
  label,
  light = false,
  density = 'md',
  wrapStyle,
  className,
  id,
  ...rest
}: InputProps): React.ReactElement {
  const inputId = id ?? (label ? `input-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);

  return (
    <div className="flex w-full flex-col gap-tide-2" style={wrapStyle}>
      {label ? (
        <label
          htmlFor={inputId}
          className={cn(
            'font-mono text-mono-sm uppercase',
            light ? 'text-tide-cream-mut' : 'text-ink-muted',
          )}
        >
          {label}
        </label>
      ) : null}
      <input
        id={inputId}
        className={cn(
          'w-full border font-sans outline-none transition duration-base',
          'focus-visible:ring-2 focus-visible:ring-tide-blue',
          density === 'md' && 'rounded-tide-xl px-[15px] py-[13px] text-tide-md',
          density === 'sm' && 'rounded-tide-lg px-3 py-2 text-tide-sm',
          light
            ? 'border-tide-cream-bd bg-tide-cream-in text-tide-black placeholder:text-tide-cream-dim'
            : 'border-tide-border bg-tide-panel-2 text-ink placeholder:text-ink-muted',
          className,
        )}
        {...rest}
      />
    </div>
  );
}
