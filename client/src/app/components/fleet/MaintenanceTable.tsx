"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
	UserRoundPlus,
	FileText,
	ChevronLeft,
	ChevronRight,
} from "lucide-react";

const STATUS_STYLES: Record<string, string> = {
	Overdue: "bg-red-50 text-red-500 border border-red-100",
	"In Progress": "bg-blue-50 text-blue-500 border border-blue-100",
	Scheduled: "bg-gray-100 text-gray-500 border border-gray-200",
};

export default function MaintenanceTable() {
	const { maintenanceRecords, searchQuery, typeFilter, statusFilter } =
		useSelector((state: RootState) => state.fleet);

	const filteredRecords = maintenanceRecords.filter((record) => {
		const q = searchQuery.toLowerCase();
		const matchesSearch =
			record.vehicleNumber.toLowerCase().includes(q) ||
			record.serviceCenter.toLowerCase().includes(q) ||
			record.serviceType.toLowerCase().includes(q);
		const matchesType =
			typeFilter === "All Types" ||
			typeFilter === "All" ||
			record.serviceType.toLowerCase().includes(typeFilter.toLowerCase());
		const matchesStatus =
			statusFilter === "Status: All" ||
			statusFilter === "All" ||
			record.status === statusFilter.replace("Status: ", "");
		return matchesSearch && matchesType && matchesStatus;
	});

	return (
		<div className="overflow-x-auto pb-4 scrollbar-hide">
			<div className="min-w-[1100px]">
				{/* ── Table Header ── */}
				<div className="grid grid-cols-[170px_160px_130px_120px_180px_130px_110px_100px] gap-3 py-3 px-4 bg-gray-50 rounded-t-xl text-[11px] font-bold text-gray-500 uppercase tracking-wide items-center">
					<div>Po Number</div>
					<div>Vendor</div>
					<div>Category</div>
					<div>Amount</div>
					<div>Status</div>
					<div>Delivery Date</div>
					<div>Actions</div>
					<div className="text-right">Actions</div>
				</div>

				{/* ── Rows ── */}
				<div className="divide-y divide-gray-100">
					{filteredRecords.map((record) => (
						<div
							key={record.id}
							className="grid grid-cols-[170px_160px_130px_120px_180px_130px_110px_100px] gap-3 py-3.5 px-4 items-center text-xs text-gray-600 hover:bg-gray-50/60 transition-colors"
						>
							{/* Po Number */}
							<div className="font-bold text-blue-600 hover:underline cursor-pointer truncate">
								{record.vehicleNumber}
							</div>

							{/* Vendor = serviceType */}
							<div className="font-medium text-gray-700 truncate">
								{record.serviceType}
							</div>

							{/* Category = serviceDate */}
							<div className="text-gray-500">{record.serviceDate}</div>

							{/* Amount = mileage */}
							<div className="text-gray-600 font-medium">{record.mileage}</div>

							{/* Status = serviceCenter + badge */}
							<div className="flex flex-col gap-1">
								<span className="text-gray-700 font-medium truncate text-[11px]">
									{record.serviceCenter}
								</span>
								<span
									className={`inline-flex items-center gap-1 self-start rounded-full px-2 py-0.5 text-[10px] font-semibold ${
										STATUS_STYLES[record.status] ?? STATUS_STYLES.Scheduled
									}`}
								>
									<span className="h-1.5 w-1.5 rounded-full bg-current" />
									{record.status}
								</span>
							</div>

							{/* Delivery Date = cost */}
							<div className="text-gray-900 font-semibold">{record.cost}</div>

							{/* Action 1: assign member */}
							<div className="flex items-center gap-1.5">
								<button
									title="Assign Member"
									className="rounded-lg p-2 bg-[#f5f6f7] text-gray-500 hover:bg-gray-200 transition-colors"
								>
									<UserRoundPlus className="h-3.5 w-3.5" />
								</button>
							</div>

							{/* Action 2: view document */}
							<div className="flex items-center justify-end gap-1.5">
								<button
									title="View Document"
									className="rounded-lg p-2 bg-[#f5f6f7] text-gray-500 hover:bg-gray-200 transition-colors"
								>
									<FileText className="h-3.5 w-3.5" />
								</button>
							</div>
						</div>
					))}

					{filteredRecords.length === 0 && (
						<div className="py-12 text-center text-sm text-gray-400">
							No maintenance records found matching your filters.
						</div>
					)}
				</div>

				{/* ── Pagination ── */}
				<div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs font-medium text-gray-400 px-2">
					<div>
						Showing 1–{filteredRecords.length} Of {maintenanceRecords.length}{" "}
						Vehicles
					</div>
					<div className="inline-flex items-center gap-1">
						<button className="rounded-lg border border-gray-200 p-2 text-gray-400 hover:bg-gray-50 transition-colors">
							<ChevronLeft className="h-4 w-4" />
						</button>
						<span className="rounded-lg border border-gray-200 px-3 py-2 text-gray-700 bg-gray-50 font-bold">
							1
						</span>
						<button className="rounded-lg border border-gray-200 p-2 text-gray-400 hover:bg-gray-50 transition-colors">
							<ChevronRight className="h-4 w-4" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
