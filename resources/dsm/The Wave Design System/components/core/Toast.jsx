import React from 'react';

/**
 * The Wave — Toast
 * Transient notification. Neutral by default; `success` outlines blue,
 * `error` outlines red. Sits on the dark raised surface.
 */
export function Toast({ children, type = 'neutral', style, ...rest }) {
  const borders = {
    neutral: 'var(--border)',
    success: 'var(--blue)',
    error: 'var(--danger)',
  };
  return (
    <div
      role="status"
      style={{
        background: 'var(--panel-2)',
        color: type === 'error' ? '#ffd9d9' : 'var(--cream)',
        border: `1px solid ${borders[type] || borders.neutral}`,
        borderRadius: 'var(--r-xl)',
        padding: '11px 16px',
        fontSize: '.9rem',
        boxShadow: 'var(--shadow-toast)',
        maxWidth: '90vw',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
