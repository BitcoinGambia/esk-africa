import Image from "next/image";

const planning = [
  {
    n: "01",
    title: "INITIAL CONSULTATION",
    text: "We review the project scope, understand the space, take measurements, and define the technical and functional requirements.",
  },
  {
    n: "02",
    title: "DESIGN + PLANNING",
    text: "Layouts, drawings, materials, and technical details are developed into a clear execution plan before production begins",
  },
];

const execution = [
  {
    n: "03",
    title: "MANUFACTURING",
    text: "Furniture, joinery, and interior elements are produced in-house using industrial machinery and controlled production systems.",
  },
  {
    n: "04",
    title: "INSTALLATION",
    text: "Our team handles on-site installation, fit-out works, and final detailing to ensure clean execution.",
  },
  {
    n: "05",
    title: "HANDOVER",
    text: "Final adjustments, quality checks, and project handover are completed before delivery.",
  },
];

const Step = ({
  n,
  title,
  text,
}: {
  n: string;
  title: string;
  text: string;
}) => (
  <div className="process__step">
    <span className="process__step-number">{n}</span>
    <div className="process__step-content">
      <h4 className="process__step-title">{title}</h4>
      <p className="process__step-text">{text}</p>
    </div>
  </div>
);

const Process = () => {
  return (
    <section id="process" className="process">
      <div className="process__container">
        <div className="process__grid">
          <div className="process__header">
            <h2 className="section__title" data-reveal="title">
              Here&apos;s how we work.
            </h2>
          </div>

          <div className="process__narrative">
            <div className="process__planning">
              <div className="process__phase-content">
                <h3 className="process__phase-title">The Planning</h3>
                <div className="process__steps">
                  {planning.map((s) => (
                    <Step key={s.n} {...s} />
                  ))}
                </div>
              </div>
              <div className="process__phase-image" data-reveal="image">
                <Image
                  className="image__full"
                  alt="Planning and Design Phase"
                  src="/images/home-page/process-section/process-1/process-1.webp"
                  width={1122}
                  height={1402}
                />
              </div>
            </div>

            <div className="process__execution">
              <div className="process__phase-image" data-reveal="image">
                <Image
                  className="image__full"
                  alt="Building and Installation Phase"
                  src="/images/home-page/process-section/process-2/process-2.webp"
                  width={1459}
                  height={1078}
                />
              </div>
              <div className="process__phase-content">
                <h3 className="process__phase-title">The Execution</h3>
                <div className="process__steps">
                  {execution.map((s) => (
                    <Step key={s.n} {...s} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="process__accent">
            <span className="process__accent-text">OUR PROCESS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
