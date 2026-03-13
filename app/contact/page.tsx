"use client";

import { useState } from "react";
import { Mail, MessageCircle, MapPin, Send, CheckCircle2, Loader2, User, Building2 } from "lucide-react";
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Web Development",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // NOTE: User must replace these with their actual EmailJS keys from dashboard
      // The template expects variables: {{name}}, {{email}}, {{phone}}, {{projectType}}, {{message}}
      const SERVICE_ID = "service_placeholder"; // Replace with your Service ID
      const TEMPLATE_ID = "template_placeholder"; // Replace with your Template ID
      const PUBLIC_KEY = "public_key_placeholder"; // Replace with your Public Key
      
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        projectType: formData.projectType,
        message: formData.message,
        to_email: "wisdoindtech@gmail.com", // Or set this in the template itself
      };

      // Ensure EmailJS tries to send. We will simulate success if placeholders are default.
      // Usually, it's: await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      if (SERVICE_ID === "service_placeholder") {
        // Fallback for demo UX: Simulate network delay if keys aren't added yet
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.warn("EmailJS Keys missing. Form submission simulated.");
      } else {
        await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", projectType: "Web Development", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000); // Reset success message
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <section className="relative pt-40 pb-16 lg:pt-52 lg:pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-indigo-50/50 to-transparent -z-10" />
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-sm font-bold tracking-widest text-indigo-500 uppercase mb-4">
            Get in Touch
          </h2>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-4 sm:mb-6 drop-shadow-sm">
            Let's Build Something <br className="hidden md:block" /> <span className="text-gradient">Incredible</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-2xl text-slate-500 leading-relaxed font-light max-w-2xl mx-auto">
            Ready to scale your business? Drop us a message and our technical team will get back to you immediately.
          </p>
        </div>
      </section>

      {/* Two-Column Contact Section */}
      <section className="pb-24 sm:pb-32 lg:pb-48 px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-10 sm:gap-12 lg:gap-16 items-start">

          {/* Left Column: Contact Info */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8 animate-fade-in-up delay-100">
            <div className="bg-white rounded-[2rem] p-6 sm:p-8 lg:p-10 border border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.03)] space-y-8 sm:space-y-10 text-center lg:text-left">

              <div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">Contact Information</h3>
                <p className="text-slate-500 font-medium">Reach out directly via email or our dedicated business WhatsApp.</p>
              </div>

              <div className="space-y-8 lg:space-y-6">
                <a href="mailto:wisdoindtech@gmail.com" className="flex flex-col lg:flex-row items-center lg:items-start gap-4 group">
                  <div className="w-14 h-14 lg:w-12 lg:h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Mail className="w-6 h-6 lg:w-5 lg:h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 text-opacity-60 uppercase tracking-widest mb-1">Email Us</h4>
                    <p className="text-lg font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">wisdoindtech@gmail.com</p>
                  </div>
                </a>

                <a href="https://wa.me/919787362199" className="flex flex-col lg:flex-row items-center lg:items-start gap-4 group">
                  <div className="w-14 h-14 lg:w-12 lg:h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <MessageCircle className="w-6 h-6 lg:w-5 lg:h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 text-opacity-60 uppercase tracking-widest mb-1">WhatsApp Response</h4>
                    <p className="text-lg font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">+91 9787362199</p>
                  </div>
                </a>

                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 group">
                  <div className="w-14 h-14 lg:w-12 lg:h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                    <MapPin className="w-6 h-6 lg:w-5 lg:h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 text-opacity-60 uppercase tracking-widest mb-1">HQ Location</h4>
                    <p className="text-lg font-bold text-slate-800 group-hover:text-purple-600 transition-colors">Global Remote</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-3 animate-fade-in-up delay-200">
            <div className="bg-white rounded-[2rem] p-6 sm:p-8 md:p-12 border border-slate-100 shadow-[0_20px_60px_-15px_rgba(49,46,129,0.05)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-indigo-50/50 rounded-bl-full -z-10" />

              {submitStatus === "success" ? (
                <div className="text-center py-16 animate-fade-in-up">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">Request Sent!</h3>
                  <p className="text-slate-500 font-medium max-w-md mx-auto">
                    Thank you for reaching out to WISDO Designs. Core team has been instantly notified and will respond within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-8 text-center sm:text-left">Send us a message</h3>

                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Full Name</label>
                        <input
                          required
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Aaradhana"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Email Address</label>
                        <input
                          required
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Aaradhana@gmail.com"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Phone Number</label>
                        <input
                          required
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 90000 00000"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Business / Project Type</label>
                        <select 
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all appearance-none cursor-pointer"
                        >
                          <option>Web Development</option>
                          <option>Mobile Application</option>
                          <option>Retail POS Software</option>
                          <option>Business Automation</option>
                          <option>AI Chatbot Integration</option>
                          <option>Other Solutions</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Project Details</label>
                      <textarea
                        required
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project goals and specific requirements..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all resize-none"
                      ></textarea>
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
                            <span>Submit Request</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                      
                      <a 
                        href="https://wa.me/919787362199"
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 bg-emerald-50 text-emerald-600 font-medium px-8 py-4 rounded-xl flex items-center justify-center gap-2 border border-emerald-200 hover:bg-emerald-500 hover:text-white transition-all duration-300 shadow-sm"
                      >
                        <MessageCircle className="w-5 h-5" />
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}