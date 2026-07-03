"use client";

import { TAB_ORDER } from "../../../dashboard/vendors/create/page";

interface Props {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function CreateVendorTabs({ activeTab, setActiveTab }: Props) {
  return (
    <div className="bg-white rounded-t-xl shrink-0">
      <div className="flex items-center overflow-x-auto scrollbar-hide gap-12 px-6 pt-4 pb-4">
        {TAB_ORDER.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-base cursor-pointer transition-colors relative whitespace-nowrap ${isActive ? "text-[#04458B] font-normal" : "text-black hover:text-gray-700"
                }`}
            >
              {tab}
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full z-10" />
              )}
            </button>
          );
        })}
      </div>
      {/* Border with gap at both ends */}
      <div className="px-6">
        <div className="border-b border-gray-200"></div>
      </div>
    </div>
  );
}
