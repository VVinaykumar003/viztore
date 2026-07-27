"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/home/CTASection";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/ui/FeatureCard";
import TimelineCard from "@/components/ui/TimelineCard";
import CategoryCard from "@/components/ui/CategoryCard";
import Button from "@/components/ui/Button";
import {
  Globe2,
  Clock,
  TrendingUp,
  BarChart3,
  Store,
  PackagePlus,
  Boxes,
  Receipt,
  Rocket,
  Package,
  Receipt as ReceiptIcon,
  ClipboardList,
  FileBarChart,
  Users,
  Factory,
  Wallet,
  Truck,
  ClipboardCheck,
  Shirt,
  Footprints,
  Cpu,
  Gem,
  Home,
  Sparkles,
  Gift,
  Dumbbell,
  Layers,
  Smile,
  ShieldCheck,
  MapPinned,
  LineChart,
  Handshake,
} from "lucide-react";


const benefits = [
  {
    icon: Globe2,
    title: "Increase Visibility",
    description: "Get discovered by nearby customers searching for your products.",
  },
  {
    icon: Clock,
    title: "Save Time",
    description: "Simplify inventory, billing, and daily store operations.",
  },
  {
    icon: TrendingUp,
    title: "Boost Sales",
    description: "Reach more local customers and increase repeat purchases.",
  },
  {
    icon: BarChart3,
    title: "Business Insights",
    description: "Track performance with real-time reports and analytics.",
  },
];

const steps = [
  {
    icon: Store,
    title: "Create Your Store",
    description: "Set up your digital storefront in minutes.",
  },
  {
    icon: PackagePlus,
    title: "Add Products",
    description: "Upload products, images, variants, and pricing.",
  },
  {
    icon: Boxes,
    title: "Manage Inventory",
    description: "Track stock levels with real-time inventory updates.",
  },
  {
    icon: Receipt,
    title: "Billing & Orders",
    description: "Generate invoices and manage walk-in, pickup, and delivery orders.",
  },
  {
    icon: Rocket,
    title: "Grow Your Business",
    description: "Reach nearby customers and grow through local discovery.",
  },
];

const featureList = [
  { icon: Package, label: "Product Management" },
  { icon: Boxes, label: "Inventory Tracking" },
  { icon: ReceiptIcon, label: "Billing & GST Invoicing" },
  { icon: Users, label: "Customer Management" },
  { icon: ClipboardList, label: "Orders & Deliveries" },
  { icon: FileBarChart, label: "Reports & Analytics" },
];

const supplierCards = [
  {
    icon: Factory,
    title: "Verified Supplier Network",
    description: "Connect with trusted wholesalers and distributors.",
  },
  {
    icon: Wallet,
    title: "Compare & Choose",
    description: "Compare prices, MOQ, delivery timelines, and supplier offers.",
  },
  {
    icon: Truck,
    title: "Bulk Ordering",
    description: "Place purchase orders directly from multiple suppliers.",
  },
  {
    icon: ClipboardCheck,
    title: "Procurement Management",
    description: "Track purchase orders, invoices, and supplier history from one dashboard.",
  },
];

const retailTypes = [
  { icon: Shirt, label: "Fashion Boutiques" },
  { icon: Footprints, label: "Footwear Stores" },
  { icon: Cpu, label: "Electronics Shops" },
  { icon: Gem, label: "Jewellery Stores" },
  { icon: Home, label: "Home & Living" },
  { icon: Sparkles, label: "Beauty Stores" },
  { icon: Gift, label: "Gift Shops" },
  { icon: Dumbbell, label: "Sports Stores" },
];

const whyChoose = [
  {
    icon: Layers,
    title: "One Platform",
    description: "Everything your business needs in one place.",
  },
  {
    icon: Smile,
    title: "Easy to Use",
    description: "Designed for retailers with no technical expertise.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    description: "Enterprise-grade security with reliable performance.",
  },
  {
    icon: MapPinned,
    title: "Local Discovery",
    description: "Help nearby customers find your products instantly.",
  },
  {
    icon: LineChart,
    title: "Better Business Insights",
    description: "Make smarter decisions with real-time analytics.",
  },
  {
    icon: Handshake,
    title: "Grow with Confidence",
    description: "Operate efficiently while reaching more local customers.",
  },
];

