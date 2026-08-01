"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle2 } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const retailerProblems = [
  "Invisible to Nearby Customers: Customers don't know your store has the products they need.",
  "Inventory Remains Undiscovered: Products on your shelves never appear in online searches.",
  "Losing Sales to E-commerce: Customers choose online platforms because local availability isn't visible.",
  "Dependent on Walk-in Customers: Growth is limited without digital discovery and local reach.",
  "No Instant Buying Experience: No reservation, pickup, or same-day local delivery options.",
  "Disconnected Retail Operations: Managing inventory, orders, billing, and customers across different tools slows your business.",
];

const customerProblems = [
  "Don't Know Which Store Has the Product: Finding nearby product availability is still difficult.",
  "No Real-Time Inventory Visibility: Customers can't check stock before leaving home.",
  "Wasting Time Visiting Multiple Stores: Shopping often becomes trial and error.",
  "Waiting for Online Deliveries: Products available nearby are often ordered online instead.",
  "No Easy Reserve or Pickup Option: Customers can't secure products before visiting a store.",
  "Fragmented Local Shopping Experience: Every store works independently with no unified discovery platform.",
];

const insight = {
  eyebrow: "Our Insight",
  title: "The Missing Piece: Digital Discoverability",
  paragraphs: [
    "Every city already has the products people need.",
    " Local retail has inventory. Customers have demand.",
    "The missing piece is digital discoverability.",
    "Retailers deserve the same digital visibility as large e-commerce platforms.",
    "Viztore connects local inventory with nearby customers through one unified commerce network.",
     "Viztore bridges that gap by making local retail searchable, discoverable, and instantly accessible.",
  ],
};

export default function ProblemSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-viz">

      <SectionHeading
        eyebrow="The Problem"
        title="The Challenges Facing Local Retailers and Customers"
        description="Local retailers face challenges in reaching customers, while customers struggle to find products nearby. Viztore bridges this gap by making local retail searchable, discoverable, and instantly accessible."
      />
      <div className="container-viz grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8 mt-10"> {/* Increased margin-top from mt-5 to mt-10 for more separation from the heading. */}
        {/* Left - Retailer Problems */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-viz-border bg-viz-bg-2 p-8"
        >
          <h3 className="mb-6 text-xl font-extrabold text-viz-heading">
            For Retailers: The Problem
          </h3>
          <ul className="space-y-5">
            {retailerProblems.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <XCircle size={18} className="mt-0.5 shrink-0 text-red-400" />
                <span className="text-sm text-viz-paragraph">{p}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Center - insight */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }} 
          className="flex flex-col items-start justify-center rounded-3xl bg-viz-navy p-8 text-left"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-viz-accent">
            {insight.eyebrow}
          </p>
          <h3 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            {insight.title}
          </h3>
          <ul className="mt-6 space-y-5 text-sm leading-relaxed text-slate-300"> {/* Increased margin-top from mt-4 to mt-6 for better spacing from the insight title. */}
            {insight.paragraphs.map((paragraph, index) => (
              <li key={index} className="flex items-start gap-3">
                {/* Using CheckCircle2 to visually represent positive insights, similar to XCircle for problems */}
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-viz-accent" />
                <span>{paragraph}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right - Customer Problems */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-3xl border border-viz-border bg-viz-bg-2 p-8"
        >
          <h3 className="mb-6 text-xl font-extrabold text-viz-heading">
            For Customers: The Problem
          </h3>
          <ul className="space-y-5">
            {customerProblems.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <XCircle size={18} className="mt-0.5 shrink-0 text-red-400" />
                <span className="text-sm text-viz-paragraph">{p}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      </div>
    </section>
  );
}
