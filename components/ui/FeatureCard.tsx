"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  index = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group relative rounded-3xl border border-viz-border bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-2xl hover:shadow-blue-600/10"
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-viz-primary/0 to-viz-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:from-viz-primary/[0.04] group-hover:to-viz-accent/[0.06]" />
      <div className="relative z-10 mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-viz-primary/10 text-viz-primary transition-colors duration-300 group-hover:bg-viz-primary group-hover:text-white">
        <Icon size={22} strokeWidth={2} />
      </div>
      <h3 className="relative z-10 mb-2 text-lg font-semibold text-viz-heading">
        {title}
      </h3>
      <p className="relative z-10 text-sm leading-relaxed text-viz-paragraph">
        {description}
      </p>
    </motion.div>
  );
}
