import { FC, ReactNode, memo } from 'react';
import styles from './Badge.module.css';

export interface BadgeProps {
  readonly children: ReactNode;
  readonly variant?: 'default' | 'accent' | 'subtle';
  readonly size?: 'sm' | 'md';
  readonly icon?: ReactNode;
  readonly className?: string;
}

export const Badge: FC<BadgeProps> = memo(
  ({ children, variant = 'default', size = 'sm', icon, className = '' }) => {
    return (
      <span className={`${styles.badge} ${styles[variant]} ${styles[size]} ${className}`.trim()}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <span>{children}</span>
      </span>
    );
  }
);

Badge.displayName = 'Badge';
