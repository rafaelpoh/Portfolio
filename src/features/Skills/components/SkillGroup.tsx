import { FC, memo } from 'react';
import type { SkillItem } from '../../../types/portfolio';
import { Card } from '../../../components/Card/Card';
import styles from './SkillGroup.module.css';

export interface SkillGroupProps {
  readonly title: string;
  readonly icon: string;
  readonly skills: ReadonlyArray<SkillItem>;
}

export const SkillGroup: FC<SkillGroupProps> = memo(({ title, icon, skills }) => {
  return (
    <Card className={styles.groupCard} elevated>
      <div className={styles.header}>
        <i className={`bi ${icon} ${styles.headerIcon}`} aria-hidden="true" />
        <h3 className={styles.title}>{title}</h3>
      </div>

      <ul className={styles.skillsList}>
        {skills.map((skill) => (
          <li key={skill.id} className={styles.skillItem}>
            {skill.iconUrl ? (
              <img
                src={skill.iconUrl}
                alt=""
                className={styles.skillIcon}
                loading="lazy"
                aria-hidden="true"
              />
            ) : (
              <i className={`bi bi-code-square ${styles.fallbackIcon}`} aria-hidden="true" />
            )}
            <span className={styles.skillName}>{skill.name}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
});

SkillGroup.displayName = 'SkillGroup';
