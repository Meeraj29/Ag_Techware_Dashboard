"use client";

import React from 'react';
import { useSelector } from 'react-redux';
import { ReportsState } from '../../types/reports';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export function ClearanceStatus() {
  const data = useSelector((state: { reports: ReportsState }) => state.reports.clearanceStatus);

  return (
    <div className="bg-white rounded-[24px] p-6 shadow-sm flex flex-col min-h-[350px] lg:h-[400px]">
      <h2 className="font-semibold text-[20px] text-[#191B24] mb-6 whitespace-nowrap">Clearance Status</h2>
      <div className="flex-1 flex flex-col xl:flex-row items-center justify-between gap-4 xl:gap-6 relative min-h-0 w-full">
        <div className="w-[160px] h-[160px] shrink-0 relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={[{ value: 100 }]}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={76}
                paddingAngle={0}
                dataKey="value"
                stroke="none"
              >
                <Cell fill="#0F766E" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[24px] font-semibold text-[#191B24]">84%</span>
            <span className="text-[16px] text-[#424656]">Efficiency</span>
          </div>
        </div>
        
        <div className="flex-1 w-full max-w-[280px] xl:max-w-none mx-auto flex flex-col justify-center gap-3 px-2">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-[14px] font-medium text-[#191B24]">{item.name}</span>
              </div>
              <span className="text-[14px] font-bold text-[#191B24]">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
