import Image from "next/image";

const Philosophy = () => {
  return (
    <section className="philosophy">
      <div className="philosophy__container">
        <div className="philosophy__grid">
          <div className="philosophy__grid-line-v1"></div>
          <div className="philosophy__grid-line-v2"></div>
          <div className="philosophy__grid-line-h1"></div>

          <div className="philosophy__accent">
            <span className="philosophy__accent-text">ESKGROUP</span>
          </div>

          <div className="philosophy__header">
            <h2 className="section__title" data-reveal="title">
              DESIGN. MANUFACTURING. EXECUTION.
            </h2>
          </div>

          <div className="philosophy__narrative">
            <div className="philosophy__top">
              <div className="philosophy__phase-content">
                <p className="body__text">
                  A vertically integrated fit-out company delivering interior
                  construction, drywall systems, and custom furniture across
                  West Africa. Combining Scandinavian design principles with
                  in-house manufacturing and on-site execution — from technical
                  planning to final installation.
                </p>
              </div>
              <div className="philosophy__phase-image" data-reveal="image">
                <Image
                  className="image__full"
                  alt="Custom Built-in Kitchen"
                  src="/images/home-page/philosophy-section/interior-1/esk-1.webp"
                  width={5760}
                  height={3840}
                />
              </div>
            </div>

            <div className="philosophy__bottom">
              <div className="philosophy__phase-image" data-reveal="image">
                <Image
                  className="image__full"
                  alt="Custom Built-in Kitchen"
                  src="/images/home-page/philosophy-section/interior-2/interior-2.webp"
                  width={5760}
                  height={3840}
                />
              </div>
              <div className="philosophy__phase-stats">
                <div className="philosophy__stats-grid">
                  <div className="philosophy__stat-item">
                    <span className="stat__number">15+</span>
                    <span className="stat__label">Projects</span>
                  </div>
                  <div className="philosophy__stat-divider"></div>
                  <div className="philosophy__stat-item">
                    <span className="stat__number">2</span>
                    <span className="stat__label">Years</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
