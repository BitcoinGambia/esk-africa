import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { SITE } from "@/lib/seo";
import Contact from "@/sections/contact/Contact";

const description =
  "Get in touch with ESK Group Africa for custom interiors, fit-outs, and drywall across The Gambia and West Africa. Free design consultation.";

export const metadata: Metadata = {
  title: "Contact Us",
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | ESK",
    description,
    url: "https://eskafrica.com/contact",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact ESK Group Africa",
  url: `${SITE.url}/contact`,
  description,
};

const ContactPage = () => {
  return (
    <div className="page-contact">
      <JsonLd schema={schema} />
      <Contact />
    </div>
  );
};

export default ContactPage;
