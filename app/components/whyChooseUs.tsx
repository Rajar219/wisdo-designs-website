import { CheckCircle2, Zap, Bot, Layers } from "lucide-react";


const advantages = [
  "Startup Friendly Solutions",
  "Affordable Development",
  "Fast Delivery",
  "Modern Technologies",
  "Scalable Systems"
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 lg:py-40 relative bg-white border-y border-slate-100 shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.02)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
        
        <div className="animate-fade-in-up flex flex-col items-center lg:items-start text-center lg:text-left w-full">
          <h2 className="text-sm font-bold tracking-widest text-indigo-500 uppercase mb-4">
            Why Choose Us
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 sm:mb-8">
            Built for <span className="text-gradient">Growth</span> & <br className="hidden md:block"/> Performance
          </h3>
          <p className="text-base sm:text-lg lg:text-xl text-slate-500 font-light leading-relaxed mb-8 sm:mb-12 max-w-xl mx-auto lg:mx-0">
            We partner with startups and ambitious businesses to build scalable digital solutions. Our agile approach means you get high-quality software without the usual agency overhead.
          </p>

          <div className="grid sm:grid-cols-2 gap-y-8 gap-x-6">
            {advantages.map((adv, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-100/50 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                </div>
                <span className="font-bold text-slate-800 text-base tracking-tight">{adv}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full max-w-lg lg:max-w-none mx-auto lg:ml-auto animate-fade-in-up delay-200 lg:pl-10">
          
          {/* Vertical Connecting Line (Timeline) */}
          <div className="absolute left-[2.25rem] lg:left-[4.75rem] top-12 bottom-12 w-[2px] bg-slate-100 hidden sm:block" />

          <div className="flex flex-col gap-12 lg:gap-16 items-center sm:items-stretch w-full">
            
            {/* Fast Development */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 lg:gap-8 group relative z-10 text-center sm:text-left w-full">
              <div className="relative mt-1 shrink-0">
                <div className="absolute inset-0 bg-indigo-100 rounded-full scale-150 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 -z-10" />
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-white flex items-center justify-center text-indigo-600 border-2 border-indigo-50 group-hover:bg-indigo-600 group-hover:border-indigo-600 group-hover:text-white group-hover:-translate-y-2 group-hover:shadow-[0_15px_30px_-5px_rgba(79,70,229,0.4)] transition-all duration-500 shadow-sm relative overflow-hidden">
                   <div className="absolute -top-1 -right-1 lg:-top-2 lg:-right-2 text-[4rem] lg:text-[5rem] font-extrabold text-slate-100 group-hover:text-white/10 leading-none pointer-events-none transition-colors duration-500">1</div>
                   <Zap className="w-7 h-7 lg:w-8 lg:h-8 relative z-10" />
                </div>
              </div>
              <div className="pt-2">
                <h4 className="text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight mb-2 group-hover:text-indigo-600 transition-colors">Fast Development</h4>
                <p className="text-slate-500 font-medium leading-relaxed lg:text-lg max-w-sm mx-auto sm:mx-0">Quick delivery using modern technologies and efficient workflows.</p>
              </div>
            </div>

            {/* Smart Automation */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 lg:gap-8 group relative z-10 text-center sm:text-left w-full">
              <div className="relative mt-1 shrink-0">
                <div className="absolute inset-0 bg-fuchsia-100 rounded-full scale-150 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 -z-10" />
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-white flex items-center justify-center text-fuchsia-600 border-2 border-fuchsia-50 group-hover:bg-fuchsia-600 group-hover:border-fuchsia-600 group-hover:text-white group-hover:-translate-y-2 group-hover:shadow-[0_15px_30px_-5px_rgba(217,70,239,0.4)] transition-all duration-500 shadow-sm relative overflow-hidden">
                   <div className="absolute -top-1 -right-1 lg:-top-2 lg:-right-2 text-[4rem] lg:text-[5rem] font-extrabold text-slate-100 group-hover:text-white/10 leading-none pointer-events-none transition-colors duration-500">2</div>
                   <Bot className="w-7 h-7 lg:w-8 lg:h-8 relative z-10" />
                </div>
              </div>
              <div className="pt-2">
                <h4 className="text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight mb-2 group-hover:text-fuchsia-600 transition-colors">Smart Automation</h4>
                <p className="text-slate-500 font-medium leading-relaxed lg:text-lg max-w-sm mx-auto sm:mx-0">Automate repetitive business operations with custom systems.</p>
              </div>
            </div>

            {/* Scalable Systems */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 lg:gap-8 group relative z-10 text-center sm:text-left w-full">
              <div className="relative mt-1 shrink-0">
                <div className="absolute inset-0 bg-emerald-100 rounded-full scale-150 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 -z-10" />
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-white flex items-center justify-center text-emerald-600 border-2 border-emerald-50 group-hover:bg-emerald-600 group-hover:border-emerald-600 group-hover:text-white group-hover:-translate-y-2 group-hover:shadow-[0_15px_30px_-5px_rgba(16,185,129,0.4)] transition-all duration-500 shadow-sm relative overflow-hidden">
                   <div className="absolute -top-1 -right-1 lg:-top-2 lg:-right-2 text-[4rem] lg:text-[5rem] font-extrabold text-slate-100 group-hover:text-white/10 leading-none pointer-events-none transition-colors duration-500">3</div>
                   <Layers className="w-7 h-7 lg:w-8 lg:h-8 relative z-10" />
                </div>
              </div>
              <div className="pt-2">
                <h4 className="text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight mb-2 group-hover:text-emerald-600 transition-colors">Scalable Systems</h4>
                <p className="text-slate-500 font-medium leading-relaxed lg:text-lg max-w-sm mx-auto sm:mx-0">Digital solutions designed to grow with your business.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
