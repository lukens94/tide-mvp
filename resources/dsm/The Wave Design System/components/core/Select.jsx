import React from 'react';

/**
 * The Wave — Select
 * The "field pill" dropdown. Dark by default, or `light` for use on
 * cream cards. Mono uppercase, chevron drawn as an inline SVG background.
 */
export function Select({ options = [], value, onChange, light = false, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const stroke = light ? '323232' : '9b9890';
  const chevron =
    `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23${stroke}' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`;

  return (
    <select
      value={value}
      onChange={onChange}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        appearance: 'none',
        WebkitAppearance: 'none',
        fontFamily: 'var(--font-mono)',
        fontSize: '11.5px',
        letterSpacing: '.06em',
        textTransform: 'uppercase',
        borderRadius: 'var(--r-xl)',
        padding: '11px 34px 11px 16px',
        cursor: 'pointer',
        background: light ? 'var(--cream-in)' : hover ? '#3d3d39' : 'var(--panel-2)',
        color: light ? 'var(--black)' : 'var(--cream)',
        border: `1px solid ${light ? (hover ? 'var(--blue)' : 'var(--cream-bd)') : (hover ? '#5a8bff' : 'var(--border)')}`,
        backgroundImage: chevron,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 14px center',
        backgroundSize: '13px',
        transition: 'border-color .15s ease, background .15s ease',
        ...style,
      }}
      {...rest}
    >
      {options.map((o) => {
        const val = typeof o === 'string' ? o : o.value;
        const label = typeof o === 'string' ? o : o.label;
        return <option key={val} value={val}>{label}</option>;
      })}
    </select>
  );
}
