import React from 'react';

/**
 * The Wave — SegmentedControl
 * The product's "view switch": a pill container of segments with the
 * active one filled blue. Mirrors .view-switch / .vsw in the source.
 */
export function SegmentedControl({ options = [], value, onChange, style }) {
  return (
    <div style={{ display: 'inline-flex', background: 'var(--panel-2)', border: '1px solid var(--border)', borderRadius: 'var(--r-xl)', padding: '3px', gap: '2px', ...style }}>
      {options.map((o) => {
        const val = typeof o === 'string' ? o : o.value;
        const label = typeof o === 'string' ? o : o.label;
        const active = val === value;
        return (
          <button
            key={val}
            type="button"
            onClick={() => onChange && onChange(val)}
            style={{
              border: 'none',
              background: active ? 'var(--blue)' : 'transparent',
              color: active ? 'var(--cream)' : 'var(--muted)',
              fontFamily: 'var(--font-sans)',
              fontSize: '.85rem',
              padding: '7px 13px',
              borderRadius: 'var(--r-md)',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
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
