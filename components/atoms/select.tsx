import * as React from 'react';
import { cn } from '@/lib/utils';

export type SelectOption = string | { value: string; label: string };

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  options: SelectOption[];
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  light?: boolean;
}

function optionValue(opt: SelectOption): string {
  return typeof opt === 'string' ? opt : opt.value;
}

function optionLabel(opt: SelectOption): string {
  return typeof opt === 'string' ? opt : opt.label;
}

export function Select({
  options,
  light = false,
  className,
  ...rest
}: SelectProps): React.ReactElement {
  return (
    <select
      className={cn(
        'w-full appearance-none rounded-tide-xl border px-4 py-[11px] font-mono text-mono-md uppercase outline-none transition duration-base',
        'focus-visible:ring-2 focus-visible:ring-tide-blue',
        light
          ? 'border-tide-cream-bd bg-tide-cream-in text-tide-black'
          : 'border-tide-border bg-tide-panel-2 text-tide-cream',
        className,
      )}
      {...rest}
    >
      {options.map((opt) => (
        <option key={optionValue(opt)} value={optionValue(opt)}>
          {optionLabel(opt)}
        </option>
      ))}
    </select>
  );
}
