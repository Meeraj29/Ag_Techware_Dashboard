"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Package, Truck, CheckCircle, CreditCard } from "lucide-react";

interface Props {
	customerId: string;
}

export function CustomerDetailStats({ customerId }: Props) {
	const detail = useSelector(
		(state: RootState) => state.customerDetail.details[customerId],
	);
	if (!detail) return null;

	const stats = [
		{
			label: "Total Jobs",
			value: detail.totalJobs,
			trend: detail.totalJobsTrend,
			icon: <Package className="w-5 h-5 text-primary" />,
			suffix: "",
		},
		{
			label: "Active Shipments",
			value: detail.activeShipments,
			trend: detail.activeShipmentsTrend,
			icon: <Truck className="w-5 h-5 text-primary" />,
			suffix: "",
		},
		{
			label: "Completed",
			value: detail.completed,
			trend: null,
			icon: <CheckCircle className="w-5 h-5 text-primary" />,
			suffix: "",
		},
		{
			label: "Credit usage",
			value: detail.creditUsage,
			trend: null,
			icon: <CreditCard className="w-5 h-5 text-primary" />,
			suffix: "%",
		},
	];

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
			{stats.map((stat, i) => (
				<div
					key={i}
					className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex items-start gap-4 h-32 justify-between"
				>
					<div className="flex flex-col justify-between h-full">
						<div>
							<div className="flex items-center gap-2">
								<span className="text-3xl font-bold text-gray-900 leading-none">
									{stat.value}
									{stat.suffix}
								</span>
								{stat.trend && (
									<span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">
										{stat.trend}
									</span>
								)}
							</div>
						</div>
						<p className="text-xs font-bold text-gray-500 uppercase tracking-wide">
							{stat.label}
						</p>
					</div>

					<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e3e5e8] text-gray-800 shrink-0">
						{stat.icon}
					</div>
				</div>
			))}
		</div>
	);
}
