import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'outline';
  size?: 'md' | 'sm';
  icon?: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  className,
  disabled,
  children,
  ...rest
}: ButtonProps): React.ReactElement {
  return (
    <button
      type="button"
      disabled={disabled}
      className={cn(
        'inline-flex items-center font-mono font-bold uppercase transition duration-fast ease-standard',
        'disabled:cursor-not-allowed disabled:opacity-50',
        size === 'md' && 'gap-[7px] text-mono-md',
        size === 'sm' && 'gap-1.5 text-mono-xs',
        variant === 'primary' &&
          cn(
            'bg-tide-blue text-tide-cream hover:-translate-y-px hover:bg-tide-blue-2 hover:shadow-btn active:translate-y-px active:scale-[0.97]',
            size === 'md' && 'rounded-tide-xl px-[17px] py-3',
            size === 'sm' && 'rounded-tide-lg px-3 py-2',
          ),
        variant === 'ghost' &&
          cn(
            'text-ink-muted hover:text-ink',
            size === 'md' && 'rounded-tide-lg px-[18px] py-3 text-[11px] tracking-[var(--ls-wide)]',
            size === 'sm' && 'rounded-tide-md px-2.5 py-1.5',
          ),
        variant === 'outline' &&
          cn(
            'border border-tide-border bg-transparent text-ink hover:border-tide-blue hover:bg-[var(--nav-hover)]',
            size === 'md' && 'rounded-tide-xl px-[17px] py-3',
            size === 'sm' && 'rounded-tide-lg px-3 py-2',
          ),
        className,
      )}
      {...rest}
    >
      {icon ? (
        <span
          className={cn(
            'inline-flex items-center justify-center',
            size === 'sm' ? 'size-3' : 'size-3.5',
          )}
        >
          {icon}
        </span>
      ) : null}
      {children}
    </button>
  );
}
