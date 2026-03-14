import { Search, PenTool, Hammer, Rocket } from "lucide-react";

export default function Process() {
  return (
    <section className="py-16 sm:py-20 lg:py-40 relative bg-white border-y border-slate-100 shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.02)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-32 animate-fade-in-up">
          <h2 className="text-sm font-bold tracking-widest text-indigo-500 uppercase mb-4">
            How We Work
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            A Proven <span className="text-gradient">Process</span>
          </h3>
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-500 font-light leading-relaxed">
            We follow a streamlined, transparent methodology to ensure we deliver high-quality digital products on time without the agency bloat.
          </p>
        </div>

        {/* Process Flow Visualization */}
        <div className="relative mt-8 lg:mt-0">
          {/* Desktop connecting line */}
          <div className="absolute top-[3.5rem] left-[10%] w-[80%] h-[2px] bg-indigo-100/60 hidden lg:block -z-10" />
          
          {/* Mobile connecting line */}
          <div className="absolute top-[10%] bottom-[10%] left-[2.75rem] w-[2px] bg-indigo-100/60 lg:hidden -z-10" />

          <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8">
            
            {/* Step 1: Discover */}
            <div className="flex flex-col items-center gap-5 lg:gap-8 group text-center w-full animate-fade-in-up">
              <div className="relative shrink-0">
                <div className="absolute inset-0 bg-indigo-100 rounded-full scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10" />
                <div className="w-20 h-20 lg:w-28 lg:h-28 rounded-full bg-white border-4 border-indigo-50/50 shadow-xl shadow-slate-200/50 flex flex-col items-center justify-center group-hover:border-indigo-500 group-hover:-translate-y-2 group-hover:shadow-indigo-500/20 transition-all duration-500">
                  <span className="text-[10px] lg:text-xs font-bold text-slate-400 mb-0.5 lg:mb-1 tracking-widest group-hover:text-indigo-400 transition-colors">01</span>
                  <Search className="w-6 h-6 lg:w-8 lg:h-8 text-indigo-600" />
                </div>
              </div>
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left w-full">
                <h4 className="text-xl lg:text-2xl font-bold text-slate-900 mb-2 lg:mb-3 group-hover:text-indigo-600 transition-colors tracking-tight">Discover</h4>
                <p className="text-sm lg:text-base text-slate-500 font-light leading-relaxed max-w-[16rem] mx-auto sm:mx-0">We analyze your goals, audience, and challenges to lay the perfect digital foundation.</p>
              </div>
            </div>

            {/* Step 2: Design */}
            <div className="flex flex-col items-center gap-5 lg:gap-8 group text-center w-full animate-fade-in-up delay-[150ms]">
              <div className="relative shrink-0">
                <div className="absolute inset-0 bg-fuchsia-100 rounded-full scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10" />
                <div className="w-20 h-20 lg:w-28 lg:h-28 rounded-full bg-white border-4 border-fuchsia-50/50 shadow-xl shadow-slate-200/50 flex flex-col items-center justify-center group-hover:border-fuchsia-500 group-hover:-translate-y-2 group-hover:shadow-fuchsia-500/20 transition-all duration-500">
                  <span className="text-[10px] lg:text-xs font-bold text-slate-400 mb-0.5 lg:mb-1 tracking-widest group-hover:text-fuchsia-400 transition-colors">02</span>
                  <PenTool className="w-6 h-6 lg:w-8 lg:h-8 text-fuchsia-600" />
                </div>
              </div>
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left w-full">
                <h4 className="text-xl lg:text-2xl font-bold text-slate-900 mb-2 lg:mb-3 group-hover:text-fuchsia-600 transition-colors tracking-tight">Design</h4>
                <p className="text-sm lg:text-base text-slate-500 font-light leading-relaxed max-w-[16rem] mx-auto sm:mx-0">Our designers craft wireframes and beautiful UI/UX systems to bring the vision to life.</p>
              </div>
            </div>

            {/* Step 3: Build */}
            <div className="flex flex-col items-center gap-5 lg:gap-8 group text-center w-full animate-fade-in-up delay-[300ms]">
              <div className="relative shrink-0">
                <div className="absolute inset-0 bg-sky-100 rounded-full scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10" />
                <div className="w-20 h-20 lg:w-28 lg:h-28 rounded-full bg-white border-4 border-sky-50/50 shadow-xl shadow-slate-200/50 flex flex-col items-center justify-center group-hover:border-sky-500 group-hover:-translate-y-2 group-hover:shadow-sky-500/20 transition-all duration-500">
                  <span className="text-[10px] lg:text-xs font-bold text-slate-400 mb-0.5 lg:mb-1 tracking-widest group-hover:text-sky-400 transition-colors">03</span>
                  <Hammer className="w-6 h-6 lg:w-8 lg:h-8 text-sky-600" />
                </div>
              </div>
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left w-full">
                <h4 className="text-xl lg:text-2xl font-bold text-slate-900 mb-2 lg:mb-3 group-hover:text-sky-600 transition-colors tracking-tight">Build</h4>
                <p className="text-sm lg:text-base text-slate-500 font-light leading-relaxed max-w-[16rem] mx-auto sm:mx-0">We engineer scalable backend architecture and rigorously test across platforms.</p>
              </div>
            </div>

            {/* Step 4: Launch */}
            <div className="flex flex-col items-center gap-5 lg:gap-8 group text-center w-full animate-fade-in-up delay-[450ms]">
              <div className="relative shrink-0">
                <div className="absolute inset-0 bg-emerald-100 rounded-full scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10" />
                <div className="w-20 h-20 lg:w-28 lg:h-28 rounded-full bg-white border-4 border-emerald-50/50 shadow-xl shadow-slate-200/50 flex flex-col items-center justify-center group-hover:border-emerald-500 group-hover:-translate-y-2 group-hover:shadow-emerald-500/20 transition-all duration-500">
                  <span className="text-[10px] lg:text-xs font-bold text-slate-400 mb-0.5 lg:mb-1 tracking-widest group-hover:text-emerald-400 transition-colors">04</span>
                  <Rocket className="w-6 h-6 lg:w-8 lg:h-8 text-emerald-600" />
                </div>
              </div>
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left w-full">
                <h4 className="text-xl lg:text-2xl font-bold text-slate-900 mb-2 lg:mb-3 group-hover:text-emerald-600 transition-colors tracking-tight">Launch</h4>
                <p className="text-sm lg:text-base text-slate-500 font-light leading-relaxed max-w-[16rem] mx-auto sm:mx-0">A seamless deployment to production followed by continuous structural support.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
