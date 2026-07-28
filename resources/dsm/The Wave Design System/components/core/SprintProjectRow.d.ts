import * as React from 'react';

export interface SprintProjectRowProps {
  /** Short project code, e.g. "RCA". */
  code: string;
  /** Full project name. */
  name: string;
  /** Project color (hex); tints the whole row, ink auto-contrasts. @default '#0057FF' */
  color?: string;
  /** Assigned story points. */
  assigned?: number;
  /** Worked story points. */
  worked?: number;
  style?: React.CSSProperties;
}

/** Colored project card: code, name, assigned vs worked SP, progress bar. */
export function SprintProjectRow(props: SprintProjectRowProps): JSX.Element;
