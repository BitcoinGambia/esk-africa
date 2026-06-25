import { Fragment } from "react";

type Props = { title: string; subtitle: string };

const ServiceHero = ({ title, subtitle }: Props) => {
  const lines = title.split("\n");
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
          <div className="hero__grid-line-h1"></div>

          <div className="hero__content">
            <h1 className="hero__title" data-reveal="title">
              {lines.map((line, i) => (
                <Fragment key={i}>
                  {i > 0 && <br />}
                  {line}
                </Fragment>
              ))}
            </h1>
            <p className="hero__subtitle">{subtitle}</p>
          </div>
        </div>
      </div>

      <div className="section-sidebar__esk section-sidebar__esk-right">
        <span className="section-sidebar__text">ESK</span>
      </div>
    </section>
  );
};

export default ServiceHero;
