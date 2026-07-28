import * as React from 'react';

export interface ConfirmDialogProps {
  message: React.ReactNode;
  /** @default 'Conferma' */
  okLabel?: string;
  /** @default 'Annulla' */
  cancelLabel?: string;
  /** Red confirm button. @default true */
  danger?: boolean;
  onOk?: () => void;
  onCancel?: () => void;
}

/** Compact confirmation dialog on a dark overlay (no blue header). */
export function ConfirmDialog(props: ConfirmDialogProps): JSX.Element;
