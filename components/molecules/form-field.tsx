import * as React from 'react';
import { cn } from '@/lib/utils';

export interface FormFieldProps {
  label?: string;
  htmlFor?: string;
  required?: boolean;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  light?: boolean;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function FormField({
  label,
  htmlFor,
  required,
  hint,
  error,
  light = false,
  children,
  className,
  style,
}: FormFieldProps): React.ReactElement {
  return (
    <div className={cn('flex w-full flex-col gap-tide-2', className)} style={style}>
      {label ? (
        <label
          htmlFor={htmlFor}
          className={cn(
            'font-mono text-mono-sm uppercase',
            light ? 'text-tide-cream-mut' : 'text-tide-muted',
          )}
        >
          {label}
          {required ? <span className="text-tide-danger"> *</span> : null}
        </label>
      ) : null}
      {children}
      {error ? (
        <p className="font-mono text-mono-xs uppercase text-tide-danger">{error}</p>
      ) : hint ? (
        <p
          className={cn(
            'font-mono text-mono-xs uppercase',
            light ? 'text-tide-cream-dim' : 'text-tide-muted',
          )}
        >
          {hint}
        </p>
      ) : null}
    </div>
  );
}
