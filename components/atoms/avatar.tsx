import * as React from 'react';
import { cn } from '@/lib/utils';

export interface AvatarProps {
  src?: string;
  initials?: string;
  color?: string;
  size?: number;
  ring?: boolean;
  title?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function Avatar({
  src,
  initials = '?',
  color = 'var(--yellow)',
  size = 38,
  ring = false,
  title,
  className,
  style,
}: AvatarProps): React.ReactElement {
  return (
    <span
      title={title}
      className={cn(
        'inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full font-heavy text-tide-black',
        ring && 'shadow-avatar',
        className,
      )}
      style={{
        width: size,
        height: size,
        backgroundColor: src ? undefined : color,
        fontSize: size * 0.36,
        ...style,
      }}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={title ?? initials} className="size-full object-cover" />
      ) : (
        initials.slice(0, 2).toUpperCase()
      )}
    </span>
  );
}
