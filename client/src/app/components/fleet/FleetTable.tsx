"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Eye, MoreHorizontal, ChevronLeft, ChevronRight } from "lucide-react";

export default function FleetTable() {
  const { vehicles, searchQuery, typeFilter, statusFilter } = useSelector((state: RootState) => state.fleet);

  const filteredVehicles = vehicles.filter((vehicle) => {
    const matchesSearch = vehicle.vehicleNumber.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = typeFilter === "All" || vehicle.type === typeFilter;
    const matchesStatus = statusFilter === "All" || vehicle.status === statusFilter;
    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <div className="px-6 pb-6 overflow-x-auto scrollbar-hide">
      <div className="min-w-245">
        <div className="grid grid-cols-[220px_160px_220px_120px_150px_120px_120px_120px_100px] gap-4 py-3 px-4 bg-gray-100 rounded-xl text-sm font-semibold text-gray-900 items-center">
          <div>Vehicle Number</div>
          <div>Type</div>
          <div>Model/Year</div>
          <div>Capacity</div>
          <div>Assigned Driver</div>
          <div>Status</div>
          <div>Reg. Exp</div>
          <div>Insurance</div>
          <div className="text-right">Actions</div>
        </div>

        <div className="mt-2 space-y-2">
          {filteredVehicles.map((vehicle, index) => (
            <div
              key={vehicle.id}
              className={`grid grid-cols-[220px_160px_220px_120px_150px_120px_120px_120px_100px] gap-4 py-3 px-4 rounded-xl items-center text-sm ${index % 2 === 1 ? "bg-gray-50" : "bg-white"}`}
            >
              <div className="font-semibold text-blue-600 hover:underline cursor-pointer">{vehicle.vehicleNumber}</div>
              <div className="text-gray-600">{vehicle.type}</div>
              <div className="text-gray-600">{vehicle.modelYear}</div>
              <div className="text-gray-600">{vehicle.capacity}</div>
              <div className="text-gray-600">{vehicle.assignedDriver}</div>
              <div>
                <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${vehicle.status === "Available" ? "bg-emerald-100 text-emerald-700" : vehicle.status === "Maintenance" ? "bg-amber-100 text-amber-700" : vehicle.status === "In Transit" ? "bg-sky-100 text-sky-700" : vehicle.status === "Decommissioned" ? "bg-slate-100 text-slate-700" : "bg-gray-100 text-gray-700"}`}>
                  {vehicle.status}
                </span>
              </div>
              <div className="text-gray-600">{vehicle.regExp}</div>
              <div className="text-gray-600">{vehicle.insuranceExp}</div>
              <div className="flex items-center justify-end gap-2 text-gray-500">
                <button className="rounded-full p-2 transition hover:bg-gray-100">
                  <Eye className="h-4 w-4" />
                </button>
                <button className="rounded-full p-2 transition hover:bg-gray-100">
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}

          {filteredVehicles.length === 0 && (
            <div className="py-12 text-center text-gray-500">No vehicles found matching your filters.</div>
          )}
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500">
          <div>Showing 1-10 of {filteredVehicles.length} Vehicles</div>
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-2 py-2 shadow-sm">
            <button className="rounded-full p-2 text-gray-500 transition hover:bg-gray-100"><ChevronLeft className="h-4 w-4" /></button>
            <span className="rounded-full bg-primary px-3 py-1 text-white">1</span>
            <button className="rounded-full p-2 text-gray-500 transition hover:bg-gray-100"><ChevronRight className="h-4 w-4" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
