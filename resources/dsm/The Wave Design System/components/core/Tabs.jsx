import React from 'react';

/**
 * The Wave — Tabs
 * Horizontal tab bar. The active tab fills black with cream text;
 * inactive tabs are muted mono labels that darken on hover.
 */
export function Tabs({ tabs = [], value, onChange, style }) {
  const [hover, setHover] = React.useState(null);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', ...style }}>
      {tabs.map((t) => {
        const val = typeof t === 'string' ? t : t.value;
        const label = typeof t === 'string' ? t : t.label;
        const active = val === value;
        return (
          <button
            key={val}
            type="button"
            onClick={() => onChange && onChange(val)}
            onMouseEnter={() => setHover(val)}
            onMouseLeave={() => setHover(null)}
            style={{
              padding: '10px 18px',
              borderRadius: 'var(--r-lg)',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-mono)',
              fontSize: '11.5px',
              letterSpacing: '.08em',
              textTransform: 'uppercase',
              fontWeight: active ? 700 : 400,
              backgroundColor: active ? 'var(--black)' : 'transparent',
              color: active ? 'var(--cream)' : (hover === val ? 'var(--black)' : 'var(--cream-mut)'),
              transition: 'background-color .15s ease, color .15s ease',
            }}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
