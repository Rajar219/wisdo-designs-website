import { Sparkles, Mail, Laptop, Globe, Users } from "lucide-react";
import Trust from "../components/trust";

const positions = [
  {
    title: "Full Stack Engineer (React / Next.js)",
    type: "Remote / Contract",
    location: "Global Remote",
    desc: "We are seeking modern React & Next.js engineers with a strong eye for UI/UX animations and clean API design.",
  },
  {
    title: "AI Integration specialist",
    type: "Remote / Contract",
    location: "Global Remote",
    desc: "Experienced with LLMs, chatbot agents (WhatsApp / Web), workflow automation, and custom model connectors.",
  },
  {
    title: "UI/UX Figma Designer",
    type: "Remote / Contract",
    location: "Global Remote",
    desc: "Craft high-fidelity landing pages, software dashboards, and design libraries for startup founders.",
  }
];

export const metadata = {
  title: "Careers",
  description: "Join WISDO Designs to build high-performance software, custom applications, and workflow automation systems for global clients.",
};

export default function CareersPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="relative pt-28 pb-12 sm:pt-36 sm:pb-16 lg:pt-52 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden text-center">
        <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-purple-50/50 to-transparent -z-10" />
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md shadow-sm border border-purple-100/50 mb-8">
            <Sparkles className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-semibold tracking-wide text-slate-700">Remote Opportunities</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 drop-shadow-sm">
            Join the <span className="text-gradient">Core Team</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-2xl text-slate-500 leading-relaxed font-light max-w-3xl mx-auto">
            We operate as a global remote agency building high-performance software systems. We value engineering precision, client communication, and clean layout code.
          </p>
        </div>
      </section>

      {/* Perks Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-slate-100/60 shadow-inner relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 flex flex-col gap-4 text-center items-center">
            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
              <Laptop className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">100% Remote Workflow</h3>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              Work from anywhere in the world. We focus on results, clean code delivery, and client satisfaction over fixed office hours.
            </p>
          </div>
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 flex flex-col gap-4 text-center items-center">
            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Modern Architecture Stack</h3>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              We leverage clean React patterns, Next.js page routers, serverless structures, and advanced AI automation nodes.
            </p>
          </div>
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 flex flex-col gap-4 text-center items-center">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Collaborative Engineering</h3>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              Work alongside senior developers who prioritize clean lint rules, code formatting consistency, and modularity.
            </p>
          </div>
        </div>
      </section>

      {/* Positions Grid */}
      <section className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight text-center mb-12">Open Opportunities</h2>

          {positions.map((pos, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_20px_50px_-10px_rgba(79,70,229,0.05)] hover:border-indigo-100/50 flex flex-col sm:flex-row justify-between sm:items-center gap-6"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-500 bg-indigo-50 border border-indigo-100/50 px-3 py-1 rounded-full mb-3 inline-block">
                  {pos.type}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{pos.title}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-xl">{pos.desc}</p>
              </div>
              <a
                href={`mailto:wisdodesigns@gmail.com?subject=Application%20for%20${encodeURIComponent(pos.title)}`}
                className="inline-flex items-center justify-center px-6 py-3.5 bg-slate-900 text-white font-bold uppercase tracking-wide text-xs rounded-xl hover:bg-indigo-600 transition-all shadow-md hover:shadow-indigo-500/25 shrink-0"
              >
                Apply Now
              </a>
            </div>
          ))}

          {/* General Inquiries */}
          <div className="bg-indigo-50/50 rounded-2xl p-8 border border-indigo-100/50 text-center max-w-2xl mx-auto mt-16">
            <h3 className="text-lg font-bold text-slate-900 mb-2">No perfect role listed?</h3>
            <p className="text-sm text-slate-600 font-medium leading-relaxed mb-6">
              We are always looking for passionate builders. Drop us a mail with your portfolio, GitHub link, and resume, and we will get back to you!
            </p>
            <a
              href="mailto:wisdodesigns@gmail.com?subject=General%20Careers%20Inquiry"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white border border-indigo-100 hover:border-indigo-500/50 text-indigo-600 rounded-xl font-semibold shadow-sm transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Email Careers</span>
            </a>
          </div>
        </div>
      </section>

      <Trust />
    </div>
  );
}
