"use client";

import { useState, useEffect } from "react";
import { Globe, Terminal, Calculator, Boxes, ShoppingBag, Smartphone, Paintbrush, TrendingUp, Zap, Target, Lightbulb, CheckCircle2, Users, ListTree, ArrowRight } from "lucide-react";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const solutions = [
  {
    id: "business-websites",
    title: "Business Websites",
    icon: Globe,
    problem: "An outdated or hard-to-find website costs you credibility and customers.",
    solution: "We design fast, professional, and SEO-optimized business websites that act as your 24/7 digital storefront.",
    features: ["Responsive mobile-first design", "SEO optimization & fast load times", "High-converting landing pages", "Secure hosting infrastructure"],
    who: "Local businesses, agencies, and companies needing a strong professional online presence.",
    process: ["Discovery & Strategy", "Wireframing & Design", "Development", "Launch & Optimization"],
    cta: "Upgrade Your Website"
  },
  {
    id: "custom-software",
    title: "Custom Software",
    icon: Terminal,
    problem: "Off-the-shelf software doesn't fit your unique business operations, forcing you into inefficient workarounds.",
    solution: "We engineer bespoke software solutions tailored exactly to your workflows, solving your specific operational bottlenecks.",
    features: ["Custom administrative dashboards", "Scalable cloud architecture", "Third-party tool integrations", "Secure data management"],
    who: "Growing businesses with unique processes that out-of-the-box software cannot handle.",
    process: ["Requirements Gathering", "Architecture Planning", "Iterative Development", "Deployment & Training"],
    cta: "Build Custom Software"
  },
  {
    id: "pos-billing",
    title: "POS & Billing",
    icon: Calculator,
    problem: "Slow checkout processes and disjointed billing systems lead to poor customer experiences and accounting errors.",
    solution: "We deploy modern Point of Sale (POS) and billing platforms that streamline sales, tracking, and invoicing in real time.",
    features: ["Live billing interfaces", "Automated invoicing & receipts", "Offline mode support", "Detailed sales reporting"],
    who: "Retailers, restaurants, and wholesale businesses requiring fast and reliable checkout systems.",
    process: ["Hardware/Software Audit", "System Configuration", "Data Migration", "Staff Training"],
    cta: "Streamline Your Billing"
  },
  {
    id: "inventory-systems",
    title: "Inventory Systems",
    icon: Boxes,
    problem: "Tracking stock manually leads to costly stockouts, overstocking, and lost inventory.",
    solution: "We provide robust inventory management systems that give you total visibility and control over your stock across multiple locations.",
    features: ["Real-time stock tracking", "Automated low stock alerts", "Barcode scanning integration", "Supplier & vendor management"],
    who: "Warehouses, retail chains, and e-commerce businesses managing physical goods.",
    process: ["Inventory Audit", "System Setup & Integration", "Barcode/Stock Import", "Go Live & Monitoring"],
    cta: "Take Control of Inventory"
  },
  {
    id: "e-commerce",
    title: "E-commerce",
    icon: ShoppingBag,
    problem: "Generic e-commerce templates fail to highlight your brand's unique value and struggle to convert visitors into buyers.",
    solution: "We build premium, custom e-commerce storefronts designed for seamless shopping experiences and high conversion rates.",
    features: ["Custom product catalogues", "Secure payment gateways", "Cart abandonment recovery", "Mobile-first shopping experiences"],
    who: "Retailers, boutiques, and direct-to-consumer brands looking to scale their online sales.",
    process: ["Store Strategy", "UI/UX Design", "Platform Development", "Launch & Marketing"],
    cta: "Start Selling Online"
  },
  {
    id: "mobile-apps",
    title: "Mobile Applications",
    icon: Smartphone,
    problem: "Your customers want to interact with your business on the go, but a mobile website isn't delivering the right experience.",
    solution: "We develop high-performance native and cross-platform mobile apps that put your business directly in your customers' pockets.",
    features: ["iOS & Android compatibility", "Push notifications", "Offline functionality", "Intuitive mobile user interfaces"],
    who: "Businesses wanting to build customer loyalty, offer on-demand services, or streamline remote work.",
    process: ["App Concept", "UX Wireframing", "App Development", "App Store Launch"],
    cta: "Build Your App"
  },
  {
    id: "design-branding",
    title: "Design & Branding",
    icon: Paintbrush,
    problem: "A disjointed or outdated visual identity makes it hard for your business to stand out and build trust with modern consumers.",
    solution: "We craft cohesive, memorable brand identities that resonate with your target audience and elevate your market position.",
    features: ["Logo design & visual identity", "Comprehensive brand guidelines", "Social media creatives", "Print marketing materials"],
    who: "Startups needing an identity, or established businesses ready for a modern rebrand.",
    process: ["Brand Discovery", "Concept Creation", "Refinement", "Final Asset Delivery"],
    cta: "Elevate Your Brand"
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    icon: TrendingUp,
    problem: "You have a great business and a beautiful website, but you aren't getting enough traffic or qualified leads.",
    solution: "We execute targeted digital marketing strategies designed to increase your visibility, drive traffic, and boost conversions.",
    features: ["Search Engine Optimization (SEO)", "Google Business profile optimization", "Targeted ad campaigns", "Social media strategy"],
    who: "Any business looking to aggressively grow their customer base and online footprint.",
    process: ["Market Research", "Campaign Strategy", "Execution & Optimization", "Performance Reporting"],
    cta: "Grow Your Audience"
  },
  {
    id: "business-automation",
    title: "Business Automation",
    icon: Zap,
    problem: "Repetitive manual tasks slow down growth, cause human error, and waste valuable team hours.",
    solution: "We build custom automated workflows that connect your existing tools, automatically moving data and triggering actions.",
    features: ["Workflow mapping", "API integrations across platforms", "Automated reporting", "Trigger-based operations"],
    who: "Growing businesses scaling faster than their current team can handle manual operations.",
    process: ["Workflow Audit", "Automation Design", "Phased Implementation", "Testing & Handover"],
    cta: "Automate Your Business"
  }
];

