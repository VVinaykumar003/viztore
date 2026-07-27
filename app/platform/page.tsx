import type { Metadata } from "next";
import PlatformContent from "./PageContent";

export const metadata: Metadata = {
  title: "Platform — Viztore",
  description:
    "One platform. Complete retail commerce. Manage your business, discover customers, source inventory, and deliver better shopping experiences — all from one connected platform.",
};

export default function PlatformPage() {
  return <PlatformContent />;
}
