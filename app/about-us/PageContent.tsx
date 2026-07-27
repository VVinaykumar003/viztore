"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/ui/FeatureCard";
import Button from "@/components/ui/Button";
import {
  Store,
  Globe2,
  Rocket,
  AlertTriangle,
  Eye,
  Target,
  Lightbulb,
  Handshake,
  Sparkles,
  ShieldCheck,
  Building2,
  Users,
  Truck,
  ClipboardCheck,
  UserCheck,
  MapPin,
} from "lucide-react";


const heroHighlights = [
  {
    icon: Store,
    title: "Built for Local Businesses",
    description: "Designed specifically for independent retailers and growing brands.",
  },
  {
    icon: Globe2,
    title: "Made for India",
    description: "Built to solve the real challenges of India's retail ecosystem.",
  },
  {
    icon: Rocket,
    title: "Future Ready",
    description: "Creating the technology powering the next generation of local commerce.",
  },
];

const story = [
  {
    icon: AlertTriangle,
    title: "The Problem",
    description:
      "Millions of local retailers offer great products, yet most remain invisible online. Customers often don't know where products are available nearby, while retailers lose opportunities simply because they can't be discovered.",
  },
  {
    icon: Eye,
    title: "The Vision",
    description:
      "A future where every local store is digitally connected, every product is searchable, and every customer can discover nearby businesses with confidence.",
  },
  {
    icon: Target,
    title: "The Mission",
    description:
      "To build India's most connected retail commerce platform by bringing retailers, customers, suppliers, and technology together on one unified network.",
  },
];

const values = [
  {
    icon: Rocket,
    title: "Innovation",
    description: "Building practical technology that solves real retail problems.",
  },
  {
    icon: Handshake,
    title: "Customer First",
    description: "Every decision starts with creating value for retailers and shoppers.",
  },
  {
    icon: Sparkles,
    title: "Simplicity",
    description: "Powerful technology should feel effortless to use.",
  },
  {
    icon: Globe2,
    title: "Local First",
    description: "Strengthening local businesses and communities through digital commerce.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Transparency",
    description: "Building reliable technology with honest communication and secure systems.",
  },
];

const buildingBlocks = [
  {
    title: "For Retailers",
    items: [
      "Digital Storefront",
      "Product & Inventory Management",
      "Billing & Orders",
      "Customer Management",
      "Analytics & Growth Tools",
    ],
  },
  {
    title: "For Customers",
    items: [
      "Search Products",
      "Discover Nearby Stores",
      "Compare Availability",
      "Reserve Products",
      "Pickup & Local Delivery",
    ],
  },
  {
    title: "Supplier Network",
    items: [
      "Discover Wholesalers",
      "Compare Supplier Offers",
      "Bulk Procurement",
      "Smart Reordering",
      "Purchase Management",
    ],
  },
  {
    title: "Powered By",
    items: [
      "Secure Cloud Infrastructure",
      "Smart Analytics",
      "Payment Integrations",
      "Delivery Partners",
      "Commerce APIs",
    ],
  },
];

const roadmap = [
  { phase: "Phase 1", description: "Digitize local retailers with powerful business management tools." },
  { phase: "Phase 2", description: "Enable customers to discover nearby products and stores." },
  { phase: "Phase 3", description: "Build a connected supplier network for smarter inventory sourcing." },
  { phase: "Phase 4", description: "Create a Local + Global retail discovery network." },
  { phase: "Phase 5", description: "Power the future of retail with AI, automation, and connected commerce." },
];

const whyMatters = [
  { icon: Building2, title: "For Retailers", description: "Grow beyond walk-in customers with digital visibility." },
  { icon: Users, title: "For Customers", description: "Discover products faster and shop locally with confidence." },
  { icon: Truck, title: "For Suppliers", description: "Connect directly with retailers and simplify wholesale commerce." },
  { icon: MapPin, title: "For Communities", description: "Support local businesses while strengthening the local economy." },
];

