'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export type ChipOption = string | { value: string; label: string };

export interface ChipSelectProps {
  options: ChipOption[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

function optValue(opt: ChipOption): string {
  return typeof opt === 'string' ? opt : opt.value;
}

function optLabel(opt: ChipOption): string {
  return typeof opt === 'string' ? opt : opt.label;
}

export function ChipSelect({
  options,
  value,
  onChange,
  className,
  style,
}: ChipSelectProps): React.ReactElement {
  return (
    <div className={cn('flex flex-wrap gap-tide-2', className)} style={style}>
      {options.map((opt) => {
        const v = optValue(opt);
        const active = v === value;
        return (
          <button
            key={v}
            type="button"
            onClick={() => onChange?.(v)}
            className={cn(
              'rounded-pill px-3 py-1.5 font-mono text-mono-xs font-bold uppercase transition duration-base',
              active
                ? 'bg-tide-blue text-tide-cream'
                : 'bg-tide-panel-2 text-tide-muted hover:text-tide-cream',
            )}
          >
            {optLabel(opt)}
          </button>
        );
      })}
    </div>
  );
}
