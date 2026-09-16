import { useState, useCallback, useRef } from 'react';

interface UseCarouselOptions {
  readonly totalItems: number;
  readonly loop?: boolean;
}

export function useCarousel({ totalItems, loop = true }: UseCarouselOptions) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const touchStartXRef = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev >= totalItems - 1) {
        return loop ? 0 : prev;
      }
      return prev + 1;
    });
  }, [totalItems, loop]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev <= 0) {
        return loop ? totalItems - 1 : 0;
      }
      return prev - 1;
    });
  }, [totalItems, loop]);

  const goToSlide = useCallback(
    (index: number) => {
      if (index >= 0 && index < totalItems) {
        setCurrentIndex(index);
      }
    },
    [totalItems]
  );

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (touchStartXRef.current === null) return;
      const touchEndX = e.changedTouches[0].clientX;
      const diffX = touchStartXRef.current - touchEndX;

      // Threshold mínimo de 40px para considerar arrasto (swipe)
      if (Math.abs(diffX) > 40) {
        if (diffX > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
      touchStartXRef.current = null;
    },
    [nextSlide, prevSlide]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    },
    [prevSlide, nextSlide]
  );

  return {
    currentIndex,
    nextSlide,
    prevSlide,
    goToSlide,
    handleTouchStart,
    handleTouchEnd,
    handleKeyDown,
    canGoNext: loop || currentIndex < totalItems - 1,
    canGoPrev: loop || currentIndex > 0,
  };
}
