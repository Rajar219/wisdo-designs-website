"use client";

import React, { useState, Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Mail,
  MessageCircle,
  MapPin,
  Send,
  Loader2,
  Compass,
  ArrowRight,
  AlertCircle,
  CheckCircle2,
  Lock,
} from "lucide-react";
import { submitContactForm } from "../actions/contact";
import { ContactFormData } from "../lib/schemas";
import { trackEvent } from "../lib/analytics";
import { detectJobSeekingIntent, HIRING_BLOCKED_MESSAGE } from "../lib/hiring-blocker";

const OFFICIAL_EMAIL = "wisdotech1@gmail.com";
const OFFICIAL_WHATSAPP_NUMBER = "919787362199";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");
  const sourceParam = searchParams.get("source") || searchParams.get("utm_source");

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    businessName: "",
    phone: "",
    email: "",
    serviceRequired: "Software Development",
    budgetRange: "",
    preferredContact: "Email",
    message: "",
    source: "Website",
    botcheck: "",
  });

  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [jobBlockNotice, setJobBlockNotice] = useState<string>("");
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "info" | "error";
    title: string;
    text: string;
  } | null>(null);

  useEffect(() => {
    trackEvent("contact_form_open");
  }, []);

  // Set the service Required based on URL param on mount
  useEffect(() => {
    if (serviceParam) {
      const allowedServices = [
        "Software Development",
        "Website Development",
        "Designing",
        "Digital Marketing",
        "Custom Technology Solutions",
        "Other",
      ];
      if (allowedServices.includes(serviceParam)) {
        setFormData((prev) => ({
          ...prev,
          serviceRequired: serviceParam as ContactFormData["serviceRequired"],
        }));
      } else {
        if (serviceParam.includes("Web") || serviceParam.includes("Site")) {
          setFormData((prev) => ({ ...prev, serviceRequired: "Website Development" }));
        } else if (serviceParam.includes("Design") || serviceParam.includes("Brand")) {
          setFormData((prev) => ({ ...prev, serviceRequired: "Designing" }));
        } else if (serviceParam.includes("Marketing") || serviceParam.includes("SEO")) {
          setFormData((prev) => ({ ...prev, serviceRequired: "Digital Marketing" }));
        } else if (
          serviceParam.includes("Software") ||
          serviceParam.includes("App") ||
          serviceParam.includes("System") ||
          serviceParam.includes("POS")
        ) {
          setFormData((prev) => ({ ...prev, serviceRequired: "Software Development" }));
        } else {
          setFormData((prev) => ({ ...prev, serviceRequired: "Other" }));
        }
      }
    }
  }, [serviceParam]);

  useEffect(() => {
    let resolvedSource = "Website";
    if (sourceParam) {
      resolvedSource = sourceParam;
    } else if (typeof document !== "undefined" && document.referrer) {
      const ref = document.referrer.toLowerCase();
      if (ref.includes("google")) resolvedSource = "Google";
      else if (ref.includes("instagram")) resolvedSource = "Instagram";
      else if (ref.includes("wa.me") || ref.includes("whatsapp")) resolvedSource = "WhatsApp";
      else if (!ref.includes(window.location.hostname)) resolvedSource = "Referral";
    }
    setFormData((prev) => ({ ...prev, source: resolvedSource }));
  }, [sourceParam]);

  // Dynamic error checker
  const hasError = (field: string) => Boolean(errors[field] && errors[field].length > 0);
  const getErrorMessage = (field: string) => (hasError(field) ? errors[field][0] : null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setJobBlockNotice("");
    setStatusMessage(null);

    // Dynamic error clearing when input becomes valid
    setErrors((prev) => {
      if (!prev[name] || prev[name].length === 0) return prev;
      let valid = false;
      if (name === "name" && value.trim().length >= 2) valid = true;
      if (name === "phone" && value.replace(/[^0-9]/g, "").length >= 7) valid = true;
      if (name === "email" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) valid = true;
      if (name === "serviceRequired" && value.trim().length > 0) valid = true;
      if (name === "message" && value.trim().length >= 10) valid = true;
      if (name === "businessName" || name === "budgetRange" || name === "preferredContact") valid = true;

      if (valid) {
        const next = { ...prev };
        delete next[name];
        return next;
      }
      return prev;
    });
  };

  // Shared validation logic
  const validateForm = (): boolean => {
    const newErrors: Record<string, string[]> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = ["Full name is required (at least 2 characters)."];
    }
    const phoneDigits = formData.phone.replace(/[^0-9]/g, "");
    if (!formData.phone.trim() || phoneDigits.length < 7) {
      newErrors.phone = ["Valid phone number is required (at least 7 digits)."];
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = ["Please enter a valid email address."];
    }
    if (!formData.serviceRequired) {
      newErrors.serviceRequired = ["Please select a service."];
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = ["Please describe your project (at least 10 characters)."];
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 1. "Request a Consultation" flow
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setJobBlockNotice("");
    setStatusMessage(null);

    const isValid = validateForm();
    if (!isValid) return;

    // Check for employment / job-seeking intent
    if (detectJobSeekingIntent([formData.message, formData.name, formData.businessName])) {
      setJobBlockNotice(HIRING_BLOCKED_MESSAGE);
      return;
    }

    setIsSubmitting(true);

    try {
      // Capture lead in CRM
      await submitContactForm(formData);

      // Open Gmail Compose with verified enquiry draft
      const subject = `Consultation Request — ${formData.name.trim()} | WISDO TECH`;
      const bodyLines = [
        "New Consultation Request — WISDO TECH",
        "",
        `Client Name: ${formData.name.trim()}`,
        `Business / Organisation: ${formData.businessName?.trim() || "Not provided"}`,
        `Service Required: ${formData.serviceRequired}`,
        `Budget Range: ${formData.budgetRange?.trim() || "Not specified"}`,
        `Preferred Contact Method: ${formData.preferredContact}`,
        `Phone / WhatsApp: ${formData.phone.trim()}`,
        `Email Address: ${formData.email.trim()}`,
        "",
        "Project Description:",
        formData.message.trim(),
      ];
      const body = bodyLines.join("\n");

      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        OFFICIAL_EMAIL
      )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(gmailUrl, "_blank");

      trackEvent("contact_form_submit", {
        service: formData.serviceRequired,
        source: formData.source,
      });

      setStatusMessage({
        type: "success",
        title: "Consultation Request Prepared & Opened in Gmail",
        text: `We've opened Gmail Compose in a new tab with your consultation details prefilled to ${OFFICIAL_EMAIL}. Please review and send your email.`,
      });
    } catch (err) {
      console.error("Failed to submit form:", err);
      setStatusMessage({
        type: "error",
        title: "Submission Issue",
        text: "Could not open Gmail compose automatically. You can reach out directly via WhatsApp or email us at wisdotech1@gmail.com.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // 2. "Chat on WhatsApp" flow
  const handleChatWhatsApp = () => {
    setJobBlockNotice("");
    setStatusMessage(null);

    const isValid = validateForm();
    if (!isValid) {
      setStatusMessage({
        type: "error",
        title: "Please complete required fields",
        text: "Please fill in the required fields (Name, Phone, Email, and Project Description) so we can prepare your WhatsApp enquiry.",
      });
      return;
    }

    // Check for employment / job-seeking intent
    if (detectJobSeekingIntent([formData.message, formData.name, formData.businessName])) {
      setJobBlockNotice(HIRING_BLOCKED_MESSAGE);
      return;
    }

    // Format friendly prefilled message
    const lines = [
      "Hi WISDO TECH, I would like to request a consultation.",
      "",
      `*Client Name:* ${formData.name.trim()}`,
      formData.businessName?.trim()
        ? `*Business / Organisation:* ${formData.businessName.trim()}`
        : null,
      `*Selected Service:* ${formData.serviceRequired}`,
      formData.budgetRange?.trim() ? `*Budget Range:* ${formData.budgetRange.trim()}` : null,
      `*Preferred Contact:* ${formData.preferredContact}`,
      `*Phone:* ${formData.phone.trim()}`,
      `*Email:* ${formData.email.trim()}`,
      "",
      "*Project Description:*",
      formData.message.trim(),
    ].filter(Boolean);

    const text = lines.join("\n");
    const url = `https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");

    // Capture lead in CRM
    submitContactForm({ ...formData, source: "WhatsApp Consultation" }).catch(console.error);
    trackEvent("whatsapp_click", {
      location: "contact_form_button",
      service: formData.serviceRequired,
    });

    setStatusMessage({
      type: "info",
      title: "WhatsApp opened in a new tab",
      text: "We’ve opened the official WISDO TECH WhatsApp chat with your project details prefilled. Please review and tap send!",
    });
  };

  // Generate prefilled Project Discovery link
  const quotePrefillUrl = `/quote?service=${encodeURIComponent(
    formData.serviceRequired
  )}&name=${encodeURIComponent(formData.name)}&phone=${encodeURIComponent(
    formData.phone
  )}&email=${encodeURIComponent(formData.email)}&org=${encodeURIComponent(
    formData.businessName || ""
  )}&desc=${encodeURIComponent(formData.message)}&budget=${encodeURIComponent(
    formData.budgetRange || ""
  )}`;

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <section className="relative pt-28 pb-12 sm:pt-36 sm:pb-16 lg:pt-52 lg:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden w-full">
        <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-emerald-50/50 to-transparent -z-10" />
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up w-full min-w-0">
          <p className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-4">
            Get in Touch
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-4 sm:mb-6 drop-shadow-sm">
            Let&apos;s Build Something <br className="hidden md:block" />{" "}
            <span className="text-gradient">Incredible</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-2xl text-slate-500 leading-relaxed font-light max-w-2xl mx-auto">
            Ready to scale your business? Drop us a message and our technical team will get back to
            you immediately.
          </p>
        </div>
      </section>

      {/* Two-Column Contact Section */}
      <section className="pb-16 sm:pb-24 lg:pb-48 px-4 sm:px-6 lg:px-8 relative z-10 w-full overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16 items-start w-full">
          {/* Left Column: Contact Info */}
          <div
            style={{ animationDelay: "100ms", animationFillMode: "both" }}
            className="lg:col-span-2 space-y-6 sm:space-y-8 animate-fade-in-up min-w-0 w-full"
          >
            <div className="bg-white rounded-2xl sm:rounded-[2rem] p-5 sm:p-8 lg:p-10 border border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.03)] space-y-6 sm:space-y-10 text-center lg:text-left min-w-0 w-full">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-2">
                  Contact Information
                </h2>
                <p className="text-sm sm:text-base text-slate-500 font-medium">
                  Reach out directly via email or our dedicated business WhatsApp.
                </p>
              </div>

              <div className="space-y-6 lg:space-y-6">
                <a
                  href={`mailto:${OFFICIAL_EMAIL}`}
                  className="flex flex-col lg:flex-row items-center lg:items-start gap-3 sm:gap-4 group min-w-0"
                >
                  <div className="w-12 h-12 lg:w-12 lg:h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 text-opacity-60 uppercase tracking-widest mb-1">
                      Email Us
                    </h3>
                    <p className="text-base sm:text-lg font-bold text-slate-800 group-hover:text-emerald-600 transition-colors break-all sm:break-normal">
                      {OFFICIAL_EMAIL}
                    </p>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={handleChatWhatsApp}
                  className="w-full text-left flex flex-col lg:flex-row items-center lg:items-start gap-3 sm:gap-4 group min-w-0 cursor-pointer"
                >
                  <div className="w-12 h-12 lg:w-12 lg:h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 text-opacity-60 uppercase tracking-widest mb-1">
                      WhatsApp Response
                    </h3>
                    <p className="text-base sm:text-lg font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">
                      +91 9787362199
                    </p>
                  </div>
                </button>

                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3 sm:gap-4 group min-w-0">
                  <div className="w-12 h-12 lg:w-12 lg:h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 text-opacity-60 uppercase tracking-widest mb-1">
                      Location
                    </h3>
                    <p className="text-base sm:text-lg font-bold text-slate-800 group-hover:text-slate-900 transition-colors">
                      Chennai, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div
            style={{ animationDelay: "200ms", animationFillMode: "both" }}
            className="lg:col-span-3 animate-fade-in-up min-w-0 w-full"
          >
            <div className="bg-white rounded-2xl sm:rounded-[2rem] p-5 sm:p-8 md:p-12 border border-slate-100 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.05)] relative overflow-hidden min-w-0 w-full">
              <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-emerald-50/50 rounded-bl-full -z-10" />

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-2 text-center sm:text-left">
                Send us a message
              </h2>
              <p className="text-sm sm:text-base text-slate-500 mb-6 text-center sm:text-left">
                Tell us what you&apos;re trying to build. We&apos;ll help you identify the right digital solution.
              </p>

              {/* Interactive Project Discovery Banner */}
              <Link
                href={quotePrefillUrl}
                className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50/70 to-emerald-50 border border-emerald-200/80 flex items-center justify-between gap-3 group transition-all hover:border-emerald-400 hover:shadow-xs"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10.5px] font-bold uppercase tracking-wider text-emerald-800 block">
                      Interactive Project Discovery
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 block truncate">
                      Prefer guided steps? Explore scope &amp; budget &middot; Starts from ₹2,000
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs font-bold text-emerald-700 shrink-0 group-hover:translate-x-1 transition-transform">
                  <span className="hidden xs:inline">Open Discovery</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>

              {/* Job Application Notice */}
              {jobBlockNotice && (
                <div className="mb-6 p-4 rounded-2xl bg-amber-50 border border-amber-300 text-amber-900 flex items-start gap-3 animate-fade-in-up">
                  <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm leading-relaxed">
                    <p className="font-bold text-amber-950 mb-0.5">Enquiry Notice</p>
                    <p>{jobBlockNotice}</p>
                  </div>
                </div>
              )}

              {/* Status & Feedback Banner */}
              {statusMessage && (
                <div
                  className={`mb-6 p-4.5 rounded-2xl border animate-fade-in-up space-y-3 ${
                    statusMessage.type === "success"
                      ? "bg-emerald-50 border-emerald-200 text-emerald-900"
                      : statusMessage.type === "info"
                      ? "bg-sky-50 border-sky-200 text-sky-900"
                      : "bg-red-50 border-red-200 text-red-900"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {statusMessage.type === "success" ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    ) : statusMessage.type === "info" ? (
                      <MessageCircle className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <p className="font-bold text-sm sm:text-base">{statusMessage.title}</p>
                      <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                        {statusMessage.text}
                      </p>
                    </div>
                  </div>

                  {statusMessage.type === "success" && (
                    <div className="pt-2 border-t border-emerald-100 flex flex-wrap gap-2.5">
                      <button
                        type="button"
                        onClick={handleChatWhatsApp}
                        className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Also Send via WhatsApp</span>
                      </button>
                      <Link
                        href={quotePrefillUrl}
                        className="px-3.5 py-2 rounded-xl bg-white border border-emerald-300 text-emerald-800 hover:bg-emerald-50/80 font-bold text-xs inline-flex items-center gap-1.5 transition-colors"
                      >
                        <Compass className="w-3.5 h-3.5" />
                        <span>Explore Guided Discovery Flow</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
                </div>
              )}

              <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit} noValidate>
                <input
                  type="text"
                  name="botcheck"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.botcheck || ""}
                  onChange={handleChange}
                />

                {/* Row 1: Name & Business */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs sm:text-sm font-bold text-slate-700 flex justify-between"
                    >
                      <span>
                        Full Name <span className="text-emerald-600">*</span>
                      </span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full bg-slate-50 border ${
                        hasError("name")
                          ? "border-red-500 ring-2 ring-red-500/20"
                          : "border-slate-200 focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500"
                      } rounded-xl px-4 py-3 text-slate-900 text-sm sm:text-base focus:outline-none transition-all`}
                    />
                    {hasError("name") && (
                      <p className="text-red-500 text-xs font-semibold">{getErrorMessage("name")}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="businessName"
                      className="text-xs sm:text-sm font-bold text-slate-700 flex justify-between"
                    >
                      <span>
                        Business / Organisation{" "}
                        <span className="text-slate-400 font-normal text-xs">(optional)</span>
                      </span>
                    </label>
                    <input
                      id="businessName"
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="e.g. Sharma Traders / Clinic"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Phone & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="phone"
                      className="text-xs sm:text-sm font-bold text-slate-700 flex justify-between"
                    >
                      <span>
                        Phone / WhatsApp <span className="text-emerald-600">*</span>
                      </span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      className={`w-full bg-slate-50 border ${
                        hasError("phone")
                          ? "border-red-500 ring-2 ring-red-500/20"
                          : "border-slate-200 focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500"
                      } rounded-xl px-4 py-3 text-slate-900 text-sm sm:text-base focus:outline-none transition-all`}
                    />
                    {hasError("phone") && (
                      <p className="text-red-500 text-xs font-semibold">{getErrorMessage("phone")}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs sm:text-sm font-bold text-slate-700 flex justify-between"
                    >
                      <span>
                        Email Address <span className="text-emerald-600">*</span>
                      </span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. rahul@example.com"
                      className={`w-full bg-slate-50 border ${
                        hasError("email")
                          ? "border-red-500 ring-2 ring-red-500/20"
                          : "border-slate-200 focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500"
                      } rounded-xl px-4 py-3 text-slate-900 text-sm sm:text-base focus:outline-none transition-all`}
                    />
                    {hasError("email") && (
                      <p className="text-red-500 text-xs font-semibold">{getErrorMessage("email")}</p>
                    )}
                  </div>
                </div>

                {/* Row 3: Service & Contact Method */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="serviceRequired"
                      className="text-xs sm:text-sm font-bold text-slate-700 flex justify-between"
                    >
                      <span>
                        Service Required <span className="text-emerald-600">*</span>
                      </span>
                    </label>
                    <select
                      id="serviceRequired"
                      name="serviceRequired"
                      value={formData.serviceRequired}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all appearance-none cursor-pointer"
                    >
                      <option value="Software Development">Software Development</option>
                      <option value="Website Development">Website Development</option>
                      <option value="Designing">Designing (UI/UX &amp; Branding)</option>
                      <option value="Digital Marketing">Digital Marketing &amp; SEO</option>
                      <option value="Custom Technology Solutions">Custom Technology Solutions</option>
                      <option value="Other">Other / General Consultation</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="preferredContact"
                      className="text-xs sm:text-sm font-bold text-slate-700 flex justify-between"
                    >
                      <span>
                        Preferred Contact Method{" "}
                        <span className="text-slate-400 font-normal text-xs">(optional)</span>
                      </span>
                    </label>
                    <select
                      id="preferredContact"
                      name="preferredContact"
                      value={formData.preferredContact}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all appearance-none cursor-pointer"
                    >
                      <option value="Email">Email</option>
                      <option value="WhatsApp">WhatsApp</option>
                      <option value="Phone">Phone</option>
                    </select>
                  </div>
                </div>

                {/* Row 4: Budget Range */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="budgetRange"
                    className="text-xs sm:text-sm font-bold text-slate-700 flex justify-between"
                  >
                    <span>
                      Budget Range{" "}
                      <span className="text-slate-400 font-normal text-xs">(optional)</span>
                    </span>
                  </label>
                  <input
                    id="budgetRange"
                    type="text"
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleChange}
                    placeholder="e.g. ₹2,000–₹10,000, ₹25,000+, or Community Support"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all"
                  />
                </div>

                {/* Row 5: Project Description */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label htmlFor="message" className="text-xs sm:text-sm font-bold text-slate-700">
                      Project Description <span className="text-emerald-600">*</span>
                    </label>
                    <span
                      className={`text-xs font-semibold ${
                        formData.message.trim().length >= 10
                          ? "text-emerald-600"
                          : "text-slate-400"
                      }`}
                    >
                      {formData.message.trim().length < 10
                        ? `${formData.message.trim().length}/10 min chars`
                        : `${formData.message.trim().length} chars`}
                    </span>
                  </div>
                  <textarea
                    id="message"
                    rows={4}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project goals, required features, or specific business requirements..."
                    className={`w-full bg-slate-50 border ${
                      hasError("message")
                        ? "border-red-500 ring-2 ring-red-500/20"
                        : "border-slate-200 focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500"
                    } rounded-xl px-4 py-3 text-slate-900 text-sm sm:text-base focus:outline-none transition-all resize-none`}
                  />
                  {hasError("message") && (
                    <p className="text-red-500 text-xs font-semibold">
                      {getErrorMessage("message")}
                    </p>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-3 w-full">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:flex-1 bg-slate-900 text-white font-bold text-sm sm:text-base px-5 sm:px-8 py-3.5 sm:py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-emerald-600 active:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-300 shadow-md shadow-slate-900/10 hover:shadow-emerald-500/20 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Preparing Consultation...</span>
                      </>
                    ) : (
                      <>
                        <span>Request a Consultation</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleChatWhatsApp}
                    className="w-full sm:flex-1 bg-emerald-50 text-emerald-700 font-bold text-sm sm:text-base px-5 sm:px-8 py-3.5 sm:py-4 rounded-xl flex items-center justify-center gap-2 border border-emerald-300 hover:bg-emerald-600 hover:text-white active:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-300 shadow-sm cursor-pointer group"
                  >
                    <MessageCircle className="w-5 h-5 text-emerald-600 group-hover:text-white transition-colors" />
                    <span>Chat on WhatsApp</span>
                  </button>
                </div>

                {/* Privacy & Direct Response Reassurance */}
                <div className="pt-2 text-center text-xs text-slate-400 flex items-center justify-center gap-1.5 font-medium">
                  <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>
                    Your details are kept strictly confidential and used solely to evaluate your project consultation.
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ContactForm() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center text-slate-500">
          <Loader2 className="w-10 h-10 animate-spin mb-4 text-emerald-600" />
          <span className="text-sm font-semibold">Loading contact form...</span>
        </div>
      }
    >
      <ContactFormContent />
    </Suspense>
  );
}
