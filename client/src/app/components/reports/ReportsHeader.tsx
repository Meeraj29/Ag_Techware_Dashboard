import React from 'react';
import { Search, Download } from 'lucide-react';

export function ReportsHeader() {
  return (
    <div className="mb-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h1 className="text-[20px] font-semibold text-black">Reports Dashboard</h1>
          <p className="text-[16px] text-[#424656] mt-1">Operational velocity and compliance overview for Q3.</p>
        </div>
        <button className="bg-[#0A4B9F] text-white px-4 py-2 rounded-[8px] font-medium text-sm flex items-center gap-2 hover:bg-blue-800 transition">
          Export Pdf / Excel
          <Download size={16} />
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 lg:items-center w-full bg-[#F4F4F4] p-3 rounded-[16px] overflow-hidden">
        <div className="relative w-full lg:w-[400px] xl:w-[537px] shrink-0">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Global search shipments, jobs, or docs..." 
            className="bg-white border border-gray-200 rounded-full pl-10 pr-4 py-2.5 w-full focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm shadow-sm"
          />
        </div>
        <div className="flex gap-3 overflow-x-auto w-full pb-1 scrollbar-hide">
          <select className="bg-white border border-gray-200 rounded-full px-4 py-2.5 text-sm outline-none shadow-sm cursor-pointer hover:bg-gray-50 text-gray-600 font-medium shrink-0">
            <option>Status: All Status</option>
          </select>
          <select className="bg-white border border-gray-200 rounded-full px-4 py-2.5 text-sm outline-none shadow-sm cursor-pointer hover:bg-gray-50 text-gray-600 font-medium shrink-0">
            <option>Team: All Teams</option>
          </select>
          <select className="bg-white border border-gray-200 rounded-full px-4 py-2.5 text-sm outline-none shadow-sm cursor-pointer hover:bg-gray-50 text-gray-600 font-medium shrink-0">
            <option>Type: Import</option>
          </select>
          <select className="bg-white border border-gray-200 rounded-full px-4 py-2.5 text-sm outline-none shadow-sm cursor-pointer hover:bg-gray-50 text-gray-600 font-medium shrink-0">
            <option>Last 30 Days</option>
          </select>
        </div>
      </div>
    </div>
  );
}
