import * as React from 'react';

export interface SearchInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  light?: boolean;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /** Show a clear (×) button when non-empty; called on click. */
  onClear?: () => void;
  placeholder?: string;
}

/** Text field with a leading magnifier icon and optional clear button. */
export function SearchInput(props: SearchInputProps): JSX.Element;
