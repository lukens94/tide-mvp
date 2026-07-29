'use client';

import * as React from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  light?: boolean;
  wrapStyle?: React.CSSProperties;
}

export function PasswordInput({
  label,
  light = false,
  wrapStyle,
  className,
  id,
  ...rest
}: PasswordInputProps): React.ReactElement {
  const [visible, setVisible] = React.useState(false);
  const inputId =
    id ?? (label ? `password-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);

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
      <div className="relative">
        <input
          id={inputId}
          type={visible ? 'text' : 'password'}
          className={cn(
            'w-full rounded-tide-xl border px-[15px] py-[13px] pr-11 font-sans text-tide-md outline-none transition duration-base',
            'focus-visible:ring-2 focus-visible:ring-tide-blue',
            light
              ? 'border-tide-cream-bd bg-tide-cream-in text-tide-black'
              : 'border-tide-border bg-tide-panel-2 text-tide-cream',
            className,
          )}
          {...rest}
        />
        <button
          type="button"
          className={cn(
            'absolute right-3 top-1/2 -translate-y-1/2',
            light ? 'text-tide-cream-mut' : 'text-tide-muted',
          )}
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? 'Nascondi password' : 'Mostra password'}
        >
          {visible ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
        </button>
      </div>
    </div>
  );
}
