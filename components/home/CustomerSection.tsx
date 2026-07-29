"use client";

import { motion } from "framer-motion";
import { MapPin, Bike, Search, Package, Scale, ShoppingBag, Zap} from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import { useState } from "react";

const customerFeatures = [
  {
    icon: Search,
    title: "Search Products, Not Stores",
    description:
      "Find exactly what you need without visiting multiple shops.",
  },
  {
    icon: MapPin,
    title: "Discover Nearby Stores",
    description:
      "Instantly see which local stores have the product you're looking for.",
  },
  {
    icon: Package,
    title: "Check Real-Time Availability",
    description:
      "Know what's in stock before you leave home.",
  },
  {
    icon: Scale,
    title: "Compare Nearby Options",
    description:
      "Compare availability, price, distance, and convenience.",
  },
  {
    icon: ShoppingBag,
    title: "Reserve, Pickup or Delivery",
    description:
      "Reserve products, pick them up, or choose local delivery.",
  },
  {
    icon: Zap,
    title: "Faster Local Shopping",
    description:
      "Get products from nearby retailers without waiting days for shipping.",
  },
];

// Helper component for a feature card
function FeatureCard({ icon: Icon, title, description }: typeof customerFeatures[0]) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div // Wrap GlassCard with motion.div to apply hover animations
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ y: 0 }}
      whileHover={{ y: -5 }} // Slight lift on hover
      transition={{ duration: 0.2 }}
      className="relative cursor-pointer" // Add relative and cursor-pointer for better UX
    >
      <GlassCard className="flex flex-col items-start gap-3 !p-6 h-full"> {/* Ensure GlassCard takes full height */}
        <div className="flex items-center gap-3">
          <Icon size={24} className="text-viz-accent" />
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
        <motion.p
          className={`text-sm text-slate-300 mt-2 ${isHovered ? 'bg-viz-navy/50 rounded-md p-2' : ''}`} // Add background and padding on hover
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isHovered ? "auto" : 0, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ overflow: 'hidden' }} // Hide overflow during height animation
        >
          {description}
        </motion.p>
      </GlassCard>
    </motion.div>
  );
}

export default function CustomerSection() {
  return (
    <section
      id="customer-app"
      className="relative overflow-hidden bg-viz-navy py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-viz-primary/25 blur-[120px]" />
      <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-viz-accent/15 blur-[100px]" />

      <div className="container-viz relative grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge-eyebrow border-white/15 bg-white/5 text-viz-accent">
            FOR CUSTOMERS
          </span>
          <h2 className="mt-6 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            Discover Local.
            <br />
            Buy Nearby.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-slate-300">
            Find products from real stores around you, compare and order in a
            few taps, and support your local retailers while getting what you
            need — fast.
          </p>

          {/* New section for features */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {customerFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto h-[420px] w-full max-w-sm lg:h-[500px]"
        >
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 h-[400px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-[2.5rem] border-4 border-white/10 bg-gradient-to-b from-slate-900 to-viz-navy p-2 shadow-2xl lg:h-[460px] lg:w-[230px]"
          >
            <div className="h-full w-full rounded-[2rem] bg-gradient-to-b from-viz-accent/15 to-viz-navy p-4">
              <div className="mb-3 h-2 w-14 rounded-full bg-white/20" />
              <div className="mb-3 h-20 rounded-2xl bg-white/10" />
              <div className="grid grid-cols-2 gap-2">
                <div className="h-16 rounded-xl bg-white/10" />
                <div className="h-16 rounded-xl bg-white/10" />
                <div className="h-16 rounded-xl bg-white/10" />
                <div className="h-16 rounded-xl bg-viz-accent/20" />
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-2 top-6"
          >
            <GlassCard className="flex items-center gap-2 !p-3">
              <MapPin size={16} className="text-viz-accent" />
              <span className="text-xs font-medium text-white">
                Store 400m away
              </span>
            </GlassCard>
          </motion.div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            className="absolute -right-2 bottom-10"
          >
            <GlassCard className="flex items-center gap-2 !p-3">
              <Bike size={16} className="text-viz-accent" />
              <span className="text-xs font-medium text-white">
                Arriving in 18 min
              </span>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