export default function AboutUsContent() {
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
              About Viztore
            </span>
            <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              Building the Future of <span className="text-viz-accent">Local Retail</span>.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Viztore is building a connected retail commerce platform that
              helps local retailers digitize their businesses, makes products
              instantly discoverable, and creates a better shopping experience
              for customers.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button variant="primary">Join Our Mission</Button>
              <Button variant="secondary-dark">Explore Platform</Button>
            </div>

            <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-3">
              {heroHighlights.map(({ icon: Icon, title, description }) => (
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

        {/* Our Story */}
        <section className="py-24 sm:py-28">
          <div className="container-viz">
            <SectionHeading eyebrow="Our Story" title="Our Story" />
            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {story.map((item, i) => (
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

        {/* Our Belief */}
        <section className="relative overflow-hidden bg-viz-navy py-24 sm:py-28">
          <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-viz-primary/25 blur-[120px]" />
          <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-viz-accent/15 blur-[100px]" />

          <div className="container-viz relative mx-auto max-w-2xl text-center">
            <span className="badge-eyebrow border-white/15 bg-white/5 text-viz-accent">
              Our Belief
            </span>
            <div className="mt-6 flex flex-col gap-3 text-lg leading-relaxed text-slate-200 sm:text-xl">
              <p>Local retail has never lacked products.</p>
              <p>It has lacked visibility.</p>
              <p>Customers shouldn&apos;t have to guess where products are available.</p>
              <p>Retailers shouldn&apos;t lose sales because they aren&apos;t digitally discoverable.</p>
              <p>Technology should make local commerce simpler, smarter, and more connected.</p>
              <p className="mt-4 text-2xl font-bold text-white">
                That&apos;s why Viztore exists.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-viz-bg-2 py-24 sm:py-28">
          <div className="container-viz">
            <SectionHeading eyebrow="Our Values" title="Our Values" />
            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((item, i) => (
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

        {/* Why We Started */}
        <section className="py-24 sm:py-28">
          <div className="container-viz mx-auto max-w-3xl text-center">
            <SectionHeading eyebrow="Why We Started" title="Why We Started" />
            <div className="mt-8 flex flex-col gap-5 text-base leading-relaxed text-viz-paragraph sm:text-lg">
              <p>
                Retail is changing, but millions of local stores are still
                disconnected from the digital economy.
              </p>
              <p>
                Large marketplaces have transformed online shopping, yet
                discovering products available in nearby stores remains
                surprisingly difficult.
              </p>
              <p>
                Viztore was created to bridge this gap — helping retailers
                become digitally visible while giving customers a smarter way
                to discover, compare, and shop locally.
              </p>
            </div>
          </div>
        </section>

        {/* What We're Building */}
        <section className="bg-viz-bg-2 py-24 sm:py-28">
          <div className="container-viz">
            <SectionHeading
              eyebrow="What We're Building"
              title="One Connected Retail Ecosystem"
              description="Viztore is more than a retail management platform. We're building the digital infrastructure that connects every part of local commerce."
            />
            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {buildingBlocks.map((block) => (
                <div
                  key={block.title}
                  className="rounded-3xl border border-viz-border bg-white p-6 shadow-sm"
                >
                  <h3 className="mb-4 text-base font-semibold text-viz-heading">
                    {block.title}
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {block.items.map((item) => (
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

        {/* The Road Ahead */}
        <section className="py-24 sm:py-28">
          <div className="container-viz">
            <SectionHeading eyebrow="The Road Ahead" title="The Road Ahead" />
            <div className="mt-16 flex flex-col gap-6">
              {roadmap.map((step, i) => (
                <div
                  key={step.phase}
                  className="flex flex-col items-start gap-4 rounded-2xl border border-viz-border bg-white p-6 shadow-sm sm:flex-row sm:items-center"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-viz-primary text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-viz-primary">
                      {step.phase}
                    </h3>
                    <p className="mt-1 text-sm text-viz-paragraph sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Viztore Matters */}
        <section className="bg-viz-bg-2 py-24 sm:py-28">
          <div className="container-viz">
            <SectionHeading eyebrow="Why Viztore Matters" title="Why Viztore Matters" />
            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {whyMatters.map((item, i) => (
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

        {/* We're Just Getting Started */}
        <section className="px-5 py-20 sm:px-8 lg:px-10">
          <div className="container-viz relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-viz-primary via-blue-700 to-viz-navy px-8 py-16 text-center sm:px-16 sm:py-20">
            <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-viz-accent/20 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                We&apos;re Just Getting Started
              </h2>
              <p className="mt-5 text-base text-blue-100 sm:text-lg">
                Viztore is at the beginning of an ambitious journey to
                transform how local retail works. We&apos;re continuously
                learning from retailers, improving our platform, and building
                technology that makes local commerce more connected,
                efficient, and accessible for everyone.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  variant="primary"
                  className="!bg-viz-accent !text-viz-navy !shadow-amber-400/30 hover:!bg-amber-300"
                >
                  Join Our Mission
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
