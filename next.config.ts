import type { NextConfig } from "next";

const nextConfig: NextConfig = {
<<<<<<< HEAD
  images: {
=======
  output: "export",
  images: {
    unoptimized: true,
>>>>>>> da2ad9be717451c0e7077e3bb709676cc03be316
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
