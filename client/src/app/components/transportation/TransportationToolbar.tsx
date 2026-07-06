"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setSearchQuery } from "../../redux/features/transportationSlice";
import { Search, ChevronDown } from "lucide-react";

export default function TransportationToolbar() {
  const dispatch = useDispatch();
  const { searchQuery, activeTab } = useSelector((state: RootState) => state.transportation);

  return (
    <div className="flex flex-col lg:flex-row lg:flex-wrap justify-between items-start lg:items-center px-4 py-4 gap-4 bg-white">
      {/* Search Bar */}
      <div className="relative w-full lg:max-w-md shrink-0">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-gray-400" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          placeholder="Job ID, Company name,....."
          className="block w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg bg-gray-50 text-sm text-[#000000] focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC] outline-none transition-all"
        />
      </div>

      {/* Filters */}
      <div className="grid grid-cols-2 lg:flex lg:flex-wrap items-center gap-2 md:gap-3 w-full lg:w-auto lg:justify-end">
        <button className="flex items-center justify-between gap-2 px-3 py-2 border border-gray-200 rounded-lg text-xs md:text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 whitespace-nowrap overflow-hidden">
          <span className="truncate text-[#000000]"><span className="text-[#00000099] hidden lg:inline">Date:</span>Last 30 days</span>
          <ChevronDown className="h-4 w-4 text-gray-400 shrink-0" />
        </button>
        <button className="flex items-center justify-between gap-2 px-3 py-2 border border-gray-200 rounded-lg text-xs md:text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 whitespace-nowrap overflow-hidden">
          <span className="truncate text-[#000000]"><span className="text-[#00000099] hidden lg:inline">Shipment Type: </span>All</span>
          <ChevronDown className="h-4 w-4 text-gray-400 shrink-0" />
        </button>
        
        <button className="flex items-center justify-between xl:justify-center gap-2 px-3 py-2 border border-gray-200 rounded-lg text-xs md:text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 whitespace-nowrap overflow-hidden">
          <span className="truncate text-[#000000]"><span className="text-[#00000099] hidden lg:inline">Sort By: </span>Pickup Time</span>
          <ChevronDown className="h-4 w-4 text-gray-400 shrink-0" />
        </button>
        
        {activeTab === "Completed" && (
          <button className="flex items-center justify-center gap- px-3 py-2 border-2 border-[#044890] text-[#044890] rounded-lg text-xs md:text-sm font-medium bg-white hover:bg-primary hover:text-white transition-colors xl:ml-2 whitespace-nowrap overflow-hidden">
            Export Data
          </button>
        )}
      </div>
    </div>
  );
}
