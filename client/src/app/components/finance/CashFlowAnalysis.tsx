"use client";
import { MoreVertical, ChevronDown } from "lucide-react";

import { useAppSelector } from "../../redux/hooks";

export default function CashFlowAnalysis() {
	const chartData = useAppSelector((state) => state.finance.cashFlow);

	const yAxisLabels = ["₹1M", "₹500k", "₹100k", "₹50k", "₹10k", "₹0k"];

	return (
		<div className="flex flex-col h-full">
			<div className="flex justify-between items-center mb-6">
				<h2 className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold text-[#000000]">
					Cash Flow Analysis
				</h2>
				<div className="flex items-center gap-2 sm:gap-3">
					<div className="relative hidden sm:block">
						<select className="w-full bg-white border border-gray-200 rounded-[8px] pl-3 pr-8 py-1.5 text-[12px] sm:text-[14px] font-medium text-[#000000] appearance-none focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer">
							<option>Last 6 Months</option>
							<option>Last 3 Months</option>
							<option>This Year</option>
						</select>
						<div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-500">
							<ChevronDown className="w-4 h-4" />
						</div>
					</div>
					<button className="text-gray-500 hover:text-black">
						<MoreVertical className="w-5 h-5" />
					</button>
				</div>
			</div>

			<div className="flex-1 flex mt-2 min-h-[240px]">
				{/* Y-Axis */}
				<div className="flex flex-col justify-between items-end pr-2 sm:pr-3 py-6 border-r border-gray-100 text-[10px] sm:text-[12px] lg:text-[14px] text-[#000000] font-regular">
					{yAxisLabels.map((label, idx) => (
						<div key={idx} className="h-0 flex items-center">
							<span className="leading-none">{label}</span>
						</div>
					))}
				</div>

				{/* Chart Area */}
				<div className="flex-1 flex flex-col justify-between relative pl-2 sm:pl-6 pr-2 sm:pr-4 pb-6">
					{/* Grid lines */}
					<div className="absolute inset-0 pl-2 sm:pl-6 pb-6 pt-6 flex flex-col justify-between pointer-events-none z-0">
						{yAxisLabels.map((_, idx) => (
							<div key={idx} className="h-0 w-full flex items-center">
								<div className="w-full border-t border-gray-200"></div>
							</div>
						))}
					</div>

					{/* Bars */}
					<div className="flex-1 flex items-end justify-around relative z-10 w-full pt-6">
						{chartData.map((data, idx) => (
							<div
								key={idx}
								className="flex gap-1 items-end h-full relative group"
							>
								<div
									className="w-4 sm:w-5 md:w-8 lg:w-4 xl:w-5 2xl:w-6 bg-[#818CF8] rounded-t-sm md:rounded-t-md"
									style={{ height: `${data.inflow}%` }}
								></div>
								<div
									className="w-4 sm:w-5 md:w-8 lg:w-4 xl:w-5 2xl:w-6 bg-primary rounded-t-sm md:rounded-t-md"
									style={{ height: `${data.outflow}%` }}
								></div>

								{/* X-Axis Label */}
								<span className="absolute -bottom-6 sm:-bottom-7 left-1/2 -translate-x-1/2 text-[10px] sm:text-[12px] lg:text-[16px] text-[#000000] font-regular">
									{data.month}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Legend */}
			<div className="flex justify-center items-center gap-6 mt-6">
				<div className="flex items-center gap-2">
					<div className="w-3 h-3 rounded-sm bg-[#8B8CF8]"></div>
					<span className="text-[12px] text-gray-600 font-medium">Inflow</span>
				</div>
				<div className="flex items-center gap-2">
					<div className="w-3 h-3 rounded-sm bg-primary"></div>
					<span className="text-[12px] text-gray-600 font-medium">
						Out Flow
					</span>
				</div>
			</div>
		</div>
	);
}
