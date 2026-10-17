import { Metadata } from "next";
import SolutionsClient from "./SolutionsClient";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Explore tailored technology solutions from Wisdo Tech, including custom software, POS systems, and business websites designed around real business needs.",
  alternates: {
    canonical: "https://wisdodesigns.com/solutions",
  },
  openGraph: {
    title: "Solutions | Wisdo Tech",
    description: "Explore tailored technology solutions from Wisdo Tech, including custom software, POS systems, and business websites.",
    url: "https://wisdodesigns.com/solutions",
    type: "website",
    images: [
      {
        url: "/logo-transparent.png",
        width: 1200,
        height: 630,
        alt: "Wisdo Tech | Software & Web Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solutions | Wisdo Tech",
    description: "Explore tailored technology solutions from Wisdo Tech, including custom software, POS systems, and business websites.",
  },
};

export default function SolutionsPage() {
  return <SolutionsClient />;
}
