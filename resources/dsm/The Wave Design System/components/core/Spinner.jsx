import React from 'react';

/**
 * The Wave — Spinner
 * Circular loading indicator. Blue leading arc on a faint ring.
 */
export function Spinner({ size = 42, style }) {
  return (
    <>
      <style>{`@keyframes tw-spin{to{transform:rotate(360deg)}}`}</style>
      <div
        role="status"
        aria-label="Caricamento"
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          border: `${Math.max(3, size / 10)}px solid rgba(255,255,255,.15)`,
          borderTopColor: 'var(--blue)',
          animation: 'tw-spin .8s linear infinite',
          ...style,
        }}
      />
    </>
  );
}
