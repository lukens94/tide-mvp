import React from 'react';

/**
 * The Wave — PasswordInput
 * Password field with a show/hide eye toggle. Mirrors .pw-wrap /
 * .pw-toggle in the source. `light` for cream cards.
 */
export function PasswordInput({ label, light = false, style, wrapStyle, id, ...rest }) {
  const [show, setShow] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const inId = id || 'pw-field';
  return (
    <div style={{ ...wrapStyle }}>
      {label && (
        <label htmlFor={inId} className="mono" style={{ display: 'block', fontSize: '10.5px', letterSpacing: '.12em', textTransform: 'uppercase', color: light ? 'var(--cream-mut)' : 'var(--muted)', marginBottom: '8px' }}>{label}</label>
      )}
      <div style={{ position: 'relative' }}>
        <input
          id={inId}
          type={show ? 'text' : 'password'}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            width: '100%',
            borderRadius: 'var(--r-xl)',
            padding: '13px 44px 13px 15px',
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
        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          title={show ? 'Nascondi password' : 'Mostra password'}
          aria-label={show ? 'Nascondi password' : 'Mostra password'}
          style={{ position: 'absolute', top: '50%', right: '12px', transform: 'translateY(-50%)', display: 'flex', background: 'none', border: 'none', cursor: 'pointer', color: light ? '#000' : 'var(--muted)', opacity: show ? 1 : .55, padding: '2px', transition: 'opacity .15s ease' }}
        >
          {show ? (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19M1 1l22 22"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/></svg>
          ) : (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>
          )}
        </button>
      </div>
    </div>
  );
}