export default function ForRetailersContent() {
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
              Built for Modern Retailers
            </span>
            <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              Digitize. Manage. <span className="text-viz-accent">Grow</span> Your Store.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Manage products, inventory, billing, customers, and orders from
              one platform while making your store discoverable to nearby
              shoppers.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button variant="primary">Join Waitlist</Button>
              <Button variant="secondary-dark">Request Demo</Button>
            </div>

            <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left backdrop-blur-sm"
                >
                  <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-viz-accent/15 text-viz-accent">
                    <Icon size={18} />
                  </span>
                  <h3 className="mb-1 text-sm font-semibold text-white">{title}</h3>
                  <p className="text-xs leading-relaxed text-slate-300">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How Viztore Works for Retailers */}
        <section className="bg-viz-bg-2 py-24 sm:py-28">
          <div className="container-viz">
            <SectionHeading
              eyebrow="How Viztore Works"
              title="How Viztore Works for Retailers"
              description="Everything your store needs — from daily operations to local customer discovery."
            />
            <div className="mt-16 flex flex-col gap-12 md:flex-row md:gap-4">
              {steps.map((step, i) => (
                <TimelineCard
                  key={step.title}
                  icon={step.icon}
                  step={i + 1}
                  title={step.title}
                  description={step.description}
                  isLast={i === steps.length - 1}
                  index={i}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Powerful Features */}
        <section className="py-24 sm:py-28">
          <div className="container-viz grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Powerful Features"
                title="Everything You Need to Run Your Store"
                description="Manage your retail operations, streamline daily workflows, and grow your business — all from one connected platform."
              />
              <div className="mt-8 flex flex-col gap-3">
                {featureList.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-2xl border border-viz-border bg-white px-5 py-4 shadow-sm"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-viz-primary/10 text-viz-primary">
                      <Icon size={18} />
                    </span>
                    <span className="text-sm font-medium text-viz-heading">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button variant="primary">Explore All Features</Button>
              </div>
            </div>

            <div className="rounded-3xl border border-viz-border bg-viz-navy p-6 shadow-2xl">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-viz-accent" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>
                <span className="text-xs text-slate-400">Viztore Dashboard</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-3 h-28 rounded-2xl bg-gradient-to-br from-viz-primary/30 to-viz-primary/5" />
                <div className="col-span-1 h-20 rounded-xl bg-white/5" />
                <div className="col-span-1 h-20 rounded-xl bg-white/5" />
                <div className="col-span-1 h-20 rounded-xl bg-viz-accent/20" />
                <div className="col-span-3 h-16 rounded-xl bg-white/5" />
              </div>
            </div>
          </div>
        </section>

        {/* Supplier Network */}
        <section className="bg-viz-bg-2 py-24 sm:py-28">
          <div className="container-viz">
            <SectionHeading
              eyebrow="Supplier Network"
              title="Source Inventory Smarter"
              description="Everything you need to source inventory smarter. Discover suppliers, compare offers, manage purchases, and keep your shelves stocked — all within Viztore."
            />
            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {supplierCards.map((card, i) => (
                <FeatureCard
                  key={card.title}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                  index={i}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Built for Every Type of Retail Business */}
        <section className="py-24 sm:py-28">
          <div className="container-viz">
            <SectionHeading
              eyebrow="Every Category"
              title="Built for Every Type of Retail Business"
              description="Whatever you sell, Viztore adapts to your category with the right tools — and many more."
            />
            <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {retailTypes.map((cat, i) => (
                <CategoryCard key={cat.label} icon={cat.icon} label={cat.label} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Retailers Choose Viztore */}
        <section className="bg-viz-bg-2 py-24 sm:py-28">
          <div className="container-viz">
            <SectionHeading
              eyebrow="Why Retailers Choose Viztore"
              title="Built to Help Local Retailers Grow"
            />
            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {whyChoose.map((reason, i) => (
                <FeatureCard
                  key={reason.title}
                  icon={reason.icon}
                  title={reason.title}
                  description={reason.description}
                  index={i}
                />
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
