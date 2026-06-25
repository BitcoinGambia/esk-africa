import type { Metadata } from "next";
import Hero from "@/sections/about/Hero";
import Team from "@/sections/about/Team";
import Beliefs from "@/sections/about/Beliefs";
import Vision from "@/sections/about/Vision";
import Cta from "@/sections/home/Cta";

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
      <Hero />
      <Team />
      <Beliefs />
      <Vision />
      <Cta />
    </div>
  );
};

export default About;
