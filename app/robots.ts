import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const robots = (): MetadataRoute.Robots => {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://eskafrica.com/sitemap.xml",
    host: "https://eskafrica.com",
  };
};

export default robots;
