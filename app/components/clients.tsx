"use client";

import { useState, useEffect } from "react";
import { Sparkles, ArrowRight, MonitorSmartphone, ShoppingCart, Rocket, CheckCircle, X, ExternalLink } from "lucide-react";

// The full project type to govern the modal state
interface Project {
  title: string;
  industry: string;
  desc: string;
  features: string[];
  icon: any;
  color: string;
  bg: string;
  badgeColor: string;
  note: string;
}

const featuredProjects: Project[] = [
  {
    title: "Retail POS Billing System",
    industry: "Retail & E-commerce",
    desc: "A lightweight billing and inventory management system designed for small retail shops and boutiques.",
    features: [
      "Real-time inventory tracking",
      "GST billing support",
      "Sales analytics dashboard",
      "Multi-store management",
      "Automated stock updates"
    ],
    note: "This is a demo concept project built to showcase our capabilities.",
    icon: ShoppingCart,
    color: "from-blue-500 to-indigo-500",
    bg: "bg-blue-50",
    badgeColor: "text-blue-700 bg-blue-100 border-blue-200"
  },
  {
    title: "Restaurant Ordering & Delivery App",
    industry: "Food & Beverage",
    desc: "A mobile ordering platform designed for restaurants, cafes, and food businesses to manage orders and deliveries efficiently.",
    features: [
      "Digital menu management",
      "Live order tracking",
      "Driver GPS tracking",
      "Kitchen order dashboard",
      "Automated pricing and promotions"
    ],
    note: "This is a prototype built to demonstrate restaurant technology solutions.",
    icon: MonitorSmartphone,
    color: "from-orange-500 to-red-500",
    bg: "bg-orange-50",
    badgeColor: "text-orange-700 bg-orange-100 border-orange-200"
  },
  {
    title: "SaaS Workflow Automation Dashboard",
    industry: "Startup / SaaS",
    desc: "A scalable dashboard platform built for startups and businesses to manage workflows, analytics, and team productivity.",
    features: [
      "AI-powered analytics insights",
      "Role-based user access",
      "Custom reporting engine",
      "Task automation workflows",
      "Performance dashboards"
    ],
    note: "This project is a demonstration of enterprise dashboard capabilities.",
    icon: Rocket,
    color: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-50",
    badgeColor: "text-emerald-700 bg-emerald-100 border-emerald-200"
  }
];

export default function ClientsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <section className="relative py-16 sm:py-24 lg:py-40 overflow-hidden bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-28 animate-fade-in-up">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-slate-200/60 mb-8">
            <Sparkles className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-bold tracking-wide text-slate-700 uppercase">Concept Projects</span>
          </div>
          
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 sm:mb-8">
            Featured <span className="text-gradient">Case Studies</span>
          </h3>

          <p className="text-base sm:text-lg lg:text-xl text-slate-500 leading-relaxed font-light">
            Explore our high-performance product prototypes designed to showcase our engineering capabilities and technological expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 pb-12">
          {featuredProjects.map((project, i) => {
            const Icon = project.icon;
            const delay = `delay-[${i * 150}ms]`;
            return (
              <div 
                key={i} 
                className={`w-full relative group bg-white rounded-[2rem] p-8 lg:p-10 border border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_40px_80px_-20px_rgba(79,70,229,0.15)] animate-fade-in-up flex flex-col items-center sm:items-start text-center sm:text-left h-full ${delay}`}
              >
                {/* Industry Tag */}
                <div className={`absolute top-6 right-6 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-md border ${project.badgeColor}`}>
                  {project.industry}
                </div>

                <div className={`w-14 h-14 rounded-2xl ${project.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <div className={`bg-gradient-to-br ${project.color} w-8 h-8 rounded-xl flex items-center justify-center text-white shadow-md`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Concept Project</div>
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors tracking-tight line-clamp-2">
                    {project.title}
                  </h4>
                </div>

                <p className="text-sm lg:text-base text-slate-500 font-medium leading-relaxed mb-8 flex-grow line-clamp-3">
                  {project.desc}
                </p>

                {/* Features List Preview */}
                <div className="space-y-3 mb-10 pt-6 border-t border-slate-100 w-full">
                  {project.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 justify-center sm:justify-start">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-slate-700">{feature}</span>
                    </div>
                  ))}
                  {project.features.length > 3 && (
                     <div className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-7 pt-2">
                       + {project.features.length - 3} More Features
                     </div>
                  )}
                </div>

                <div className="mt-auto w-full">
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center justify-center w-full py-4 rounded-xl bg-slate-50 text-slate-900 text-sm font-bold uppercase tracking-wide group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-indigo-500/25 active:scale-95"
                  >
                    View Case Study
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Case Study Modal Overlay */}
      <div 
        className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 transition-all duration-300 ${
          selectedProject ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedProject(null)}
        />

        {/* Modal Content */}
        {selectedProject && (() => {
          const ModalIcon = selectedProject.icon;
          return (
            <div className="relative w-full max-w-3xl bg-white rounded-[2rem] shadow-2xl overflow-hidden transform transition-all duration-500 scale-100 animate-fade-in-up flex flex-col max-h-[90vh]">
              
              {/* Header */}
              <div className="flex items-center justify-between p-6 sm:p-8 border-b border-slate-100">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl ${selectedProject.bg} flex items-center justify-center shrink-0`}>
                     <div className={`bg-gradient-to-br ${selectedProject.color} w-6 h-6 rounded-lg flex items-center justify-center text-white shadow-sm`}>
                       <ModalIcon className="w-3 h-3" />
                     </div>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-tight">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors shrink-0 outline-none"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 overflow-y-auto">
                <div className={`inline-block px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg border ${selectedProject.badgeColor} mb-6`}>
                  {selectedProject.industry}
                </div>

                <p className="text-lg text-slate-600 leading-relaxed font-medium mb-10">
                  {selectedProject.desc}
                </p>

                <div className="mb-10">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6 border-b border-slate-100 pb-2">
                    Core Functionality
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {selectedProject.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100/60">
                        <CheckCircle className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                        <span className="text-sm font-semibold text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Concept project disclaimer */}
                <div className="bg-indigo-50/50 rounded-2xl p-6 border border-indigo-100/50 flex items-start gap-4">
                  <Sparkles className="w-6 h-6 text-indigo-500 shrink-0 mt-1" />
                  <p className="text-sm font-medium text-slate-600 leading-relaxed italic">
                    {selectedProject.note}
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 sm:p-8 border-t border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm font-bold text-slate-500">Interested in a bespoke solution like this?</p>
                <a 
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-slate-900 text-white text-sm font-bold uppercase tracking-wide hover:bg-indigo-600 transition-all shadow-md hover:shadow-indigo-500/25 gap-2"
                >
                  Start Similar Project
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              
            </div>
          );
        })()}
      </div>

    </section>
  );
}
