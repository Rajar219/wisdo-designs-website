import ServicesPreview from "./components/servicesPreview";
import Solutions from "./components/solutions";
import Technologies from "./components/technologies";
import Process from "./components/process";
import Security from "./components/security";
import Support from "./components/support";
import WhyChooseUs from "./components/whyChooseUs";
import ClientsSection from "./components/clients";
import BlogPreview from "./components/blogPreview";
import Faq from "./components/faq";
import Trust from "./components/trust";
import TrackedLink from "./components/TrackedLink";
import { ArrowRight, MessageCircle, Rocket, Bot, Layers, MonitorPlay } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wisdo Tech | Software Company & Web Development Experts",
  description: "Wisdo Tech is a leading Software Company offering Custom Software Development, Business Website Development, and Digital Marketing Services.",
  alternates: {
    canonical: "https://wisdodesigns.com",
  },
  openGraph: {
    title: "Wisdo Tech | Software Company & Web Development Experts",
    description: "Wisdo Tech is a leading Software Company offering Custom Software Development, Business Website Development, and Digital Marketing Services.",
    url: "https://wisdodesigns.com",
    type: "website",
    images: [
      {
        url: "/logo-transparent.png",
        width: 1200,
        height: 630,
        alt: "Wisdo Tech - Software Company & Web Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wisdo Tech | Software Company & Web Development Experts",
    description: "Wisdo Tech is a leading Software Company offering Custom Software Development, Business Website Development, and Digital Marketing Services.",
  },
};

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-56 lg:pb-40 overflow-hidden w-full">
        {/* Subtle Hero Gradient Background for Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-slate-50/50 -z-20" />
        
        {/* Subtle Hero Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] bg-blue-200/30 blur-[140px] rounded-full mix-blend-multiply -z-10" />
        <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] lg:w-[700px] lg:h-[700px] bg-slate-200/40 blur-[160px] rounded-full mix-blend-multiply -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-center relative z-10">

          <div className="max-w-2xl mx-auto text-center lg:text-left pt-2 lg:pt-0 animate-fade-in-up w-full flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center justify-center px-4.5 py-1.5 sm:px-5 sm:py-2 rounded-full bg-white/95 backdrop-blur-md shadow-[0_4px_16px_rgba(37,99,235,0.08)] border border-blue-100/80 mb-8 hover:scale-105 transition-transform duration-300 select-none">
              <span className="font-orbitron text-xs sm:text-sm font-bold tracking-[0.28em] text-blue-600 uppercase">
                WISDO TECH
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[5.5rem] font-extrabold leading-[1.2] lg:leading-[1.1] tracking-tight text-slate-900 mb-5 sm:mb-8 drop-shadow-sm w-full">
              Digital Solutions Built for <span className="text-gradient">Growing Businesses</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-2xl text-slate-500 leading-relaxed font-light max-w-xl mb-8 sm:mb-10 w-full text-center lg:text-left break-words">
              Software development, website development, creative design and digital marketing solutions built around your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-start w-full">
              <Link
                href="/contact"
                className="group w-full sm:w-auto relative flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl sm:rounded-full overflow-hidden transition-all duration-300 shadow-xl shadow-slate-900/10 hover:-translate-y-1 hover:shadow-blue-500/30"
              >
                <span className="relative z-10 font-bold tracking-wide text-base">Start Your Project</span>
                <ArrowRight className="w-5 h-5 sm:w-4 sm:h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              <TrackedLink
                href="/api/whatsapp"
                eventName="whatsapp_click"
                eventPayload={{ location: "hero" }}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 rounded-xl sm:rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/60 font-medium text-slate-700 text-base shadow-sm hover:bg-white hover:border-slate-300 transition-all duration-300 hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5 text-emerald-500 group-hover:text-emerald-600 transition-colors" />
                Chat with Wisdo Tech
              </TrackedLink>
            </div>

            {/* Trust Line */}
            <div className="mt-10 pt-6 border-t border-slate-200/50 w-full max-w-xl">
              <p className="text-sm sm:text-base font-medium text-slate-500 text-center lg:text-left">
                From idea to launch — we help businesses build, improve and grow digitally.
              </p>
            </div>
          </div>

          <div className="relative h-[550px] lg:h-[700px] w-full hidden lg:block perspective-1000">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-slate-500/5 rounded-full blur-[120px] animate-pulse" />

            {/* Main floating card */}
            <div className="absolute right-0 top-1/2 w-full max-w-[34rem] bg-white/60 backdrop-blur-2xl border border-white/60 rounded-[2.5rem] p-10 -translate-y-1/2 -rotate-2 hover:rotate-0 transition-all duration-700 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.08)] hover:shadow-[0_30px_80px_-20px_rgba(37,99,235,0.15)] z-10">
              <div className="flex items-center justify-between mb-10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                </div>
                <div className="text-xs font-bold tracking-wide text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100/50">
                  Dashboard Active
                </div>
              </div>

              <div className="space-y-5">
                <div className="h-4 w-1/3 bg-slate-100 rounded-full overflow-hidden relative">
                  <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-slate-200 to-slate-100 w-full animate-pulse" />
                </div>
                <div className="h-4 w-3/4 bg-slate-100 rounded-full overflow-hidden relative">
                  <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-slate-200 to-slate-100 w-full animate-pulse delay-75" />
                </div>
                <div className="h-4 w-2/3 bg-slate-100 rounded-full overflow-hidden relative">
                  <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-slate-200 to-slate-100 w-full animate-pulse delay-150" />
                </div>
              </div>

              <div className="mt-10 bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 border border-slate-100 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform duration-500" />
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/25 text-white">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-base font-bold text-slate-800">Business Automation</div>
                    <div className="text-sm font-medium text-slate-500 mt-1">Systems scaling elegantly</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Small floating badge */}
            <div className="absolute -left-12 top-1/4 min-w-max bg-white/90 backdrop-blur-md border border-white rounded-[2rem] p-6 shadow-xl shadow-slate-900/5 animate-[float_6s_ease-in-out_infinite] z-20 space-y-4">
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <Bot className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">AI Automation</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <Layers className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Scalable Systems</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                  <MonitorPlay className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Modern Tech Stack</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      <ServicesPreview />
      <WhyChooseUs />
      <ClientsSection />
      <Solutions />
      <Process />
      <Security />
      <Support />
      <Technologies />
      <BlogPreview />
      <Faq />
      <Trust />
    </div>
  );
}