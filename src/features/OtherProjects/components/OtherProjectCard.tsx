import { FC, memo } from 'react';
import type { OtherProject } from '../../../types/portfolio';
import { Card } from '../../../components/Card/Card';
import { Button } from '../../../components/Button/Button';
import { Badge } from '../../../components/Badge/Badge';
import styles from './OtherProjectCard.module.css';

export interface OtherProjectCardProps {
  readonly item: OtherProject;
}

export const OtherProjectCard: FC<OtherProjectCardProps> = memo(({ item }) => {
  return (
    <Card className={styles.card} interactive>
      <div className={styles.mediaContainer}>
        <img
          src={item.image}
          alt={`Visualização de ${item.title}`}
          className={styles.image}
          loading="lazy"
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{item.title}</h3>

        {item.tags && item.tags.length > 0 && (
          <div className={styles.tagsRow}>
            {item.tags.map((tag) => (
              <Badge key={`${item.id}-tag-${tag}`} variant="subtle" size="sm">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        <p className={styles.description}>{item.description}</p>

        <div className={styles.actions}>
          <Button
            variant="primary"
            size="sm"
            href={item.liveUrl}
            target="_blank"
            icon={<i className="bi bi-play-circle-fill" aria-hidden="true" />}
            ariaLabel={`Ver demonstração de ${item.title}`}
          >
            Ver Demonstração
          </Button>

          <Button
            variant="secondary"
            size="sm"
            href={item.githubUrl}
            target="_blank"
            icon={<i className="bi bi-github" aria-hidden="true" />}
            ariaLabel={`Ver repositório no GitHub de ${item.title}`}
          >
            Repositório
          </Button>
        </div>
      </div>
    </Card>
  );
});

OtherProjectCard.displayName = 'OtherProjectCard';
