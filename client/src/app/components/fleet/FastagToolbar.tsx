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
            className="w-full rounded-lg border border-gray-200 bg-[#f8f9fa] py-2 pl-9 pr-3 text-xs text-gray-700 outline-none placeholder:text-gray-400"
          />
        </div>
        <select className="rounded-lg border border-gray-200 bg-white px-2.5 py-2 text-xs text-gray-600 outline-none">
          <option>All Types</option>
        </select>
        <select className="rounded-lg border border-gray-200 bg-white px-2.5 py-2 text-xs text-gray-600 outline-none">
          <option>Status: All</option>
        </select>
        <select className="rounded-lg border border-gray-200 bg-white px-2.5 py-2 text-xs text-gray-600 outline-none">
          <option>Date: Last 30 Days</option>
        </select>
      </div>

      <div className="flex gap-2 justify-end items-center">
        <button className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-50">
          Export
        </button>
        <button className="rounded-lg border border-blue-600 bg-white px-3 py-2 text-xs font-bold text-blue-600 hover:bg-blue-50">
          Add Expense
        </button>
        <button className="rounded-lg bg-[#0052cc] px-3 py-2 text-xs font-bold text-white hover:bg-blue-700">
          Recharge FASTag
        </button>
      </div>
    </div>
  );
}