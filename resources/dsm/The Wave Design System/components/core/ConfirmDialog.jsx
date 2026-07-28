import React from 'react';
import { Button } from './Button.jsx';

/**
 * The Wave — ConfirmDialog
 * A compact confirmation on a dark overlay (no blue header — smaller
 * than Modal). Mirrors .confirm-* in the source. The confirm button
 * is danger-red by default.
 */
export function ConfirmDialog({ message, okLabel = 'Conferma', cancelLabel = 'Annulla', danger = true, onOk, onCancel }) {
  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget && onCancel) onCancel(); }}
      style={{ position: 'fixed', inset: 0, zIndex: 1100, background: 'rgba(0,0,0,.55)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}
    >
      <div style={{ background: 'var(--panel)', border: '1px solid var(--border)', borderRadius: 'var(--r-3xl)', padding: '22px', width: '100%', maxWidth: '24rem', boxShadow: 'var(--shadow-modal)' }}>
        <div style={{ color: 'var(--cream)', fontSize: '.98rem', lineHeight: 1.5, marginBottom: '20px' }}>{message}</div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
          <button
            type="button"
            onClick={onCancel}
            style={{ font: 'inherit', fontSize: '.9rem', padding: '9px 16px', borderRadius: 'var(--r-md)', cursor: 'pointer', border: '1px solid var(--border)', background: 'transparent', color: 'var(--muted)' }}
          >
            {cancelLabel}
          </button>
          <button
            type="button"
            onClick={onOk}
            style={{ font: 'inherit', fontSize: '.9rem', fontWeight: 700, padding: '9px 16px', borderRadius: 'var(--r-md)', cursor: 'pointer', border: `1px solid ${danger ? 'var(--danger-2)' : 'var(--blue)'}`, background: danger ? 'var(--danger-2)' : 'var(--blue)', color: '#fff' }}
          >
            {okLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
