import React from 'react';

/**
 * The Wave — LevelBadge
 * The circular level indicator from the gamification hero: a small
 * uppercase label over a big level number, on a translucent disc.
 * Sits on the blue hero by default.
 */
export function LevelBadge({ level, label = 'Livello', size = 84, onBlue = true, style }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: onBlue ? 'rgba(255,255,255,.16)' : 'var(--panel-2)',
        color: 'var(--cream)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 auto',
        lineHeight: 1,
        ...style,
      }}
    >
      <small style={{ fontSize: size * 0.072, opacity: .8, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase' }}>{label}</small>
      <b style={{ fontSize: size * 0.19 }}>{level}</b>
    </div>
  );
}
