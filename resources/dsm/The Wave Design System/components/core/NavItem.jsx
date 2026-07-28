import React from 'react';

/**
 * The Wave — NavItem
 * Sidebar navigation row. Leading icon (emoji or SVG) + label.
 * Active state fills brand blue; hover gives a faint white wash.
 */
export function NavItem({ icon, children, active = false, onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '11px',
        width: '100%',
        padding: '11px 14px',
        border: 'none',
        borderRadius: 'var(--r-lg)',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'var(--font-sans)',
        fontSize: '.92rem',
        backgroundColor: active ? 'var(--blue)' : (hover ? 'rgba(255,255,255,.05)' : 'transparent'),
        color: active ? 'var(--cream)' : (hover ? 'var(--cream)' : 'var(--muted)'),
        transition: 'background-color .15s ease, color .15s ease',
        ...style,
      }}
      {...rest}
    >
      <span style={{ fontSize: '1.05rem', lineHeight: 1, display: 'inline-flex' }}>{icon}</span>
      <span>{children}</span>
    </button>
  );
}
