'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export type SegmentOption = string | { value: string; label: string };

export interface SegmentedControlProps {
  options: SegmentOption[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

function segValue(opt: SegmentOption): string {
  return typeof opt === 'string' ? opt : opt.value;
}

function segLabel(opt: SegmentOption): string {
  return typeof opt === 'string' ? opt : opt.label;
}

export function SegmentedControl({
  options,
  value,
  onChange,
  className,
  style,
}: SegmentedControlProps): React.ReactElement {
  return (
    <div
      className={cn(
        'inline-flex rounded-pill border border-tide-border bg-tide-panel-2 p-1',
        className,
      )}
      style={style}
      role="group"
    >
      {options.map((opt) => {
        const v = segValue(opt);
        const active = v === value;
        return (
          <button
            key={v}
            type="button"
            onClick={() => onChange?.(v)}
            className={cn(
              'rounded-pill px-3 py-1.5 font-mono text-mono-xs font-bold uppercase transition duration-base',
              active ? 'bg-tide-blue text-tide-cream' : 'text-tide-muted hover:text-tide-cream',
            )}
          >
            {segLabel(opt)}
          </button>
        );
      })}
    </div>
  );
}
