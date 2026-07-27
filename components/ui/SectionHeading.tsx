"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | ReactNode;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}
    >
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2
        className={`section-heading ${light ? "text-white" : ""}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg ${
            light ? "text-slate-300" : "text-viz-paragraph"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
