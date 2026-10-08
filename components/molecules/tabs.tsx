'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export type TabOption = string | { value: string; label: string };

export interface TabsProps {
  tabs: TabOption[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

function tabValue(opt: TabOption): string {
  return typeof opt === 'string' ? opt : opt.value;
}

function tabLabel(opt: TabOption): string {
  return typeof opt === 'string' ? opt : opt.label;
}

export function Tabs({ tabs, value, onChange, className, style }: TabsProps): React.ReactElement {
  return (
    <div className={cn('flex flex-wrap gap-tide-2', className)} style={style} role="tablist">
      {tabs.map((tab) => {
        const v = tabValue(tab);
        const active = v === value;
        return (
          <button
            key={v}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange?.(v)}
            className={cn(
              'rounded-tide-lg px-[18px] py-2.5 font-mono text-mono-md font-bold uppercase transition duration-base',
              active
                ? 'bg-tide-black text-tide-cream'
                : 'bg-transparent text-tide-muted hover:text-tide-cream',
            )}
          >
            {tabLabel(tab)}
          </button>
        );
      })}
    </div>
  );
}
