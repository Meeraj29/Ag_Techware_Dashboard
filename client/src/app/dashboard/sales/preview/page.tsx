"use client";

import { ArrowLeft, Download } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "../../../ui/Button";
import InvoiceHeader from "../../../components/sales/invoice/InvoiceHeader";
import ClientDetails from "../../../components/sales/invoice/ClientDetails";
import ShipmentParameters from "../../../components/sales/invoice/ShipmentParameters";
import FinancialBreakdown from "../../../components/sales/invoice/FinancialBreakdown";

export default function QuotePreviewPage() {
	const router = useRouter();

	return (
		<div className="p-4 md:p-8">
			<div className="flex flex-col h-full bg-white rounded-3xl p-2 md:p-4 border border-gray-100 overflow-hidden">
				{/* Top action bar */}
				<div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4 px-2 md:px-4">
					<div className="flex items-center gap-4 w-full md:w-auto">
						<button
							onClick={() => router.back()}
							className="w-10 h-10 flex items-center justify-center rounded-md bg-[#DADADA] hover:bg-gray-200 transition-colors shrink-0 cursor-pointer"
						>
							<ArrowLeft className="h-5 w-5 text-gray-700" />
						</button>
						<h1 className="text-xl font-bold text-gray-900">Preview</h1>
					</div>

					<div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-start md:justify-end">
						<Button
							variant="outline"
							className="border-red-500 text-red-500 hover:bg-red-50 font-semibold px-4 md:px-6 cursor-pointer"
						>
							Cancel
						</Button>
						<Button
							variant="outline"
							className="border-[#075FB7] text-[#075FB7] hover:bg-blue-50 font-semibold px-4 md:px-6 cursor-pointer"
						>
							Edit Quote
						</Button>
						<Button
							variant="gradient"
							className="text-white font-semibold px-4 md:px-6 cursor-pointer"
						>
							Save & Download Quote
						</Button>
					</div>
				</div>

				<hr className="border-gray-200" />

				{/* Invoice Document Body */}
				<div className="flex-1 overflow-y-auto p-4 md:p-8 flex justify-center bg-white">
					<div className="w-full max-w-7xl bg-[#F8F8F8] p-4 md:p-12 min-h-110 flex flex-col gap-6">
						<InvoiceHeader />
						<ClientDetails />
						<ShipmentParameters />
						<FinancialBreakdown />
					</div>
				</div>
			</div>
		</div>
	);
}
