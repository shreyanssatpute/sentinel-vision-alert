
import React from "react";
import { Brain, Camera, Clock, Database, Map } from "lucide-react";

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
      title: "Live Camera Monitoring",
      description: "Process video frames to detect violent actions, capture snapshots, and fetch user's location."
    },
    {
      icon: Brain,
      title: "Violence Detection Logic",
      description: "Implemented with OpenCV, MediaPipe, and YOLOv5 to extract human keypoints and detect violent patterns."
    },
    {
      icon: Clock,
      title: "Event Cooldown Logic",
      description: "Rate-limits automatic events to avoid duplicate reporting of the same incident."
    },
    {
      icon: Database,
      title: "Frontend Snapshot Capture",
      description: "Takes canvas snapshots from video feed and encodes them as part of the event data."
    },
    {
      icon: Map,
      title: "JSONBin as Event Store",
      description: "Stores events with timestamps, camera name, image URL, location, and status."
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 animate-slide-up">How It Works</h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          From detection to visualization, explore the end-to-end process of our violence detection system
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div>
    </section>
  );
};

export default HowItWorks;
