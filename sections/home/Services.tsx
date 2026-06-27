"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const base = "/images/home-page/services-section";
const items = [
  {
    name: "Residential Fit-Out",
    desc: "Custom Kitchens, Bathrooms, Walk-in Closets, Furniture",
    img: `${base}/residential/residential-fit-out.webp`,
  },
  {
    name: "Commercial Fit-Out",
    desc: "Hotels, Restaurants, Retail, Apartment Developments",
    img: `${base}/commercial/commercial-fit-out.webp`,
  },
  {
    name: "Office Fit-Out",
    desc: "Design, Manufacturing, Installation",
    img: `${base}/office-fit-out/office-fit-out.webp`,
  },
  {
    name: "Drywall Systems",
    desc: "Partitions, Ceilings, Acoustic & Fire-Rated Solutions",
    img: `${base}/drywall/drywall.webp`,
  },
];

const Services = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="services">
      <div className="services__container">
        <div className="services__grid">
          <div className="services__menu">
            <span className="section__subtitle">What We Build</span>
            <h2 className="section__title" data-reveal="title">
              CUSTOM-MADE INTERIORS
            </h2>

            <div className="services__list">
              {items.map((it, i) => (
                <div
                  key={i}
                  className={
                    i === active ? "services__item active" : "services__item"
                  }
                  onMouseEnter={() => setActive(i)}
                >
                  <h3 className="services__name">{it.name}</h3>
                  <p className="services__desc">{it.desc}</p>
                </div>
              ))}
            </div>

            <div className="services__cta">
              <Link href="/contact" className="btn">
                Get Your Free Consultation
              </Link>
            </div>
          </div>

          <div className="services__display" data-reveal="image">
            <Image
              className="image__full"
              alt={items[active].name}
              src={items[active].img}
              fill
              sizes="(max-width: 1200px) 100vw, 70vw"
              priority
            />
          </div>

          <div className="services__accent">
            <span className="services__accent-text">SPECIALIZATION</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
