"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setSearchQuery, setTypeFilter, setStatusFilter, setDateRange } from "../../redux/features/fleetSlice";
import { Search } from "lucide-react";
import { Button } from "../../ui/Button";

const typeOptions = ["All", "Truck", "Van", "Trailer"];
const statusOptions = ["All", "Active", "Delayed", "Planned", "Completed"];
const dateOptions = ["Last 7 Days", "Last 30 Days", "Last 90 Days"];

export default function TripToolbar() {
  const dispatch = useDispatch();
  const { searchQuery, typeFilter, statusFilter, dateRange } = useSelector((state: RootState) => state.fleet);

  return (
    <div className="flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex-1 min-w-0">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            placeholder="Vehicle Number..."
            className="w-full rounded-full border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm text-gray-700 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <select
          value={typeFilter}
          onChange={(e) => dispatch(setTypeFilter(e.target.value))}
          className="rounded-full border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
        >
          {typeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <select
          value={statusFilter}
          onChange={(e) => dispatch(setStatusFilter(e.target.value))}
          className="rounded-full border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
        >
          {statusOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <select
          value={dateRange}
          onChange={(e) => dispatch(setDateRange(e.target.value))}
          className="rounded-full border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
        >
          {dateOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap gap-3 justify-end">
        <Button variant="outline" className="rounded-full px-5 py-3 text-sm font-semibold">
          Export
        </Button>
        <Button variant="gradient" className="rounded-full px-5 py-3 text-sm font-semibold">
          Create Trip
        </Button>
      </div>
    </div>
  );
}
