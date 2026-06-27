import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/seo";
import ServiceHero from "@/sections/shared/ServiceHero";
import Gallery from "@/sections/shared/Gallery";
import items from "@/sections/kitchen/galleryItems";
import Cta from "@/sections/home/Cta";

export const metadata: Metadata = {
  title: "Kitchen & Bath",
  description:
    "Custom-built kitchens and baths by ESK — cabinets, surfaces, and layouts crafted in-house for daily life across The Gambia and West Africa.",
  alternates: { canonical: "/kitchen" },
  openGraph: {
    title: "Kitchen & Bath | ESK",
    description:
      "Custom-built kitchens and baths by ESK — cabinets, surfaces, and layouts crafted in-house for daily life across The Gambia and West Africa.",
    url: "https://eskafrica.com/kitchen",
  },
};

const schema = serviceSchema({
  name: "Kitchen & Bath Fit-Out",
  description: metadata.description as string,
  url: "/kitchen",
});

const Kitchen = () => {
  return (
    <div className="page-kitchen">
      <JsonLd schema={schema} />
      <ServiceHero
        title={"Kitchens and Baths\\nBuilt to Live In"}
        subtitle={
          "These are the spaces that carry everyday life. We design and build kitchens and baths that work as well as they look. Every cabinet, every surface, every layout is crafted to fit the people who will use it. With in-house design and full manufacturing, we take ideas from sketches to working spaces — durable, functional, and made for daily use."
        }
      />
      <Gallery items={items} />
      <Cta />
    </div>
  );
};

export default Kitchen;
