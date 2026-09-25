import React, { FC, ReactNode, memo } from 'react';
import { sanitizeLink } from '../../utils/security';
import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  readonly children: ReactNode;
  readonly variant?: ButtonVariant;
  readonly size?: ButtonSize;
  readonly href?: string;
  readonly target?: string;
  readonly rel?: string;
  readonly onClick?: (e: React.MouseEvent) => void;
  readonly type?: 'button' | 'submit' | 'reset';
  readonly ariaLabel?: string;
  readonly disabled?: boolean;
  readonly className?: string;
  readonly icon?: ReactNode;
  readonly download?: boolean | string;
}

export const Button: FC<ButtonProps> = memo(
  ({
    children,
    variant = 'primary',
    size = 'md',
    href,
    target,
    rel,
    onClick,
    type = 'button',
    ariaLabel,
    disabled = false,
    className = '',
    icon,
    download,
  }) => {
    const combinedClassName = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`.trim();

    if (href) {
      const safeHref = sanitizeLink(href);
      const isExternal = safeHref.startsWith('http') || target === '_blank';
      const safeRel = rel || (isExternal ? 'noopener noreferrer' : undefined);

      return (
        <a
          href={safeHref}
          className={combinedClassName}
          target={target}
          rel={safeRel}
          download={download}
          aria-label={ariaLabel}
          onClick={disabled ? (e) => e.preventDefault() : onClick}
          aria-disabled={disabled}
        >
          {icon && <span className={styles.icon}>{icon}</span>}
          <span>{children}</span>
        </a>
      );
    }

    return (
      <button
        type={type}
        className={combinedClassName}
        onClick={onClick}
        aria-label={ariaLabel}
        disabled={disabled}
      >
        {icon && <span className={styles.icon}>{icon}</span>}
        <span>{children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';
