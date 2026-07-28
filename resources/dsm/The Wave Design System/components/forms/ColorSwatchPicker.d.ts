import * as React from 'react';

export interface ColorSwatchPickerProps {
  /** Hex colors. Defaults to the brand data-viz palette. */
  colors?: string[];
  value?: string;
  onChange?: (color: string) => void;
  /** Swatch diameter in px. @default 24 */
  size?: number;
  style?: React.CSSProperties;
}

/** Row of round color swatches; selected gets a cream border + blue ring. */
export function ColorSwatchPicker(props: ColorSwatchPickerProps): JSX.Element;
