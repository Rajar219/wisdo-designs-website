import { Metadata } from "next";
import { blogPosts } from "./data";
import BlogLandingPageClient from "./BlogLandingPageClient";

export const metadata: Metadata = {
  title: "The Engineering Journal - Tech & Software Blog | WISDO Designs",
  description: "Read developer-driven tutorials, threat modeling checklists, database guides, and system integrations written by the core team at WISDO Designs.",
  alternates: {
    canonical: "https://wisdodesigns.com/blog",
  },
  openGraph: {
    title: "The Engineering Journal - Tech & Software Blog | WISDO Designs",
    description: "Read developer-driven tutorials, threat modeling checklists, database guides, and system integrations written by the core team at WISDO Designs.",
    url: "https://wisdodesigns.com/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Engineering Journal - Tech & Software Blog | WISDO Designs",
    description: "Read developer-driven tutorials, threat modeling checklists, database guides, and system integrations written by the core team at WISDO Designs.",
  },
};

export default function BlogLandingPage() {
  return <BlogLandingPageClient posts={blogPosts} />;
}
