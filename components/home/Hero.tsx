"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Eye, Boxes, TrendingUp, BarChart3 } from "lucide-react";
import Image from "next/image";

const features = [
  { icon: Eye, label: "Visibility" },
  { icon: Boxes, label: "Inventory" },
  { icon: TrendingUp, label: "Sales" },
  { icon: BarChart3, label: "Analytics" },
];

export default function Hero({ onHeroHeightChange }) {
  return (
<section
  id="home"
  className="
    relative
    overflow-hidden
    bg-gradient-to-br
    from-[#020A2A]
    via-[#061755]
    to-[#0A225F] 
    mb-0
  " 
>
  <div className="relative overflow-hidden h-[calc(100vh-6.5rem )]"> {/* Use calc() for remaining viewport height after Navbar */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
      className="relative w-full h-[105vh] overflow-hidden" /* Make motion.div fill its parent's height */
    >
      <Image
        src="/images/w_desktop_image.png"
        alt="Viztore Dashboard"
        priority /* Use fill to make image cover its parent, and remove fixed height/width */
        fill
        className="object-fill object-top" /* Changed to object-contain to scale down and show full image, removed translate-y */
      />
    </motion.div>
  </div>
</section>
  );
}
