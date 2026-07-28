import * as React from 'react';

export interface ModalProps {
  title: React.ReactNode;
  children?: React.ReactNode;
  /** Action row content (e.g. Buttons), rendered right-aligned. */
  footer?: React.ReactNode;
  onClose?: () => void;
  /** Max dialog width. @default '30rem' */
  maxWidth?: string;
  style?: React.CSSProperties;
}

/**
 * Centered dialog on a blurred overlay, blue header bar.
 * @startingPoint section="Core" subtitle="Dialog with blue header + footer actions" viewport="700x460"
 */
export function Modal(props: ModalProps): JSX.Element;
