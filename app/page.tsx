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
import { ArrowRight, ArrowUpRight, MessageCircle, Bot, Layers, Monitor, MonitorPlay, Rocket } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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
      {/* ================= MOBILE HERO SECTION (High-Definition Cinematic Composition & Prominent Big W) — lg:hidden ================= */}
      <section className="lg:hidden relative w-full overflow-hidden pt-24 xs:pt-26 sm:pt-28 pb-10 xs:pb-12 flex flex-col items-center select-none">
        {/* Full Cinematic Hero Background with Rich Emerald Lighting & Prominently Positioned Big W */}
        <div className="absolute inset-0 -z-30 overflow-hidden">
          <Image
            src="/hero-green.png"
            alt="Wisdo Tech Seasonal Emerald Landscape with Big W Emblem"
            fill
            priority
            unoptimized
            className="object-cover object-[68%_16%] sm:object-[70%_16%] md:object-[70%_center] select-none pointer-events-none scale-[1.01] saturate-[1.08] contrast-[1.06] brightness-[1.01]"
            sizes="100vw"
          />
        </div>

        {/* Seamless Soft Cloud Glow at Top-Left for Headline Contrast with Natural Organic Falloff */}
        <div className="absolute top-0 left-0 w-full h-[360px] bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.30)_40%,transparent_70%)] -z-20 pointer-events-none" />

        {/* Seamless Soft Cloud-Like Fog Transition Merging Hero into 'WHAT WE DO' with Zero Hard Seam */}
        <div className="absolute inset-x-0 bottom-0 h-36 sm:h-44 bg-gradient-to-t from-white via-white/85 via-white/30 to-transparent -z-20 pointer-events-none" />

        {/* Top Content: Badge, Left-Aligned Headline, Description, Translucent Glass CTAs & Glassmorphism Feature Panel */}
        <div className="w-full max-w-[350px] xs:max-w-[380px] sm:max-w-md md:max-w-xl mx-auto px-4 xs:px-5 flex flex-col items-start text-left relative z-10 animate-fade-in-up">
          
          {/* Seasonal Brand Badge with Generous Header Clearance */}
          <div className="inline-flex items-center justify-center px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md shadow-2xs border border-emerald-300/70 mb-2.5 sm:mb-3">
            <span className="font-orbitron text-[10.5px] xs:text-[11px] font-bold tracking-[0.22em] text-emerald-600 uppercase">
              WISDO TECH
            </span>
          </div>

          {/* Headline Matching Desktop Typography: Dark Navy with Emerald-Green Emphasis on Businesses */}
          <h1 className="text-[1.9rem] xs:text-[2.1rem] sm:text-4xl font-extrabold leading-[1.14] tracking-[-0.025em] text-slate-900 mb-2.5 sm:mb-3">
            Digital Solutions<br />
            Built for Growing<br />
            <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent">Businesses</span>
          </h1>

          {/* Description — Pure White (#FFFFFF) with Clean Contrast & Zero Boxed Panel */}
          <p className="text-xs xs:text-[13.5px] sm:text-sm text-white leading-[1.65] font-medium max-w-[280px] xs:max-w-[310px] sm:max-w-md mb-4.5 sm:mb-5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]">
            Software development, website development, creative design and digital marketing solutions built around your business.
          </p>

          {/* Futuristic Stacked Mobile CTA Buttons — Refined Glassmorphism Revealing Big W Behind */}
          <div className="flex flex-col gap-2.5 w-full">
            {/* Primary CTA: Refined Dark Glassmorphism with Subtle Emerald Edge Highlight & Elegant Arrow Interaction */}
            <Link
              href="/contact"
              className="group relative w-full h-12 xs:h-12.5 px-5 rounded-full bg-slate-950/90 hover:bg-slate-950 backdrop-blur-xl text-white font-bold tracking-wide inline-flex items-center justify-between border border-emerald-400/50 hover:border-emerald-400/75 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),0_4px_22px_rgba(5,150,105,0.22)] active:scale-[0.98] transition-all duration-300"
            >
              <span className="text-xs xs:text-sm font-bold text-white tracking-wide drop-shadow-2xs">
                Start Your Project
              </span>

              <span className="w-8 h-8 rounded-full bg-emerald-500/25 border border-emerald-400/60 flex items-center justify-center text-emerald-300 group-hover:bg-emerald-500 group-hover:text-white group-hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xs shrink-0">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300 ease-out" />
              </span>
            </Link>

            {/* Secondary CTA: Light Frosted-Glass Treatment with Emerald WhatsApp-style Icon Badge */}
            <TrackedLink
              href="/api/whatsapp"
              eventName="whatsapp_click"
              eventPayload={{ location: "hero" }}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full h-12 xs:h-12.5 pl-2.5 pr-5 rounded-full bg-white/80 hover:bg-white/95 backdrop-blur-xl border border-white/95 hover:border-emerald-300/80 text-slate-900 text-xs xs:text-sm font-bold inline-flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.85),0_2px_14px_rgba(0,0,0,0.06)] active:scale-[0.98] transition-all duration-300"
            >
              <span className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <MessageCircle className="w-4 h-4 fill-white/20 text-white" />
                </span>

                <span className="font-bold text-slate-900 text-xs xs:text-sm tracking-tight">
                  Chat with Wisdo Tech
                </span>
              </span>

              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:translate-x-0.5 transition-transform duration-300 shrink-0" />
            </TrackedLink>
          </div>

          {/* Refined Glassmorphism Feature Panel with Single-Layer Frosted Glass & Crisp Badges */}
          <div className="w-full rounded-2xl bg-white/70 backdrop-blur-md border border-white/85 shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-2 xs:p-2.5 mt-3.5">
            <div className="grid grid-cols-3 divide-x divide-slate-200/50">
              {/* Feature 1: AI Automation */}
              <div className="flex flex-col items-center justify-center text-center px-1 py-1.5 group/card">
                <div className="w-8 h-8 xs:w-8.5 xs:h-8.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-1.5 shadow-2xs group-hover/card:scale-105 transition-transform duration-200">
                  <Bot className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-[11px] font-bold text-slate-800 leading-[1.25] tracking-tight">
                  AI<br />Automation
                </span>
              </div>

              {/* Feature 2: Scalable Systems */}
              <div className="flex flex-col items-center justify-center text-center px-1 py-1.5 group/card">
                <div className="w-8 h-8 xs:w-8.5 xs:h-8.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-1.5 shadow-2xs group-hover/card:scale-105 transition-transform duration-200">
                  <Layers className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-[11px] font-bold text-slate-800 leading-[1.25] tracking-tight">
                  Scalable<br />Systems
                </span>
              </div>

              {/* Feature 3: Modern Tech Stack */}
              <div className="flex flex-col items-center justify-center text-center px-1 py-1.5 group/card">
                <div className="w-8 h-8 xs:w-8.5 xs:h-8.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-1.5 shadow-2xs group-hover/card:scale-105 transition-transform duration-200">
                  <Monitor className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-[11px] font-bold text-slate-800 leading-[1.25] tracking-tight">
                  Modern<br />Tech Stack
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= DESKTOP HERO SECTION (Approved 16:9 Layout with Telemetry Card) — hidden lg:block ================= */}
      <section className="hidden lg:block relative pt-48 pb-36 overflow-hidden w-full">
        {/* Desktop Hero Background (Supplied 16:9 Landscape Artwork) */}
        <div className="absolute inset-0 -z-30 overflow-hidden">
          <Image
            src="/hero-green.png"
            alt="Wisdo Tech Seasonal Emerald Landscape"
            fill
            priority
            quality={95}
            className="object-cover object-right select-none pointer-events-none"
            sizes="100vw"
          />
        </div>

        {/* Desktop Only: delicate soft light gradient confined strictly to the left text column */}
        <div className="absolute inset-y-0 left-0 w-7/12 bg-gradient-to-r from-white/80 via-white/40 to-transparent -z-20 pointer-events-none" />

        {/* Grounding Gradient: subtle bottom fade softly merging hero into the white section below */}
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-white via-white/50 to-transparent -z-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 gap-16 items-center relative z-10">

          {/* Hero Content Container — Approved Desktop Layout */}
          <div className="max-w-2xl text-left animate-fade-in-up w-full flex flex-col items-start">
            
            {/* Seasonal Brand Badge */}
            <div className="inline-flex items-center justify-center px-4.5 py-1.5 rounded-full bg-white/90 backdrop-blur-xs shadow-xs border border-emerald-200/80 mb-6 select-none">
              <span className="font-orbitron text-xs font-bold tracking-[0.24em] text-emerald-600 uppercase">
                WISDO TECH
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[4.75rem] font-extrabold leading-[1.1] tracking-tight text-slate-900 mb-5 w-full">
              Digital Solutions Built for <span className="text-gradient">Growing Businesses</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-slate-700 leading-relaxed font-normal max-w-xl mb-8 text-left">
              Software development, website development, creative design and digital marketing solutions built around your business.
            </p>

            {/* Action Buttons — Approved Desktop CTAs */}
            <div className="flex flex-row gap-4 justify-start w-full">
              <Link
                href="/contact"
                className="group relative flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full overflow-hidden transition-all duration-300 shadow-md shadow-slate-900/10 hover:-translate-y-0.5 hover:shadow-emerald-500/25 active:scale-95"
              >
                <span className="relative z-10 font-bold tracking-wide text-base">Start Your Project</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              <TrackedLink
                href="/api/whatsapp"
                eventName="whatsapp_click"
                eventPayload={{ location: "hero" }}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200/90 font-medium text-slate-700 text-base shadow-xs hover:bg-white hover:border-emerald-300 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
              >
                <MessageCircle className="w-5 h-5 text-emerald-500 group-hover:text-emerald-600 transition-colors" />
                Chat with Wisdo Tech
              </TrackedLink>
            </div>

            {/* Supporting Tagline */}
            <div className="mt-7 pt-5 border-t border-slate-300/60 w-full max-w-xl">
              <p className="text-sm font-semibold text-slate-600 text-left leading-relaxed">
                From idea to launch — we help businesses build, improve and grow digitally.
              </p>
            </div>
          </div>

          {/* Desktop Right Column — Approved Floating Illustration that NEVER Obscures Artwork */}
          <div className="relative h-[620px] w-full perspective-1000">
            
            {/* Sleek, Non-Obtrusive Dashboard Card Positioned Lower-Right to Keep Emerald Monolith in Full View */}
            <div className="absolute right-0 bottom-6 w-full max-w-[23rem] bg-white/55 backdrop-blur-md border border-white/70 rounded-2xl p-6 transition-all duration-500 shadow-[0_16px_36px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_45px_rgba(5,150,105,0.15)] z-10">
              <div className="flex items-center justify-between mb-5">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                </div>
                <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wide text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  Live Platform
                </div>
              </div>

              <div className="space-y-3">
                <div className="h-3 w-1/3 bg-slate-100 rounded-full overflow-hidden relative">
                  <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-300/60 to-slate-100 w-full animate-pulse" />
                </div>
                <div className="h-3 w-3/4 bg-slate-100 rounded-full overflow-hidden relative">
                  <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-300/60 to-slate-100 w-full animate-pulse delay-75" />
                </div>
              </div>

              <div className="mt-6 bg-white/80 rounded-xl p-4 border border-white/80 shadow-2xs flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-600 flex items-center justify-center shadow-md shadow-emerald-500/25 text-white shrink-0">
                  <Rocket className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Systems Built to Scale</div>
                  <div className="text-xs font-medium text-slate-500 mt-0.5">High performance & uptime</div>
                </div>
              </div>
            </div>

            {/* Small Floating Feature Badges — Anchored Low & Out of the Center Portal */}
            <div className="absolute left-2 bottom-12 bg-white/80 backdrop-blur-md border border-white/80 rounded-2xl p-4 shadow-lg shadow-slate-900/5 animate-[float_6s_ease-in-out_infinite] z-20 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="text-xs font-bold text-slate-900 pr-2">AI Automation</div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                  <MonitorPlay className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="text-xs font-bold text-slate-900 pr-2">Modern Stack</div>
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