"use client";

import { Bell, Star, TrendingDown, AlertCircle } from "lucide-react";

export default function SalesKPIs() {
	const kpis = [
		{
			id: 1,
			value: "142",
			label: "Total Active Quotes",
			icon: Bell,
			change: "+12%",
			isPositive: true,
		},
		{
			id: 2,
			value: "68%",
			label: "Conversion Rate",
			icon: Star,
			change: "+4%",
			isPositive: true,
		},
		{
			id: 3,
			value: "₹14,250",
			label: "Avg Quote Value",
			icon: TrendingDown,
			change: "-12%",
			isPositive: false,
		},
		{
			id: 4,
			value: "24",
			label: "Pending Approvals",
			icon: AlertCircle,
		},
	];

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 mb-3 mt-3">
			{kpis.map((kpi) => (
				<div
					key={kpi.id}
					className="bg-[#F4F4F4] border border-[#EDEDED] rounded-xl p-4 sm:p-5 md:p-6 min-h-auto relative flex flex-col justify-between transition-all duration-200 hover:shadow-sm"
				>
					<div className="flex justify-between items-start gap-2 h-full">
						<div className="flex flex-col h-full justify-between">
							<h2 className="text-2xl sm:text-3xl font-semibold text-black mb-2">
								{kpi.value}
							</h2>
							<p className="text-sm sm:text-base font-medium text-black mt-4 sm:mt-6">
								{kpi.label}
							</p>
						</div>

						<div className="flex flex-col items-center justify-between h-full min-h-18">
							<div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200/60 flex items-center justify-center shrink-0">
								<kpi.icon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
							</div>
							{kpi.change && (
								<div
									className={`px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium whitespace-nowrap mt-2 ${kpi.isPositive
										? "bg-[#248F5F66] text-[#005C3D]"
										: "bg-[#DC9C9C] text-[#880000]"
										}`}
								>
									{kpi.change}
								</div>
							)}
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
