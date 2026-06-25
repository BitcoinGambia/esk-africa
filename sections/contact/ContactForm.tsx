"use client";

import { useState } from "react";

const ContactForm = () => {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <form className="contact__form" onSubmit={onSubmit}>
      <div className="contact__field">
        <label className="contact__label" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="contact__input"
          placeholder="Your full name"
        />
      </div>

      <div className="contact__row">
        <div className="contact__field">
          <label className="contact__label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="contact__input"
            placeholder="you@example.com"
          />
        </div>

        <div className="contact__field">
          <label className="contact__label" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="contact__input"
            placeholder="+220 …"
          />
        </div>
      </div>

      <div className="contact__field">
        <label className="contact__label" htmlFor="message">
          Project Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="contact__input contact__textarea"
          placeholder="Tell us about your space and what you need."
        />
      </div>

      <button type="submit" className="btn btn__primary contact__submit">
        {sent ? "Message Sent" : "Send Message"}
      </button>

      {sent && (
        <p className="contact__note">
          Thanks — we&apos;ll get back to you shortly.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
