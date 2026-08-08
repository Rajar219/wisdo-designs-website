import { portfolioData } from "../data";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, ExternalLink, MessageSquare } from "lucide-react";
import { Metadata } from "next";
import TrackedLink from "../../components/TrackedLink";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Wisdo Tech",
      description: "The requested case study could not be found.",
    };
  }

  return {
    title: project.seoTitle,
    description: project.description,
    alternates: {
      canonical: `https://wisdodesigns.com/portfolio/${project.slug}`,
    },
    openGraph: {
      title: project.seoTitle,
      description: project.description,
      url: `https://wisdodesigns.com/portfolio/${project.slug}`,
      type: "article",
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: `${project.title} Case Study Screenshot`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.seoTitle,
      description: project.description,
      images: [project.image],
    },
  };
}

export async function generateStaticParams() {
  return portfolioData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = portfolioData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="w-full flex flex-col pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-48 lg:pb-36 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors uppercase tracking-wider group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-10 sm:mb-14">
          <span className="inline-block px-3 py-1.5 text-xs font-bold uppercase tracking-wider bg-indigo-50 border border-indigo-100 text-indigo-600 rounded-lg mb-6">
            {project.category}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6 sm:mb-8">
            {project.title} Case Study
          </h1>
          <p className="text-lg sm:text-xl text-slate-500 font-light leading-relaxed max-w-2xl mb-8">
            {project.description}
          </p>
          
          <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-500 pb-8 border-b border-slate-200/60">
            <span className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg">
              <CheckCircle2 className="w-3 h-3" />
              {project.status}
            </span>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-indigo-600 hover:text-indigo-700 transition-colors"
              >
                View Live Project <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </header>

        {/* Cover Image */}
        <div className="relative aspect-video w-full rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 mb-12 sm:mb-16 bg-slate-50">
          <Image
            src={project.image}
            alt={`${project.title} website interface`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-w-1280px) 100vw, 1280px"
            priority
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          
          {/* Main Content Sections */}
          <div className="lg:col-span-8 space-y-12">
            {project.sections.map((section, idx) => (
              <section key={idx} className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                  {section.heading}
                </h2>
                <p className="text-slate-700 font-light text-base sm:text-lg leading-relaxed break-words">
                  {section.content}
                </p>
              </section>
            ))}
          </div>

          {/* Sidebar Info & CTA */}
          <div className="lg:col-span-4 lg:sticky lg:top-36 space-y-6 w-full">
            
            {/* Tech Stack Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/60 shadow-sm space-y-4">
              <h4 className="font-bold text-slate-800 text-base tracking-tight mb-2">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200/40 text-slate-600 text-xs font-bold tracking-wide"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bespoke Project CTA Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/60 shadow-sm relative overflow-hidden group">
              <h4 className="text-xl font-bold text-slate-900 tracking-tight mb-4">
                Need a Custom Solution?
              </h4>
              <p className="text-slate-500 font-light text-sm leading-relaxed mb-6">
                Ready to build something similar? Our engineering team builds high-performance bespoke digital solutions tailored exactly to your operations.
              </p>
              <TrackedLink
                href="/contact"
                eventName="service_cta_click"
                eventPayload={{ location: "case_study_sidebar", project: project.title }}
                className="w-full inline-flex items-center justify-center gap-2 bg-indigo-600 text-white py-3.5 rounded-xl font-bold text-sm uppercase tracking-wide hover:bg-indigo-700 transition-all shadow-md active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                Get in Touch
              </TrackedLink>
            </div>

          </div>
        </div>
        
      </div>
    </article>
  );
}
