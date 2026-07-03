"use client";

import { Bell, Star, TrendingDown, AlertCircle } from "lucide-react";

export default function SalesKPIs() {
  const kpis = [
    {
      id: 1,
      value: "142",
      label: "Total Active Quotes",
      icon: Bell,
      change: "+12%",
      isPositive: true,
    },
    {
      id: 2,
      value: "68%",
      label: "Conversion Rate",
      icon: Star,
      change: "+4%",
      isPositive: true,
    },
    {
      id: 3,
      value: "₹14,250",
      label: "Avg Quote Value",
      icon: TrendingDown,
      change: "-12%",
      isPositive: false,
    },
    {
      id: 4,
      value: "24",
      label: "Pending Approvals",
      icon: AlertCircle,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-3 mt-3">
      {kpis.map((kpi) => (
        <div key={kpi.id} className="bg-[#F4F4F4] border border-[#EDEDED] rounded-xl p-6 h-32 relative flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-semibold text-black mb-2">{kpi.value}</h2>
              <p className="text-base font-medium text-black mt-6">{kpi.label}</p>
            </div>

            <div className="flex flex-col items-center gap-6">
              <div className="w-10 h-10 rounded-full bg-gray-200/60 flex items-center justify-center">
                <kpi.icon className="h-5 w-5 text-gray-600" />
              </div>
              {kpi.change && (
                <div
                  className={`px-2 py-1 rounded-full text-xs font-medium ${kpi.isPositive ? "bg-[#248F5F66] text-[#005C3D]" : "bg-[#DC9C9C] text-[#880000]"
                    }`}
                >
                  {kpi.change}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
