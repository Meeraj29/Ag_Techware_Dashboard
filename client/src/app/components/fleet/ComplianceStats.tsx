"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { TriangleAlert, CheckCircle2, FileCheck } from "lucide-react";

export default function ComplianceStats() {
  const stats = useSelector((state: RootState) => state.fleet.complianceStats);

  const cards = [
    {
      title: "CRITICAL ATTENTION REQUIRED",
      value: stats.criticalAttention.value,
      subtext: stats.criticalAttention.subtext,
      icon: TriangleAlert,
      isCritical: stats.criticalAttention.isCritical,
      trend: stats.criticalAttention.trend,
    },
    {
      title: "ASSECTS HEALTH", // Keeping typo from design (Assects)
      value: stats.assetsHealth.value,
      subtext: stats.assetsHealth.subtext,
      icon: CheckCircle2,
      isCritical: false,
      trend: stats.assetsHealth.trend,
    },
    {
      title: "PENDING RENEWAL",
      value: stats.pendingRenewal.value,
      subtext: stats.pendingRenewal.subtext,
      icon: FileCheck,
      isCritical: false,
      trend: stats.pendingRenewal.trend,
    },
  ];

  return (
    <div className="mt-5 grid gap-4 sm:grid-cols-3">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <div 
            key={card.title} 
            className={`relative flex justify-between rounded-2xl p-6 h-36 border ${
              card.isCritical ? "bg-[#fff8f8] border-[#ffe8e8]" : "bg-[#f5f6f7] border-transparent"
            }`}
          >
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-[11px] font-bold tracking-wide text-gray-900 uppercase">{card.title}</p>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 leading-none">{card.value}</p>
              </div>
              <p className={`text-[10px] font-medium ${card.trend === "up" ? "text-emerald-600" : "text-gray-500"}`}>
                {card.subtext}
              </p>
            </div>
            <div className="flex flex-col items-end">
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                card.isCritical ? "bg-[#ffe8e8] text-red-500" : "bg-[#e3e5e8] text-emerald-600"
              }`}>
                {/* Note: Third icon is different in design (clipboard check), but standardizing on these for now */}
                <Icon className={`h-4 w-4 ${card.title === "PENDING RENEWAL" ? "text-blue-500" : ""}`} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
