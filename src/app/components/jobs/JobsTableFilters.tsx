import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";

export default function JobsTableFilters() {
	return (
		<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 py-4 px-6 border-b border-gray-100">
			{/* Search Bar */}
			<div className="relative w-full lg:w-80">
				<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
					<Search className="h-4 w-4 text-gray-400" />
				</div>
				<input
					type="text"
					className="block w-full pl-10 pr-3 py-4 border border-gray-200 rounded-lg text-sm bg-[#F8F9FA] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
					placeholder="Search by job ID, etc."
				/>
			</div>

			{/* Filters */}
			<div className="flex flex-wrap items-center gap-3">
				<button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
					Last 30 Days
					<ChevronDown className="h-4 w-4 text-gray-500" />
				</button>
				<button className="flex items-center bg-[#F8FAFC] gap-2 px-3 py-1.5 border border-gray-200 rounded-md  text-sm font-medium text-gray-700 hover:bg-gray-50">
					Status: All
					<ChevronDown className="h-4 w-4 text-gray-500" />
				</button>
				<button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-md bg-[#F8FAFC] text-sm font-medium text-gray-700 hover:bg-gray-50">
					Category: All
					<ChevronDown className="h-4 w-4 text-gray-500" />
				</button>
				<button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-md bg-[#F8FAFC] text-sm font-medium text-gray-700 hover:bg-gray-50">
					Risk indicator: All
					<ChevronDown className="h-4 w-4 text-gray-500" />
				</button>

				<div className="h-6 w-px bg-gray-200 mx-1"></div>

				<button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-[#075FB7] hover:bg-blue-50 rounded-md transition-colors">
					<SlidersHorizontal className="h-4 w-4" />
					Advance
				</button>
			</div>
		</div>
	);
}
