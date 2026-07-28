import React from 'react';

/**
 * The Wave — StatTile
 * A big-number tile in three tones: sand, dark, or yellow. Lifts on
 * hover. Number is heavy, tabular; label is mono uppercase.
 */
export function StatTile({ num, label, tone = 'sand', style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    sand:   { bg: 'var(--sand)',    num: 'var(--black)', lab: '#6b645c' },
    dark:   { bg: 'var(--panel-2)', num: 'var(--cream)', lab: 'var(--muted)' },
    yellow: { bg: 'var(--yellow)',  num: '#323232',      lab: '#6b5e00' },
  };
  const t = tones[tone] || tones.sand;
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: t.bg,
        borderRadius: 'var(--r-3xl)',
        padding: '18px 18px 16px',
        minHeight: 96,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        transform: hover ? 'translateY(-2px)' : 'none',
        boxShadow: hover ? 'var(--shadow-tile)' : 'none',
        transition: 'transform .15s ease, box-shadow .15s ease',
        ...style,
      }}
      {...rest}
    >
      <div style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-.02em', lineHeight: 1, fontVariantNumeric: 'tabular-nums', color: t.num }}>{num}</div>
      <div className="mono" style={{ fontSize: '10px', letterSpacing: '.1em', textTransform: 'uppercase', marginTop: '9px', color: t.lab }}>{label}</div>
    </div>
  );
}
