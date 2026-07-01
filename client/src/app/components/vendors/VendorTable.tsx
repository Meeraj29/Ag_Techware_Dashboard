"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { toggleVendorStatus } from "../../redux/features/vendorSlice";
import { Edit2, Eye, Search } from "lucide-react";

export default function VendorTable() {
  const dispatch = useDispatch();
  const { vendors, activeTab, searchQuery } = useSelector(
    (state: RootState) => state.vendor
  );

  const filteredVendors = vendors.filter((vendor) => {
    const matchesTab = activeTab === "All" || vendor.status === activeTab;
    const matchesSearch =
      vendor.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vendor.emailAddress?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vendor.shortName?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="px-6 pb-6 overflow-x-auto">
      <div className="min-w-[900px]">
        {/* Table Header */}
        <div className="grid grid-cols-[60px_1fr_120px_1fr_100px_120px_100px_140px] gap-4 py-3 px-4 bg-gray-100 rounded-xl text-sm font-semibold text-gray-900 items-center">
          <div className="flex items-center gap-2">
            # <Search className="h-3 w-3" />
          </div>
          <div>Company Name</div>
          <div>Short Name</div>
          <div>Email Address</div>
          <div>Currency</div>
          <div>Company Type</div>
          <div>Status</div>
          <div className="text-center">Actions</div>
        </div>

        {/* Table Body */}
        <div className="mt-2 space-y-2">
          {filteredVendors.map((vendor, index) => (
            <div
              key={vendor._id}
              className={`grid grid-cols-[60px_1fr_120px_1fr_100px_120px_100px_140px] gap-4 py-3 px-4 rounded-xl items-center text-sm ${
                index % 2 === 1 ? "bg-gray-50" : "bg-white"
              }`}
            >
              <div className="font-medium text-gray-900">{index + 1}</div>
              <div className="font-semibold text-gray-900">{vendor.companyName}</div>
              <div className="text-gray-600">{vendor.shortName}</div>
              <div className="text-gray-600">{vendor.emailAddress}</div>
              <div className="text-gray-600 font-medium">{vendor.currency}</div>
              <div className="text-gray-600">{vendor.companyType}</div>
              <div>
                <span
                  className={`font-medium ${
                    vendor.status === "Active" ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {vendor.status}
                </span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <button className="p-1.5 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors">
                  <Edit2 className="h-4 w-4" />
                </button>
                <button className="p-1.5 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors">
                  <Eye className="h-4 w-4" />
                </button>
                <button
                  onClick={() => dispatch(toggleVendorStatus(vendor._id))}
                  className={`w-9 h-5 flex items-center rounded-full p-1 transition-colors ${
                    vendor.status === "Active" ? "bg-primary" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`bg-white w-3 h-3 rounded-full shadow-md transform transition-transform ${
                      vendor.status === "Active" ? "translate-x-4" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>
          ))}

          {filteredVendors.length === 0 && (
            <div className="py-12 text-center text-gray-500">
              No vendors found matching your criteria.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
