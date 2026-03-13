import { useEffect, useState } from "react";

function PhotoCarousel({ slides }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [slides.length]);

  return (
    <div className="photo-carousel">
      <div className="photo-carousel-stage">
        {slides.map((slide, index) => (
          <figure
            key={slide.src}
            className={`photo-slide${
              index === activeIndex ? " photo-slide--active" : ""
            }`}
          >
            <img src={slide.src} alt={slide.alt} className="photo-slide-image" />
          </figure>
        ))}
      </div>
    </div>
  );
}

export default PhotoCarousel;
