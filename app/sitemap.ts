import type { MetadataRoute } from "next";

const base = "https://eskafrica.com";
const routes = ["", "/about", "/kitchen", "/living", "/commercial", "/drywall"];

const sitemap = (): MetadataRoute.Sitemap => {
  const lastModified = new Date();
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
};

export default sitemap;
