"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Eye, Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function DriverTable() {
	const { driverRecords, searchQuery, typeFilter, statusFilter } = useSelector(
		(state: RootState) => state.fleet,
	);

	const filteredRecords = driverRecords.filter((record) => {
		const matchesSearch = record.name.toLowerCase().includes(searchQuery.toLowerCase()) || record.driverId.toLowerCase().includes(searchQuery.toLowerCase());
		const matchesType = typeFilter === "All" || typeFilter === "All Types" ||
			(typeFilter === "Assigned" && record.assignedVehicle !== "Unassigned") ||
			(typeFilter === "Unassigned" && record.assignedVehicle === "Unassigned");
		const matchesStatus = statusFilter === "All" || statusFilter === "Status: All" || record.status === statusFilter.replace("Status: ", "");
		return matchesSearch && matchesType && matchesStatus;
	});

	return (
		<div className="overflow-x-auto pb-6 scrollbar-hide">
			<div className="min-w-[1000px]">
				<div className="grid grid-cols-[200px_160px_160px_180px_140px_100px_100px_80px] gap-4 py-3 px-4 bg-gray-50 rounded-t-xl text-xs font-bold text-gray-500 items-center">
					<div>Driver Name</div>
					<div>Contact</div>
					<div>Assigned Vehicle</div>
					<div>License Expiry</div>
					<div>Status</div>
					<div>Trips</div>
					<div>Rating</div>
					<div className="text-right">Actions</div>
				</div>

				<div className="divide-y divide-gray-100">
					{filteredRecords.map((record) => (
						<div
							key={record.id}
							className="grid grid-cols-[200px_160px_160px_180px_140px_100px_100px_80px] gap-4 py-3.5 px-4 items-center text-xs text-gray-600 hover:bg-gray-50/50"
						>
							<div>
								<p className="font-bold text-gray-950">{record.name}</p>
								<p className="text-[10px] text-gray-400 font-medium mt-0.5">
									ID: {record.driverId}
								</p>
							</div>
							<div className="text-gray-700 font-medium">{record.contact}</div>
							<div
								className={`font-semibold ${record.assignedVehicle === "Unassigned" ? "text-gray-400" : "text-blue-600 hover:underline cursor-pointer"}`}
							>
								{record.assignedVehicle}
							</div>
							<div>
								<p
									className={`font-semibold ${record.isLicenseOverdue ? "text-red-500" : "text-gray-950"}`}
								>
									{record.licenseExpiry}
								</p>
								<p className="text-[9px] text-gray-400 font-semibold mt-0.5">
									{record.licenseExpiryDetail}
								</p>
							</div>
							<div>
								<span
									className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-bold text-[9px] tracking-wide ${record.status === "Assigned"
											? "bg-blue-50 text-blue-600"
											: record.status === "Available"
												? "bg-emerald-50 text-emerald-600"
												: "bg-orange-50 text-orange-600"
										}`}
								>
									<span className="h-1.5 w-1.5 rounded-full bg-current" />
									{record.status}
								</span>
							</div>
							<div className="text-gray-900 font-bold">{record.trips}</div>
							<div className="flex items-center gap-1 font-bold text-gray-900">
								<Star className="h-3 w-3 text-amber-500 fill-amber-500" />
								{record.rating}
							</div>
							<div className="flex items-center justify-end">
								<button className="rounded-lg p-2 bg-[#f5f6f7] text-gray-500 hover:bg-gray-200">
									<Eye className="h-3.5 w-3.5" />
								</button>
							</div>
						</div>
					))}

					{filteredRecords.length === 0 && (
						<div className="py-12 text-center text-gray-500">
							No drivers found matching your filters.
						</div>
					)}
				</div>

				<div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs font-medium text-gray-500 px-2">
					{/* Keep footer total matching design */}
					<div>
						Showing 1-{filteredRecords.length} Of 142 Documents & Compliance
					</div>
					<div className="inline-flex items-center gap-1">
						<button className="rounded-lg border border-gray-200 p-2 text-gray-400 hover:bg-gray-50">
							<ChevronLeft className="h-4 w-4" />
						</button>
						<span className="rounded-lg border border-gray-200 px-3 py-2 text-gray-700 bg-gray-50 font-bold">
							1
						</span>
						<button className="rounded-lg border border-gray-200 p-2 text-gray-400 hover:bg-gray-50">
							<ChevronRight className="h-4 w-4" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
