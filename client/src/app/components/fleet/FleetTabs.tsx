'use client';

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setActiveTab } from "../../redux/features/fleetSlice";

const tabs = [
  "Vehicles",
  "Trip Management",
  "Purchase Orders",
  "Fastag & Expenses",
  "Maintenance",
  "Tire Management",
  "Document & Compliance",
  "Drivers",
];

export default function FleetTabs() {
  const dispatch = useDispatch();
  const activeTab = useSelector((state: RootState) => state.fleet.activeTab);

  return (
    <div className="mt-5 overflow-x-auto scrollbar-hide">
      <div className="flex min-w-max items-center gap-1 rounded-xl bg-gray-50 p-1.5">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => dispatch(setActiveTab(tab))}
              className={`rounded-lg px-4 py-2 text-xs font-medium transition-all ${
                isActive 
                  ? "bg-[#0b57d0] text-white shadow-sm" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>
    </div>
  );
}