import { SalesQuotation } from "../../../types/sales";

export default function ShipmentDetails({ quote }: { quote: SalesQuotation }) {
	const details = [
		{ label: "Origin", value: quote.portOfLoading },
		{ label: "Destination", value: quote.portOfDestination },
		{ label: "Equipment", value: quote.containerType },
		{
			label: "Cargo Specs",
			value: `${quote.grossWeight.toLocaleString()} kg | ${quote.volume} CBM`,
		},
		{ label: "Load Type", value: quote.loadType || "-" },
		{ label: "Shipper", value: quote.shipper },
		{ label: "Billing Branch", value: quote.branch },
	];

	return (
		<div className="bg-white rounded-xl p-6  border border-gray-100 mb-6">
			<h2 className="text-xl font-medium text-black mb-4">Shipment Details</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
				{details.map((item, index) => (
					<div
						key={index}
						className="bg-[#F8F9FA] h-32 p-8 rounded-lg flex flex-col justify-center"
					>
						<span className="text-sm text-[#0000008A] font-medium mb-1">
							{item.label}
						</span>
						<span className="text-base font-medium text-black mt-4">
							{item.value}
						</span>
					</div>
				))}
			</div>
		</div>
	);
}
