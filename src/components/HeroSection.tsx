
import React from "react";
import HeroAnimation from "./HeroAnimation";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 px-6">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-30" />

      {/* Hero content */}
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
            Real-time Violence<br /> 
            <span className="highlight-text">Detection Solution</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Powered by computer vision and geospatial intelligence. Detect violent actions from live video feed, report events instantly, and visualize them on a centralized dashboard.
          </p>

          <div className="relative h-80 w-full max-w-3xl mt-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <HeroAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
