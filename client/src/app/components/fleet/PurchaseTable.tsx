"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Eye, FileText, ChevronLeft, ChevronRight } from "lucide-react";

export default function PurchaseTable() {
	const { purchaseOrders, searchQuery, statusFilter } = useSelector(
		(state: RootState) => state.fleet,
	);

	const filteredOrders = purchaseOrders.filter((order) => {
		const matchesSearch =
			order.po.toLowerCase().includes(searchQuery.toLowerCase()) ||
			order.vendor.toLowerCase().includes(searchQuery.toLowerCase());
		const matchesStatus =
			statusFilter === "All" || order.status === statusFilter;
		return matchesSearch && matchesStatus;
	});

	return (
		<div className="overflow-x-auto scrollbar-hide">
			<div className="min-w-[900px]">
				{/* Table Header Row Layout */}
				<div className="grid grid-cols-[160px_1fr_130px_130px_150px_130px_100px] gap-4 py-3 px-4 bg-gray-50 rounded-xl text-xs font-bold text-gray-500 uppercase tracking-wider items-center">
					<div>Po Number</div>
					<div>Vendor</div>
					<div>Category</div>
					<div>Amount</div>
					<div>Status</div>
					<div>Delivery Date</div>
					<div className="text-right">Actions</div>
				</div>

				{/* Table Body Content Rows Layout */}
				<div className="mt-2 space-y-1">
					{filteredOrders.map((item) => (
						<div
							key={item.id}
							className="grid grid-cols-[160px_1fr_130px_130px_150px_130px_100px] gap-4 py-3.5 px-4 items-center text-xs text-gray-600 border-b border-gray-100 last:border-0"
						>
							<div className="font-bold text-blue-600 hover:underline cursor-pointer">
								{item.po}
							</div>
							<div className="font-medium text-gray-900">{item.vendor}</div>
							<div>
								{item.tag && (
									<span
										className={`px-2.5 py-0.5 rounded-md font-bold text-[10px] uppercase ${
											item.tag === "Tires"
												? "bg-blue-50 text-blue-500"
												: item.tag === "SPARE PARTS"
													? "bg-gray-100 text-gray-600"
													: "bg-red-50 text-red-400"
										}`}
									>
										{item.tag}
									</span>
								)}
							</div>
							<div className="font-semibold text-gray-900">{item.amount}</div>
							<div>
								<span
									className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-semibold text-[11px] ${item.statusColor}`}
								>
									<span className="h-1.5 w-1.5 rounded-full bg-current" />
									{item.status}
								</span>
							</div>
							<div className="text-gray-500 font-medium">{item.date}</div>
							<div className="flex items-center justify-end gap-1.5">
								<button className="rounded-lg p-2 bg-[#f5f6f7] text-gray-500 hover:bg-gray-200">
									<Eye className="h-3.5 w-3.5" />
								</button>
								<button className="rounded-lg p-2 bg-[#f5f6f7] text-gray-500 hover:bg-gray-200">
									<FileText className="h-3.5 w-3.5" />
								</button>
							</div>
						</div>
					))}

					{filteredOrders.length === 0 && (
						<div className="py-12 text-center text-gray-500">
							No purchase orders found matching your filters.
						</div>
					)}
				</div>

				{/* Footer Navigation Section Layout */}
				<div className="mt-6 flex items-center justify-between text-xs font-medium text-gray-400">
					<div>
						Showing 1-{filteredOrders.length} Of {purchaseOrders.length} Orders
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
