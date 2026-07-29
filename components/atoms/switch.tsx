'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: React.ReactNode;
  onCream?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function Switch({
  checked = false,
  onChange,
  disabled = false,
  label,
  onCream = false,
  className,
  style,
}: SwitchProps): React.ReactElement {
  return (
    <label
      className={cn(
        'inline-flex cursor-pointer items-center gap-tide-3',
        disabled && 'cursor-not-allowed opacity-50',
        className,
      )}
      style={style}
    >
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange?.(!checked)}
        className={cn(
          'relative h-[22px] w-[40px] rounded-pill transition duration-base',
          checked ? 'bg-tide-blue' : onCream ? 'bg-tide-cream-cell' : 'bg-tide-panel-2',
        )}
      >
        <span
          className={cn(
            'absolute top-[3px] size-4 rounded-full bg-tide-cream transition duration-base',
            checked ? 'left-[20px]' : 'left-[3px]',
          )}
        />
      </button>
      {label ? (
        <span
          className={cn(
            'font-mono text-mono-sm uppercase',
            onCream ? 'text-tide-cream-mut' : 'text-tide-muted',
          )}
        >
          {label}
        </span>
      ) : null}
    </label>
  );
}
