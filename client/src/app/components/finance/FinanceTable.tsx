"use client";
import {
	Search,
	ChevronDown,
	ListFilter,
	ChevronLeft,
	ChevronRight,
} from "lucide-react";

import { useAppSelector } from "../../redux/hooks";

export default function FinanceTable() {
	const invoices = useAppSelector((state) => state.finance.invoices);
	const getStatusPill = (status: string) => {
		switch (status) {
			case "Paid":
				return (
					<span className="bg-[#0596694D] text-[#059669] text-[11px] font-medium px-2 py-1 rounded-[4px] uppercase tracking-wide">
						Paid
					</span>
				);
			case "OVERDUE":
				return (
					<span className="bg-[#BA1A1A4D] text-[#BA1A1A] text-[11px] font-medium px-2 py-1 rounded-[4px] uppercase tracking-wide">
						OVERDUE
					</span>
				);
			case "PENDING":
				return (
					<span className="bg-[#F59E0B4D] text-[#F59E0B] text-[11px] font-medium px-2 py-1 rounded-[4px] uppercase tracking-wide">
						PENDING
					</span>
				);
			case "CRITICAL":
				return (
					<span className="bg-[#BA1A1A4D] text-[#BA1A1A] text-[11px] font-medium px-2 py-1 rounded-[4px] uppercase tracking-wide">
						CRITICAL
					</span>
				);
			default:
				return <span>{status}</span>;
		}
	};

	return (
		<div className="flex flex-col h-full w-full">
			{/* Toolbar */}
			<div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4 mb-2 p-4 sm:p-5">
				<div className="relative w-full xl:w-80 shrink-0">
					<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
						<Search className="h-4 w-4 text-gray-900" />
					</div>
					<input
						type="text"
						className="block w-full pl-10 pr-3 py-2.5 bg-[#F1F1F1] border-1 border-[#D8D8D8] rounded-xl text-[16px] font-medium placeholder-[#000000B2] focus:outline-none focus:ring-1 focus:ring-primary"
						placeholder="Job ID, Company name,....."
					/>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 xl:flex xl:flex-row items-center gap-3 w-full xl:w-auto">
					<div className="relative flex items-center w-full xl:w-auto">
						<span className="absolute left-3 text-[14px] font-medium text-[#000000]/70 pointer-events-none">
							Date :
						</span>
						<select className="appearance-none bg-[#FFFFFF] border border-[#EBEBEB] rounded-lg pl-[52px] pr-8 py-2 text-[14px] font-medium text-[#000000] focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer w-full xl:w-auto">
							<option>Last 30 Days</option>
							<option>Last 7 Days</option>
						</select>
						<div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-500">
							<ChevronDown className="w-4 h-4" />
						</div>
					</div>
					<div className="relative flex items-center gap-2 w-full xl:w-auto">
						<span className="absolute left-3 text-[14px] font-medium text-[#000000]/70 pointer-events-none">
							Sort By:
						</span>
						<select className="appearance-none bg-white border border-gray-200 rounded-lg pl-[72px] pr-8 py-2 text-[14px] font-medium text-[#000000] focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer w-full xl:w-auto">
							<option>Pickup Time</option>
							<option>Amount</option>
						</select>
						<div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-500">
							<ChevronDown className="w-4 h-4" />
						</div>
					</div>
					<button className="flex items-center justify-center gap-2 text-primary w-full sm:col-span-2 xl:col-span-1 xl:w-auto text-[14px] font-medium border border-[#EBEBEB] rounded-lg px-4 py-2 transition-colors">
						Advanced Filters
						<ListFilter className="w-4 h-4" />
					</button>
				</div>
			</div>

			{/* Table */}
			<div className="overflow-x-auto scrollbar-hide px-4 sm:px-5">
				<table className="min-w-full rounded-lg overflow-hidden">
					<thead className="bg-[#F4F4F4]">
						<tr>
							<th className="px-5 py-4 text-left text-[16px] font-medium text-[#000000CC] whitespace-nowrap">
								Invoice ID
							</th>
							<th className="px-5 py-4 text-left text-[16px] font-medium text-[#000000CC] whitespace-nowrap">
								Customer
							</th>
							<th className="px-5 py-4 text-left text-[16px] font-medium text-[#000000CC] whitespace-nowrap">
								Issued Date
							</th>
							<th className="px-5 py-4 text-left text-[16px] font-medium text-[#000000CC] whitespace-nowrap">
								Due Date
							</th>
							<th className="px-5 py-4 text-left text-[16px] font-medium text-[#000000CC] whitespace-nowrap">
								Amount
							</th>
							<th className="px-5 py-4 text-left text-[16px] font-medium text-[#000000CC] whitespace-nowrap">
								Status
							</th>
							<th className="px-5 py-4 text-left text-[16px] font-medium text-[#000000CC] whitespace-nowrap">
								Actions
							</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-100 bg-white">
						{invoices.map((invoice, idx) => (
							<tr key={idx} className="transition-colors even:bg-[#F9F9F9]">
								<td className="px-5 py-4 whitespace-nowrap text-[16px] font-medium text-[#3525CD]">
									{invoice.id}
								</td>
								<td className="px-5 py-4 whitespace-nowrap text-[16px] font-medium text-[#000000]">
									{invoice.customer}
								</td>
								<td className="px-5 py-4 whitespace-nowrap text-[16px] font-medium text-[#000000]">
									{invoice.issued}
								</td>
								<td
									className={`px-5 py-4 whitespace-nowrap text-[16px] font-medium ${invoice.isLate ? "text-[#DC2626]" : "text-[#000000]"}`}
								>
									{invoice.due}
								</td>
								<td className="px-5 py-4 whitespace-nowrap text-[16px] font-medium text-[#000000]">
									{invoice.amount}
								</td>
								<td className="px-5 py-4 whitespace-nowrap">
									{getStatusPill(invoice.status)}
								</td>
								<td className="px-5 py-4 whitespace-nowrap">
									<button className="text-[14px] font-medium text-primary hover:underline">
										View Invoice
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Pagination */}
			<div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-4 p-4 sm:p-5 pt-0 border-t border-gray-200 ml-5 mr-5">
				<span className="text-[14px] text-[#000000B2] font-medium">
					Results: 10 Out Of 143
				</span>
				<div className="flex items-center gap-1.5">
					<button className="p-1.5 border border-primary text-primary rounded-[6px]">
						<ChevronLeft className="w-[18px] h-[18px]" />
					</button>
					<button className="w-8 h-8 flex items-center justify-center border border-gray-300 text-[#000000] rounded-[6px] text-[13px] font-medium">
						1
					</button>
					<button className="p-1.5 border border-primary text-primary rounded-[6px]">
						<ChevronRight className="w-[18px] h-[18px]" />
					</button>
				</div>
			</div>
		</div>
	);
}
