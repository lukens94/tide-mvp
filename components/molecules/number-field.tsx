'use client';

import * as React from 'react';
import { Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface NumberFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  value?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  light?: boolean;
}

export function NumberField({
  value = 0,
  onChange,
  min,
  max,
  step = 0.5,
  light = false,
  className,
  style,
  ...rest
}: NumberFieldProps): React.ReactElement {
  const clamp = (n: number): number => {
    let next = n;
    if (min !== undefined) next = Math.max(min, next);
    if (max !== undefined) next = Math.min(max, next);
    return next;
  };

  return (
    <div
      className={cn(
        'inline-flex items-center overflow-hidden rounded-tide-xl border',
        light ? 'border-tide-cream-bd bg-tide-cream-in' : 'border-tide-border bg-tide-panel-2',
        className,
      )}
      style={style}
    >
      <button
        type="button"
        className={cn(
          'px-3 py-2 text-tide-muted transition hover:text-tide-blue',
          light && 'hover:text-tide-blue',
        )}
        onClick={() => onChange?.(clamp(value - step))}
        aria-label="Diminuisci"
      >
        <Minus className="size-3.5" />
      </button>
      <input
        type="number"
        value={value}
        step={step}
        min={min}
        max={max}
        onChange={(e) => onChange?.(clamp(Number(e.target.value)))}
        className={cn(
          'w-16 border-x bg-transparent py-2 text-center font-mono text-mono-md tabular-nums outline-none',
          light
            ? 'border-tide-cream-bd text-tide-black'
            : 'border-tide-border text-tide-cream',
        )}
        {...rest}
      />
      <button
        type="button"
        className="px-3 py-2 text-tide-muted transition hover:text-tide-blue"
        onClick={() => onChange?.(clamp(value + step))}
        aria-label="Aumenta"
      >
        <Plus className="size-3.5" />
      </button>
    </div>
  );
}
