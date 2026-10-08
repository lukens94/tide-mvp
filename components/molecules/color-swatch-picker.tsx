'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

const DEFAULT_COLORS = [
  '#0057FF',
  '#FFD400',
  '#CDC3BA',
  '#323232',
  '#1A66FF',
  '#00A98F',
  '#FF6B35',
];

export interface ColorSwatchPickerProps {
  colors?: string[];
  value?: string;
  onChange?: (color: string) => void;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function ColorSwatchPicker({
  colors = DEFAULT_COLORS,
  value,
  onChange,
  size = 24,
  className,
  style,
}: ColorSwatchPickerProps): React.ReactElement {
  return (
    <div className={cn('flex flex-wrap gap-tide-2', className)} style={style}>
      {colors.map((color) => {
        const selected = color.toLowerCase() === value?.toLowerCase();
        return (
          <button
            key={color}
            type="button"
            aria-label={color}
            onClick={() => onChange?.(color)}
            className={cn(
              'rounded-full transition duration-base',
              selected && 'ring-2 ring-tide-blue ring-offset-2 ring-offset-tide-panel',
            )}
            style={{
              width: size,
              height: size,
              backgroundColor: color,
              boxShadow: selected ? 'inset 0 0 0 2px var(--cream)' : undefined,
            }}
          />
        );
      })}
    </div>
  );
}
