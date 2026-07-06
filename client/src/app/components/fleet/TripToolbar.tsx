"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setSearchQuery, setTypeFilter, setStatusFilter, setDateRange } from "../../redux/features/fleetSlice";
import { Search, ChevronDown } from "lucide-react";
import { Button } from "../../ui/Button";

const typeOptions = ["All Types", "Truck", "Van", "Trailer"];
const statusOptions = ["Status : All", "Active", "Delayed", "Planned", "Completed"];
const dateOptions = ["Last 30 Days", "Last 7 Days", "Last 90 Days"];

export default function TripToolbar() {
  const dispatch = useDispatch();
  const { searchQuery, typeFilter, statusFilter, dateRange } = useSelector((state: RootState) => state.fleet);

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between w-full bg-white py-2">
      {/* Left Group: Search Bar and Dropdowns with styling from image_cff4eb.png */}
      <div className="flex flex-wrap items-center gap-4 flex-1 min-w-0">
        
        {/* Search Input */}
        <div className="relative w-full sm:w-[277px] h-[53px] shrink-0">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            placeholder="Vehicle Number..."
            className="w-full h-full rounded-[16px] border border-[#E0E0E0] bg-[#F1F3F5] pl-10 pr-4 text-[14px] text-gray-700 outline-none transition focus:border-primary"
          />
        </div>

        {/* Dropdowns with Light Gray Background matching image_cff4eb.png */}
        <div className="relative h-[53px] flex items-center">
          <select
            value={typeFilter}
            onChange={(e) => dispatch(setTypeFilter(e.target.value))}
            className="appearance-none h-full rounded-[12px]  bg-[#F1F3F5] pl-4 pr-9 text-[14px] font-medium text-[#333333] outline-none cursor-pointer min-w-[120px]"
          >
            {typeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-600 pointer-events-none" />
        </div>

        <div className="relative h-[53px] flex items-center">
          <select
            value={statusFilter}
            onChange={(e) => dispatch(setStatusFilter(e.target.value))}
            className="appearance-none h-full rounded-[12px] border border-transparent bg-[#F1F3F5] pl-4 pr-9 text-[14px] font-medium text-[#333333] outline-none cursor-pointer min-w-[130px]"
          >
            {statusOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-600 pointer-events-none" />
        </div>

        <div className="relative h-[53px] flex items-center">
          <select
            value={dateRange}
            onChange={(e) => dispatch(setDateRange(e.target.value))}
            className="appearance-none h-full rounded-[12px] border border-transparent bg-[#F1F3F5] pl-4 pr-9 text-[14px] font-medium text-[#333333] outline-none cursor-pointer min-w-[130px]"
          >
            {dateOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-600 pointer-events-none" />
        </div>
      </div>

      {/* Right Group: Action buttons */}
      <div className="flex items-center gap-3 justify-end shrink-0">
        <Button 
          variant="outline" 
          className="rounded-[8px] border-2 border-primary text-primary bg-white px-8 h-[44px] text-[16px] font-semibold"
        >
          Export
        </Button>
        <Button 
          variant="gradient" 
          className="rounded-[8px] bg-linear-to-r from-[#0052D4] via-[#4364F7] to-[#6FB1FC] text-white px-8 h-[44px] text-[16px] font-semibold shadow-sm"
        >
          Create Trip
        </Button>
      </div>
    </div>
  );
}