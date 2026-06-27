import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero">
      <div className="section-sidebar__esk section-sidebar__esk-left">
        <span className="section-sidebar__text">ESK</span>
      </div>
      <div className="hero__container">
        <div className="hero__grid">
          <div className="hero__grid-line-v1"></div>
          <div className="hero__grid-line-v2"></div>
          <div className="hero__grid-line-v3"></div>
          <div className="hero__grid-line-v4"></div>
          <div className="hero__grid-line-h1"></div>

          <div className="hero__accent">
            <span className="hero__accent-text">ORIGIN</span>
          </div>

          <div className="hero__content">
            <span className="section__subtitle">Who We Are</span>
            <h1 className="section__title" data-reveal="title">
              Built in Africa,
              <br />
              Shaped by Ideas
            </h1>
            <p className="body__text">
              ESK Group Africa is about interiors — spaces people live, work,
              and grow in. Founded with a background in European craftsmanship
              and built in The Gambia, our company combines design, production,
              and installation under one roof. Our team includes in-house
              designers, carpenters, and project managers, working together to
              deliver projects of every scale. We handle design, production, and
              procurement — so clients get a single partner to bring ideas to
              reality.
            </p>
          </div>

          <div className="hero__image-1" data-reveal="image">
            <Image
              className="image__full"
              alt="ESK Workshop - Where it all began"
              src="/images/about-page/hero-section/workshop/workshop.webp"
              width={5760}
              height={3840}
              priority
            />
          </div>

          <div className="hero__quote">
            <div className="hero__quote-main">
              <blockquote className="hero__quote-text">
                &ldquo;Design, production, and installation — all under one
                roof.&rdquo;
              </blockquote>
            </div>
          </div>
          <div className="hero__quote-context-container">
            <p className="hero__quote-context">
              One partner. Complete solutions.
            </p>
          </div>

          <div className="hero__image-2" data-reveal="image">
            <Image
              className="image__full"
              alt="Early ESK project"
              src="/images/about-page/hero-section/workshop-2/workshop-2.webp"
              width={5760}
              height={3840}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
