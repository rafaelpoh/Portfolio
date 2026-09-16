import { FC, memo } from 'react';
import type { ThemeMode } from '../../types/portfolio';
import styles from './ThemeSwitch.module.css';

export interface ThemeSwitchProps {
  readonly theme: ThemeMode;
  readonly onToggle: () => void;
}

export const ThemeSwitch: FC<ThemeSwitchProps> = memo(({ theme, onToggle }) => {
  const isLight = theme === 'Claro';

  return (
    <button
      type="button"
      className={styles.switch}
      onClick={onToggle}
      aria-label={`Alternar para tema ${isLight ? 'escuro' : 'claro'}`}
      title={`Alternar para tema ${isLight ? 'escuro' : 'claro'}`}
    >
      <i
        className={`bi ${isLight ? 'bi-lightbulb-fill' : 'bi-lightbulb-off-fill'} ${styles.icon}`}
        aria-hidden="true"
      />
    </button>
  );
});

ThemeSwitch.displayName = 'ThemeSwitch';
