'use client';

import * as React from 'react';
import { Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface SearchInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  light?: boolean;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onClear?: () => void;
}

export function SearchInput({
  light = false,
  value,
  onChange,
  onClear,
  className,
  placeholder = 'Cerca…',
  ...rest
}: SearchInputProps): React.ReactElement {
  const showClear = Boolean(value) && Boolean(onClear);

  return (
    <div className="relative w-full">
      <Search
        className={cn(
          'pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2',
          light ? 'text-tide-cream-mut' : 'text-tide-muted',
        )}
      />
      <input
        type="search"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={cn(
          'w-full rounded-tide-xl border py-[13px] pl-10 font-sans text-tide-md outline-none transition duration-base',
          showClear ? 'pr-10' : 'pr-[15px]',
          'focus-visible:ring-2 focus-visible:ring-tide-blue',
          light
            ? 'border-tide-cream-bd bg-tide-cream-in text-tide-black placeholder:text-tide-cream-dim'
            : 'border-tide-border bg-tide-panel-2 text-tide-cream placeholder:text-tide-muted',
          className,
        )}
        {...rest}
      />
      {showClear ? (
        <button
          type="button"
          onClick={onClear}
          className={cn(
            'absolute right-3 top-1/2 -translate-y-1/2',
            light ? 'text-tide-cream-mut' : 'text-tide-muted',
          )}
          aria-label="Pulisci"
        >
          <X className="size-4" />
        </button>
      ) : null}
    </div>
  );
}
