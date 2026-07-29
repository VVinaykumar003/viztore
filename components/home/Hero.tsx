"use client";

import { motion } from "framer-motion";
import { Eye, Boxes, TrendingUp, BarChart3 } from "lucide-react";
import Image from "next/image";

const features = [
  { icon: Eye, label: "Visibility" },
  { icon: Boxes, label: "Inventory" },
  { icon: TrendingUp, label: "Sales" },
  { icon: BarChart3, label: "Analytics" },
];

export default function Hero() {
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
    pt-24
    sm:pt-70
  "
>
  {/* Blue Glow */}
  <div className="pointer-events-none absolute -left-40 top-0 h-[34rem] w-[34rem] rounded-full bg-[#256BFF]/20 blur-[160px]" />

  {/* Secondary Blue Glow */}
  <div className="pointer-events-none absolute right-0 top-40 h-[30rem] w-[30rem] rounded-full bg-[#1958E0]/15 blur-[150px]" />

  {/* Yellow Accent Glow */}
  <div className="pointer-events-none absolute right-32 bottom-10 h-56 w-56 rounded-full bg-[#FACB0A]/10 blur-[120px]" />

  <div className="relative grid grid-cols-1 items-center gap-16 lg:grid-cols-1"> 
    
                {/* Right column - phone mockup */}
                  <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full h-full min-h-[440px] lg:min-h-[640px] rounded-lg"
            >
              <Image
                src="/images/w_desktop_image.png"
                alt="Viztore Dashboard"
                fill
                priority
                className="object-fill object-center rounded-md"
              />
            </motion.div>
          </div>
    </section>
  );
}
