"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setSearchQuery } from "../../redux/features/vendor/vendorSlice";
import { Search } from "lucide-react";
import { Button } from "../../ui/Button";

export default function VendorToolbar() {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state: RootState) => state.vendor.searchQuery);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mx-6 py-4 gap-4 border-b-2 border-gray-200 mb-6">
      <div className="relative w-full max-w-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-gray-400 " />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          placeholder="Press Enter to Search..."
          className="block w-full pl-10 pr-4 py-4 border border-gray-200 text-base font-medium text-black rounded-2xl placeholder:text-[#000000B2] bg-[#F1F1F1]  focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white outline-none transition-all"
        />
      </div>

      <div className="flex items-center gap-3 w-full sm:w-auto">
        <Button variant="outline" className="w-full sm:w-auto font-semibold">
          Export As CSV
        </Button>
        <Button variant="outline" className="w-full sm:w-auto font-semibold">
          Print List
        </Button>
      </div>
    </div>
  );
}
