import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/seo";
import ServiceHero from "@/sections/shared/ServiceHero";
import Gallery from "@/sections/shared/Gallery";
import items from "@/sections/living/galleryItems";
import Cta from "@/sections/home/Cta";

export const metadata: Metadata = {
  title: "Living",
  description:
    "Custom living-space furniture by ESK — wardrobes, fitted closets, media walls, and full room concepts made to measure.",
  alternates: { canonical: "/living" },
  openGraph: {
    title: "Living | ESK",
    description:
      "Custom living-space furniture by ESK — wardrobes, fitted closets, media walls, and full room concepts made to measure.",
    url: "https://eskafrica.com/living",
  },
};

const schema = serviceSchema({
  name: "Living Space Furniture & Fit-Out",
  description: metadata.description as string,
  url: "/living",
});

const Living = () => {
  return (
    <div className="page-living">
      <JsonLd schema={schema} />
      <ServiceHero
        title={"Spaces for Daily Life"}
        subtitle={
          "Living rooms, bedrooms, and closets are more than storage or seating — they are where people spend most of their time. ESK designs and builds furniture and layouts that make these spaces work: clean wardrobes, fitted closets, lounge furniture, and full room concepts. Every piece is made to measure, designed to fit the space and the lifestyle."
        }
      />
      <Gallery items={items} />
      <Cta />
    </div>
  );
};

export default Living;
