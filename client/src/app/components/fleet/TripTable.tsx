"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Eye, MoreHorizontal, ChevronLeft, ChevronRight } from "lucide-react";

export default function TripTable() {
  const { trips, searchQuery, typeFilter, statusFilter } = useSelector((state: RootState) => state.fleet);

  const filteredTrips = trips.filter((trip) => {
    const matchesSearch = trip.tripId.toLowerCase().includes(searchQuery.toLowerCase()) || trip.vehicle.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = typeFilter === "All" || trip.vehicle.toLowerCase().includes(typeFilter.toLowerCase());
    const matchesStatus = statusFilter === "All" || trip.status === statusFilter;
    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <div className="px-6 pb-6 overflow-x-auto scrollbar-hide">
      <div className="min-w-245">
        <div className="grid grid-cols-[180px_160px_160px_240px_180px_120px_120px] gap-4 py-3 px-4 bg-gray-100 rounded-xl text-sm font-semibold text-gray-900 items-center">
          <div>Trip ID</div>
          <div>Vehicle</div>
          <div>Driver</div>
          <div>Route</div>
          <div>Departure/ETA</div>
          <div>Distance</div>
          <div className="text-right">Status</div>
        </div>

        <div className="mt-2 space-y-2">
          {filteredTrips.map((trip, index) => (
            <div
              key={trip.id}
              className={`grid grid-cols-[180px_160px_160px_240px_180px_120px_120px] gap-4 py-3 px-4 rounded-xl items-center text-sm ${index % 2 === 1 ? "bg-gray-50" : "bg-white"}`}
            >
              <div className="text-blue-600 font-semibold hover:underline cursor-pointer">{trip.tripId}</div>
              <div className="text-gray-600">{trip.vehicle}</div>
              <div className="text-gray-600">{trip.driver}</div>
              <div className="text-gray-600">{trip.route}</div>
              <div className="text-gray-600 whitespace-pre-line leading-tight text-xs">{trip.departure}</div>
              <div className="text-gray-600">{trip.distance}</div>
              <div className="flex items-center justify-end gap-2">
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${trip.status === "Active" ? "bg-sky-100 text-sky-700" : trip.status === "Delayed" ? "bg-red-100 text-red-700" : trip.status === "Planned" ? "bg-amber-100 text-amber-700" : "bg-emerald-100 text-emerald-700"}`}>
                  {trip.status}
                </span>
                <button className="rounded-full p-2 text-gray-500 hover:bg-gray-100 transition"><Eye className="h-4 w-4" /></button>
                <button className="rounded-full p-2 text-gray-500 hover:bg-gray-100 transition"><MoreHorizontal className="h-4 w-4" /></button>
              </div>
            </div>
          ))}

          {filteredTrips.length === 0 && (
            <div className="py-12 text-center text-gray-500">No trips found matching your filters.</div>
          )}
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500">
          <div>Showing 1-10 of {filteredTrips.length} Trips</div>
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
