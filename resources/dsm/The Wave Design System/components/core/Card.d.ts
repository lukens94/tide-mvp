import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

/** The cream "paper" surface (radius 22px) that holds content on the dark shell. */
export function Card(props: CardProps): JSX.Element;
