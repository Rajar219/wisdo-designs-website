import { Briefcase, Layers, Rocket, MessageCircle, Code2, LifeBuoy } from "lucide-react";

const reasons = [
  {
    num: "01",
    title: "Business-Focused Solutions",
    desc: "We build around the actual needs of your business.",
    icon: Briefcase,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
    hoverBg: "group-hover:bg-indigo-600",
    hoverBorder: "group-hover:border-indigo-600"
  },
  {
    num: "02",
    title: "Multiple Digital Capabilities",
    desc: "Software, websites, design and digital marketing under one team.",
    icon: Layers,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    hoverBg: "group-hover:bg-emerald-600",
    hoverBorder: "group-hover:border-emerald-600"
  },
  {
    num: "03",
    title: "Startup-Friendly Approach",
    desc: "Professional digital solutions without unnecessary complexity.",
    icon: Rocket,
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-100",
    hoverBg: "group-hover:bg-orange-600",
    hoverBorder: "group-hover:border-orange-600"
  },
  {
    num: "04",
    title: "Direct Communication",
    desc: "Clear communication throughout the project.",
    icon: MessageCircle,
    color: "text-fuchsia-600",
    bg: "bg-fuchsia-50",
    border: "border-fuchsia-100",
    hoverBg: "group-hover:bg-fuchsia-600",
    hoverBorder: "group-hover:border-fuchsia-600"
  },
  {
    num: "05",
    title: "Modern Technology",
    desc: "Use appropriate modern technologies based on project requirements.",
    icon: Code2,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
    hoverBg: "group-hover:bg-blue-600",
    hoverBorder: "group-hover:border-blue-600"
  },
  {
    num: "06",
    title: "Long-Term Support",
    desc: "Support doesn't have to end after deployment.",
    icon: LifeBuoy,
    color: "text-rose-600",
    bg: "bg-rose-50",
    border: "border-rose-100",
    hoverBg: "group-hover:bg-rose-600",
    hoverBorder: "group-hover:border-rose-600"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28 lg:py-40 relative bg-white border-y border-slate-100 shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.02)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24 animate-fade-in-up">
          <span className="text-sm font-bold tracking-widest text-indigo-500 uppercase mb-4 block">
            The Wisdo Tech Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 sm:mb-8">
            Why Businesses Choose <span className="text-gradient">Wisdo Tech</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-500 font-light leading-relaxed">
            We partner with startups and ambitious businesses to build high-performance solutions. Our approach means you get exactly what your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <div 
                key={i}
                style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'both' }}
                className="group relative bg-white rounded-[2rem] p-8 lg:p-10 border border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_-10px_rgba(79,70,229,0.1)] transition-all duration-500 hover:-translate-y-2 animate-fade-in-up flex flex-col text-center sm:text-left items-center sm:items-start overflow-hidden"
              >
                {/* Background Number Watermark */}
                <div className="absolute -bottom-6 -right-4 text-[8rem] font-extrabold text-slate-50 opacity-50 group-hover:opacity-100 group-hover:-translate-y-4 transition-all duration-700 pointer-events-none select-none z-0">
                  {reason.num}
                </div>

                <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                  <div className={`w-16 h-16 rounded-2xl ${reason.bg} border ${reason.border} flex items-center justify-center ${reason.color} mb-8 ${reason.hoverBg} group-hover:text-white transition-colors duration-500 shadow-sm`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4 group-hover:text-indigo-600 transition-colors z-10">
                    <span className="text-indigo-500 mr-2 opacity-50 text-sm hidden sm:inline">{reason.num} —</span>
                    {reason.title}
                  </h3>
                  
                  <p className="text-base text-slate-500 font-medium leading-relaxed z-10">
                    {reason.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
