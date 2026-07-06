"use client";

import React from "react";
import { useSelector } from "react-redux";
import { ReportsState } from "../../types/reports";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

export function MonthlyVolume() {
  const data = useSelector(
    (state: { reports: ReportsState }) => state.reports.monthlyVolume
  );

  const getBarColor = (index: number) => {
    const colors = [
      "#DBEAFE",
      "#BFDBFE",
      "#93C5FD",
      "#60A5FA",
      "#2563EB",
      "#3B82F6",
    ];
    return colors[index] || "#1A6AF2";
  };

  return (
    <div
      className="
        bg-white
        rounded-[20px] lg:rounded-[24px]
        border border-gray-200
        p-4 sm:p-5 lg:p-6
        flex flex-col
        h-[260px] sm:h-[300px] lg:h-[270px]
        w-full
      "
    >
      <h2 className="font-semibold text-lg sm:text-xl text-[#0F172A] mb-4 sm:mb-6">
        Monthly Volume
      </h2>

      <div className="flex-1 w-full min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            barGap={0}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 10,
            }}
          >
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#000",
                opacity: 0.8,
                fontSize: 11,
                fontWeight: 500,
              }}
              dy={8}
            />

            <Tooltip
              cursor={{ fill: "transparent" }}
              contentStyle={{
                borderRadius: "8px",
                border: "none",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
              }}
            />

            <Bar
              dataKey="volume"
              radius={[4, 4, 0, 0]}
              maxBarSize={68}
            >
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