"use client";

import { Search, SlidersHorizontal } from "lucide-react";

export default function FastagToolbar() {
  return (
    <div className="flex items-center justify-between gap-3 w-full pt-1 overflow-x-auto scrollbar-hide">
      <div className="flex items-center gap-2 flex-1 min-w-max">
        <div className="relative w-[180px] shrink-0">
          <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Vehicle Number..."
            className="w-full rounded-lg border border-[#D8D8D8] bg-[#F1F1F1] py-2 pl-9 pr-3 text-xs text-gray-700 outline-none placeholder:text-gray-400"
          />
        </div>
        <select className="rounded-[8px] border border-[#EBEBEB] bg-white px-2.5 py-2 text-[14px] text-black outline-none shrink-0">
          <option>All Types</option>
        </select>
        <select className="rounded-[8px] border border-[#EBEBEB] bg-white px-2.5 py-2 text-[14px] text-black outline-none shrink-0">
          <option>Status: All</option>
        </select>
        <select className="rounded-[8px] border border-[#EBEBEB] bg-white px-2.5 py-2 text-[14px] text-black outline-none shrink-0">
          <option>Date: Last 30 Days</option>
        </select>
      </div>

      <div className="flex items-center gap-2 shrink-0 ml-auto min-w-max">
        <button className="rounded-lg border-2 border-primary bg-white px-3 py-2 text-[14px] font-semibold text-primary hover:bg-gray-50">
          Export
        </button>
        <button className="rounded-lg border-2 border-primary bg-white px-3 py-2 text-[14px] font-semibold text-primary hover:bg-gray-50">
          Add Expense
        </button>
        <button className="rounded-lg border-2 border-primary bg-linear-to-r from-[#0863BD] to-[#04458B] px-3 py-2 text-[14px] font-semibold text-white hover:bg-blue-700">
          Recharge FASTag
        </button>
      </div>
    </div>
  );
}
