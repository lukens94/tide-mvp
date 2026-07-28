import * as React from 'react';

export interface StatTileProps extends React.HTMLAttributes<HTMLDivElement> {
  num: React.ReactNode;
  label: React.ReactNode;
  /** Tile tone. @default 'sand' */
  tone?: 'sand' | 'dark' | 'yellow';
}

/** Big-number stat tile in sand / dark / yellow. Lifts on hover. */
export function StatTile(props: StatTileProps): JSX.Element;
