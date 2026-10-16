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
        {/* ===== MOBILE NAVBAR (Resilient flex layout ensuring 0 overflow & fully visible Contact button) ===== */}
        <div className="lg:hidden w-full px-3 xs:px-4 sm:px-6">
          <div className="flex items-center justify-between w-full h-[64px] sm:h-[72px] max-w-7xl mx-auto">
            {/* Left: Futuristic Geometric Navigation Control */}
            <div className="flex items-center justify-start shrink-0">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation-drawer"
                className="relative inline-flex items-center justify-center w-10 h-10 xs:w-11 xs:h-11 rounded-xl bg-white/95 hover:bg-emerald-50/70 border border-slate-200/90 hover:border-emerald-500/40 text-slate-900 hover:text-emerald-600 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/25 active:scale-95 transition-all duration-300 shadow-xs group"
              >
                {/* Tech corner accents */}
                <span className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-slate-300 group-hover:border-emerald-500 transition-colors" />
                <span className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-slate-300 group-hover:border-emerald-500 transition-colors" />

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
                    <span className="w-1 h-1 rounded-full bg-emerald-600 shrink-0" />
                  </div>
                  <span
                    className={`w-5 h-[2px] bg-current rounded-full transition-all duration-300 origin-center ${
                      isMobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                    }`}
                  />
                </div>
              </button>
            </div>

            {/* Center: Independently Centered WISDO TECH Logo & Official Slogan */}
            <div className="flex flex-col items-center justify-center text-center flex-1 min-w-0 px-2">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex flex-col items-center justify-center group focus:outline-hidden"
              >
                <Image
                  src="/logo-transparent.png"
                  alt="Wisdo Tech"
                  width={140}
                  height={80}
                  priority
                  className="h-[34px] xs:h-[38px] sm:h-[42px] w-auto object-contain drop-shadow-xs transition-transform duration-300 group-hover:scale-105"
                />
                <span className="text-[7px] xs:text-[7.5px] sm:text-[8px] font-semibold tracking-[0.18em] xs:tracking-[0.2em] uppercase text-slate-500 whitespace-nowrap select-none mt-0.5">
                  Trust Wisdom Innovation
                </span>
              </Link>
            </div>

            {/* Right: Contact Action Button */}
            <div className="flex items-center justify-end shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-semibold bg-slate-900 text-white hover:bg-emerald-600 active:scale-95 transition-all duration-200 shadow-xs tracking-tight whitespace-nowrap"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* ===== DESKTOP NAVBAR ===== */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center group cursor-pointer py-1"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Image
                src="/logo-transparent.png"
                alt="Wisdo Tech Logo"
                width={160}
                height={85}
                priority
                className="h-[44px] xl:h-[48px] w-auto object-contain drop-shadow-xs transition-transform duration-300 origin-left group-hover:scale-105"
              />
            </Link>

            {/* Nav Links */}
            <div className="flex items-center gap-6 xl:gap-8 font-medium text-slate-500">
              <Link
                href="/"
                className={`relative transition-colors duration-300 group py-2 ${
                  pathname === "/"
                    ? "text-emerald-600 font-bold"
                    : "hover:text-emerald-600"
                }`}
              >
                Home
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-emerald-600 rounded-full transition-all duration-300 ${
                    pathname === "/" ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>

              <Link
                href="/services"
                className={`relative transition-colors duration-300 group py-2 ${
                  pathname === "/services"
                    ? "text-emerald-600 font-bold"
                    : "hover:text-emerald-600"
                }`}
              >
                Services
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-emerald-600 rounded-full transition-all duration-300 ${
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
                    ? "text-emerald-600 font-bold"
                    : "hover:text-emerald-600"
                }`}
              >
                Solutions
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-emerald-600 rounded-full transition-all duration-300 ${
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
                    ? "text-emerald-600 font-bold"
                    : "hover:text-emerald-600"
                }`}
              >
                Our Work
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-emerald-600 rounded-full transition-all duration-300 ${
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
                    ? "text-emerald-600 font-bold"
                    : "hover:text-emerald-600"
                }`}
              >
                About
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-emerald-600 rounded-full transition-all duration-300 ${
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
                    ? "text-emerald-600 font-bold"
                    : "hover:text-emerald-600"
                }`}
              >
                Blog
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-emerald-600 rounded-full transition-all duration-300 ${
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
                    ? "text-emerald-600 font-bold"
                    : "hover:text-emerald-600"
                }`}
              >
                Contact
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-emerald-600 rounded-full transition-all duration-300 ${
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
              className="group relative bg-slate-900 border border-slate-700/50 text-white px-7 py-2.5 rounded-full overflow-hidden transition-all duration-300 shadow-md shadow-slate-900/10 hover:shadow-emerald-500/25 hover:scale-105 font-medium text-center"
            >
              <span className="relative z-10 transition-colors group-hover:text-white">
                Start Your Project
              </span>

              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

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
                width={120}
                height={70}
                className="h-[34px] w-auto object-contain transition-transform group-hover:scale-105"
              />
              <span className="text-[8px] font-semibold tracking-[0.18em] uppercase text-slate-400 mt-1 select-none">
                Trust Wisdom Innovation
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close navigation menu"
              className="relative inline-flex items-center justify-center w-10 h-10 rounded-xl text-slate-600 hover:text-emerald-600 bg-slate-50 hover:bg-emerald-50/70 active:scale-95 transition-all duration-200 border border-slate-200/80 hover:border-emerald-300 group/close focus:outline-hidden focus:ring-2 focus:ring-emerald-500/25"
            >
              <span className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-slate-300 group-hover/close:border-emerald-500 transition-colors" />
              <span className="absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-slate-300 group-hover/close:border-emerald-500 transition-colors" />
              <X className="w-5 h-5 stroke-[2.2] transition-transform duration-300 group-hover/close:rotate-90" />
            </button>
          </div>

          {/* Context / Section Label */}
          <div className="px-5 pt-3.5 pb-2 flex items-center justify-between border-b border-slate-100/70 bg-slate-50/40 shrink-0">
            <span className="font-orbitron text-[10px] font-bold tracking-[0.24em] text-slate-400 uppercase select-none">
              NAVIGATION
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-100/80 text-[9px] font-bold text-emerald-600 tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
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
                      ? "bg-emerald-50/80 border border-emerald-200/70 text-emerald-700 shadow-2xs"
                      : "text-slate-800 hover:text-emerald-600 hover:bg-slate-50/90 border border-transparent hover:border-slate-100"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-[11px] font-mono font-bold tracking-wider transition-colors ${
                        isActive
                          ? "text-emerald-600 font-extrabold"
                          : "text-slate-400 group-hover:text-emerald-600"
                      }`}
                    >
                      {item.number}
                    </span>
                    <span className="h-3.5 w-px bg-slate-200/80" />
                    <span
                      className={`text-[15px] tracking-tight transition-colors ${
                        isActive
                          ? "text-slate-900 font-bold"
                          : "text-slate-700 font-semibold group-hover:text-emerald-600"
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>

                  {isActive ? (
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shadow-[0_0_8px_rgba(5,150,105,0.6)]" />
                      <span className="text-[9px] font-bold tracking-widest text-emerald-700 uppercase">
                        ACTIVE
                      </span>
                    </div>
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all duration-200" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Premium Bottom Section */}
          <div className="p-4 sm:p-5 bg-gradient-to-b from-white to-slate-50/90 border-t border-slate-100 shrink-0">
            <div className="mb-3">
              <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-emerald-600 mb-0.5 select-none">
                Let&apos;s build something incredible
              </p>
              <p className="text-xs text-slate-500 font-normal leading-relaxed">
                Scalable software, websites & digital growth.
              </p>
            </div>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="group flex items-center justify-center w-full py-3.5 px-5 bg-slate-900 hover:bg-emerald-600 text-white rounded-xl font-bold text-xs uppercase tracking-wider shadow-md shadow-slate-900/10 hover:shadow-emerald-500/25 active:scale-[0.99] transition-all duration-300"
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