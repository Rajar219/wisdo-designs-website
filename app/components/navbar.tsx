"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  ChevronDown,
  ArrowRight,
  Mail,
  Home,
  Settings,
  Layers,
  Briefcase,
  Users,
  FileText,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<{ [key: string]: boolean }>({
    services: false,
    solutions: false,
  });
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



  const navItems = [
    {
      id: "home",
      label: "Home",
      href: "/",
      icon: Home,
    },
    {
      id: "services",
      label: "Services",
      href: "/services",
      icon: Settings,
      children: [
        { label: "Website Development", href: "/services/website-development" },
        { label: "Software Development", href: "/services/software-development" },
        { label: "UI/UX & Designing", href: "/services/designing" },
        { label: "Digital Marketing", href: "/services/digital-marketing" },
        { label: "All Services Overview", href: "/services" },
      ],
    },
    {
      id: "solutions",
      label: "Solutions",
      href: "/solutions",
      icon: Layers,
      children: [
        { label: "Business Websites", href: "/solutions#business-websites" },
        { label: "Custom Software", href: "/solutions#custom-software" },
        { label: "POS & Billing", href: "/solutions#pos-billing" },
        { label: "Inventory Systems", href: "/solutions#inventory-systems" },
        { label: "E-commerce", href: "/solutions#e-commerce" },
        { label: "All Solutions Overview", href: "/solutions" },
      ],
    },
    {
      id: "portfolio",
      label: "Our Work",
      href: "/portfolio",
      icon: Briefcase,
    },
    {
      id: "about",
      label: "About",
      href: "/about",
      icon: Users,
    },
    {
      id: "blog",
      label: "Blog",
      href: "/blog",
      icon: FileText,
    },
    {
      id: "contact",
      label: "Contact",
      href: "/contact",
      icon: MessageCircle,
    },
  ];

  const isItemActive = (item: (typeof navItems)[number]) => {
    if (item.href === "/") {
      return pathname === "/";
    }
    if (item.href === "/blog") {
      return pathname.startsWith("/blog");
    }
    if (item.href === "/services") {
      return pathname.startsWith("/services");
    }
    if (item.href === "/solutions") {
      return pathname.startsWith("/solutions");
    }
    return pathname === item.href;
  };

  const isMenuExpanded = (id: string, href: string) => {
    if (expandedMenus[id] !== undefined) {
      return expandedMenus[id];
    }
    return href !== "/" && pathname.startsWith(href);
  };

  const toggleSubmenu = (id: string, href: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setExpandedMenus((prev) => ({
      ...prev,
      [id]: !isMenuExpanded(id, href),
    }));
  };

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
          <div className="flex items-center justify-between w-full h-[66px] sm:h-[72px] max-w-7xl mx-auto">
            {/* Left: Refined Right-Aligned Staggered Menu Bar Icon Button */}
            <div className="flex items-center justify-start shrink-0">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation-drawer"
                className="relative inline-flex items-center justify-center w-10.5 h-10.5 rounded-xl bg-white/95 backdrop-blur-md hover:bg-emerald-50/70 active:bg-emerald-100/60 border border-slate-200/90 hover:border-emerald-500/40 focus:border-emerald-500 text-slate-900 hover:text-emerald-600 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 active:scale-95 transition-all duration-200 shadow-2xs group"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 stroke-[2] text-slate-900 group-hover:text-emerald-600 transition-colors" />
                ) : (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-slate-900 group-hover:text-emerald-600 transition-colors"
                  >
                    <line x1="3.5" y1="6.5" x2="19.5" y2="6.5" />
                    <line x1="7.5" y1="12" x2="19.5" y2="12" />
                    <line x1="11" y1="17.5" x2="19.5" y2="17.5" />
                  </svg>
                )}
              </button>
            </div>

            {/* Center: Independently Centered WISDO TECH Logo & Official Slogan (10-15% larger on mobile) */}
            <div className="flex flex-col items-center justify-center text-center flex-1 min-w-0 px-2">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex flex-col items-center justify-center group focus:outline-hidden"
              >
                <Image
                  src="/logo-transparent.png"
                  alt="Wisdo Tech"
                  width={160}
                  height={90}
                  priority
                  className="h-[39px] xs:h-[43px] sm:h-[47px] w-auto object-contain drop-shadow-xs transition-transform duration-300 group-hover:scale-105"
                />
                <span className="text-[7.5px] xs:text-[8px] sm:text-[8.5px] font-semibold tracking-[0.18em] xs:tracking-[0.2em] uppercase text-slate-500 whitespace-nowrap select-none mt-0.5">
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
              href="/quote"
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

      {/* ===== REAL FROSTED-GLASS MOBILE NAVIGATION DRAWER ===== */}
      {/* Backdrop overlay — Subtle dark tint so hero image shines through clearly */}
      <div
        className={`fixed inset-0 z-[120] lg:hidden bg-slate-950/25 backdrop-blur-xs transition-opacity duration-300 ease-out ${
          isMobileMenuOpen
            ? "opacity-100 visible pointer-events-auto"
            : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Left-Side Sliding Navigation Drawer — Genuine Translucent Mint-White Glass */}
      <aside
        id="mobile-navigation-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation sidebar"
        style={{
          background:
            "linear-gradient(145deg, rgba(240, 253, 250, 0.58) 0%, rgba(209, 250, 229, 0.40) 45%, rgba(240, 253, 250, 0.55) 100%)",
          backdropFilter: "blur(20px) saturate(170%)",
          WebkitBackdropFilter: "blur(20px) saturate(170%)",
          borderRight: "1px solid rgba(255, 255, 255, 0.65)",
          boxShadow:
            "0 25px 60px -15px rgba(0, 0, 0, 0.25), inset 0 0 0 1px rgba(255, 255, 255, 0.5), inset -1px 0 25px rgba(16, 185, 129, 0.12)",
        }}
        className={`fixed top-0 left-0 bottom-0 z-[130] lg:hidden w-[86%] max-w-[340px] xs:max-w-[360px] h-[100dvh] flex flex-col justify-between overflow-hidden transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Top Brand Header Bar — Translucent Glass Surface */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.25)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.5)",
          }}
          className="flex items-center justify-between px-4 xs:px-5 py-3.5 shrink-0"
        >
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex flex-col items-start group focus:outline-hidden"
          >
            <Image
              src="/logo-transparent.png"
              alt="Wisdo Tech"
              width={110}
              height={55}
              priority
              className="h-[28px] xs:h-[30px] w-auto object-contain transition-transform group-hover:scale-102"
            />
            <span className="text-[7px] xs:text-[7.5px] font-bold tracking-[0.2em] uppercase text-slate-500 select-none mt-0.5">
              Trust Wisdom Innovation
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close navigation menu"
            style={{
              background: "rgba(255, 255, 255, 0.65)",
              borderColor: "rgba(255, 255, 255, 0.8)",
            }}
            className="w-8.5 h-8.5 rounded-lg flex items-center justify-center text-slate-700 hover:text-slate-950 border active:scale-95 transition-all shadow-2xs"
          >
            <X className="w-4.5 h-4.5 stroke-[2]" />
          </button>
        </div>

        {/* Main Body: Translucent Mint Rail + Transparent Navigation Panel */}
        <div className="flex-1 flex min-h-0 overflow-hidden bg-transparent">
          {/* Translucent Mint Glass Icon Rail */}
          <div
            style={{
              background: "rgba(204, 251, 241, 0.25)",
              borderRight: "1px solid rgba(255, 255, 255, 0.45)",
            }}
            className="w-[52px] xs:w-[56px] flex flex-col items-center py-3 gap-1.5 shrink-0 overflow-y-auto no-scrollbar"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = isItemActive(item);
              return (
                <button
                  key={`rail-${item.id}`}
                  type="button"
                  onClick={(e) => {
                    if (item.children) {
                      toggleSubmenu(item.id, item.href, e);
                    } else {
                      window.location.href = item.href;
                      setIsMobileMenuOpen(false);
                    }
                  }}
                  aria-label={item.label}
                  className={`w-9 h-9 xs:w-10 xs:h-10 rounded-xl flex items-center justify-center transition-all duration-200 relative group ${
                    isActive
                      ? "bg-emerald-600 text-white shadow-xs shadow-emerald-600/30"
                      : "text-slate-700 hover:text-emerald-800 hover:bg-white/40"
                  }`}
                >
                  <Icon className="w-4.5 h-4.5 stroke-[2]" />
                  {isActive && (
                    <span className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-3.5 bg-emerald-600 rounded-r-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Transparent Glass Navigation Panel */}
          <div className="flex-1 min-w-0 flex flex-col justify-between overflow-hidden bg-transparent">
            {/* Scrollable links area */}
            <div className="flex-1 overflow-y-auto overscroll-contain px-3.5 xs:px-4 py-3 space-y-1">
              {/* Clean Menu Heading — NO stars, NO sparkles */}
              <div className="pb-2 pt-0.5 px-2">
                <span className="text-[11px] font-bold tracking-widest text-slate-500 uppercase">
                  Menu
                </span>
              </div>

              {navItems.map((item) => {
                const isActive = isItemActive(item);
                const hasChildren = Boolean(item.children && item.children.length > 0);
                const isExpanded = isMenuExpanded(item.id, item.href);

                return (
                  <div key={item.id} className="space-y-1">
                    <div
                      style={
                        isActive
                          ? {
                              background: "rgba(16, 185, 129, 0.16)",
                              borderColor: "rgba(16, 185, 129, 0.4)",
                            }
                          : undefined
                      }
                      className={`group flex items-center justify-between py-2 px-3 rounded-xl transition-all duration-200 border ${
                        isActive
                          ? "text-emerald-950 font-bold shadow-2xs"
                          : "border-transparent text-slate-900 hover:bg-white/40 hover:text-emerald-950"
                      }`}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex-1 text-sm font-semibold tracking-tight py-0.5 text-slate-900 group-hover:text-emerald-950 focus:outline-hidden"
                      >
                        {item.label}
                      </Link>

                      {hasChildren ? (
                        <button
                          type="button"
                          onClick={(e) => toggleSubmenu(item.id, item.href, e)}
                          aria-label={`Toggle ${item.label} submenu`}
                          aria-expanded={isExpanded}
                          className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-500 hover:text-emerald-700 hover:bg-white/50 transition-colors shrink-0"
                        >
                          <ChevronDown
                            className={`w-4 h-4 stroke-[2.2] transition-transform duration-200 ${
                              isExpanded ? "rotate-180 text-emerald-700" : ""
                            }`}
                          />
                        </button>
                      ) : isActive ? (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                      ) : null}
                    </div>

                    {/* Expandable Submenu */}
                    {hasChildren && item.children && (
                      <div
                        className={`overflow-hidden transition-all duration-200 ease-in-out ${
                          isExpanded ? "max-h-64 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                        }`}
                      >
                        <div className="ml-3 pl-3 py-1 space-y-0.5 border-l-2 border-emerald-500/35">
                          {item.children.map((child) => {
                            const isChildActive = pathname === child.href;
                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                style={
                                  isChildActive
                                    ? {
                                        background: "rgba(16, 185, 129, 0.18)",
                                        borderColor: "rgba(16, 185, 129, 0.35)",
                                      }
                                    : undefined
                                }
                                className={`block text-xs py-1.5 px-2.5 rounded-lg transition-colors leading-snug border ${
                                  isChildActive
                                    ? "text-emerald-950 font-bold"
                                    : "border-transparent text-slate-800 font-medium hover:text-emerald-950 hover:bg-white/40"
                                }`}
                              >
                                {child.label}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Translucent Glass Sidebar Footer */}
            <div
              style={{
                background: "rgba(240, 253, 250, 0.45)",
                borderTop: "1px solid rgba(255, 255, 255, 0.55)",
              }}
              className="p-3 xs:p-3.5 shrink-0 space-y-2"
            >
              {/* Compact Pitch */}
              <div className="rounded-xl bg-gradient-to-br from-emerald-600 via-emerald-600 to-teal-700 p-2.5 xs:p-3 text-white shadow-md shadow-emerald-900/15">
                <p className="text-[11px] xs:text-xs font-bold text-white tracking-tight">
                  Let&apos;s Build Something Incredible
                </p>
                <p className="text-[9.5px] xs:text-[10px] text-emerald-100/90 leading-tight mt-0.5">
                  Bespoke software & digital experiences.
                </p>
                <Link
                  href="/quote"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-2 w-full h-7.5 xs:h-8 px-3 rounded-lg bg-white hover:bg-slate-50 text-slate-900 font-bold text-[10.5px] xs:text-[11px] inline-flex items-center justify-between shadow-2xs transition-colors"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-600" />
                </Link>
              </div>

              {/* Quick Contact Info Strip — Email & Location (No Phone Number) */}
              <div className="flex items-center justify-between text-[10.5px] text-slate-700 font-medium px-1">
                <span className="flex items-center gap-1.5 text-slate-600 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  Chennai, IN
                </span>
                <a
                  href="mailto:wisdotech1@gmail.com"
                  className="hover:text-emerald-700 transition-colors flex items-center gap-1 text-slate-700 font-medium"
                >
                  <Mail className="w-3 h-3 text-emerald-600 shrink-0" />
                  wisdotech1@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}