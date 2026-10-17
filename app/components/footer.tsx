import { ExternalLink, Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TrackedLink from "./TrackedLink";

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-10 mb-14 sm:mb-16 lg:mb-20">
          
          {/* Brand & Contact */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3.5 lg:pr-8">
            <Image src="/logo-transparent.png" alt="WISDO TECH Logo" width={150} height={80} className="h-11 md:h-13 w-auto object-contain md:origin-left" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 select-none -mt-1">
              Trust Wisdom Innovation
            </span>
            <span className="text-[11px] font-bold text-emerald-700 tracking-wider uppercase select-none">
              Software &amp; Web Solutions
            </span>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-sm font-light mt-1">
              Practical technology solutions designed around real business needs.
            </p>
            <div className="space-y-4 mt-2 md:mt-4 w-full flex flex-col items-center md:items-start">
              <div className="flex items-center md:items-start gap-3 text-slate-600 text-sm font-medium">
                <MapPin className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Chennai, India</span>
              </div>
              <a href="mailto:wisdotech1@gmail.com" className="flex items-center gap-3 text-slate-600 text-sm font-medium hover:text-emerald-600 transition-colors">
                <Mail className="w-5 h-5 text-emerald-600 shrink-0" />
                wisdotech1@gmail.com
              </a>
              <a href="tel:+919787362199" className="hidden md:flex items-center gap-3 text-slate-600 text-sm font-medium hover:text-emerald-600 transition-colors">
                <Phone className="w-5 h-5 text-emerald-600 shrink-0" />
                +91 9787362199
              </a>
              <TrackedLink 
                href="/api/whatsapp" 
                eventName="whatsapp_click"
                eventPayload={{ location: "footer" }}
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-slate-600 text-sm font-medium hover:text-emerald-500 transition-colors mt-2"
              >
                <MessageCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                Chat with Wisdo Tech
              </TrackedLink>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 md:gap-5">
            <p className="font-bold text-slate-900 mb-1 md:mb-2 font-sans tracking-wide text-lg">Services</p>
            <Link href="/services" className="text-slate-500 hover:text-emerald-600 transition-colors text-base font-medium flex items-center justify-center md:justify-start gap-2 group">
              Software Development <ExternalLink className="w-3.5 h-3.5 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link href="/services" className="text-slate-500 hover:text-emerald-600 transition-colors text-base font-medium flex items-center justify-center md:justify-start gap-2 group">
              Website Development <ExternalLink className="w-3.5 h-3.5 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link href="/services" className="text-slate-500 hover:text-emerald-600 transition-colors text-base font-medium flex items-center justify-center md:justify-start gap-2 group">
              Designing <ExternalLink className="w-3.5 h-3.5 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link href="/services" className="text-slate-500 hover:text-emerald-600 transition-colors text-base font-medium flex items-center justify-center md:justify-start gap-2 group">
              Digital Marketing <ExternalLink className="w-3.5 h-3.5 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 md:gap-5">
            <p className="font-bold text-slate-900 mb-1 md:mb-2 font-sans tracking-wide text-lg">Company</p>
            <Link href="/about" className="text-slate-500 hover:text-emerald-600 transition-colors text-base font-medium">About Us</Link>
            <Link href="/solutions" className="text-slate-500 hover:text-emerald-600 transition-colors text-base font-medium">Solutions</Link>
            <Link href="/quote" className="text-slate-500 hover:text-emerald-600 transition-colors text-base font-medium">Project Discovery</Link>
            <Link href="/contact" className="text-slate-500 hover:text-emerald-600 transition-colors text-base font-medium">Contact</Link>
            <Link href="/portfolio" className="text-slate-500 hover:text-emerald-600 transition-colors text-base font-medium">Portfolio</Link>
            <Link href="/pricing" className="text-slate-500 hover:text-emerald-600 transition-colors text-base font-medium">Pricing / Packages</Link>
            <Link href="/blog" className="text-slate-500 hover:text-emerald-600 transition-colors text-base font-medium">Blog</Link>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 md:gap-5">
            <p className="font-bold text-slate-900 mb-1 md:mb-2 font-sans tracking-wide text-lg">Social</p>
            <a href="https://www.instagram.com/wisdo_tech_/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-emerald-600 transition-colors text-base font-medium">Instagram</a>
            <a href="https://www.linkedin.com/company/wisdo-designs/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-emerald-600 transition-colors text-base font-medium">LinkedIn</a>
          </div>

        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} Wisdo Tech. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-slate-500 font-medium">
            <Link href="/privacy" className="hover:text-emerald-600 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-emerald-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}