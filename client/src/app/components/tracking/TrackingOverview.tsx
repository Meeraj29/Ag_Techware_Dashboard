"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Bell, Truck, ClipboardList, AlertTriangle } from "lucide-react";

export default function TrackingOverview() {
  const stats = useSelector((state: RootState) => state.tracking.stats);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4">
      
      {/* Card 1 */}
      <div className="bg-[#F4F4F4] border-1 border-[#EDEDED] rounded-2xl p-4 flex flex-col justify-between h-full">
        <div className="flex justify-between items-start mb-4">
          <div className="text-[26px] font-semibold text-[#000000] leading-none">{stats.activeShipments.count}</div>
          <div className="w-8 h-8 rounded-lg bg-[#DADADA] flex items-center justify-center shrink-0">
            <Bell className="w-4 h-4 text-[#1C1B1F]" />
          </div>
        </div>
        <div className="flex justify-between items-end mt-2">
          <div className="text-[14px] font-medium text-[#000000]">Active Shipments</div>
          <div className="px-2 py-0.5 rounded-xl text-[10px] font-medium bg-[#248F5F66] text-[#005C3D]">
            {stats.activeShipments.change}
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-[#F4F4F4] border-1 border-[#EDEDED] rounded-2xl p-4 flex flex-col justify-between h-full">
        <div className="flex justify-between items-start mb-4">
          <div className="text-[26px] font-semibold text-[#000000] leading-none">{stats.onTimeDelivery.percentage}%</div>
          <div className="w-8 h-8 rounded-lg bg-[#DADADA] flex items-center justify-center shrink-0">
            <Truck className="w-4 h-4 text-[#1C1B1F]" />
          </div>
        </div>
        <div className="flex justify-between items-end mt-2">
          <div className="text-[14px] font-medium text-[#000000]">On-Time Delivery rate</div>
          <div className="px-2 py-0.5 rounded-xl text-[10px] font-medium bg-[#DC9C9C] text-[#880000]">
            {stats.onTimeDelivery.change}
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-[#F4F4F4] border-1 border-[#EDEDED] rounded-2xl p-4 flex flex-col justify-between h-full">
        <div className="flex justify-between items-start mb-4">
          <div className="text-[26px] font-semibold text-[#000000] leading-none">{stats.customersPending.count}</div>
          <div className="w-8 h-8 rounded-lg bg-[#DADADA] flex items-center justify-center shrink-0">
            <ClipboardList className="w-4 h-4 text-[#1C1B1F]" />
          </div>
        </div>
        <div className="flex justify-between items-end mt-2">
          <div className="text-[14px] font-medium text-[#000000]">Customers pending</div>
          <div className="px-2 py-0.5 rounded-xl text-[10px] font-medium bg-[#248F5F66] text-[#005C3D]">
            {stats.customersPending.change}
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="bg-[#F4F4F4] border-1 border-[#EDEDED] rounded-2xl p-4 flex flex-col justify-between h-full">
        <div className="flex justify-between items-start mb-4">
          <div className="text-[26px] font-semibold text-[#000000] leading-none">{stats.criticalAlerts.count}</div>
          <div className="w-8 h-8 rounded-lg bg-[#DADADA] flex items-center justify-center shrink-0">
            <AlertTriangle className="w-4 h-4 text-[#1C1B1F]" />
          </div>
        </div>
        <div className="flex justify-between items-end mt-2">
          <div className="text-[14px] font-medium text-[#000000]">Critical Alerts</div>
          <div className="px-2 py-0.5 rounded-xl text-[10px] font-medium bg-[#DC9C9C] text-[#880000]">
            {stats.criticalAlerts.change}
          </div>
        </div>
      </div>

    </div>
  );
}
