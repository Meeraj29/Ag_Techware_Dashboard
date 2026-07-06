"use client";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Download, Ship, ChevronLeft, ChevronRight } from "lucide-react";
import { ReportsState, ShipmentData } from "../../types/reports";

export function AllShipmentsTable() {
	const shipments = useSelector(
		(state: { reports: ReportsState }) => state.reports.allShipments,
	);
	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 7; // Shows all 7 in dummy data

	const totalPages = Math.ceil(shipments.length / pageSize);
	const paginatedShipments = shipments.slice(
		(currentPage - 1) * pageSize,
		currentPage * pageSize,
	);

	const getStatusStyle = (status: ShipmentData["status"]) => {
		switch (status) {
			case "IN Transit":
				return { dotColor: "bg-amber-500", textColor: "text-amber-600" };
			case "Processing":
				return { dotColor: "bg-blue-500", textColor: "text-blue-600" };
			case "Alert":
				return { dotColor: "bg-red-500", textColor: "text-red-600" };
			default:
				return { dotColor: "bg-gray-500", textColor: "text-gray-600" };
		}
	};

	const getTypeStyle = (type: ShipmentData["type"]) => {
		switch (type) {
			case "Export":
				return "bg-purple-100 text-purple-600";
			case "Import":
				return "bg-blue-100 text-blue-600";
			default:
				return "bg-gray-100 text-gray-600";
		}
	};

	return (
		<div className="bg-white rounded-[24px] shadow-sm border border-gray-200 overflow-hidden">
			{/* Header */}
			<div className="p-6 flex justify-between items-center border-b border-gray-100">
				<h2 className="font-bold text-lg text-gray-800">All Shipment</h2>
				<button className="bg-[#0A4B9F] text-white px-4 py-2 rounded-md font-medium text-sm flex items-center gap-2 hover:bg-blue-800 transition shadow-sm">
					Export Pdf / Excel
					<Download size={16} />
				</button>
			</div>

			{/* Table */}
			<div className="overflow-x-auto">
				<table className="w-full text-left text-sm text-gray-600 min-w-[800px]">
					<thead className="bg-gray-50 text-gray-500 font-medium whitespace-nowrap">
						<tr>
							<th className="px-6 py-4">Shipment ID</th>
							<th className="px-6 py-4">Customer</th>
							<th className="px-6 py-4">Route</th>
							<th className="px-6 py-4">Type</th>
							<th className="px-6 py-4">Status</th>
							<th className="px-6 py-4">Date</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-100">
						{paginatedShipments.map((s, index) => {
							const statusStyle = getStatusStyle(s.status);
							return (
								<tr
									key={`${s.id}-${s.route}-${index}`}
									className="hover:bg-gray-50 transition-colors"
								>
									{/* Shipment ID */}
									<td className="px-6 py-4 font-bold text-blue-600 whitespace-nowrap">
										<a
											href={`/shipments/${s.id.replace("#", "")}`}
											className="hover:underline"
										>
											{s.id}
										</a>
									</td>

									{/* Customer */}
									<td className="px-6 py-4 font-bold text-gray-800 whitespace-nowrap">
										{s.customer}
									</td>

									{/* Route */}
									<td className="px-6 py-4 whitespace-nowrap">
										<p className="font-medium text-gray-800">{s.route}</p>
										<p className="text-xs text-gray-400 mt-0.5">{s.subRoute}</p>
									</td>

									{/* Type */}
									<td className="px-6 py-4 whitespace-nowrap">
										<span
											className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${getTypeStyle(s.type)}`}
										>
											<Ship size={12} className="shrink-0" />
											{s.type}
										</span>
									</td>

									{/* Status */}
									<td className="px-6 py-4 whitespace-nowrap">
										<span
											className={`inline-flex items-center gap-1.5 text-sm font-semibold ${statusStyle.textColor}`}
										>
											<span
												className={`w-2 h-2 rounded-full ${statusStyle.dotColor}`}
											></span>
											{s.status === "IN Transit" ? "IN Transit" : s.status}
										</span>
									</td>

									{/* Date */}
									<td className="px-6 py-4 whitespace-nowrap text-gray-500 font-medium">
										{s.date}
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>

			{/* Footer / Pagination */}
			<div className="p-6 flex justify-between items-center text-sm text-gray-500 border-t border-gray-100">
				<span>Showing {paginatedShipments.length} of 42 pending reviews</span>
				<div className="flex gap-2 items-center">
					<button
						onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
						disabled={currentPage === 1}
						className="border border-gray-200 p-1.5 rounded-md hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
					>
						<ChevronLeft size={16} />
					</button>
					<span className="border border-gray-200 px-3 py-1 rounded-md bg-white font-medium text-gray-800 text-xs">
						{currentPage}
					</span>
					<button
						onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
						disabled={currentPage === totalPages}
						className="border border-gray-200 p-1.5 rounded-md hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
					>
						<ChevronRight size={16} />
					</button>
				</div>
			</div>
		</div>
	);
}
