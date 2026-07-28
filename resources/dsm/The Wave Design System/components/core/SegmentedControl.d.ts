import * as React from 'react';

export type SegmentOption = string | { value: string; label: string };

export interface SegmentedControlProps {
  options: SegmentOption[];
  value?: string;
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
}

/** Pill segmented toggle ("view switch"); active segment fills blue. */
export function SegmentedControl(props: SegmentedControlProps): JSX.Element;
