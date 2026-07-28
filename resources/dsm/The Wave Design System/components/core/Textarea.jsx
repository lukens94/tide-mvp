import React from 'react';

/**
 * The Wave — Textarea
 * Multiline text field matching Input's look. `light` for cream cards.
 */
export function Textarea({ label, light = false, rows = 4, style, wrapStyle, id, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const taId = id || (label ? `ta-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return (
    <div style={{ ...wrapStyle }}>
      {label && (
        <label
          htmlFor={taId}
          className="mono"
          style={{ display: 'block', fontSize: '10.5px', letterSpacing: '.12em', textTransform: 'uppercase', color: light ? 'var(--cream-mut)' : 'var(--muted)', marginBottom: '8px' }}
        >
          {label}
        </label>
      )}
      <textarea
        id={taId}
        rows={rows}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          width: '100%',
          borderRadius: 'var(--r-xl)',
          padding: '13px 15px',
          fontSize: '.95rem',
          fontFamily: 'var(--font-sans)',
          lineHeight: 1.5,
          outline: 'none',
          resize: 'vertical',
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
