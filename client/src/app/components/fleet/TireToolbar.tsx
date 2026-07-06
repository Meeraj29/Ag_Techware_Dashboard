"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setSearchQuery, setTypeFilter, setStatusFilter, setDateRange } from "../../redux/features/fleetSlice";
import { Search } from "lucide-react";
import { Button } from "../../ui/Button";

const typeOptions = ["All Types", "Front", "Rear Inner", "Rear Outer"];
const statusOptions = ["Status: All", "REPLACE", "MONITOR", "GOOD"];
const dateOptions = ["Date: Last 30 Days", "Date: Last 90 Days", "Date: This Year"];

export default function TireToolbar() {
  const dispatch = useDispatch();
  const { searchQuery, typeFilter, statusFilter, dateRange } = useSelector((state: RootState) => state.fleet);

  return (
    <div className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
        <div className="relative w-full sm:w-64">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            placeholder="Vehicle Number..."
            className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 text-sm text-gray-700 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>

        <select
          value={typeFilter}
          onChange={(e) => dispatch(setTypeFilter(e.target.value))}
          className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm font-medium text-gray-700 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
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
          className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm font-medium text-gray-700 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
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
          className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm font-medium text-gray-700 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
        >
          {dateOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap gap-3 justify-end">
        <Button variant="outline" className="rounded-lg px-5 py-2.5 text-sm font-semibold border-gray-200 text-blue-600 hover:bg-gray-50">
          Export
        </Button>
        <Button variant="gradient" className="rounded-lg px-5 py-2.5 text-sm font-semibold bg-[#0052cc] text-white hover:bg-blue-700">
          Bulk Install
        </Button>
      </div>
    </div>
  );
}
