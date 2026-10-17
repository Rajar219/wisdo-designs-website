"use client";

import { useState } from "react";
import {
  Store,
  ShoppingBag,
  Utensils,
  Building,
  Rocket,
  MapPin,
  Briefcase,
  Scale,
  Stethoscope,
  GraduationCap,
  Layers,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

interface BusinessSolution {
  id: string;
  title: string;
  categoryLabel?: string;
  icon: typeof Rocket;
  desc: string;
  solutions: string[];
}

const businessSolutions: BusinessSolution[] = [
  {
    id: "startup",
    title: "Startups",
    categoryLabel: "STARTUP ACCELERATION",
    icon: Rocket,
    desc: "Launch faster and scale smarter with agile, high-performance technology.",
    solutions: [
      "High-Converting Landing Page",
      "Custom Software (MVP)",
      "Branding & Identity",
      "Pitch Deck Design",
      "SEO & Growth Strategy",
      "Analytics & Conversion Tracking",
    ],
  },
  {
    id: "retail",
    title: "Retail Shops",
    categoryLabel: "COMMERCE & POINT OF SALE",
    icon: Store,
    desc: "Modernize your retail operations and reach more customers with a fully integrated digital ecosystem.",
    solutions: [
      "E-Commerce Website",
      "Point of Sale (POS) System",
      "Billing & Invoicing Software",
      "Inventory Management",
      "Digital Marketing",
      "Barcode & Order Tracking",
    ],
  },
  {
    id: "restaurant",
    title: "Restaurants & Cafes",
    categoryLabel: "HOSPITALITY & DINING",
    icon: Utensils,
    desc: "Streamline orders and attract more diners with specialized hospitality tech solutions.",
    solutions: [
      "Restaurant Website",
      "Digital Menu Integration",
      "Online Ordering System",
      "Brand Identity Design",
      "Digital Marketing",
      "Table Reservation Support",
    ],
  },
  {
    id: "realestate",
    title: "Real Estate Businesses",
    categoryLabel: "PROPERTY & DEVELOPMENT",
    icon: Building,
    desc: "Showcase properties beautifully and capture high-quality leads automatically.",
    solutions: [
      "Property Listing Website",
      "CRM Integration",
      "Lead Generation Systems",
      "Brand Identity",
      "Digital Marketing",
      "Virtual Property Showcases",
    ],
  },
  {
    id: "boutique",
    title: "Boutiques & Fashion",
    categoryLabel: "FASHION & LIFESTYLE",
    icon: ShoppingBag,
    desc: "Create a premium shopping experience that reflects your brand's unique style and aesthetics.",
    solutions: [
      "E-Commerce Website",
      "Product Catalogue",
      "Brand Identity",
      "Social Media Management",
      "Digital Marketing",
      "Lookbook & Customer Engagement",
    ],
  },
  {
    id: "service",
    title: "Service Businesses",
    categoryLabel: "CONSULTING & PROFESSIONAL SERVICES",
    icon: Briefcase,
    desc: "Automate your bookings and look highly professional to every prospective client.",
    solutions: [
      "Business Website",
      "Booking & Scheduling System",
      "Invoicing Software",
      "Brand Identity",
      "Digital Marketing",
      "Client Management Workflows",
    ],
  },
  {
    id: "local",
    title: "Local Businesses",
    categoryLabel: "LOCAL MARKET PRESENCE",
    icon: MapPin,
    desc: "Dominate your local market and make it incredibly easy for nearby customers to find you.",
    solutions: [
      "Business Website",
      "Google Business Profile Optimization",
      "Local SEO Strategy",
      "Social Media Management",
      "Reputation Management",
      "Direct Call & Maps Integration",
    ],
  },
  {
    id: "lawfirm",
    title: "Law Firms & Advocates",
    categoryLabel: "PROFESSIONAL LEGAL SERVICES",
    icon: Scale,
    desc: "Build a credible digital presence for your legal practice with professional websites, streamlined enquiry management, and tailored digital tools.",
    solutions: [
      "Professional Advocate Websites",
      "Law Firm Websites",
      "Advocate Profile & Practice Pages",
      "Legal Service Information Pages",
      "Appointment & Enquiry Forms",
      "Client Enquiry Management",
      "Legal Document Download Portals",
      "SEO-Friendly Website Structure",
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare & Clinics",
    categoryLabel: "HEALTHCARE & MEDICAL PRACTICE",
    icon: Stethoscope,
    desc: "Deliver a patient-first digital experience with modern clinic websites, appointment booking systems, and clear medical service information.",
    solutions: [
      "Clinic & Hospital Websites",
      "Doctor Profile & Specialty Pages",
      "Online Appointment Booking",
      "Patient Enquiry & Contact Forms",
      "Medical Services & Treatment Overviews",
      "Clinic Location & Google Maps Setup",
      "Patient Information & FAQ Portals",
      "Mobile-Responsive Patient Portals",
    ],
  },
  {
    id: "education",
    title: "Schools & Colleges",
    categoryLabel: "EDUCATION & INSTITUTIONS",
    icon: GraduationCap,
    desc: "Empower students, parents, and faculty with informative institution websites, admission portals, and structured academic information systems.",
    solutions: [
      "School & College Websites",
      "Online Admission & Enquiry Forms",
      "Course & Curriculum Catalogues",
      "Faculty & Department Directories",
      "Events & Academic Calendar Portals",
      "Notice Board & Announcement Systems",
      "Student Resource Download Hubs",
      "Campus Information & Gallery Pages",
    ],
  },
  {
    id: "other",
    title: "Other Businesses",
    categoryLabel: "TAILORED BUSINESS SOLUTIONS",
    icon: Layers,
    desc: "Every business has unique operational needs. We architect custom websites, bespoke management tools, and digital solutions configured around your exact workflow.",
    solutions: [
      "Custom Business Websites",
      "Bespoke Operational Software",
      "Lead Generation & Enquiry Systems",
      "Custom Admin Dashboards",
      "Client Portal & Workflow Tools",
      "Automated Billing & Reporting",
      "Google Business & Local Visibility",
      "End-to-End Digital Strategy",
    ],
  },
];

export default function Solutions() {
  const [activeTab, setActiveTab] = useState(businessSolutions[0].id);

  const activeContent =
    businessSolutions.find((s) => s.id === activeTab) || businessSolutions[0];

  return (
    <section className="py-20 sm:py-28 lg:py-32 relative bg-slate-50/50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 animate-fade-in-up">
          <span className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-4 block">
            Industry Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Solutions for <span className="text-gradient">Your Business</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed font-light">
            We don&apos;t believe in one-size-fits-all. Select your business type below to explore the custom digital solutions we can build for you.
          </p>
        </div>

        {/* Categories Sidebar & Solution Detail Panel */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          
          {/* Categories Sidebar */}
          <div className="w-full lg:w-1/3 flex flex-col gap-1.5 bg-white p-3 sm:p-4 rounded-[2rem] border border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.03)] z-10 max-h-[620px] overflow-y-auto">
            {businessSolutions.map((solution) => {
              const Icon = solution.icon;
              const isActive = activeTab === solution.id;
              
              return (
                <button
                  key={solution.id}
                  type="button"
                  onClick={() => setActiveTab(solution.id)}
                  className={`flex items-center gap-3.5 w-full text-left px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/25" 
                      : "bg-transparent text-slate-600 hover:bg-slate-50 hover:text-emerald-700"
                  }`}
                >
                  <Icon className={`w-5 h-5 shrink-0 ${isActive ? "text-white" : "text-slate-400"}`} />
                  <span className="font-bold text-sm tracking-wide truncate">{solution.title}</span>
                </button>
              );
            })}
          </div>

          {/* Right-Side Solution Detail Card */}
          <div className="w-full lg:w-2/3 bg-white rounded-[2rem] border border-slate-100 shadow-[0_20px_50px_-10px_rgba(5,150,105,0.06)] p-7 sm:p-10 lg:p-12 min-h-[520px] flex flex-col relative overflow-hidden transition-all duration-500">
            
            {/* Background subtle watermark icon */}
            <div className="absolute -bottom-10 -right-10 text-emerald-50/50 pointer-events-none select-none">
               <activeContent.icon className="w-64 h-64" />
            </div>

            <div className="relative z-10 flex-grow">
              {/* Category Eyebrow Pill */}
              <div className="inline-block px-3 py-1.5 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-lg uppercase tracking-wider mb-6">
                {activeContent.categoryLabel || "Possible Solutions"}
              </div>
              
              {/* Category Heading */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                {activeContent.title}
              </h3>
              
              {/* Category Description */}
              <p className="text-base sm:text-lg text-slate-600 font-medium mb-10 max-w-xl leading-relaxed">
                {activeContent.desc}
              </p>

              {/* Possible Solutions Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 sm:gap-x-8 mb-12">
                {activeContent.solutions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="font-bold text-slate-700 text-sm leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <div className="relative z-10 pt-8 border-t border-slate-100 mt-auto">
              <Link 
                href="/quote"
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide hover:bg-emerald-600 transition-colors shadow-sm w-full sm:w-max justify-center group"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
