import React from 'react';
import { Button } from './Button.jsx';

/**
 * The Wave — EmptyState
 * Centered placeholder for empty panels: emoji icon, heavy title,
 * mono message, optional primary CTA. Designed to sit on cream cards.
 */
export function EmptyState({ icon = '📁', title, message, ctaLabel, onCta, style }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px', textAlign: 'center', padding: '24px', minHeight: 160, ...style }}>
      <div style={{ fontSize: '2.6rem', lineHeight: 1 }} aria-hidden="true">{icon}</div>
      <div style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--black)' }}>{title}</div>
      {message && <div className="mono" style={{ fontSize: '12px', color: 'var(--cream-mut)', maxWidth: '32ch', lineHeight: 1.5 }}>{message}</div>}
      {ctaLabel && <Button onClick={onCta} style={{ marginTop: '6px' }}>{ctaLabel}</Button>}
    </div>
  );
}
