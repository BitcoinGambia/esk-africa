"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const RevealOnView = () => {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add("js-reveal");

    const els = document.querySelectorAll("[data-reveal]");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );

    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, [pathname]);

  return null;
};

export default RevealOnView;
