import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 mb-20">
          
          {/* Brand & Contact */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 lg:pr-8">
            <img src="/logo.png" alt="WISDO Designs Logo" className="h-16 md:h-24 w-auto object-contain mix-blend-multiply md:origin-left md:scale-125" />
            <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-sm font-light">
              A premium software agency crafting intelligent digital experiences for modern startups and enterprises.
            </p>
            <div className="space-y-4 mt-2 md:mt-4 w-full flex flex-col items-center md:items-start">
              <div className="flex items-center md:items-start gap-3 text-slate-600 text-sm font-medium">
                <MapPin className="w-5 h-5 text-indigo-500 shrink-0" />
                <span>Chennai, India</span>
              </div>
              <a href="mailto:wisdoindtech@gmail.com" className="flex items-center gap-3 text-slate-600 text-sm font-medium hover:text-indigo-600 transition-colors">
                <Mail className="w-5 h-5 text-indigo-500 shrink-0" />
                wisdoindtech@gmail.com
              </a>
              <a href="tel:+919787362199" className="flex items-center gap-3 text-slate-600 text-sm font-medium hover:text-indigo-600 transition-colors">
                <Phone className="w-5 h-5 text-indigo-500 shrink-0" />
                +91 9787362199
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 md:gap-5">
            <p className="font-bold text-slate-900 mb-1 md:mb-2 font-sans tracking-wide text-lg">Services</p>
            <a href="/services" className="text-slate-500 hover:text-indigo-600 transition-colors text-base font-medium flex items-center justify-center md:justify-start gap-2 group">
              Business Websites <ExternalLink className="w-3.5 h-3.5 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="/services" className="text-slate-500 hover:text-indigo-600 transition-colors text-base font-medium flex items-center justify-center md:justify-start gap-2 group">
              Mobile Applications <ExternalLink className="w-3.5 h-3.5 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="/services" className="text-slate-500 hover:text-indigo-600 transition-colors text-base font-medium flex items-center justify-center md:justify-start gap-2 group">
              Business Software <ExternalLink className="w-3.5 h-3.5 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="/services" className="text-slate-500 hover:text-indigo-600 transition-colors text-base font-medium flex items-center justify-center md:justify-start gap-2 group">
              UI/UX Design <ExternalLink className="w-3.5 h-3.5 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 md:gap-5">
            <p className="font-bold text-slate-900 mb-1 md:mb-2 font-sans tracking-wide text-lg">Company</p>
            <a href="/about" className="text-slate-500 hover:text-indigo-600 transition-colors text-base font-medium">About Us</a>
            <a href="/contact" className="text-slate-500 hover:text-indigo-600 transition-colors text-base font-medium">Contact</a>
            <a href="/pricing" className="text-slate-500 hover:text-indigo-600 transition-colors text-base font-medium">Pricing / Packages</a>
            <a href="/careers" className="text-slate-500 hover:text-indigo-600 transition-colors text-base font-medium">Careers</a>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 md:gap-5">
            <p className="font-bold text-slate-900 mb-1 md:mb-2 font-sans tracking-wide text-lg">Social</p>
            <a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors text-base font-medium">Twitter / X</a>
            <a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors text-base font-medium">LinkedIn</a>
            <a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors text-base font-medium">Instagram</a>
            <a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors text-base font-medium">GitHub</a>
          </div>

        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} WISDO Designs. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-slate-500 font-medium">
            <a href="/privacy" className="hover:text-indigo-600 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-indigo-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}