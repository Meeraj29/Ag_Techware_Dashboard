"use client";

import React from "react";
import { useSelector } from "react-redux";
import { ReportsState } from "../../types/reports";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

export function ShipmentTrends() {
	const trends = useSelector(
		(state: { reports: ReportsState }) => state.reports.trends,
	);

	return (
		<div className="bg-white rounded-[24px] p-6 shadow-sm flex flex-col h-[400px]">
			<div className="flex justify-between items-center mb-6">
				<h2 className="font-bold text-lg text-gray-800">Shipment Trends</h2>
				<div className="flex gap-4 items-center">
					<div className="flex items-center gap-1.5">
						<div className="w-2.5 h-2.5 rounded-full bg-[#0047FF]"></div>
						<span className="text-xs font-medium text-gray-600">
							This Month
						</span>
					</div>
					<div className="flex items-center gap-1.5">
						<div className="w-2.5 h-2.5 rounded-full bg-[#C1D2FF]"></div>
						<span className="text-xs font-medium text-gray-600">
							Last Month
						</span>
					</div>
				</div>
			</div>
			<div className="flex-1 w-full min-h-0">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart data={trends} barGap={4}>
						<XAxis
							dataKey="day"
							axisLine={false}
							tickLine={false}
							tick={{ fill: "#9CA3AF", fontSize: 12 }}
							dy={10}
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
							dataKey="lastMonth"
							fill="#C1D2FF"
							radius={[4, 4, 0, 0]}
							barSize={24}
						/>
						<Bar
							dataKey="thisMonth"
							fill="#0047FF"
							radius={[4, 4, 0, 0]}
							barSize={24}
						/>
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
