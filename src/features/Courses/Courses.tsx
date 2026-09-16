import { FC, memo, useMemo } from 'react';
import type { Course } from '../../types/portfolio';
import { Carousel } from '../../components/Carousel/Carousel';
import { CourseCard } from './components/CourseCard';
import styles from './Courses.module.css';

export interface CoursesProps {
  readonly courses: ReadonlyArray<Course>;
}

export const Courses: FC<CoursesProps> = memo(({ courses }) => {
  // Mapeia os cursos para itens do carrossel garantindo id persistente (regra 5.1 do reactspecs)
  const carouselItems = useMemo(() => {
    return courses.map((course) => ({
      id: course.id,
      content: <CourseCard course={course} />,
    }));
  }, [courses]);

  return (
    <section className={`${styles.coursesSection} animate-fade-in`} aria-labelledby="courses-title">
      <div className={styles.header}>
        <h2 id="courses-title" className={styles.title}>
          Cursos & <span className="destaque">Bootcamps</span>
        </h2>
        <p className={styles.subtitle}>
          Formações acadêmicas e especializações práticas com foco em Engenharia de Software, Front-End moderno e IA Generativa.
        </p>
      </div>

      <div className={styles.carouselWrapper}>
        <Carousel items={carouselItems} ariaLabel="Carrossel de Cursos e Certificações" />
      </div>
    </section>
  );
});

Courses.displayName = 'Courses';
