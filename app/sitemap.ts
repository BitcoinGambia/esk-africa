import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const base = "https://eskafrica.com";
const img = (p: string) => `${base}${p}`;

const pages: { path: string; priority: number; images: string[] }[] = [
  {
    path: "",
    priority: 1,
    images: [
      img("/images/home-page/hero-section/hero-1/hero-1.webp"),
      img("/images/home-page/hero-section/hero-2/hero-2.webp"),
      img("/images/home-page/philosophy-section/interior-1/esk-1.webp"),
      img(
        "/images/home-page/services-section/residential/residential-fit-out.webp",
      ),
      img("/images/home-page/clients-section/client-1/client-1.webp"),
      img("/images/projects/the-hive/the-hive-1.webp"),
    ],
  },
  {
    path: "/about",
    priority: 0.8,
    images: [
      img("/images/about-page/hero-section/workshop/workshop.webp"),
      img("/images/about-page/team-section/member-1.webp"),
      img("/images/about-page/team-section/member-2.webp"),
      img("/images/about-page/team-section/member-3.webp"),
      img("/images/about-page/team-section/member-4.webp"),
      img("/images/about-page/vision-section/vision.webp"),
    ],
  },
  {
    path: "/kitchen",
    priority: 0.8,
    images: Array.from({ length: 11 }, (_, i) =>
      img(`/images/kitchen-page/gallery/image-${i + 1}/image-${i + 1}.webp`),
    ),
  },
  {
    path: "/living",
    priority: 0.8,
    images: Array.from({ length: 11 }, (_, i) =>
      img(`/images/living-page/gallery/image-${i + 1}/image-${i + 1}.webp`),
    ),
  },
  {
    path: "/commercial",
    priority: 0.8,
    images: Array.from({ length: 11 }, (_, i) =>
      img(`/images/commercial-page/gallery/image-${i + 1}/image-${i + 1}.webp`),
    ),
  },
  { path: "/drywall", priority: 0.8, images: [] },
  { path: "/contact", priority: 0.7, images: [] },
];

const sitemap = (): MetadataRoute.Sitemap => {
  const lastModified = new Date();
  return pages.map(({ path, priority, images }) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
    images,
  }));
};

export default sitemap;
