"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Reveal = () => {
  const pathname = usePathname();
  useEffect(() => {
    document.documentElement.classList.add("js-reveal");
  }, []);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduce) return;

      gsap.utils
        .toArray<HTMLElement>("[data-reveal]")
        .forEach((el) => {
          ScrollTrigger.create({
            trigger: el,
            start: "top 85%",
            once: true,
            onEnter: () => el.classList.add("is-revealed"),
          });
        });
    },
    { dependencies: [pathname] },
  );

  return null;
};

export default Reveal;
