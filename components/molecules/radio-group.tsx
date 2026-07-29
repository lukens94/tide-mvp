'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export type RadioOption = string | { value: string; label: string };

export interface RadioGroupProps {
  name?: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  inline?: boolean;
  onCream?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

function optValue(opt: RadioOption): string {
  return typeof opt === 'string' ? opt : opt.value;
}

function optLabel(opt: RadioOption): string {
  return typeof opt === 'string' ? opt : opt.label;
}

export function RadioGroup({
  name,
  options,
  value,
  onChange,
  inline = false,
  onCream = false,
  className,
  style,
}: RadioGroupProps): React.ReactElement {
  return (
    <div
      role="radiogroup"
      className={cn(inline ? 'flex flex-wrap gap-tide-5' : 'flex flex-col gap-tide-3', className)}
      style={style}
    >
      {options.map((opt) => {
        const v = optValue(opt);
        const checked = v === value;
        return (
          <button
            key={v}
            type="button"
            role="radio"
            aria-checked={checked}
            name={name}
            onClick={() => onChange?.(v)}
            className="inline-flex items-center gap-tide-3 text-left"
          >
            <span
              className={cn(
                'inline-flex size-[18px] items-center justify-center rounded-full border',
                onCream ? 'border-tide-cream-bd' : 'border-tide-border',
              )}
            >
              {checked ? <span className="size-2.5 rounded-full bg-tide-blue" /> : null}
            </span>
            <span
              className={cn(
                'font-sans text-tide-sm',
                onCream ? 'text-tide-black' : 'text-tide-cream',
              )}
            >
              {optLabel(opt)}
            </span>
          </button>
        );
      })}
    </div>
  );
}
