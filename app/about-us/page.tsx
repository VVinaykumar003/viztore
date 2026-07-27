import type { Metadata } from "next";
import AboutUsContent from "./PageContent";

export const metadata: Metadata = {
  title: "About Us — Viztore",
  description:
    "Viztore is building the future of local retail — a connected retail commerce platform that helps retailers digitize their businesses and creates a better shopping experience for customers.",
};

export default function AboutUsPage() {
  return <AboutUsContent />;
}
