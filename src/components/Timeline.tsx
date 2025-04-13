
import React from "react";
import { CalendarDays } from "lucide-react";

const TimelineItem = ({ 
  date, 
  title, 
  description, 
  delay = 0 
}: { 
  date: string; 
  title: string; 
  description: string;
  delay?: number;
}) => {
  return (
    <div className="timeline-item animate-slide-right" style={{ animationDelay: `${delay}s` }}>
      <div className="mb-2 flex items-center">
        <CalendarDays className="h-4 w-4 mr-2 text-gray-500" />
        <span className="text-sm text-gray-500">{date}</span>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="h-48 w-full bg-black/5 rounded-lg flex items-center justify-center">
        <span className="text-gray-400">Image placeholder</span>
      </div>
    </div>
  );
};

const Timeline = () => {
  const timelineItems = [
    {
      date: "November 2024",
      title: "First Attempt",
      description: "Initial prototype focusing on basic motion detection with limited accuracy and high false positive rate."
    },
    {
      date: "May 2025",
      title: "Second Attempt",
      description: "Improved algorithm with MediaPipe integration for better human pose detection and initial pattern recognition."
    },
    {
      date: "April 2025",
      title: "Final Implementation",
      description: "Fully-featured system with YOLOv5 integration, geospatial intelligence, and centralized dashboard."
    }
  ];

  return (
    <section id="timeline" className="py-20 px-6 bg-gradient-subtle">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 animate-slide-up">Project Timeline</h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          The evolution of our violence detection system through multiple iterations
        </p>
        
        <div className="max-w-2xl mx-auto">
          {timelineItems.map((item, index) => (
            <TimelineItem 
              key={index} 
              date={item.date} 
              title={item.title} 
              description={item.description} 
              delay={0.1 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
