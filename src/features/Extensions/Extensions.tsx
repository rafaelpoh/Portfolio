import { FC, memo } from 'react';
import type { Extension } from '../../types/portfolio';
import { ExtensionCard } from './components/ExtensionCard';
import styles from './Extensions.module.css';

export interface ExtensionsProps {
  readonly extensions: ReadonlyArray<Extension>;
}

export const Extensions: FC<ExtensionsProps> = memo(({ extensions }) => {
  return (
    <section
      className={`${styles.section} animate-fade-in`}
      aria-labelledby="extensions-title"
    >
      <div className={styles.header}>
        <h2 id="extensions-title" className={styles.title}>
          Extensões para o <span className="destaque">Google Chrome</span>
        </h2>
        <p className={styles.subtitle}>
          Ferramentas oficiais publicadas na Chrome Web Store com foco em produtividade com IA, acessibilidade e performance ultraleve.
        </p>
      </div>

      <div className={styles.grid}>
        {extensions.map((ext) => (
          <div key={ext.id} className={styles.gridItem}>
            <ExtensionCard extension={ext} />
          </div>
        ))}
      </div>
    </section>
  );
});

Extensions.displayName = 'Extensions';
