import { FC, memo } from 'react';
import styles from './Footer.module.css';

export const Footer: FC = memo(() => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.copy}>
          &copy; {currentYear} <strong>Rafael Perroni</strong>. Desenvolvido com React, TypeScript & CSS Modules.
        </p>
        <p className={styles.principles}>
          Construído com base nos princípios de arquitetura limpa, acessibilidade e alta performance nativa.
        </p>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
