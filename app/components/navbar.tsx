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
          ? 'bg-white/80 backdrop-blur-lg py-2 sm:py-3 border-b border-slate-200 shadow-sm'
          : 'bg-white/40 backdrop-blur-md py-3 sm:py-4 border-b border-slate-200/50'
        }`}>

          {/* ===== MOBILE NAVBAR (< lg) ===== */}
          <div className="relative h-20 lg:hidden">
            {/* Hamburger — absolute left */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-slate-900 hover:text-indigo-600 transition-colors active:scale-95 z-[110]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Open menu"
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>

            {/* Logo — absolute center of screen */}
            <Link
              href="/"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center group cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <img
                src="/logo.png"
                alt="WISDO Designs Logo"
                className="h-20 sm:h-24 object-contain drop-shadow-md mix-blend-multiply"
              />
            </Link>
          </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ===== DESKTOP NAVBAR (>= lg) ===== */}
          <div className="hidden lg:flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center group cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>
              <img
                src="/logo.png"
                alt="WISDO Designs Logo"
                className="h-28 xl:h-32 object-contain drop-shadow-md mix-blend-multiply transition-transform duration-500 scale-110 origin-left group-hover:scale-[1.15]"
              />
            </Link>

            {/* Nav Links */}
            <div className="flex items-center gap-6 xl:gap-8 font-medium text-slate-500">
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

            {/* CTA Button */}
            <a href="/contact" className="group relative bg-slate-900 border border-slate-700/50 text-white px-7 py-2.5 rounded-full overflow-hidden transition-all duration-300 shadow-md shadow-slate-900/10 hover:shadow-indigo-500/30 hover:scale-105 font-medium text-center">
              <span className="relative z-10 transition-colors group-hover:text-white">Get Free Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-white/20 blur-md opacity-0 group-hover:animate-pulse transition-opacity" />
            </a>
          </div>

        </div>
      </nav>

      {/* Full Screen Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-[105] lg:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-[20%] pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full pt-28 sm:pt-32 pb-8 px-6 overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors z-[110]"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>

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
      </div>
    </>
  );
}