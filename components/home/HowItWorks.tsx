"use client";

import { Store, PackagePlus, ScanLine, Rocket, LineChart, MapPinned } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import TimelineCard from "@/components/ui/TimelineCard";

const steps = [
  {
    icon: Store,
    title: "Digitize Your Store",
    description: "Set up your digital storefront and bring your business online.",
  },
  {
    icon: PackagePlus,
    title: "Manage Inventory & Billing",
    description: "Streamline operations with easy inventory management and integrated billing.",
  },
  {
    icon: ScanLine,
    title: "Publish Real-Time Inventory",
    description: "Make your products discoverable to nearby customers with live availability.",
  },
  {
    icon: MapPinned,
    title: "Reach Nearby Customers",
    description: "Connect with local shoppers actively searching for your products.",
  },
  {
    icon: Rocket,
    title: "Manage Orders & Delivery",
    description: "Handle online orders, pickups, and local deliveries efficiently.",
  },
  {
    icon: LineChart,
    title: "Grow Your Business",
    description: "Leverage insights and tools to accelerate your store's growth.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-viz-bg-2 py-24 sm:py-28">
      <div className="container-viz">
        <SectionHeading
          eyebrow="Our Platform"
          title="How Viztore Empowers Local Retail"
          description="Viztore connects retailers with customers, streamlining operations and boosting local discovery."
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
  );
}
