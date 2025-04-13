
import React from "react";
import { Bell, CheckCircle, Clock, MapPin } from "lucide-react";

const DashboardPreview = () => {
  // Mock event data
  const events = [
    { id: 1, camera: "Camera 1", time: "14:32", isNew: true },
    { id: 2, camera: "Camera 2", time: "13:20", isNew: false },
    { id: 3, camera: "Camera 1", time: "12:05", isNew: false },
    { id: 4, camera: "Camera 3", time: "10:47", isNew: true },
  ];

  return (
    <section id="dashboard" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-slide-up">Event Dashboard Features</h2>
        
        <div className="max-w-5xl mx-auto glass-card p-6 rounded-2xl animate-slide-up" style={{ animationDelay: "0.2s" }}>
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm">Total Events</p>
                  <p className="text-2xl font-semibold mt-1">127</p>
                </div>
                <div className="p-2 bg-lavender/30 rounded-lg">
                  <Bell className="h-5 w-5 text-purple-600" />
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm">Today's Events</p>
                  <p className="text-2xl font-semibold mt-1">24</p>
                </div>
                <div className="p-2 bg-mint/30 rounded-lg">
                  <Clock className="h-5 w-5 text-teal-600" />
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm">Reviewed</p>
                  <p className="text-2xl font-semibold mt-1">102</p>
                </div>
                <div className="p-2 bg-green-100 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Locations Card */}
          <div className="bg-white p-4 rounded-xl shadow-sm mb-8">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 text-sm">Locations</p>
                <p className="text-2xl font-semibold mt-1">36</p>
              </div>
              <div className="p-2 bg-blue-100 rounded-lg">
                <MapPin className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </div>
          
          {/* Events Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="h-32 bg-black/10 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Event {event.id}</span>
                  </div>
                  {event.isNew && (
                    <div className="absolute top-2 right-2">
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">New</span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">{event.camera}</h4>
                    <span className="text-xs text-gray-500">{event.time}</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>Map view</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Map Preview */}
          <div className="h-[550px] bg-gray-200 rounded-xl overflow-hidden relative">
            <img 
              src="public/lovable-uploads/49799fd6-a5a2-4ac6-8cc4-028af81f91ff.png" 
              alt="Map view with event locations" 
              className="w-full h-full object-contain"
            />
            <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm">
              Event Locations
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
