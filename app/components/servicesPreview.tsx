import { MonitorPlay, Smartphone, Database, PenTool, TrendingUp, Bot, AppWindow, Receipt, ArrowRight } from "lucide-react";

const serviceCategories = [
  {
    category: "Development Solutions",
    desc: "Scalable engineering for modern web and mobile platforms.",
    icon: AppWindow,
    accent: "text-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-100/50",
    services: [
      {
        title: "Business Website Development",
        desc: "Professional websites for real estate businesses, boutiques, cafes, restaurants, tourist services, and local companies.",
        icon: MonitorPlay,
      },
      {
        title: "Mobile App Development",
        desc: "Custom mobile iOS & Android applications for seamless orders, bookings, and business management.",
        icon: Smartphone,
      },
      {
        title: "Custom Website & Application Development",
        desc: "Fully customizable modern websites and business applications tailored perfectly to your specific workflows.",
        icon: AppWindow,
      }
    ]
  },
  {
    category: "Business Systems",
    desc: "Robust internal tools designed to streamline daily operations.",
    icon: Database,
    accent: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100/50",
    services: [
      {
        title: "Retail Billing & POS Software",
        desc: "Smart billing systems for shops equipped with precise product management and sales tracking capabilities.",
        icon: Receipt,
      },
      {
        title: "Business Automation Systems",
        desc: "Automate heavy manual workflows such as reservations, customer relationships, and core daily operations.",
        icon: Database,
      }
    ]
  },
  {
    category: "Growth & Marketing",
    desc: "Data-driven creative strategies to scale your revenue.",
    icon: TrendingUp,
    accent: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-100/50",
    services: [
      {
        title: "Digital Marketing",
        desc: "Advanced SEO, tactical social media marketing, and exponential growth strategies to conquer online visibility.",
        icon: TrendingUp,
      },
      {
        title: "Brand Design & Marketing Creatives",
        desc: "Professional banner styling, flyer creation, poster design, and premium social media creatives.",
        icon: PenTool,
      }
    ]
  },
  {
    category: "AI Solutions",
    desc: "Intelligent automated tools for the next-generation enterprise.",
    icon: Bot,
    accent: "text-fuchsia-600",
    bg: "bg-fuchsia-50",
    border: "border-fuchsia-100/50",
    services: [
      {
        title: "AI Chatbot Development",
        desc: "Deploy intelligent AI chatbots across websites and WhatsApp to instantly handle customer queries and support automatically.",
        icon: Bot,
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
          <h2 className="text-sm font-bold tracking-widest text-indigo-500 uppercase mb-4">
            What We Do
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Our Core <span className="text-gradient">Services</span>
          </h3>
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
                style={{ animationDelay: `${groupIdx * 150}ms` }}
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
                      <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-2 sm:mb-2">
                        {group.category}
                      </h4>
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
                           <h5 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-slate-800 transition-colors">
                             {service.title}
                           </h5>
                           <p className="text-sm text-slate-500 leading-relaxed font-light mb-6 flex-grow max-w-sm mx-auto sm:mx-0">
                             {service.desc}
                           </p>
                           <div className={`mt-auto inline-flex items-center justify-center sm:justify-start gap-2 text-sm font-bold uppercase tracking-wide opacity-100 sm:opacity-0 group-hover:opacity-100 sm:translate-y-2 group-hover:translate-y-0 transition-all duration-300 ${group.accent}`}>
                             <span>Learn More</span>
                             <ArrowRight className="w-4 h-4" />
                           </div>
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