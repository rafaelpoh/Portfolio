import { FC, memo } from 'react';
import type { Extension } from '../../../types/portfolio';
import { Card } from '../../../components/Card/Card';
import { Button } from '../../../components/Button/Button';
import { Badge } from '../../../components/Badge/Badge';
import styles from './ExtensionCard.module.css';

export interface ExtensionCardProps {
  readonly extension: Extension;
}

export const ExtensionCard: FC<ExtensionCardProps> = memo(({ extension }) => {
  return (
    <Card className={styles.card} interactive>
      <div className={styles.mediaContainer}>
        <img
          src={extension.image}
          alt={`Banner da extensão ${extension.title}`}
          className={styles.image}
          loading="lazy"
        />
        {extension.badgeText && (
          <div className={styles.badgeWrapper}>
            <Badge variant="default" size="sm" icon={<i className="bi bi-patch-check-fill" aria-hidden="true" />}>
              {extension.badgeText}
            </Badge>
          </div>
        )}
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{extension.title}</h3>
        <p className={styles.description}>{extension.description}</p>
        <div className={styles.actions}>
          <Button
            variant="primary"
            size="md"
            href={extension.storeUrl}
            target="_blank"
            icon={<i className="bi bi-google-play" aria-hidden="true" />}
            ariaLabel={`Ver extensão ${extension.title} na Chrome Web Store`}
          >
            Acessar na Chrome Web Store
          </Button>
        </div>
      </div>
    </Card>
  );
});

ExtensionCard.displayName = 'ExtensionCard';
