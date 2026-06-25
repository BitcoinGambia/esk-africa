import Image from "next/image";

const roster = [
  "Homeowners",
  "Developers",
  "Architects",
  "Commercial Projects",
  "Hospitality",
  "Office Spaces",
];

const Clients = () => {
  return (
    <section className="clients">
      <div className="clients__container">
        <div className="clients__grid">
          <div className="clients__grid-line-v1"></div>
          <div className="clients__grid-line-v2"></div>

          <div className="clients__accent">
            <span className="clients__accent-text">CLIENTS</span>
          </div>

          <div className="clients__top">
            <div className="clients__content">
              <h2 className="section__title" data-reveal="title">
                WHO WE WORK WITH
              </h2>
              <div className="clients__roster">
                {roster.map((name, i) => (
                  <div key={i} className="clients__roster-item">
                    <span className="clients__roster-number">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="clients__roster-name">{name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="clients__image-1" data-reveal="image">
              <Image
                className="image__full"
                alt="Homeowners Project"
                src="/images/home-page/clients-section/client-1/client-1.webp"
                width={1108}
                height={1478}
              />
            </div>
          </div>

          <div className="clients__bottom">
            <div className="clients__image-2" data-reveal="image">
              <Image
                className="image__full"
                alt="Commercial Project"
                src="/images/home-page/clients-section/client-2/client-2.webp"
                width={2048}
                height={1536}
              />
            </div>

            <div className="clients__stats">
              <div className="clients__stats-grid">
                <div className="clients__stat-item">
                  <span className="stat__number">50+</span>
                  <span className="stat__label">Happy Clients</span>
                </div>
                <div className="clients__stat-divider"></div>
                <div className="clients__stat-item">
                  <span className="stat__number">4</span>
                  <span className="stat__label">Sectors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
