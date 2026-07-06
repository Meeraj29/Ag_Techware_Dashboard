"use client";

import React from 'react';
import { useSelector } from 'react-redux';
import { ReportsState } from '../../types/reports';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export function MonthlyVolume() {
  const data = useSelector((state: { reports: ReportsState }) => state.reports.monthlyVolume);

  const getBarColor = (index: number) => {
    const colors = [
      '#E3EEFE', // May
      '#C1DAFE', // Jun
      '#92BEFD', // Jul
      '#569FFA', // Aug
      '#1A6AF2', // Sep (1)
      '#3687F7', // Sep (2)
    ];
    return colors[index] || '#1A6AF2';
  };

  return (
    <div className="bg-white rounded-[24px] border border-gray-200 p-6 flex flex-col h-[300px]">
      <h2 className="font-semibold text-[20px] text-black mb-6">Monthly Volume</h2>
      <div className="flex-1 w-full min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={0} margin={{ bottom: 10 }}>
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#000000', opacity: 0.8, fontSize: 12, fontWeight: 500 }}
              dy={10}
            />
            <Tooltip 
              cursor={{ fill: 'transparent' }}
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Bar dataKey="volume" radius={[8, 8, 0, 0]} barSize={42}>
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={getBarColor(index)} 
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
