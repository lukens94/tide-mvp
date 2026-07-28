import React from 'react';

/**
 * The Wave — Chip
 * Small pill tag, typically tinted with a project color. Ink
 * auto-contrasts against the background.
 */
function inkFor(hex) {
  if (!hex || hex[0] !== '#') return 'var(--cream)';
  const n = parseInt(String(hex).slice(1), 16);
  const r = n >> 16, g = (n >> 8) & 255, b = n & 255;
  return (r * 299 + g * 587 + b * 114) / 1000 > 140 ? '#323232' : '#FAF7EB';
}

export function Chip({ children, color = '#0057FF', style, ...rest }) {
  return (
    <span
      className="mono"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '6px 12px',
        borderRadius: 'var(--r-pill)',
        fontSize: '10.5px',
        fontWeight: 700,
        letterSpacing: '.06em',
        background: color,
        color: inkFor(color),
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
