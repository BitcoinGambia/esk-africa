"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [1, 2, 3, 4].map(
  (n) => `/images/home-page/hero-section/hero-${n}/hero-${n}.webp`,
);

const Hero = () => {
  const [active, setActive] = useState(0);
  const overlay = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = setInterval(
      () => setActive((i) => (i + 1) % slides.length),
      4000,
    );
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!overlay.current) return;
      overlay.current.style.setProperty(
        "--x",
        `${(e.clientX / window.innerWidth) * 100}%`,
      );
      overlay.current.style.setProperty(
        "--y",
        `${(e.clientY / window.innerHeight) * 100}%`,
      );
    };
    document.addEventListener("mousemove", move);
    return () => document.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="hero" id="hero">
      <h1 className="sr-only">
        ESK Group Africa — Beautiful Custom Interiors in The Gambia &amp; West
        Africa
      </h1>
      <div className="hero__carousel">
        {slides.map((src, i) => (
          <div
            key={i}
            className={i === active ? "hero__slide active" : "hero__slide"}
          >
            <Image
              className="hero__slide-img"
              alt=""
              src={src}
              fill
              sizes="100vw"
              priority={i === 0}
            />
          </div>
        ))}
      </div>
      <div className="hero__overlay" ref={overlay}></div>
      <div className="hero__content">
        <div className="hero__cta">
          <Link href="/contact" className="btn">
            Get a Free Design Consulation
          </Link>
          <Link href="/projects" className="btn">
            See Our Work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
