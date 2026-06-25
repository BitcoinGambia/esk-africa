import Image from "next/image";

const base = "/images/home-page/benefits-section";
const items = [
  {
    title: "TRAIN-TO-HIRE",
    text: "Real project-based training where unskilled workers develop into drywall installers, carpenters, and interior fit-out workers through active production and site execution.",
    img: `${base}/benefit-1/benefits-1.webp`,
    alt: "TRAIN-TO-HIRE",
  },
  {
    title: "WORKSHOP + MANUFACTURING",
    text: "SHands-on training in cabinetry manufacturing, machinery operation, material handling, assembly, and production workflows inside the ESK workshop.",
    img: `${base}/benefit-2/benefits-2.webp`,
    alt: "Modern Design",
  },
  {
    title: "SITE + INSTALLATION",
    text: "Practical on-site experience in drywall systems, ceilings, partitions, installations, measurements, and project coordination under active supervision.",
    img: `${base}/benefit-3/benefits-3.webp`,
    alt: "Project Management",
  },
  {
    title: "TECHNICAL + LEADERSHIP DEVELOPMENT",
    text: "Ongoing development in technical planning, quality control, safety procedures, project coordination, and modern construction systems used in professional fit-out projects.",
    img: `${base}/benefit-4/benefits-4.webp`,
    alt: "Transparent Pricing",
  },
];

const Benefits = () => {
  return (
    <section className="benefits">
      <div className="benefits__container">
        <div className="benefits__grid">
          <div className="benefits__grid-line-v1"></div>
          <div className="benefits__grid-line-v2"></div>
          <div className="benefits__grid-line-h1"></div>

          <div className="benefits__header">
            <h2 className="section__title" data-reveal="title">
              WORKFORCE DEVELOPMENT
            </h2>
          </div>

          <div className="benefits__list">
            {items.map((it, i) => (
              <div key={i} className="benefits__item">
                <div className="benefits__item-image">
                  <Image
                    className="image__full"
                    alt={it.alt}
                    src={it.img}
                    fill
                    sizes="(max-width: 1200px) 100vw, 35vw"
                  />
                </div>
                <div className="benefits__item-content">
                  <h3 className="benefits__item-title">{it.title}</h3>
                  <p className="benefits__item-text">{it.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="benefits__accent">
            <span className="benefits__accent-text">COMMUNITY IMPACT</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
