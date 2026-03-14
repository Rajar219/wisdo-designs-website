import { MessageCircle, ArrowRight } from "lucide-react";

export default function Trust() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-40 text-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-900">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-indigo-500/20 blur-[130px] rounded-full -z-10" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-3xl rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3.5rem] p-6 sm:p-10 md:p-16 lg:p-24 border border-white/10 relative z-10 shadow-2xl animate-fade-in-up">
        <h3 className="text-3xl sm:text-4xl lg:text-[4.5rem] font-extrabold mb-6 sm:mb-8 text-white tracking-tight leading-[1.1] lg:leading-[1.05]">
          Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Scale</span> Your Vision?
        </h3>

        <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-2xl text-slate-300 leading-relaxed font-light mb-8 sm:mb-14">
          Let's build something extraordinary together. Partner with WISDO Designs to create powerful, modern software that drives real growth.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full">
          <a
            href="/contact"
            className="group w-full sm:w-auto relative inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-xl sm:rounded-full overflow-hidden transition-all duration-300 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-indigo-500/50 hover:-translate-y-1 hover:scale-105"
          >
            <span className="relative z-10 font-bold tracking-wide">Start Your Project</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          <a
            href="https://wa.me/919787362199"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 rounded-xl sm:rounded-full bg-white/10 backdrop-blur-md border border-white/20 font-medium text-white shadow-sm hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}