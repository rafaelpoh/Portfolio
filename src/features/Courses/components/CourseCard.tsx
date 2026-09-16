import { FC, memo } from 'react';
import type { Course } from '../../../types/portfolio';
import { Card } from '../../../components/Card/Card';
import { Button } from '../../../components/Button/Button';
import { Badge } from '../../../components/Badge/Badge';
import styles from './CourseCard.module.css';

export interface CourseCardProps {
  readonly course: Course;
}

export const CourseCard: FC<CourseCardProps> = memo(({ course }) => {
  return (
    <Card className={styles.card}>
      <div className={styles.mediaContainer}>
        <img
          src={course.image}
          alt={`Certificado de ${course.title}`}
          className={styles.image}
          loading="lazy"
        />
        {course.institution && (
          <div className={styles.institutionBadge}>
            <Badge variant="subtle" size="sm">
              {course.institution}
            </Badge>
          </div>
        )}
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{course.title}</h3>
        <p className={styles.description}>{course.description}</p>
        <div className={styles.footer}>
          <Button
            variant="outline"
            size="sm"
            href={course.certificateUrl}
            target="_blank"
            icon={<i className="bi bi-patch-check-fill" aria-hidden="true" />}
            ariaLabel={`Ver certificado de ${course.title}`}
          >
            Ver Certificado
          </Button>
        </div>
      </div>
    </Card>
  );
});

CourseCard.displayName = 'CourseCard';
