
import React from "react";
import { AlertTriangle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 px-6">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-30" />

      {/* Hero content */}
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center mb-6 animate-fade-in">
            <AlertTriangle className="h-8 w-8 mr-2 text-red-500" />
            <h2 className="text-xl font-medium text-red-500">Violence Detection & Reporting System</h2>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
            Real-time Violence<br /> 
            <span className="highlight-text">Detection Solution</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Powered by computer vision and geospatial intelligence. Detect violent actions from live video feed, report events instantly, and visualize them on a centralized dashboard.
          </p>

          <div className="relative h-64 w-full max-w-3xl mt-8 bg-black/5 rounded-xl overflow-hidden animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-lg text-gray-500">Camera Feed Placeholder</div>
            </div>
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse"></div>
              <div className="text-xs text-white bg-black/50 px-2 py-1 rounded-full">LIVE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
