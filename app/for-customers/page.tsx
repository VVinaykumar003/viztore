import type { Metadata } from "next";
import ForCustomersContent from "./PageContent";

export const metadata: Metadata = {
  title: "For Customers — Viztore",
  description:
    "Discover local. Shop smarter. Find products nearby, compare availability, reserve instantly, and choose pickup or local delivery — all from one app.",
};

export default function ForCustomersPage() {
  return <ForCustomersContent />;
}
