import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <Image
                className="footer__logo-img"
                alt="ESK"
                src="/images/logo.webp"
                width={585}
                height={357}
              />
            </div>
            <p className="footer__tagline">
              Beautiful Custom Interiors
              <br />
              Made Just for You
            </p>
          </div>

          <div className="footer__links">
            <div className="footer__column">
              <h4 className="footer__heading">Services</h4>
              <ul className="footer__list">
                <li>
                  <Link href="/kitchen" className="footer__link">
                    Built-in Kitchens
                  </Link>
                </li>
                <li>
                  <Link href="/kitchen" className="footer__link">
                    Walk-In Closets
                  </Link>
                </li>
                <li>
                  <Link href="/living" className="footer__link">
                    TV & Media Walls
                  </Link>
                </li>
                <li>
                  <Link href="/living" className="footer__link">
                    Storage & Wardrobes
                  </Link>
                </li>
                <li>
                  <Link href="/commercial" className="footer__link">
                    Office & Commercial
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer__column">
              <h4 className="footer__heading">Company</h4>
              <ul className="footer__list">
                <li>
                  <Link href="/about" className="footer__link">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/#process" className="footer__link">
                    Our Process
                  </Link>
                </li>
                <li>
                  <Link href="/kitchen" className="footer__link">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="footer__link">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer__column">
              <h4 className="footer__heading">Contact</h4>
              <div className="footer__contact">
                <p className="footer__contact-item">
                  <span className="footer__contact-label">Location:</span>
                  The Gambia & West Africa
                </p>
                <p className="footer__contact-item">
                  <span className="footer__contact-label">Email:</span>
                  info@eskafrica.com
                </p>
                <p className="footer__contact-item">
                  <span className="footer__contact-label">Phone:</span>
                  +2207000089
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__divider"></div>
          <div className="footer__bottom-content">
            <p className="footer__copyright">
              © 2025 ESK Africa. All rights reserved.
            </p>
            <div className="footer__legal">
              <Link href="/privacy" className="footer__legal-link">
                Privacy Policy
              </Link>
              <Link href="/terms" className="footer__legal-link">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
