import React from 'react';

/**
 * The Wave — SearchInput
 * Text field with a leading magnifier icon; clears via the trailing ×
 * when it has a value. Mirrors the collaborator search field.
 */
export function SearchInput({ light = false, value, onChange, onClear, placeholder = 'Cerca…', style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const hasVal = value != null && value !== '';
  return (
    <div style={{ position: 'relative', ...style }}>
      <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', width: 15, height: 15, color: light ? 'var(--cream-mut)' : 'var(--muted)', display: 'flex' }}>
        <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      </span>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          width: '100%',
          borderRadius: 'var(--r-xl)',
          padding: '13px 40px 13px 40px',
          fontSize: '.95rem',
          fontFamily: 'var(--font-sans)',
          outline: 'none',
          background: light ? 'var(--cream-in)' : 'var(--panel-2)',
          color: light ? 'var(--black)' : 'var(--cream)',
          border: `1px solid ${focus ? (light ? 'var(--blue)' : '#5a8bff') : (light ? 'var(--cream-bd)' : 'var(--border)')}`,
          transition: 'border-color .15s ease',
        }}
        {...rest}
      />
      {hasVal && onClear && (
        <button type="button" onClick={onClear} aria-label="Cancella" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', width: 18, height: 18, border: 'none', background: 'none', cursor: 'pointer', color: light ? 'var(--cream-mut)' : 'var(--muted)', display: 'flex' }}>
          <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      )}
    </div>
  );
}
