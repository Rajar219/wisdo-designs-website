import { MonitorPlay, Smartphone, Database, Bot, Receipt, AppWindow, Cpu, Package, Server, Wrench, Building2, Coffee, Hotel, Utensils, ShoppingBag, Rocket, Plane, Store, MessageCircle } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import TrackedLink from "../components/TrackedLink";

export const metadata: Metadata = {
  title: "Website Design & Digital Marketing Services | Wisdo Tech",
  description: "Wisdo Tech provides professional Website Design, Custom Software Development, POS Solutions, and Digital Marketing Services for modern businesses.",
  alternates: {
    canonical: "https://wisdodesigns.com/services",
  },
  openGraph: {
    title: "Website Design & Digital Marketing Services | Wisdo Tech",
    description: "Wisdo Tech provides professional Website Design, Custom Software Development, POS Solutions, and Digital Marketing Services for modern businesses.",
    url: "https://wisdodesigns.com/services",
    type: "website",
    images: [
      {
        url: "/logo-transparent.png",
        width: 1200,
        height: 630,
        alt: "Wisdo Tech - Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design & Digital Marketing Services | Wisdo Tech",
    description: "Wisdo Tech provides professional Website Design, Custom Software Development, POS Solutions, and Digital Marketing Services for modern businesses.",
  },
};

const services = [
  {
    title: "Website Development",
    slug: "website-development",
    desc: "We build clean, fast, and search-optimized websites that represent your brand and explain your services. Designed for local businesses, cafes, boutiques, and startups.",
    icon: MonitorPlay,
    color: "from-blue-500 to-indigo-500",
    bg: "bg-blue-50"
  },
  {
    title: "Custom Software Solutions",
    slug: "software-development",
    desc: "Bespoke software systems engineered from scratch to resolve your specific operational problems and workflows.",
    icon: Cpu,
    color: "from-purple-500 to-indigo-500",
    bg: "bg-purple-50"
  },
  {
    title: "UI/UX & Branding Design",
    slug: "designing",
    desc: "Premium UI/UX design, brand identity, and graphic design services that elevate your digital presence.",
    icon: AppWindow,
    color: "from-sky-500 to-blue-500",
    bg: "bg-sky-50"
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    desc: "Data-driven digital marketing, local SEO, and social media strategies designed to generate qualified leads.",
    icon: Rocket,
    color: "from-orange-500 to-red-500",
    bg: "bg-orange-50"
  },
  {
    title: "POS & Billing Solutions",
    desc: "Lightweight, easy-to-use billing software designed for shops and local retail outlets to handle checkouts and transactions.",
    icon: Receipt,
    color: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-50"
  },
  {
    title: "Inventory Management",
    desc: "Structured stock tracking dashboards to check raw materials, catalog items, sales metrics, and automatic low stock alerts.",
    icon: Package,
    color: "from-indigo-600 to-violet-600",
    bg: "bg-indigo-50"
  },
  {
    title: "Mobile App Development",
    desc: "Sleek iOS and Android applications developed to handle mobile orders, user accounts, and direct client interactions.",
    icon: Smartphone,
    color: "from-fuchsia-500 to-pink-500",
    bg: "bg-fuchsia-50"
  },
  {
    title: "Database Solutions",
    desc: "Reliable database architecture setups, configurations, migrations, and performance optimizations to store your critical business data safely.",
    icon: Database,
    color: "from-blue-600 to-cyan-500",
    bg: "bg-blue-50"
  },
  {
    title: "AI Integrations",
    desc: "Practical integrations of artificial intelligence, such as automated WhatsApp replies or helpdesk tools, based on your business requirements.",
    icon: Bot,
    color: "from-orange-500 to-red-500",
    bg: "bg-orange-50"
  },
  {
    title: "Web Hosting & Deployment",
    desc: "Secure hosting, VPS allocations, custom server setups, and automated deployment configurations to keep your site online 24/7.",
    icon: Server,
    color: "from-rose-500 to-pink-600",
    bg: "bg-rose-50"
  },
  {
    title: "Website Maintenance",
    desc: "Regular checkups, speed optimizations, script updates, security audits, and backups to ensure your web presence runs smoothly without interruption.",
    icon: Wrench,
    color: "from-teal-500 to-emerald-600",
    bg: "bg-teal-50"
  }
];

const industries = [
  { name: "Real Estate", icon: Building2 },
  { name: "Boutiques", icon: Store },
  { name: "Cafes", icon: Coffee },
  { name: "Restaurants", icon: Utensils },
  { name: "Hotels", icon: Hotel },
  { name: "Tourist Services", icon: Plane },
  { name: "Retail Shops", icon: ShoppingBag },
  { name: "Startups", icon: Rocket }
];

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Website Design and Development",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Wisdo Tech"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Digital Marketing Services",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Wisdo Tech"
              }
            }
          ])
        }}
      />
      {/* Page Header */}
      <section className="relative pt-28 pb-12 sm:pt-36 sm:pb-16 lg:pt-52 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-indigo-50/50 to-transparent -z-10" />
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-indigo-200/40 blur-[120px] rounded-full mix-blend-multiply -z-10" />

        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <p className="text-sm font-bold tracking-widest text-indigo-500 uppercase mb-4">
            Our Capabilities
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 drop-shadow-sm">
            Scalable <span className="text-gradient">Solutions</span> <br/> for Modern Teams
          </h1>
          <p className="text-base sm:text-lg lg:text-2xl text-slate-500 leading-relaxed font-light max-w-3xl mx-auto">
            From intuitive digital products to intelligent backend automation, we engineer the systems that power your growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-16 sm:pb-24 lg:pb-48 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            
            return (
              <div 
                key={i} 
                style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'both' }}
                className="group bg-white rounded-[2rem] p-10 border border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_30px_60px_-15px_rgba(79,70,229,0.12)] animate-fade-in-up flex flex-col items-center sm:items-start text-center sm:text-left"
              >
                <div className={`w-16 h-16 rounded-2xl ${service.bg} flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  <div className={`bg-gradient-to-br ${service.color} w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-md`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                {service.slug ? (
                  <Link href={`/services/${service.slug}`} className="text-2xl font-bold text-slate-900 mb-4 tracking-tight hover:text-indigo-600 transition-colors">
                    {service.title}
                  </Link>
                ) : (
                  <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-indigo-600 transition-colors">
                    {service.title}
                  </h2>
                )}
                <p className="text-slate-500 leading-relaxed font-medium max-w-sm mx-auto sm:mx-0 mb-6 flex-grow">
                  {service.desc}
                </p>
                <div className="mt-auto pt-2 w-full flex flex-col gap-3">
                  {service.slug && (
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center justify-center gap-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 px-6 py-3 rounded-xl font-bold text-sm transition-colors w-full group/btn"
                    >
                      <span>Read More</span>
                    </Link>
                  )}
                  <TrackedLink 
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    eventName="service_cta_click"
                    eventPayload={{ service: service.title }}
                    className="inline-flex items-center justify-center gap-2 bg-slate-50 hover:bg-indigo-600 text-indigo-600 hover:text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors w-full group/cta"
                  >
                    <span>Request a Quote</span>
                    <span className="group-hover/cta:translate-x-1 transition-transform">→</span>
                  </TrackedLink>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-100/60 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-50/50 rounded-bl-full -z-10" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 animate-fade-in-up">
            <h2 className="text-sm font-bold tracking-widest text-indigo-500 uppercase mb-4">
              Local & Global Impact
            </h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Industries We <span className="text-gradient">Serve</span>
            </h3>
            <p className="text-base sm:text-lg text-slate-500 leading-relaxed font-light">
              We design specialized digital solutions tailored specifically to the operational workflows of these key industries.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {industries.map((ind, i) => {
              const IndIcon = ind.icon;
              return (
                <div key={i} className="bg-slate-50 hover:bg-white border border-slate-100 hover:border-indigo-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.1)] group">
                  <div className="w-14 h-14 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center group-hover:bg-indigo-50 group-hover:border-indigo-100 transition-colors">
                    <IndIcon className="w-6 h-6 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                  </div>
                  <span className="font-bold text-slate-800 tracking-wide">{ind.name}</span>
                </div>
              );
            })}
          </div>

          {/* Global CTA */}
          <div className="mt-20 sm:mt-24 text-center border-t border-slate-200/50 pt-12 sm:pt-16">
            <p className="text-xl text-slate-500 font-medium mb-6">Not sure which service you need?</p>
            <TrackedLink
              href="/api/whatsapp"
              eventName="whatsapp_click"
              eventPayload={{ location: "services_global_cta" }}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-50 text-emerald-600 border border-emerald-200 hover:bg-emerald-500 hover:text-white px-8 py-4 rounded-xl font-bold transition-all shadow-sm hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat with Wisdo Tech</span>
            </TrackedLink>
          </div>

        </div>
      </section>
    </div>
  );
}