import { SalesQuotation } from "../../../types/sales";
import { Edit2 } from "lucide-react";

export default function PricingBreakdown({ quote }: { quote: SalesQuotation }) {
	const finalTotal = quote.productDetails.reduce(
		(sum, item) => sum + item.sellTotal,
		0,
	);

	// Helper to format currency
	const formatCurrency = (amount: number, currency: string) => {
		return new Intl.NumberFormat("en-IN", {
			style: "currency",
			currency: currency,
		}).format(amount);
	};

	return (
		<div className="bg-white rounded-xl p-6  border border-gray-100 mb-6">
			<div className="flex items-center justify-between mb-4">
				<h2 className="text-xl font-medium text-black">Pricing Breakdown</h2>
				<button className="flex items-center gap-1.5 text-primary text-sm font-semibold hover:underline">
					<Edit2 className="h-4 w-4" />
					Edit
				</button>
			</div>

			<div className="overflow-x-auto">
				<table className="w-full text-left border-collapse">
					<thead>
						<tr className="bg-[#F4F4F4] rounded-t-lg">
							<th className="py-3 px-4 text-base font-medium text-[#0000008A] rounded-tl-lg">
								Item
							</th>
							<th className="py-3 px-4 text-base font-medium text-[#0000008A]">
								Rate
							</th>
							<th className="py-3 px-4 text-base font-medium text-[#0000008A]">
								QTY
							</th>
							<th className="py-3 px-4 text-base font-medium text-[#0000008A] rounded-tr-lg">
								Total
							</th>
						</tr>
					</thead>
					<tbody>
						{quote.productDetails.map((item, index) => (
							<tr
								key={index}
								className={`border-b border-gray-50 hover:bg-gray-50/50 transition-colors ${index % 2 === 1 ? "bg-[#F9F9F9]" : "bg-white"}`}
							>
								<td className="py-4 px-4 text-base font-medium text-[#1B1B24]">
									{item.chargeItem}
								</td>
								<td className="py-4 px-4 text-base font-medium text-[#1B1B24]">
									{formatCurrency(item.sellRate, item.currency)}
								</td>
								<td className="py-4 px-4 text-base font-medium text-[#1B1B24]">
									{item.qty}
								</td>
								<td className="py-4 px-4 text-base font-medium text-[#1B1B24]">
									{formatCurrency(item.sellTotal, item.currency)}
								</td>
							</tr>
						))}
					</tbody>
					<tfoot>
						<tr className="bg-[#F4F4F4] rounded-b-lg">
							<td
								colSpan={3}
								className="py-4 px-4 text-base font-medium text-[#1B1B24] rounded-bl-lg"
							>
								Final Total
							</td>
							<td className="py-4 px-4 text-base font-medium text-primary rounded-br-lg">
								{formatCurrency(finalTotal, quote.localCurrency)}
							</td>
						</tr>
					</tfoot>
				</table>
			</div>
		</div>
	);
}
