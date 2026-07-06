"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
	setSalesSearchQuery,
	setSalesDateRange,
	setSalesStatusFilter,
	setSalesModeFilter,
} from "../../redux/features/sales/salesSlice";

export default function SalesToolbar() {
	const dispatch = useDispatch();
	const filters = useSelector((state: RootState) => state.sales.filters);

	return (
		<div className="flex flex-col gap-4 mb-6 pt-6 px-6">
			<h2 className="text-xl font-semibold text-black">Quote management</h2>

			<div className="flex flex-col sm:flex-row justify-between items-center gap-4">
				{/* Search */}
				<div className="relative w-full max-w-sm">
					<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
						<Search className="h-4 w-4 text-gray-400" />
					</div>
					<input
						type="text"
						value={filters.searchQuery}
						onChange={(e) => dispatch(setSalesSearchQuery(e.target.value))}
						placeholder="Search by Quote ID, Customer, or Route..."
						className="block w-full pl-10 pr-4 py-4 border border-transparent rounded-2xl bg-[#F2F2F2] text-base text-gray-900 focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white outline-none transition-all"
					/>
				</div>

				{/* Filters */}
				<div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
					<select
						value={filters.dateRange}
						onChange={(e) => dispatch(setSalesDateRange(e.target.value))}
						className="appearance-none bg-white border border-gray-200 rounded-md text-sm font-medium text-black hover:bg-gray-50 transition-colors px-4 py-2.5 pr-8 focus:outline-none focus:ring-1 focus:ring-primary bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-size-[16px_16px] bg-no-repeat bg-position-[right_12px_center]"
					>
						<option value="Last 30 Days">Last 30 Days</option>
						<option value="Last 7 Days">Last 7 Days</option>
						<option value="Last Year">Last Year</option>
					</select>

					<select
						value={filters.status}
						onChange={(e) => dispatch(setSalesStatusFilter(e.target.value))}
						className="appearance-none bg-white border border-gray-200 rounded-md text-sm font-medium text-black hover:bg-gray-50 transition-colors px-4 py-2.5 pr-8 focus:outline-none focus:ring-1 focus:ring-primary bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-size-[16px_16px] bg-no-repeat bg-position-[right_12px_center]"
					>
						<option value="All">Status: All</option>
						<option value="Approved">Approved</option>
						<option value="Pending">Pending</option>
						<option value="Draft">Draft</option>
						<option value="Rejected">Rejected</option>
						<option value="Converted To Job">Converted To Job</option>
					</select>

					<select
						value={filters.mode}
						onChange={(e) => dispatch(setSalesModeFilter(e.target.value))}
						className="appearance-none bg-white border border-gray-200 rounded-md text-sm font-medium text-black hover:bg-gray-50 transition-colors px-4 py-2.5 pr-8 focus:outline-none focus:ring-1 focus:ring-primary bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-size-[16px_16px] bg-no-repeat bg-position-[right_12px_center]"
					>
						<option value="Air/Ocean">Mode: Air/Ocean</option>
						<option value="Air">Air</option>
						<option value="Ocean">Ocean</option>
					</select>

					<button className="flex items-center gap-2 px-4 py-2.5 bg-white text-primary text-sm font-medium hover:bg-primary/5 transition-colors rounded-md cursor-pointer">
						<SlidersHorizontal className="h-4 w-4" />
						Advanced Filters
					</button>
				</div>
			</div>
		</div>
	);
}
