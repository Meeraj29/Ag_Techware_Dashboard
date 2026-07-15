"use client";

import { Search, ChevronDown, SlidersHorizontal } from "lucide-react";

export default function TrackingToolbar() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
			{/* Search Bar */}
			<div className="relative w-full md:w-[450px]">
				<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
					<Search className="h-4 w-4 text-gray-900" />
				</div>
				<input
					type="text"
					placeholder="Search Shipment by ID, customer, or route..."
					className="w-full pl-10 pr-4 py-2.5 bg-[#F1F1F1] border-none rounded-lg text-sm text-black focus:outline-none focus:ring-1 focus:ring-primary"
				/>
			</div>

			{/* Filters */}
			<div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto [scrollbar-width:none]">
				<div className="relative shrink-0">
					<select className="appearance-none bg-white border border-gray-200 rounded-lg py-2 pl-3 pr-8 text-xs font-medium text-black focus:outline-none focus:border-primary cursor-pointer">
						<option>Status: All</option>
						<option>In Transit</option>
						<option>Delayed</option>
						<option>At Port</option>
						<option>Cleared</option>
					</select>
					<div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
						<ChevronDown className="w-4 h-4 text-gray-900" />
					</div>
				</div>

				<div className="relative shrink-0">
					<select className="appearance-none bg-white border border-gray-200 rounded-lg py-2 pl-3 pr-8 text-xs font-medium text-black focus:outline-none focus:border-primary cursor-pointer">
						<option>Last 30 Days</option>
						<option>Last 7 Days</option>
						<option>This Year</option>
					</select>
					<div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
						<ChevronDown className="w-4 h-4 text-gray-900" />
					</div>
				</div>

				<button className="flex items-center gap-2 px-3 py-2 text-sm font-regular text-[#044890] rounded-lg shrink-0 transition-colors">
					<SlidersHorizontal className="w-3.5 h-3.5" />
					Advanced Filters
				</button>
			</div>
		</div>
	);
}
