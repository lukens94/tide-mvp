import React from 'react';

/**
 * The Wave — ColorSwatchPicker
 * Row of round color swatches; the selected one gets a cream border +
 * blue ring. Mirrors .ac-swatch and the project color picker. Defaults
 * to the brand data-viz palette.
 */
const DEFAULT_PALETTE = ['#0057FF', '#FFD400', '#CDC3BA', '#323232', '#1A66FF', '#00A98F', '#FF6B35'];

export function ColorSwatchPicker({ colors = DEFAULT_PALETTE, value, onChange, size = 24, style }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', ...style }}>
      {colors.map((c) => {
        const active = value && value.toLowerCase() === c.toLowerCase();
        return (
          <button
            key={c}
            type="button"
            onClick={() => onChange && onChange(c)}
            aria-label={c}
            title={c}
            style={{
              width: size,
              height: size,
              borderRadius: '50%',
              background: c,
              cursor: 'pointer',
              padding: 0,
              border: `2px solid ${active ? 'var(--cream)' : 'transparent'}`,
              boxShadow: active ? '0 0 0 2px var(--blue)' : '0 0 0 1px var(--border)',
              transition: 'box-shadow .12s ease',
            }}
          />
        );
      })}
    </div>
  );
}
