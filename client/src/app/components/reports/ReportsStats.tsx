"use client";

import React from 'react';
import { useSelector } from 'react-redux';
import { Ship, Clock, FileText, AlertTriangle, DollarSign, AlertCircle } from 'lucide-react';
import { StatCardData, ReportsState } from '../../types/reports';

const iconMap: Record<string, React.ReactNode> = {
  ship: <Ship size={18} className="text-gray-600" />,
  clock: <Clock size={18} className="text-gray-600" />,
  file: <FileText size={18} className="text-gray-600" />,
  alert: <AlertTriangle size={18} className="text-gray-600" />,
  money: <DollarSign size={18} className="text-gray-600" />,
  exclamation: <AlertCircle size={18} className="text-gray-600" />,
};

function StatCard({ data }: { data: StatCardData }) {
  const isNeutral = data.changeType === 'neutral';
  const isPositive = data.changeType === 'increase';
  const isNegative = data.changeType === 'decrease';

  let changeBg = 'bg-gray-100';
  let changeText = 'text-gray-600';
  
  if (data.change !== '0%') {
    changeBg = isNegative ? 'bg-red-100' : 'bg-green-100';
    changeText = isNegative ? 'text-red-600' : 'text-green-600';
  }

  return (
    <div className="bg-[#F4F4F4] rounded-[24px] p-6 flex flex-col justify-between border border-[#EDEDED]">
      <div className="flex justify-between items-start">
        <h3 className="text-[26px] font-semibold text-black">{data.value}</h3>
        <div className="bg-gray-200 p-2.5 rounded-xl">
          {iconMap[data.icon]}
        </div>
      </div>
      <div className="flex justify-between items-end mt-4">
        <p className="text-[16px] font-medium text-black">{data.title}</p>
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full flex items-center ${changeBg} ${changeText}`}>
          {data.change}
          {data.change !== '0%' && (
            <svg className="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isNegative ? 'M19 9l-7 7-7-7' : 'M5 15l7-7 7 7'} />
            </svg>
          )}
        </span>
      </div>
    </div>
  );
}

export function ReportsStats() {
  const stats = useSelector((state: { reports: ReportsState }) => state.reports.stats);

  if (!stats) return null;

  const statList = [
    stats.totalShipment,
    stats.clearances,
    stats.pending,
    stats.delayed,
    stats.revenue,
    stats.activeAlerts
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {statList.map((stat, i) => (
        <StatCard key={i} data={stat} />
      ))}
    </div>
  );
}
