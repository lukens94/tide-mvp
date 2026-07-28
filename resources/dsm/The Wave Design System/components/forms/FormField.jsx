import React from 'react';

/**
 * The Wave — FormField
 * Labeling wrapper for any control: mono uppercase label, optional
 * required mark, hint, and error text. Mirrors the product's
 * modal-lab / modal-hint pattern. Wrap an Input/Select/etc as children.
 */
export function FormField({ label, htmlFor, required = false, hint, error, light = false, children, style }) {
  return (
    <div style={{ marginBottom: '18px', ...style }}>
      {label && (
        <label
          htmlFor={htmlFor}
          className="mono"
          style={{ display: 'block', fontSize: '10.5px', letterSpacing: '.12em', textTransform: 'uppercase', color: light ? 'var(--cream-mut)' : 'var(--muted)', marginBottom: '8px' }}
        >
          {label}{required && <span style={{ color: 'var(--danger)', marginLeft: '4px' }}>*</span>}
        </label>
      )}
      {children}
      {hint && !error && (
        <div className="mono" style={{ fontSize: '10px', letterSpacing: '.06em', textTransform: 'uppercase', color: light ? 'var(--cream-dim)' : '#6f6e68', marginTop: '8px' }}>{hint}</div>
      )}
      {error && (
        <div style={{ fontSize: '12px', color: 'var(--danger)', marginTop: '6px' }}>{error}</div>
      )}
    </div>
  );
}
