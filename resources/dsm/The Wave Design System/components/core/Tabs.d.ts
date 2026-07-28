import * as React from 'react';

export type TabOption = string | { value: string; label: string };

export interface TabsProps {
  tabs: TabOption[];
  value?: string;
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
}

/** Horizontal tab bar; active tab fills black with cream text. */
export function Tabs(props: TabsProps): JSX.Element;
