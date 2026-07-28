import React from 'react';

/**
 * The Wave — ProgressBar
 * Pill-shaped track + fill. On the blue hero the track is translucent
 * white and the fill is cream; elsewhere the fill is brand blue.
 * `tone` overrides the fill color (e.g. a project color).
 */
export function ProgressBar({ value = 0, onBlue = false, tone, height = 12, style }) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div
      style={{
        height,
        borderRadius: 'var(--r-pill)',
        overflow: 'hidden',
        background: onBlue ? 'rgba(255,255,255,.22)' : 'color-mix(in srgb, currentColor 18%, transparent)',
        ...style,
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${pct}%`,
          borderRadius: 'var(--r-pill)',
          background: tone || (onBlue ? 'var(--cream)' : 'var(--blue)'),
          transition: 'width .5s cubic-bezier(.2,.8,.2,1)',
        }}
      />
    </div>
  );
}
