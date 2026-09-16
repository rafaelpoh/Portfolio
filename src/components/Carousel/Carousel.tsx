import { FC, ReactNode, memo } from 'react';
import { useCarousel } from '../../hooks/useCarousel';
import styles from './Carousel.module.css';

export interface CarouselProps {
  readonly items: ReadonlyArray<{
    readonly id: string;
    readonly content: ReactNode;
  }>;
  readonly ariaLabel?: string;
  readonly className?: string;
}

export const Carousel: FC<CarouselProps> = memo(
  ({ items, ariaLabel = 'Carrossel de itens', className = '' }) => {
    const totalItems = items.length;
    const {
      currentIndex,
      nextSlide,
      prevSlide,
      goToSlide,
      handleTouchStart,
      handleTouchEnd,
      handleKeyDown,
    } = useCarousel({ totalItems, loop: true });

    if (totalItems === 0) return null;

    return (
      <div
        className={`${styles.carousel} ${className}`.trim()}
        role="region"
        aria-roledescription="carousel"
        aria-label={ariaLabel}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className={styles.trackContainer}>
          <div
            className={styles.track}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className={styles.slide}
                role="group"
                aria-roledescription="slide"
              >
                {item.content}
              </div>
            ))}
          </div>
        </div>

        {/* Controles de Navegação */}
        <button
          type="button"
          className={`${styles.navButton} ${styles.prevButton}`}
          onClick={prevSlide}
          aria-label="Slide anterior"
        >
          <i className="bi bi-chevron-left" aria-hidden="true" />
        </button>

        <button
          type="button"
          className={`${styles.navButton} ${styles.nextButton}`}
          onClick={nextSlide}
          aria-label="Próximo slide"
        >
          <i className="bi bi-chevron-right" aria-hidden="true" />
        </button>

        {/* Indicadores / Paginação */}
        <div className={styles.indicators}>
          {items.map((item, idx) => (
            <button
              key={`indicator-${item.id}`}
              type="button"
              className={`${styles.indicatorDot} ${
                idx === currentIndex ? styles.indicatorActive : ''
              }`}
              onClick={() => goToSlide(idx)}
              aria-label={`Ir para o slide ${idx + 1}`}
              aria-current={idx === currentIndex ? 'true' : 'false'}
            />
          ))}
        </div>
      </div>
    );
  }
);

Carousel.displayName = 'Carousel';
