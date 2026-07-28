import React from 'react';

/**
 * The Wave — NumberField
 * Mono, right-aligned numeric input with − / + steppers. Mirrors the
 * project story-point field (.pm-sp) in the source. `light` for cream.
 */
export function NumberField({ value = 0, onChange, min = 0, max = Infinity, step = 0.5, light = false, style, ...rest }) {
  const set = (v) => { const n = Math.max(min, Math.min(max, v)); onChange && onChange(n); };
  const btn = {
    width: 34, height: 34, flex: 'none', borderRadius: 'var(--r-md)', cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', lineHeight: 1,
    background: light ? 'var(--cream-in)' : 'var(--panel-2)',
    color: light ? 'var(--black)' : 'var(--cream)',
    border: `1px solid ${light ? 'var(--cream-bd)' : 'var(--border)'}`,
  };
  return (
    <div style={{ display: 'flex', gap: '6px', alignItems: 'center', ...style }}>
      <button type="button" onClick={() => set(Number(value) - step)} aria-label="Diminuisci" style={btn}>−</button>
      <input
        type="number"
        value={value}
        min={min}
        max={max === Infinity ? undefined : max}
        step={step}
        onChange={(e) => set(parseFloat(e.target.value) || 0)}
        style={{
          width: 70,
          minWidth: 0,
          textAlign: 'right',
          fontFamily: 'var(--font-mono)',
          fontSize: '.9rem',
          borderRadius: 'var(--r-md)',
          padding: '11px 12px',
          outline: 'none',
          background: light ? 'var(--cream-in)' : 'var(--panel-2)',
          color: light ? 'var(--black)' : 'var(--cream)',
          border: `1px solid ${light ? 'var(--cream-bd)' : 'var(--border)'}`,
        }}
        {...rest}
      />
      <button type="button" onClick={() => set(Number(value) + step)} aria-label="Aumenta" style={btn}>+</button>
    </div>
  );
}
