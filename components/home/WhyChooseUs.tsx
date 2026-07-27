"use client";

import {
  ShieldCheck,
  Zap,
  MapPinned,
  Wallet,
  HeadphonesIcon,
  TrendingUp,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/ui/FeatureCard";

const reasons = [
  {
    icon: Zap,
    title: "Fast Setup",
    description: "Get your store online in under 15 minutes, no coding needed.",
  },
  {
    icon: MapPinned,
    title: "Hyperlocal Discovery",
    description: "Show up exactly when nearby customers are looking for you.",
  },
  {
    icon: Wallet,
    title: "Simple Billing",
    description: "Invoicing, payments and reports handled in one clean flow.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    description: "Your store data is encrypted and backed up around the clock.",
  },
  {
    icon: TrendingUp,
    title: "Growth Insights",
    description: "Understand what sells and make confident restocking decisions.",
  },
  {
    icon: HeadphonesIcon,
    title: "Real Support",
    description: "A real team ready to help you set up and grow your store.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 sm:py-28">
      <div className="container-viz">
        <SectionHeading
          eyebrow="Why Viztore"
          title="Why local retailers choose Viztore"
          description="A platform built specifically for the way local stores actually work."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
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
  );
}
