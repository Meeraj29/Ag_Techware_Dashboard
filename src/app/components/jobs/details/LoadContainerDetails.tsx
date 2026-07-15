import { Edit2 } from "lucide-react";

export default function LoadContainerDetails({
	containers,
}: {
	containers: any[];
}) {
	return (
		<div className="bg-white rounded-2xl shadow-sm  border border-gray-100 p-6">
			<div className="flex items-center justify-between mb-4">
				<h3 className="text-sm font-medium text-gray-900">
					Load & Container Details
				</h3>
				<button className="flex items-center gap-1 text-[11px] font-bold text-[#075FB7] hover:underline">
					<Edit2 className="w-3.5 h-3.5" /> Modify Container Details
				</button>
			</div>

			<div className="overflow-x-auto">
				<table className="w-full text-left">
					<thead>
						<tr className="bg-[#F8F9FA] border-b border-gray-100">
							<th className="py-3 px-4 text-[11px] font-bold text-gray-700 whitespace-nowrap">
								Container Type
							</th>
							<th className="py-3 px-4 text-[11px] font-bold text-gray-700 whitespace-nowrap">
								Quantity
							</th>
							<th className="py-3 px-4 text-[11px] font-bold text-gray-700 whitespace-nowrap">
								Gross Weight
							</th>
							<th className="py-3 px-4 text-[11px] font-bold text-gray-700 whitespace-nowrap">
								Volume (CBM)
							</th>
							<th className="py-3 px-4 text-[11px] font-bold text-gray-700 whitespace-nowrap">
								HS Codes
							</th>
							<th className="py-3 px-4 text-[11px] font-bold text-gray-700 whitespace-nowrap">
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						{containers.map((container, index) => (
							<tr
								key={container.id}
								className={`${index !== containers.length - 1 ? "border-b border-gray-100" : ""} ${index % 2 !== 0 ? "bg-[#F8F8F8]" : "bg-white"}`}
							>
								<td className="py-3 px-4 text-[13px] font-semibold text-gray-900">
									{container.type}
								</td>
								<td className="py-3 px-4 text-[13px] font-bold text-gray-900">
									{container.quantity}
								</td>
								<td className="py-3 px-4 text-[13px] font-bold text-gray-900">
									{container.weight}
								</td>
								<td className="py-3 px-4 text-[13px] font-bold text-gray-900">
									{container.volume}
								</td>
								<td className="py-3 px-4 text-[13px] font-medium text-gray-900">
									{container.hsCodes}
								</td>
								<td className="py-3 px-4">
									<button className="w-7 h-7 rounded bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200">
										<Edit2 className="w-3.5 h-3.5" />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
