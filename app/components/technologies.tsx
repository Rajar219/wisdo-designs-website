import { MonitorPlay, Server, Bot, Code2, Terminal, Database, Sparkles, Cpu, Globe, Zap, Network, Blocks } from "lucide-react";

const techGroups = [
  {
    category: "Web Development",
    icon: MonitorPlay,
    color: "from-blue-500 to-indigo-500",
    bg: "bg-white",
    border: "border-slate-100",
    shadow: "shadow-sm hover:shadow-xl hover:shadow-blue-500/10",
    highlight: false,
    skills: [
      { name: "React", icon: Globe },
      { name: "Next.js", icon: Blocks },
      { name: "HTML5", icon: Code2 },
      { name: "Tailwind CSS", icon: Palette },
    ],
  },
  {
    category: "Backend Systems",
    icon: Server,
    color: "from-emerald-500 to-teal-500",
    bg: "bg-white",
    border: "border-slate-100",
    shadow: "shadow-sm hover:shadow-xl hover:shadow-emerald-500/10",
    highlight: false,
    skills: [
      { name: "Node.js", icon: Terminal },
      { name: "Python", icon: Code2 },
      { name: "PHP", icon: Database },
    ],
  },
  {
    category: "AI & Automation",
    icon: Bot,
    color: "from-indigo-400 via-purple-500 to-fuchsia-500",
    bg: "bg-gradient-to-b from-indigo-900 via-slate-900 to-slate-900",
    border: "border-indigo-500/30",
    shadow: "shadow-[0_0_40px_-10px_rgba(99,102,241,0.5)] hover:shadow-[0_0_60px_-15px_rgba(168,85,247,0.6)]",
    highlight: true,
    skills: [
      { name: "AI Chatbots", icon: Sparkles },
      { name: "AI Customer Support Automation", icon: Zap },
      { name: "AI Tools Integration", icon: Cpu },
      { name: "LLM / AI Integrations", icon: Network },
    ],
  }
];

// Placeholder Palette icon since we didn't import it in the group above, let's just make a small inline component or import it.
import { Palette } from "lucide-react";

export default function Technologies() {
  return (
    <section className="py-16 sm:py-20 lg:py-32 relative z-10 bg-slate-50 border-y border-slate-100/60 shadow-inner overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-100/40 blur-[120px] rounded-full mix-blend-multiply pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100/40 blur-[100px] rounded-full mix-blend-multiply pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-24 animate-fade-in-up">
          <h2 className="text-sm font-bold tracking-widest text-indigo-500 uppercase mb-4">
            Our Stack
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Technologies & <span className="text-gradient">Tools</span> We Use
          </h3>
          <p className="text-base sm:text-lg lg:text-xl text-slate-500 font-light leading-relaxed">
            We use modern technologies and AI-powered tools to build scalable digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {techGroups.map((group, i) => {
            const MainIcon = group.icon;
            const delay = `delay-[${i * 150}ms]`;
            const isHighlight = group.highlight;

            return (
              <div
                key={i}
                className={`relative group rounded-[1.5rem] p-8 lg:p-10 border ${group.border} ${group.bg} ${group.shadow} transition-all duration-500 hover:-translate-y-4 animate-fade-in-up ${delay} flex flex-col`}
              >
                {/* Subtle gradient border effect for highlight card */}
                {isHighlight && (
                  <div className="absolute inset-0 rounded-[1.5rem] p-[1px] bg-gradient-to-b from-indigo-500/50 to-purple-500/10 pointer-events-none -z-10" />
                )}

                <div className="flex flex-col items-center text-center gap-5 mb-8">
                  <div className={`w-20 h-20 rounded-[1.25rem] flex items-center justify-center transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3 ${isHighlight ? 'bg-indigo-500/10 shadow-[0_0_30px_rgba(99,102,241,0.3)]' : 'bg-slate-50 group-hover:bg-slate-100'}`}>
                    <div className={`bg-gradient-to-br ${group.color} ${isHighlight ? 'w-12 h-12' : 'w-10 h-10'} rounded-xl flex items-center justify-center text-white shadow-md`}>
                      <MainIcon className={isHighlight ? "w-6 h-6" : "w-5 h-5"} />
                    </div>
                  </div>
                  <h4 className={`text-2xl font-bold tracking-tight ${isHighlight ? 'text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]' : 'text-slate-900'}`}>
                    {group.category}
                  </h4>
                </div>

                <div className="flex flex-col gap-3 mt-auto">
                  {group.skills.map((skill, j) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div
                        key={j}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-colors duration-300 ${isHighlight
                            ? 'bg-slate-800/50 border-slate-700/50 text-indigo-100 hover:bg-slate-700 hover:border-indigo-500/50'
                            : 'bg-slate-50 border-slate-100 text-slate-600 hover:bg-white hover:border-slate-200 hover:shadow-sm'
                          }`}
                      >
                        <SkillIcon className={`w-4 h-4 shrink-0 ${isHighlight ? 'text-indigo-400' : 'text-slate-400'}`} />
                        <span className="text-sm font-semibold tracking-wide">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
