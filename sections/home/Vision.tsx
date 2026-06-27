import Projects from "./Projects";

const Vision = () => {
  return (
    <section className="vision">
      <div className="vision__container">
        <div className="vision__spread">
          <div className="vision__accent-left">
            <span className="vision__accent-text">ESKGROUP PROJECTS</span>
          </div>

          <div className="vision__page-center">
            <div className="vision__content">
              <h2 className="section__title" data-reveal="title">
                FEATURED PROJECTS
              </h2>
              <p className="body__text">
                A selection of residential, commercial, hospitality, and office
                fit-out projects <br />
                delivered by ESK across The Gambia and West Africa.
              </p>
            </div>

            <Projects />
          </div>

          <div className="vision__accent-right">
            <span className="vision__accent-text">ESKGROUP PROJECTS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
