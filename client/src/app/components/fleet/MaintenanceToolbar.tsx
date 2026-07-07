"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
	setSearchQuery,
	setTypeFilter,
	setStatusFilter,
} from "../../redux/features/fleetSlice";
import { Search, ChevronDown } from "lucide-react";
import { useMemo } from "react";

export default function MaintenanceToolbar() {
	const dispatch = useDispatch();
	const { searchQuery, typeFilter, statusFilter, maintenanceRecords } = useSelector(
		(state: RootState) => state.fleet,
	);

	const typeOptions = useMemo(() => {
		const types = new Set(maintenanceRecords.map((r) => r.serviceType));
		return ["All Types", ...Array.from(types)];
	}, [maintenanceRecords]);

	const statusOptions = useMemo(() => {
		const statuses = new Set(maintenanceRecords.map((r) => r.status));
		return ["Status: All", ...Array.from(statuses)];
	}, [maintenanceRecords]);

	return (
		<div className="flex flex-col gap-4 py-5 lg:flex-row lg:items-center lg:justify-between">
			<div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:items-center gap-3 w-full lg:w-auto">
				<div className="relative w-full col-span-2 md:col-span-1 lg:w-64">
					<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
						<Search className="h-4 w-4 text-gray-500" />
					</div>
					<input
						type="text"
						value={searchQuery}
						onChange={(e) => dispatch(setSearchQuery(e.target.value))}
						placeholder="Global search..."
						className="w-full rounded-xl border border-transparent bg-[#F1F1F1] py-2.5 pl-10 pr-4 text-sm text-[#000000B2] font-regular outline-none transition focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary"
					/>
				</div>

				<div className="relative w-full">
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

				<div className="relative w-full">
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
			</div>

			<div className="flex flex-wrap gap-3 justify-start lg:justify-end">
				<button
					className="rounded-md px-8 py-2 text-sm font-medium border border-[#0c599b] text-[#0c599b] hover:bg-gradiate hover:text-white transition-colors"
				>
					Export
				</button>
				<button
					className="rounded-md px-6 py-2 text-sm font-medium bg-gradiate text-white hover:bg-[#09477d] transition-colors"
				>
					Schedule Service
				</button>
			</div>
		</div>
	);
}
