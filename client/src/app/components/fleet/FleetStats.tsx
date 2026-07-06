"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Truck, Activity, Wrench } from "lucide-react";

export default function FleetStats() {
  const stats = useSelector((state: RootState) => state.fleet.stats);

  const cards = [
    {
      title: "TOTAL VEHICLES",
      value: stats.totalVehicles,
      icon: Truck,
      badge: "+12%",
      badgeClass: "bg-emerald-50 text-emerald-600 border border-emerald-100",
    },
    {
      title: "ACTIVE TRIPS",
      value: stats.activeTrips,
      icon: Activity,
      badge: "In Motion",
      badgeClass: "bg-emerald-50 text-emerald-600 border border-emerald-100",
    },
    {
      title: "MAINTENANCE",
      value: stats.maintenance,
      icon: Wrench,
      badge: "↑ 8 Urgent",
      badgeClass: "bg-red-50 text-red-500 border border-red-100",
    },
  ];

  return (
  <div className="mt-5 grid gap-4 sm:grid-cols-3">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <div 
            key={card.title} 
            className="relative flex justify-between rounded-[20px] bg-[#f5f6f7] p-6 h-33.25"
          >
            {/* Left side text values */}
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-3xl font-bold tracking-tight text-gray-900 leading-none">
                  {card.value}
                </p>
                <p className="mt-2 text-xs font-bold tracking-wide text-gray-500 uppercase">
                  {card.title}
                </p>
              </div>
            </div>

            {/* Right side interactive block items */}
            <div className="flex flex-col justify-between items-end">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e3e5e8] text-gray-800">
                <Icon className="h-5 w-5" />
              </div>
              
              <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide ${card.badgeClass}`}>
                {card.badge}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}