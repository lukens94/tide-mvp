'use client';

import * as React from 'react';
import { Button } from '@/components/atoms/button';
import { cn } from '@/lib/utils';

export interface ConfirmDialogProps {
  message: React.ReactNode;
  okLabel?: string;
  cancelLabel?: string;
  danger?: boolean;
  onOk?: () => void;
  onCancel?: () => void;
  className?: string;
}

export function ConfirmDialog({
  message,
  okLabel = 'Conferma',
  cancelLabel = 'Annulla',
  danger = true,
  onOk,
  onCancel,
  className,
}: ConfirmDialogProps): React.ReactElement {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Chiudi overlay"
        className="absolute inset-0 bg-[var(--overlay-bg)] backdrop-blur-[3px]"
        onClick={onCancel}
      />
      <div
        role="alertdialog"
        className={cn(
          'relative z-10 w-full max-w-sm rounded-tide-4xl bg-tide-panel p-tide-7 shadow-modal',
          className,
        )}
      >
        <p className="text-tide-md text-tide-cream">{message}</p>
        <div className="mt-tide-7 flex justify-end gap-tide-3">
          <Button variant="ghost" onClick={onCancel}>
            {cancelLabel}
          </Button>
          <Button
            onClick={onOk}
            className={danger ? '!bg-tide-danger-2 hover:!bg-tide-danger' : undefined}
          >
            {okLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
