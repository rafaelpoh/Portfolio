import { FC, memo } from 'react';
import type { OtherProject } from '../../types/portfolio';
import { OtherProjectCard } from './components/OtherProjectCard';
import styles from './OtherProjects.module.css';

export interface OtherProjectsProps {
  readonly items: ReadonlyArray<OtherProject>;
}

export const OtherProjects: FC<OtherProjectsProps> = memo(({ items }) => {
  return (
    <section
      className={`${styles.section} animate-fade-in`}
      aria-labelledby="other-projects-title"
    >
      <div className={styles.header}>
        <h2 id="other-projects-title" className={styles.title}>
          Outros Projetos & <span className="destaque">Estudos Dirigidos</span>
        </h2>
        <p className={styles.subtitle}>
          Projetos focados em máquinas de estado, consumo assíncrono de APIs externas e mecânicas de regras de negócio.
        </p>
      </div>

      <div className={styles.grid}>
        {items.map((item) => (
          <div key={item.id} className={styles.gridItem}>
            <OtherProjectCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
});

OtherProjects.displayName = 'OtherProjects';
