import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Cursor from "@/components/layout/Cursor";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/layout/LoadingScreen";
import JsonLd from "@/components/seo/JsonLd";
import { organizationSchema, localBusinessSchema } from "@/lib/seo";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Reveal from "@/components/motion/Reveal";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const description =
  "ESK Group Africa designs, produces, and installs beautiful custom interiors — built-in kitchens, wardrobes, media walls, and office fit-outs across The Gambia and West Africa.";

export const metadata: Metadata = {
  metadataBase: new URL("https://eskafrica.com"),
  title: {
    default: "ESK | Beautiful Custom Interiors",
    template: "%s | ESK",
  },
  description,
  applicationName: "ESK Group Africa",
  keywords: [
    "ESK",
    "ESK Group",
    "ESK Group Africa",
    "ESK Africa",
    "ESK interiors",
    "custom interiors",
    "interior design",
    "interior fit-out",
    "fit-out company",
    "interior construction",
    "custom furniture",
    "joinery",
    "cabinetry",
    "carpentry",
    "millwork",
    "bespoke furniture",
    "made-to-measure furniture",
    "turnkey interiors",
    "interior contractor",
    "built-in kitchens",
    "custom kitchens",
    "kitchen cabinets",
    "kitchen design",
    "bathroom design",
    "bathroom vanities",
    "walk-in closets",
    "fitted wardrobes",
    "custom wardrobes",
    "TV and media walls",
    "media wall",
    "built-in storage",
    "shelving",
    "living room furniture",
    "bedroom furniture",
    "office fit-out",
    "office interiors",
    "commercial fit-out",
    "commercial interiors",
    "retail fit-out",
    "hospitality fit-out",
    "restaurant interiors",
    "hotel interiors",
    "reception desks",
    "apartment fit-out",
    "developer fit-out",
    "drywall",
    "drywall systems",
    "drywall installation",
    "partitions",
    "partition walls",
    "suspended ceilings",
    "acoustic ceilings",
    "fire-rated partitions",
    "gypsum board",
    "The Gambia",
    "Gambia interiors",
    "Banjul",
    "Serrekunda",
    "West Africa",
    "interior design Gambia",
    "fit-out Gambia",
    "custom kitchens Gambia",
    "interior design West Africa",
    "interior fit-out company near me",
    "custom interior design services",
    "free design consultation",
    "interior design and installation",
    "design manufacturing installation",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "ESK Group Africa",
    title: "ESK | Beautiful Custom Interiors",
    description,
    url: "https://eskafrica.com",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ESK | Beautiful Custom Interiors",
    description,
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={spaceGrotesk.variable} suppressHydrationWarning>
      <body>
        <JsonLd schema={[organizationSchema, localBusinessSchema]} />
        <LoadingScreen />
        <Cursor />
        <Nav />
        <SmoothScroll>
          {children}
          <Footer />
        </SmoothScroll>
        <Reveal />
      </body>
    </html>
  );
};

export default RootLayout;
