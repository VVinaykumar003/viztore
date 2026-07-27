import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import TrustedBrands from "@/components/home/TrustedBrands";
import ProblemSection from "@/components/home/ProblemSection";
import HowItWorks from "@/components/home/HowItWorks";
import Features from "@/components/home/Features";
import RetailCategories from "@/components/home/RetailCategories";
import CustomerSection from "@/components/home/CustomerSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBrands />
        <ProblemSection />
        <HowItWorks />
        <Features />
        <RetailCategories />
        <CustomerSection />
        <WhyChooseUs />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
