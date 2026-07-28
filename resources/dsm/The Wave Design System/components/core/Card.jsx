import React from 'react';

/**
 * The Wave — Card
 * The cream "paper" surface that holds content on top of the dark
 * workspace. Rounded 22px, generous padding.
 */
export function Card({ children, style, ...rest }) {
  return (
    <div
      style={{
        background: 'var(--cream)',
        borderRadius: 'var(--r-6xl)',
        padding: '20px 22px 22px',
        color: 'var(--black)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
