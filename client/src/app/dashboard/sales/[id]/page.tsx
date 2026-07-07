"use client";

import { useParams, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import ShipmentDetails from "../../../components/sales/quote-details/ShipmentDetails";
import PricingBreakdown from "../../../components/sales/quote-details/PricingBreakdown";
import NotesSection from "../../../components/sales/quote-details/NotesSection";
import ContactDetails from "../../../components/sales/quote-details/ContactDetails";
import CreatedBy from "../../../components/sales/quote-details/CreatedBy";
import QuoteDetailsHeader from "../../../components/sales/quote-details/QuoteDetailsHeader";

export default function QuoteDetailsPage() {
	const { id } = useParams();
	const router = useRouter();

	const quotation = useSelector((state: RootState) =>
		state.sales.quotations.find((q) => q.id === id),
	);

	if (!quotation) {
		return (
			<div className="p-8 text-center">
				<h2 className="text-xl font-bold text-gray-900 mb-4">
					Quote Not Found
				</h2>
				<button
					onClick={() => router.push("/dashboard/sales")}
					className="text-primary hover:underline"
				>
					Return to Sales Management
				</button>
			</div>
		);
	}

	return (
		<div className="p-8 min-h-screen bg-[#F8F9FA] font-sans">
			<QuoteDetailsHeader quotation={quotation} />

			<div className="flex flex-col lg:flex-row gap-6 mb-6">
				{/* Main Content (Left) */}
				<div className="flex-1 flex flex-col min-w-0">
					<ShipmentDetails quote={quotation} />
					<PricingBreakdown quote={quotation} />
				</div>

				{/* Sidebar (Right) */}
				<div className="w-full lg:w-[320px] xl:w-[360px] shrink-0">
					<ContactDetails contact={quotation.contactDetails} />
					<CreatedBy creator={quotation.createdBy} />
					<NotesSection
						title="Internal Notes"
						notes={quotation.internalNotes}
						showReminder={false}
					/>
				</div>
			</div>

			{/* Full Width Section */}
			<NotesSection
				title="Customer Notes"
				notes={quotation.customerNotes}
				showReminder={true}
			/>
		</div>
	);
}
