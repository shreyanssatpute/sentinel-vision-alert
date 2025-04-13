
import React from "react";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Timeline from "@/components/Timeline";
import DashboardPreview from "@/components/DashboardPreview";
import TechStackSection from "@/components/TechStackSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowItWorks />
      <Timeline />
      <DashboardPreview />
      <TechStackSection />
      <Footer />
    </div>
  );
};

export default Index;
