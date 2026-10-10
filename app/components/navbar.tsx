"use client";

import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  Briefcase,
  Layers,
  Sparkles,
  User,
  BookOpen,
  Mail,
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
    { label: "Home", href: "/", icon: Home },
    { label: "Services", href: "/services", icon: Briefcase },
    { label: "Solutions", href: "/solutions", icon: Layers },
    { label: "Our Work", href: "/portfolio", icon: Sparkles },
    { label: "About", href: "/about", icon: User },
    { label: "Blog", href: "/blog", icon: BookOpen },
    { label: "Contact", href: "/contact", icon: Mail },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-1.5 lg:py-2"
            : "bg-white/60 backdrop-blur-md border-b border-slate-200/50 py-2 lg:py-3"
        }`}
      >
        {/* ===== MOBILE NAVBAR (Strict CSS Grid 3 equal columns for mathematical logo centering) ===== */}
        <div className="lg:hidden w-full px-4">
          <div className="grid grid-cols-3 items-center w-full h-18 sm:h-20">
            {/* Left: Premium Hamburger Button */}
            <div className="flex items-center justify-start">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation-drawer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/80 hover:bg-slate-50 border border-slate-200/80 text-slate-800 hover:text-indigo-600 focus:outline-hidden focus:ring-2 focus:ring-indigo-500/25 active:scale-95 transition-all duration-200 shadow-2xs"
              >
                <div className="relative w-5 h-5 flex items-center justify-center">
                  <Menu
                    className={`w-5 h-5 absolute transition-all duration-300 stroke-[2] ${
                      isMobileMenuOpen
                        ? "opacity-0 rotate-90 scale-75"
                        : "opacity-100 rotate-0 scale-100"
                    }`}
                  />
                  <X
                    className={`w-5 h-5 absolute transition-all duration-300 stroke-[2] ${
                      isMobileMenuOpen
                        ? "opacity-100 rotate-0 scale-100"
                        : "opacity-0 -rotate-90 scale-75"
                    }`}
                  />
                </div>
              </button>
            </div>

            {/* Center: Independently Centered WISDO TECH Logo & Locked Official Slogan */}
            <div className="flex flex-col items-center justify-center text-center">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex flex-col items-center justify-center group focus:outline-hidden"
              >
                <Image
                  src="/logo-transparent.png"
                  alt="Wisdo Tech"
                  width={120}
                  height={80}
                  priority
                  className="h-[48px] sm:h-[54px] w-auto object-contain drop-shadow-xs transition-transform duration-300 group-hover:scale-105"
                />
                <span className="text-[8px] sm:text-[9px] font-semibold tracking-[0.16em] uppercase text-slate-500 whitespace-nowrap select-none mt-0.5">
                  Trust Wisdom Innovation
                </span>
              </Link>
            </div>

            {/* Right: Compact Contact Action */}
            <div className="flex items-center justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-900 text-white hover:bg-indigo-600 active:scale-95 transition-all duration-200 shadow-xs tracking-tight"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* ===== DESKTOP NAVBAR (Preserved Exactly) ===== */}
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
                className={`relative transition-colors duration-300 group py-2 ${
                  pathname === "/"
                    ? "text-indigo-600 font-bold"
                    : "hover:text-indigo-600"
                }`}
              >
                Home
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-indigo-600 rounded-full transition-all duration-300 ${
                    pathname === "/" ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>

              <Link
                href="/services"
                className={`relative transition-colors duration-300 group py-2 ${
                  pathname === "/services"
                    ? "text-indigo-600 font-bold"
                    : "hover:text-indigo-600"
                }`}
              >
                Services
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-indigo-600 rounded-full transition-all duration-300 ${
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
                    ? "text-indigo-600 font-bold"
                    : "hover:text-indigo-600"
                }`}
              >
                Solutions
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-indigo-600 rounded-full transition-all duration-300 ${
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
                    ? "text-indigo-600 font-bold"
                    : "hover:text-indigo-600"
                }`}
              >
                Our Work
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-indigo-600 rounded-full transition-all duration-300 ${
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
                    ? "text-indigo-600 font-bold"
                    : "hover:text-indigo-600"
                }`}
              >
                About
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-indigo-600 rounded-full transition-all duration-300 ${
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
                    ? "text-indigo-600 font-bold"
                    : "hover:text-indigo-600"
                }`}
              >
                Blog
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-indigo-600 rounded-full transition-all duration-300 ${
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
                    ? "text-indigo-600 font-bold"
                    : "hover:text-indigo-600"
                }`}
              >
                Contact
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-indigo-600 rounded-full transition-all duration-300 ${
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

      {/* ===== PREMIUM MOBILE NAVIGATION DRAWER ===== */}
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
          className={`absolute top-0 left-0 w-[84%] max-w-[340px] h-[100dvh] bg-white shadow-2xl border-r border-slate-100 flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Drawer Header: Brand Logo & Refined Close Button */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-white shrink-0">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex flex-col items-start group"
            >
              <Image
                src="/logo-transparent.png"
                alt="Wisdo Tech"
                width={105}
                height={70}
                className="h-[42px] w-auto object-contain transition-transform group-hover:scale-105"
              />
              <span className="text-[8px] font-semibold tracking-[0.14em] uppercase text-slate-400 mt-0.5">
                Trust Wisdom Innovation
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close navigation menu"
              className="inline-flex items-center justify-center w-9 h-9 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 active:scale-95 transition-all duration-200 border border-slate-200/60"
            >
              <X className="w-5 h-5 stroke-[2]" />
            </button>
          </div>

          {/* Drawer Navigation Links (Scrollable Area) */}
          <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-4 space-y-1.5">
            {navLinks.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : item.href === "/blog"
                  ? pathname.startsWith("/blog")
                  : pathname === item.href;
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`group flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-indigo-50 text-indigo-600 shadow-2xs font-bold"
                      : "text-slate-700 hover:text-indigo-600 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                        isActive
                          ? "bg-indigo-600 text-white"
                          : "bg-slate-100 text-slate-500 group-hover:bg-indigo-50 group-hover:text-indigo-600"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span>{item.label}</span>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isActive
                        ? "text-indigo-500 translate-x-0.5"
                        : "text-slate-300 group-hover:text-slate-500 group-hover:translate-x-0.5"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Drawer Bottom CTA (Fixed / Non-overlapping) */}
          <div className="p-4 bg-slate-50/90 border-t border-slate-100 shrink-0">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="group flex items-center justify-center w-full py-3.5 px-4 bg-slate-900 hover:bg-indigo-600 text-white rounded-xl font-semibold text-sm tracking-wide shadow-md shadow-slate-900/10 hover:shadow-indigo-500/20 active:scale-[0.99] transition-all duration-200"
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