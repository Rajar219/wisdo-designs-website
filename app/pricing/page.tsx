import { Check, Sparkles, AlertCircle, Tag } from "lucide-react";
import Trust from "../components/trust";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing & Packages | Wisdo Tech",
  description: "Transparent, flexible pricing for Website Development, Software Development, Designing, and Digital Marketing.",
  alternates: {
    canonical: "https://wisdodesigns.com/pricing",
  },
};

const services = [
  {
    name: "Website Development",
    price: "Starting From ₹ 2000",
    desc: "Professional, responsive websites built to establish your digital presence and convert visitors.",
    features: [
      "Custom Responsive Design",
      "Essential SEO Optimization",
      "Fast Load Times",
      "Contact Forms & WhatsApp",
      "Secure Hosting Setup"
    ],
    cta: "Request a Quote",
    popular: true,
  },
  {
    name: "Software Development",
    price: "Custom Quote",
    desc: "Bespoke business software, POS systems, and internal tools to automate your operations.",
    features: [
      "Custom Web Applications",
      "Billing & POS Systems",
      "Inventory Management",
      "API Integrations",
      "Scalable Architecture"
    ],
    cta: "Request a Quote",
    popular: false,
  },
  {
    name: "Designing",
    price: "Starting From ₹ 2000",
    desc: "Premium brand identities, social media creatives, and beautiful UI/UX design.",
    features: [
      "Logo & Brand Identity",
      "Social Media Creatives",
      "Marketing Posters & Banners",
      "UI/UX Application Design",
      "Print Marketing Materials"
    ],
    cta: "Request a Quote",
    popular: false,
  },
  {
    name: "Digital Marketing",
    price: "Custom Quote",
    desc: "Data-driven marketing strategies to increase visibility, drive traffic, and grow your audience.",
    features: [
      "Search Engine Optimization (SEO)",
      "Google Business Profile Setup",
      "Social Media Management",
      "Targeted Ad Campaigns",
      "Analytics & Reporting"
    ],
    cta: "Request a Quote",
    popular: false,
  }
];

export default function PricingPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="relative pt-28 pb-12 sm:pt-36 sm:pb-16 lg:pt-52 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden text-center">
        <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-indigo-50/50 to-transparent -z-10" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-200/30 blur-[130px] rounded-full mix-blend-multiply -z-10" />

        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md shadow-sm border border-indigo-100/50 mb-8">
            <Sparkles className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-semibold tracking-wide text-slate-700">Flexible Pricing</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 drop-shadow-sm">
            Invest in Your <span className="text-gradient">Growth</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-2xl text-slate-500 leading-relaxed font-light max-w-3xl mx-auto mb-10">
            We deliver top-tier engineering without bloated agency margins. We don't force fixed prices because every business is unique.
          </p>

          {/* Special Offer Banner */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-indigo-600 text-white px-6 py-4 rounded-2xl shadow-lg shadow-indigo-500/25">
             <Tag className="w-5 h-5 shrink-0" />
             <span className="font-bold tracking-wide">Special offers for new startups, new business persons and students!</span>
          </div>

        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 items-stretch">
          {services.map((service, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-[2rem] p-8 border transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between ${
                service.popular
                  ? "border-indigo-500 shadow-[0_20px_50px_-10px_rgba(79,70,229,0.15)] ring-2 ring-indigo-500/10"
                  : "border-slate-200/60 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.08)]"
              }`}
            >
              {service.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-[10px] font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-md whitespace-nowrap">
                  Most Requested
                </span>
              )}

              <div>
                <h2 className="text-xl font-extrabold text-slate-900 mb-2">{service.name}</h2>
                <p className="text-sm text-slate-500 min-h-[60px] leading-relaxed font-medium mb-6">
                  {service.desc}
                </p>

                <div className="flex flex-col gap-1 mb-8">
                  <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">{service.price}</span>
                  {service.price !== "Custom Quote" && (
                     <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">* Base Price</span>
                  )}
                </div>

                <div className="space-y-3 border-t border-slate-100 pt-8 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-indigo-600" />
                      </div>
                      <span className="text-sm font-semibold text-slate-700 leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href={`/contact?service=${encodeURIComponent(service.name)}`}
                className={`w-full py-4 rounded-xl text-sm font-bold uppercase tracking-wide text-center transition-all duration-300 mt-auto ${
                  service.popular
                    ? "bg-slate-900 text-white hover:bg-indigo-600 shadow-md shadow-slate-900/10"
                    : "bg-slate-50 text-slate-900 hover:bg-slate-200 border border-slate-200"
                }`}
              >
                {service.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex items-start gap-4 shadow-sm">
           <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
           <div>
             <h4 className="font-bold text-amber-900 mb-1">Pricing Disclaimer</h4>
             <p className="text-sm font-medium text-amber-700 leading-relaxed">
               <strong>Final pricing depends on project scope, features and requirements.</strong> Because we do not force fixed prices on highly variable projects, the exact quote for your project will be calculated during our free initial consultation.
             </p>
           </div>
        </div>
      </section>

      <Trust />
    </div>
  );
}
