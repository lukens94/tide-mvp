import React from 'react';

/**
 * The Wave — StreakPill
 * Small translucent pill used on the blue hero to show a streak or
 * short status. Mono, e.g. "🔥 4 giorni di fila". Mirrors .game-streak.
 */
export function StreakPill({ children, onBlue = true, style }) {
  return (
    <span
      className="mono"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '3px 10px',
        borderRadius: 'var(--r-pill)',
        background: onBlue ? 'rgba(255,255,255,.18)' : 'var(--panel-2)',
        color: 'var(--cream)',
        fontSize: '.7rem',
        fontWeight: 700,
        ...style,
      }}
    >
      {children}
    </span>
  );
}
