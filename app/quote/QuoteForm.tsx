"use client";

import { useState, Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Send, MessageCircle, MapPin, Mail, Loader2, FileText, CheckCircle2 } from "lucide-react";
import { submitQuoteForm } from "../actions/quote";
import { quoteSchema, QuoteFormData } from "../lib/schemas";
import { trackEvent } from "../lib/analytics";

function QuoteFormContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");
  const sourceParam = searchParams.get("source") || searchParams.get("utm_source");

  const [formData, setFormData] = useState<QuoteFormData>({
    name: "",
    businessName: "",
    phone: "",
    email: "",
    serviceRequired: "Software Development",
    budgetRange: "",
    expectedTimeline: "1–3 months",
    message: "",
    source: "Website",
    botcheck: ""
  });

  useEffect(() => {
    trackEvent("quote_request");
  }, []);

  useEffect(() => {
    if (serviceParam) {
      const allowedServices = ["Software Development", "Website Development", "Designing", "Digital Marketing", "Other"];
      if (allowedServices.includes(serviceParam)) {
        setFormData(prev => ({ ...prev, serviceRequired: serviceParam as any }));
      } else {
        if (serviceParam.includes("Web") || serviceParam.includes("Site")) {
           setFormData(prev => ({ ...prev, serviceRequired: "Website Development" }));
        } else if (serviceParam.includes("Design") || serviceParam.includes("Brand")) {
           setFormData(prev => ({ ...prev, serviceRequired: "Designing" }));
        } else if (serviceParam.includes("Marketing") || serviceParam.includes("SEO")) {
           setFormData(prev => ({ ...prev, serviceRequired: "Digital Marketing" }));
        } else if (serviceParam.includes("Software") || serviceParam.includes("App") || serviceParam.includes("System") || serviceParam.includes("POS")) {
           setFormData(prev => ({ ...prev, serviceRequired: "Software Development" }));
        } else {
           setFormData(prev => ({ ...prev, serviceRequired: "Other" }));
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
    setFormData(prev => ({ ...prev, source: resolvedSource }));
  }, [sourceParam]);
  
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrors({});

    const validatedFields = quoteSchema.safeParse(formData);
    if (!validatedFields.success) {
      setErrors(validatedFields.error.flatten().fieldErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await submitQuoteForm(validatedFields.data);
      if (response.success) {
        trackEvent("contact_form_submit", { type: "quote", service: formData.serviceRequired, source: formData.source });
        router.push("/thank-you");
      } else {
        if (response.errors) {
          setErrors(response.errors);
        } else {
          console.error("Server Action Failed:", response.message);
          setSubmitStatus("error");
          setTimeout(() => setSubmitStatus("idle"), 5000);
        }
      }
    } catch (error) {
      console.error("Failed to submit form:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: [] });
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="relative pt-28 pb-12 sm:pt-36 sm:pb-16 lg:pt-52 lg:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-indigo-50/50 to-transparent -z-10" />
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <p className="text-sm font-bold tracking-widest text-indigo-500 uppercase mb-4">
            Request A Quote
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-4 sm:mb-6 drop-shadow-sm">
            Get Pricing for Your <br className="hidden md:block" /> <span className="text-gradient">Custom Project</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-2xl text-slate-500 leading-relaxed font-light max-w-2xl mx-auto">
            Fill out the form below with your requirements, and we'll provide a detailed technical proposal and timeline.
          </p>
        </div>
      </section>

      <section className="pb-16 sm:pb-24 lg:pb-48 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="bg-white rounded-[2rem] p-6 sm:p-8 md:p-12 border border-slate-100 shadow-[0_20px_60px_-15px_rgba(49,46,129,0.05)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-indigo-50/50 rounded-bl-full -z-10" />

            <div className="flex items-center gap-4 mb-2">
                <FileText className="w-8 h-8 text-indigo-600" />
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Project Details</h2>
            </div>
            <p className="text-slate-500 mb-10">Provide as much detail as possible to receive an accurate estimate.</p>

            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <input type="text" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" value={formData.botcheck || ""} onChange={handleChange} />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-slate-700">Full Name *</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={`w-full bg-slate-50 border ${errors.name ? 'border-red-500' : 'border-slate-200 focus:border-indigo-500'} rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all`}
                  />
                  {errors.name && <p className="text-red-500 text-xs font-medium">{errors.name[0]}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="businessName" className="text-sm font-bold text-slate-700">Business Name</label>
                  <input
                    id="businessName"
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="Company or Brand"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-bold text-slate-700">Phone Number *</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 90000 00000"
                    className={`w-full bg-slate-50 border ${errors.phone ? 'border-red-500' : 'border-slate-200 focus:border-indigo-500'} rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs font-medium">{errors.phone[0]}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-slate-700">Email Address *</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    className={`w-full bg-slate-50 border ${errors.email ? 'border-red-500' : 'border-slate-200 focus:border-indigo-500'} rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all`}
                  />
                  {errors.email && <p className="text-red-500 text-xs font-medium">{errors.email[0]}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="serviceRequired" className="text-sm font-bold text-slate-700">Service Required *</label>
                  <select 
                    id="serviceRequired"
                    name="serviceRequired"
                    value={formData.serviceRequired}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all appearance-none cursor-pointer"
                  >
                    <option value="Software Development">Software Development</option>
                    <option value="Website Development">Website Development</option>
                    <option value="Designing">Designing</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.serviceRequired && <p className="text-red-500 text-xs font-medium">{errors.serviceRequired[0]}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="expectedTimeline" className="text-sm font-bold text-slate-700">Expected Timeline *</label>
                  <select 
                    id="expectedTimeline"
                    name="expectedTimeline"
                    value={formData.expectedTimeline}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all appearance-none cursor-pointer"
                  >
                    <option value="As soon as possible">As soon as possible</option>
                    <option value="Within 1 month">Within 1 month</option>
                    <option value="1–3 months">1–3 months</option>
                    <option value="Planning stage">Planning stage</option>
                  </select>
                  {errors.expectedTimeline && <p className="text-red-500 text-xs font-medium">{errors.expectedTimeline[0]}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="budgetRange" className="text-sm font-bold text-slate-700">Budget Range</label>
                <input
                  id="budgetRange"
                  type="text"
                  name="budgetRange"
                  value={formData.budgetRange}
                  onChange={handleChange}
                  placeholder="e.g. price starts from ₹2,000"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-slate-700">Requirements *</label>
                <textarea
                  id="message"
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project goals and specific requirements..."
                  className={`w-full bg-slate-50 border ${errors.message ? 'border-red-500' : 'border-slate-200 focus:border-indigo-500'} rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all resize-none`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs font-medium">{errors.message[0]}</p>}
              </div>

              {submitStatus === "error" && (
                <p className="text-red-500 text-sm font-bold bg-red-50 p-4 rounded-xl border border-red-100">
                  Error submitting form. Please utilize the WhatsApp or direct Email options instead.
                </p>
              )}

              <div className="pt-4 flex justify-end">
                <button 
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-slate-900 text-white font-medium px-12 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-indigo-600 transition-all duration-300 shadow-xl shadow-slate-900/10 hover:shadow-indigo-500/30 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Quote Request</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function QuoteForm() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center text-slate-500"><Loader2 className="w-10 h-10 animate-spin mb-4" /><span>Loading quote request form...</span></div>}>
      <QuoteFormContent />
    </Suspense>
  )
}
