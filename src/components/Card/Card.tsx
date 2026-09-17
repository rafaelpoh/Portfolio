import { FC, ReactNode, memo, KeyboardEvent } from 'react';
import styles from './Card.module.css';

export interface CardProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly elevated?: boolean;
  readonly interactive?: boolean;
  readonly onClick?: () => void;
  readonly ariaLabel?: string;
}

export const Card: FC<CardProps> = memo(
  ({ children, className = '', elevated = false, interactive = false, onClick, ariaLabel }) => {
    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
      if (onClick && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        onClick();
      }
    };

    const isInteractive = Boolean(onClick || interactive);

    return (
      <div
        className={`${styles.card} ${elevated ? styles.elevated : ''} ${
          isInteractive ? styles.interactive : ''
        } ${className}`.trim()}
        onClick={onClick}
        onKeyDown={onClick ? handleKeyDown : undefined}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
        aria-label={ariaLabel}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
