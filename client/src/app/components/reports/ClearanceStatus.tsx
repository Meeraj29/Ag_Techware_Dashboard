"use client";

import React from "react";
import { useSelector } from "react-redux";
import { ReportsState } from "../../types/reports";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export function ClearanceStatus() {
	const data = useSelector(
		(state: { reports: ReportsState }) => state.reports.clearanceStatus,
	);

	return (
		<div className="bg-white rounded-[24px] p-6 shadow-sm flex flex-col h-[400px]">
			<h2 className="font-bold text-lg text-gray-800 mb-6">Clearance Status</h2>
			<div className="flex-1 flex flex-col xl:flex-row items-center justify-between gap-4 xl:gap-6 relative min-h-0 w-full">
				<div className="w-[150px] h-[150px] shrink-0 relative">
					<ResponsiveContainer width="100%" height="100%">
						<PieChart>
							<Pie
								data={data}
								cx="50%"
								cy="50%"
								innerRadius={50}
								outerRadius={70}
								paddingAngle={0}
								dataKey="value"
								stroke="none"
							>
								{data.map((entry, index) => (
									<Cell key={`cell-${index}`} fill={entry.color} />
								))}
							</Pie>
						</PieChart>
					</ResponsiveContainer>
					<div className="absolute inset-0 flex flex-col items-center justify-center">
						<span className="text-xl font-bold text-gray-800">84%</span>
						<span className="text-[10px] text-gray-500">Efficiency</span>
					</div>
				</div>

				<div className="flex-1 w-full max-w-[280px] xl:max-w-none mx-auto flex flex-col justify-center gap-3 px-2">
					{data.map((item, index) => (
						<div
							key={index}
							className="flex items-center justify-between w-full"
						>
							<div className="flex items-center gap-2">
								<div
									className="w-2 h-2 rounded-full"
									style={{ backgroundColor: item.color }}
								></div>
								<span className="text-sm font-medium text-gray-700">
									{item.name}
								</span>
							</div>
							<span className="text-sm font-bold text-gray-800">
								{item.value}%
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
