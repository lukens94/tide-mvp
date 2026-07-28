import React from 'react';
import { ProgressBar } from './ProgressBar.jsx';

/**
 * The Wave — Hero
 * The signature blue panel with the giant 92px story-point counter,
 * a label, and a progress bar toward the sprint capacity.
 */
export function Hero({ name, range, done, total, pct, capLabel = 'Story points', style }) {
  const percent = pct != null ? pct : (total ? Math.round((done / total) * 100) : 0);
  return (
    <div style={{ background: 'var(--blue)', borderRadius: 'var(--r-5xl)', padding: '26px', color: 'var(--cream)', ...style }}>
      {(name || range) && (
        <div style={{ marginBottom: '4px' }}>
          {name && <div style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-.02em' }}>{name}</div>}
          {range && <div className="mono" style={{ fontSize: '11px', letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--text-on-blue-mut)', marginTop: '7px' }}>{range}</div>}
        </div>
      )}
      <div className="mono" style={{ fontSize: '10.5px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text-on-blue-mut)', marginTop: name ? '24px' : 0 }}>{capLabel}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', margin: '6px 0 4px' }}>
        <span style={{ fontSize: '92px', fontWeight: 800, lineHeight: .85, letterSpacing: '-.04em', fontVariantNumeric: 'tabular-nums' }}>{done}</span>
        {total != null && <span style={{ fontSize: '1.3rem', fontWeight: 700, color: '#9db8ff', letterSpacing: '-.02em' }}>/ {total}</span>}
      </div>
      <ProgressBar value={percent} onBlue style={{ marginTop: '20px' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '9px' }} className="mono">
        <span style={{ fontSize: '10.5px', letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--text-on-blue-mut)' }}>Completato</span>
        <span style={{ fontSize: '10.5px', letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--cream)', fontWeight: 700 }}>{percent}%</span>
      </div>
    </div>
  );
}
