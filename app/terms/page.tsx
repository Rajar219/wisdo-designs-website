import { FileText } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for WISDO Designs detailing development contracts, project terms, and ownership guidelines.",
  alternates: {
    canonical: "https://wisdodesigns.com/terms",
  },
  openGraph: {
    title: "Terms of Service | WISDO Designs",
    description: "Terms of Service for WISDO Designs detailing development contracts, project terms, and ownership guidelines.",
    url: "https://wisdodesigns.com/terms",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | WISDO Designs",
    description: "Terms of Service for WISDO Designs detailing development contracts, project terms, and ownership guidelines.",
  },
};

export default function TermsPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-24 sm:py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.02)]">
        <div className="flex items-center gap-4 border-b border-slate-100 pb-8 mb-8">
          <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shrink-0">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Terms of Service</h1>
            <p className="text-sm font-semibold text-slate-400 mt-1">Last Updated: July 2026</p>
          </div>
        </div>

        <div className="space-y-8 text-slate-600 font-medium leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. Engagement of Services</h2>
            <p className="text-sm text-slate-500 font-light">
              By engaging WISDO Designs, you contract our agency to design, build, and deploy custom software products, websites, applications, and chatbot services according to a mutually agreed Statement of Work (SOW) or project quotation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. Code & Asset Ownership</h2>
            <p className="text-sm text-slate-500 font-light">
              Upon final project payment clearance, full ownership of the custom code repositories, UI designs, and related assets transfers directly to the client. WISDO Designs retains no permanent claims or distribution rights on custom-developed client intellectual property unless explicitly agreed upon.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. Payments & Milestones</h2>
            <p className="text-sm text-slate-500 font-light">
              Projects are typically structured around milestone payments (e.g., deposit, design sign-off, final delivery). Deliverable milestones and associated fees are detailed explicitly in the project agreement. Late or outstanding payments may result in development or deployment halts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. Hosting & Deployment</h2>
            <p className="text-sm text-slate-500 font-light">
              While we assist with launching products to premium cloud environments (like Vercel, AWS, Google Cloud, or custom server setups), the client is solely responsible for ongoing third-party hosting, API provider costs, and subscription fees for external services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. Governing Law</h2>
            <p className="text-sm text-slate-500 font-light">
              These Terms of Service shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles. Any legal actions or proceedings arising from our services shall be conducted in Chennai, India.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
