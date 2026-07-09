import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, CheckCircle2, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Portfolio - Web Design & Custom Software | WISDO Designs",
  description: "Explore real project case studies engineered by WISDO Designs, including custom web design, responsive e-commerce portals, and Point of Sale (POS) business software.",
  alternates: {
    canonical: "https://wisdodesigns.com/portfolio",
  },
  openGraph: {
    title: "Our Portfolio - Web Design & Custom Software | WISDO Designs",
    description: "Explore real project case studies engineered by WISDO Designs, including custom web design, responsive e-commerce portals, and Point of Sale (POS) business software.",
    url: "https://wisdodesigns.com/portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Portfolio - Web Design & Custom Software | WISDO Designs",
    description: "Explore real project case studies engineered by WISDO Designs, including custom web design, responsive e-commerce portals, and Point of Sale (POS) business software.",
  },
};

interface Project {
  title: string;
  status: "Live" | "In Development";
  category: "Business Website" | "E-Commerce Website" | "Business Software";
  description: string;
  technologies: string[];
  image: string;
  url?: string;
}

const projects: Project[] = [
  {
    title: "NMS Dairy Farm",
    status: "Live",
    category: "Business Website",
    image: "/nms-dairy-farm.png",
    url: "https://nms-dairy-farm.vercel.app/",
    description: "A modern dairy farm website showcasing premium dairy products, farm business operations, and customer-friendly navigation structured inside a highly responsive layout.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Lucide Icons", "Vercel Hosting"]
  },
  {
    title: "Confusion Clothing",
    status: "Live",
    category: "E-Commerce Website",
    image: "/confusion-clothing.png",
    url: "https://confusionclothing.github.io/shop/",
    description: "A modern fashion e-commerce storefront built for a boutique clothing brand featuring responsive layout grids, category sorting, product filters, and a premium shopping experience.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "GitHub Pages"]
  },
  {
    title: "WISDO POS System",
    status: "In Development",
    category: "Business Software",
    image: "/wisdo-pos.png",
    description: "A custom Point of Sale (POS) and inventory management platform developed for retail enterprises. Features live billing interfaces, stock tracking metrics, invoicing, role-based controls, and sales report diagnostics.",
    technologies: ["React", "Next.js", "Tailwind CSS", "IndexedDB", "SQLite", "NodeJS"]
  }
];

export default function PortfolioPage() {
  return (
    <div className="w-full flex flex-col pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-48 lg:pb-36 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16 sm:mb-20 text-left border-l-4 border-indigo-600 pl-6 sm:pl-8">
          <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase block mb-3">
            Our Work
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-none mb-6">
            Project Portfolio
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-500 leading-relaxed font-light max-w-2xl">
            Real products designed, engineered, and shipped for local businesses and enterprises. No placeholders, just actual digital solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {projects.map((project) => (
            <article
              key={project.title}
              className="bg-white rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full group"
            >
              {/* Project Image Wrapper */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-50 border-b border-slate-100">
                <Image
                  src={project.image}
                  alt={`${project.title} Screenshot`}
                  fill
                  className="object-cover group-hover:scale-103 transition-transform duration-500"
                  sizes="(max-w-768px) 100vw, 33vw"
                />
                
                {/* Status Badge overlay */}
                <div className="absolute top-4 left-4">
                  {project.status === "Live" ? (
                    <span className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg">
                      <CheckCircle2 className="w-3 h-3" />
                      {project.status}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 bg-indigo-50 border border-indigo-200 text-indigo-700 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg">
                      <AlertCircle className="w-3 h-3 animate-pulse" />
                      In Development
                    </span>
                  )}
                </div>
              </div>

              {/* Body details */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                {/* Category header */}
                <span className="text-[11px] font-extrabold text-indigo-600 uppercase tracking-widest block mb-2">
                  {project.category}
                </span>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                  {project.title}
                </h3>
                
                <p className="text-slate-500 font-light text-sm sm:text-base leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-slate-50 border border-slate-200/40 text-slate-500 text-[10px] sm:text-xs font-bold rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action button */}
                <div className="pt-4 border-t border-slate-100 mt-auto">
                  {project.status === "Live" && project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm uppercase tracking-wider py-3.5 rounded-xl shadow-sm transition-all duration-300 active:scale-95"
                    >
                      <span>Visit Website</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <button
                      disabled
                      className="w-full inline-flex items-center justify-center gap-2 bg-slate-100 text-slate-400 font-bold text-sm uppercase tracking-wider py-3.5 rounded-xl border border-slate-200 cursor-not-allowed select-none"
                    >
                      <span>Coming Soon</span>
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
