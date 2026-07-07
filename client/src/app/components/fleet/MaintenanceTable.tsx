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
	Overdue: "bg-[#FFD7D7] text-[#880000]",
	"In Progress": "bg-[#054B9421] text-primary",
	Scheduled: "bg-[#EDEDED] text-[#5C5C5C]",
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
		<div className="overflow-x-auto pb-2 scrollbar-hide">
			<div className="min-w-full inline-block align-middle">
				<table className="min-w-full whitespace-nowrap text-left border-collapse">
					{/* ── Table Header ── */}
					<thead className="bg-[#F4F4F4] text-sm font-semibold text-[#4F4F4F]">
						<tr>
							<th className="py-2.5 px-4 rounded-tl-xl font-medium">Po Number</th>
							<th className="py-2.5 px-4 font-medium">Type</th>
							<th className="py-2.5 px-4 font-medium">Due Date</th>
							<th className="py-2.5 px-4 font-medium">Odometer</th>
							<th className="py-2.5 px-4 font-medium">Service Center</th>
							<th className="py-2.5 px-4 font-medium">Status</th>
							<th className="py-2.5 px-4 font-medium">Cost</th>
							<th className="py-2.5 px-4 text-right rounded-tr-xl font-medium">Actions</th>
						</tr>
					</thead>

					{/* ── Rows ── */}
					<tbody className="divide-y divide-gray-100">
						{filteredRecords.map((record) => (
							<tr
								key={record.id}
								className="text-sm text-gray-600 hover:bg-gray-50/60 transition-colors"
							>
								{/* Po Number */}
								<td className="py-2.5 px-4 font-medium text-[#3525CD] hover:underline cursor-pointer truncate max-w-[170px]">
									{record.vehicleNumber}
								</td>

								{/* Type = serviceType */}
								<td className="py-2.5 px-4 font-medium text-[#000000CC] truncate max-w-[160px]">
									{record.serviceType}
								</td>

								{/* Due Date = serviceDate */}
								<td className="py-2.5 px-4 text-[#000000CC]">{record.serviceDate}</td>

								{/* Odometer = mileage */}
								<td className="py-2.5 px-4 text-[#000000CC] font-medium">{record.mileage}</td>

								{/* Status = serviceCenter (Text) */}
								<td className="py-2.5 px-4 text-[#000000CC]">
									<span className="truncate max-w-[180px] block">
										{record.serviceCenter}
									</span>
								</td>

								{/* Status = Badge */}
								<td className="py-2.5 px-4">
									<span
										className={`inline-flex items-center gap-1.5 self-start rounded-full px-2.5 py-1 text-[11px] font-medium ${
											STATUS_STYLES[record.status] ?? STATUS_STYLES.Scheduled
										}`}
									>
										<span className="h-1.5 w-1.5 rounded-full bg-current" />
										{record.status}
									</span>
								</td>

								{/* Cost */}
								<td className="py-2.5 px-4 text-[#000000CC] font-medium">{record.cost}</td>

								{/* Actions = Icons */}
								<td className="py-2.5 px-4">
									<div className="flex items-center justify-end gap-2">
										<button
											title="Assign Member"
											className="rounded-lg p-2 bg-[#E6E6E6] text-[#000000] hover:bg-[#E5E5E5] transition-colors"
										>
											<UserRoundPlus className="h-[15px] w-[15px]" />
										</button>
										<button
											title="View Document"
											className="rounded-lg p-2 bg-[#E6E6E6] text-[#000000] hover:bg-[#E5E5E5] transition-colors"
										>
											<FileText className="h-[15px] w-[15px]" />
										</button>
									</div>
								</td>
							</tr>
						))}

						{filteredRecords.length === 0 && (
							<tr>
								<td colSpan={8} className="py-12 text-center text-sm text-gray-400">
									No maintenance records found matching your filters.
								</td>
							</tr>
						)}
					</tbody>
				</table>

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
