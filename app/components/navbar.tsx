"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
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

  // Lock background scroll when mobile drawer is open & handle Escape key
  useEffect(() => {
    if (isMobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setIsMobileMenuOpen(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { number: "01", label: "Home", href: "/" },
    { number: "02", label: "Services", href: "/services" },
    { number: "03", label: "Solutions", href: "/solutions" },
    { number: "04", label: "Our Work", href: "/portfolio" },
    { number: "05", label: "About", href: "/about" },
    { number: "06", label: "Blog", href: "/blog" },
    { number: "07", label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-1.5 lg:py-2"
            : "bg-white/70 backdrop-blur-md border-b border-slate-200/50 py-2 lg:py-3"
        }`}
      >
        {/* ===== MOBILE NAVBAR (Strict CSS Grid 3 equal columns for mathematical logo centering) ===== */}
        <div className="lg:hidden w-full px-4">
          <div className="grid grid-cols-3 items-center w-full h-[88px] sm:h-[96px]">
            {/* Left: Futuristic Geometric Navigation Control */}
            <div className="flex items-center justify-start">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation-drawer"
                className="relative inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/95 hover:bg-blue-50/70 border border-slate-200/90 hover:border-blue-500/40 text-slate-900 hover:text-blue-600 focus:outline-hidden focus:ring-2 focus:ring-blue-500/25 active:scale-95 transition-all duration-300 shadow-xs group"
              >
                {/* Tech corner accents */}
                <span className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-slate-300 group-hover:border-blue-500 transition-colors" />
                <span className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-slate-300 group-hover:border-blue-500 transition-colors" />

                <div className="w-5 h-4 flex flex-col justify-between items-center relative">
                  <span
                    className={`w-5 h-[2px] bg-current rounded-full transition-all duration-300 origin-center ${
                      isMobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""
                    }`}
                  />
                  <div
                    className={`flex items-center gap-1 transition-all duration-300 ${
                      isMobileMenuOpen ? "opacity-0 scale-x-0" : "opacity-100"
                    }`}
                  >
                    <span className="w-3.5 h-[2px] bg-current rounded-full transition-all duration-300 group-hover:w-4.5" />
                    <span className="w-1 h-1 rounded-full bg-blue-600 shrink-0" />
                  </div>
                  <span
                    className={`w-5 h-[2px] bg-current rounded-full transition-all duration-300 origin-center ${
                      isMobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                    }`}
                  />
                </div>
              </button>
            </div>

            {/* Center: Independently Centered WISDO TECH Logo (+15-20% Size) & Official Slogan */}
            <div className="flex flex-col items-center justify-center text-center">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex flex-col items-center justify-center group focus:outline-hidden"
              >
                <Image
                  src="/logo-transparent.png"
                  alt="Wisdo Tech"
                  width={150}
                  height={95}
                  priority
                  className="h-[62px] sm:h-[70px] w-auto object-contain drop-shadow-xs transition-transform duration-300 group-hover:scale-105"
                />
                <span className="text-[8px] sm:text-[9px] font-semibold tracking-[0.2em] uppercase text-slate-500 whitespace-nowrap select-none mt-0.5">
                  Trust Wisdom Innovation
                </span>
              </Link>
            </div>

            {/* Right: Contact Action Button */}
            <div className="flex items-center justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-semibold bg-slate-900 text-white hover:bg-blue-600 active:scale-95 transition-all duration-200 shadow-xs tracking-tight"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* ===== DESKTOP NAVBAR ===== */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:flex items-center justify-between">
            {/* Logo (Slightly Increased Size) */}
            <Link
              href="/"
              className="flex items-center group cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Image
                src="/logo-transparent.png"
                alt="Wisdo Tech Logo"
                width={175}
                height={115}
                priority
                className="h-[72px] xl:h-[90px] w-auto object-contain drop-shadow-md transition-transform duration-500 scale-110 origin-left group-hover:scale-[1.15]"
              />
            </Link>

            {/* Nav Links */}
            <div className="flex items-center gap-6 xl:gap-8 font-medium text-slate-500">
              <Link
                href="/"
                className={`relative transition-colors duration-300 group py-2 ${
                  pathname === "/"
                    ? "text-blue-600 font-bold"
                    : "hover:text-blue-600"
                }`}
              >
                Home
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-blue-600 rounded-full transition-all duration-300 ${
                    pathname === "/" ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>

              <Link
                href="/services"
                className={`relative transition-colors duration-300 group py-2 ${
                  pathname === "/services"
                    ? "text-blue-600 font-bold"
                    : "hover:text-blue-600"
                }`}
              >
                Services
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-blue-600 rounded-full transition-all duration-300 ${
                    pathname === "/services"
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>

              <Link
                href="/solutions"
                className={`relative transition-colors duration-300 group py-2 ${
                  pathname === "/solutions"
                    ? "text-blue-600 font-bold"
                    : "hover:text-blue-600"
                }`}
              >
                Solutions
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-blue-600 rounded-full transition-all duration-300 ${
                    pathname === "/solutions"
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>

              <Link
                href="/portfolio"
                className={`relative transition-colors duration-300 group py-2 ${
                  pathname === "/portfolio"
                    ? "text-blue-600 font-bold"
                    : "hover:text-blue-600"
                }`}
              >
                Our Work
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-blue-600 rounded-full transition-all duration-300 ${
                    pathname === "/portfolio"
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>

              <Link
                href="/about"
                className={`relative transition-colors duration-300 group py-2 ${
                  pathname === "/about"
                    ? "text-blue-600 font-bold"
                    : "hover:text-blue-600"
                }`}
              >
                About
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-blue-600 rounded-full transition-all duration-300 ${
                    pathname === "/about"
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>

              <Link
                href="/blog"
                className={`relative transition-colors duration-300 group py-2 ${
                  pathname.startsWith("/blog")
                    ? "text-blue-600 font-bold"
                    : "hover:text-blue-600"
                }`}
              >
                Blog
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-blue-600 rounded-full transition-all duration-300 ${
                    pathname.startsWith("/blog")
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>

              <Link
                href="/contact"
                className={`relative transition-colors duration-300 group py-2 ${
                  pathname === "/contact"
                    ? "text-blue-600 font-bold"
                    : "hover:text-blue-600"
                }`}
              >
                Contact
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-blue-600 rounded-full transition-all duration-300 ${
                    pathname === "/contact"
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="group relative bg-slate-900 border border-slate-700/50 text-white px-7 py-2.5 rounded-full overflow-hidden transition-all duration-300 shadow-md shadow-slate-900/10 hover:shadow-blue-500/30 hover:scale-105 font-medium text-center"
            >
              <span className="relative z-10 transition-colors group-hover:text-white">
                Start Your Project
              </span>

              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute inset-0 bg-white/20 blur-md opacity-0 group-hover:animate-pulse transition-opacity" />
            </Link>
          </div>
        </div>
      </nav>

      {/* ===== BESPOKE FUTURISTIC MOBILE NAVIGATION DRAWER ===== */}
      <div
        id="mobile-navigation-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        className={`fixed inset-0 z-[120] lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "pointer-events-auto visible" : "pointer-events-none invisible"
        }`}
      >
        {/* Backdrop overlay */}
        <div
          aria-hidden="true"
          onClick={() => setIsMobileMenuOpen(false)}
          className={`absolute inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Drawer Panel */}
        <div
          className={`absolute top-0 left-0 w-[88%] max-w-[350px] h-[100dvh] bg-white shadow-[0_25px_70px_rgba(15,23,42,0.18)] border-r border-slate-100 flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Top Section: Brand Logo & Stylish Close Button */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-white shrink-0">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex flex-col items-start group focus:outline-hidden"
            >
              <Image
                src="/logo-transparent.png"
                alt="Wisdo Tech"
                width={125}
                height={80}
                className="h-[46px] w-auto object-contain transition-transform group-hover:scale-105"
              />
              <span className="text-[8px] font-semibold tracking-[0.18em] uppercase text-slate-400 mt-1 select-none">
                Trust Wisdom Innovation
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close navigation menu"
              className="relative inline-flex items-center justify-center w-10 h-10 rounded-xl text-slate-600 hover:text-blue-600 bg-slate-50 hover:bg-blue-50/70 active:scale-95 transition-all duration-200 border border-slate-200/80 hover:border-blue-300 group/close focus:outline-hidden focus:ring-2 focus:ring-blue-500/25"
            >
              <span className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-slate-300 group-hover/close:border-blue-500 transition-colors" />
              <span className="absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-slate-300 group-hover/close:border-blue-500 transition-colors" />
              <X className="w-5 h-5 stroke-[2.2] transition-transform duration-300 group-hover/close:rotate-90" />
            </button>
          </div>

          {/* Context / Section Label */}
          <div className="px-5 pt-3.5 pb-2 flex items-center justify-between border-b border-slate-100/70 bg-slate-50/40 shrink-0">
            <span className="font-orbitron text-[10px] font-bold tracking-[0.24em] text-slate-400 uppercase select-none">
              NAVIGATION
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-100/80 text-[9px] font-bold text-blue-600 tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              SYS • ACTIVE
            </span>
          </div>

          {/* Distinctive Navigation List (Scrollable Area) */}
          <div className="flex-1 overflow-y-auto overscroll-contain px-3.5 py-3 space-y-1">
            {navLinks.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : item.href === "/blog"
                  ? pathname.startsWith("/blog")
                  : pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`group flex items-center justify-between px-3.5 py-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-blue-50/80 border border-blue-200/70 text-blue-600 shadow-2xs"
                      : "text-slate-800 hover:text-blue-600 hover:bg-slate-50/90 border border-transparent hover:border-slate-100"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-[11px] font-mono font-bold tracking-wider transition-colors ${
                        isActive
                          ? "text-blue-600 font-extrabold"
                          : "text-slate-400 group-hover:text-blue-600"
                      }`}
                    >
                      {item.number}
                    </span>
                    <span className="h-3.5 w-px bg-slate-200/80" />
                    <span
                      className={`text-[15px] tracking-tight transition-colors ${
                        isActive
                          ? "text-slate-900 font-bold"
                          : "text-slate-700 font-semibold group-hover:text-blue-600"
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>

                  {isActive ? (
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
                      <span className="text-[9px] font-bold tracking-widest text-blue-600 uppercase">
                        ACTIVE
                      </span>
                    </div>
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all duration-200" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Premium Bottom Section */}
          <div className="p-4 sm:p-5 bg-gradient-to-b from-white to-slate-50/90 border-t border-slate-100 shrink-0">
            <div className="mb-3">
              <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-blue-600 mb-0.5 select-none">
                Let&apos;s build something incredible
              </p>
              <p className="text-xs text-slate-500 font-normal leading-relaxed">
                Scalable software, websites & digital growth.
              </p>
            </div>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="group flex items-center justify-center w-full py-3.5 px-5 bg-slate-900 hover:bg-blue-600 text-white rounded-xl font-bold text-xs uppercase tracking-wider shadow-md shadow-slate-900/10 hover:shadow-blue-500/25 active:scale-[0.99] transition-all duration-300"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}