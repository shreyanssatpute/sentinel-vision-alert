
import React from "react";
import { Camera, Brain, Database } from "lucide-react";
import SystemArchitecture from "./SystemArchitecture";

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  delay = 0 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
  delay?: number;
}) => {
  return (
    <div 
      className="glass-card p-6 md:p-8 animate-slide-up" 
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="bg-gradient-mint inline-flex p-3 rounded-lg mb-4">
        <Icon className="h-6 w-6 text-dark-gray" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const HowItWorks = () => {
  const features = [
    {
      icon: Camera,
      title: "Detection",
      description: "Process video frames to detect violent actions using OpenCV, MediaPipe, and YOLOv5."
    },
    {
      icon: Brain,
      title: "Processing",
      description: "Extract human keypoints and detect violent patterns with advanced AI algorithms."
    },
    {
      icon: Database,
      title: "Reporting",
      description: "Store events with timestamps, camera name, image URL, location, and status in JSONBin."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 animate-slide-up">How It Works</h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          From detection to visualization, explore the end-to-end process of our violence detection system
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
              delay={0.1 + index * 0.1}
            />
          ))}
        </div>
        
        <SystemArchitecture />
      </div>
    </section>
  );
};

export default HowItWorks;
