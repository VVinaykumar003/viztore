import Image from "next/image";
import Link from "next/link";
import { Twitter, Instagram, Linkedin, Facebook } from "lucide-react";

const columns = [
  {
    title: "Company",
    links: [{ label: "About Us", href: "/about-us" }],
  },
  {
    title: "Platform",
    links: [
      { label: "For Retailers", href: "/for-retailers" },
      { label: "For Customers", href: "/for-customers" },
      { label: "Platform Overview", href: "/platform" },
    ],
  },
  {
    title: "Company Info",
    links: [{ label: "Home", href: "/" }],
  },
  {
    title: "Contact",
    links: [
      // { label: "support@viztore.com", href: "mailto:support@viztore.com" },
      { label: "+91 9407655717", href: "tel:+919876543210" },
      { label: "Bhilai Chhattisghar, India", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-viz-navy pt-20 text-slate-300">
      <div className="container-viz">
        <div className="grid grid-cols-2 gap-10 pb-14 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="mb-4 flex items-center">
              <Image
                src="/images/lightLogo.png"
                alt="Viztore"
                width={140}
                height={40}
                className="h-19 w-auto"
              />
            </Link>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-slate-400">
              Making Local Retail Visible. Helping local retailers digitize
              their business and helping customers discover what&apos;s nearby.
            </p>
            {/* <div className="flex gap-3">
              {[Twitter, Instagram, Linkedin, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social link"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-colors hover:border-viz-accent hover:text-viz-accent"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div> */}
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-sm font-semibold text-white">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-viz-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

     <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Viztore. All rights reserved.
          </p>
          {/* <div className="flex gap-6 text-xs text-slate-500">
            <a href="#" className="hover:text-slate-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-300">
              Terms of Service
            </a>
          </div> */}
        </div> 
      </div>
    </footer>
  );
}
