"use client";

import { Calendar, Truck, AlertTriangle, CheckCircle, Package, Gauge } from "lucide-react";

export default function TransportationOverview() {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-6">
      <div className="mb-4">
        <h1 className="text-[20px] font-semibold text-[#000000] mb-1">Transportation Overview</h1>
        <p className="text-[16px] font-regular text-[#000000B2]">Real-time tracking and logistics fleet management.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Scheduled */}
        <div className="bg-[#F4F4F4] p-4 rounded-xl border border-gray-100 flex items-start justify-between">
          <div>
            <h3 className="text-[26px] font-semibold text-[#000000] mb-1">142</h3>
            <p className="text-[16px] font-medium text-[#000000]">Scheduled for Transport</p>
          </div>
          <div className="flex flex-col items-end gap-3">
            <div className="w-10 h-10 bg-[#DADADA] text-[#000000] rounded-xl flex items-center justify-center">
              <Calendar className="h-5 w-5" />
            </div>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full">+12%</span>
          </div>
        </div>

        {/* In Transit */}
        <div className="bg-[#F4F4F4] p-4 rounded-2xl border border-gray-100 flex items-start justify-between">
          <div>
            <h3 className="text-[26px] font-semibold text-[#000000] mb-1">42</h3>
            <p className="text-[16px] font-medium text-[#000000]">In Transit <span className="text-[#000000] font-medium">- On Track</span></p>
          </div>
          <div className="w-10 h-10 bg-[#DADADA] text-[#000000] rounded-xl flex items-center justify-center">
            <Truck className="h-5 w-5" />
          </div>
        </div>

        {/* Delayed */}
        <div className="bg-[#F4F4F4] p-4 rounded-2xl border-2 border-[#BA1A1A] flex items-start justify-between">
          <div>
            <h3 className="text-[26px] font-semibold text-[#000000] mb-1">12</h3>
            <p className="text-[16px] font-medium text-[#000000]">Delayed</p>
          </div>
          <div className="flex flex-col items-end gap-3">
            <div className="w-10 h-10 bg-[#DADADA] text-[#BA1A1A] rounded-xl flex items-center justify-center">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <span className="text-xs font-bold text-red-600 bg-red-200/50 px-2 py-1 rounded-full">+4</span>
          </div>
        </div>

        {/* Completed */}
        <div className="bg-[#F4F4F4] p-4 rounded-2xl border border-gray-100 flex items-start justify-between">
          <div>
            <h3 className="text-[26px] font-semibold text-[#000000] mb-1">256</h3>
            <p className="text-[16px] font-medium text-[#000000]">Completed</p>
          </div>
          <div className="flex flex-col items-end gap-3">
            <div className="w-10 h-10 bg-[#DADADA] text-emerald-500 rounded-xl flex items-center justify-center">
              <CheckCircle className="h-5 w-5" />
            </div>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full">98% Success</span>
          </div>
        </div>

        {/* Out For Delivery */}
        <div className="bg-[#F4F4F4] p-4 rounded-2xl border-2 border-[#04468D] flex items-start justify-between shadow-sm">
          <div>
            <h3 className="text-[26px] font-semibold text-[#000000] mb-1">123</h3>
            <p className="text-[16px] font-medium text-[#000000]">Out For Delivery</p>
          </div>
          <div className="flex flex-col items-end gap-3">
            <div className="w-10 h-10 bg-[#DADADA] text-[#000000] rounded-xl flex items-center justify-center">
              <Package className="h-5 w-5" />
            </div>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full">+12%</span>
          </div>
        </div>

        {/* Fleet Utilization */}
        <div className="bg-[#F4F4F4] p-4 rounded-2xl border border-gray-100 flex items-start justify-between">
          <div>
            <h3 className="text-[26px] font-semibold text-[#000000] mb-1">94.8%</h3>
            <p className="text-[16px] font-medium text-[#000000]">Fleet Utilization</p>
          </div>
          <div className="flex flex-col items-end gap-3">
            <div className="w-10 h-10 bg-[#DADADA] text-[#000000] rounded-xl flex items-center justify-center">
              <Gauge className="h-5 w-5" />
            </div>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full">Optimal</span>
          </div>
        </div>

      </div>
    </div>
  );
}
