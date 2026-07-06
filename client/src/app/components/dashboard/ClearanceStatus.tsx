"use client";
import React from 'react';
import { useAppSelector } from '../../redux/hooks';

export default function ClearanceStatus() {
  const status = useAppSelector((state) => state.dashboard.clearanceStatus);

  return (
    <div className="bg-white rounded-xl p-5">
      <h2 className="text-base font-semibold text-black mb-6">Custom Clearance Team Status</h2>

      <div className="space-y-6">
        <div>
          <div className="flex justify-between items-end mb-2">
            <span className="text-base font-medium text-black">Cleared (48h)</span>
            <span className="text-lg font-bold text-[#059669]">{status.cleared48h}</span>
          </div>
          <div className="h-2 w-full bg-[#E3E3E3] rounded-full overflow-hidden">
            <div className="h-full bg-[#10B981] rounded-full" style={{ width: '85%' }}></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-end mb-2">
            <span className="text-base font-medium text-black">Held / Flagged</span>
            <span className="text-lg font-bold text-[#BA1A1A]">{status.heldFlagged}</span>
          </div>
          <div className="h-2 w-full bg-[#E3E3E3] rounded-full overflow-hidden">
            <div className="h-full bg-[#BA1A1A] rounded-full" style={{ width: '15%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
