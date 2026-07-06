"use client";

import { Search } from "lucide-react";

export default function PurchaseToolbar() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pt-2">
      <div className="flex flex-1 flex-wrap gap-3 items-center max-w-xl">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Global search..."
            className="w-full rounded-xl border border-gray-200 bg-[#f5f6f7] py-2.5 pl-11 pr-4 text-xs text-gray-700 outline-none transition placeholder:text-gray-400"
          />
        </div>

        <select className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-xs font-medium text-gray-700 outline-none">
          <option>All Types</option>
        </select>

        <select className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-xs font-medium text-gray-700 outline-none">
          <option>Status: All</option>
        </select>
      </div>

      <div className="flex gap-3 justify-end items-center">
        <button className="rounded-xl border-2 border-blue-600 bg-white px-4 py-2 text-xs font-bold text-blue-600 transition hover:bg-blue-50">
          Export to CSV
        </button>
        <button className="rounded-xl bg-[#0b57d0] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-blue-700">
          Create Order
        </button>
      </div>
    </div>
  );
}