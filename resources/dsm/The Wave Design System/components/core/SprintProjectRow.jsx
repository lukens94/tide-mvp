import React from 'react';

/**
 * The Wave — SprintProjectRow
 * A colored card summarising one project's story-point progress:
 * code, name, assigned vs worked SP, and a progress bar. The whole
 * row is tinted with the project color; text ink auto-contrasts.
 */
function inkFor(hex) {
  const n = parseInt(String(hex).slice(1), 16);
  const r = n >> 16, g = (n >> 8) & 255, b = n & 255;
  return (r * 299 + g * 587 + b * 114) / 1000 > 140 ? '#323232' : '#FAF7EB';
}

export function SprintProjectRow({ code, name, color = '#0057FF', assigned = 0, worked = 0, style }) {
  const ink = inkFor(color);
  const pct = assigned ? Math.min(100, Math.round((worked / assigned) * 100)) : 0;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', borderRadius: 'var(--r-6xl)', padding: '16px', background: color, color: ink, ...style }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <span style={{ fontWeight: 800, fontSize: '1.9rem', lineHeight: 1, letterSpacing: '-.01em' }}>{code}</span>
        <span style={{ fontSize: '.9rem', opacity: .75 }}>{name}</span>
      </div>
      <div className="mono" style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', fontSize: '10.5px', letterSpacing: '.04em', textTransform: 'uppercase', opacity: .85 }}>
        <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>Assegnati<b style={{ fontSize: '1.2rem', textTransform: 'none', letterSpacing: 0 }}>{assigned} SP</b></span>
        <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>Lavorati<b style={{ fontSize: '1.2rem', textTransform: 'none', letterSpacing: 0 }}>{worked} SP</b></span>
      </div>
      <div style={{ height: 12, borderRadius: 'var(--r-pill)', overflow: 'hidden', background: 'color-mix(in srgb, currentColor 18%, transparent)' }}>
        <div style={{ height: '100%', width: `${pct}%`, borderRadius: 'var(--r-pill)', background: 'currentColor', transition: 'width .5s cubic-bezier(.2,.8,.2,1)' }} />
      </div>
      <div className="mono" style={{ fontSize: '11px', opacity: .8 }}>{pct}% completato</div>
    </div>
  );
}
