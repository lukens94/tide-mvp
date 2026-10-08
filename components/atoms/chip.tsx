import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  color?: string;
  size?: 'md' | 'sm';
}

function contrastInk(hex: string): string {
  const c = hex.replace('#', '');
  if (c.length !== 6) return 'var(--cream)';
  const r = Number.parseInt(c.slice(0, 2), 16);
  const g = Number.parseInt(c.slice(2, 4), 16);
  const b = Number.parseInt(c.slice(4, 6), 16);
  const luma = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luma > 0.6 ? 'var(--black)' : 'var(--cream)';
}

export function Chip({
  children,
  color = '#0057FF',
  size = 'md',
  className,
  style,
  ...rest
}: ChipProps): React.ReactElement {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-pill font-mono font-bold uppercase',
        size === 'md' && 'px-3 py-1 text-mono-xs',
        size === 'sm' && 'px-2 py-0.5 text-mono-2xs',
        className,
      )}
      style={{ backgroundColor: color, color: contrastInk(color), ...style }}
      {...rest}
    >
      {children}
    </span>
  );
}
