"use client";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function FleetTable() {
  const { vehicles, searchQuery, typeFilter, statusFilter } = useSelector((state: RootState) => state.fleet);

  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredVehicles = vehicles.filter((vehicle) => {
    const matchesSearch = vehicle.vehicleNumber.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = typeFilter === "All" || vehicle.type === typeFilter;
    const matchesStatus = statusFilter === "All" || vehicle.status === statusFilter;
    return matchesSearch && matchesType && matchesStatus;
  });

  // Calculate pagination totals
  const totalPages = Math.ceil(filteredVehicles.length / itemsPerPage) || 1;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentVehicles = filteredVehicles.slice(indexOfFirstItem, indexOfLastItem);

  // Helper to render driver profiles exactly as seen in image_cf0129.png
  const renderAssignedDriver = (driverName: string) => {
    if (!driverName || driverName === "Unassigned" || driverName === "Decommissioned") {
      return <span className="text-[#8E8E8E] font-normal">{driverName || "Unassigned"}</span>;
    }

    const initials = driverName
      .split(" ")
      .map((n) => n[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();

    let colors = "bg-[#E2EDF9] text-[#4A86C5]";
    if (initials === "SM") colors = "bg-[#FFF2D4] text-[#B58925]";
    if (initials === "AS") colors = "bg-[#FCE3E1] text-[#C53929]";

    return (
      <div className="flex items-center gap-2.5">
        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 ${colors}`}>
          {initials}
        </div>
        <span className="text-black/80 font-medium">{driverName}</span>
      </div>
    );
  };

  return (
    <div className="px-6 pb-6 overflow-x-auto scrollbar-hide">
      <div className="min-w-245">
        <table className="w-full border-separate border-spacing-y-3">
          <thead>
            <tr className="bg-[#F4F4F4] text-[16px] font-semibold text-black/80 whitespace-nowrap">
              <th className="py-3 px-4 rounded-l-xl text-left font-semibold w-[220px]">Vehicle Number</th>
              <th className="py-3 px-4 text-left font-semibold w-[160px]">Type</th>
              <th className="py-3 px-4 text-left font-semibold w-[220px]">Model/Year</th>
              <th className="py-3 px-4 text-left font-semibold w-[120px]">Capacity</th>
              <th className="py-3 px-4 text-left font-semibold w-[200px]">Assigned Driver</th>
              <th className="py-3 px-4 text-left font-semibold w-[120px]">Status</th>
              <th className="py-3 px-4 text-left font-semibold w-[120px]">Reg. Exp</th>
              <th className="py-3 px-4 text-left font-semibold w-[120px]">Insurance</th>
              <th className="py-3 px-4 rounded-r-xl text-right font-semibold w-[100px]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentVehicles.map((vehicle, index) => (
              <tr
                key={vehicle.id}
                className={`text-[16px] align-middle ${index % 2 === 1 ? "bg-gray-50" : "bg-white"}`}
              >
                <td className="py-3 px-4 rounded-l-xl font-medium text-[#3525CD] hover:underline cursor-pointer whitespace-nowrap">
                  {vehicle.vehicleNumber}
                </td>
                <td className="py-3 px-4 text-[#333333] whitespace-nowrap">
                  {vehicle.type}
                </td>
                {/* Model / Year Column (Keeps the year stacked down below the name) */}
                <td className="py-3 px-4 text-black/80 whitespace-nowrap">
                  <div className="flex flex-col">
                    <span className="text-black/80 font-medium">
                      {vehicle.modelName || (vehicle.modelYear && vehicle.modelYear.includes('/') ? vehicle.modelYear.split('/')[0] : vehicle.modelYear)}
                    </span>
                  </div>
                </td>
                <td className="py-3 px-4 text-black/80 whitespace-nowrap">
                  {vehicle.capacity}
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  {renderAssignedDriver(vehicle.assignedDriver)}
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${vehicle.status === "Available" ? "bg-[#95E58A]/25 text-[#007550]" :
                    vehicle.status === "Maintenance" ? "bg-[#FFA000]/70 text-[#915B00]" :
                      vehicle.status === "In Transit" ? "bg-[#054B94]/13 text-primary" :
                        vehicle.status === "Decommissioned" ? "bg-[#C8C8C8]/25 text-[#5C5C5C]" :
                          "bg-gray-100 text-gray-700"
                    }`}>
                    {vehicle.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-black/80 whitespace-nowrap">
                  {vehicle.regExp}
                </td>
                <td className="py-3 px-4 text-black/80 whitespace-nowrap">
                  {vehicle.insuranceExp}
                </td>
                <td className="py-3 px-4 rounded-r-xl">
                  <div className="flex items-center justify-end gap-2 text-gray-500">
                    <button className="rounded-full transition hover:bg-gray-100 w-[40px] h-[40px] flex items-center justify-center">
                      <Image src="/action1.svg" width={40} height={40} alt="action1" />
                    </button>
                    <button className="rounded-full transition hover:bg-gray-100 w-[40px] h-[40px] flex items-center justify-center">
                      <Image src="/action2.svg" width={40} height={40} alt="action2" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredVehicles.length === 0 && (
          <div className="py-12 text-center text-gray-500">
            No vehicles found matching your filters.
          </div>
        )}

        {/* Pagination Section */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500">
          <div>
            Showing {filteredVehicles.length === 0 ? 0 : indexOfFirstItem + 1}-
            {Math.min(indexOfLastItem, filteredVehicles.length)} of {filteredVehicles.length} Vehicles
          </div>
          <div className="flex gap-1 items-center">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-[48px] h-[51px] flex items-center justify-center border-2 border-primary text-primary rounded-[8px] bg-white transition disabled:opacity-50"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-[48px] h-[51px] flex items-center justify-center rounded-[8px] text-[14px] font-medium transition ${page === currentPage
                  ? 'border-2 border-[#E0E0E0] text-black bg-white font-semibold'
                  : 'border border-transparent text-gray-500 hover:border-gray-200 hover:text-black'
                  }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="w-[48px] h-[51px] flex items-center justify-center border-2 border-primary text-primary rounded-[8px] bg-white transition disabled:opacity-50"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}