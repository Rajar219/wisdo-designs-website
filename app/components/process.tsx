import { Search, Target, PenTool, Code2, ShieldCheck, Rocket, LifeBuoy } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "Understand the business and requirements.",
    icon: Search,
    colorClasses: {
      border: "border-indigo-100",
      bg: "bg-indigo-50",
      text: "text-indigo-600",
      shadow: "shadow-indigo-500/20",
      accent: "text-indigo-500"
    }
  },
  {
    num: "02",
    title: "Plan",
    desc: "Define scope, features, timeline and technical approach.",
    icon: Target,
    colorClasses: {
      border: "border-fuchsia-100",
      bg: "bg-fuchsia-50",
      text: "text-fuchsia-600",
      shadow: "shadow-fuchsia-500/20",
      accent: "text-fuchsia-500"
    }
  },
  {
    num: "03",
    title: "Design",
    desc: "Create the visual and user experience direction.",
    icon: PenTool,
    colorClasses: {
      border: "border-sky-100",
      bg: "bg-sky-50",
      text: "text-sky-600",
      shadow: "shadow-sky-500/20",
      accent: "text-sky-500"
    }
  },
  {
    num: "04",
    title: "Develop",
    desc: "Build and integrate the required solution.",
    icon: Code2,
    colorClasses: {
      border: "border-emerald-100",
      bg: "bg-emerald-50",
      text: "text-emerald-600",
      shadow: "shadow-emerald-500/20",
      accent: "text-emerald-500"
    }
  },
  {
    num: "05",
    title: "Test",
    desc: "Test functionality, responsiveness, performance and security.",
    icon: ShieldCheck,
    colorClasses: {
      border: "border-orange-100",
      bg: "bg-orange-50",
      text: "text-orange-600",
      shadow: "shadow-orange-500/20",
      accent: "text-orange-500"
    }
  },
  {
    num: "06",
    title: "Launch",
    desc: "Deploy the project and configure required services.",
    icon: Rocket,
    colorClasses: {
      border: "border-rose-100",
      bg: "bg-rose-50",
      text: "text-rose-600",
      shadow: "shadow-rose-500/20",
      accent: "text-rose-500"
    }
  },
  {
    num: "07",
    title: "Support",
    desc: "Provide maintenance, improvements and future development.",
    icon: LifeBuoy,
    colorClasses: {
      border: "border-blue-100",
      bg: "bg-blue-50",
      text: "text-blue-600",
      shadow: "shadow-blue-500/20",
      accent: "text-blue-500"
    }
  }
];

export default function Process() {
  return (
    <section className="py-20 sm:py-28 lg:py-40 relative bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24 animate-fade-in-up">
          <span className="text-sm font-bold tracking-widest text-indigo-500 uppercase mb-4 block">
            How We Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Our <span className="text-gradient">7-Step</span> Process
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-500 font-light leading-relaxed">
            We follow a streamlined, transparent methodology to ensure we deliver high-quality digital solutions that exactly match your business requirements.
          </p>
        </div>

        {/* Visual Timeline */}
        <div className="relative max-w-4xl mx-auto mt-12 lg:mt-20">
          
          {/* Vertical Connecting Line */}
          <div className="absolute top-4 bottom-4 left-8 md:left-1/2 w-[2px] bg-slate-100 md:-translate-x-[1px] -z-10" />

          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              const Icon = step.icon;
              
              return (
                <div 
                  key={idx} 
                  className="relative flex flex-col md:flex-row items-start md:items-center w-full group animate-fade-in-up"
                  style={{ animationDelay: `${idx * 150}ms`, animationFillMode: 'both' }}
                >
                  
                  {/* Icon Marker */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-4 border-white flex items-center justify-center z-10 shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <div className={`absolute inset-0 rounded-full border-2 ${step.colorClasses.border} ${step.colorClasses.bg} -z-10`} />
                    <Icon className={`w-5 h-5 md:w-6 md:h-6 ${step.colorClasses.text}`} />
                  </div>

                  {/* Content Box */}
                  <div className={`w-full pl-24 md:w-1/2 md:pl-0 flex flex-col ${isEven ? 'md:pr-16 md:items-end md:text-right' : 'md:pl-16 md:ml-auto md:items-start md:text-left'}`}>
                    
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.03)] group-hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.08)] group-hover:-translate-y-1 transition-all duration-300 w-full relative overflow-hidden">
                      
                      {/* Large Watermark Number */}
                      <div className={`absolute -bottom-4 ${isEven ? '-left-2' : '-right-2'} text-[6rem] font-black text-slate-50 opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none select-none`}>
                        {step.num}
                      </div>

                      <div className="relative z-10">
                        <span className={`text-xs font-black uppercase tracking-widest ${step.colorClasses.accent} mb-2 block`}>
                          Step {step.num}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
