import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/seo";
import ServiceHero from "@/sections/shared/ServiceHero";
import Gallery from "@/sections/shared/Gallery";
import items from "@/sections/drywall/galleryItems";

export const metadata: Metadata = {
  title: "Drywall",
  description:
    "Drywall systems by ESK — partitions, ceilings, and seamless wall finishes built with precision and speed.",
  alternates: { canonical: "/drywall" },
  openGraph: {
    title: "Drywall | ESK",
    description:
      "Drywall systems by ESK — partitions, ceilings, and seamless wall finishes built with precision and speed.",
    url: "https://eskafrica.com/drywall",
  },
};

const schema = serviceSchema({
  name: "Drywall Systems",
  description: metadata.description as string,
  url: "/drywall",
});

const Drywall = () => {
  return (
    <div className="page-drywall">
      <JsonLd schema={schema} />
      <ServiceHero
        title={"Walls that Define Spaces"}
        subtitle={
          "Drywall isn't just construction — it's design. It shapes how light travels, how sound moves, and how people feel inside a space. At ESK, drywall is part of our language: clean lines, seamless finishes, and walls that carry function and style together. From partitions to ceilings, we build with precision and speed, giving architects and clients the flexibility to reimagine interiors."
        }
      />
      <Gallery items={items} />
    </div>
  );
};

export default Drywall;
