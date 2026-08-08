import { Metadata } from "next";
import SolutionsClient from "./SolutionsClient";

export const metadata: Metadata = {
  title: "Business Website Development & POS Software Solutions | Wisdo Tech",
  description: "Wisdo Tech engineers Custom Software, POS Software, and Business Website Development solutions tailored to your unique business operations and workflows.",
  alternates: {
    canonical: "https://wisdodesigns.com/solutions",
  },
  openGraph: {
    title: "Business Website Development & POS Software Solutions | Wisdo Tech",
    description: "Wisdo Tech engineers Custom Software, POS Software, and Business Website Development solutions tailored to your unique business operations and workflows.",
    url: "https://wisdodesigns.com/solutions",
    type: "website",
    images: [
      {
        url: "/logo-transparent.png",
        width: 1200,
        height: 630,
        alt: "Wisdo Tech - Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Website Development & POS Software Solutions | Wisdo Tech",
    description: "Wisdo Tech engineers Custom Software, POS Software, and Business Website Development solutions tailored to your unique business operations and workflows.",
  },
};

export default function SolutionsPage() {
  return <SolutionsClient />;
}
