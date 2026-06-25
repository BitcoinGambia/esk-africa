import Image from "next/image";

const Vision = () => {
  return (
    <section className="vision">
      <div className="vision__container">
        <div className="vision__spread">
          <div className="vision__accent-left">
            <span className="vision__accent-text">OUR VISION</span>
          </div>

          <div className="vision__content">
            <span className="section__subtitle">
              Our Vision for West Africa
            </span>
            <h2 className="section__title" data-reveal="title">
              We&apos;re building more than furniture.
              <br />
              We&apos;re building a new standard.
            </h2>
            <p className="body__text">
              Our vision is to become West Africa&apos;s #1 brand for premium
              custom interiors — leading the way with craftsmanship,
              consistency, and character.
            </p>
            <p className="body__text">
              We&apos;re scaling our team, growing our capacity, and expanding
              into new markets — but we&apos;re keeping one thing the same:
            </p>
            <blockquote className="vision__quote">
              &ldquo;Everything we build still starts with one simple question:
              What would we want if this was our own space?&rdquo;
            </blockquote>
          </div>

          <div className="vision__image" data-reveal="image">
            <Image
              className="image__full"
              alt="ESK Africa's vision for West African interiors"
              src="/images/about-page/vision-section/vision.webp"
              width={5760}
              height={3840}
            />
          </div>

          <div className="vision__accent-right">
            <span className="vision__accent-text">WEST AFRICA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
