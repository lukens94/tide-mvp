import React from 'react';

/**
 * The Wave — Avatar
 * Circular avatar. Renders an image if `src` is given, otherwise a
 * solid brand-color disc with initials. `ring` adds the product's
 * signature panel+blue double ring.
 */
export function Avatar({ src, initials, color = 'var(--yellow)', size = 38, ring = false, title, style }) {
  return (
    <div
      title={title}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        flex: '0 0 auto',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: src ? 'transparent' : color,
        color: 'var(--black)',
        fontWeight: 700,
        fontSize: size * 0.4,
        boxShadow: ring ? 'var(--shadow-avatar)' : '0 0 0 2px var(--border)',
        ...style,
      }}
    >
      {src ? <img src={src} alt={title || ''} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /> : (initials || '')}
    </div>
  );
}
