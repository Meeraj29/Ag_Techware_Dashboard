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
    <div className="bg-white rounded-[24px] border border-gray-200 p-6 flex flex-col justify-between h-auto lg:h-[270px]">
      <div>
        <h2 className="font-semibold text-[20px] text-[#0F172A] mb-6">Rev vs Cost</h2>
        
        {/* Net Revenue Progress */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[14px] font-medium text-[#64748B]">Net Revenue</span>
            <span className="text-[14px] font-bold text-[#0F172A]">{netRevenueStr}</span>
          </div>
          <div className="w-full bg-[#F1F5F9] h-[8px] rounded-full overflow-hidden">
            <div 
              className="bg-linear-to-r from-[#2563EB] to-[#228FEE] h-full rounded-full" 
              style={{ width: `${netRevenuePercent}%` }}
            ></div>
          </div>
        </div>

        {/* Operation Cost Progress */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[14px] font-medium text-[#64748B]">Operation Cost</span>
            <span className="text-[14px] font-bold text-[#0F172A]">{operationCostStr}</span>
          </div>
          <div className="w-full bg-gray-100 h-[8px] rounded-full overflow-hidden">
            <div 
              className="bg-[#CBD5E1] h-full rounded-full" 
              style={{ width: `${operationCostPercent}%` }}
            ></div>
          </div>
        </div>
      </div>

      <p className="text-[12px] italic text-[#94A3B8]">
        *{revVsCost.efficiencyNote}*
      </p>
    </div>
  );
}
