"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <nav
        className={`fixed top-0 w-full z-[100] transition-all duration-300 ${scrolled
            ? "bg-white/80 backdrop-blur-lg py-2 border-b border-slate-200 shadow-sm"
            : "bg-white/40 backdrop-blur-md py-3 border-b border-slate-200/50"
          }`}
      >

        {/* ===== MOBILE NAVBAR ===== */}
        <div className="flex items-center justify-between w-full h-20 px-4 lg:hidden relative">

          {/* Hamburger */}
          <button
            className="p-2 -ml-2 text-slate-900 hover:text-indigo-600 active:scale-95 z-[110]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>

          {/* Logo (Perfectly Centered) */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 flex items-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Image
              src="/logo-transparent.png"
              alt="Wisdo Tech Logo"
              width={105}
              height={70}
              priority
              className="h-12 sm:h-14 w-auto object-contain drop-shadow-md"
            />
          </Link>

          {/* Placeholder to balance flex space */}
          <div className="w-7" />
        </div>

        {/* ===== DESKTOP NAVBAR ===== */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:flex items-center justify-between">

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center group cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Image
                src="/logo-transparent.png"
                alt="Wisdo Tech Logo"
                width={150}
                height={100}
                priority
                className="h-16 xl:h-20 w-auto object-contain drop-shadow-md transition-transform duration-500 scale-110 origin-left group-hover:scale-[1.15]"
              />
            </Link>

            {/* Nav Links */}
            <div className="flex items-center gap-6 xl:gap-8 font-medium text-slate-500">

              <Link
                href="/"
                className={`relative transition-colors duration-300 group py-2 ${pathname === "/"
                    ? "text-indigo-600 font-bold"
                    : "hover:text-indigo-600"
                  }`}
              >
                Home
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-indigo-600 rounded-full transition-all duration-300 ${pathname === "/" ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                ></span>
              </Link>

              <Link
                href="/services"
                className={`relative transition-colors duration-300 group py-2 ${pathname === "/services"
                    ? "text-indigo-600 font-bold"
                    : "hover:text-indigo-600"
                  }`}
              >
                Services
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-indigo-600 rounded-full transition-all duration-300 ${pathname === "/services"
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                    }`}
                ></span>
              </Link>

              <Link
                href="/solutions"
                className={`relative transition-colors duration-300 group py-2 ${pathname === "/solutions"
                    ? "text-indigo-600 font-bold"
                    : "hover:text-indigo-600"
                  }`}
              >
                Solutions
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-indigo-600 rounded-full transition-all duration-300 ${pathname === "/solutions"
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                    }`}
                ></span>
              </Link>

              <Link
                href="/portfolio"
                className={`relative transition-colors duration-300 group py-2 ${pathname === "/portfolio"
                    ? "text-indigo-600 font-bold"
                    : "hover:text-indigo-600"
                  }`}
              >
                Our Work
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-indigo-600 rounded-full transition-all duration-300 ${pathname === "/portfolio"
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                    }`}
                ></span>
              </Link>

              <Link
                href="/about"
                className={`relative transition-colors duration-300 group py-2 ${pathname === "/about"
                    ? "text-indigo-600 font-bold"
                    : "hover:text-indigo-600"
                  }`}
              >
                About
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-indigo-600 rounded-full transition-all duration-300 ${pathname === "/about"
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                    }`}
                ></span>
              </Link>

              <Link
                href="/blog"
                className={`relative transition-colors duration-300 group py-2 ${pathname.startsWith("/blog")
                    ? "text-indigo-600 font-bold"
                    : "hover:text-indigo-600"
                  }`}
              >
                Blog
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-indigo-600 rounded-full transition-all duration-300 ${pathname.startsWith("/blog")
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                    }`}
                ></span>
              </Link>

              <Link
                href="/contact"
                className={`relative transition-colors duration-300 group py-2 ${pathname === "/contact"
                    ? "text-indigo-600 font-bold"
                    : "hover:text-indigo-600"
                  }`}
              >
                Contact
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-indigo-600 rounded-full transition-all duration-300 ${pathname === "/contact"
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                    }`}
                ></span>
              </Link>

            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="group relative bg-slate-900 border border-slate-700/50 text-white px-7 py-2.5 rounded-full overflow-hidden transition-all duration-300 shadow-md shadow-slate-900/10 hover:shadow-indigo-500/30 hover:scale-105 font-medium text-center"
            >
              <span className="relative z-10 transition-colors group-hover:text-white">
                Start Your Project
              </span>

              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute inset-0 bg-white/20 blur-md opacity-0 group-hover:animate-pulse transition-opacity" />
            </Link>

          </div>
        </div>
      </nav>

      {/* ===== MOBILE MENU OVERLAY (Side Drawer) ===== */}
      <div
        className={`fixed inset-0 z-[105] lg:hidden transition-all duration-500 ${isMobileMenuOpen
            ? "pointer-events-auto"
            : "pointer-events-none"
          }`}
      >
        {/* Backdrop overlay */}
        <div 
          className={`absolute inset-0 bg-slate-900/20 backdrop-blur-sm transition-opacity duration-500 ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Drawer */}
        <div className={`absolute top-0 left-0 w-[85%] max-w-sm h-[100dvh] bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
          
          <div className="flex items-center justify-between p-6 border-b border-slate-100">
            <Image
              src="/logo-transparent.png"
              alt="Wisdo Tech Logo"
              width={90}
              height={60}
              className="h-10 w-auto object-contain"
            />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 -mr-2 text-slate-500 hover:text-slate-900 bg-slate-50 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col gap-2 p-6 overflow-y-auto flex-grow text-lg font-bold text-slate-700">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="py-3 hover:text-indigo-600 border-b border-slate-50">
              Home
            </Link>
            <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="py-3 hover:text-indigo-600 border-b border-slate-50">
              Services
            </Link>
            <Link href="/solutions" onClick={() => setIsMobileMenuOpen(false)} className="py-3 hover:text-indigo-600 border-b border-slate-50">
              Solutions
            </Link>
            <Link href="/portfolio" onClick={() => setIsMobileMenuOpen(false)} className="py-3 hover:text-indigo-600 border-b border-slate-50">
              Our Work
            </Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="py-3 hover:text-indigo-600 border-b border-slate-50">
              About
            </Link>
            <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="py-3 hover:text-indigo-600 border-b border-slate-50">
              Blog
            </Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="py-3 hover:text-indigo-600 border-b border-slate-50">
              Contact
            </Link>
          </div>

          <div className="p-6 mt-auto bg-slate-50 border-t border-slate-100">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-sm uppercase tracking-wide hover:bg-indigo-600 shadow-md"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}