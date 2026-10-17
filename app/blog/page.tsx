import { Metadata } from "next";
import { blogPosts } from "./data";
import BlogLandingPageClient from "./BlogLandingPageClient";

export const metadata: Metadata = {
  title: "The Engineering Journal — Tech & Software Insights",
  description: "Read practical tutorials, architecture guides, database tips, and web development insights from Wisdo Tech — Software & Web Solutions.",
  alternates: {
    canonical: "https://wisdodesigns.com/blog",
  },
  openGraph: {
    title: "The Engineering Journal | Wisdo Tech",
    description: "Read practical tutorials, architecture guides, database tips, and web development insights from Wisdo Tech — Software & Web Solutions.",
    url: "https://wisdodesigns.com/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Engineering Journal | Wisdo Tech",
    description: "Read practical tutorials, architecture guides, database tips, and web development insights from Wisdo Tech — Software & Web Solutions.",
  },
};

export default function BlogLandingPage() {
  return <BlogLandingPageClient posts={blogPosts} />;
}
