"use client";

import { Store, PackagePlus, ScanLine, Rocket, LineChart } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import TimelineCard from "@/components/ui/TimelineCard";

const steps = [
  {
    icon: Store,
    title: "Create Your Store",
    description: "Set up your digital storefront in minutes, no tech skills needed.",
  },
  {
    icon: PackagePlus,
    title: "Add Products",
    description: "Upload your catalog and organize inventory with ease.",
  },
  {
    icon: ScanLine,
    title: "Get Discovered",
    description: "Show up when nearby customers search for what you sell.",
  },
  {
    icon: Rocket,
    title: "Receive Orders",
    description: "Accept orders online and manage billing in one place.",
  },
  {
    icon: LineChart,
    title: "Track & Grow",
    description: "Use analytics to understand sales and grow your business.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-viz-bg-2 py-24 sm:py-28">
      <div className="container-viz">
        <SectionHeading
          eyebrow="Platform"
          title="How Viztore Works"
          description="From setup to growth, Viztore guides your store through every step of going digital."
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
