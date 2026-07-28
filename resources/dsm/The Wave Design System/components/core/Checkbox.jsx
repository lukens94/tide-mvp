import React from 'react';

/**
 * The Wave — Checkbox
 * Rounded-square check used in project to-do lists. When done, fills
 * blue, shows a white tick, and strikes through the label.
 */
export function Checkbox({ label, checked = false, onChange, onCream = true, style, ...rest }) {
  return (
    <div
      onClick={() => onChange && onChange(!checked)}
      style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '5px 0', cursor: 'pointer', ...style }}
      {...rest}
    >
      <span
        style={{
          width: 18,
          height: 18,
          borderRadius: 'var(--r-xs)',
          flex: '0 0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: `1.5px solid ${checked ? 'var(--blue)' : '#c9c5b9'}`,
          background: checked ? 'var(--blue)' : 'transparent',
          transition: 'background .15s ease, border-color .15s ease',
        }}
      >
        <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="var(--cream)" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: checked ? 1 : 0 }}>
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
      <span
        style={{
          fontSize: '.95rem',
          lineHeight: 1.5,
          color: checked ? '#a8a59c' : (onCream ? '#2a2a26' : 'var(--cream)'),
          textDecoration: checked ? 'line-through' : 'none',
          transition: 'color .15s ease',
        }}
      >
        {label}
      </span>
    </div>
  );
}
