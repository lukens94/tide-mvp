import React from 'react';

/**
 * The Wave — Modal
 * Centered dialog on a blurred dark overlay. Blue header bar with a
 * heavy title and a close button; body on the dark panel surface.
 * Pass `footer` for the action row.
 */
export function Modal({ title, children, footer, onClose, maxWidth = '30rem', style }) {
  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget && onClose) onClose(); }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 50,
        background: 'var(--overlay-bg)',
        backdropFilter: 'var(--overlay-blur)',
        WebkitBackdropFilter: 'var(--overlay-blur)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth,
          background: 'var(--panel)',
          borderRadius: 'var(--r-4xl)',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-modal)',
          ...style,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 22px', background: 'var(--blue)' }}>
          <div style={{ fontSize: '1.1rem', fontWeight: 800, letterSpacing: '-.01em', color: 'var(--cream)' }}>{title}</div>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              aria-label="Chiudi"
              style={{ width: 30, height: 30, border: 'none', borderRadius: 'var(--r-md)', background: 'rgba(250,247,235,.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--cream)', cursor: 'pointer' }}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>
          )}
        </div>
        <div style={{ padding: '22px' }}>
          {children}
          {footer && <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '24px' }}>{footer}</div>}
        </div>
      </div>
    </div>
  );
}
