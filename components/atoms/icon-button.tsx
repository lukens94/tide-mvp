import * as React from 'react';
import { cn } from '@/lib/utils';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  size?: number;
}

export function IconButton({
  active = false,
  size = 36,
  className,
  children,
  style,
  ...rest
}: IconButtonProps): React.ReactElement {
  return (
    <button
      type="button"
      className={cn(
        'relative inline-flex items-center justify-center rounded-tide-lg border border-transparent bg-transparent text-ink transition duration-base',
        'hover:bg-[var(--nav-hover)]',
        active && 'border-tide-blue bg-tide-blue text-tide-cream hover:bg-tide-blue-2',
        className,
      )}
      style={{ width: size, height: size, ...style }}
      {...rest}
    >
      <span className="inline-flex size-4 items-center justify-center">{children}</span>
    </button>
  );
}
