"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setActiveTab } from "../../redux/features/transportationSlice";

const tabs = [
  { name: "All Shipments", count: "253" },
  { name: "Scheduled Pickup", count: "142" },
  { name: "In-Transit", count: "42" },
  { name: "Delayed", count: "12" },
  { name: "Out For Delivery", count: "123" },
  { name: "Completed", count: "156" },
  { name: "Dry port Transport", count: "02" },
];

export default function TransportationTabs() {
  const dispatch = useDispatch();
  const activeTab = useSelector((state: RootState) => state.transportation.activeTab);

  return (
    <div className="px-4 py-4 border-b border-gray-100 bg-gray-50/50 rounded-t-xl overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex items-center gap-2 w-full min-w-max bg-[#F4F4F4] h-12 rounded-sm px-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.name;
          return (
            <button
              key={tab.name}
              onClick={() => dispatch(setActiveTab(tab.name))}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-gradiate text-white"
                  : "bg-transparent text-[#000000CC] hover:bg-gray-100"
              }`}
            >
              {tab.name}
              <span
                className={`text-[11px] px-2 py-0.5 rounded-full ${
                  tab.name === "Delayed"
                    ? "bg-[#BA1A1A] text-white"
                    : isActive 
                      ? "bg-white text-black" 
                      : "bg-[#CBCBCB] text-[#000000]"
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
