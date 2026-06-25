import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/seo";
import ServiceHero from "@/sections/shared/ServiceHero";
import Gallery from "@/sections/shared/Gallery";
import items from "@/sections/commercial/galleryItems";
import Cta from "@/sections/home/Cta";

export const metadata: Metadata = {
  title: "Commercial",
  description:
    "Commercial interiors and fit-outs by ESK — offices, retail, and apartment developments delivered on time and on budget.",
  alternates: { canonical: "/commercial" },
  openGraph: {
    title: "Commercial | ESK",
    description:
      "Commercial interiors and fit-outs by ESK — offices, retail, and apartment developments delivered on time and on budget.",
    url: "https://eskafrica.com/commercial",
  },
};

const schema = serviceSchema({
  name: "Commercial Interiors & Fit-Out",
  description: metadata.description as string,
  url: "/commercial",
});

const Commercial = () => {
  return (
    <div className="page-commercial">
      <JsonLd schema={schema} />
      <ServiceHero
        title={"Interiors for work & Scale"}
        subtitle={
          "For commercial interiors, execution matters as much as design. At ESK, we deliver offices, apartment buildings, and retail spaces where function and form go hand in hand. Our team handles interior design, drywall, furniture, and full fit-outs — including procurement and material sourcing for large-scale projects. We partner with architects, developers, and institutions to make sure every interior is built on time, within budget, and ready for use."
        }
      />
      <Gallery items={items} />
      <Cta />
    </div>
  );
};

export default Commercial;
