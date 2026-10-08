'use client';

import * as React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ModalProps {
  title: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  onClose?: () => void;
  maxWidth?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function Modal({
  title,
  children,
  footer,
  onClose,
  maxWidth = '30rem',
  className,
  style,
}: ModalProps): React.ReactElement {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Chiudi overlay"
        className="absolute inset-0 bg-[var(--overlay-bg)] backdrop-blur-[3px]"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        className={cn(
          'relative z-10 w-full overflow-hidden rounded-tide-4xl bg-tide-panel shadow-modal',
          className,
        )}
        style={{ maxWidth, ...style }}
      >
        <header className="flex items-center justify-between bg-tide-blue px-tide-7 py-tide-5">
          <h2 className="font-heavy text-tide-xl text-tide-cream">{title}</h2>
          {onClose ? (
            <button
              type="button"
              onClick={onClose}
              className="text-tide-cream/80 transition hover:text-tide-cream"
              aria-label="Chiudi"
            >
              <X className="size-5" />
            </button>
          ) : null}
        </header>
        <div className="p-tide-7 text-tide-cream">{children}</div>
        {footer ? (
          <footer className="flex justify-end gap-tide-3 border-t border-tide-line px-tide-7 py-tide-5">
            {footer}
          </footer>
        ) : null}
      </div>
    </div>
  );
}
