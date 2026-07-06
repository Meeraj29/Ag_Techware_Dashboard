"use client";

import { Search, SlidersHorizontal } from "lucide-react";

export default function FastagToolbar() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between pt-1">
      <div className="flex flex-1 flex-wrap gap-2 items-center max-w-2xl">
        <div className="relative flex-1 min-w-[180px]">
          <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Vehicle Number..."
            className="w-full rounded-lg border border-[#D8D8D8] bg-[#F1F1F1] py-2 pl-9 pr-3 text-xs text-gray-700 outline-none placeholder:text-gray-400"
          />
        </div>
        <select className="rounded-[8px] border border-[#EBEBEB] bg-white px-2.5 py-2 text-[14px] text-black outline-none">
          <option>All Types</option>
        </select>
        <select className="rounded-[8px] border border-[#EBEBEB] bg-white px-2.5 py-2 text-[14px] text-black outline-none">
          <option>Status: All</option>
        </select>
        <select className="rounded-[8px] border border-[#EBEBEB] bg-white px-2.5 py-2 text-[14px] text-black outline-none">
          <option>Date: Last 30 Days</option>
        </select>
      </div>

      <div className="flex gap-2 justify-end items-center">
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