"use client";

import { motion } from "framer-motion";
import { Eye, Boxes, TrendingUp, BarChart3, MapPin, Bike } from "lucide-react";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";
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
    pb-24
    pt-24
    sm:pt-70
    lg:pb-24
  "
>
  {/* Blue Glow */}
  <div className="pointer-events-none absolute -left-40 top-0 h-[34rem] w-[34rem] rounded-full bg-[#256BFF]/20 blur-[160px]" />

  {/* Secondary Blue Glow */}
  <div className="pointer-events-none absolute right-0 top-40 h-[30rem] w-[30rem] rounded-full bg-[#1958E0]/15 blur-[150px]" />

  {/* Yellow Accent Glow */}
  <div className="pointer-events-none absolute right-32 bottom-10 h-56 w-56 rounded-full bg-[#FACB0A]/10 blur-[120px]" />

  <div className="container-viz relative grid grid-cols-1 items-center gap-16   lg:grid-cols-2"> 
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          
        >
          <span className="badge-eyebrow border-white/15 bg-white/5 text-viz-accent">
            FOR RETAILERS
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            Digitize.
            <br />
            Manage.
            <br />
            <span className="text-viz-accent">Grow</span> Your Store.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-300 sm:text-lg">
            Viztore brings your entire store online in minutes — manage
            inventory, orders and billing, and get discovered by customers
            searching for what you sell nearby.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {features.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 backdrop-blur-sm"
              >
                <Icon size={16} className="shrink-0 text-viz-accent" />
                <span className="text-xs font-medium text-slate-200">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button variant="primary">Join Waitlist</Button>
            <Button variant="secondary-dark">Request Demo</Button>
          </div>
        </motion.div>

                {/* Right column - phone mockup */}
                  <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full h-full min-h-[440px] lg:w-full lg:min-h-[640px]  rounded-lg"
            >
              <Image
                src="/images/desktopImage.png"
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
