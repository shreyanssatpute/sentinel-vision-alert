
import React from "react";
import { 
  Code, 
  Database, 
  Globe, 
  LayoutDashboard, 
  Map as MapIcon, 
  MonitorSmartphone, 
  Server, 
  Video
} from "lucide-react";

const TechItem = ({ 
  icon: Icon, 
  title, 
  items, 
  delay = 0 
}: { 
  icon: React.ElementType; 
  title: string; 
  items: string[];
  delay?: number;
}) => {
  return (
    <div 
      className="glass-card p-6 animate-slide-up" 
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-center mb-4">
        <div className="bg-gradient-lavender p-2 rounded-lg mr-3">
          <Icon className="h-5 w-5 text-dark-gray" />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-gray-600 flex items-center">
            <span className="h-1.5 w-1.5 bg-mint rounded-full mr-2"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const TechStackSection = () => {
  const techStack = [
    {
      icon: Video,
      title: "Live Video",
      items: ["OpenCV", "Flask video stream"]
    },
    {
      icon: Code,
      title: "Detection",
      items: ["MediaPipe", "YOLOv5", "NumPy"]
    },
    {
      icon: Server,
      title: "Backend",
      items: ["Python", "Flask"]
    },
    {
      icon: Globe,
      title: "Event Transport",
      items: ["Node.js", "JSONBin API"]
    },
    {
      icon: MonitorSmartphone,
      title: "Frontend UI",
      items: ["HTML", "CSS", "JavaScript"]
    },
    {
      icon: Database,
      title: "Storage",
      items: ["JSONBin.io", "NoSQL event storage"]
    },
    {
      icon: MapIcon,
      title: "Mapping",
      items: ["Leaflet.js", "Geolocation API"]
    },
    {
      icon: LayoutDashboard,
      title: "Dashboard",
      items: ["Interactive visualizations", "Real-time updates"]
    }
  ];

  return (
    <section id="tech-stack" className="py-20 px-6 bg-gradient-subtle">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 animate-slide-up">Tech Stack</h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          The powerful technologies behind our violence detection system
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((tech, index) => (
            <TechItem 
              key={index} 
              icon={tech.icon} 
              title={tech.title} 
              items={tech.items} 
              delay={0.1 + index * 0.05}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
