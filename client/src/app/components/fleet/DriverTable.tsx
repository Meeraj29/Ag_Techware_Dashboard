"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Eye, Star, ChevronLeft, ChevronRight } from "lucide-react";

const STATUS_STYLES: Record<string, string> = {
	Assigned: "bg-[#D5E3FC] text-[#004AC6]",
	Available: "bg-[#E6F4EA] text-[#137333]",
	Leave: "bg-[#FFE8CC] text-[#943700]",
};

export default function DriverTable() {
	const { driverRecords, searchQuery, typeFilter, statusFilter } = useSelector(
		(state: RootState) => state.fleet,
	);

	const filteredRecords = driverRecords.filter((record) => {
		const matchesSearch =
			record.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			record.driverId.toLowerCase().includes(searchQuery.toLowerCase());
		const matchesType =
			typeFilter === "All Types" || typeFilter === "All" ||
			(typeFilter === "Assigned" && record.assignedVehicle !== "Unassigned") ||
			(typeFilter === "Unassigned" && record.assignedVehicle === "Unassigned");
		const matchesStatus =
			statusFilter === "Status: All" || statusFilter === "All" ||
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
							<th className="py-2.5 px-4 rounded-tl-xl font-medium min-w-[200px]">Driver Name</th>
							<th className="py-2.5 px-4 font-medium ">Contact</th>
							<th className="py-2.5 px-4 font-medium ">Assigned Vehicle</th>
							<th className="py-2.5 px-4 font-medium ">License Expiry</th>
							<th className="py-2.5 px-4 font-medium ">Status</th>
							<th className="py-2.5 px-4 font-medium ">Trips</th>
							<th className="py-2.5 px-4 font-medium ">Rating</th>
							<th className="py-2.5 px-4 text-right rounded-tr-xl font-medium min-w-[80px]">Actions</th>
						</tr>
					</thead>

					{/* ── Rows ── */}
					<tbody className="divide-y divide-gray-100">
						{filteredRecords.map((record) => (
							<tr
								key={record.id}
								className="text-sm text-gray-600 hover:bg-gray-50/60 transition-colors"
							>
								{/* Driver Name */}
								<td className="py-2.5 px-4">
									<p className="font-medium text-[#000000]">{record.name}</p>
									<p className="text-[10px] text-[#515F74] font-medium mt-0.5">
										ID: {record.driverId}
									</p>
								</td>

								{/* Contact */}
								<td className="py-2.5 px-4 font-medium text-[#000000CC]">
									{record.contact}
								</td>

								{/* Assigned Vehicle */}
								<td
									className={`py-2.5 px-4 font-medium ${record.assignedVehicle === "Unassigned"
											? "text-[#515F74]"
											: "text-[#000000]"
										}`}
								>
									{record.assignedVehicle}
								</td>

								{/* License Expiry */}
								<td className="py-2.5 px-4">
									<p
										className={`font-medium ${record.isLicenseOverdue ? "text-[#93000A]" : "text-[#000000]"
											}`}
									>
										{record.licenseExpiry}
									</p>
									<p
										className={`text-[10px] font-medium mt-0.5 ${record.isLicenseOverdue ? "text-[#93000A]" : "text-[#515F74]"
											}`}
									>
										{record.licenseExpiryDetail}
									</p>
								</td>

								{/* Status pill */}
								<td className="py-2.5 px-4">
									<span
										className={`inline-flex items-center gap-1.5 self-start rounded-full px-2.5 py-1 text-[11px] font-medium tracking-wide ${STATUS_STYLES[record.status] ?? STATUS_STYLES["Available"]
											}`}
									>
										<span className="h-1.5 w-1.5 rounded-full bg-current" />
										{record.status}
									</span>
								</td>

								{/* Trips */}
								<td className="py-2.5 px-4 font-medium text-[#000000CC]">
									{record.trips}
								</td>

								{/* Rating */}
								<td className="py-2.5 px-4 font-medium text-[#000000CC]">
									<div className="flex items-center gap-1">
										<Star className="h-3 w-3 text-[#943700] fill-[#943700]" />
										{record.rating}
									</div>
								</td>

								{/* Actions */}
								<td className="py-2.5 px-4">
									<div className="flex items-center justify-end">
										<button
											title="View"
											className="rounded-lg p-2 bg-[#E6E6E6] text-[#000000] hover:bg-[#E5E5E5] transition-colors"
										>
											<Eye className="h-[15px] w-[15px]" />
										</button>
									</div>
								</td>
							</tr>
						))}

						{filteredRecords.length === 0 && (
							<tr>
								<td colSpan={8} className="py-12 text-center text-sm text-gray-400">
									No drivers found matching your filters.
								</td>
							</tr>
						)}
					</tbody>
				</table>

				{/* ── Pagination ── */}
				<div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs font-medium text-gray-400 px-2">
					<div>
						Showing 1–{filteredRecords.length} Of 142 Documents & Compliance
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
