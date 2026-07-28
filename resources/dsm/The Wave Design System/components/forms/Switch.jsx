import React from 'react';

/**
 * The Wave — Switch
 * On/off toggle. Track fills brand blue when on; knob slides. A
 * brand-consistent addition (the product uses button groups for
 * on/off, e.g. the theme toggle) for forms that need a true switch.
 */
export function Switch({ checked = false, onChange, disabled = false, label, onCream = false, style }) {
  const toggle = () => { if (!disabled && onChange) onChange(!checked); };
  const sw = (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={toggle}
      style={{
        width: 42,
        height: 24,
        flex: 'none',
        borderRadius: 'var(--r-pill)',
        border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        padding: 0,
        position: 'relative',
        opacity: disabled ? 0.5 : 1,
        background: checked ? 'var(--blue)' : (onCream ? 'var(--cream-bd)' : 'var(--border)'),
        transition: 'background-color .18s ease',
      }}
    >
      <span style={{ position: 'absolute', top: 3, left: 3, width: 18, height: 18, borderRadius: '50%', background: 'var(--cream)', boxShadow: '0 1px 3px rgba(0,0,0,.3)', transform: checked ? 'translateX(18px)' : 'translateX(0)', transition: 'transform .18s cubic-bezier(.2,.8,.2,1)' }} />
    </button>
  );
  if (!label) return <span style={style}>{sw}</span>;
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', cursor: disabled ? 'not-allowed' : 'pointer', ...style }}>
      {sw}
      <span style={{ fontSize: '.95rem', color: onCream ? '#2a2a26' : 'var(--cream)' }}>{label}</span>
    </label>
  );
}
