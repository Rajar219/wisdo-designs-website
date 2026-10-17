import { Metadata } from "next";
import ProjectDiscovery from "../components/ProjectDiscovery";

export const metadata: Metadata = {
  title: "Project Discovery & Quote",
  description: "Explore tailored software, web, and AI solutions for your business with Wisdo Tech's interactive project discovery experience.",
  alternates: {
    canonical: "https://wisdodesigns.com/quote",
  },
  openGraph: {
    title: "Project Discovery & Quote | Wisdo Tech",
    description: "Explore tailored software, web, and AI solutions for your business with Wisdo Tech's interactive project discovery experience.",
    url: "https://wisdodesigns.com/quote",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Project Discovery & Quote | Wisdo Tech",
    description: "Explore tailored software, web, and AI solutions for your business with Wisdo Tech's interactive project discovery experience.",
  },
};

export default function QuotePage() {
  return <ProjectDiscovery />;
}
