"use client";

import { useState, Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Mail, MessageCircle, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";
import { submitContactForm } from "../actions/contact";
import { contactSchema, ContactFormData } from "../lib/schemas";
import { trackEvent } from "../lib/analytics";

function ContactFormContent() {
  const router = useRouter();
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
    botcheck: ""
  });

  useEffect(() => {
    trackEvent("contact_form_open");
  }, []);

  // Set the service Required based on URL param on mount
  useEffect(() => {
    if (serviceParam) {
      const allowedServices = ["Software Development", "Website Development", "Designing", "Digital Marketing", "Other"];
      if (allowedServices.includes(serviceParam)) {
        setFormData(prev => ({ ...prev, serviceRequired: serviceParam as any }));
      } else {
        // Fallback for mappings
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

    // Client-side validation
    const validatedFields = contactSchema.safeParse(formData);
    if (!validatedFields.success) {
      setErrors(validatedFields.error.flatten().fieldErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await submitContactForm(validatedFields.data);
      if (response.success) {
        trackEvent("contact_form_submit", { service: formData.serviceRequired, source: formData.source });
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
    // Clear error for the field being typed in
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: [] });
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <section className="relative pt-28 pb-12 sm:pt-36 sm:pb-16 lg:pt-52 lg:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-indigo-50/50 to-transparent -z-10" />
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <p className="text-sm font-bold tracking-widest text-indigo-500 uppercase mb-4">
            Get in Touch
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-4 sm:mb-6 drop-shadow-sm">
            Let&apos;s Build Something <br className="hidden md:block" /> <span className="text-gradient">Incredible</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-2xl text-slate-500 leading-relaxed font-light max-w-2xl mx-auto">
            Ready to scale your business? Drop us a message and our technical team will get back to you immediately.
          </p>
        </div>
      </section>

      {/* Two-Column Contact Section */}
      <section className="pb-16 sm:pb-24 lg:pb-48 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-10 sm:gap-12 lg:gap-16 items-start">

          {/* Left Column: Contact Info */}
          <div 
            style={{ animationDelay: '100ms', animationFillMode: 'both' }}
            className="lg:col-span-2 space-y-6 sm:space-y-8 animate-fade-in-up"
          >
            <div className="bg-white rounded-[2rem] p-6 sm:p-8 lg:p-10 border border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.03)] space-y-8 sm:space-y-10 text-center lg:text-left">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">Contact Information</h2>
                <p className="text-slate-500 font-medium">Reach out directly via email or our dedicated business WhatsApp.</p>
              </div>

              <div className="space-y-8 lg:space-y-6">
                <a href="mailto:wisdodesigns@gmail.com" className="flex flex-col lg:flex-row items-center lg:items-start gap-4 group">
                  <div className="w-14 h-14 lg:w-12 lg:h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Mail className="w-6 h-6 lg:w-5 lg:h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 text-opacity-60 uppercase tracking-widest mb-1">Email Us</h3>
                    <p className="text-lg font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">wisdodesigns@gmail.com</p>
                  </div>
                </a>

                <a href="/api/whatsapp" onClick={() => trackEvent("whatsapp_click", { location: "contact_cards" })} className="flex flex-col lg:flex-row items-center lg:items-start gap-4 group">
                  <div className="w-14 h-14 lg:w-12 lg:h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <MessageCircle className="w-6 h-6 lg:w-5 lg:h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 text-opacity-60 uppercase tracking-widest mb-1">WhatsApp Response</h3>
                    <p className="text-lg font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">+91 9787362199</p>
                  </div>
                </a>

                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 group">
                  <div className="w-14 h-14 lg:w-12 lg:h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                    <MapPin className="w-6 h-6 lg:w-5 lg:h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 text-opacity-60 uppercase tracking-widest mb-1">HQ Location</h3>
                    <p className="text-lg font-bold text-slate-800 group-hover:text-purple-600 transition-colors">Global Remote</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div 
            style={{ animationDelay: '200ms', animationFillMode: 'both' }}
            className="lg:col-span-3 animate-fade-in-up"
          >
            <div className="bg-white rounded-[2rem] p-6 sm:p-8 md:p-12 border border-slate-100 shadow-[0_20px_60px_-15px_rgba(49,46,129,0.05)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-indigo-50/50 rounded-bl-full -z-10" />

              <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-2 text-center sm:text-left">Send us a message</h2>
              <p className="text-slate-500 mb-8 text-center sm:text-left">Tell us what you're trying to build. We'll help you identify the right digital solution.</p>

              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <input type="text" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" value={formData.botcheck || ""} onChange={handleChange} />
                    
                {/* Row 1 */}
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
                      className={`w-full bg-slate-50 border ${errors.name ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500' : 'border-slate-200 focus:ring-indigo-500/50 focus:border-indigo-500'} rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 transition-all`}
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

                {/* Row 2 */}
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
                      className={`w-full bg-slate-50 border ${errors.phone ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500' : 'border-slate-200 focus:ring-indigo-500/50 focus:border-indigo-500'} rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 transition-all`}
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
                      className={`w-full bg-slate-50 border ${errors.email ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500' : 'border-slate-200 focus:ring-indigo-500/50 focus:border-indigo-500'} rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 transition-all`}
                    />
                    {errors.email && <p className="text-red-500 text-xs font-medium">{errors.email[0]}</p>}
                  </div>
                </div>

                {/* Row 3 */}
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
                    <label htmlFor="preferredContact" className="text-sm font-bold text-slate-700">Preferred Contact Method</label>
                    <select 
                      id="preferredContact"
                      name="preferredContact"
                      value={formData.preferredContact}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all appearance-none cursor-pointer"
                    >
                      <option value="Email">Email</option>
                      <option value="Phone">Phone</option>
                      <option value="WhatsApp">WhatsApp</option>
                    </select>
                    {errors.preferredContact && <p className="text-red-500 text-xs font-medium">{errors.preferredContact[0]}</p>}
                  </div>
                </div>

                {/* Row 4 */}
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

                {/* Row 5 */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-slate-700">Project Description *</label>
                  <textarea
                    id="message"
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project goals and specific requirements..."
                    className={`w-full bg-slate-50 border ${errors.message ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500' : 'border-slate-200 focus:ring-indigo-500/50 focus:border-indigo-500'} rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 transition-all resize-none`}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs font-medium">{errors.message[0]}</p>}
                </div>

                {submitStatus === "error" && (
                  <p className="text-red-500 text-sm font-bold bg-red-50 p-4 rounded-xl border border-red-100">
                    Error submitting form. Please utilize the WhatsApp or direct Email options above instead.
                  </p>
                )}

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button 
                    disabled={isSubmitting}
                    className="flex-1 bg-slate-900 text-white font-medium px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-indigo-600 transition-all duration-300 shadow-xl shadow-slate-900/10 hover:shadow-indigo-500/30 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <span>Request a Consultation</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  
                  <a 
                    href="/api/whatsapp"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => trackEvent("whatsapp_click", { location: "contact_error_fallback" })}
                    className="flex-1 bg-emerald-50 text-emerald-600 font-medium px-8 py-4 rounded-xl flex items-center justify-center gap-2 border border-emerald-200 hover:bg-emerald-500 hover:text-white transition-all duration-300 shadow-sm"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>

                <div className="mt-6 w-full overflow-hidden rounded-xl bg-amber-50/80 border border-amber-200 py-3 shadow-sm relative flex items-center">
                  <div className="animate-scroll whitespace-nowrap text-amber-700 text-sm font-semibold flex items-center">
                    <span className="inline-flex items-center gap-2 px-4">
                      <span className="relative flex h-2.5 w-2.5 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-600"></span>
                      </span>
                      Our email delivery is currently undergoing maintenance. For an immediate response, please reach out via WhatsApp.
                    </span>
                  </div>
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
    <Suspense fallback={<div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center text-slate-500"><Loader2 className="w-10 h-10 animate-spin mb-4" /><span>Loading secure form...</span></div>}>
      <ContactFormContent />
    </Suspense>
  )
}
