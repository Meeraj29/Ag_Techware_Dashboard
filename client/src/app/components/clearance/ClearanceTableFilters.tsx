import { Search, ChevronDown, SlidersHorizontal } from "lucide-react";
import { Button } from "@/app/ui/Button";

export default function ClearanceTableFilters() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 px-6 py-4 items-center justify-between border-b border-gray-100 bg-white">
      <div className="relative w-full sm:w-auto flex-1 max-w-md">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg text-sm bg-[#F4F4F4] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          placeholder="Search by job ID, etc.,"
        />
      </div>

      <div className="flex gap-3 w-full sm:w-auto overflow-x-auto shrink-0 items-center">
        <Button
          variant="ghost"
          className="border border-gray-200 bg-white hover:bg-gray-50 px-3 py-2 h-auto text-sm text-gray-700"
        >
          Last 30 Days
          <ChevronDown className="h-4 w-4 text-gray-500 ml-2" />
        </Button>
        <Button
          variant="ghost"
          className="border border-gray-200 bg-[#F8FAFC] hover:bg-gray-50 px-3 py-2 h-auto text-sm text-gray-700"
        >
          <span className="text-gray-500 font-normal mr-1">Status:</span> All
          <ChevronDown className="h-4 w-4 text-gray-500 ml-2" />
        </Button>
        <Button
          variant="ghost"
          className="border border-gray-200 bg-[#F8FAFC] hover:bg-gray-50 px-3 py-2 h-auto text-sm text-gray-700"
        >
          <span className="text-gray-500 font-normal mr-1">Risk indicator:</span> All
          <ChevronDown className="h-4 w-4 text-gray-500 ml-2" />
        </Button>
        <Button
          variant="ghost"
          className="text-[#075FB7] hover:bg-blue-50 hover:text-[#075FB7] px-3 py-2 h-auto ml-2"
        >
          <SlidersHorizontal className="h-4 w-4 mr-2" />
          Advance
        </Button>
      </div>
    </div>
  );
}
