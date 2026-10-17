"use client";

import React, { useState, useEffect, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Cpu,
  Monitor,
  Search,
  MapPin,
  Palette,
  Megaphone,
  Bot,
  Layers,
  Compass,
  ArrowRight,
  ArrowLeft,
  Check,
  MessageCircle,
  Mail,
  GraduationCap,
  AlertCircle,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  Sliders,
  User,
  Building,
  Phone,
  FileText,
  Lightbulb,
  Zap,
  Lock,
  Pencil,
  Info,
  Loader2,
  HandHeart,
} from "lucide-react";
import { trackEvent } from "../lib/analytics";

export interface ServiceMissionTile {
  id: string;
  name: string;
  desc: string;
  icon: typeof Cpu;
  code: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
}

const SERVICE_TILES: ServiceMissionTile[] = [
  {
    id: "software-dev",
    name: "Software Development",
    desc: "Custom business software, billing/POS systems, dashboards & workflows",
    icon: Cpu,
    code: "SRV-01",
    badgeBg: "bg-emerald-50",
    badgeText: "text-emerald-700",
    badgeBorder: "border-emerald-200",
  },
  {
    id: "web-dev",
    name: "Website Development",
    desc: "Fast, modern, mobile-responsive business, portfolio & e-commerce websites",
    icon: Monitor,
    code: "SRV-02",
    badgeBg: "bg-sky-50",
    badgeText: "text-sky-700",
    badgeBorder: "border-sky-200",
  },
  {
    id: "seo",
    name: "SEO Services",
    desc: "On-page, technical SEO & keyword optimization to grow organic search traffic",
    icon: Search,
    code: "SRV-03",
    badgeBg: "bg-amber-50",
    badgeText: "text-amber-700",
    badgeBorder: "border-amber-200",
  },
  {
    id: "gmb",
    name: "Google Business Profile Setup",
    desc: "Google Maps listing, verification guidance & local business visibility",
    icon: MapPin,
    code: "SRV-04",
    badgeBg: "bg-rose-50",
    badgeText: "text-rose-700",
    badgeBorder: "border-rose-200",
  },
  {
    id: "design",
    name: "Designing",
    desc: "UI/UX prototypes, branding, logo design & engaging digital assets",
    icon: Palette,
    code: "SRV-05",
    badgeBg: "bg-purple-50",
    badgeText: "text-purple-700",
    badgeBorder: "border-purple-200",
  },
  {
    id: "marketing",
    name: "Digital Marketing",
    desc: "Targeted campaigns, social media management & qualified lead generation",
    icon: Megaphone,
    code: "SRV-06",
    badgeBg: "bg-orange-50",
    badgeText: "text-orange-700",
    badgeBorder: "border-orange-200",
  },
  {
    id: "ai-automation",
    name: "AI & Automation",
    desc: "Smart business workflows, AI chatbots & repetitive task automation",
    icon: Bot,
    code: "SRV-07",
    badgeBg: "bg-teal-50",
    badgeText: "text-teal-700",
    badgeBorder: "border-teal-200",
  },
  {
    id: "custom-tech",
    name: "Custom Technology Solutions",
    desc: "Tailored architecture built around unique operational business bottlenecks",
    icon: Layers,
    code: "SRV-08",
    badgeBg: "bg-indigo-50",
    badgeText: "text-indigo-700",
    badgeBorder: "border-indigo-200",
  },
  {
    id: "not-sure",
    name: "Not Sure Yet — Help Me Choose",
    desc: "Let's explore your business goals together and recommend the right path",
    icon: Compass,
    code: "SRV-09",
    badgeBg: "bg-slate-100",
    badgeText: "text-slate-700",
    badgeBorder: "border-slate-200",
  },
];

const BUDGET_TIER_1 = [
  { label: "₹2,000–₹5,000", tag: "Starter & Landing", hint: "Focused setups, simple landing pages" },
  { label: "₹5,000–₹10,000", tag: "Standard Setup", hint: "Business websites, core integrations" },
];

const BUDGET_TIER_2 = [
  { label: "₹10,000–₹25,000", tag: "Growth Platform", hint: "Dynamic web apps, custom workflows" },
  { label: "₹25,000–₹50,000", tag: "Advanced Software", hint: "Specialized tools, automations, portals" },
  { label: "₹50,000+", tag: "Enterprise Grade", hint: "Full bespoke software systems & suites" },
];

const STUDENT_DEGREE_OPTIONS = [
  "B.Com",
  "M.Com",
  "BBA",
  "MBA",
  "BCA",
  "MCA",
  "B.Sc",
  "M.Sc",
  "Other relevant undergraduate or postgraduate courses",
];

const QUICK_CHIPS = [
  "Launch something new",
  "Improve an existing website",
  "Automate business tasks",
  "Grow online visibility",
  "Build a custom business tool",
  "I need guidance",
];

const STEPS = [
  { step: 1, title: "Service", subtitle: "What are we building?" },
  { step: 2, title: "Budget", subtitle: "Comfortable range" },
  { step: 3, title: "Details", subtitle: "Project objective" },
  { step: 4, title: "Contact", subtitle: "Where to reach you" },
];

import { detectJobSeekingIntent, HIRING_BLOCKED_MESSAGE } from "../lib/hiring-blocker";

const OFFICIAL_EMAIL = "wisdotech1@gmail.com";
const OFFICIAL_WHATSAPP_NUMBER = "919787362199";

