"use client";

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Download, Ship, ChevronLeft, ChevronRight } from 'lucide-react';
import { ReportsState, ShipmentData } from '../../types/reports';
import Image from 'next/image';

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

	const getStatusStyle = (status: ShipmentData['status']) => {
		switch (status) {
			case 'IN Transit':
				return { dotColor: 'bg-[#F59E0B]', textColor: 'text-[#F59E0B]' };
			case 'Processing':
				return { dotColor: 'bg-[#2563EB]', textColor: 'text-[#2563EB]' };
			case 'Alert':
				return { dotColor: 'bg-[#BA1A1A]', textColor: 'text-[#BA1A1A]' };
			default:
				return { dotColor: 'bg-gray-500', textColor: 'text-gray-600' };
		}
	};

	const getTypeStyle = (type: ShipmentData['type']) => {
		switch (type) {
			case 'Export':
				return 'bg-[#3525CD]/30 text-[#3525CD]';
			case 'Import':
				return 'bg-[#054890]/30 text-[#054890]';
			default:
				return 'bg-gray-100 text-gray-600';
		}
	};

	return (
		<div className="bg-white rounded-[24px] shadow-sm border border-gray-200 overflow-hidden">
			{/* Header */}
			<div className="p-6 flex justify-between items-center border-b border-gray-100">
				<h2 className="font-semibold text-[20px] text-black">All Shipment</h2>
				<button className="bg-linear-to-r from-[#0863BD] to-[#04458B] text-white px-3 py-3 rounded-[8px] font-medium text-[16px] flex items-center gap-2 hover:bg-blue-800 transition shadow-sm">
					Export Pdf / Excel
					<Download size={16} />
				</button>
			</div>

			{/* Table */}
			<div className="overflow-x-auto scrollbar-hide">
				<table className="w-full text-left text-[16px] text-gray-600 min-w-[800px] ">
					<thead className="bg-[#F4F4F4] text-black font-medium whitespace-nowrap">
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
								<tr key={`${s.id}-${s.route}-${index}`} className="hover:bg-gray-50 transition-colors">
									{/* Shipment ID */}
									<td className="px-6 py-4 font-medium text-[16px] text-[#004BCA] whitespace-nowrap">
										<a href={`/shipments/${s.id.replace('#', '')}`} className="hover:underline">
											{s.id}
										</a>
									</td>

									{/* Customer */}
									<td className="px-6 py-4 font-medium text-[16px] text-gray-800 whitespace-nowrap">
										{s.customer}
									</td>

									{/* Route */}
									<td className="px-6 py-4 whitespace-nowrap">
										<p className="font-semibold  text-[#191B24] text-[16px]">{s.route}</p>
										<p className="text-[12px] text-[#808080] mt-0.5">{s.subRoute}</p>
									</td>

									{/* Type */}
									<td className="px-6 py-4 whitespace-nowrap">
										<span
											className={`inline-flex items-center justify-center gap-2 min-w-[40px] sm:min-w-[70px] px-3 py-2 rounded-full text-xs sm:text-sm lg:text-[12px] font-semibold whitespace-nowrap ${getTypeStyle(s.type)}`}
										>
											<Image
												src="/boat.svg"
												alt="Ship"
												width={12}
												height={12}
												className="shrink-0"
											/>
											<span>{s.type}</span>
										</span>
									</td>
									{/* Status */}
									<td className="px-6 py-4 whitespace-nowrap">
										<span className={`inline-flex items-center gap-1.5 text-sm font-semibold ${statusStyle.textColor}`}>
											<span className={`w-2 h-2 rounded-full ${statusStyle.dotColor}`}></span>
											{s.status === 'IN Transit' ? 'IN Transit' : s.status}
										</span>
									</td>

									{/* Date */}
									<td className="px-6 py-4 whitespace-nowrap text-[#424656] font-medium  text-[15px]">
										{s.date}
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>

			{/* Footer / Pagination */}
			<div className="p-6 flex justify-between items-center text-[14px] text-[#64748B] border-t border-[#E7E7E7]">
				<span>Showing {paginatedShipments.length} of 42 pending reviews</span>
				<div className="flex gap-1 items-center">
					<button
						onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
						disabled={currentPage === 1}
						className="w-[48px] h-[51px] flex items-center justify-center border-2 border-primary text-primary rounded-[8px] bg-white transition"
					>
						<ChevronLeft className="w-4 h-4" />
					</button>
					{Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
						<button
							key={page}
							onClick={() => setCurrentPage(page)}
							className={`w-[48px] h-[51px] flex items-center justify-center rounded-[8px] text-[14px] font-medium transition ${page === currentPage
								? 'border-2 border-[#E0E0E0] text-black bg-white font-semibold'
								: 'border border-transparent text-gray-500 hover:border-gray-200 hover:text-black'
								}`}
						>
							{page}
						</button>
					))}
					<button
						onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
						disabled={currentPage === totalPages}
						className="w-[48px] h-[51px] flex items-center justify-center border-2 border-primary text-primary rounded-[8px] bg-white transition"
					>
						<ChevronRight className="w-4 h-4" />
					</button>
				</div>
			</div>
		</div>
	);
}
