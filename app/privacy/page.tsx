import { Shield } from "lucide-react";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for WISDO Designs detailing how we collect, protect, and handle client data and project details.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-24 sm:py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.02)]">
        <div className="flex items-center gap-4 border-b border-slate-100 pb-8 mb-8">
          <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shrink-0">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Privacy Policy</h1>
            <p className="text-sm font-semibold text-slate-400 mt-1">Last Updated: July 2026</p>
          </div>
        </div>

        <div className="space-y-8 text-slate-600 font-medium leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. Information We Collect</h2>
            <p className="text-sm text-slate-500 font-light">
              We collect information provided directly by you when you fill out our contact form or communicate with us via email or WhatsApp. This includes your name, email address, phone number, and details regarding your custom project requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. How We Use Your Data</h2>
            <p className="text-sm text-slate-500 font-light">
              We use the collected information strictly to evaluate your custom application request, prepare development estimates, contact you regarding project scope, and provide continuous technical support. We do not sell or lease client data to third-party marketing services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. Data Security & Storage</h2>
            <p className="text-sm text-slate-500 font-light">
              We execute premium industry-standard security protocols to prevent unauthorized access, alteration, disclosure, or destruction of your project specifications and personal credentials. Repository database systems and code directories are protected via advanced access management controls.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. Client NDA & Confidentiality</h2>
            <p className="text-sm text-slate-500 font-light">
              All proprietary concepts, business logic systems, database structures, and unique designs created during our collaboration are handled under strict confidentiality guidelines. We readily sign Non-Disclosure Agreements (NDAs) before discussing sensitive startup logic.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. Contact Information</h2>
            <p className="text-sm text-slate-500 font-light">
              If you have any questions or clarifications regarding this Privacy Policy, please contact our core operations team at:
              <br />
              <a href="mailto:wisdodesigns@gmail.com" className="text-indigo-600 hover:text-indigo-700 font-bold mt-2 inline-block">
                wisdodesigns@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
