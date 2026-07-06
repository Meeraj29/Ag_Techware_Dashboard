"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { Search, Ship, X } from "lucide-react";
import { Button } from "@/app/ui/Button";
import { useRouter } from "next/navigation";

interface SelectQuotationModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export default function SelectQuotationModal({
	isOpen,
	onClose,
}: SelectQuotationModalProps) {
	const router = useRouter();
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedQuoteId, setSelectedQuoteId] = useState<string | null>(null);

	// Fetch quotations from sales slice
	const quotations = useSelector((state: RootState) => state.sales.quotations);

	// Filter quotations based on search query
	const filteredQuotations = quotations.filter((q) => {
		const query = searchQuery.toLowerCase();
		return (
			q.quotationNumber.toLowerCase().includes(query) ||
			(q.contactDetails?.company || "").toLowerCase().includes(query) ||
			q.shipper.toLowerCase().includes(query)
		);
	});

	const handleCreateJob = () => {
		if (selectedQuoteId) {
			router.push(`/dashboard/jobs/create?quoteId=${selectedQuoteId}`);
			onClose();
		}
	};

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
			{/* Backdrop */}
			<div
				className="absolute inset-0 bg-black/40 backdrop-blur-sm"
				onClick={onClose}
			/>

			{/* Modal */}
			<div className="relative bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl ">
				{/* Header */}
				<div className="p-6 pb-4">
					<h2 className="text-xl font-medium text-center text-gray-900">
						Select Quotation
					</h2>
				</div>

				{/* Search */}
				<div className="px-6 pb-4">
					<div className="relative">
						<Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
						<input
							type="text"
							placeholder="Search by Quote ID, Customer name etc.,..."
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#075FB7] focus:border-[#075FB7]"
						/>
					</div>
				</div>

				{/* Quotation List */}
				<div className="flex-1 overflow-y-auto px-6 pb-6 space-y-3 scrollbar-hide">
					{filteredQuotations.map((quote) => {
						const isSelected = selectedQuoteId === quote.id;

						// Extract a short route string e.g. "India -> Aus" from port strings if possible,
						// otherwise just show the first word of the origin and destination
						const origin =
							quote.placeOfCarrierReceipt.split(" ")[0] || "Origin";
						const destination =
							quote.placeOfCarrierDelivery.split(" ")[0] || "Destination";

						return (
							<div
								key={quote.id}
								onClick={() => setSelectedQuoteId(quote.id)}
								className={`flex items-center  justify-between p-4 rounded-xl border-2 cursor-pointer transition-colors ${
									isSelected
										? "border-[#075FB7]"
										: "border-gray-100 hover:border-gray-200"
								}`}
							>
								<div className="w-1/4">
									<span className="text-[13px] font-medium text-[#075FB7]">
										{quote.quotationNumber}
									</span>
								</div>

								<div className="w-1/4">
									<span className="text-[13px] font-medium text-gray-900">
										{quote.contactDetails?.company || quote.shipper}
									</span>
								</div>

								<div className="w-1/4 flex justify-center">
									<span
										className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium ${
											quote.tradeType === "Import"
												? "bg-[#B4C6E4] text-[#075FB7]"
												: "bg-[#C2BBF0] text-[#6200EA]"
										}`}
									>
										<Ship className="w-3.5 h-3.5" />
										{quote.tradeType}
									</span>
								</div>

								<div className="w-1/4 text-right">
									<span className="text-[13px] font-medium text-gray-900">
										{origin} → {destination}
									</span>
								</div>
							</div>
						);
					})}

					{filteredQuotations.length === 0 && (
						<div className="text-center py-8 text-gray-500 text-sm">
							No quotations found matching your search.
						</div>
					)}
				</div>

				{/* Footer */}
				<div className="p-6 border-t border-gray-100 flex items-center justify-end gap-3">
					<Button
						variant="outline"
						onClick={onClose}
						className="px-6 rounded-lg text-xs cursor-pointer"
					>
						Cancel
					</Button>
					<Button
						variant="default"
						onClick={handleCreateJob}
						disabled={!selectedQuoteId}
						className={`px-6 rounded-lg text-xs cursor-pointer ${!selectedQuoteId ? "opacity-50 cursor-not-allowed" : ""}`}
					>
						Create Job
					</Button>
				</div>
			</div>
		</div>
	);
}
