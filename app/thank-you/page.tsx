import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Thank You | Wisdo Tech",
  description: "Thank you for reaching out to Wisdo Tech. We will get back to you shortly.",
};

export default function ThankYouPage() {
  return (
    <div className="bg-slate-50 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-indigo-50/50 to-transparent -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-50/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-xl w-full bg-white rounded-[2rem] p-8 sm:p-12 text-center shadow-[0_20px_60px_-15px_rgba(49,46,129,0.05)] border border-slate-100 animate-fade-in-up">
        <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8 relative">
          <div className="absolute inset-0 bg-emerald-100 rounded-full animate-ping opacity-20"></div>
          <CheckCircle2 className="w-12 h-12 text-emerald-600" />
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Thank you for contacting Wisdo Tech.
        </h1>
        
        <p className="text-slate-500 text-lg mb-8 leading-relaxed">
          Your enquiry has been received. We will review your requirements and get back to you.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white font-medium px-8 py-4 rounded-xl hover:bg-indigo-600 transition-all duration-300 shadow-xl shadow-slate-900/10 hover:shadow-indigo-500/30"
          >
            <span>Back to Home</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a 
            href="/api/whatsapp"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-slate-50 text-slate-700 font-medium px-8 py-4 rounded-xl border border-slate-200 hover:bg-slate-100 transition-all duration-300"
          >
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
