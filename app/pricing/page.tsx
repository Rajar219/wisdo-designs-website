import { Check, Sparkles } from "lucide-react";
import Trust from "../components/trust";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affordable Web Design & Web Hosting Packages",
  description: "Get transparent, value-driven pricing for Website Development, Mobile App Development, and Business Software automation packages tailored to your startup.",
  alternates: {
    canonical: "https://wisdodesigns.com/pricing",
  },
  openGraph: {
    title: "Affordable Web Design & Web Hosting Packages | WISDO Designs",
    description: "Get transparent, value-driven pricing for Website Development, Mobile App Development, and Business Software automation packages tailored to your startup.",
    url: "https://wisdodesigns.com/pricing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable Web Design & Web Hosting Packages | WISDO Designs",
    description: "Get transparent, value-driven pricing for Website Development, Mobile App Development, and Business Software automation packages tailored to your startup.",
  },
};

const tiers = [
  {
    name: "Starter Solution",
    price: "Custom",
    desc: "Perfect for local boutiques, cafes, restaurants, and startups needing a solid web presence.",
    features: [
      "Custom 5-Page Responsive Website",
      "Premium UI/UX Design Layout",
      "Essential SEO Optimization",
      "Contact Form & WhatsApp Integration",
      "Speed Optimized & Secure Hosting Ready",
      "1 Month Post-Launch Support"
    ],
    cta: "Inquire Now",
    popular: false,
    color: "from-blue-500 to-indigo-500",
    bg: "bg-blue-50/50"
  },
  {
    name: "Growth Suite",
    price: "Custom",
    desc: "Designed for scaling startups and platforms requiring complex databases or custom apps.",
    features: [
      "Full Stack Custom Web or Mobile App",
      "Interactive Dashboard & Database Setup",
      "Advanced User Authentication",
      "API Integrations & Payment Gateway",
      "Enhanced SEO & Performance Auditing",
      "3 Months Dedicated Support"
    ],
    cta: "Get Started",
    popular: true,
    color: "from-indigo-600 to-purple-600",
    bg: "bg-indigo-50/50"
  },
  {
    name: "Enterprise Automation",
    price: "Custom",
    desc: "Bespoke solutions for retail billing, custom POS tools, and deep workflow AI integrations.",
    features: [
      "Retail POS Billing & Inventory Software",
      "AI Customer Support Chatbot Setup",
      "Custom Internal Workflow Automation",
      "Multi-Platform sync (WhatsApp, Web)",
      "Maximum Speed & Edge Caching",
      "Dedicated Technical Account Partner"
    ],
    cta: "Partner With Us",
    popular: false,
    color: "from-fuchsia-500 to-pink-500",
    bg: "bg-fuchsia-50/50"
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
            <span className="text-sm font-semibold tracking-wide text-slate-700">Flexible Packages</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 drop-shadow-sm">
            Invest in <span className="text-gradient">Scalability</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-2xl text-slate-500 leading-relaxed font-light max-w-3xl mx-auto">
            We deliver top-tier engineering without bloated agency margins. Contact us for custom quotes tailored precisely to your goals.
          </p>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="pb-24 sm:pb-36 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-[2rem] p-8 lg:p-10 border transition-all duration-500 hover:-translate-y-3 flex flex-col justify-between ${
                tier.popular
                  ? "border-indigo-500 shadow-[0_20px_50px_-10px_rgba(79,70,229,0.15)] ring-2 ring-indigo-500/10"
                  : "border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.08)]"
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-md">
                  Most Popular
                </span>
              )}

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">{tier.name}</h2>
                <p className="text-sm text-slate-500 min-h-[40px] leading-relaxed font-medium mb-6">
                  {tier.desc}
                </p>

                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl sm:text-5xl font-extrabold text-slate-900">{tier.price}</span>
                  <span className="text-sm font-semibold text-slate-400">/ project rate</span>
                </div>

                <div className="space-y-4 border-t border-slate-50 pt-8 mb-8">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-indigo-600" />
                      </div>
                      <span className="text-sm font-semibold text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href={`/contact?package=${encodeURIComponent(tier.name)}`}
                className={`w-full py-4 rounded-xl text-sm font-bold uppercase tracking-wide text-center transition-all duration-300 ${
                  tier.popular
                    ? "bg-slate-900 text-white hover:bg-indigo-600 shadow-md shadow-slate-900/10"
                    : "bg-slate-50 text-slate-900 hover:bg-slate-100"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Trust />
    </div>
  );
}
