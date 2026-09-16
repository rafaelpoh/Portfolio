import { FC, memo } from 'react';
import type { NavItem, NavSection } from '../../types/portfolio';
import styles from './Navbar.module.css';

export interface NavbarProps {
  readonly items: ReadonlyArray<NavItem>;
  readonly activeSection: NavSection;
  readonly isMobileOpen: boolean;
  readonly onSelectSection: (section: NavSection) => void;
  readonly onToggleMobile: () => void;
  readonly onCloseMobile: () => void;
}

export const Navbar: FC<NavbarProps> = memo(
  ({
    items,
    activeSection,
    isMobileOpen,
    onSelectSection,
    onToggleMobile,
    onCloseMobile,
  }) => {
    return (
      <>
        {/* Botão de Toggle Mobile */}
        <button
          type="button"
          className={styles.mobileToggle}
          onClick={onToggleMobile}
          aria-label={isMobileOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          aria-expanded={isMobileOpen}
        >
          <i
            className={`bi ${isMobileOpen ? 'bi-x-lg' : 'bi-list'} ${styles.toggleIcon}`}
            aria-hidden="true"
          />
        </button>

        {/* Backdrop para fechar menu ao clicar fora no mobile */}
        {isMobileOpen && (
          <div
            className={styles.backdrop}
            onClick={onCloseMobile}
            aria-hidden="true"
          />
        )}

        {/* Menu Principal */}
        <header className={`${styles.header} ${isMobileOpen ? styles.headerOpen : ''}`}>
          <nav className={styles.nav} aria-label="Navegação Principal do Portfólio">
            <div className={styles.brandContainer}>
              <span className={styles.brandTitle}>RP</span>
              <span className={styles.brandDot} />
            </div>

            <ul className={styles.menuList}>
              {items.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id} className={styles.menuItem}>
                    <button
                      type="button"
                      className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                      onClick={() => onSelectSection(item.id)}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <i className={`bi ${item.icon} ${styles.linkIcon}`} aria-hidden="true" />
                      <span className={styles.linkText}>{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </header>
      </>
    );
  }
);

Navbar.displayName = 'Navbar';
