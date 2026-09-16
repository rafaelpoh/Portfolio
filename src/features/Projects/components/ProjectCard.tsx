import { FC, memo } from 'react';
import type { Project } from '../../../types/portfolio';
import { Card } from '../../../components/Card/Card';
import { Button } from '../../../components/Button/Button';
import { Badge } from '../../../components/Badge/Badge';
import styles from './ProjectCard.module.css';

export interface ProjectCardProps {
  readonly project: Project;
}

export const ProjectCard: FC<ProjectCardProps> = memo(({ project }) => {
  return (
    <Card className={styles.card} interactive>
      <div className={styles.mediaContainer}>
        <img
          src={project.image}
          alt={`Visualização do projeto ${project.title}`}
          className={styles.image}
          loading="lazy"
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>

        {project.tags && project.tags.length > 0 && (
          <div className={styles.tagsRow}>
            {project.tags.map((tag) => (
              <Badge key={`${project.id}-tag-${tag}`} variant="subtle" size="sm">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        <p className={styles.description}>{project.description}</p>

        <div className={styles.actions}>
          <Button
            variant="primary"
            size="sm"
            href={project.liveUrl}
            target="_blank"
            icon={<i className="bi bi-box-arrow-up-right" aria-hidden="true" />}
            ariaLabel={`Acessar aplicação online ${project.title}`}
          >
            Acessar Aplicação
          </Button>

          <Button
            variant="secondary"
            size="sm"
            href={project.githubUrl}
            target="_blank"
            icon={<i className="bi bi-github" aria-hidden="true" />}
            ariaLabel={`Ver repositório no GitHub do projeto ${project.title}`}
          >
            Repositório
          </Button>
        </div>
      </div>
    </Card>
  );
});

ProjectCard.displayName = 'ProjectCard';
