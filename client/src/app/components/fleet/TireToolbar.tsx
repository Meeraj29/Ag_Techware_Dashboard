"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
	setSearchQuery,
	setTypeFilter,
	setStatusFilter,
	setDateRange,
} from "../../redux/features/fleetSlice";
import { Search,ChevronDown } from "lucide-react";
import { Button } from "../../ui/Button";

const typeOptions = ["All Types", "Front", "Rear Inner", "Rear Outer"];
const statusOptions = ["Status: All", "REPLACE", "MONITOR", "GOOD"];
const dateOptions = [
	"Date: Last 30 Days",
	"Date: Last 90 Days",
	"Date: This Year",
];

export default function TireToolbar() {
	const dispatch = useDispatch();
	const { searchQuery, typeFilter, statusFilter, dateRange } = useSelector(
		(state: RootState) => state.fleet,
	);

	return (
		<div className="flex flex-col gap-4 py-5 2xl:flex-row 2xl:items-center 2xl:justify-between">
			<div className="grid grid-cols-2 md:grid-cols-4 2xl:flex 2xl:items-center gap-3 w-full 2xl:w-auto">
				<div className="relative w-full col-span-2 md:col-span-1 2xl:w-64 shrink-0">
					<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
						<Search className="h-4 w-4 text-gray-500" />
					</div>
					<input
						type="text"
						value={searchQuery}
						onChange={(e) => dispatch(setSearchQuery(e.target.value))}
						placeholder="Vehicle Number..."
						className="w-full rounded-xl border border-transparent bg-[#F1F1F1] py-2.5 pl-10 pr-4 text-sm text-[#000000B2] font-regular outline-none transition focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary"
					/>
				</div>

				<div className="relative w-full min-w-[110px]">
					<select
						value={typeFilter}
						onChange={(e) => dispatch(setTypeFilter(e.target.value))}
						className="appearance-none w-full rounded-md border border-gray-200 bg-white pl-2 py-2 text-sm font-medium text-[#000000] outline-none focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer"
					>
						{typeOptions.map((option) => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</select>
					<div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
						<ChevronDown className="h-4 w-4 text-gray-700" />
					</div>
				</div>

				<div className="relative w-full min-w-[110px]">
					<select
						value={statusFilter}
						onChange={(e) => dispatch(setStatusFilter(e.target.value))}
						className="appearance-none w-full rounded-md border border-gray-200 bg-white pl-2 pr-8 py-2 text-sm font-medium text-[#000000] outline-none focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer"
					>
						{statusOptions.map((option) => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</select>
					<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
						<ChevronDown className="h-4 w-4 text-gray-700" />
					</div>
				</div>

				<div className="relative w-full col-span-2 md:col-span-1 min-w-[170px]">
					<select
						value={dateRange}
						onChange={(e) => dispatch(setDateRange(e.target.value))}
						className="appearance-none w-full rounded-md border border-gray-200 bg-white pl-2 pr-8 py-2 text-sm font-medium text-[#000000] outline-none focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer"
					>
						{dateOptions.map((option) => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</select>
					<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
						<ChevronDown className="h-4 w-4 text-gray-700" />
					</div>
				</div>
			</div>

			<div className="flex flex-wrap gap-3 justify-start 2xl:justify-end shrink-0">
				<button
					className="rounded-md px-8 py-2 text-sm font-medium border border-[#0c599b] text-[#0c599b] hover:bg-gradiate hover:text-white transition-colors"
				>
					Export
				</button>
				<button
					className="rounded-md px-6 py-2 text-sm font-medium bg-gradiate text-white hover:bg-[#09477d] transition-colors"
				>
					Bulk Install
				</button>
			</div>
		</div>
	);
}
