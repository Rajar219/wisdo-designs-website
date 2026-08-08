"use client";

import { useState } from "react";
import { Store, ShoppingBag, Utensils, Building, Rocket, MapPin, Briefcase, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const businessSolutions = [
  {
    id: "startup",
    title: "Startups",
    icon: Rocket,
    desc: "Launch faster and scale smarter with agile, high-performance technology.",
    solutions: [
      "High-Converting Landing Page",
      "Custom Software (MVP)",
      "Branding & Identity",
      "Pitch Deck Design",
      "SEO & Growth Strategy"
    ]
  },
  {
    id: "retail",
    title: "Retail Shops",
    icon: Store,
    desc: "Modernize your retail operations and reach more customers with a fully integrated digital ecosystem.",
    solutions: [
      "E-Commerce Website",
      "Point of Sale (POS) System",
      "Billing & Invoicing Software",
      "Inventory Management",
      "Digital Marketing"
    ]
  },
  {
    id: "restaurant",
    title: "Restaurants & Cafes",
    icon: Utensils,
    desc: "Streamline orders and attract more diners with specialized hospitality tech solutions.",
    solutions: [
      "Restaurant Website",
      "Digital Menu Integration",
      "Online Ordering System",
      "Brand Identity Design",
      "Digital Marketing"
    ]
  },
  {
    id: "realestate",
    title: "Real Estate Businesses",
    icon: Building,
    desc: "Showcase properties beautifully and capture high-quality leads automatically.",
    solutions: [
      "Property Listing Website",
      "CRM Integration",
      "Lead Generation Systems",
      "Brand Identity",
      "Digital Marketing"
    ]
  },
  {
    id: "boutique",
    title: "Boutiques & Fashion",
    icon: ShoppingBag,
    desc: "Create a premium shopping experience that reflects your brand's unique style and aesthetics.",
    solutions: [
      "E-Commerce Website",
      "Product Catalogue",
      "Brand Identity",
      "Social Media Management",
      "Digital Marketing"
    ]
  },
  {
    id: "service",
    title: "Service Businesses",
    icon: Briefcase,
    desc: "Automate your bookings and look highly professional to every prospective client.",
    solutions: [
      "Business Website",
      "Booking & Scheduling System",
      "Invoicing Software",
      "Brand Identity",
      "Digital Marketing"
    ]
  },
  {
    id: "local",
    title: "Local Businesses",
    icon: MapPin,
    desc: "Dominate your local market and make it incredibly easy for nearby customers to find you.",
    solutions: [
      "Business Website",
      "Google Business Profile Optimization",
      "Local SEO Strategy",
      "Social Media Management",
      "Reputation Management"
    ]
  }
];

export default function Solutions() {
  const [activeTab, setActiveTab] = useState(businessSolutions[0].id);

  const activeContent = businessSolutions.find(s => s.id === activeTab) || businessSolutions[0];

  return (
    <section className="py-20 sm:py-28 lg:py-32 relative bg-slate-50/50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 animate-fade-in-up">
          <span className="text-sm font-bold tracking-widest text-indigo-500 uppercase mb-4 block">
            Industry Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Solutions for <span className="text-gradient">Your Business</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed font-light">
            We don't believe in one-size-fits-all. Select your business type below to explore the custom digital solutions we can build for you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          
          {/* Tabs Sidebar */}
          <div className="w-full lg:w-1/3 flex flex-col gap-2 bg-white p-4 rounded-[2rem] border border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.03)] z-10">
            {businessSolutions.map((solution) => {
              const Icon = solution.icon;
              const isActive = activeTab === solution.id;
              
              return (
                <button
                  key={solution.id}
                  onClick={() => setActiveTab(solution.id)}
                  className={`flex items-center gap-4 w-full text-left px-5 py-4 rounded-2xl transition-all duration-300 ${
                    isActive 
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/25" 
                      : "bg-transparent text-slate-600 hover:bg-slate-50 hover:text-indigo-600"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-slate-400"}`} />
                  <span className="font-bold text-sm tracking-wide">{solution.title}</span>
                </button>
              );
            })}
          </div>

          {/* Content Area */}
          <div className="w-full lg:w-2/3 bg-white rounded-[2rem] border border-slate-100 shadow-[0_20px_50px_-10px_rgba(79,70,229,0.05)] p-8 sm:p-12 min-h-[400px] flex flex-col relative overflow-hidden transition-all duration-500">
            
            {/* Background subtle icon */}
            <div className="absolute -bottom-10 -right-10 text-indigo-50/50 pointer-events-none">
               <activeContent.icon className="w-64 h-64" />
            </div>

            <div className="relative z-10 flex-grow">
              <div className="inline-block px-3 py-1.5 text-[10px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-lg uppercase tracking-wider mb-6">
                Possible Solutions
              </div>
              
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                {activeContent.title}
              </h3>
              
              <p className="text-base sm:text-lg text-slate-500 font-medium mb-10 max-w-xl">
                {activeContent.desc}
              </p>

              <div className="grid sm:grid-cols-2 gap-y-5 gap-x-8 mb-12">
                {activeContent.solutions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="font-bold text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 pt-8 border-t border-slate-100 mt-auto">
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide hover:bg-indigo-600 transition-colors shadow-sm w-full sm:w-max justify-center"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
