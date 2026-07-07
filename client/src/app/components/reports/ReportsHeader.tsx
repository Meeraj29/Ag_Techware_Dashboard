import React from 'react';
import { Search, Download, ChevronDown } from 'lucide-react';

function FilterSelect({ label, value }: { label?: string, value: string }) {
  return (
    <div className="relative inline-block shrink-0">
      <select className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10">
        <option>{value}</option>
      </select>
      <div className="bg-white border border-gray-200 rounded-[8px] px-4 py-2.5 shadow-sm flex items-center gap-2 hover:bg-gray-50 transition-colors">
        <div className="text-[16px] whitespace-nowrap">
          {label && <span className="text-black/70">{label} </span>}
          <span className="text-black font-medium">{value}</span>
        </div>
        <ChevronDown size={16} className="text-gray-500" />
      </div>
    </div>
  );
}

export function ReportsHeader() {
  return (
    <div className="mb-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h1 className="text-[20px] font-semibold text-black">Reports Dashboard</h1>
          <p className="text-[16px] text-[#424656] mt-1">Operational velocity and compliance overview for Q3.</p>
        </div>
        <button className="bg-linear-to-r from-[#0863BD] to-[#04458B] text-white px-5 py-3 rounded-[8px] font-medium text-[16px] flex items-center gap-2 hover:bg-blue-800 transition">
          Export Pdf / Excel
          <Download size={16} />
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 lg:items-center w-full bg-[#F4F4F4] p-3 rounded-[16px] overflow-hidden">
        <div className="relative w-full lg:w-[400px] xl:w-[450px] shrink-0">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Global search shipments, jobs, or docs..."
            className="bg-white border border-gray-200 rounded-[8px] pl-10 pr-4 py-2.5 w-full focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm shadow-sm"
          />
        </div>
        <div className="flex gap-3 overflow-x-auto w-full pb-1 scrollbar-hide">
          <FilterSelect label="Status:" value="All Status" />
          <FilterSelect label="Team:" value="All Teams" />
          <FilterSelect label="Type:" value="Import" />
          <FilterSelect value="Last 30 Days" />
        </div>
      </div>
    </div>
  );
}
