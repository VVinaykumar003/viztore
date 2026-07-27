import { motion } from "framer-motion";
import { Globe2, Clock, TrendingUp, PieChart, ArrowRight, Calendar } from "lucide-react";
import Button from "@/components/ui/Button";

const features = [
  {
    icon: Globe2,
    title: "Increase Visibility",
    description: "Get discovered by nearby customers searching for your products.",
  },
  {
    icon: Clock,
    title: "Save Time",
    description: "Simplify inventory, billing, and daily store operations.",
  },
  {
    icon: TrendingUp,
    title: "Boost Sales",
    description: "Reach more local customers and increase repeat purchases.",
  },
  {
    icon: PieChart,
    title: "Business Insights",
    description: "Track performance with real-time reports and analytics.",
  },
];

export default function HeroLeft() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative z-10" // Ensure content is above the diagonal background
    >
      {/* Diagonal background shape */}
      <div className="absolute inset-y-0 left-0 w-[100%] bg-white [clip-path:polygon(0_0,90%_0,100%_100%,0_100%)] lg:w-[calc(100%+100px)]" />

      <div className="relative pr-10"> {/* Add padding to prevent content from touching the clip-path edge */}
        <span className="inline-flex items-center rounded-full border border-viz-primary/20 bg-viz-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-viz-primary">
          FOR RETAILERS
        </span>

        <h1 className="mt-5 text-3xl font-extrabold leading-[1.15] text-viz-navy sm:text-4xl lg:text-[2.75rem]">
          Digitize. Manage.
          <br />
          <span className="text-viz-primary">Grow</span> Your Store.
        </h1>

        <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-500 sm:text-base">
          Viztore helps you manage products, inventory, billing, customers,
          and orders from one platform while making your store discoverable
          to nearby shoppers.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col items-start gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-viz-primary/10">
                <Icon size={18} className="text-viz-primary" />
              </span>
              <p className="text-sm font-bold text-viz-navy">{title}</p>
              <p className="text-xs leading-relaxed text-slate-500">
                {description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button variant="primary" className="inline-flex items-center justify-center gap-2">
            Join Waitlist
            <ArrowRight size={16} />
          </Button>
          <Button variant="secondary-light" className="inline-flex items-center justify-center gap-2">
            Request Demo
            <Calendar size={16} />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}