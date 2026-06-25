import Image from "next/image";

export type GalleryItem = {
  size: "large" | "small" | "span";
  src: string;
  title: string;
  desc: string;
};

const rows = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [9, 10],
];

const Gallery = ({ items }: { items: GalleryItem[] }) => {
  return (
    <section className="gallery">
      <div className="section-sidebar__esk section-sidebar__esk-left">
        <span className="section-sidebar__text">ESK</span>
      </div>

      <div className="gallery__container">
        <div className="gallery__grid">
          <div className="gallery__grid-line-v1"></div>
          <div className="gallery__grid-line-v2"></div>
          <div className="gallery__grid-line-v3"></div>
          <div className="gallery__grid-line-h1"></div>

          {rows.map((row, r) => (
            <div
              key={r}
              className={`gallery__pattern-row gallery__pattern-row--${r + 1}`}
            >
              {row.map((idx) => {
                const it = items[idx];
                return (
                  <div
                    key={idx}
                    className={`gallery__item gallery__item--${it.size}`}
                  >
                    <div
                      className="gallery__image-container"
                      data-reveal="image"
                    >
                      <Image
                        className="gallery__image"
                        alt={it.title}
                        src={it.src}
                        fill
                        sizes="(max-width: 968px) 100vw, 33vw"
                      />
                    </div>
                    <div className="gallery__caption">
                      <h3 className="gallery__title">{it.title}</h3>
                      <p className="gallery__description">{it.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="section-sidebar__esk section-sidebar__esk-right">
        <span className="section-sidebar__text">ESK</span>
      </div>
    </section>
  );
};

export default Gallery;
