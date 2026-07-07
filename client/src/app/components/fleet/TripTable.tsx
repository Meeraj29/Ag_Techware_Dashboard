"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function TripTable() {
  const { trips, searchQuery, typeFilter, statusFilter } = useSelector((state: RootState) => state.fleet);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredTrips = trips.filter((trip) => {
    const matchesSearch = trip.tripId.toLowerCase().includes(searchQuery.toLowerCase()) || trip.vehicle.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = typeFilter === "All" || trip.vehicle.toLowerCase().includes(typeFilter.toLowerCase());
    const matchesStatus = statusFilter === "All" || trip.status === statusFilter;
    return matchesSearch && matchesType && matchesStatus;
  });

  // Pagination Calculation Logic
  const totalPages = Math.max(1, Math.ceil(filteredTrips.length / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedTrips = filteredTrips.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="pb-6 overflow-x-auto scrollbar-hide">
      <div className="min-w-245">
        <table className="w-full border-separate border-spacing-y-2">
          <thead>
            <tr className="bg-[#F4F4F4] text-[16px] font-semibold text-black/80 whitespace-nowrap">
              <th className="py-3 px-4 rounded-l-[16px] text-left font-semibold w-[180px]">Trip ID</th>
              <th className="py-3 px-4 text-left font-semibold w-[160px]">Vehicle</th>
              <th className="py-3 px-4 text-left font-semibold w-[160px]">Driver</th>
              <th className="py-3 px-4 text-left font-semibold w-[240px]">Route</th>
              <th className="py-3 px-4 text-left font-semibold w-[180px]">Departure/ETA</th>
              <th className="py-3 px-4 text-left font-semibold w-[120px]">Distance</th>
              <th className="py-3 px-4 text-left font-semibold w-[120px]">Status</th>
              <th className="py-3 px-4 rounded-r-[16px] text-right font-semibold w-[100px]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedTrips.map((trip, index) => (
              <tr
                key={trip.id}
                className={`text-[16px] align-middle ${index % 2 === 1 ? "bg-gray-50" : "bg-white"}`}
              >
                <td className="py-3 px-4 rounded-l-xl text-[#3525CD] font-semibold hover:underline cursor-pointer whitespace-nowrap">
                  {trip.tripId}
                </td>
                <td className="py-3 px-4 text-[#333333] whitespace-nowrap">
                  {trip.vehicle}
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <div className="flex items-center gap-2.5">
                    {(() => {
                      if (!trip.driver || trip.driver === "Unassigned") {
                        return <span className="text-[#8E8E8E] font-normal">Unassigned</span>;
                      }

                      const initials = trip.driver
                        .split(".")
                        .join(" ")
                        .split(" ")
                        .map((n: string) => n[0])
                        .join("")
                        .substring(0, 2)
                        .toUpperCase();

                      return (
                        <>
                          <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 bg-[#E2EDF9] text-[#4A86C5]">
                            {initials}
                          </div>
                          <span className="text-black/80 font-medium">{trip.driver}</span>
                        </>
                      );
                    })()}
                  </div>
                </td>
                <td className="py-3 px-4 text-black/80 whitespace-nowrap">
                  {trip.route}
                </td>
                <td className="py-3 px-4 text-black/80 whitespace-pre-line leading-tight text-[16px]">
                  {trip.departure}
                </td>
                <td className="py-3 px-4 text-black/80 whitespace-nowrap">
                  {trip.distance}
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${trip.status === "Active" ? "bg-[#054B94]/13 text-[#004AC6]" :
                      trip.status === "Delayed" ? "bg-[#BA1A1A]/13 text-[#BA1A1A]" :
                        trip.status === "Planned" ? "bg-[#515F74]/13 text-[#515F74]" :
                          "bg-[#15803D]/13 text-[#15803D]"
                    }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${trip.status === "Active" ? "bg-[#004AC6]" :
                        trip.status === "Delayed" ? "bg-[#BA1A1A]" :
                          trip.status === "Planned" ? "bg-[#515F74]" :
                            "bg-[#15803D]"
                      }`} />
                    {trip.status}
                  </span>
                </td>
                <td className="py-3 px-4 rounded-r-xl">
                  <div className="flex items-center justify-end gap-2">
                    <button className="rounded-full text-gray-500 hover:bg-gray-100 transition w-[40px] h-[40px] flex items-center justify-center">
                      <Image src="/eye1.svg" alt="view" width={40} height={40} />
                    </button>
                    <button className="rounded-full text-gray-500 hover:bg-gray-100 transition w-[40px] h-[40px] flex items-center justify-center">
                      <Image src="/action3.svg" alt="view" width={40} height={40} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredTrips.length === 0 && (
          <div className="py-12 text-center text-gray-500">No trips found matching your filters.</div>
        )}

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500">
          <div>
            Showing {filteredTrips.length === 0 ? 0 : startIndex + 1}-
            {Math.min(startIndex + itemsPerPage, filteredTrips.length)} of {filteredTrips.length} Trips
          </div>
          <div className="flex gap-1 items-center">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-[48px] h-[51px] flex items-center justify-center border-2 border-primary text-primary rounded-[8px] bg-white transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
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
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="w-[48px] h-[51px] flex items-center justify-center border-2 border-primary text-primary rounded-[8px] bg-white transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}