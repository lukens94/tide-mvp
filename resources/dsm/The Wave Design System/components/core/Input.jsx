import React from 'react';

/**
 * The Wave — Input
 * Labelled text field. Dark fill by default; `light` for cream cards.
 * Label is Space Mono uppercase, focus ring is brand blue.
 */
export function Input({ label, light = false, style, wrapStyle, id, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? `in-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return (
    <div style={{ ...wrapStyle }}>
      {label && (
        <label
          htmlFor={inputId}
          className="mono"
          style={{
            display: 'block',
            fontSize: '10.5px',
            letterSpacing: '.12em',
            textTransform: 'uppercase',
            color: light ? 'var(--cream-mut)' : 'var(--muted)',
            marginBottom: '8px',
          }}
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          width: '100%',
          borderRadius: 'var(--r-xl)',
          padding: '13px 15px',
          fontSize: '.95rem',
          fontFamily: 'var(--font-sans)',
          outline: 'none',
          background: light ? 'var(--cream-in)' : 'var(--panel-2)',
          color: light ? 'var(--black)' : 'var(--cream)',
          border: `1px solid ${focus ? (light ? 'var(--blue)' : '#5a8bff') : (light ? 'var(--cream-bd)' : 'var(--border)')}`,
          transition: 'border-color .15s ease',
          ...style,
        }}
        {...rest}
      />
    </div>
  );
}
