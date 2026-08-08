import { ArrowLeft, MessageCircle } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist on WISDO Designs.",
};

export default function NotFound() {
  return (
    <div className="bg-slate-50 min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-indigo-200/30 blur-[120px] rounded-full mix-blend-multiply -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-purple-200/30 blur-[130px] rounded-full mix-blend-multiply -z-10" />

      <div className="max-w-md w-full bg-white rounded-[2rem] p-8 sm:p-12 border border-slate-100 shadow-[0_20px_50px_-15px_rgba(79,70,229,0.08)] text-center relative z-10 animate-fade-in-up">
        <span className="text-[6rem] sm:text-[8rem] font-black leading-none text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-purple-600 block mb-4">
          404
        </span>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
          Page Not Found
        </h1>

        <p className="text-slate-500 font-medium leading-relaxed mb-8">
          The requested resource does not exist or has been relocated. Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col gap-3 w-full">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-slate-900 text-white font-bold uppercase tracking-wide text-xs hover:bg-indigo-600 transition-all shadow-md hover:shadow-indigo-500/25"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go to Homepage</span>
          </Link>

          <a
            href="/contact"
            className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-slate-100 text-slate-800 font-bold uppercase tracking-wide text-xs hover:bg-slate-200 transition-all border border-slate-200/40"
          >
            <MessageCircle className="w-4 h-4 text-emerald-500" />
            <span>Contact Support</span>
          </a>
        </div>
      </div>
    </div>
  );
}
