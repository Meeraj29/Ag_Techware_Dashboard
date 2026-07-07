"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Eye, FileText, ChevronLeft, ChevronRight } from "lucide-react";

const STATUS_STYLES: Record<string, string> = {
	REPLACE: "bg-[#FFD7D7] text-[#880000]",
	MONITOR: "bg-[#FFE8CC] text-[#B9471E]",
	GOOD: "bg-[#D6E4FF] text-[#2F54EB]",
};

export default function TireTable() {
	const { tireRecords, searchQuery, typeFilter, statusFilter } = useSelector(
		(state: RootState) => state.fleet,
	);

	const filteredRecords = tireRecords.filter((record) => {
		const q = searchQuery.toLowerCase();
		const matchesSearch =
			record.vehicle.toLowerCase().includes(q) ||
			record.brand.toLowerCase().includes(q) ||
			record.position.toLowerCase().includes(q);
		const matchesType =
			typeFilter === "All Types" ||
			typeFilter === "All" ||
			record.position.toLowerCase().includes(typeFilter.toLowerCase());
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
							<th className="py-2.5 px-4 rounded-tl-xl font-medium w-[160px]">Vehicle</th>
							<th className="py-2.5 px-4 font-medium w-[150px]">Position</th>
							<th className="py-2.5 px-4 font-medium w-[170px]">Brand</th>
							<th className="py-2.5 px-4 font-medium w-[120px]">Install Date</th>
							<th className="py-2.5 px-4 font-medium w-[120px]">Mileage (KM)</th>
							<th className="py-2.5 px-4 font-medium w-[130px]">Due In</th>
							<th className="py-2.5 px-4 font-medium w-[110px]">Status</th>
							<th className="py-2.5 px-4 text-right rounded-tr-xl font-medium w-[100px]">Actions</th>
						</tr>
					</thead>

					{/* ── Rows ── */}
					<tbody className="divide-y divide-gray-100">
						{filteredRecords.map((record) => (
							<tr
								key={record.id}
								className="text-sm text-gray-600 hover:bg-gray-50/60 transition-colors"
							>
								{/* Vehicle */}
								<td className="py-2.5 px-4 font-medium text-[#3525CD] hover:underline cursor-pointer truncate max-w-[160px]">
									{record.vehicle}
								</td>

								{/* Position */}
								<td className="py-2.5 px-4 font-medium text-[#000000CC] truncate max-w-[150px]">
									{record.position}
								</td>

								{/* Brand */}
								<td className="py-2.5 px-4 font-medium text-[#000000CC] truncate max-w-[170px]">
									{record.brand}
								</td>

								{/* Install Date */}
								<td className="py-2.5 px-4 text-[#000000CC]">{record.installDate}</td>

								{/* Mileage */}
								<td className="py-2.5 px-4 text-[#000000CC] font-medium">{record.mileage}</td>

								{/* Due In */}
								<td
									className={`py-2.5 px-4 font-medium ${
										record.isOverdue ? "text-[#880000]" : "text-[#000000CC]"
									}`}
								>
									{record.dueIn}
								</td>

								{/* Status pill */}
								<td className="py-2.5 px-4">
									<span
										className={`inline-flex items-center gap-1.5 self-start rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide ${
											STATUS_STYLES[record.status] ?? STATUS_STYLES.GOOD
										}`}
									>
										<span className="h-1.5 w-1.5 rounded-full bg-current" />
										{record.status}
									</span>
								</td>

								{/* Actions */}
								<td className="py-2.5 px-4">
									<div className="flex items-center justify-end gap-2">
										<button
											title="View"
											className="rounded-lg p-2 bg-[#E6E6E6] text-[#000000] hover:bg-[#E5E5E5] transition-colors"
										>
											<Eye className="h-[15px] w-[15px]" />
										</button>
										<button
											title="Document"
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
									No tire records found matching your filters.
								</td>
							</tr>
						)}
					</tbody>
				</table>

				{/* ── Pagination ── */}
				<div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs font-medium text-gray-400 px-2">
					<div>
						Showing 1–{filteredRecords.length} Of {tireRecords.length} Tire
						Management
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
