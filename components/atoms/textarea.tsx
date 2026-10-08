import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  light?: boolean;
  wrapStyle?: React.CSSProperties;
}

export function Textarea({
  label,
  light = false,
  wrapStyle,
  className,
  id,
  ...rest
}: TextareaProps): React.ReactElement {
  const inputId = id ?? (label ? `textarea-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);

  return (
    <div className="flex w-full flex-col gap-tide-2" style={wrapStyle}>
      {label ? (
        <label
          htmlFor={inputId}
          className={cn(
            'font-mono text-mono-sm uppercase',
            light ? 'text-tide-cream-mut' : 'text-tide-muted',
          )}
        >
          {label}
        </label>
      ) : null}
      <textarea
        id={inputId}
        className={cn(
          'min-h-[100px] w-full resize-y rounded-tide-xl border px-[15px] py-[13px] font-sans text-tide-md outline-none transition duration-base',
          'focus-visible:ring-2 focus-visible:ring-tide-blue',
          light
            ? 'border-tide-cream-bd bg-tide-cream-in text-tide-black placeholder:text-tide-cream-dim'
            : 'border-tide-border bg-tide-panel-2 text-tide-cream placeholder:text-tide-muted',
          className,
        )}
        {...rest}
      />
    </div>
  );
}
