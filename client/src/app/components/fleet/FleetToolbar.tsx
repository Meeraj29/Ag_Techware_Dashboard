"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setSearchQuery, setTypeFilter, setStatusFilter, setDateRange } from "../../redux/features/fleetSlice";
import { Search } from "lucide-react";
import { Button } from "../../ui/Button";

const typeOptions = ["All Types", "Heavy Truck", "Refrigerated Van", "LCV", "HCV"];
const statusOptions = ["Status : All", "In Transit", "Maintenance", "Available", "Inactive", "Decommissioned"];
const dateOptions = ["Last 30 Days", "Last 60 Days", "Last 90 Days"];

export default function FleetToolbar() {
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
            className="w-full rounded-[16px] border border-[#EBEBEB] bg-[#F1F1F1] py-3 pl-10 pr-4 text-sm text-black outline-none transition "
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <select
          value={typeFilter}
          onChange={(e) => dispatch(setTypeFilter(e.target.value))}
          className="rounded-[8px] border border-[#EBEBEB] bg-white px-4 py-3 text-sm text-black outline-none"
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
          className="rounded-[8px] border border-[#EBEBEB] bg-white px-4 py-3 text-sm text-black outline-none"
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
          className="rounded-[8px] border border-[#EBEBEB] bg-white px-4 py-3 text-sm text-black outline-none"
        >
          {dateOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap gap-3 justify-end">
        <Button variant="outline" className="rounded-[8px] px-5 py-4 text-sm font-semibold border-2 border-primary">
          Assign Driver
        </Button>
        <Button variant="outline" className="rounded-[8px] px-5 py-4 text-sm font-semibold border-2 border-primary">
          Export
        </Button>
        <Button variant="gradient" className="rounded-[8px] px-5 py-4 text-sm font-semibold border-2 border-primary">
          Add Vehicle
        </Button>
      </div>
    </div>
  );
}
