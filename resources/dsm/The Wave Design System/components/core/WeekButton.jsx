import React from 'react';

/**
 * The Wave — WeekButton
 * Small mono selector used for sprint weeks. Active fills blue;
 * hover outlines blue. Lives on cream surfaces.
 */
export function WeekButton({ children, active = false, onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: '8px 13px',
        borderRadius: 'var(--r-md)',
        cursor: 'pointer',
        fontFamily: 'var(--font-mono)',
        fontSize: '10.5px',
        letterSpacing: '.06em',
        textTransform: 'uppercase',
        backgroundColor: active ? 'var(--blue)' : 'var(--cream)',
        color: active ? 'var(--cream)' : (hover ? 'var(--blue)' : 'var(--cream-mut)'),
        border: `1px solid ${active || hover ? 'var(--blue)' : 'var(--cream-bd)'}`,
        transition: 'background-color .15s ease, color .15s ease, border-color .15s ease',
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
