"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/ui/FeatureCard";
import TimelineCard from "@/components/ui/TimelineCard";
import CategoryCard from "@/components/ui/CategoryCard";
import Button from "@/components/ui/Button";
import {
  MapPin,
  Search,
  ShoppingBag,
  Heart,
  Clock,
  Wallet,
  ShieldCheck,
  Shirt,
  Footprints,
  Gem,
  Cpu,
  Home,
  Sparkles,
  Gift,
  Dumbbell,
  Globe2,
  Scale,
  PackageCheck,
  Truck,
  Smartphone,
  Zap,
} from "lucide-react";


const benefits = [
  {
    icon: MapPin,
    title: "Discover Nearby Stores",
    description: "Find trusted local retailers around you.",
  },
  {
    icon: Search,
    title: "Search & Compare",
    description: "Compare products, prices, and availability.",
  },
  {
    icon: ShoppingBag,
    title: "Reserve or Buy",
    description: "Reserve products or order instantly.",
  },
  {
    icon: Heart,
    title: "Support Local",
    description: "Shop from businesses in your own city.",
  },
];

const whyShop = [
  {
    icon: MapPin,
    title: "Find Products Nearby",
    description: "Know exactly where products are available around you.",
  },
  {
    icon: Clock,
    title: "Save Time",
    description: "No more visiting multiple stores to find one product.",
  },
  {
    icon: Wallet,
    title: "Compare Before You Buy",
    description: "Compare nearby stores by price, availability, and convenience.",
  },
  {
    icon: ShoppingBag,
    title: "Shop Your Way",
    description: "Reserve, pick up, or get products delivered.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Local Stores",
    description: "Buy confidently from verified retailers.",
  },
  {
    icon: Heart,
    title: "Support Local Businesses",
    description: "Every purchase helps strengthen your local economy.",
  },
];

const categories = [
  { icon: Shirt, label: "Fashion" },
  { icon: Footprints, label: "Footwear" },
  { icon: Gem, label: "Jewellery" },
  { icon: Cpu, label: "Electronics" },
  { icon: Home, label: "Home & Living" },
  { icon: Sparkles, label: "Beauty" },
  { icon: Gift, label: "Gifts & Lifestyle" },
  { icon: Dumbbell, label: "Sports & Fitness" },
];

const steps = [
  {
    icon: Search,
    title: "Search Products",
    description: "Search for any product or browse categories.",
  },
  {
    icon: MapPin,
    title: "Discover Nearby Stores",
    description: "View nearby retailers with live availability.",
  },
  {
    icon: Scale,
    title: "Compare & Choose",
    description: "Compare stores by price, distance, and ratings.",
  },
  {
    icon: PackageCheck,
    title: "Reserve or Get Delivered",
    description: "Choose pickup or local delivery.",
  },
  {
    icon: Zap,
    title: "Enjoy Local Shopping",
    description: "Shop faster while supporting businesses near you.",
  },
];

const searchFeatures = [
  {
    icon: MapPin,
    title: "Local Search",
    description: "Discover products available in nearby stores for faster pickup or delivery.",
  },
  {
    icon: Globe2,
    title: "Global Search",
    description: "Expand your search beyond your city and explore products from retailers across India.",
  },
  {
    icon: Zap,
    title: "Smart Search",
    description: "Viztore automatically suggests the best available options — nearby first, nationwide next.",
  },
  {
    icon: ShoppingBag,
    title: "Shop Without Limits",
    description: "Never stop at \"Out of Stock.\" Find the product wherever it's available.",
  },
];

export default function ForCustomersContent() {
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
              Built for Everyday Shoppers
            </span>
            <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              Discover Local. <span className="text-viz-accent">Shop</span> Smarter.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Find products nearby, compare availability, reserve instantly,
              and choose pickup or local delivery — all from one app.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button variant="primary">Download App</Button>
              <Button variant="secondary-dark">Explore Platform</Button>
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

        {/* Why Shop with Viztore */}
        <section className="py-24 sm:py-28">
          <div className="container-viz">
            <SectionHeading
              eyebrow="Why Choose Viztore"
              title="Why Shop with Viztore?"
            />
            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {whyShop.map((reason, i) => (
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

        {/* Popular Categories */}
        <section className="bg-viz-bg-2 py-24 sm:py-28">
          <div className="container-viz">
            <SectionHeading
              eyebrow="Popular Categories"
              title="Explore Popular Categories"
              description="Discover products from your favorite local stores across multiple categories — and many more."
            />
            <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {categories.map((cat, i) => (
                <CategoryCard key={cat.label} icon={cat.icon} label={cat.label} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* How Viztore Works */}
        <section className="py-24 sm:py-28">
          <div className="container-viz">
            <SectionHeading
              eyebrow="How It Works"
              title="How Viztore Works"
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

        {/* Local + Global Search */}
        <section className="relative overflow-hidden bg-viz-navy py-24 sm:py-28">
          <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-viz-primary/25 blur-[120px]" />
          <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-viz-accent/15 blur-[100px]" />

          <div className="container-viz relative">
            <SectionHeading
              light
              eyebrow="Search Local. Expand Globally."
              title="Search Local. Expand Globally."
              description="Every search starts with nearby stores. If the product isn't available locally, Viztore automatically expands your search across its retail network — helping you find exactly what you need."
            />
            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {searchFeatures.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                >
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-viz-accent/15 text-viz-accent">
                    <Icon size={20} />
                  </span>
                  <h3 className="mb-2 text-base font-semibold text-white">{title}</h3>
                  <p className="text-sm leading-relaxed text-slate-300">{description}</p>
                </div>
              ))}
            </div>

            <div className="mx-auto mt-14 max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
              <p className="text-lg font-semibold text-white">
                Can&apos;t find it nearby?
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Switch to Global and discover products from retailers across
                India.
              </p>
            </div>
          </div>
        </section>

        {/* Download App CTA */}
        <section className="px-5 py-20 sm:px-8 lg:px-10">
          <div className="container-viz relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-viz-primary via-blue-700 to-viz-navy px-8 py-16 text-center sm:px-16 sm:py-20">
            <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-viz-accent/20 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-2xl">
              <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white">
                <Smartphone size={26} />
              </span>
              <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                Your Neighborhood. In Your Pocket.
              </h2>
              <p className="mt-5 text-base text-blue-100 sm:text-lg">
                Download the Viztore app and discover everything your local
                stores have to offer — from fashion and electronics to gifts
                and more.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  variant="primary"
                  className="!bg-viz-accent !text-viz-navy !shadow-amber-400/30 hover:!bg-amber-300"
                >
                  Download App
                </Button>
                <Button variant="secondary-dark">Explore Platform</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
