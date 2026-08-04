// components/Navbar.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "For Retailers", href: "/for-retailers" },
  { label: "For Customers", href: "/for-customers" },
  { label: "Platform", href: "/platform" },
  { label: "About Us", href: "/about-us" },
];

const HERO_THRESHOLD = 800; // px scrolled before navbar is considered "past hero"
const LG_BREAKPOINT = 1024; // matches Tailwind's `lg`

export default function Navbar() {
  const pathname = usePathname();
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= LG_BREAKPOINT);
    const handleScroll = () => setPastHero(window.scrollY > HERO_THRESHOLD);

    handleResize();
    handleScroll();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const logoSrc =
    isLargeScreen && !pastHero
      ? "/images/lightLogo.png" // Desktop: before hero, light logo
      : "/images/darkLogo.png"; // Desktop: past hero, dark logo; Mobile: always dark logo

  // Navbar surface: transparent over hero on desktop, white once scrolled or on mobile
  const navSurface =
    isLargeScreen && !pastHero
      ? "bg-transparent"
      : "bg-white shadow-sm";

  const linkTextColor =
    isLargeScreen && !pastHero ? "text-white" : "text-slate-500";

  return (
    <div className="drawer drawer-end">
      <input id="mobile-drawer" type="checkbox" className="drawer-toggle" />

      {/* ---------- Navbar bar ---------- */}
      <div className="drawer-content">
        <nav
          className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${navSurface}`}
        >
          <div className="navbar mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <div className="navbar-start">
              <Link href="/" className="flex items-center">
                <Image
                  src={logoSrc}
                  alt="Logo"
                  width={140}
                  height={36}
                  priority
                  className="h-9 w-auto"
                />
              </Link>
            </div>

            {/* Desktop links */}
            <div className="navbar-end  w-full hidden lg:flex">
              <ul className="menu menu-horizontal gap-1 px-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`rounded-btn font-medium transition-colors ${
                          isActive
                            ? "text-viz-primary"
                            : `${linkTextColor} hover:text-viz-primary`
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Desktop CTA + Mobile hamburger */}
            <div className="navbar-end gap-2  lg:hidden">
             

              <label
                htmlFor="mobile-drawer"
                aria-label="Open menu"
                className={`btn btn-square btn-ghost lg:hidden ${linkTextColor}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </label>
            </div>
          </div>
        </nav>
      </div>

      {/* ---------- Mobile side drawer ---------- */}
      <div className="drawer-side z-[60]">
        <label
          htmlFor="mobile-drawer"
          aria-label="Close menu"
          className="drawer-overlay"
        />
        <div className="menu bg-white min-h-full w-72 p-6 flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <Image
              src="/images/darkLogo.png"
              alt="Logo"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
            <label
              htmlFor="mobile-drawer"
              aria-label="Close menu"
              className="btn btn-sm btn-circle btn-ghost text-slate-500"
            >
              ✕
            </label>
          </div>

          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <label htmlFor="mobile-drawer">
                    <Link
                      href={link.href}
                      className={`block rounded-btn px-3 py-3 text-base font-medium transition-colors ${
                        isActive
                          ? "bg-viz-primary/10 text-viz-primary"
                          : "text-slate-500 hover:bg-slate-100"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </label>
                </li>
              );
            })}
          </ul>

          
        </div>
      </div>
    </div>
  );
}