import { FC, memo, useState, useMemo } from 'react';
import type { Project } from '../../types/portfolio';
import { ProjectCard } from './components/ProjectCard';
import styles from './Projects.module.css';

export interface ProjectsProps {
  readonly projects: ReadonlyArray<Project>;
}

export const Projects: FC<ProjectsProps> = memo(({ projects }) => {
  const [filterQuery, setFilterQuery] = useState<string>('');

  const filteredProjects = useMemo(() => {
    if (!filterQuery.trim()) return projects;
    const q = filterQuery.toLowerCase();
    return projects.filter((proj) => {
      const matchTitle = proj.title.toLowerCase().includes(q);
      const matchDesc = proj.description.toLowerCase().includes(q);
      const matchTags = proj.tags?.some((t) => t.toLowerCase().includes(q));
      return matchTitle || matchDesc || matchTags;
    });
  }, [projects, filterQuery]);

  return (
    <section className={`${styles.projectsSection} animate-fade-in`} aria-labelledby="projects-title">
      <div className={styles.header}>
        <h2 id="projects-title" className={styles.title}>
          Projetos em <span className="destaque">Destaque</span>
        </h2>
        <p className={styles.subtitle}>
          Aplicações completas com integração de Inteligência Artificial, arquiteturas serverless, dashboards em tempo real e interfaces ricas.
        </p>

        {/* Campo de Busca Rápida / Filtro Instantâneo */}
        <div className={styles.searchContainer}>
          <i className={`bi bi-search ${styles.searchIcon}`} aria-hidden="true" />
          <input
            type="search"
            className={styles.searchInput}
            placeholder="Filtrar por tecnologia ou nome (ex: Gemini, Firebase, Mobile)..."
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            aria-label="Filtrar projetos por tecnologia ou nome"
          />
          {filterQuery && (
            <button
              type="button"
              className={styles.clearButton}
              onClick={() => setFilterQuery('')}
              aria-label="Limpar filtro de busca"
            >
              <i className="bi bi-x" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>

      <div className={styles.grid}>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div key={project.id} className={styles.gridItem}>
              <ProjectCard project={project} />
            </div>
          ))
        ) : (
          <div className={styles.emptyState}>
            <i className={`bi bi-search ${styles.emptyIcon}`} aria-hidden="true" />
            <p className={styles.emptyText}>
              Nenhum projeto encontrado para o filtro "{filterQuery}".
            </p>
            <button
              type="button"
              className={styles.resetFilterBtn}
              onClick={() => setFilterQuery('')}
            >
              Ver todos os projetos
            </button>
          </div>
        )}
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';
