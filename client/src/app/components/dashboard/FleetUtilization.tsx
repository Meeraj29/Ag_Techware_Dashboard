"use client";
import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import { Ship, Truck } from 'lucide-react';

export default function FleetUtilization() {
  const fleet = useAppSelector((state) => state.dashboard.fleetUtilization);

  return (
    <div className="bg-white rounded-xl p-5">
      <h2 className="text-xl font-semibold text-black mb-6">Fleet Utilization</h2>

      <div className="flex items-center justify-between">
        <div className="space-y-6 flex-1">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white">
              <Ship size={20} />
            </div>
            <div>
              <div className="text-sm text-[#000000CC] font-medium">Ocean</div>
              <div className="text-base font-medium text-black">{fleet.ocean}% Capacity</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#D97706] flex items-center justify-center text-white">
              <Truck size={20} />
            </div>
            <div>
              <div className="text-sm text-[#000000CC] font-medium">Ground</div>
              <div className="text-base font-medium text-black">{fleet.ground}% Capacity</div>
            </div>
          </div>
        </div>

        {/* Diamond progress overall metric */}
        <div className="w-24 h-24 relative mr-2 flex items-center justify-center">
          <svg className="w-full h-full transform rotate-45" viewBox="0 0 100 100">
            {/* Background diamond */}
            <rect
              x="16"
              y="16"
              width="68"
              height="68"
              rx="6"
              stroke="#E1E1E1"
              strokeWidth="4"
              fill="transparent"
            />
            {/* Progress diamond */}
            <rect
              x="16"
              y="16"
              width="68"
              height="68"
              rx="6"
              pathLength="100"
              stroke="#044890"
              strokeWidth="4"
              fill="transparent"
              strokeDasharray="100"
              strokeDashoffset={100 - fleet.overall}
              strokeLinecap="butt"
              className="transition-all duration-1000 ease-in-out"
            />
          </svg>
          <span className="text-base font-medium text-black absolute z-20">{fleet.overall}%</span>
        </div>
      </div>
    </div>
  );
}
