"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setActiveTab } from "../../redux/features/vendorSlice";

const tabs = ["All", "Active", "Quoted", "DNU", "Lead", "In Active"];

export default function VendorTabs() {
  const dispatch = useDispatch();
  const activeTab = useSelector((state: RootState) => state.vendor.activeTab);

  return (
    <div className="flex items-center justify-start gap-16 px-6 pt-4 border-b border-gray-200">
      {tabs.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <button
            key={tab}
            onClick={() => dispatch(setActiveTab(tab))}
            className={`pb-4 text-sm font-semibold cursor-pointer transition-colors relative ${isActive ? "text-primary" : "text-primary/70 hover:text-primary"
              }`}
          >
            {tab}
            {isActive && (
              <div className="absolute bottom-0 left-0 cursor-pointer right-0 h-0.5 bg-primary  rounded-t-full" />
            )}
          </button>
        );
      })}
    </div>
  );
}
