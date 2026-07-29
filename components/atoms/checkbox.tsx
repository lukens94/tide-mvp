'use client';

import * as React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface CheckboxProps {
  label: React.ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  onCream?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function Checkbox({
  label,
  checked = false,
  onChange,
  onCream = true,
  className,
  style,
}: CheckboxProps): React.ReactElement {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={() => onChange?.(!checked)}
      className={cn('inline-flex items-center gap-tide-3 text-left', className)}
      style={style}
    >
      <span
        className={cn(
          'inline-flex size-[18px] shrink-0 items-center justify-center rounded-tide-xs border transition duration-base',
          checked
            ? 'border-tide-blue bg-tide-blue text-tide-cream'
            : onCream
              ? 'border-tide-cream-bd bg-tide-cream-in'
              : 'border-tide-border bg-tide-panel-2',
        )}
      >
        {checked ? <Check className="size-3" strokeWidth={3} /> : null}
      </span>
      <span
        className={cn(
          'font-sans text-tide-sm',
          checked && 'line-through opacity-60',
          onCream ? 'text-tide-black' : 'text-tide-cream',
        )}
      >
        {label}
      </span>
    </button>
  );
}
