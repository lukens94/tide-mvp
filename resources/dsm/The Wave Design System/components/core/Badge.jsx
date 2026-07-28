import React from 'react';

/**
 * The Wave — Badge
 * A gamification achievement. Shows an emoji icon, a name, and a
 * short mono description. `locked` dims and desaturates it.
 */
export function Badge({ icon, name, desc, locked = false, style, ...rest }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '12px 14px',
        border: '1px solid var(--border)',
        borderRadius: 'var(--r-xl)',
        background: 'var(--panel-2)',
        opacity: locked ? 0.4 : 1,
        filter: locked ? 'grayscale(1)' : 'none',
        ...style,
      }}
      {...rest}
    >
      <span style={{ fontSize: '1.7rem', flex: '0 0 auto', lineHeight: 1 }}>{icon}</span>
      <div>
        <div style={{ fontWeight: 700, color: 'var(--cream)', fontSize: '.9rem' }}>{name}</div>
        <div className="mono" style={{ fontSize: '.72rem', color: 'var(--muted)' }}>{desc}</div>
      </div>
    </div>
  );
}
