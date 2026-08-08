import { Wrench, ShieldCheck, FileText, Zap, Sparkles, Server, TrendingUp, RefreshCw, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const supportServices = [
  { name: "Website Updates", icon: RefreshCw },
  { name: "Bug Fixes", icon: Wrench },
  { name: "Security Updates", icon: ShieldCheck },
  { name: "Content Updates", icon: FileText },
  { name: "Performance Improvements", icon: Zap },
  { name: "Feature Enhancements", icon: Sparkles },
  { name: "Hosting & Deployment", icon: Server },
  { name: "SEO Improvements", icon: TrendingUp }
];

const maintenancePlans = [
  {
    title: "Essential Maintenance",
    desc: "Keep your digital presence secure, updated, and running smoothly without technical headaches.",
    features: [
      "Security patches & updates",
      "Minor bug fixes",
      "Uptime monitoring",
      "Hosting support"
    ]
  },
  {
    title: "Growth Support",
    desc: "Active improvements to scale your platform and keep your content fresh for your growing audience.",
    features: [
      "Regular content updates",
      "Performance optimization",
      "SEO improvements",
      "Minor feature additions"
    ],
    popular: true
  },
  {
    title: "Enterprise SLA",
    desc: "Priority support and dedicated resources for mission-critical custom software and applications.",
    features: [
      "Priority response times",
      "Dedicated account manager",
      "Major feature enhancements",
      "Custom development hours"
    ]
  }
];

export default function Support() {
  return (
    <section className="py-20 sm:py-28 lg:py-36 relative bg-slate-50/50 border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24 animate-fade-in-up">
          <span className="text-sm font-bold tracking-widest text-indigo-500 uppercase mb-4 block">
            After-Launch Support
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
            We Don't Stop at <span className="text-gradient">Launch</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-500 font-light leading-relaxed">
            Deployment is just the beginning. We provide ongoing, reliable support to ensure your software and websites continue to operate at peak performance.
          </p>
        </div>

        {/* Ongoing Support Grid */}
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.03)] p-8 sm:p-12 lg:p-16 mb-20 animate-fade-in-up">
          <div className="mb-10 text-center">
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">Possible Ongoing Support</h3>
            <p className="text-slate-500 font-medium">Everything you need to keep your digital assets running flawlessly.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {supportServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <div key={i} className="flex flex-col items-center text-center gap-3 group">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50/50 flex items-center justify-center border border-indigo-100 group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="font-bold text-slate-700 text-sm tracking-wide">{service.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Optional Maintenance Plans */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4">Optional Maintenance Plans</h3>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto">
              Choose a flexible support plan tailored to your operational needs. No hidden fees or fake pricing—quotes are strictly based on your specific project scope.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {maintenancePlans.map((plan, i) => (
              <div 
                key={i} 
                className={`relative bg-white rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-2 flex flex-col ${
                  plan.popular 
                    ? "border-indigo-500 shadow-[0_20px_50px_-10px_rgba(79,70,229,0.15)] ring-2 ring-indigo-500/10" 
                    : "border-slate-200/60 shadow-sm"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-[10px] font-bold uppercase tracking-widest py-1 px-4 rounded-full shadow-md whitespace-nowrap">
                    Most Popular
                  </span>
                )}
                
                <h4 className="text-xl font-bold text-slate-900 mb-3">{plan.title}</h4>
                <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8 min-h-[60px]">
                  {plan.desc}
                </p>

                <div className="space-y-4 mb-10 border-t border-slate-100 pt-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className={`mt-auto w-full py-3.5 rounded-xl text-sm font-bold uppercase tracking-wide text-center transition-all duration-300 ${
                    plan.popular
                      ? "bg-slate-900 text-white hover:bg-indigo-600 shadow-md"
                      : "bg-slate-50 text-slate-900 hover:bg-slate-200 border border-slate-200"
                  }`}
                >
                  Request a Quote
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
