import { FC, memo, useState } from 'react';
import type { SkillItem } from '../../../types/portfolio';
import { Card } from '../../../components/Card/Card';
import styles from './SkillGroup.module.css';

export interface SkillGroupProps {
  readonly title: string;
  readonly icon: string;
  readonly skills: ReadonlyArray<SkillItem>;
}

const SkillItemRow: FC<{ readonly skill: SkillItem }> = memo(({ skill }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <li className={styles.skillItem}>
      {skill.iconUrl && !imgError ? (
        <img
          src={skill.iconUrl}
          alt=""
          className={styles.skillIcon}
          loading="lazy"
          aria-hidden="true"
          onError={() => setImgError(true)}
        />
      ) : (
        <i className={`bi bi-code-square ${styles.fallbackIcon}`} aria-hidden="true" />
      )}
      <span className={styles.skillName}>{skill.name}</span>
    </li>
  );
});

SkillItemRow.displayName = 'SkillItemRow';

export const SkillGroup: FC<SkillGroupProps> = memo(({ title, icon, skills }) => {
  return (
    <Card className={styles.groupCard} elevated>
      <div className={styles.header}>
        <i className={`bi ${icon} ${styles.headerIcon}`} aria-hidden="true" />
        <h3 className={styles.title}>{title}</h3>
      </div>

      <ul className={styles.skillsList}>
        {skills.map((skill) => (
          <SkillItemRow key={skill.id} skill={skill} />
        ))}
      </ul>
    </Card>
  );
});

SkillGroup.displayName = 'SkillGroup';
