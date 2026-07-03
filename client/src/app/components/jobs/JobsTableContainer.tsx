"use client";

import { useState } from "react";
import JobsTableFilters from "./JobsTableFilters";
import JobsTable from "./JobsTable";

export default function JobsTableContainer() {
  const [primaryTab, setPrimaryTab] = useState<"All" | "Import" | "Export">("All");
  const [secondaryTab, setSecondaryTab] = useState<"All jobs" | "Action Required">("All jobs");

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col mt-4">
      {/* Primary Tabs */}
      <div className="px-6 pt-6 pb-2 border-b border-gray-100 bg-[#F8F9FA] flex gap-2">
        <div className="bg-[#EEF1F3] flex items-center justify-center gap-3 p-2">
          <button
            onClick={() => setPrimaryTab("All")}
            className={`px-4 py-2 text-base font-medium cursor-pointer rounded-md transition-colors flex items-center gap-2 ${primaryTab === "All" ? "bg-gradiate text-white font-semibold" : " text-gray-600 hover:bg-gray-200"}`}
          >
            All
            <span className={`text-xs px-1.5 py-0.5 rounded-full ${primaryTab === "All" ? "bg-white text-[#075FB7]" : "bg-gray-200 text-gray-500"}`}>15</span>
          </button>
          <button
            onClick={() => setPrimaryTab("Import")}
            className={`px-4 py-2 text-base font-medium cursor-pointer rounded-md transition-colors flex items-center gap-2 ${primaryTab === "Import" ? "bg-gradiate text-white font-semibold" : "text-gray-600 hover:bg-gray-200"}`}
          >
            Import
            <span className={`text-xs px-1.5 py-0.5 rounded-full ${primaryTab === "Import" ? "bg-white text-[#075FB7]" : "bg-gray-200 text-gray-500"}`}>10</span>
          </button>
          <button
            onClick={() => setPrimaryTab("Export")}
            className={`px-4 py-2 text-base font-medium cursor-pointer rounded-md transition-colors flex items-center gap-2 ${primaryTab === "Export" ? "bg-gradiate text-white font-semibold" : " text-gray-600 hover:bg-gray-200"}`}
          >
            Export
            <span className={`text-xs px-1.5 py-0.5 rounded-full ${primaryTab === "Export" ? "bg-white text-[#075FB7]" : "bg-gray-200 text-gray-500"}`}>16</span>
          </button>
        </div>
      </div>

      {/* Secondary Tabs */}
      <div className="px-6 flex gap-6 border-b border-gray-200 pt-4">
        <button
          onClick={() => setSecondaryTab("All jobs")}
          className={`pb-3 text-sm cursor-pointer font-semibold flex items-center gap-2 border-b-2 transition-colors ${secondaryTab === "All jobs" ? "border-[#075FB7] text-[#04458B]" : "border-transparent text-[#000000CC] hover:text-gray-700"}`}
        >
          All jobs
          <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-[#CBCBCB] text-black">15</span>
        </button>
        <button
          onClick={() => setSecondaryTab("Action Required")}
          className={`pb-3 text-sm cursor-pointer font-semibold flex items-center gap-2 border-b-2 transition-colors ${secondaryTab === "Action Required" ? "border-[#075FB7] text-[#04458B]" : "border-transparent text-[#000000CC] hover:text-gray-700"}`}
        >
          Action Required
          <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-[#CBCBCB] text-black">15</span>
        </button>
      </div>

      <JobsTableFilters />

      <JobsTable activeTab={secondaryTab} />

      {/* Pagination Footer */}
      <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100 bg-white">
        <span className="text-sm text-gray-500 font-medium">Showing 1-10 of 1,482 jobs</span>
        <div className="flex gap-2">
          <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-500 hover:bg-gray-50">{"<"}</button>
          <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-900 font-medium hover:bg-gray-50">1</button>
          <button className="w-8 h-8 flex items-center justify-center rounded border border-[#075FB7] text-[#075FB7] font-medium hover:bg-blue-50">{">"}</button>
        </div>
      </div>
    </div >
  );
}
