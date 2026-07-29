"use client";

import {
  Shirt,
  Cpu,
  Gem,
  Sparkles,
  Dumbbell,
  Gift,
  Sofa,
  Footprints, // Added for Footwear
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import CategoryCard from "@/components/ui/CategoryCard";

const categories = [
  { icon: Shirt, label: "Fashion" },
  { icon: Footprints, label: "Footwear" },
  { icon: Gem, label: "Jewellery" },
  { icon: Cpu, label: "Electronics" },
  { icon: Sofa, label: "Home & Living" },
  { icon: Sparkles, label: "Beauty & Personal Care" },
  { icon: Gift, label: "Gifts & Lifestyle" },
  { icon: Dumbbell, label: "Sports & Fitness" },
];

export default function RetailCategories() {
  return (
    <section className="bg-viz-bg-2 py-24 sm:py-28">
      <div className="container-viz">
        <SectionHeading
          eyebrow="Every Category"
          title="Built for every kind of local store"
          description="Whatever you sell, Viztore adapts to your category with the right tools and storefront layout."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.label} icon={cat.icon} label={cat.label} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
