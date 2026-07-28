import React from 'react';

/**
 * The Wave — IconButton
 * 42px square control holding a single stroke icon. Hover fills blue.
 * Pass a Lucide/Feather-style SVG (or any node) as children.
 */
export function IconButton({ children, active = false, onClick, title, size = 42, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const on = active || hover;
  return (
    <button
      type="button"
      title={title}
      aria-label={title}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: size,
        height: size,
        borderRadius: 'var(--r-xl)',
        border: `1px solid ${on ? 'var(--blue)' : 'var(--border)'}`,
        backgroundColor: on ? 'var(--blue)' : 'transparent',
        color: on ? 'var(--cream)' : 'var(--muted)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'background-color .15s ease, color .15s ease, border-color .15s ease',
        ...style,
      }}
      {...rest}
    >
      <span style={{ display: 'inline-flex', width: 16, height: 16 }}>{children}</span>
    </button>
  );
}
