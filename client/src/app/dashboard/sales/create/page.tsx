"use client";

import CreateQuoteHeader from "../../../components/sales/create-quote/CreateQuoteHeader";
import GeneralDetails from "../../../components/sales/create-quote/GeneralDetails";
import CargoDetails from "../../../components/sales/create-quote/CargoDetails";
import ProductDetails from "../../../components/sales/create-quote/ProductDetails";
import UploadDocuments from "../../../components/sales/create-quote/UploadDocuments";

export default function CreateQuotePage() {
	return (
		<div className="h-full px-8 py-4 bg-[#F9F9FB]">
			<div className="flex flex-col h-full bg-white rounded-2xl border border-gray-100 overflow-hidden">
				<CreateQuoteHeader />

				{/* Main Content Form */}
				<div className="flex-1 overflow-y-auto p-4 scrollbar-hide">
					<div className="max-w-9xl mx-auto p-4">
						<GeneralDetails />
						<hr className="border-gray-200 my-4" />

						<CargoDetails />
						<hr className="border-gray-200 my-8" />

						<ProductDetails />
						<hr className="border-gray-200 my-8" />

						<UploadDocuments />
					</div>
				</div>
			</div>
		</div>
	);
}
