import { FC, memo } from 'react';
import { useProfileCanvas } from '../hooks/useProfileCanvas';
import styles from './ProfileCanvas.module.css';

export interface ProfileCanvasProps {
  readonly primarySrc: string;
  readonly alternativeSrc: string;
  readonly alt: string;
}

export const ProfileCanvas: FC<ProfileCanvasProps> = memo(
  ({ primarySrc, alternativeSrc, alt }) => {
    const {
      canvasRef,
      containerRef,
      isHovered,
      handleMouseEnter,
      handleMouseLeave,
      handleTouchStart,
      handleTouchEnd,
    } = useProfileCanvas({ alternativeImageSrc: alternativeSrc });

    return (
      <div
        ref={containerRef}
        className={styles.imageContainer}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        title="Passe o mouse ou toque para alternar o avatar"
      >
        <img
          className={styles.profileImage}
          src={primarySrc}
          alt={alt}
          loading="eager"
        />
        <canvas
          ref={canvasRef}
          className={`${styles.canvas} ${isHovered ? styles.canvasActive : ''}`}
          aria-hidden="true"
        />
        <div className={styles.glowRing} aria-hidden="true" />
      </div>
    );
  }
);

ProfileCanvas.displayName = 'ProfileCanvas';
