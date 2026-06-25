import type { Metadata } from "next";
import Hero from "@/sections/about/Hero";
import Team, { members } from "@/sections/about/Team";
import Beliefs from "@/sections/about/Beliefs";
import Vision from "@/sections/about/Vision";
import Cta from "@/sections/home/Cta";
import JsonLd from "@/components/seo/JsonLd";
import { personSchema } from "@/lib/seo";

const teamSchema = members.map((m) =>
  personSchema({
    name: m.name,
    jobTitle: m.role,
    image: `/images/about-page/team-section/${m.img}`,
  }),
);

export const metadata: Metadata = {
  title: "About Us",
  description:
    "ESK Group Africa combines design, production, and installation under one roof — built in The Gambia, delivering premium custom interiors across West Africa.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | ESK",
    description:
      "ESK Group Africa combines design, production, and installation under one roof — built in The Gambia, delivering premium custom interiors across West Africa.",
    url: "https://eskafrica.com/about",
  },
};

const About = () => {
  return (
    <div className="page-about">
      <JsonLd schema={teamSchema} />
      <Hero />
      <Team />
      <Beliefs />
      <Vision />
      <Cta />
    </div>
  );
};

export default About;
