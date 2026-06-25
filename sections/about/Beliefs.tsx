import Image from "next/image";

const Beliefs = () => {
  return (
    <section className="beliefs">
      <div className="section-sidebar__esk section-sidebar__esk-left">
        <span className="section-sidebar__text">ESK</span>
      </div>

      <div className="beliefs__container">
        <div className="beliefs__grid">
          <div className="beliefs__grid-line-v1"></div>
          <div className="beliefs__grid-line-v2"></div>
          <div className="beliefs__grid-line-v3"></div>
          <div className="beliefs__grid-line-v4"></div>
          <div className="beliefs__grid-line-h1"></div>

          <div className="beliefs__magazine-spread">
            <div className="beliefs__header-section">
              <span className="section__subtitle">What We Believe</span>
            </div>

            <div className="beliefs__philosophy-statement">
              <blockquote className="beliefs__main-quote">
                Your space should work for you — not the other way around.
              </blockquote>
            </div>

            <div className="beliefs__editorial-content">
              <div className="beliefs__content-columns">
                <div className="beliefs__content-column-1">
                  <div className="beliefs__principles">
                    <p className="beliefs__principle-text">
                      We believe good design solves problems.
                    </p>
                    <p className="beliefs__principle-text">
                      That custom doesn&apos;t have to mean complicated.
                    </p>
                    <p className="beliefs__principle-text">
                      And that the small details — clean corners, smooth
                      drawers, strong finishes — are what people remember most.
                    </p>
                  </div>
                </div>

                <div className="beliefs__content-column-2">
                  <div className="beliefs__secondary-image" data-reveal="image">
                    <Image
                      className="image__full"
                      alt="ESK attention to detail and craftsmanship"
                      src="/images/about-page/beliefs-section/belief-2/belief-2.webp"
                      width={5760}
                      height={3840}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="beliefs__feature-column">
            <div className="beliefs__feature-image" data-reveal="image">
              <Image
                className="image__full"
                alt="ESK craftsmanship and attention to detail"
                src="/images/about-page/beliefs-section/belief-1/belief-1.webp"
                width={5760}
                height={3840}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="section-sidebar__esk section-sidebar__esk-right">
        <span className="section-sidebar__text">ESK</span>
      </div>
    </section>
  );
};

export default Beliefs;
