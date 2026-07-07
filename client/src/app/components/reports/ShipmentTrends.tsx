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
		<div className="bg-white rounded-[24px] p-6 shadow-sm flex flex-col min-h-[300px] lg:h-[400px]">
			<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
				<h2 className="font-semibold text-[20px] text-[#191B24]">Shipment Trends</h2>
				<div className="flex gap-4 items-center">
					<div className="flex items-center gap-1.5">
						<div className="w-2.5 h-2.5 rounded-full bg-[#004BCA]"></div>
						<span className="text-[12px] font-medium text-[#424656]">This Month</span>
					</div>
					<div className="flex items-center gap-1.5">
						<div className="w-2.5 h-2.5 rounded-full bg-[#C2C6D9]"></div>
						<span className="text-[12px] font-medium text-[#424656]">Last Month</span>
					</div>
				</div>
			</div>
			<div className="w-full h-[250px] lg:h-[300px]">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart data={trends} barGap={4}>
						<XAxis
							dataKey="day"
							axisLine={false}
							tickLine={false}
							tick={{ fill: 'rgba(0, 0, 0, 0.7)', fontSize: 12 }}
							dy={10}
						/>
						<Tooltip
							cursor={{ fill: 'transparent' }}
							contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
						/>
						<Bar dataKey="lastMonth" fill="#C1D2FF" radius={[2, 2, 0, 0]} maxBarSize={24} />
						<Bar dataKey="thisMonth" fill="#0047FF" radius={[2, 2, 0, 0]} maxBarSize={24} />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
