import WhyChooseUs from "../components/whyChooseUs";
import Technologies from "../components/technologies";
import { Target, Zap, PenTool, LifeBuoy, CheckCircle2 } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Wisdo Tech — Software & Web Solutions. We build software, websites, and tailored technology solutions to meet your business needs.",
  alternates: {
    canonical: "https://wisdodesigns.com/about",
  },
  openGraph: {
    title: "About Us | Wisdo Tech",
    description: "Learn about Wisdo Tech — Software & Web Solutions. We build software, websites, and tailored technology solutions to meet your business needs.",
    url: "https://wisdodesigns.com/about",
    type: "website",
    images: [
      {
        url: "/logo-transparent.png",
        width: 1200,
        height: 630,
        alt: "Wisdo Tech | Software & Web Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Wisdo Tech",
    description: "Learn about Wisdo Tech — Software & Web Solutions. We build software, websites, and tailored technology solutions to meet your business needs.",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-12 sm:pt-36 sm:pb-16 lg:pt-52 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden text-center">
        <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-emerald-50/50 to-transparent -z-10" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-200/30 blur-[130px] rounded-full mix-blend-multiply -z-10" />

        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/60 backdrop-blur-md shadow-sm border border-emerald-100/50 mb-8">
            <span className="text-sm font-semibold tracking-wide text-slate-700">Technology Designed for Business Growth</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 drop-shadow-sm">
            Practical <span className="text-gradient">Digital Solutions</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-2xl text-slate-500 leading-relaxed font-light max-w-3xl mx-auto">
            Wisdo Tech was created to help businesses access practical, modern digital solutions without unnecessary complexity.
          </p>
        </div>
      </section>

      {/* About Content & Focus Areas */}
      <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white relative z-10 border-y border-slate-100/60 shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.02)] overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Main About Text */}
          <div className="text-left animate-fade-in-up">
            <span className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-4 block">
              About WISDO TECH
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-8">
              Transforming Ideas Into <span className="text-gradient">Effective Solutions</span>
            </h2>
            
            <div className="space-y-6 text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
              <p>
                WISDO TECH is a growing software and web solutions brand focused on helping businesses establish, enhance, and scale their presence in the digital world.
              </p>
              <p>
                We specialize in website development, custom software development, UI/UX designing, and digital marketing, providing tailored solutions based on the unique needs and operational goals of our clients.
              </p>
              <p>
                From creating modern, responsive websites and engaging brand designs to developing custom software tools and improving online visibility through search engine optimization, we combine technology, creativity, and strategy to deliver meaningful digital solutions.
              </p>
              <p>
                At WISDO TECH, we believe every business deserves a dependable digital presence. Our goal is to transform ideas into practical, reliable technology solutions designed around real business needs.
              </p>
              
              <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl mt-8">
                <h3 className="font-bold text-slate-900 mb-2">Our Team</h3>
                <p className="text-slate-600 text-sm">
                  We are a dedicated team of technical professionals working together to deliver robust, scalable, and high-quality digital solutions for our clients.
                </p>
              </div>
            </div>
          </div>

          {/* Core Focus Areas */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '150ms' }}>
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 to-teal-500/5 rounded-[2.5rem] blur-2xl transform scale-105 pointer-events-none" />
            
            <div className="bg-slate-50 border border-slate-100 p-8 sm:p-10 rounded-[2.5rem] shadow-xl relative z-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight">Our Core Focus</h3>
              
              <div className="space-y-6">
                
                {/* 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Business Understanding</h4>
                    <p className="text-sm text-slate-500 mt-1 font-medium leading-relaxed">
                      We align our development directly with your operational goals and target audience.
                    </p>
                  </div>
                </div>

                {/* 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center shrink-0 border border-slate-200">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Technology</h4>
                    <p className="text-sm text-slate-500 mt-1 font-medium leading-relaxed">
                      Utilizing robust, scalable, and modern tech stacks tailored to the project requirements.
                    </p>
                  </div>
                </div>

                {/* 3 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 border border-teal-200">
                    <PenTool className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Creativity</h4>
                    <p className="text-sm text-slate-500 mt-1 font-medium leading-relaxed">
                      Delivering beautiful, engaging designs that elevate brand perception and user experience.
                    </p>
                  </div>
                </div>

                {/* 4 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center shrink-0 border border-teal-200">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Practical Solutions</h4>
                    <p className="text-sm text-slate-500 mt-1 font-medium leading-relaxed">
                      No unnecessary complexity. Just functional, clean software that solves actual problems.
                    </p>
                  </div>
                </div>

                {/* 5 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                    <LifeBuoy className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Long-term Support</h4>
                    <p className="text-sm text-slate-500 mt-1 font-medium leading-relaxed">
                      Standing by our work with continuous maintenance, bug fixes, and feature updates.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Existing Sections Reused for Consistency */}
      <WhyChooseUs />
      <Technologies />
      
    </div>
  );
}