import Image from "next/image";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__container">
        <div className="contact__grid">
          <div className="contact__grid-line-v1"></div>
          <div className="contact__grid-line-v2"></div>

          <div className="contact__accent">
            <span className="contact__accent-text">CONTACT</span>
          </div>

          <div className="contact__main">
            <span className="section__subtitle">Get In Touch</span>
            <h1 className="section__title" data-reveal="title">
              Let&rsquo;s talk about your space.
            </h1>

            <ContactForm />

            <div className="contact__info">
              <div className="contact__info-block">
                <span className="contact__info-label">Email</span>
                <a
                  href="mailto:info@eskafrica.com"
                  className="contact__info-link"
                >
                  info@eskafrica.com
                </a>
              </div>
              <div className="contact__info-block">
                <span className="contact__info-label">Phone</span>
                <a href="tel:+2207000089" className="contact__info-link">
                  +2207000089
                </a>
              </div>
              <div className="contact__info-block">
                <span className="contact__info-label">Location</span>
                <p className="contact__info-text">
                  The Gambia &amp; West Africa
                </p>
              </div>
              <div className="contact__info-block">
                <span className="contact__info-label">Hours</span>
                <p className="contact__info-text">Mon – Sat · 9:00 — 18:00</p>
              </div>
            </div>
          </div>

          <div className="contact__image" data-reveal="image">
            <Image
              className="image__full"
              alt="Custom interior fit-out by ESK Group Africa"
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

export default Contact;
