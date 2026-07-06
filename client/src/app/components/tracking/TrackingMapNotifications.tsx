"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Image from "next/image";
import { AlertCircle, Clock, Maximize2 } from "lucide-react";
import trackingMapImg from "../../assets/trackingmap.png"; // Assuming it exists here

export default function TrackingMapNotifications() {
  const notifications = useSelector((state: RootState) => state.tracking.notifications);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      {/* Map Section */}
      <div className="lg:col-span-2 relative h-64 sm:h-80 lg:h-[370px] rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex">
        <Image src={trackingMapImg} alt="World Map" fill className="object-cover object-center" />
        
        {/* Live Telemetry Card */}
        <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 sm:p-4 shadow-md z-10 w-48">
          <div className="text-[10px] font-bold text-[#3525CD] uppercase mb-1">Live Telemetry</div>
          <div className="text-sm font-bold text-gray-900 mb-1">SHP-9021</div>
          <div className="text-[10px] font-semibold text-gray-500">Lat: 34.0522, Lng: 118.2437 W</div>
        </div>

        <div className="absolute top-4 right-4 p-2 bg-black/40 rounded backdrop-blur-sm text-white hover:bg-black/60 transition-colors cursor-pointer z-10">
          <Maximize2 className="w-4 h-4" />
        </div>
      </div>

      {/* Notifications Section */}
      <div className="bg-white rounded-2xl p-4 sm:p-4 shadow-sm border border-gray-100 flex flex-col h-full lg:h-[370px]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[20px] sm:text-[18px] font-semibold text-[#000000]">Urgent Notifications</h2>
          <span className="text-xs text-[#000000B2] font-regular">Updated 2m ago</span>
        </div>
        
        <div className="space-y-4 overflow-y-auto flex-1 pr-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {notifications.map((notif) => (
            <div key={notif.id} className={`p-4 rounded-xl flex items-start gap-3 ${
              notif.severity === 'error' ? 'bg-[#FFE7E7]' : 'bg-[#FFFBEB]'
            }`}>
              <div className={`shrink-0 mt-0.5 ${notif.severity === 'error' ? 'text-[#7C090D]' : 'text-[#78350F]'}`}>
                {notif.type === 'Customers Hold' ? (
                  <Clock className="w-5 h-5" />
                ) : (
                  <AlertCircle className="w-5 h-5" />
                )}
              </div>
              <div>
                <div className={`text-sm font-medium mb-1 ${notif.severity === 'error' ? 'text-[#7C090D]' : 'text-[#78350F]'}`}>
                  {notif.type}
                </div>
                <div className={`text-xs font-regular ${notif.severity === 'error' ? 'text-[#CC191F]' : 'text-[#B45309]'}`}>
                  {notif.message}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}
