import type { MetadataRoute } from "next";

const robots = (): MetadataRoute.Robots => {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://eskafrica.com/sitemap.xml",
    host: "https://eskafrica.com",
  };
};

export default robots;
