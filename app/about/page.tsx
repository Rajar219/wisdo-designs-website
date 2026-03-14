import WhyChooseUs from "../components/whyChooseUs";
import Technologies from "../components/technologies";
import { Sparkles, Target, Users, Zap } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-28 pb-12 sm:pt-36 sm:pb-16 lg:pt-52 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-purple-50/50 to-transparent -z-10" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-indigo-200/40 blur-[130px] rounded-full mix-blend-multiply -z-10" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-200/40 blur-[120px] rounded-full mix-blend-multiply -z-10" />

        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md shadow-sm border border-purple-100/50 mb-8">
            <Sparkles className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-semibold tracking-wide text-slate-700">The Agency Behind the Magic</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 drop-shadow-sm">
            Building the <span className="text-gradient">Future</span> <br/> of Digital Experiences
          </h1>
          
          <p className="text-base sm:text-lg lg:text-2xl text-slate-500 leading-relaxed font-light max-w-3xl mx-auto">
            WISDO Designs supports startups and modern enterprises by engineering sophisticated digital products that rapidly accelerate growth.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white relative z-10 border-y border-slate-100/60 shadow-inner overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-center">
          
          <div className="order-2 md:order-1 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 to-purple-500/5 rounded-[2.5rem] blur-2xl transform scale-105 pointer-events-none" />
            <div className="bg-slate-50 border border-slate-100 p-10 lg:p-14 rounded-[2.5rem] shadow-xl relative z-10 text-center md:text-left">
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 mx-auto md:mx-0 max-w-lg">
                To democratize enterprise-grade technology for startups and growing businesses. We believe every ambitious team deserves scalable, highly-performant software architecture without the massive agency overhead.
              </p>
              
              <div className="space-y-8 md:space-y-6">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <div className="w-14 h-14 md:w-12 md:h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Precision Engineering</h4>
                    <p className="text-slate-500 mt-1">Building architectures that don't just work today, but scale seamlessly tomorrow.</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <div className="w-14 h-14 md:w-12 md:h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Partnership Mindset</h4>
                    <p className="text-slate-500 mt-1 max-w-sm mx-auto md:mx-0">We don't just write code. We operate as your dedicated technical partners.</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <div className="w-14 h-14 md:w-12 md:h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Radical Efficiency</h4>
                    <p className="text-slate-500 mt-1 max-w-sm mx-auto md:mx-0">Deploying automation and AI integrations to massively reduce your operational drag.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 text-center md:text-left">
            <h2 className="text-sm font-bold tracking-widest text-indigo-500 uppercase mb-4">
              The Big Picture
            </h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Empowering Small Teams with Massive Tech
            </h3>
            <p className="text-base sm:text-lg text-slate-500 leading-relaxed font-light mb-8">
              WISDO Designs was founded with a singular vision: to bridge the technical gap for startups. 
              Too often, best-in-class UI/UX and scalable microservices are reserved for massive corporations.
              <br/><br/>
              We bring that exact same high-end execution to agile, modern businesses. From crafting beautiful interfaces in Figma to deploying AI-powered automated backends, we are your comprehensive tech laboratory.
            </p>
          </div>

        </div>
      </section>

      {/* Existing Sections Reused for Consistency */}
      <WhyChooseUs />
      <Technologies />
      
    </div>
  );
}