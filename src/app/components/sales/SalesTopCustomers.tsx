"use client";

import { MoreHorizontal } from "lucide-react";

export default function SalesTopCustomers() {
	const topCustomers = [
		{
			id: 1,
			initials: "TE",
			name: "TechCorp Industries",
			value: "₹245K",
			percentage: "45%",
		},
		{
			id: 2,
			initials: "GL",
			name: "Global Foods Ltd",
			value: "₹180K",
			percentage: "30%",
		},
		{
			id: 3,
			initials: "NE",
			name: "Nexus Electronics",
			value: "₹95K",
			percentage: "15%",
		},
		{
			id: 4,
			initials: "PM",
			name: "Prime Manufacturing",
			value: "₹42K",
			percentage: "8%",
		},
	];

	return (
		<div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col h-full">
			<div className="flex justify-between items-center mb-6">
				<h2 className="text-xl font-semibold text-black">
					Top Customer Volume
				</h2>
				<button className="text-gray-400 hover:text-gray-600">
					<MoreHorizontal className="h-5 w-5" />
				</button>
			</div>

			<div className="flex flex-col gap-5">
				{topCustomers.map((customer) => (
					<div key={customer.id} className="flex items-center justify-between">
						<div className="flex items-center gap-3">
							<div className="w-10 h-10 rounded-md border border-gray-200 flex items-center justify-center bg-[#F8F8F7] text-[#919191] font-medium text-sm shrink-0">
								{customer.initials}
							</div>
							<span className="text-base font-medium text-black">
								{customer.name}
							</span>
						</div>
						<div className="flex flex-col items-end">
							<span className="text-base font-bold text-black">
								{customer.value}
							</span>
							<span className="text-xs font-medium text-[#555555]">
								{customer.percentage}
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