function InteractiveProjectEnquiry() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");

  // Step state (1 to 4)
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form selections with direct initialisation from query parameter
  const [selectedServices, setSelectedServices] = useState<string[]>(() => {
    if (serviceParam) {
      const match = SERVICE_TILES.find(
        (s) =>
          s.name.toLowerCase() === serviceParam.toLowerCase() ||
          s.id.toLowerCase() === serviceParam.toLowerCase() ||
          serviceParam.toLowerCase().includes(s.name.toLowerCase())
      );
      if (match) return [match.name];
      const p = serviceParam.toLowerCase();
      if (p.includes("soft") || p.includes("app")) return ["Software Development"];
      if (p.includes("web") || p.includes("site")) return ["Website Development"];
      if (p.includes("seo")) return ["SEO Services"];
      if (p.includes("map") || p.includes("profile") || p.includes("business")) return ["Google Business Profile Setup"];
      if (p.includes("design") || p.includes("ui")) return ["Designing"];
      if (p.includes("market")) return ["Digital Marketing"];
      if (p.includes("ai") || p.includes("auto")) return ["AI & Automation"];
      return ["Custom Technology Solutions"];
    }
    return [];
  });
  const [selectedBudget, setSelectedBudget] = useState<string>(() => searchParams.get("budget") || "");
  const [customBudgetAmount, setCustomBudgetAmount] = useState<string>("");
  const [isCustomBudgetOpen, setIsCustomBudgetOpen] = useState<boolean>(false);
  const [communityCategory, setCommunityCategory] = useState<"business" | "student">("business");
  const [communityMessage, setCommunityMessage] = useState<string>("");
  const [objective, setObjective] = useState<string>(
    () => searchParams.get("desc") || searchParams.get("message") || searchParams.get("objective") || ""
  );
  const [selectedChips, setSelectedChips] = useState<string[]>([]);

  // Contact State
  const [name, setName] = useState<string>(() => searchParams.get("name") || "");
  const [phone, setPhone] = useState<string>(() => searchParams.get("phone") || "");
  const [organization, setOrganization] = useState<string>(
    () => searchParams.get("org") || searchParams.get("business") || searchParams.get("businessName") || ""
  );
  const [email, setEmail] = useState<string>(() => searchParams.get("email") || "");
  const [additionalRequirements, setAdditionalRequirements] = useState<string>("");
  const [botcheck, setBotcheck] = useState<string>("");
  const [isStudent, setIsStudent] = useState<boolean>(false);

  // UI & Submission State
  const [isMobileSummaryOpen, setIsMobileSummaryOpen] = useState<boolean>(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [submissionError, setSubmissionError] = useState<string>("");
  const [jobBlockNotice, setJobBlockNotice] = useState<string>("");
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    channel: "whatsapp" | "gmail";
  }>({
    isOpen: false,
    channel: "gmail",
  });

  // Track initial page view
  useEffect(() => {
    trackEvent("project_discovery_view", { mode: "interactive_light_wide" });
  }, []);

  // Toggle service selection
  const handleToggleService = (serviceName: string) => {
    setValidationErrors((prev) => ({ ...prev, services: "" }));
    setJobBlockNotice("");

    if (serviceName.includes("Not Sure Yet")) {
      setSelectedServices(["Not Sure Yet — Help Me Choose"]);
      return;
    }

    setSelectedServices((prev) => {
      const filtered = prev.filter((s) => !s.includes("Not Sure Yet"));
      if (filtered.includes(serviceName)) {
        return filtered.filter((s) => s !== serviceName);
      } else {
        return [...filtered, serviceName];
      }
    });
  };

  // Toggle quick idea chips
  const handleToggleChip = (chip: string) => {
    setJobBlockNotice("");
    setSelectedChips((prev) => {
      let updated: string[];
      if (prev.includes(chip)) {
        updated = prev.filter((c) => c !== chip);
      } else {
        updated = [...prev, chip];
      }

      setObjective((curr) => {
        if (!curr.trim()) {
          return updated.join(", ");
        }
        return curr;
      });

      return updated;
    });
  };

  // Computed budget string
  const resolvedBudget = useMemo(() => {
    if (selectedBudget === "Community Support") {
      const categoryLabel =
        communityCategory === "student"
          ? "Student Learning Guidance"
          : "Early-Stage Business Support";
      return `Community Support (${categoryLabel})`;
    }
    if (isCustomBudgetOpen) {
      if (customBudgetAmount.trim()) {
        const cleaned = customBudgetAmount.replace(/[^0-9]/g, "");
        if (cleaned) {
          const num = parseInt(cleaned, 10);
          return `₹${num.toLocaleString("en-IN")}`;
        }
      }
      return "Custom amount pending";
    }
    return selectedBudget || "Budget not decided";
  }, [selectedBudget, communityCategory, isCustomBudgetOpen, customBudgetAmount]);

  // Checkpoints completion states
  const hasService = selectedServices.length > 0;
  const hasBudget = Boolean(selectedBudget || (isCustomBudgetOpen && customBudgetAmount.trim()));
  const hasObjective = Boolean(
    objective.trim() ||
      selectedChips.length > 0 ||
      (selectedBudget === "Community Support" && communityMessage.trim())
  );
  const hasContact = Boolean(name.trim().length >= 2 && phone.trim().length >= 7);

  const completedCheckpointsCount = [hasService, hasBudget, hasObjective, hasContact].filter(Boolean).length;
  const missionProgressPercent = Math.round((completedCheckpointsCount / 4) * 100);

  // Shared structured brief text matching the required specification
  const structuredBrief = useMemo(() => {
    const srvText = selectedServices.length > 0 ? selectedServices.join(", ") : "Not selected yet";
    
    // Resolve project objective, including community support message if present
    const objectiveParts: string[] = [];
    if (selectedBudget === "Community Support" && communityMessage.trim()) {
      objectiveParts.push(`Support Focus: ${communityMessage.trim()}`);
    }
    if (objective.trim()) {
      objectiveParts.push(objective.trim());
    } else if (selectedChips.length > 0) {
      objectiveParts.push(selectedChips.join(", "));
    }
    const objText = objectiveParts.length > 0 ? objectiveParts.join(" | ") : "Not provided";

    return `New Project Enquiry — WISDO TECH

Client Name: ${name.trim() || "Not provided"}

Business / Organisation: ${organization.trim() || "Not provided"}

Selected Services: ${srvText}

Budget: ${resolvedBudget}

Project Objective: ${objText}

Additional Requirements: ${additionalRequirements.trim() || "Not provided"}

Mobile / WhatsApp: ${phone.trim() || "Not provided"}

Email Address: ${email.trim() || "Not provided"}`;
  }, [
    name,
    organization,
    phone,
    email,
    selectedServices,
    resolvedBudget,
    selectedBudget,
    communityMessage,
    objective,
    selectedChips,
    additionalRequirements,
  ]);

  // Step advancement validation
  const handleNextStep = (targetStep?: number) => {
    const next = targetStep || currentStep + 1;

    // Validate step 1 if moving past step 1
    if (currentStep === 1 && selectedServices.length === 0) {
      setValidationErrors((prev) => ({ ...prev, services: "Please select at least one service to continue." }));
      return;
    }

    setValidationErrors({});
    setJobBlockNotice("");
    setCurrentStep(Math.min(next, 4));
    if (typeof window !== "undefined") {
      document.getElementById("interactive-form-top")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePrevStep = () => {
    setJobBlockNotice("");
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    if (typeof window !== "undefined") {
      document.getElementById("interactive-form-top")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Shared client-side validation for both WhatsApp and Email
  const validateSharedEnquiry = (): boolean => {
    setSubmissionError("");
    setJobBlockNotice("");

    // 1. Job Seeking Intent Interceptor
    // WISDO TECH is not currently hiring. Prevent forwarding job applications.
    const isStudentTrack =
      isStudent || (selectedBudget === "Community Support" && communityCategory === "student");
    const isJobApplication = detectJobSeekingIntent(
      [communityMessage, objective, additionalRequirements, organization, name],
      isStudentTrack
    );

    if (isJobApplication) {
      setJobBlockNotice(HIRING_BLOCKED_MESSAGE);
      if (typeof window !== "undefined") {
        document.getElementById("interactive-form-top")?.scrollIntoView({ behavior: "smooth" });
      }
      return false;
    }

    // 2. Validate required project & contact fields
    const errors: Record<string, string> = {};

    if (selectedServices.length === 0) {
      errors.services = "Please select at least one service (or 'Not Sure Yet').";
    }
    if (!name.trim() || name.trim().length < 2) {
      errors.name = "Full name is required (at least 2 characters).";
    }
    if (!phone.trim() || phone.trim().length < 7) {
      errors.phone = "Mobile / WhatsApp number is required to discuss your project.";
    }
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errors.email = "Please enter a valid email address.";
    }
    if (isCustomBudgetOpen && customBudgetAmount.trim()) {
      const num = parseInt(customBudgetAmount.replace(/[^0-9]/g, ""), 10);
      if (isNaN(num) || num < 2000) {
        errors.budget = "Custom budget projects start from ₹2,000.";
      }
    }

    setValidationErrors(errors);

    if (Object.keys(errors).length > 0) {
      if (errors.services) {
        setCurrentStep(1);
      } else if (errors.budget) {
        setCurrentStep(2);
      } else {
        setCurrentStep(4);
      }
      return false;
    }

    return true;
  };

  // Launch via WhatsApp
  const handleLaunchWhatsApp = () => {
    if (!validateSharedEnquiry()) return;

    // WhatsApp URL with structured brief
    const waUrl = `https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${encodeURIComponent(structuredBrief)}`;

    if (typeof window !== "undefined") {
      window.open(waUrl, "_blank", "noopener,noreferrer");
    }

    setModalState({
      isOpen: true,
      channel: "whatsapp",
    });
  };

  // Launch via Gmail Compose Integration
  const handleLaunchGmail = () => {
    if (!validateSharedEnquiry()) return;

    const subject = "New Project Enquiry — WISDO TECH";
    // Gmail Compose URL format
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      OFFICIAL_EMAIL
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(structuredBrief)}`;

    if (typeof window !== "undefined") {
      window.open(gmailUrl, "_blank", "noopener,noreferrer");
    }

    setModalState({
      isOpen: true,
      channel: "gmail",
    });
  };

  // Switch to Student Guidance Route
  const handleStudentTrack = () => {
    setIsStudent(true);
    setJobBlockNotice("");
    setSelectedServices(["Custom Technology Solutions", "Not Sure Yet — Help Me Choose"]);
    setSelectedBudget("Student / Academic Project Guidance (Non-commercial)");
    setIsCustomBudgetOpen(false);
    setObjective("I am a student requesting guidance regarding software project architecture, technical workflows, or tech learning.");
    setCurrentStep(3);
    if (typeof window !== "undefined") {
      document.getElementById("interactive-form-top")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-50 text-slate-800 selection:bg-emerald-500/20 selection:text-emerald-900 font-sans relative overflow-x-hidden">
      
      {/* Subtle Ambient Decorative Gradient Glows (Light Theme) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[340px] bg-gradient-to-b from-emerald-100/50 via-teal-50/30 to-transparent blur-[90px] pointer-events-none -z-10" />
      <div className="absolute top-48 right-0 w-[500px] h-[500px] bg-emerald-100/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-96 left-0 w-[500px] h-[500px] bg-teal-100/20 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Main Container: Wide Desktop Max-Width (~1440px–1560px) with comfortable gutters */}
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14 py-6 sm:py-10 relative z-10" id="interactive-form-top">
        
        {/* ================= HERO SECTION ================= */}
        <section className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 animate-fade-in-up">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-[13px] font-bold tracking-widest uppercase mb-4 shadow-xs">
            <Sliders className="w-3.5 h-3.5 text-emerald-600" />
            <span>PROJECT ENQUIRY</span>
          </div>

          {/* Headline with emerald-to-teal gradient on 'Incredible' */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[52px] font-black text-slate-900 tracking-tight leading-[1.12] mb-4">
            Let&apos;s Build Something{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 bg-clip-text text-transparent">
              Incredible
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto mb-6">
            Choose your mission, set your budget, and tell us what you have in mind. We&apos;ll help you find the right solution for your business.
          </p>

          {/* 3 Small Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 pt-1">
            {/* Trust 1 */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-xs text-xs sm:text-sm text-slate-700">
              <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <Zap className="w-3 h-3 fill-amber-600 text-amber-600" />
              </span>
              <span className="font-semibold text-slate-900">Quick &amp; Simple</span>
              <span className="text-slate-400">&middot;</span>
              <span className="text-slate-500">Takes less than 1 minute</span>
            </div>

            {/* Trust 2 */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-xs text-xs sm:text-sm text-slate-700">
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <Monitor className="w-3 h-3 text-emerald-700" />
              </span>
              <span className="font-semibold text-slate-900">Tailored Solutions</span>
              <span className="text-slate-400">&middot;</span>
              <span className="text-slate-500">As per your budget &amp; needs</span>
            </div>

            {/* Trust 3 */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-xs text-xs sm:text-sm text-slate-700">
              <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-3 h-3 text-teal-700" />
              </span>
              <span className="font-semibold text-slate-900">No Spam</span>
              <span className="text-slate-400">&middot;</span>
              <span className="text-slate-500">Only genuine responses</span>
            </div>
          </div>
        </section>

        {/* ================= JOB APPLICATION INTERCEPTOR BANNER ================= */}
        {jobBlockNotice && (
          <div className="max-w-4xl mx-auto mb-6 p-4 sm:p-5 rounded-2xl bg-amber-50 border-2 border-amber-300 text-amber-900 shadow-sm flex items-start gap-3.5 animate-fade-in-up">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-bold text-slate-900 text-sm sm:text-base">Hiring Notice</p>
              <p className="text-xs sm:text-sm leading-relaxed text-amber-950">{jobBlockNotice}</p>
            </div>
          </div>
        )}

        {/* ================= TWO-COLUMN INTERACTIVE ENQUIRY LAYOUT (~70% Form / ~30% Summary) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-10 items-start">
          
          {/* ================= LEFT COLUMN (~70%): FORM CONTAINER WITH INTEGRATED STEPPER ================= */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Top Error Message Banner if validation failed */}
            {submissionError && (
              <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-semibold flex items-center gap-2.5 shadow-xs">
                <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                <span>{submissionError}</span>
              </div>
            )}

            {/* Main Interactive Form Card with clean border & roomy desktop padding */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 xl:p-9 shadow-xs relative">

              {/* Seamless Stepper Navigation inside Form Card */}
              <div className="border-b border-slate-100 pb-5 mb-7">
                
                {/* Desktop Stepper: 4 Clickable Segmented Tabs */}
                <div className="hidden sm:grid grid-cols-4 gap-2.5">
                  {STEPS.map((s) => {
                    const isActive = currentStep === s.step;
                    const isCompleted =
                      (s.step === 1 && hasService) ||
                      (s.step === 2 && hasBudget) ||
                      (s.step === 3 && hasObjective) ||
                      (s.step === 4 && hasContact);

                    return (
                      <button
                        key={s.step}
                        type="button"
                        onClick={() => {
                          setJobBlockNotice("");
                          setCurrentStep(s.step);
                        }}
                        className={`p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer flex items-center gap-3 ${
                          isActive
                            ? "bg-emerald-50 border-emerald-500 ring-1 ring-emerald-500/20 shadow-xs"
                            : isCompleted
                            ? "bg-slate-50 border-slate-200 hover:border-emerald-300"
                            : "bg-white border-slate-100 text-slate-400 hover:border-slate-200"
                        }`}
                      >
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 font-bold text-xs transition-colors ${
                            isActive
                              ? "bg-emerald-600 text-white shadow-xs"
                              : isCompleted
                              ? "bg-emerald-100 text-emerald-800"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          {isCompleted ? <Check className="w-3.5 h-3.5 stroke-[2.5]" /> : s.step}
                        </div>
                        <div className="min-w-0">
                          <p className={`text-xs sm:text-sm font-bold truncate ${isActive ? "text-emerald-900" : isCompleted ? "text-slate-800" : "text-slate-500"}`}>
                            {s.title}
                          </p>
                          <p className="text-[11px] text-slate-400 truncate hidden xl:block">
                            {s.subtitle}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Mobile Stepper */}
                <div className="sm:hidden flex items-center justify-between gap-1 pt-1">
                  {STEPS.map((s, idx) => {
                    const isActive = currentStep === s.step;
                    const isCompleted =
                      (s.step === 1 && hasService) ||
                      (s.step === 2 && hasBudget) ||
                      (s.step === 3 && hasObjective) ||
                      (s.step === 4 && hasContact);

                    return (
                      <React.Fragment key={s.step}>
                        <button
                          type="button"
                          onClick={() => {
                            setJobBlockNotice("");
                            setCurrentStep(s.step);
                          }}
                          className="flex flex-col items-center gap-1 flex-1 py-1 cursor-pointer"
                        >
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                              isActive
                                ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30 ring-2 ring-emerald-400"
                                : isCompleted
                                ? "bg-emerald-100 text-emerald-800"
                                : "bg-slate-100 text-slate-400"
                            }`}
                          >
                            {isCompleted ? <Check className="w-4 h-4 stroke-[2.5]" /> : s.step}
                          </div>
                          <span className={`text-[11px] font-bold ${isActive ? "text-emerald-700" : "text-slate-500"}`}>
                            {s.title}
                          </span>
                        </button>
                        {idx < STEPS.length - 1 && (
                          <div className={`h-0.5 flex-1 rounded-full ${currentStep > s.step ? "bg-emerald-400" : "bg-slate-200"}`} />
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>

              </div>

              {/* ---------- STAGE 01: SERVICE SELECTION ---------- */}
              {currentStep === 1 && (
                <div className="animate-fade-in-up">
                  
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                        1
                      </span>
                      <h2 className="text-xl sm:text-2xl lg:text-[26px] font-black text-slate-900 tracking-tight">
                        What are we building today?
                      </h2>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-500 bg-slate-50 px-3 py-1 rounded-full border border-slate-200/90 self-start sm:self-auto">
                      <Info className="w-3.5 h-3.5 text-slate-400" />
                      You can select multiple services.
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm lg:text-[15px] text-slate-500 mb-6 pl-0 sm:pl-11">
                    Select one or more services that fit your needs. Tap any card to select.
                  </p>

                  {validationErrors.services && (
                    <div className="mb-5 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-semibold flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                      <span>{validationErrors.services}</span>
                    </div>
                  )}

                  {/* 3-Column Service Cards Grid on desktop with generous width and padding */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4.5 xl:gap-5 mb-8">
                    {SERVICE_TILES.map((tile) => {
                      const Icon = tile.icon;
                      const isSelected = selectedServices.includes(tile.name);

                      return (
                        <button
                          key={tile.id}
                          type="button"
                          onClick={() => handleToggleService(tile.name)}
                          aria-pressed={isSelected}
                          className={`text-left p-5 sm:p-5.5 xl:p-6 rounded-2xl border transition-all duration-200 cursor-pointer select-none flex flex-col justify-between group relative ${
                            isSelected
                              ? "bg-emerald-50/50 border-emerald-500 ring-2 ring-emerald-500/20 shadow-xs"
                              : "bg-white border-slate-200/90 hover:border-emerald-300 hover:shadow-xs"
                          }`}
                        >
                          <div>
                            {/* Top row: Icon + check indicator */}
                            <div className="flex items-center justify-between mb-3.5">
                              <div
                                className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-colors ${tile.badgeBg} ${tile.badgeText} ${tile.badgeBorder}`}
                              >
                                <Icon className="w-5 h-5" />
                              </div>

                              <div
                                className={`w-5.5 h-5.5 rounded-full border flex items-center justify-center transition-all ${
                                  isSelected
                                    ? "bg-emerald-600 border-emerald-600 text-white shadow-xs"
                                    : "border-slate-300 bg-white group-hover:border-slate-400"
                                }`}
                              >
                                {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                              </div>
                            </div>

                            {/* Service Name */}
                            <h3 className="text-base sm:text-[17px] font-bold text-slate-900 mb-1.5 leading-snug group-hover:text-emerald-700 transition-colors">
                              {tile.name}
                            </h3>

                            {/* Service Description */}
                            <p className="text-xs sm:text-[13.5px] xl:text-[14px] text-slate-500 leading-relaxed font-normal">
                              {tile.desc}
                            </p>
                          </div>

                          {/* Card Footer */}
                          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] sm:text-xs">
                            <span className="font-mono text-slate-400">{tile.code}</span>
                            <span className={`font-semibold ${isSelected ? "text-emerald-700" : "text-slate-400 group-hover:text-slate-600"}`}>
                              {isSelected ? "Selected" : "Tap to select"}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Stage 1 Actions */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <p className="text-xs sm:text-sm text-slate-500 font-medium">
                      {selectedServices.length > 0 ? (
                        <span className="text-emerald-700 font-bold">{selectedServices.length} service(s) selected</span>
                      ) : (
                        "Please choose at least 1 service to proceed"
                      )}
                    </p>

                    <button
                      type="button"
                      onClick={() => handleNextStep(2)}
                      className="py-3 sm:py-3.5 px-6 sm:px-7 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-sm shadow-emerald-600/20 transition-all cursor-pointer"
                    >
                      <span>Continue to Budget</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              )}

              {/* ---------- STAGE 02: BUDGET SELECTION ---------- */}
              {currentStep === 2 && (
                <div className="animate-fade-in-up">
                  
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                      2
                    </span>
                    <h2 className="text-xl sm:text-2xl lg:text-[26px] font-black text-slate-900 tracking-tight">
                      What&apos;s your comfortable project budget?
                    </h2>
                  </div>

                  <p className="text-xs sm:text-sm lg:text-[15px] text-slate-500 mb-4 pl-0 sm:pl-11">
                    Projects start from ₹2,000. The final cost depends on your requirements, features, complexity, and scope.
                  </p>

                  {/* Light Amber Reassurance Helper Box */}
                  <div className="mb-6 p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 flex items-start sm:items-center gap-3 text-xs sm:text-sm text-amber-900">
                    <Lightbulb className="w-4.5 h-4.5 text-amber-600 shrink-0 mt-0.5 sm:mt-0" />
                    <p className="leading-relaxed">
                      <strong>Flexible solutions for different budgets.</strong> Every project is different. Your budget helps us recommend a suitable scope, and we can explore practical options for different budgets.
                    </p>
                  </div>

                  {validationErrors.budget && (
                    <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-semibold flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                      <span>{validationErrors.budget}</span>
                    </div>
                  )}

                  {/* Selectable Budget Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-5">
                    {/* 1. ₹2,000–₹5,000 and 2. ₹5,000–₹10,000 */}
                    {BUDGET_TIER_1.map((b) => {
                      const isSelected = !isCustomBudgetOpen && selectedBudget === b.label;
                      return (
                        <button
                          key={b.label}
                          type="button"
                          onClick={() => {
                            setIsCustomBudgetOpen(false);
                            setSelectedBudget(b.label);
                            setValidationErrors((prev) => ({ ...prev, budget: "" }));
                          }}
                          className={`text-left p-4.5 sm:p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                            isSelected
                              ? "bg-emerald-50/50 border-emerald-500 ring-2 ring-emerald-500/20 shadow-xs"
                              : "bg-white border-slate-200/90 hover:border-emerald-300 hover:shadow-xs"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                              {b.tag}
                            </span>
                            <div
                              className={`w-4.5 h-4.5 rounded-full border flex items-center justify-center ${
                                isSelected ? "bg-emerald-600 border-emerald-600 text-white" : "border-slate-300"
                              }`}
                            >
                              {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                          </div>
                          <span className="text-base sm:text-lg xl:text-xl font-black text-slate-900 block my-1">
                            {b.label}
                          </span>
                          <span className="text-xs sm:text-[13px] text-slate-500 leading-snug">
                            {b.hint}
                          </span>
                        </button>
                      );
                    })}

                    {/* 3. Community Support Option Card */}
                    <button
                      type="button"
                      onClick={() => {
                        setIsCustomBudgetOpen(false);
                        setSelectedBudget("Community Support");
                        setValidationErrors((prev) => ({ ...prev, budget: "" }));
                      }}
                      className={`text-left p-4.5 sm:p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                        !isCustomBudgetOpen && selectedBudget === "Community Support"
                          ? "bg-emerald-50/50 border-emerald-500 ring-2 ring-emerald-500/20 shadow-xs"
                          : "bg-white border-slate-200/90 hover:border-emerald-300 hover:shadow-xs"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                          Community Support
                        </span>
                        <div
                          className={`w-4.5 h-4.5 rounded-full border flex items-center justify-center ${
                            !isCustomBudgetOpen && selectedBudget === "Community Support"
                              ? "bg-emerald-600 border-emerald-600 text-white"
                              : "border-slate-300"
                          }`}
                        >
                          {!isCustomBudgetOpen && selectedBudget === "Community Support" && (
                            <Check className="w-3 h-3 stroke-[3]" />
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 my-1">
                        <HandHeart className="w-5 h-5 text-emerald-600 shrink-0" />
                        <span className="text-base sm:text-lg xl:text-xl font-black text-slate-900 block">
                          Community Support
                        </span>
                      </div>
                      <span className="text-xs sm:text-[13px] text-slate-500 leading-snug">
                        A little support. A meaningful start.
                      </span>
                    </button>

                    {/* Expanded Community Details & Student Learning Section */}
                    {!isCustomBudgetOpen && selectedBudget === "Community Support" && (
                      <div className="col-span-1 sm:col-span-2 lg:col-span-3 rounded-2xl border border-emerald-200/90 bg-emerald-50/30 p-5 sm:p-7 shadow-2xs space-y-6 animate-fade-in-up">
                        {/* Section Header: Title, Tagline & Refined Description */}
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b border-emerald-100">
                          <div className="flex items-start gap-3.5">
                            <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-200/70 mt-0.5">
                              <HandHeart className="w-6 h-6 text-emerald-700" />
                            </div>
                            <div>
                              <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                                <h3 className="text-[22px] sm:text-[24px] font-bold text-slate-900 tracking-tight">
                                  Community Support
                                </h3>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-[13px] font-semibold bg-emerald-100/90 text-emerald-800 border border-emerald-200">
                                  A little support. A meaningful start.
                                </span>
                              </div>
                              <p className="text-[15px] sm:text-base text-slate-600 leading-[1.65] font-normal max-w-3xl">
                                We believe good ideas deserve a chance to grow. If you&apos;re starting a small business or exploring a meaningful idea with limited resources, tell us what you have in mind. Depending on the project and our available capacity, we may be able to offer selected technology services at no cost.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Choose focus area */}
                        <div>
                          <span className="text-xs sm:text-sm font-semibold text-slate-700 block mb-2.5">
                            Choose your focus:
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            <button
                              type="button"
                              onClick={() => setCommunityCategory("business")}
                              className={`text-left p-4 sm:p-4.5 rounded-xl border text-[14px] sm:text-[15px] transition-all cursor-pointer flex items-center justify-between ${
                                communityCategory === "business"
                                  ? "bg-white border-emerald-500 text-emerald-950 font-semibold ring-1 ring-emerald-500/30 shadow-xs"
                                  : "bg-slate-50/70 border-slate-200 text-slate-700 hover:bg-white hover:border-slate-300"
                              }`}
                            >
                              <span className="flex items-center gap-2.5">
                                <Building className="w-5 h-5 text-emerald-600 shrink-0" />
                                <span>Early-Stage Business / Starter Idea</span>
                              </span>
                              {communityCategory === "business" && (
                                <Check className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                              )}
                            </button>

                            <button
                              type="button"
                              onClick={() => setCommunityCategory("student")}
                              className={`text-left p-4 sm:p-4.5 rounded-xl border text-[14px] sm:text-[15px] transition-all cursor-pointer flex items-center justify-between ${
                                communityCategory === "student"
                                  ? "bg-white border-emerald-500 text-emerald-950 font-semibold ring-1 ring-emerald-500/30 shadow-xs"
                                  : "bg-slate-50/70 border-slate-200 text-slate-700 hover:bg-white hover:border-slate-300"
                              }`}
                            >
                              <span className="flex items-center gap-2.5">
                                <GraduationCap className="w-5 h-5 text-emerald-600 shrink-0" />
                                <span>Student Practical Learning Guidance</span>
                              </span>
                              {communityCategory === "student" && (
                                <Check className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                              )}
                            </button>
                          </div>
                        </div>

                        {/* Student Learning Support Section */}
                        {communityCategory === "student" && (
                          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-emerald-200/80 shadow-2xs space-y-4">
                            <div className="flex items-center gap-2.5">
                              <GraduationCap className="w-5.5 h-5.5 text-emerald-600 shrink-0" />
                              <h4 className="text-lg sm:text-[20px] font-bold text-slate-900">
                                Learn How Technology Works in the Real World
                              </h4>
                            </div>
                            <p className="text-[15px] sm:text-base text-slate-600 leading-[1.65] font-normal">
                              Curious about how websites, software, and digital tools are actually built and used in business? We welcome students who want to understand real-world technology, explore our development approach, and learn from practical examples. Introductory guidance may be available at no cost.
                            </p>
                            
                            <div>
                              <span className="text-[13px] sm:text-sm font-semibold text-slate-700 block mb-2">
                                Helpful for students pursuing:
                              </span>
                              <div className="flex flex-wrap gap-2">
                                {STUDENT_DEGREE_OPTIONS.map((deg) => (
                                  <span
                                    key={deg}
                                    className="inline-flex items-center px-3 py-1.5 rounded-lg text-[13px] sm:text-sm font-medium bg-emerald-50/80 text-emerald-900 border border-emerald-200/70"
                                  >
                                    {deg}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50/90 border border-slate-200/80 text-[13px] sm:text-sm text-slate-600 leading-relaxed flex items-start gap-2.5">
                              <Info className="w-4.5 h-4.5 text-slate-500 shrink-0 mt-0.5" />
                              <p>
                                We can explain practical technology concepts, demonstrate how real-world systems work, and share introductory guidance. Students are responsible for completing their own assignments, academic projects, dissertations, and research work.
                              </p>
                            </div>
                          </div>
                        )}

                        {/* Respectful Capacity Note for Business */}
                        {communityCategory === "business" && (
                          <div className="p-4 rounded-xl bg-white border border-emerald-200/80 text-[13px] sm:text-sm text-slate-600 leading-relaxed flex items-start gap-2.5">
                            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                            <p>
                              <strong className="text-slate-800 font-semibold">Considered case by case:</strong> No-cost community support is evaluated individually depending on project suitability, mission alignment, and our available capacity.
                            </p>
                          </div>
                        )}

                        {/* Short Optional Question */}
                        <div>
                          <label
                            htmlFor="community_message"
                            className="text-sm sm:text-[15px] font-semibold text-slate-800 block mb-1.5"
                          >
                            Tell us a little about what you&apos;re building or what you&apos;d like to learn:
                            <span className="text-slate-400 font-normal ml-1.5">(optional)</span>
                          </label>
                          <textarea
                            id="community_message"
                            rows={2}
                            value={communityMessage}
                            onChange={(e) => {
                              setCommunityMessage(e.target.value);
                              setJobBlockNotice("");
                            }}
                            placeholder={
                              communityCategory === "student"
                                ? "e.g. Studying MCA, curious about how live production databases & APIs are deployed..."
                                : "e.g. Launching a small local community service, looking to get guidance on a starter landing page..."
                            }
                            className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 text-sm sm:text-base leading-relaxed focus:outline-hidden focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                          />
                          <p className="text-[13px] sm:text-sm text-slate-500 mt-1.5">
                            Keep it brief and comfortable. We will review your message thoughtfully.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* 4. ₹10,000–₹25,000, 5. ₹25,000–₹50,000, 6. ₹50,000+ */}
                    {BUDGET_TIER_2.map((b) => {
                      const isSelected = !isCustomBudgetOpen && selectedBudget === b.label;
                      return (
                        <button
                          key={b.label}
                          type="button"
                          onClick={() => {
                            setIsCustomBudgetOpen(false);
                            setSelectedBudget(b.label);
                            setValidationErrors((prev) => ({ ...prev, budget: "" }));
                          }}
                          className={`text-left p-4.5 sm:p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                            isSelected
                              ? "bg-emerald-50/50 border-emerald-500 ring-2 ring-emerald-500/20 shadow-xs"
                              : "bg-white border-slate-200/90 hover:border-emerald-300 hover:shadow-xs"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                              {b.tag}
                            </span>
                            <div
                              className={`w-4.5 h-4.5 rounded-full border flex items-center justify-center ${
                                isSelected ? "bg-emerald-600 border-emerald-600 text-white" : "border-slate-300"
                              }`}
                            >
                              {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                          </div>
                          <span className="text-base sm:text-lg xl:text-xl font-black text-slate-900 block my-1">
                            {b.label}
                          </span>
                          <span className="text-xs sm:text-[13px] text-slate-500 leading-snug">
                            {b.hint}
                          </span>
                        </button>
                      );
                    })}

                    {/* 7. "I'm Not Sure Yet" Card */}
                    <button
                      type="button"
                      onClick={() => {
                        setIsCustomBudgetOpen(false);
                        setSelectedBudget("I'm Not Sure Yet — Help Me Decide");
                        setValidationErrors((prev) => ({ ...prev, budget: "" }));
                      }}
                      className={`text-left p-4.5 sm:p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between sm:col-span-2 lg:col-span-3 ${
                        !isCustomBudgetOpen && selectedBudget === "I'm Not Sure Yet — Help Me Decide"
                          ? "bg-emerald-50/50 border-emerald-500 ring-2 ring-emerald-500/20 shadow-xs"
                          : "bg-white border-slate-200/90 hover:border-emerald-300 hover:shadow-xs"
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 w-full">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700">
                              Consultation
                            </span>
                          </div>
                          <span className="text-sm sm:text-base font-bold text-slate-900 block my-0.5">
                            I&apos;m Not Sure Yet
                          </span>
                          <span className="text-xs sm:text-[13px] text-slate-500 leading-snug">
                            Help me decide based on my requirements — we will explore practical options together
                          </span>
                        </div>
                        <div
                          className={`w-4.5 h-4.5 rounded-full border flex items-center justify-center shrink-0 self-end sm:self-center ${
                            !isCustomBudgetOpen && selectedBudget === "I'm Not Sure Yet — Help Me Decide"
                              ? "bg-emerald-600 border-emerald-600 text-white"
                              : "border-slate-300"
                          }`}
                        >
                          {!isCustomBudgetOpen && selectedBudget === "I'm Not Sure Yet — Help Me Decide" && (
                            <Check className="w-3 h-3 stroke-[3]" />
                          )}
                        </div>
                      </div>
                    </button>
                  </div>

                  {/* "Enter My Own Budget" Option */}
                  <div className="mt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setIsCustomBudgetOpen(true);
                        setSelectedBudget("");
                      }}
                      className={`w-full text-left p-4.5 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                        isCustomBudgetOpen
                          ? "bg-emerald-50/50 border-emerald-500 ring-2 ring-emerald-500/20 shadow-xs"
                          : "bg-white border-slate-200/90 hover:border-emerald-300"
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-base">
                          ₹
                        </div>
                        <div>
                          <span className="text-sm sm:text-base font-bold text-slate-900 block">
                            Enter My Own Budget
                          </span>
                          <span className="text-xs sm:text-[13px] text-slate-500 block">
                            Have a specific project budget in mind? Enter your target amount.
                          </span>
                        </div>
                      </div>
                      <div
                        className={`w-4.5 h-4.5 rounded-full border flex items-center justify-center ${
                          isCustomBudgetOpen ? "bg-emerald-600 border-emerald-600 text-white" : "border-slate-300"
                        }`}
                      >
                        {isCustomBudgetOpen && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </button>

                    {/* Revealed Rupee Input */}
                    {isCustomBudgetOpen && (
                      <div className="mt-3 p-4 sm:p-5 rounded-2xl bg-slate-50/80 border border-emerald-300 animate-fade-in-up">
                        <label htmlFor="custom_inr" className="text-xs sm:text-sm font-bold text-slate-700 block mb-2 uppercase">
                          YOUR TARGET AMOUNT (INR):
                        </label>
                        <div className="relative max-w-sm">
                          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-bold text-slate-500 text-base">
                            ₹
                          </span>
                          <input
                            id="custom_inr"
                            type="number"
                            min="2000"
                            step="500"
                            value={customBudgetAmount}
                            onChange={(e) => {
                              setCustomBudgetAmount(e.target.value);
                              setValidationErrors((prev) => ({ ...prev, budget: "" }));
                            }}
                            placeholder="e.g. 3500, 15000, 75000"
                            className="w-full pl-8 pr-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 font-bold text-sm sm:text-base focus:outline-hidden focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                          />
                        </div>
                        <p className="text-xs text-slate-500 mt-2">
                          Minimum starter budget is ₹2,000.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Stage 2 Actions */}
                  <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="py-3 sm:py-3.5 px-5 sm:px-6 rounded-xl border border-slate-200/90 text-slate-700 hover:bg-slate-50 font-bold text-xs sm:text-sm inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleNextStep(3)}
                      className="py-3 sm:py-3.5 px-6 sm:px-7 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-sm shadow-emerald-600/20 transition-all cursor-pointer"
                    >
                      <span>Continue to Project Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              )}

              {/* ---------- STAGE 03: PROJECT DETAILS ---------- */}
              {currentStep === 3 && (
                <div className="animate-fade-in-up">
                  
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                      3
                    </span>
                    <h2 className="text-xl sm:text-2xl lg:text-[26px] font-black text-slate-900 tracking-tight">
                      What would you like to achieve?
                    </h2>
                    <span className="text-xs sm:text-sm font-semibold text-slate-400 lowercase">(optional)</span>
                  </div>

                  <p className="text-xs sm:text-sm lg:text-[15px] text-slate-500 mb-5 pl-0 sm:pl-11">
                    Tell us a bit about your idea or business objective. You can choose quick chips or type freely.
                  </p>

                  {/* Quick Select Chips */}
                  <div className="mb-6">
                    <span className="text-xs sm:text-sm font-bold text-slate-700 block mb-3">
                      Quick Objective Chips (Tap to add):
                    </span>
                    <div className="flex flex-wrap gap-2.5">
                      {QUICK_CHIPS.map((chip) => {
                        const isChipActive = selectedChips.includes(chip);
                        return (
                          <button
                            key={chip}
                            type="button"
                            onClick={() => handleToggleChip(chip)}
                            className={`text-xs sm:text-sm px-4 py-2 rounded-full border transition-all cursor-pointer font-medium ${
                              isChipActive
                                ? "bg-emerald-600 text-white border-emerald-600 font-semibold shadow-xs"
                                : "bg-slate-50 border-slate-200/90 text-slate-700 hover:border-emerald-300 hover:bg-slate-100"
                            }`}
                          >
                            {chip}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Clean Textarea with character counter */}
                  <div className="space-y-2 mb-6">
                    <label htmlFor="objective_text" className="text-xs sm:text-sm font-bold text-slate-700 block">
                      Describe your project or goals:
                    </label>
                    <textarea
                      id="objective_text"
                      rows={4}
                      maxLength={500}
                      value={objective}
                      onChange={(e) => {
                        setObjective(e.target.value);
                        setJobBlockNotice("");
                      }}
                      placeholder="Tell us what you have in mind… For example, a business website, a billing system, or an easier way to manage daily tasks."
                      className="w-full bg-slate-50/50 border border-slate-200/90 rounded-2xl p-4 sm:p-5 text-sm sm:text-base text-slate-800 placeholder:text-slate-400 focus:bg-white focus:outline-hidden focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 resize-none transition-all leading-relaxed"
                    />
                    <div className="flex justify-end">
                      <span className="text-xs text-slate-400 font-mono">
                        {objective.length}/500
                      </span>
                    </div>
                  </div>

                  {/* Stage 3 Actions */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="py-3 sm:py-3.5 px-5 sm:px-6 rounded-xl border border-slate-200/90 text-slate-700 hover:bg-slate-50 font-bold text-xs sm:text-sm inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleNextStep(4)}
                      className="py-3 sm:py-3.5 px-6 sm:px-7 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-sm shadow-emerald-600/20 transition-all cursor-pointer"
                    >
                      <span>Continue to Contact</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              )}

              {/* ---------- STAGE 04: CONTACT & SUBMISSION ---------- */}
              {currentStep === 4 && (
                <div className="animate-fade-in-up">
                  
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                      4
                    </span>
                    <h2 className="text-xl sm:text-2xl lg:text-[26px] font-black text-slate-900 tracking-tight">
                      Where can we reach you?
                    </h2>
                  </div>

                  <p className="text-xs sm:text-sm lg:text-[15px] text-slate-500 mb-6 pl-0 sm:pl-11">
                    Share your details so our team can review your requirements and get back to you promptly.
                  </p>

                  {/* Honeypot for spam bots */}
                  <input
                    type="text"
                    name="botcheck"
                    value={botcheck}
                    onChange={(e) => setBotcheck(e.target.value)}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-5">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="mission_name" className="text-xs sm:text-sm font-bold text-slate-700 flex items-center gap-1.5">
                        <User className="w-4 h-4 text-emerald-600" />
                        <span>Full Name</span> <span className="text-emerald-600">*</span>
                      </label>
                      <input
                        id="mission_name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          setValidationErrors((prev) => ({ ...prev, name: "" }));
                        }}
                        placeholder="e.g. John Doe or Priya Sharma"
                        className={`w-full px-4 py-3 bg-slate-50/50 border ${
                          validationErrors.name ? "border-red-400 bg-red-50/30" : "border-slate-200/90"
                        } rounded-xl text-slate-900 text-sm sm:text-base focus:bg-white focus:outline-hidden focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all`}
                      />
                      {validationErrors.name && (
                        <p className="text-red-600 text-xs font-medium">{validationErrors.name}</p>
                      )}
                    </div>

                    {/* Mobile / WhatsApp Number */}
                    <div className="space-y-1.5">
                      <label htmlFor="mission_phone" className="text-xs sm:text-sm font-bold text-slate-700 flex items-center gap-1.5">
                        <Phone className="w-4 h-4 text-emerald-600" />
                        <span>Mobile / WhatsApp</span> <span className="text-emerald-600">*</span>
                      </label>
                      <input
                        id="mission_phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          setValidationErrors((prev) => ({ ...prev, phone: "" }));
                        }}
                        placeholder="+91 90000 00000"
                        className={`w-full px-4 py-3 bg-slate-50/50 border ${
                          validationErrors.phone ? "border-red-400 bg-red-50/30" : "border-slate-200/90"
                        } rounded-xl text-slate-900 text-sm sm:text-base focus:bg-white focus:outline-hidden focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all`}
                      />
                      {validationErrors.phone && (
                        <p className="text-red-600 text-xs font-medium">{validationErrors.phone}</p>
                      )}
                    </div>

                    {/* Business / Organization Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="mission_org" className="text-xs sm:text-sm font-bold text-slate-700 flex items-center gap-1.5">
                        <Building className="w-4 h-4 text-slate-400" />
                        <span>Business / Organization</span> <span className="text-slate-400 font-normal lowercase">(optional)</span>
                      </label>
                      <input
                        id="mission_org"
                        type="text"
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        placeholder="e.g. Acme Studio, Retail Shop"
                        className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200/90 rounded-xl text-slate-900 text-sm sm:text-base focus:bg-white focus:outline-hidden focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                      />
                    </div>

                    {/* Email Address */}
                    <div className="space-y-1.5">
                      <label htmlFor="mission_email" className="text-xs sm:text-sm font-bold text-slate-700 flex items-center gap-1.5">
                        <Mail className="w-4 h-4 text-slate-400" />
                        <span>Email Address</span> <span className="text-slate-400 font-normal lowercase">(optional)</span>
                      </label>
                      <input
                        id="mission_email"
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setValidationErrors((prev) => ({ ...prev, email: "" }));
                        }}
                        placeholder="you@example.com"
                        className={`w-full px-4 py-3 bg-slate-50/50 border ${
                          validationErrors.email ? "border-red-400 bg-red-50/30" : "border-slate-200/90"
                        } rounded-xl text-slate-900 text-sm sm:text-base focus:bg-white focus:outline-hidden focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all`}
                      />
                      {validationErrors.email && (
                        <p className="text-red-600 text-xs font-medium">{validationErrors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Additional Requirements */}
                  <div className="space-y-1.5 mb-6">
                    <label htmlFor="mission_addl" className="text-xs sm:text-sm font-bold text-slate-700 flex items-center gap-1.5">
                      <FileText className="w-4 h-4 text-slate-400" />
                      <span>Additional Requirements</span> <span className="text-slate-400 font-normal lowercase">(optional)</span>
                    </label>
                    <input
                      id="mission_addl"
                      type="text"
                      value={additionalRequirements}
                      onChange={(e) => {
                        setAdditionalRequirements(e.target.value);
                        setJobBlockNotice("");
                      }}
                      placeholder="e.g. Target launch date, reference website link, specific platform..."
                      className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200/90 rounded-xl text-slate-900 text-sm sm:text-base focus:bg-white focus:outline-hidden focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                    />
                  </div>

                  {/* Privacy Reassurance Note */}
                  <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200/80 flex items-center gap-3 text-xs sm:text-sm text-emerald-900 mb-6">
                    <ShieldCheck className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                    <span>Your details are used only to respond to your enquiry. No spam or marketing lists.</span>
                  </div>

                  {/* Stage 4 Navigation & Action Buttons */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3.5">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="w-full sm:w-auto py-3.5 px-6 rounded-xl border border-slate-200/90 text-slate-700 hover:bg-slate-50 font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back to Details</span>
                    </button>

                    <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-3">
                      {/* Primary WhatsApp Button */}
                      <button
                        type="button"
                        onClick={handleLaunchWhatsApp}
                        className="w-full sm:w-auto py-3.5 sm:py-4 px-6 sm:px-7 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
                      >
                        <MessageCircle className="w-4.5 h-4.5" />
                        <span>Send via WhatsApp</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      {/* Secondary Gmail Compose Button */}
                      <button
                        type="button"
                        onClick={handleLaunchGmail}
                        className="w-full sm:w-auto py-3.5 sm:py-4 px-6 sm:px-7 rounded-xl bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-800 border border-slate-300 font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
                      >
                        <Mail className="w-4.5 h-4.5 text-emerald-600" />
                        <span>Send via Email</span>
                      </button>
                    </div>
                  </div>

                </div>
              )}

            </div>

            {/* Student Guidance / Alternate Track Info Card */}
            <div className="p-4.5 rounded-2xl bg-white border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-slate-500 shadow-xs">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Notice: Client project and digital solutions enquiries only.</span>
              </div>

              <button
                type="button"
                onClick={handleStudentTrack}
                className="text-teal-700 hover:text-teal-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer font-medium"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Student asking for project guidance? <strong>Student Track</strong></span>
              </button>
            </div>

          </div>

          {/* ================= RIGHT COLUMN (~30%): COMPACT STICKY SUMMARY (DESKTOP) ================= */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-4">
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-xs relative overflow-hidden">
              
              {/* Card Header with Green Accent */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                    <FileText className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-slate-900 leading-none">
                      Your Project Summary
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Review your details before sending.
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  {completedCheckpointsCount}/4 ({missionProgressPercent}%)
                </span>
              </div>

              {/* Interactive Progress Bar */}
              <div className="w-full bg-slate-100 h-1.5 rounded-full mb-5 overflow-hidden">
                <div
                  className="bg-emerald-500 h-full rounded-full transition-all duration-300"
                  style={{ width: `${Math.max(missionProgressPercent, 8)}%` }}
                />
              </div>

              {/* Summary Items */}
              <div className="space-y-4 mb-6 text-xs sm:text-sm">
                
                {/* 1. Services */}
                <div className="group">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Selected Services:
                    </span>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="text-xs text-emerald-600 hover:text-emerald-800 font-semibold inline-flex items-center gap-0.5 cursor-pointer"
                    >
                      <Pencil className="w-3 h-3" />
                      <span>Edit</span>
                    </button>
                  </div>

                  {selectedServices.length > 0 ? (
                    <div className="flex flex-wrap gap-1.5">
                      {selectedServices.map((s) => (
                        <span
                          key={s}
                          className="px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-1"
                        >
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span>{s}</span>
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-slate-400 italic bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      No services selected yet
                    </p>
                  )}
                </div>

                {/* 2. Budget */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Estimated Budget:
                    </span>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="text-xs text-emerald-600 hover:text-emerald-800 font-semibold inline-flex items-center gap-0.5 cursor-pointer"
                    >
                      <Pencil className="w-3 h-3" />
                      <span>Edit</span>
                    </button>
                  </div>
                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <span className="font-bold text-sm sm:text-base text-slate-900">
                      {resolvedBudget}
                    </span>
                    {selectedBudget === "Community Support" && communityMessage.trim() && (
                      <p className="text-xs text-slate-600 mt-1.5 pt-1.5 border-t border-slate-200/80">
                        <span className="font-semibold text-slate-700">Focus:</span> {communityMessage.trim()}
                      </p>
                    )}
                  </div>
                </div>

                {/* 3. Objective */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Project Details:
                    </span>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(3)}
                      className="text-xs text-emerald-600 hover:text-emerald-800 font-semibold inline-flex items-center gap-0.5 cursor-pointer"
                    >
                      <Pencil className="w-3 h-3" />
                      <span>Edit</span>
                    </button>
                  </div>
                  <p className="text-slate-600 line-clamp-3 leading-relaxed bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-xs sm:text-[13px]">
                    {objective.trim()
                      ? objective
                      : selectedChips.length > 0
                      ? selectedChips.join(", ")
                      : selectedBudget === "Community Support" && communityMessage.trim()
                      ? communityMessage.trim()
                      : "Not provided yet"}
                  </p>
                </div>

                {/* 4. Contact */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Contact:
                    </span>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(4)}
                      className="text-xs text-emerald-600 hover:text-emerald-800 font-semibold inline-flex items-center gap-0.5 cursor-pointer"
                    >
                      <Pencil className="w-3 h-3" />
                      <span>Edit</span>
                    </button>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs sm:text-[13px] space-y-1">
                    <p className="font-bold text-slate-900">
                      {name || <span className="text-slate-400 font-normal italic">Name pending</span>}
                    </p>
                    <p className="text-slate-600">
                      {phone || <span className="text-slate-400 font-normal italic">Phone pending</span>}
                    </p>
                    {organization && <p className="text-slate-500 truncate">{organization}</p>}
                    {email && <p className="text-slate-500 truncate">{email}</p>}
                  </div>
                </div>

              </div>

              {/* Two Prominent Action Buttons */}
              <div className="space-y-3 pt-3 border-t border-slate-100">
                {/* Send via WhatsApp */}
                <button
                  type="button"
                  onClick={handleLaunchWhatsApp}
                  className="w-full py-3.5 sm:py-4 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-xs sm:text-sm tracking-wide inline-flex items-center justify-between transition-all duration-200 shadow-md shadow-emerald-600/25 active:scale-[0.99] cursor-pointer group"
                >
                  <span className="flex items-center gap-2.5">
                    <MessageCircle className="w-4.5 h-4.5 fill-white text-emerald-600" />
                    <span>Send via WhatsApp</span>
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Send via Gmail */}
                <button
                  type="button"
                  onClick={handleLaunchGmail}
                  className="w-full py-3.5 sm:py-4 px-5 rounded-xl bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-800 font-bold text-xs sm:text-sm tracking-wide border border-slate-200/90 inline-flex items-center justify-between transition-all duration-200 shadow-xs active:scale-[0.99] cursor-pointer group"
                >
                  <span className="flex items-center gap-2.5">
                    <Mail className="w-4.5 h-4.5 text-emerald-600" />
                    <span>Send via Email</span>
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Subtle Trust & Privacy Footnote */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center gap-1.5 text-xs text-slate-400 text-center">
                <Lock className="w-3.5 h-3.5 text-emerald-600" />
                <span>Your details stay focused on your enquiry. No spam.</span>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* ================= MOBILE BOTTOM SUMMARY BAR (STICKY) ================= */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200/90 p-3.5 shadow-2xl">
        
        {/* Toggle Button */}
        <button
          type="button"
          onClick={() => setIsMobileSummaryOpen(!isMobileSummaryOpen)}
          className="w-full pb-2 flex items-center justify-between text-xs sm:text-sm font-bold text-emerald-700 cursor-pointer"
        >
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span>Summary: {selectedServices.length} Selected &middot; {resolvedBudget}</span>
          </span>
          {isMobileSummaryOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
        </button>

        {/* Expandable Details on Mobile */}
        {isMobileSummaryOpen && (
          <div className="pb-3 pt-2 text-xs text-slate-600 border-t border-slate-100 space-y-1 animate-fade-in-up">
            <p><strong>Services:</strong> {selectedServices.join(", ") || "None selected"}</p>
            <p><strong>Budget:</strong> {resolvedBudget}</p>
            {selectedBudget === "Community Support" && communityMessage.trim() && (
              <p><strong>Focus:</strong> {communityMessage.trim()}</p>
            )}
            <p><strong>Contact:</strong> {name || "Name pending"} &middot; {phone || "Phone pending"}</p>
          </div>
        )}

        {/* Mobile Action Controls */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          {currentStep < 4 ? (
            <>
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="py-3 px-3 rounded-xl border border-slate-200/90 text-slate-700 font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 active:bg-slate-50 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
              )}
              <button
                type="button"
                onClick={() => handleNextStep()}
                className={`${
                  currentStep === 1 ? "col-span-2" : "col-span-1"
                } py-3 px-3 rounded-xl bg-emerald-600 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/20 active:bg-emerald-700 cursor-pointer`}
              >
                <span>Continue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={handleLaunchWhatsApp}
                className="py-3 px-3 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/20 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span>WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={handleLaunchGmail}
                className="py-3 px-3 rounded-xl bg-white border border-slate-300 active:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
              >
                <Mail className="w-4 h-4 text-emerald-600" />
                <span>Gmail Brief</span>
              </button>
            </>
          )}
        </div>
      </div>

      {/* ================= COMPLETION MODAL ================= */}
      {modalState.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-fade-in-up">
          <div className="max-w-md w-full bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 text-center shadow-2xl space-y-5">
            
            {modalState.channel === "whatsapp" ? (
              <>
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-xs">
                  <MessageCircle className="w-8 h-8 fill-emerald-600 text-emerald-100" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                    Enquiry Ready on WhatsApp!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    We&apos;ve opened WhatsApp with your complete structured project brief.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm leading-relaxed text-left">
                  <strong>Next step:</strong> Please press <strong>Send</strong> in your WhatsApp chat window so our team receives your brief and can reply immediately!
                </div>

                <div className="flex flex-col gap-2.5 pt-2">
                  <a
                    href={`https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${encodeURIComponent(structuredBrief)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Reopen WhatsApp Chat</span>
                  </a>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setModalState({ isOpen: false, channel: "whatsapp" })}
                      className="py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
                    >
                      Close &amp; Review
                    </button>
                    <Link
                      href="/"
                      className="py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold text-xs sm:text-sm inline-flex items-center justify-center transition-colors"
                    >
                      Return Home
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-xs">
                  <Mail className="w-8 h-8 text-emerald-600" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                    Enquiry Prepared in Gmail!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    We&apos;ve opened Gmail compose in a new tab with your prefilled project enquiry addressed to <strong>{OFFICIAL_EMAIL}</strong>.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm leading-relaxed text-left">
                  <strong>Next step:</strong> Please review your enquiry details in Gmail and click <strong>Send</strong> so our engineering team receives it!
                </div>

                <div className="flex flex-col gap-2.5 pt-2">
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                      OFFICIAL_EMAIL
                    )}&su=${encodeURIComponent("New Project Enquiry — WISDO TECH")}&body=${encodeURIComponent(structuredBrief)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Reopen Gmail Compose</span>
                  </a>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setModalState({ isOpen: false, channel: "gmail" })}
                      className="py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
                    >
                      Close &amp; Review
                    </button>
                    <Link
                      href="/"
                      className="py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold text-xs sm:text-sm inline-flex items-center justify-center transition-colors"
                    >
                      Return Home
                    </Link>
                  </div>
                </div>
              </>
            )}

          </div>
        </div>
      )}

    </div>
  );
}

export default function ProjectDiscovery() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center text-slate-500 font-sans">
          <Loader2 className="w-8 h-8 animate-spin mb-3 text-emerald-600" />
          <span className="text-xs font-semibold tracking-widest uppercase">
            Loading Project Enquiry...
          </span>
        </div>
      }
    >
      <InteractiveProjectEnquiry />
    </Suspense>
  );
}
