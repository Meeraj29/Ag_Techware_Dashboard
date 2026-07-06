"use client";

import React from 'react';
import { useSelector } from 'react-redux';
import { ReportsState } from '../../types/reports';

export function RevVsCost() {
  const revVsCost = useSelector((state: { reports: ReportsState }) => state.reports.revVsCost);

  if (!revVsCost) return null;

  // Let's format helper
  const formatAmount = (num: number) => {
    return `$${(num / 1000).toFixed(1).replace('.0', '')}k`;
  };

  const netRevenueStr = formatAmount(revVsCost.netRevenue);
  const operationCostStr = formatAmount(revVsCost.operationCost);

  // We can calculate percentages for progress bars
  const total = revVsCost.netRevenue + revVsCost.operationCost;
  const netRevenuePercent = (revVsCost.netRevenue / total) * 100;
  const operationCostPercent = (revVsCost.operationCost / total) * 100;

  return (
    <div className="bg-white rounded-[24px] border border-gray-200 p-6 flex flex-col justify-between h-[300px]">
      <div>
        <h2 className="font-bold text-lg text-gray-800 mb-6">Rev vs Cost</h2>
        
        {/* Net Revenue Progress */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-500">Net Revenue</span>
            <span className="text-sm font-bold text-gray-800">{netRevenueStr}</span>
          </div>
          <div className="w-full bg-gray-100 h-3.5 rounded-full overflow-hidden">
            <div 
              className="bg-[#0047FF] h-full rounded-full" 
              style={{ width: `${netRevenuePercent}%` }}
            ></div>
          </div>
        </div>

        {/* Operation Cost Progress */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-500">Operation Cost</span>
            <span className="text-sm font-bold text-gray-800">{operationCostStr}</span>
          </div>
          <div className="w-full bg-gray-100 h-3.5 rounded-full overflow-hidden">
            <div 
              className="bg-[#D1D5DB] h-full rounded-full" 
              style={{ width: `${operationCostPercent}%` }}
            ></div>
          </div>
        </div>
      </div>

      <p className="text-xs italic text-gray-400">
        *{revVsCost.efficiencyNote}*
      </p>
    </div>
  );
}
