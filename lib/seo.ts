export const SITE = {
  name: "ESK Group Africa",
  url: "https://eskafrica.com",
  email: "info@eskafrica.com",
  phone: "+2207000089",
  logo: "https://eskafrica.com/images/logo.webp",
  ogImage: "https://eskafrica.com/opengraph-image.png",
  description:
    "Custom interiors fit-out company — built-in kitchens, wardrobes, media walls, drywall systems, and office fit-outs across The Gambia and West Africa.",
  // Add social profile URLs here when available (Instagram, Facebook, LinkedIn…).
  sameAs: [] as string[],
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  url: SITE.url,
  logo: SITE.logo,
  image: SITE.ogImage,
  email: SITE.email,
  telephone: SITE.phone,
  description: SITE.description,
  ...(SITE.sameAs.length ? { sameAs: SITE.sameAs } : {}),
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE.url}/#localbusiness`,
  name: SITE.name,
  url: SITE.url,
  logo: SITE.logo,
  image: SITE.ogImage,
  email: SITE.email,
  telephone: SITE.phone,
  description: SITE.description,
  areaServed: "West Africa",
  address: {
    "@type": "PostalAddress",
    addressCountry: "GM",
    addressRegion: "The Gambia",
  },
};

type Person = { name: string; jobTitle: string; image: string };

export const personSchema = ({ name, jobTitle, image }: Person) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name,
  jobTitle,
  image: `${SITE.url}${image}`,
  worksFor: { "@type": "Organization", name: SITE.name, url: SITE.url },
});

type Service = { name: string; description: string; url: string };

export const serviceSchema = ({ name, description, url }: Service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  serviceType: name,
  url: `${SITE.url}${url}`,
  areaServed: "West Africa",
  provider: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
  },
});
