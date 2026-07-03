"use client";

import { useAppSelector } from "../../redux/hooks";

export default function VGMOverview() {
  const stats = useAppSelector((state) => state.vgm.stats);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {/* Card 1 */}
      <div className="bg-[#F4F4F4] rounded-[16px] p-4 flex flex-col justify-between min-h-[110px]">
        <div>
          <h2 className="text-[26px] font-semibold text-[#000000] leading-tight">{stats.totalContainers.toLocaleString('en-US')}</h2>
        </div>
        <div className="flex justify-between items-end mt-2">
          <p className="text-[16px] text-[#000000] font-medium">Total Containers</p>
          <span className="bg-[#248F5F66] text-[#10B981] text-[12px] font-medium px-2.5 py-1 rounded-full">+12%</span>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-[#F4F4F4] rounded-[16px] p-4 flex flex-col justify-between min-h-[110px]">
        <div>
          <h2 className="text-[26px] font-semibold text-[#000000] leading-tight">{stats.calculatedToday.toLocaleString('en-US')}</h2>
        </div>
        <div className="flex justify-between items-end mt-2">
          <p className="text-[16px] text-[#000000] font-medium">VGM Calculated Today</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-[#F4F4F4] rounded-[16px] p-4 flex flex-col justify-between min-h-[110px]">
        <div>
          <h2 className="text-[26px] font-semibold text-[#000000] leading-tight">{stats.exportedRecords.toLocaleString('en-US')}</h2>
        </div>
        <div className="flex justify-between items-end mt-2">
          <p className="text-[16px] text-[#000000] font-medium">Exported Records</p>
        </div>
      </div>
    </div>
  );
}
