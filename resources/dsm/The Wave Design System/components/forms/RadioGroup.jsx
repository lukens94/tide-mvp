import React from 'react';

/**
 * The Wave — RadioGroup
 * Classic radio list with a brand-blue filled dot. Vertical by default;
 * pass `inline` for a horizontal row.
 */
export function RadioGroup({ name, options = [], value, onChange, inline = false, onCream = false, style }) {
  return (
    <div style={{ display: 'flex', flexDirection: inline ? 'row' : 'column', flexWrap: 'wrap', gap: inline ? '18px' : '10px', ...style }}>
      {options.map((o) => {
        const val = typeof o === 'string' ? o : o.value;
        const label = typeof o === 'string' ? o : o.label;
        const active = val === value;
        return (
          <label key={val} style={{ display: 'flex', alignItems: 'center', gap: '9px', cursor: 'pointer' }}>
            <input type="radio" name={name} checked={active} onChange={() => onChange && onChange(val)} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
            <span style={{ width: 18, height: 18, flex: 'none', borderRadius: '50%', border: `1.5px solid ${active ? 'var(--blue)' : (onCream ? '#c9c5b9' : 'var(--border)')}`, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color .15s ease' }}>
              <span style={{ width: 9, height: 9, borderRadius: '50%', background: 'var(--blue)', transform: active ? 'scale(1)' : 'scale(0)', transition: 'transform .15s ease' }} />
            </span>
            <span style={{ fontSize: '.95rem', color: onCream ? '#2a2a26' : 'var(--cream)' }}>{label}</span>
          </label>
        );
      })}
    </div>
  );
}
