import { motion } from "framer-motion";
import GlowBackground from "./GlowBackground";
import PhoneMockup from "./PhoneMockup";
import FloatingStore from "./FloatingStore";
import RouteLines from "./RouteLines";
import DeliveryScooter from "./DeliveryScooter";

export default function HeroRight() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      className="relative mx-auto h-[360px] w-full overflow-hidden rounded-3xl sm:h-[440px] lg:h-[520px]"
    >
      {/* Layer 1: Background */}
      <GlowBackground />

      {/* Layer 2: SVG Routes */}
      <RouteLines />

      {/* Layer 3: Floating Stores */}
      <FloatingStore
        positionClasses="top-10 left-10"
        scale={0.8}
        opacity={0.8}
        blur="blur-[1px]"
        delay={0.1}
      />
      <FloatingStore
        positionClasses="bottom-20 right-16"
        scale={0.9}
        opacity={0.9}
        delay={0.3}
      />
      <FloatingStore
        positionClasses="top-1/4 right-1/4"
        scale={0.75}
        opacity={0.7}
        blur="blur-[1px]"
        delay={0.5}
      />

      {/* Layer 4: Phone Mockup */}
      <PhoneMockup />

      {/* Layer 5: Delivery Scooter */}
      <DeliveryScooter />
    </motion.div>
  );
}