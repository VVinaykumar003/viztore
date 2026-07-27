"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/ui/FeatureCard";
import CategoryCard from "@/components/ui/CategoryCard";
import Button from "@/components/ui/Button";
import {
  Factory,
  Store,
  Users,
  Truck,
  BarChart3,
  TrendingUp,
  Package,
  MapPin,
  Compass,
  Wifi,
  QrCode,
  BookOpen,
  UserCircle,
  Search,
  Globe2,
  Code2,
  Megaphone,
  Gift,
  Heart,
  Sparkles,
  Brain,
  FileBarChart,
  Boxes,
  Receipt,
  ClipboardList,
  Layers,
  Wallet,
  ShoppingBag,
  Handshake,
  Shirt,
  Footprints,
  Cpu,
  Gem,
  Home,
  Dumbbell,
  Sofa,
  BookOpenText,
  PawPrint,
  CreditCard,
  FileText,
  ShipWheel,
  Calculator,
  MessageCircle,
  Mail,
} from "lucide-react";


const ecosystem = [
  { icon: Factory, label: "Supplier" },
  { icon: Store, label: "Retailer" },
  { icon: Users, label: "Customer" },
  { icon: Truck, label: "Delivery" },
  { icon: BarChart3, label: "Analytics" },
  { icon: TrendingUp, label: "Growth" },
];

const pillars = [
  {
    icon: Store,
    title: "🏪 Retail Operations",
    subtitle: "Run your store with confidence.",
    items: [
      "Product Management",
      "Inventory",
      "Billing & GST",
      "Customer Management",
      "Orders",
      "Reports",
      "Multi Store",
      "Staff Management",
    ],
  },
  {
    icon: ShoppingBag,
    title: "🛍 Customer Experience",
    subtitle: "Make local shopping effortless.",
    items: [
      "Product Search",
      "Nearby Discovery",
      "Product Comparison",
      "Live Availability",
      "Wishlist",
      "Reserve Product",
      "Pickup",
      "Delivery",
    ],
  },
  {
    icon: Globe2,
    title: "🌍 Commerce Network",
    subtitle: "Connect beyond your storefront.",
    items: [
      "Local Search",
      "Global Search",
      "Supplier Network",
      "QR Storefront",
      "Digital Catalog",
      "Store Profile",
      "Discovery Engine",
      "Commerce APIs",
    ],
  },
  {
    icon: TrendingUp,
    title: "🚀 Business Growth",
    subtitle: "Grow beyond daily operations.",
    items: [
      "Analytics",
      "Marketing Campaigns",
      "Loyalty",
      "Offers",
      "Customer Insights",
      "AI Catalog",
      "Image Enhancement",
      "Reports",
    ],
  },
];

const highlights = [
  {
    icon: Package,
    title: "Retail Operations",
    description: "Manage your entire business from one dashboard.",
  },
  {
    icon: Search,
    title: "Smart Discovery",
    description: "Help customers discover products nearby through intelligent search.",
  },
  {
    icon: Globe2,
    title: "Local + Global Search",
    description: "Find products nearby first, then expand across the Viztore network when needed.",
  },
  {
    icon: Factory,
    title: "Supplier Network",
    description: "Compare wholesalers, discover suppliers, and place bulk purchase orders.",
  },
  {
    icon: Truck,
    title: "Hyperlocal Commerce",
    description: "Support reservation, pickup, and local delivery from one platform.",
  },
  {
    icon: Code2,
    title: "Integrations",
    description: "Payments, GST, WhatsApp, Tally, SMS, Shipping Partners.",
  },
  {
    icon: TrendingUp,
    title: "Growth Tools",
    description: "Analytics, campaigns, CRM, and customer retention.",
  },
];

const searchFlow = [
  { icon: MapPin, label: "Local" },
  { icon: Globe2, label: "Global" },
  { icon: Compass, label: "Compare" },
  { icon: Package, label: "Reserve" },
  { icon: Truck, label: "Delivery" },
];

const businesses = [
  { icon: Shirt, label: "Fashion" },
  { icon: Footprints, label: "Footwear" },
  { icon: Cpu, label: "Electronics" },
  { icon: Gem, label: "Jewellery" },
  { icon: Sparkles, label: "Beauty" },
  { icon: Home, label: "Home & Living" },
  { icon: Dumbbell, label: "Sports" },
  { icon: Gift, label: "Gifts" },
  { icon: Sofa, label: "Furniture" },
  { icon: BookOpenText, label: "Books" },
  { icon: PawPrint, label: "Pet" },
  { icon: Layers, label: "More..." },
];

const integrations = [
  { icon: CreditCard, label: "Payment" },
  { icon: FileText, label: "GST" },
  { icon: ShipWheel, label: "Shipping" },
  { icon: Calculator, label: "Accounting" },
  { icon: MessageCircle, label: "WhatsApp" },
  { icon: Wifi, label: "SMS" },
  { icon: Mail, label: "Email" },
];

