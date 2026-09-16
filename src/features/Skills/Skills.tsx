import { FC, memo } from 'react';
import type { SkillsData } from '../../types/portfolio';
import { SkillGroup } from './components/SkillGroup';
import { Card } from '../../components/Card/Card';
import { Badge } from '../../components/Badge/Badge';
import styles from './Skills.module.css';

export interface SkillsProps {
  readonly skills: SkillsData;
}

export const Skills: FC<SkillsProps> = memo(({ skills }) => {
  return (
    <section className={`${styles.skillsSection} animate-fade-in`} aria-labelledby="skills-title">
      <div className={styles.header}>
        <h2 id="skills-title" className={styles.title}>
          Habilidades & <span className="destaque">Tecnologias</span>
        </h2>
        <p className={styles.subtitle}>
          Competências estruturadas entre linguagens de programação, ferramentas do ecossistema de engenharia e idiomas.
        </p>
      </div>

      <div className={styles.grid}>
        {/* Grupo de Programação */}
        <div className={styles.column}>
          <SkillGroup
            title="Linguagens & Web"
            icon="bi-code-slash"
            skills={skills.programming}
          />
        </div>

        {/* Grupo de Ferramentas */}
        <div className={styles.column}>
          <SkillGroup
            title="Ferramentas & DevOps"
            icon="bi-tools"
            skills={skills.tools}
          />
        </div>

        {/* Grupo de Idiomas */}
        <div className={styles.columnWide}>
          <Card className={styles.languagesCard} elevated>
            <div className={styles.languagesHeader}>
              <i className="bi bi-translate" aria-hidden="true" />
              <h3 className={styles.languagesTitle}>Idiomas</h3>
            </div>
            <div className={styles.languagesList}>
              {skills.languages.map((lang) => (
                <div key={lang.id} className={styles.languageItem}>
                  <span className={styles.langName}>{lang.name}</span>
                  <Badge variant="default" size="sm">
                    {lang.level}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
});

Skills.displayName = 'Skills';
