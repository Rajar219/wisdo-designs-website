"use client";

import Image from "next/image";
import { Sparkles, ExternalLink, CheckCircle2, Target, Lightbulb, CheckCircle, Code2, AlertCircle } from "lucide-react";

interface Project {
  client: string;
  type: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  image: string;
  url?: string;
}

const completedProjects: Project[] = [
  {
    client: "INZFYER",
    type: "E-Commerce Website",
    problem: "Needed an elegant e-commerce platform for a premium boutique selling luxury plushies and gift sets.",
    solution: "Built a beautiful, modern e-commerce storefront focusing on the premium shopping and gift experience.",
    features: [
      "Luxury product showcase",
      "Handcrafted gift sets category",
      "Responsive modern layout",
      "Seamless checkout experience"
    ],
    technologies: ["React", "Vite", "JavaScript", "Tailwind CSS"],
    image: "/inzfyer.png",
    url: "https://www.inzfyer.in/"
  },
  {
    client: "NMS Dairy Farm",
    type: "Business Website",
    problem: "Needed a digital presence to showcase premium dairy products and farm business operations to customers.",
    solution: "Designed and developed a modern, highly responsive website with customer-friendly navigation.",
    features: [
      "Premium product showcase",
      "Farm operations overview",
      "Responsive layout"
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Vercel Hosting"],
    image: "/nms-dairy-farm.png",
    url: "https://nms-dairy-farm.vercel.app/"
  },
  {
    client: "Confusion Clothing",
    type: "E-Commerce Website",
    problem: "Required a premium online shopping platform for a boutique clothing brand.",
    solution: "Built a custom, responsive fashion e-commerce storefront.",
    features: [
      "Category sorting",
      "Product filters",
      "Responsive layout grids",
      "Premium shopping experience"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    image: "/confusion-clothing.png",
    url: "https://confusionclothing.github.io/shop/"
  }
];

const developmentProjects: Project[] = [
  {
    client: "WISDO POS System",
    type: "Business Software",
    problem: "Retail enterprises require reliable internal software to manage daily operations and inventory.",
    solution: "Developing a custom Point of Sale (POS) and inventory management platform.",
    features: [
      "Live billing interfaces",
      "Stock tracking metrics",
      "Invoicing",
      "Role-based controls",
      "Sales report diagnostics"
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "IndexedDB", "NodeJS"],
    image: "/wisdo-pos.png"
  }
];

export default function ClientsSection() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-40 overflow-hidden bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24 animate-fade-in-up">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-slate-200/60 mb-8">
            <Sparkles className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-bold tracking-wide text-slate-700 uppercase">Our Work</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 sm:mb-8">
            Case Studies & <span className="text-gradient">Real Results</span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-slate-500 leading-relaxed font-light">
            Explore the bespoke digital solutions we've engineered for our clients. No concepts, just actual working products solving real business needs.
          </p>
        </div>

        {/* Completed Projects Section */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Completed Projects</h3>
            <div className="h-px bg-slate-200 flex-grow"></div>
          </div>

          <div className="flex flex-col gap-12 lg:gap-20">
            {completedProjects.map((project, idx) => (
              <ProjectCard key={idx} project={project} status="Completed" reverse={idx % 2 !== 0} priority={idx === 0} />
            ))}
          </div>
        </div>

        {/* In Development Section */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Current / In Development</h3>
            <div className="h-px bg-slate-200 flex-grow"></div>
          </div>

          <div className="flex flex-col gap-12 lg:gap-20">
            {developmentProjects.map((project, idx) => (
              <ProjectCard key={idx} project={project} status="In Development" reverse={false} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function ProjectCard({ project, status, reverse, priority = false }: { project: Project, status: string, reverse: boolean, priority?: boolean }) {
  return (
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center bg-white rounded-[2.5rem] p-6 sm:p-8 lg:p-10 border border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_-10px_rgba(79,70,229,0.1)] transition-shadow duration-500`}>
      
      {/* Image Side */}
      <div className="w-full lg:w-1/2 relative aspect-[4/3] rounded-[1.5rem] overflow-hidden bg-slate-50 border border-slate-100 group">
        <Image 
          src={project.image} 
          alt={`${project.client} Screenshot`} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-w-1024px) 100vw, 50vw"
          priority={priority}
        />
        
        {/* Status Badge overlay */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
          {status === "Completed" ? (
            <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-md border border-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-xl shadow-sm">
              <CheckCircle2 className="w-4 h-4" />
              Live Project
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-md border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-xl shadow-sm">
              <AlertCircle className="w-4 h-4 animate-pulse" />
              In Development
            </span>
          )}
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-1/2 flex flex-col">
        <div className="inline-block px-3 py-1.5 text-[10px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-lg uppercase tracking-wider mb-4 w-max">
          {project.type}
        </div>
        
        <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
          {project.client}
        </h3>

        <div className="space-y-6 mb-10">
          {/* Problem */}
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center shrink-0 border border-rose-100">
              <Target className="w-5 h-5 text-rose-500" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-1">The Problem</h4>
              <p className="text-base text-slate-500 font-medium leading-relaxed">{project.problem}</p>
            </div>
          </div>

          {/* Solution */}
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 border border-emerald-100">
              <Lightbulb className="w-5 h-5 text-emerald-500" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-1">Our Solution</h4>
              <p className="text-base text-slate-500 font-medium leading-relaxed">{project.solution}</p>
            </div>
          </div>
        </div>

        {/* Features & Tech */}
        <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-slate-100 mb-10">
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-slate-400" /> Key Features
            </h4>
            <ul className="space-y-2">
              {project.features.map((feature, i) => (
                <li key={i} className="text-sm text-slate-600 font-medium flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-slate-400" /> Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span key={i} className="text-xs font-semibold text-slate-500 bg-slate-50 border border-slate-100 px-2 py-1 rounded-md">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Button */}
        {status === "Completed" && project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-indigo-600 text-white font-bold text-sm uppercase tracking-wide py-4 px-8 rounded-xl shadow-md transition-all duration-300 active:scale-95 w-full sm:w-max"
          >
            <span>View Live Project</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        ) : (
          <button
            disabled
            className="mt-auto inline-flex items-center justify-center gap-2 bg-slate-50 text-slate-400 font-bold text-sm uppercase tracking-wide py-4 px-8 rounded-xl border border-slate-200 cursor-not-allowed select-none w-full sm:w-max"
          >
            <span>Under Construction</span>
          </button>
        )}

      </div>
    </div>
  );
}
