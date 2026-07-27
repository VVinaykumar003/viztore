"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "For Retailers", href: "/for-retailers" },
  { label: "For Customers", href: "/for-customers" },
  { label: "Platform", href: "/platform" },
  { label: "About Us", href: "/about-us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-viz-border bg-white/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container-viz flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src={scrolled ? "/images/darkLogo.png" : "/images/lightLogo.png"}
            alt="Viztore"
            width={140}
            height={60}
            priority
            className="h-19 w-auto"
          />
        </Link>

        <div
          className={`hidden items-center gap-8 lg:flex ${
            scrolled ? "text-viz-heading" : "text-white/90"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-viz-accent"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            className={`text-sm font-semibold transition-colors ${
              scrolled ? "text-viz-heading hover:text-viz-primary" : "text-white hover:text-viz-accent"
            }`}
          >
            Login
          </button>
          <Button variant="primary" className="!px-5 !py-2.5">
            Join Waitlist
          </Button>
        </div>

        <button
          className={`lg:hidden ${scrolled ? "text-viz-heading" : "text-white"}`}
          onClick={() => setDrawerOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={26} />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 lg:hidden ${
          drawerOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-viz-navy/60 backdrop-blur-sm"
          onClick={() => setDrawerOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-72 transform bg-white p-6 shadow-2xl transition-transform duration-300 ${
            drawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="mb-8 flex items-center justify-between">
            <Image
              src="/images/darkLogo.png"
              alt="Viztore"
              width={120}
              height={34}
              className="h-8 w-auto"
            />
            <button onClick={() => setDrawerOpen(false)} aria-label="Close menu">
              <X size={24} className="text-viz-heading" />
            </button>
          </div>
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setDrawerOpen(false)}
                className="text-base font-medium text-viz-heading hover:text-viz-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3">
            <Button variant="secondary" className="w-full">
              Login
            </Button>
            <Button variant="primary" className="w-full">
              Join Waitlist
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
