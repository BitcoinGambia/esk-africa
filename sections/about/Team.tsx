import Image from "next/image";

export const members = [
  {
    name: "Essa Sock",
    role: "Founder & General Manager",
    img: "member-1.webp",
    w: 1123,
    h: 1401,
  },
  {
    name: "Sankung Bojang",
    role: "Site & Operations Manager",
    img: "member-2.webp",
    w: 966,
    h: 1060,
  },
  {
    name: "Fatma Faye Jaiteh",
    role: "Accountant & Admin",
    img: "member-3.webp",
    w: 780,
    h: 1005,
  },
  {
    name: "Mariam Sambou",
    role: "Interior & Project Manager",
    img: "member-4.webp",
    w: 868,
    h: 926,
  },
];

const Team = () => {
  return (
    <section className="team">
      <div className="team__container">
        <div className="team__grid">
          <div className="team__grid-line-v1"></div>
          <div className="team__grid-line-v2"></div>
          <div className="team__grid-line-v3"></div>
          <div className="team__grid-line-v4"></div>
          <div className="team__grid-line-h1"></div>

          <div className="team__accent">
            <span className="team__accent-text">TEAM ESK</span>
          </div>

          <div className="team__header">
            <span className="section__subtitle">Meet The Team</span>
            <h2 className="section__title" data-reveal="title">
              The people building ESK Africa.
            </h2>
          </div>

          <div className="team__members-grid">
            {members.map((m) => (
              <div key={m.name} className="team__member">
                <div className="team__member-image" data-reveal="image">
                  <Image
                    className="image__full"
                    alt={`${m.name} — ${m.role}`}
                    src={`/images/about-page/team-section/${m.img}`}
                    width={m.w}
                    height={m.h}
                  />
                </div>
                <div className="team__member-info">
                  <h3 className="team__member-name">{m.name}</h3>
                  <p className="team__member-role">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-sidebar__esk section-sidebar__esk-right">
        <span className="section-sidebar__text">ESK</span>
      </div>
    </section>
  );
};

export default Team;
