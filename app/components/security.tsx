import { ShieldCheck, Lock, Shield, Server, Key, FileCode2, Smartphone, Zap, Search, Database } from "lucide-react";

const securityFeatures = [
  { name: "HTTPS / SSL", icon: Lock },
  { name: "Secure Authentication", icon: Key },
  { name: "Input Validation", icon: FileCode2 },
  { name: "API Protection", icon: Shield },
  { name: "Database Security", icon: Database },
  { name: "Security Headers", icon: Server },
  { name: "Backup Strategy", icon: ShieldCheck }
];

const performanceFeatures = [
  { name: "Responsive Design", icon: Smartphone },
  { name: "Performance Optimization", icon: Zap },
  { name: "SEO Technical Setup", icon: Search }
];

export default function Security() {
  return (
    <section className="py-20 sm:py-28 lg:py-36 relative bg-slate-900 overflow-hidden text-slate-300">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-indigo-500/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-24 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 text-emerald-400 text-sm font-bold tracking-widest uppercase mb-6 shadow-sm">
            <ShieldCheck className="w-4 h-4" /> Core Principles
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Built With Security & Performance in Mind
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
            Engineered from the ground up by our in-house cyber security experts to ensure your data stays protected and your applications run blazingly fast.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Security Column (Spans 2 columns on lg) */}
          <div className="lg:col-span-2 bg-slate-800/30 border border-slate-700/50 rounded-3xl p-8 sm:p-10 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-slate-700/50">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                <Lock className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">Security Practices</h3>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-y-6 gap-x-8">
              {securityFeatures.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 transition-colors">
                      <Icon className="w-4 h-4 text-slate-400 group-hover:text-indigo-400 transition-colors" />
                    </div>
                    <span className="font-semibold text-slate-300 group-hover:text-white transition-colors">{feature.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Performance Column */}
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-3xl p-8 sm:p-10 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-slate-700/50">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                <Zap className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">Performance</h3>
            </div>
            
            <div className="flex flex-col gap-6">
              {performanceFeatures.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-colors">
                      <Icon className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                    </div>
                    <span className="font-semibold text-slate-300 group-hover:text-white transition-colors">{feature.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
