"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Download } from "lucide-react";
import Link from "next/link";

interface Props {
	customerId: string;
}

export function OperationalTimeline({ customerId }: Props) {
	const detail = useSelector(
		(state: RootState) => state.customerDetail.details[customerId],
	);
	if (!detail) return null;

	const getStatusColor = (status: string) => {
		switch (status) {
			case "Pending":
				return "text-[#F59E0B]";
			case "Verified":
				return "text-[#10B981]";
			case "Delayed":
				return "text-[#EF4444]";
			default:
				return "text-gray-500";
		}
	};

	return (
		<div className="bg-white rounded-[20px] border border-gray-200 p-6 flex-1">
			<div className="flex justify-between items-center mb-6">
				<h2 className="text-[18px] font-bold text-gray-800 ">
					Operational Timeline
				</h2>
				<button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-[10px] text-[14px] font-semibold hover:bg-[#033a75] transition">
					Export PDF
					<Download className="w-4 h-4" />
				</button>
			</div>

			<div className="overflow-x-auto scrollbar-hide">
				<table className="w-full text-left text-[14px]">
					<thead>
						<tr className="bg-[#F8F9FA] text-gray-500 border-b border-gray-100">
							<th className="py-4 px-4 font-medium rounded-l-[12px] whitespace-nowrap">
								Date & Time
							</th>
							<th className="py-4 px-4 font-medium">Event Type</th>
							<th className="py-4 px-4 font-medium">Operators</th>
							<th className="py-4 px-4 font-medium rounded-r-[12px]">Status</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-100">
						{detail.timeline.map((entry) => (
							<tr key={entry.id} className="hover:bg-gray-50/50 transition">
								<td className="py-4 px-4 text-gray-800 font-medium whitespace-nowrap">
									{entry.dateTime}
								</td>
								<td className="py-4 px-4 text-gray-800 whitespace-nowrap">{entry.eventType}</td>
								<td className="py-4 px-4 text-gray-600 whitespace-nowrap">{entry.operators}</td>
								<td className="py-4 px-4 whitespace-nowrap">
									<div className="flex items-center gap-2">
										<div
											className={`w-1.5 h-1.5 rounded-full ${getStatusColor(entry.status).replace("text-", "bg-")}`}
										/>
										<span
											className={`font-semibold ${getStatusColor(entry.status)}`}
										>
											{entry.status}
										</span>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<div className="mt-6 flex justify-center">
				<Link
					href="#"
					className="text-[14px] font-semibold text-primary hover:underline"
				>
					View All Activity History
				</Link>
			</div>
		</div>
	);
}
