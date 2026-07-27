"use client";

import { motion } from "framer-motion";
import {
  Package,
  Boxes,
  Receipt,
  ClipboardList,
  FileBarChart,
  BarChart3,
  Truck,
  Handshake,
  Network,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const featureList = [
  { icon: Package, label: "Product Management" },
  { icon: Boxes, label: "Inventory" },
  { icon: Receipt, label: "Billing" },
  { icon: ClipboardList, label: "Orders" },
  { icon: FileBarChart, label: "Reports" },
  { icon: BarChart3, label: "Analytics" },
];

const supplierCards = [
  { icon: Truck, title: "Fast Fulfillment", description: "Connect with local logistics partners for quick delivery." },
  { icon: Handshake, title: "Verified Suppliers", description: "Source stock from a trusted supplier network." },
  { icon: Network, title: "Unified Network", description: "One dashboard to manage every supplier relationship." },
];

export default function Features() {
  return (
    <section id="features" className="py-24 sm:py-28">
      <div className="container-viz">
        <SectionHeading
          eyebrow="For Retailers"
          title="Everything your store needs, in one place"
          description="Viztore brings the essential tools of running a store into a single, simple dashboard."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.2fr_0.9fr]">
          {/* Left - feature list */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-3"
          >
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
          </motion.div>

          {/* Center - dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl border border-viz-border bg-viz-navy p-6 shadow-2xl"
          >
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
          </motion.div>

          {/* Right - supplier network */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            {supplierCards.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-viz-border bg-white p-5 shadow-sm"
              >
                <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-viz-accent/15 text-viz-accent">
                  <Icon size={18} />
                </span>
                <h4 className="mb-1 text-sm font-semibold text-viz-heading">
                  {title}
                </h4>
                <p className="text-xs leading-relaxed text-viz-paragraph">
                  {description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
