import React from 'react';

/**
 * The Wave — GameStat
 * A dark bordered card showing one gamification metric: a big heavy
 * number over a mono uppercase label. Centered.
 */
export function GameStat({ num, label, style, ...rest }) {
  return (
    <div
      style={{
        background: 'var(--panel)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--r-2xl)',
        padding: '14px',
        textAlign: 'center',
        ...style,
      }}
      {...rest}
    >
      <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--cream)', fontVariantNumeric: 'tabular-nums' }}>{num}</div>
      <div className="mono" style={{ fontSize: '.7rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em', marginTop: '4px' }}>{label}</div>
    </div>
  );
}
