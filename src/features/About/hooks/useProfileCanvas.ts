import { useEffect, useRef, useState, useCallback } from 'react';

interface UseProfileCanvasProps {
  readonly alternativeImageSrc: string;
}

export function useProfileCanvas({ alternativeImageSrc }: UseProfileCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const drawImageCover = useCallback(() => {
    const canvas = canvasRef.current;
    const img = imgRef.current;
    if (!canvas || !img || img.naturalWidth === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;

    const imgRatio = imgWidth / imgHeight;
    const canvasRatio = canvasWidth / canvasHeight;

    let sx = 0;
    let sy = 0;
    let sWidth = imgWidth;
    let sHeight = imgHeight;

    if (imgRatio > canvasRatio) {
      sHeight = imgHeight;
      sWidth = sHeight * canvasRatio;
      sx = (imgWidth - sWidth) / 2;
    } else {
      sWidth = imgWidth;
      sHeight = sWidth / canvasRatio;
      sy = (imgHeight - sHeight) / 2;
    }

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, sx, sy, sWidth, sHeight, 0, 0, canvasWidth, canvasHeight);
  }, []);

  const updateDimensions = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const { offsetWidth, offsetHeight } = container;
    if (canvas.width !== offsetWidth || canvas.height !== offsetHeight) {
      canvas.width = offsetWidth;
      canvas.height = offsetHeight;
      if (isHovered) {
        drawImageCover();
      }
    }
  }, [isHovered, drawImageCover]);

  useEffect(() => {
    const img = new Image();
    img.src = alternativeImageSrc;
    imgRef.current = img;

    img.onload = () => {
      updateDimensions();
    };

    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(() => {
      updateDimensions();
    });

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [alternativeImageSrc, updateDimensions]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    drawImageCover();
  }, [drawImageCover]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  const handleTouchStart = useCallback(() => {
    setIsHovered(true);
    drawImageCover();
  }, [drawImageCover]);

  const handleTouchEnd = useCallback(() => {
    setIsHovered(false);
  }, []);

  return {
    canvasRef,
    containerRef,
    isHovered,
    handleMouseEnter,
    handleMouseLeave,
    handleTouchStart,
    handleTouchEnd,
  };
}
