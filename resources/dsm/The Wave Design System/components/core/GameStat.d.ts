import * as React from 'react';

export interface GameStatProps extends React.HTMLAttributes<HTMLDivElement> {
  num: React.ReactNode;
  label: React.ReactNode;
}

/** Dark bordered metric card: big number over a mono uppercase label. */
export function GameStat(props: GameStatProps): JSX.Element;
