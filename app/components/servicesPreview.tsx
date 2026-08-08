import { AppWindow, ArrowRight, Cpu, Palette, Megaphone } from "lucide-react";
import Link from "next/link";

const serviceCategories = [
  {
    category: "Software Development",
    desc: "Bespoke tools and systems built to streamline your custom workflows.",
    icon: Cpu,
    accent: "text-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-100/50",
    deliverables: [
      "Custom business software",
      "POS and billing systems",
      "Inventory management",
      "Admin dashboards",
      "Business automation",
      "Database-driven applications"
    ]
  },
  {
    category: "Website Development",
    desc: "Clean, responsive, and performance-optimized digital storefronts and web apps.",
    icon: AppWindow,
    accent: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100/50",
    deliverables: [
      "Business websites",
      "E-commerce websites",
      "Portfolio websites",
      "Landing pages",
      "Responsive websites",
      "SEO-ready websites",
      "Website maintenance"
    ]
  },
  {
    category: "Designing",
    desc: "Creative visual solutions that establish strong brand identities and user experiences.",
    icon: Palette,
    accent: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-100/50",
    deliverables: [
      "Brand identity",
      "Logo design",
      "Social media creatives",
      "Posters and banners",
      "Marketing creatives",
      "UI/UX design"
    ]
  },
  {
    category: "Digital Marketing",
    desc: "Data-driven marketing strategies to increase reach and conversions.",
    icon: Megaphone,
    accent: "text-fuchsia-600",
    bg: "bg-fuchsia-50",
    border: "border-fuchsia-100/50",
    deliverables: [
      "SEO",
      "Google Business Profile optimization",
      "Social media marketing",
      "Content strategy",
      "Search visibility",
      "Digital campaign support"
    ]
  }
];

export default function ServicesPreview() {
  return (
    <section className="py-16 sm:py-20 lg:py-32 relative z-10 bg-slate-50/50 border-t border-slate-100 shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.02)] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50/30 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20 animate-fade-in-up">
          <span className="text-sm font-bold tracking-widest text-indigo-500 uppercase mb-4 block">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Professional Web Design & Custom Software Services by <span className="text-gradient">Wisdo Tech</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed font-light">
            We provide specialized, high-performance digital services segmented to scale your business operations from end-to-end.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {serviceCategories.map((group, groupIdx) => {
            const GroupIcon = group.icon;
            return (
              <div 
                key={groupIdx} 
                className="bg-white rounded-[2rem] p-8 sm:p-10 border border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-[0_20px_50px_-10px_rgba(79,70,229,0.1)] transition-all duration-500 group flex flex-col relative animate-fade-in-up"
                style={{ animationDelay: `${groupIdx * 150}ms`, animationFillMode: 'both' }}
              >
                <div className={`w-16 h-16 rounded-2xl ${group.bg} flex items-center justify-center ${group.accent} mb-8 shrink-0 border ${group.border} shadow-sm transition-transform duration-500 group-hover:scale-110`}>
                  <GroupIcon className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-4 group-hover:text-slate-800 transition-colors uppercase">
                  {group.category}
                </h3>
                
                <p className="text-base text-slate-500 leading-relaxed font-light mb-8 max-w-sm">
                  {group.desc}
                </p>

                <div className="flex-grow">
                  <h4 className="text-sm font-bold tracking-widest text-slate-900 uppercase mb-5">Key Deliverables</h4>
                  <ul className="space-y-3 mb-10">
                    {group.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className={`mt-1 rounded-full p-0.5 ${group.bg} ${group.accent}`}>
                           <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <span className="text-slate-600 font-medium text-sm leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  href="/services"
                  className={`mt-auto inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide transition-all duration-300 ${group.accent} hover:opacity-80`}
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}