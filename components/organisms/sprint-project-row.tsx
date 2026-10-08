import * as React from 'react';
import { ProgressBar } from '@/components/atoms/progress-bar';
import { cn } from '@/lib/utils';

export interface SprintProjectRowProps {
  code: string;
  name: string;
  color?: string;
  assigned?: number;
  worked?: number;
  className?: string;
  style?: React.CSSProperties;
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

export function SprintProjectRow({
  code,
  name,
  color = '#0057FF',
  assigned = 0,
  worked = 0,
  className,
  style,
}: SprintProjectRowProps): React.ReactElement {
  const pct = assigned > 0 ? Math.round((worked / assigned) * 100) : 0;
  const ink = contrastInk(color);

  return (
    <div
      className={cn('rounded-tide-6xl p-tide-5', className)}
      style={{ backgroundColor: color, color: ink, ...style }}
    >
      <div className="flex items-start justify-between gap-tide-4">
        <div>
          <p className="font-mono text-mono-xs font-bold uppercase opacity-80">{code}</p>
          <h3 className="mt-1 font-heavy text-tide-lg">{name}</h3>
        </div>
        <p className="font-mono text-mono-sm tabular-nums">
          {worked} / {assigned} SP
        </p>
      </div>
      <div className="mt-tide-4">
        <ProgressBar
          value={pct}
          tone={ink === 'var(--black)' ? 'rgba(0,0,0,0.35)' : 'rgba(255,255,255,0.45)'}
          height={8}
          className="!bg-black/15"
        />
      </div>
    </div>
  );
}
