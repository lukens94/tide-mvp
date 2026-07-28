import React from 'react';

/**
 * The Wave — Button
 * Primary (blue, lifts on hover) or ghost (mono text) action.
 * Always Space Mono, UPPERCASE, wide tracking.
 */
export function Button({
  variant = 'primary',
  children,
  icon,
  disabled = false,
  onClick,
  type = 'button',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '7px',
    fontFamily: 'var(--font-mono)',
    fontSize: 'var(--mono-md)',
    fontWeight: 700,
    letterSpacing: 'var(--ls-label)',
    textTransform: 'uppercase',
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: 'none',
    borderRadius: 'var(--r-xl)',
    transition: 'transform .12s ease, background-color .15s ease, box-shadow .15s ease, color .15s ease',
    opacity: disabled ? 0.5 : 1,
  };

  const variants = {
    primary: {
      backgroundColor: hover && !disabled ? 'var(--blue-2)' : 'var(--blue)',
      color: 'var(--cream)',
      padding: '12px 17px',
      transform: disabled ? 'none' : active ? 'translateY(1px) scale(.97)' : hover ? 'translateY(-1px)' : 'none',
      boxShadow: hover && !disabled ? 'var(--shadow-btn)' : 'none',
    },
    ghost: {
      background: 'transparent',
      color: hover && !disabled ? 'var(--cream)' : 'var(--muted)',
      padding: '12px 18px',
      fontSize: '11px',
      letterSpacing: 'var(--ls-wide)',
      borderRadius: 'var(--r-lg)',
    },
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{ ...base, ...variants[variant], ...style }}
      {...rest}
    >
      {icon && <span style={{ display: 'inline-flex', width: 14, height: 14 }}>{icon}</span>}
      {children}
    </button>
  );
}