export default function PlatformContent() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-viz-navy pb-20 pt-40 sm:pt-44">
          <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-viz-primary/30 blur-[120px]" />
          <div className="pointer-events-none absolute -right-24 top-40 h-80 w-80 rounded-full bg-viz-accent/20 blur-[100px]" />

          <div className="container-viz relative text-center">
            <span className="badge-eyebrow border-white/15 bg-white/5 text-viz-accent">
              The Viztore Platform
            </span>
            <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              One Platform. Complete <span className="text-viz-accent">Retail Commerce</span>.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Manage your business, discover customers, source inventory, and
              deliver better shopping experiences — all from one connected
              platform.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button variant="primary">Join Waitlist</Button>
              <Button variant="secondary-dark">Request Demo</Button>
            </div>
          </div>
        </section>

        {/* Everything Connected */}
        <section className="py-24 sm:py-28">
          <div className="container-viz">
            <SectionHeading
              eyebrow="Everything Connected"
              title="One Connected Ecosystem"
              description="Every part of local commerce works together — from suppliers to retailers, customers, delivery, analytics, and growth."
            />
            <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
              {ecosystem.map(({ icon: Icon, label }, i) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="flex flex-col items-center gap-2 rounded-2xl border border-viz-border bg-viz-bg-2 px-6 py-5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-viz-primary/10 text-viz-primary">
                      <Icon size={20} />
                    </span>
                    <span className="text-sm font-medium text-viz-heading">{label}</span>
                  </div>
                  {i < ecosystem.length - 1 && (
                    <span className="hidden text-viz-border sm:block">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Built for Every Part of Retail */}
        <section className="bg-viz-bg-2 py-24 sm:py-28">
          <div className="container-viz">
            <SectionHeading
              eyebrow="Complete Coverage"
              title="Built for Every Part of Retail"
            />
            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {pillars.map(({ icon: Icon, title, subtitle, items }) => (
                <div
                  key={title}
                  className="rounded-3xl border border-viz-border bg-white p-6 shadow-sm"
                >
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-viz-primary/10 text-viz-primary">
                    <Icon size={20} />
                  </span>
                  <h3 className="mb-1 text-base font-semibold text-viz-heading">
                    {title}
                  </h3>
                  <p className="mb-4 text-sm text-viz-paragraph">{subtitle}</p>
                  <ul className="flex flex-col gap-2">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="text-xs text-viz-paragraph before:mr-2 before:text-viz-accent before:content-['●']"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Highlights */}
        <section className="py-24 sm:py-28">
          <div className="container-viz">
            <SectionHeading eyebrow="Platform Highlights" title="Platform Highlights" />
            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {highlights.map((item, i) => (
                <FeatureCard
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  index={i}
                />
              ))}
            </div>
          </div>
        </section>

        {/* One Search. Endless Possibilities */}
        <section className="relative overflow-hidden bg-viz-navy py-24 sm:py-28">
          <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-viz-primary/25 blur-[120px]" />
          <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-viz-accent/15 blur-[100px]" />

          <div className="container-viz relative">
            <SectionHeading
              light
              eyebrow="Smart Search, Not Just a Feature"
              title="One Search. Endless Possibilities."
              description="This is a single connected feature within Viztore — not the hero of the platform, but one of many pieces that work together."
            />
            <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
              {searchFlow.map(({ icon: Icon, label }, i) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-sm">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-viz-accent/15 text-viz-accent">
                      <Icon size={20} />
                    </span>
                    <span className="text-sm font-medium text-white">{label}</span>
                  </div>
                  {i < searchFlow.length - 1 && (
                    <span className="hidden text-white/20 sm:block">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Designed for Every Retail Business */}
        <section className="bg-viz-bg-2 py-24 sm:py-28">
          <div className="container-viz">
            <SectionHeading
              eyebrow="For Every Business"
              title="Designed for Every Retail Business"
            />
            <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {businesses.map((cat, i) => (
                <CategoryCard key={cat.label} icon={cat.icon} label={cat.label} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Works with Your Favorite Tools */}
        <section className="py-24 sm:py-28">
          <div className="container-viz">
            <SectionHeading
              eyebrow="Integrations"
              title="Works with Your Favorite Tools"
            />
            <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
              {integrations.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-3 rounded-2xl border border-viz-border bg-white px-4 py-6 text-center shadow-sm"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-viz-primary/10 text-viz-primary">
                    <Icon size={18} />
                  </span>
                  <span className="text-xs font-medium text-viz-heading">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 py-20 sm:px-8 lg:px-10">
          <div className="container-viz relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-viz-primary via-blue-700 to-viz-navy px-8 py-16 text-center sm:px-16 sm:py-20">
            <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-viz-accent/20 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                Ready to Transform Local Retail?
              </h2>
              <p className="mt-5 text-base text-blue-100 sm:text-lg">
                Join the platform connecting retailers, customers, and
                suppliers on one commerce network.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  variant="primary"
                  className="!bg-viz-accent !text-viz-navy !shadow-amber-400/30 hover:!bg-amber-300"
                >
                  Join Waitlist
                </Button>
                <Button variant="secondary-dark">Request Demo</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
