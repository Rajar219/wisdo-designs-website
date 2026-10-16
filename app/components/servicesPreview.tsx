import Link from "next/link";
import {
  Code2,
  MonitorSmartphone,
  ChartNoAxesCombined,
  MapPin,
  PenTool,
  Megaphone,
  ArrowRight,
  Check,
} from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: typeof Code2;
  deliverables: string[];
  href: string;
}

const services: ServiceItem[] = [
  {
    id: "software-development",
    title: "Software Development",
    description:
      "Bespoke software solutions designed to streamline business operations, automate workflows, and improve productivity.",
    icon: Code2,
    href: "/services/software-development",
    deliverables: [
      "Custom Business Software",
      "POS and Billing Systems",
      "Inventory Management",
      "Admin Dashboards",
      "Business Workflow Automation",
      "Database-Driven Applications",
    ],
  },
  {
    id: "website-development",
    title: "Website Development",
    description:
      "Modern, responsive, and performance-focused websites that strengthen your brand and help your business grow online.",
    icon: MonitorSmartphone,
    href: "/services/website-development",
    deliverables: [
      "Business Websites",
      "E-commerce Websites",
      "Portfolio Websites",
      "Landing Pages",
      "Responsive Web Design",
      "SEO-Ready Websites",
      "Website Maintenance",
    ],
  },
  {
    id: "seo-services",
    title: "SEO Services",
    description:
      "Improve your search engine rankings, increase organic traffic, and help potential customers discover your business online.",
    icon: ChartNoAxesCombined,
    href: "/services/digital-marketing",
    deliverables: [
      "On-Page and Off-Page SEO",
      "Technical SEO Optimization",
      "Keyword Research and Strategy",
      "Content Optimization",
      "Local SEO Optimization",
      "SEO Performance Monitoring and Reporting",
    ],
  },
  {
    id: "google-business-registration",
    title: "Google Business Registration Services",
    description:
      "Get your business on Google with professional Business Profile setup, verification guidance, and Google Maps listing assistance to improve local visibility.",
    icon: MapPin,
    href: "/services/digital-marketing",
    deliverables: [
      "Google Business Profile Setup",
      "Business Verification Assistance",
      "Google Maps Listing and Location Setup",
      "Business Information Optimization",
      "Business Categories, Services, and Photos",
      "Ongoing Profile Management Support",
    ],
  },
  {
    id: "designing",
    title: "Designing",
    description:
      "Creative design solutions that build a strong brand identity and deliver engaging digital experiences.",
    icon: PenTool,
    href: "/services/designing",
    deliverables: [
      "Brand Identity Design",
      "UI/UX Design",
      "Marketing Collaterals",
      "Social Media Creatives",
      "Product Design",
      "Print and Digital Assets",
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Strategic digital marketing solutions that expand your reach, connect with your audience, and support business growth.",
    icon: Megaphone,
    href: "/services/digital-marketing",
    deliverables: [
      "Social Media Marketing",
      "Google Ads Management",
      "Content Marketing",
      "Email Marketing",
      "Campaign Performance Tracking",
      "Digital Growth Strategy",
    ],
  },
];

export default function ServicesPreview() {
  return (
    <section 
      id="services" 
      className="relative py-20 sm:py-28 lg:py-36 bg-white overflow-hidden"
    >
      {/* Subtle Ambient CSS Lighting (Pure CSS, no images or external assets) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden -z-10">
        <div className="absolute top-1/4 -right-20 w-[32rem] h-[32rem] bg-emerald-50/50 rounded-full blur-[110px]" />
        <div className="absolute bottom-1/4 -left-20 w-[28rem] h-[28rem] bg-teal-50/40 rounded-full blur-[100px]" />
        {/* Subtle CSS-only micro dot matrix */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #059669 1px, transparent 0)`,
            backgroundSize: "32px 32px"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= SECTION HEADER (Matching Live wisdotech.in) ================= */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20 animate-fade-in-up">
          <span className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-4 block">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Professional Web Design, Custom Software & SEO Services by{" "}
            <span className="text-gradient">Wisdo Tech</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed font-light">
            We provide specialized, high-performance digital services segmented to
            scale your business operations from end-to-end.
          </p>
        </div>

        {/* ================= UNIFORM 3-COLUMN SERVICE GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 items-stretch">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.id}
                className="group relative rounded-3xl p-6 sm:p-7 lg:p-8 bg-white border border-slate-200/80 hover:border-emerald-300 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.03)] hover:shadow-[0_20px_45px_-10px_rgba(5,150,105,0.12)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between h-full overflow-hidden"
              >
                {/* Subtle Top-Right Emerald Corner Ambient Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-100/30 via-emerald-50/5 to-transparent rounded-tr-3xl pointer-events-none group-hover:from-emerald-200/40 transition-colors duration-500" />

                {/* Top Content Block */}
                <div>
                  {/* Top Header Row: Icon + Geometric Accent Detail */}
                  <div className="flex items-center justify-between mb-6">
                    {/* Compact Icon in Mint Container */}
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all duration-300 shadow-2xs">
                      <Icon className="w-5.5 h-5.5 stroke-[2]" />
                    </div>

                    {/* Tiny CSS Geometric Accent Detail */}
                    <div className="flex items-center gap-1.5 opacity-40 group-hover:opacity-100 transition-opacity select-none">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span className="w-4 h-1 rounded-full bg-emerald-300" />
                    </div>
                  </div>

                  {/* Service Title with Uniform Min-Height for Strict Grid Alignment */}
                  <div className="min-h-[3.5rem] sm:min-h-[3.75rem] flex items-start mb-2.5">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight group-hover:text-emerald-950 transition-colors leading-snug">
                      {service.title}
                    </h3>
                  </div>

                  {/* Short Service Description with Uniform Min-Height */}
                  <div className="min-h-[4rem] sm:min-h-[4.25rem] flex items-start mb-6">
                    <p className="text-slate-600 text-sm leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>

                  {/* Subtle Divider */}
                  <div className="pt-5 border-t border-slate-100">
                    {/* Small Uppercase Label */}
                    <span className="text-[11px] font-bold tracking-widest text-emerald-800 uppercase block mb-3.5 select-none">
                      WHAT&apos;S INCLUDED
                    </span>

                    {/* Complete Deliverables List */}
                    <ul className="space-y-2.5">
                      {service.deliverables.map((item, idx) => (
                        <li 
                          key={idx} 
                          className="flex items-center gap-2.5 text-slate-700"
                        >
                          <div className="w-4 h-4 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-700 shrink-0">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span className="text-xs sm:text-[13px] font-medium leading-snug text-slate-700">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom-Aligned CTA Link */}
                <div className="mt-8 pt-5 border-t border-slate-100">
                  <Link
                    href={service.href}
                    className="inline-flex items-center justify-between w-full px-5 py-3 rounded-xl bg-slate-50 hover:bg-slate-900 border border-slate-200/80 hover:border-slate-900 text-slate-900 hover:text-white font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 group/btn shadow-2xs active:scale-98"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-4 h-4 text-emerald-600 group-hover/btn:text-emerald-400 group-hover/btn:translate-x-1 transition-all duration-300" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}