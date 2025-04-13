
import React from "react";
import { Bell, CheckCircle, Clock, Filter, MapPin, Search } from "lucide-react";

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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 animate-slide-up">Event Dashboard</h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          A real-time dashboard for visualizing and managing detected events
        </p>
        
        <div className="max-w-5xl mx-auto glass-card p-6 rounded-2xl animate-slide-up" style={{ animationDelay: "0.2s" }}>
          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 pb-6 border-b">
            <div>
              <h3 className="text-xl font-semibold">Event Monitor</h3>
              <p className="text-gray-500 text-sm">Showing latest events</p>
            </div>
            
            <div className="flex items-center mt-4 md:mt-0 space-x-4">
              <div className="flex items-center bg-white rounded-lg px-3 py-2 shadow-sm">
                <Search className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-gray-400 text-sm">Search events...</span>
              </div>
              
              <button className="flex items-center bg-white rounded-lg px-3 py-2 shadow-sm">
                <Filter className="h-4 w-4 text-gray-600 mr-2" />
                <span className="text-gray-600 text-sm">Filter</span>
              </button>
            </div>
          </div>
          
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
          <div className="h-64 bg-gray-200 rounded-xl overflow-hidden relative">
            <img 
              src="public/lovable-uploads/591f6831-7e64-4282-a621-11e20d171c4f.png" 
              alt="Map view with event locations" 
              className="w-full h-full object-cover"
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
