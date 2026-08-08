import { MonitorPlay, Smartphone, Database, Bot, AppWindow, Receipt, ArrowRight, Cpu, Package, Server, Wrench } from "lucide-react";
import Link from "next/link";

const serviceCategories = [
  {
    category: "Web & Mobile Development",
    desc: "Clean, responsive, and performance-optimized digital storefronts and apps.",
    icon: AppWindow,
    accent: "text-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-100/50",
    services: [
      {
        title: "Website Development",
        desc: "Clean, search-optimized websites designed for local boutiques, cafes, startups, and service brands.",
        icon: MonitorPlay,
      },
      {
        title: "Mobile App Development",
        desc: "Sleek iOS and Android applications developed to handle mobile orders, user accounts, and direct client interactions.",
        icon: Smartphone,
      }
    ]
  },
  {
    category: "Custom Business Software",
    desc: "Bespoke tools built to streamline your custom workflows.",
    icon: Database,
    accent: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100/50",
    services: [
      {
        title: "Custom Software Solutions",
        desc: "Bespoke software systems engineered from scratch to resolve your specific operational problems and workflows.",
        icon: Cpu,
      },
      {
        title: "Business Applications",
        desc: "Practical internal systems and client portal applications constructed to streamline daily operations.",
        icon: AppWindow,
      },
      {
        title: "Database Solutions",
        desc: "Reliable database architecture setups, migrations, and performance optimizations to store your data safely.",
        icon: Database,
      }
    ]
  },
  {
    category: "Retail & Inventory Systems",
    desc: "Lightweight, robust tooling for transactions and logistics.",
    icon: Receipt,
    accent: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-100/50",
    services: [
      {
        title: "POS & Billing Solutions",
        desc: "Easy-to-use billing software designed for shops and retail outlets to handle checkouts and transactions.",
        icon: Receipt,
      },
      {
        title: "Inventory Management",
        desc: "Structured stock tracking dashboards to check raw materials, catalog items, and stock alerts.",
        icon: Package,
      }
    ]
  },
  {
    category: "Cloud, Maintenance & AI",
    desc: "Next-generation infrastructure and automated tools.",
    icon: Bot,
    accent: "text-fuchsia-600",
    bg: "bg-fuchsia-50",
    border: "border-fuchsia-100/50",
    services: [
      {
        title: "AI Integrations",
        desc: "Practical integrations of artificial intelligence, such as automated WhatsApp replies or helpdesk tools.",
        icon: Bot,
      },
      {
        title: "Web Hosting & Deployment",
        desc: "Secure hosting, VPS allocations, custom server setups, and automated deployment configurations.",
        icon: Server,
      },
      {
        title: "Website Maintenance",
        desc: "Regular checkups, speed optimizations, script updates, security audits, and backups.",
        icon: Wrench,
      }
    ]
  }
];

export default function ServicesPreview() {
  return (
    <section className="py-16 sm:py-20 lg:py-32 relative z-10 bg-slate-50/50 border-t border-slate-100 shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.02)] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50/30 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-28 animate-fade-in-up">
          <span className="text-sm font-bold tracking-widest text-indigo-500 uppercase mb-4 block">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Professional Web Design & Custom Software Services by <span className="text-gradient">WISDO Designs</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed font-light">
            We provide specialized, high-performance digital services segmented to scale your business operations from end-to-end.
          </p>
        </div>

        <div className="flex flex-col gap-10 sm:gap-12 lg:gap-24">
          {serviceCategories.map((group, groupIdx) => {
            const GroupIcon = group.icon;
            return (
              <div 
                key={groupIdx} 
                className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start relative animate-fade-in-up"
                style={{ animationDelay: `${groupIdx * 150}ms`, animationFillMode: 'both' }}
              >
                
                {/* Visual Connector Line (Desktop) */}
                {groupIdx !== serviceCategories.length - 1 && (
                   <div className="absolute left-[2.25rem] top-24 bottom-[-6rem] w-[2px] bg-slate-200 hidden lg:block -z-10" />
                )}

                {/* Category Header Column */}
                <div className="lg:col-span-4 lg:sticky lg:top-32 relative z-10">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-5 w-full">
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${group.bg} flex items-center justify-center ${group.accent} shrink-0 border ${group.border} shadow-sm`}>
                      <GroupIcon className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>
                    <div className="pt-1 w-full text-center sm:text-left">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-2 sm:mb-2">
                        {group.category}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed max-w-sm mx-auto sm:mx-0">
                        {group.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service Items Column */}
                <div className="lg:col-span-8 w-full mt-6 lg:mt-0">
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                     {group.services.map((service, sIdx) => {
                       const ServiceIcon = service.icon;
                       return (
                         <div 
                           key={sIdx}
                           className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-[0_20px_50px_-10px_rgba(79,70,229,0.1)] transition-all duration-500 group flex flex-col items-center sm:items-start text-center sm:text-left w-full"
                         >
                           <div className={`w-14 h-14 sm:w-12 sm:h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 text-slate-600 group-hover:${group.bg} group-hover:${group.accent} transition-colors duration-500 border border-slate-100`}>
                             <ServiceIcon className="w-6 h-6 sm:w-5 sm:h-5" />
                           </div>
                           <h4 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-slate-800 transition-colors">
                             {service.title}
                           </h4>
                           <p className="text-sm text-slate-500 leading-relaxed font-light mb-6 flex-grow max-w-sm mx-auto sm:mx-0">
                             {service.desc}
                           </p>
                            <Link 
                              href="/services"
                              aria-label={`Learn more about ${service.title}`}
                              className={`mt-auto inline-flex items-center justify-center sm:justify-start gap-2 text-sm font-bold uppercase tracking-wide opacity-100 sm:opacity-0 group-hover:opacity-100 sm:translate-y-2 group-hover:translate-y-0 transition-all duration-300 ${group.accent}`}
                            >
                              <span>Learn More</span>
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                         </div>
                       );
                     })}
                   </div>
                </div>

              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}