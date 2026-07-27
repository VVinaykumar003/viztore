import type { Metadata } from "next";
import ForRetailersContent from "./PageContent";

export const metadata: Metadata = {
  title: "For Retailers — Viztore",
  description:
    "Digitize, manage, and grow your store with Viztore. Manage products, inventory, billing, customers, and orders from one platform while getting discovered by nearby shoppers.",
};

export default function ForRetailersPage() {
  return <ForRetailersContent />;
}
