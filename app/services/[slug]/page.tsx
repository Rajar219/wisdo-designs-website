import { servicesData } from "../data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, MessageSquare, MonitorPlay, Cpu, AppWindow, Rocket } from "lucide-react";
import { Metadata } from "next";
import TrackedLink from "../../components/TrackedLink";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const iconMap: Record<string, any> = {
  MonitorPlay: MonitorPlay,
  Cpu: Cpu,
  AppWindow: AppWindow,
  Rocket: Rocket
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | Wisdo Tech",
      description: "The requested service could not be found.",
    };
  }

  return {
    title: service.seoTitle,
    description: service.description,
    alternates: {
      canonical: `https://wisdodesigns.com/services/${service.slug}`,
    },
    openGraph: {
      title: service.seoTitle,
      description: service.description,
      url: `https://wisdodesigns.com/services/${service.slug}`,
      type: "website",
      images: [
        {
          url: "/logo-transparent.png",
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.seoTitle,
      description: service.description,
    },
  };
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.iconName] || MonitorPlay;

  return (
    <article className="w-full flex flex-col pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-48 lg:pb-36 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors uppercase tracking-wider group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>
        </div>

        {/* Hero Section */}
        <header className="mb-12 sm:mb-16 bg-white rounded-[2rem] p-8 sm:p-12 border border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.03)] relative overflow-hidden">
          <div className={`absolute top-0 right-0 w-64 h-64 ${service.bg} rounded-bl-full -z-10`} />
          <div className="flex items-center gap-6 mb-8">
            <div className={`w-16 h-16 rounded-2xl ${service.bg} flex items-center justify-center`}>
              <div className={`bg-gradient-to-br ${service.color} w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-md`}>
                <Icon className="w-5 h-5" />
              </div>
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
            {service.title}
          </h1>
          <p className="text-lg sm:text-xl text-slate-500 font-light leading-relaxed max-w-2xl">
            {service.description}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-start">
          
          {/* Main Content Sections */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-12">
            {service.sections.map((section, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                  {section.heading}
                </h2>
                <p className="text-slate-600 font-light text-base sm:text-lg leading-relaxed break-words">
                  {section.content}
                </p>
              </section>
            ))}
          </div>

          {/* Sidebar CTA & Benefits */}
          <div className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-32 space-y-6 w-full">
            
            <div className="bg-white rounded-[2rem] p-6 sm:p-8 border border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.03)]">
              <h3 className="text-lg font-bold text-slate-900 mb-6 tracking-tight">Key Benefits</h3>
              <ul className="space-y-4 mb-8">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-slate-600 font-medium text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
              <TrackedLink
                href={`/contact?service=${encodeURIComponent(service.title)}`}
                eventName="service_cta_click"
                eventPayload={{ service: service.title, location: "service_detail" }}
                className="w-full inline-flex items-center justify-center gap-2 bg-indigo-600 text-white py-3.5 rounded-xl font-bold text-sm uppercase tracking-wide hover:bg-indigo-700 transition-all shadow-md active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                Request a Quote
              </TrackedLink>
            </div>
            
          </div>
        </div>
        
      </div>
    </article>
  );
}
