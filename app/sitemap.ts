import { MetadataRoute } from "next";
import { blogPosts } from "./blog/data";
import { servicesData } from "./services/data";
import { portfolioData } from "./portfolio/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://wisdodesigns.com";
  
  // Static pages sitemap configurations
  const staticRoutes = [
    { url: "", priority: 1.0, changeFrequency: "monthly" as const },
    { url: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/solutions", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/portfolio", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/pricing", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/careers", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const staticSitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // Dynamic Blog article sitemap configurations
  const dynamicBlogSitemap = blogPosts.map((post) => {
    let lastMod = new Date();
    try {
      lastMod = new Date(post.updatedDate || post.date);
    } catch (e) {
      // fallback to current time
    }

    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: lastMod,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    };
  });

  // Dynamic Service sitemap configurations
  const dynamicServiceSitemap = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Dynamic Portfolio sitemap configurations
  const dynamicPortfolioSitemap = portfolioData.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticSitemap, ...dynamicBlogSitemap, ...dynamicServiceSitemap, ...dynamicPortfolioSitemap];
}
