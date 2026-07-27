"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle2 } from "lucide-react";

const problems = [
  "Invisible to customers searching online",
  "No easy way to manage stock or orders",
  "Losing footfall to large e-commerce apps",
];

const painPoints = [
  "Hours lost on manual billing and ledgers",
  "No insight into what's actually selling",
  "Customers can't find them on a map",
];

export default function ProblemSection() {
  return (
    <section className="py-24 sm:py-28">
      <div className="container-viz grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8">
        {/* Left - problems */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-viz-border bg-viz-bg-2 p-8"
        >
          <h3 className="mb-6 text-lg font-semibold text-viz-heading">
            The Problem
          </h3>
          <ul className="space-y-4">
            {problems.map((p) => (
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
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col items-center justify-center rounded-3xl bg-viz-navy p-8 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-viz-accent">
            The Insight
          </p>
          <h3 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Local <span className="text-viz-accent">+</span> Digital
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            The retailers who win aren&apos;t choosing between the two — they&apos;re
            combining the trust of a local shop with the reach of a digital
            storefront.
          </p>
        </motion.div>

        {/* Right - pain points */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-3xl border border-viz-border bg-viz-bg-2 p-8"
        >
          <h3 className="mb-6 text-lg font-semibold text-viz-heading">
            Retailer Pain Points
          </h3>
          <ul className="space-y-4">
            {painPoints.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-viz-primary"
                />
                <span className="text-sm text-viz-paragraph">{p}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
