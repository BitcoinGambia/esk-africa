import Image from "next/image";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="cta">
      <div className="cta__container">
        <div className="cta__grid">
          <div className="cta__grid-line-v1"></div>
          <div className="cta__grid-line-v2"></div>

          <div className="cta__accent">
            <span className="cta__accent-text">START</span>
          </div>

          <div className="cta__content">
            <span className="section__subtitle">Ready to Start?</span>
            <h2 className="section__title" data-reveal="title">
              Every project begins with a conversation. Let&rsquo;s talk about
              your space today
            </h2>
            <div className="cta__buttons">
              <Link href="/contact" className="btn btn__primary">
                Book a Consultation
              </Link>
              <Link href="/contact" className="btn btn__secondary">
                Contact Our Team
              </Link>
            </div>
          </div>

          <div className="cta__image" data-reveal="image">
            <Image
              className="image__full"
              alt="Free Design Consultation"
              src="/images/home-page/cta-section/cta.webp"
              width={1448}
              height={1086}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