export default function SolutionsClient() {
  const [activeSection, setActiveSection] = useState(solutions[0].id);

  // Intersection Observer for highlighting the active section in the sidebar
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    solutions.forEach((solution) => {
      const element = document.getElementById(solution.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // Account for sticky header if any
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-indigo-500/30">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-48 lg:pb-24 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-50/50 via-white to-white -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <span className="text-sm font-bold tracking-widest text-indigo-500 uppercase mb-4 block">
            End-to-End Capabilities
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 sm:mb-8 max-w-4xl mx-auto">
            Digital Solutions Built for <span className="text-gradient">Growth</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-500 leading-relaxed font-light max-w-2xl mx-auto">
            Explore our comprehensive suite of services. From custom software to digital marketing, we engineer solutions that solve real business challenges.
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-12 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
        
        {/* Sticky Sidebar Navigation */}
        <aside className="w-full lg:w-[300px] shrink-0 sticky top-28 bg-white p-6 rounded-[2rem] border border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.03)] z-10 hidden lg:flex flex-col gap-2">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 px-4">Jump To Solution</h3>
          {solutions.map((solution) => {
            const Icon = solution.icon;
            const isActive = activeSection === solution.id;
            
            return (
              <button
                key={solution.id}
                onClick={() => scrollTo(solution.id)}
                className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                  isActive 
                    ? "bg-indigo-50 text-indigo-700 font-bold" 
                    : "bg-transparent text-slate-500 hover:bg-slate-50 hover:text-slate-900 font-medium"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-indigo-600" : "text-slate-400"}`} />
                <span className="text-sm">{solution.title}</span>
              </button>
            );
          })}
        </aside>

        {/* Mobile Navigation Dropdown */}
        <div className="w-full sticky top-20 z-20 bg-white/80 backdrop-blur-md py-4 border-b border-slate-100 lg:hidden">
            <select 
              className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl focus:ring-indigo-500 focus:border-indigo-500 block p-3 font-bold"
              value={activeSection}
              onChange={(e) => scrollTo(e.target.value)}
            >
              {solutions.map((s) => (
                <option key={s.id} value={s.id}>{s.title}</option>
              ))}
            </select>
        </div>

        {/* Solutions List */}
        <div className="w-full flex flex-col gap-12 lg:gap-24">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            
            return (
              <div 
                key={solution.id} 
                id={solution.id} 
                className={`scroll-mt-32 p-8 sm:p-12 rounded-[2.5rem] border ${
                  index % 2 === 0 ? "bg-white border-slate-100 shadow-sm" : "bg-slate-100/50 border-transparent"
                }`}
              >
                
                {/* Header */}
                <div className="flex items-center gap-6 mb-10 pb-10 border-b border-slate-200/60">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-indigo-500/25">
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">{solution.title}</h2>
                  </div>
                </div>

                {/* Grid Layout for details */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
                  
                  {/* Left Column */}
                  <div className="space-y-10">
                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-widest mb-3">
                        <Target className="w-4 h-4 text-rose-500" /> The Problem
                      </h4>
                      <p className="text-lg text-slate-600 leading-relaxed font-medium">{solution.problem}</p>
                    </div>

                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-widest mb-3">
                        <Lightbulb className="w-4 h-4 text-emerald-500" /> Our Solution
                      </h4>
                      <p className="text-lg text-slate-600 leading-relaxed font-medium">{solution.solution}</p>
                    </div>

                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">
                        <Users className="w-4 h-4 text-indigo-500" /> Who It Is For
                      </h4>
                      <div className="bg-white border border-slate-200/60 px-5 py-4 rounded-xl text-slate-600 font-medium text-sm">
                        {solution.who}
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-10">
                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">
                        <CheckCircle2 className="w-4 h-4 text-slate-400" /> Key Features
                      </h4>
                      <ul className="space-y-3">
                        {solution.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0"></span>
                            <span className="text-slate-600 font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">
                        <ListTree className="w-4 h-4 text-slate-400" /> Typical Project Process
                      </h4>
                      <div className="space-y-4">
                        {solution.process.map((step, i) => (
                          <div key={i} className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 text-xs font-bold flex items-center justify-center shrink-0 border border-slate-200">
                              0{i + 1}
                            </div>
                            <span className="text-slate-700 font-bold text-sm tracking-wide">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>

                {/* Action */}
                <div className="pt-10 border-t border-slate-200/60">
                  <Link 
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-colors shadow-sm w-full sm:w-max group"
                  >
                    <span>Start Your Project</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

      </section>

      <Footer />
    </div>
  );
}
