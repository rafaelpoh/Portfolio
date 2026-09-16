import { FC, ReactNode, memo } from 'react';
import styles from './Card.module.css';

export interface CardProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly elevated?: boolean;
  readonly interactive?: boolean;
  readonly onClick?: () => void;
}

export const Card: FC<CardProps> = memo(
  ({ children, className = '', elevated = false, interactive = false, onClick }) => {
    return (
      <div
        className={`${styles.card} ${elevated ? styles.elevated : ''} ${
          interactive ? styles.interactive : ''
        } ${className}`.trim()}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
