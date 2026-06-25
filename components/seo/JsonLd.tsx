const data = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ESK Group Africa",
  description:
    "Custom interiors fit-out company — built-in kitchens, wardrobes, media walls, drywall systems, and office fit-outs across The Gambia and West Africa.",
  url: "https://eskafrica.com",
  logo: "https://eskafrica.com/images/logo.webp",
  image: "https://eskafrica.com/opengraph-image.png",
  email: "info@eskafrica.com",
  telephone: "+2207000089",
  areaServed: "West Africa",
  address: {
    "@type": "PostalAddress",
    addressCountry: "GM",
    addressRegion: "The Gambia",
  },
};

const JsonLd = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default JsonLd;
