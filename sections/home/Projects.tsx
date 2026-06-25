"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = Array.from(
  { length: 8 },
  (_, i) => `/images/projects/the-hive/the-hive-${i + 1}.webp`,
);

const Projects = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((i) => (i + 1) % slides.length),
      4000,
    );
    return () => clearInterval(id);
  }, [active]);

  return (
    <div className="projects" id="projects">
      <div className="projects__stage">
        {slides.map((src, i) => (
          <div
            key={i}
            className={
              i === active ? "projects__slide active" : "projects__slide"
            }
          >
            <Image
              className="image__full"
              alt={`The Hive — image ${i + 1}`}
              src={src}
              fill
              sizes="(max-width: 1200px) 100vw, 80vw"
            />
          </div>
        ))}
      </div>

      <div className="projects__thumbs">
        {slides.map((src, i) => (
          <button
            key={i}
            type="button"
            aria-label={`View project image ${i + 1}`}
            aria-current={i === active}
            className={
              i === active ? "projects__thumb active" : "projects__thumb"
            }
            onClick={() => setActive(i)}
          >
            <Image
              alt={`The Hive thumbnail ${i + 1}`}
              src={src}
              fill
              sizes="80px"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Projects;
