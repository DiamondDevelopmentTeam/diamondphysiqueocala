import { useEffect, useState } from 'react';

interface CarouselImage {
  src: string;
  alt: string;
}

interface ImageCarouselProps {
  images: readonly CarouselImage[];
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || images.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [images.length, paused]);

  const go = (next: number) => {
    setIndex((next + images.length) % images.length);
  };

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') go(index - 1);
        if (event.key === 'ArrowRight') go(index + 1);
      }}
      tabIndex={0}
      aria-label="Diamond Physique and Diamond Salon image gallery"
    >
      <div className="carousel__viewport">
        {images.map((image, imageIndex) => (
          <img
            key={image.src}
            className={imageIndex === index ? 'is-active' : ''}
            src={image.src}
            alt={image.alt}
            loading={imageIndex === 0 ? 'eager' : 'lazy'}
          />
        ))}
      </div>

      <button className="carousel__arrow carousel__arrow--previous" type="button" onClick={() => go(index - 1)} aria-label="Previous image">‹</button>
      <button className="carousel__arrow carousel__arrow--next" type="button" onClick={() => go(index + 1)} aria-label="Next image">›</button>

      <div className="carousel__dots" aria-label="Choose image">
        {images.map((image, imageIndex) => (
          <button
            key={image.src}
            type="button"
            className={imageIndex === index ? 'is-active' : ''}
            aria-label={`Show image ${imageIndex + 1}`}
            aria-current={imageIndex === index}
            onClick={() => setIndex(imageIndex)}
          />
        ))}
      </div>
    </div>
  );
}
