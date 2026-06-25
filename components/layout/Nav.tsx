"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <nav className={scrolled ? "nav nav--scrolled" : "nav"}>
        <div className="logo">
          <Link href="/">
            <Image
              className="logo__img"
              alt="ESK"
              src="/images/logo.webp"
              width={585}
              height={357}
            />
          </Link>
        </div>
        <button
          className={open ? "nav__hamburger active" : "nav__hamburger"}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="hamburger__line"></span>
          <span className="hamburger__line"></span>
          <span className="hamburger__line"></span>
        </button>
      </nav>

      <div className={open ? "nav__overlay active" : "nav__overlay"}>
        <div className="nav__overlay-content">
          <div className="section-sidebar__esk section-sidebar__esk-left">
            <span className="section-sidebar__text">NAVIGATE</span>
          </div>

          <div className="nav__header">
            <div className="nav__header-brand">
              <Link href="/">
                <Image
                  className="nav__header-logo"
                  alt="ESK"
                  src="/images/logo.webp"
                  width={585}
                  height={357}
                />
              </Link>
            </div>
            <div className="nav__overlay-header">
              <button
                className="nav__close"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <span className="close__line"></span>
                <span className="close__line"></span>
              </button>
            </div>
          </div>

          <div className="nav__overlay-grid">
            <div className="nav__overlay-main">
              <div className="nav__links-primary">
                <Link
                  href="/"
                  className="nav__link nav__link--primary"
                  data-number="01"
                  onClick={() => setOpen(false)}
                >
                  <span>Home</span>
                </Link>
                <Link
                  href="/about"
                  data-number="02"
                  className="nav__link nav__link--primary"
                  onClick={() => setOpen(false)}
                >
                  <span>About Us</span>
                </Link>
                <Link
                  href="/contact"
                  data-number="03"
                  className="nav__link nav__link--primary"
                  onClick={() => setOpen(false)}
                >
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>

            <div className="nav__overlay-divider"></div>

            <div className="nav__overlay-sidebar">
              <div className="nav__info">
                <div className="nav__info-section">
                  <span className="nav__info-label">What We Do</span>
                  <p className="nav__info-text">
                    Custom Built-in Kitchens
                    <br />
                    Walk-In Closets & Wardrobes
                    <br />
                    TV & Media Walls
                    <br />
                    Office Interiors
                  </p>
                </div>

                <div className="nav__info-section">
                  <span className="nav__info-label">Our Promise</span>
                  <p className="nav__info-text">
                    From idea to installation.
                    <br />
                    We manage everything
                    <br />
                    so you don&apos;t have to.
                  </p>
                </div>

                <div className="nav__info-section">
                  <span className="nav__info-label">Get Started</span>
                  <p className="nav__info-text">
                    Free Design Consultation
                    <br />
                    Gambia & West Africa
                    <br />
                    Call us today
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
