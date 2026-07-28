import React from 'react';

/**
 * The Wave — ChipSelect
 * Single-select group of pill "chips" — the product's avatar-picker
 * pattern (.ac-chip / .is-active). The active chip fills brand blue.
 * A compact, on-brand alternative to a radio group.
 */
export function ChipSelect({ options = [], value, onChange, style }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', ...style }}>
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
              border: `1px solid ${active ? 'var(--blue)' : 'var(--border)'}`,
              background: active ? 'var(--blue)' : 'var(--panel-2)',
              color: 'var(--cream)',
              borderRadius: 'var(--r-pill)',
              padding: '5px 12px',
              fontSize: '.78rem',
              fontFamily: 'var(--font-sans)',
              cursor: 'pointer',
              transition: 'background-color .12s ease, border-color .12s ease',
            }}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
