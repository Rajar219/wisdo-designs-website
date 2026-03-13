"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is active
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${scrolled
          ? 'bg-white/80 backdrop-blur-lg py-3 border-b border-slate-200 shadow-sm'
          : 'bg-white/40 backdrop-blur-md py-4 border-b border-slate-200/50'
        }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

          <div className="flex items-center gap-8 lg:gap-10 border-none relative z-[110] flex-1 lg:flex-none">
            <Link href="/" className="lg:static absolute left-1/2 -translate-x-1/2 lg:transform-none flex items-center gap-2 group cursor-pointer block" onClick={() => setIsMobileMenuOpen(false)}>
              <img
                src="/logo.png"
                alt="WISDO Designs Logo"
                className="h-24 sm:h-32 md:h-32 md:scale-125 md:origin-left object-contain drop-shadow-md mix-blend-multiply transition-transform duration-500 group-hover:scale-[1.05] md:group-hover:scale-[1.35]"
              />
            </Link>

            <div className="hidden md:flex space-x-6 lg:space-x-8 font-medium text-slate-500">
              <Link href="/" className={`relative transition-colors duration-300 group py-2 ${pathname === '/' ? 'text-indigo-600 font-bold' : 'hover:text-indigo-600'}`}>
                Home
                <span className={`absolute bottom-0 left-0 h-[2px] bg-indigo-600 rounded-full transition-all duration-300 ${pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
              <Link href="/services" className={`relative transition-colors duration-300 group py-2 ${pathname === '/services' ? 'text-indigo-600 font-bold' : 'hover:text-indigo-600'}`}>
                Services
                <span className={`absolute bottom-0 left-0 h-[2px] bg-indigo-600 rounded-full transition-all duration-300 ${pathname === '/services' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
              <Link href="/about" className={`relative transition-colors duration-300 group py-2 ${pathname === '/about' ? 'text-indigo-600 font-bold' : 'hover:text-indigo-600'}`}>
                About
                <span className={`absolute bottom-0 left-0 h-[2px] bg-indigo-600 rounded-full transition-all duration-300 ${pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
              <Link href="/contact" className={`relative transition-colors duration-300 group py-2 ${pathname === '/contact' ? 'text-indigo-600 font-bold' : 'hover:text-indigo-600'}`}>
                Contact
                <span className={`absolute bottom-0 left-0 h-[2px] bg-indigo-600 rounded-full transition-all duration-300 ${pathname === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <a href="/contact" className="group relative bg-slate-900 border border-slate-700/50 text-white px-7 py-2.5 rounded-full overflow-hidden transition-all duration-300 shadow-md shadow-slate-900/10 hover:shadow-indigo-500/30 hover:scale-105 font-medium block text-center">
              <span className="relative z-10 transition-colors group-hover:text-white">Get Free Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-white/20 blur-md opacity-0 group-hover:animate-pulse transition-opacity" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            className="md:hidden p-2 text-slate-900 hover:text-indigo-600 transition-colors active:scale-95 relative z-[110]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Full Screen Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-[105] md:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-[20%] pointer-events-none'
        }`}
      >
  <div className="flex flex-col h-full pt-32 pb-8 px-6 overflow-y-auto">
    <div className="flex flex-col gap-6 text-center text-2xl font-bold text-slate-800 tracking-tight flex-grow justify-center">

      <Link
        href="/"
        className={`pb-4 border-b border-slate-100 transition-colors ${pathname === '/' ? 'text-indigo-600' : 'hover:text-indigo-600'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Home
      </Link>

      <Link
        href="/services"
        className={`pb-4 border-b border-slate-100 transition-colors ${pathname === '/services' ? 'text-indigo-600' : 'hover:text-indigo-600'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Services
      </Link>

      <Link
        href="/about"
        className={`pb-4 border-b border-slate-100 transition-colors ${pathname === '/about' ? 'text-indigo-600' : 'hover:text-indigo-600'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        About
      </Link>

      <Link
        href="/contact"
        className={`pb-4 border-b border-slate-100 transition-colors ${pathname === '/contact' ? 'text-indigo-600' : 'hover:text-indigo-600'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Contact
      </Link>

    </div>

    <div className="mt-auto pt-10">
      <a
        href="/contact"
        onClick={() => setIsMobileMenuOpen(false)}
        className="w-full bg-slate-900 text-white py-4 rounded-xl text-center font-semibold text-lg hover:bg-indigo-600 transition-colors shadow-lg shadow-slate-900/10 block"
      >
        Get Free Consultation
      </a>
    </div>
  </div>
      </div >
    </>
  );
}