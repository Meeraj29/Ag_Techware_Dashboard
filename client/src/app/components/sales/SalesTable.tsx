"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
	MoreVertical,
	ChevronLeft,
	ChevronRight,
	Sailboat,
} from "lucide-react";

export default function SalesTable() {
	const { quotations, filters } = useSelector(
		(state: RootState) => state.sales,
	);

	const getStatusColor = (status: string) => {
		switch (status) {
			case "Approved":
				return "text-[#059669]";
			case "Pending":
				return "text-[#D97706]";
			case "Rejected":
				return "text-[#C10209]";
			case "Draft":
				return "text-gray-500";
			case "Converted To Job":
				return "text-[#3525CD]";
			default:
				return "text-gray-500";
		}
	};

	const filteredQuotations = quotations.filter((quote) => {
		// Search query filter (check ID, Customer/shipper, or routing)
		if (filters.searchQuery) {
			const q = filters.searchQuery.toLowerCase();
			if (
				!quote.quotationNumber.toLowerCase().includes(q) &&
				!quote.shipper.toLowerCase().includes(q) &&
				!quote.portOfLoading.toLowerCase().includes(q) &&
				!quote.portOfDestination.toLowerCase().includes(q)
			) {
				return false;
			}
		}

		// Status filter
		if (filters.status !== "All" && quote.status !== filters.status) {
			return false;
		}

		// Mode filter
		if (filters.mode !== "Air/Ocean" && quote.mode !== filters.mode) {
			return false;
		}

		// Date range filter is mocked here since dummy data is all clustered in March/April 2024
		// A real implementation would parse validFrom or estimatedTimeOfDeparture vs current date
		// We'll leave it out of the actual filtering logic for this mock UI so rows don't disappear

		return true;
	});

	return (
		<div className="flex flex-col flex-1 px-4 pb-4">
			<div className="overflow-x-auto rounded-t-2xl overflow-hidden">
				<table className="w-full text-left border-collapse min-w-[1000px]">
					<thead>
						<tr className="bg-[#F4F4F4]">
							<th className="py-4 px-6 text-base font-medium text-[#000000CC] uppercase tracking-wider">
								Quote ID
							</th>
							<th className="py-4 px-6 text-base font-medium text-[#000000CC] uppercase tracking-wider">
								Customer
							</th>
							<th className="py-4 px-6 text-base font-medium text-[#000000CC] uppercase tracking-wider">
								Category
							</th>
							<th className="py-4 px-6 text-base font-medium text-[#000000CC] uppercase tracking-wider">
								Destination
							</th>
							<th className="py-4 px-6 text-base font-medium text-[#000000CC] uppercase tracking-wider">
								Est Value
							</th>
							<th className="py-4 px-6 text-base font-medium text-[#000000CC] uppercase tracking-wider">
								Status
							</th>
							<th className="py-4 px-6 text-base font-medium text-[#000000CC] uppercase tracking-wider text-center">
								Actions
							</th>
						</tr>
					</thead>
					<tbody>
						{filteredQuotations.length === 0 && (
							<tr>
								<td
									colSpan={7}
									className="py-8 text-center text-gray-500 font-semibold"
								>
									No quotes found matching your filters.
								</td>
							</tr>
						)}
						{filteredQuotations.map((quote, index) => {
							// Calculate estimated value sum from productDetails
							const estValue = quote.productDetails.reduce(
								(sum, item) => sum + item.sellTotal,
								0,
							);

							// Format destination: "Country -> Country"
							// In screenshot: "India -> Aus", "USA -> UK"
							// We'll use Port of Loading and Destination as a rough proxy
							const origin = quote.portOfLoading.split(" ")[0];
							const dest = quote.portOfDestination.split(" ")[0];

							return (
								<tr
									key={quote.id}
									className={`border-b border-gray-100 hover:bg-gray-50/50 transition-colors ${index % 2 === 1 ? "bg-[#F9F9F9]" : "bg-white"}`}
								>
									<td className="py-4 px-6 text-base font-medium text-[#3525CD] cursor-pointer hover:underline">
										<Link href={`/dashboard/sales/${quote.id}`}>
											{quote.quotationNumber}
										</Link>
									</td>
									<td className="py-4 px-6 text-base font-medium text-black">
										{quote.shipper}
									</td>
									<td className="py-4 px-6">
										<span
											className={`inline-flex items-center gap-2 px-3 py-2 rounded-full text-xs font-medium ${
												quote.tradeType === "Import"
													? "bg-[#0548904D] text-[#054890]"
													: "bg-[#3525CD4D] text-[#3525CD]"
											}`}
										>
											<Sailboat className="h-3.5 w-3.5" />
											{quote.tradeType}
										</span>
									</td>
									<td className="py-4 px-6 text-base font-medium text-black">
										{origin} <span className="text-black mx-1">→</span> {dest}
									</td>
									<td className="py-4 px-6 text-base font-medium text-black">
										{quote.localCurrency === "INR"
											? "₹"
											: quote.localCurrency === "USD"
												? "$"
												: "€"}
										{estValue.toLocaleString()}
									</td>
									<td className="py-4 px-6 text-sm font-semibold">
										<div className="flex items-center gap-2">
											<div
												className={`w-2 h-2 rounded-full ${getStatusColor(quote.status).replace("text-", "bg-")}`}
											/>
											<span className={getStatusColor(quote.status)}>
												{quote.status}
											</span>
										</div>
									</td>
									<td className="py-4 px-6 text-center">
										<button className="p-1 hover:bg-gray-200 rounded-full transition-colors text-gray-600">
											<MoreVertical className="h-5 w-5" />
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>

			{/* Pagination Footer */}
			<div className="flex items-center justify-between px-6 py-4 border-t border-gray-100 mt-auto">
				<span className="text-sm font-semibold text-gray-500">
					Results: {filteredQuotations.length.toString().padStart(2, "0")} Out
					Of {quotations.length.toString().padStart(2, "0")}
				</span>
				<div className="flex items-center gap-2">
					<button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50">
						<ChevronLeft className="h-4 w-4" />
					</button>
					<button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 text-gray-900 font-semibold bg-white">
						1
					</button>
					<button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50">
						<ChevronRight className="h-4 w-4" />
					</button>
				</div>
			</div>
		</div>
	);
}
