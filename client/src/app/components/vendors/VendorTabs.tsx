"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setActiveTab } from "../../redux/features/vendor/vendorSlice";

const tabs = ["All", "Active", "Quoted", "DNU", "Lead", "In Active"];

export default function VendorTabs() {
  const dispatch = useDispatch();
  const activeTab = useSelector((state: RootState) => state.vendor.activeTab);

  return (
    <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide border-b border-gray-100 bg-white px-6 pt-4 shrink-0">
      {tabs.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <button
            key={tab}
            onClick={() => dispatch(setActiveTab(tab))}
            className={`px-6 pb-4 text-base font-normal cursor-pointer transition-colors relative ${isActive ? "text-[#000000CC] " : "text-primary font-semibold hover:text-primary"
              }`}
          >
            {tab}
            {isActive && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full" />
            )}
          </button>
        );
      })}
    </div>
  );
}
