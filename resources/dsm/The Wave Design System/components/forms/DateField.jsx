import React from 'react';

/**
 * The Wave — DateField
 * A native date input styled to match the form fields. Mirrors the
 * sprint start/end date inputs. `light` for cream cards.
 */
export function DateField({ light = false, value, onChange, style, id, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <input
      id={id}
      type="date"
      value={value}
      onChange={onChange}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      style={{
        width: '100%',
        borderRadius: 'var(--r-xl)',
        padding: '12px 15px',
        fontSize: '.95rem',
        fontFamily: 'var(--font-sans)',
        outline: 'none',
        background: light ? 'var(--cream-in)' : 'var(--panel-2)',
        color: light ? 'var(--black)' : 'var(--cream)',
        colorScheme: light ? 'light' : 'dark',
        border: `1px solid ${focus ? (light ? 'var(--blue)' : '#5a8bff') : (light ? 'var(--cream-bd)' : 'var(--border)')}`,
        transition: 'border-color .15s ease',
        ...style,
      }}
      {...rest}
    />
  );
}
