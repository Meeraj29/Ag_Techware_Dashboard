"use client";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

import { useAppSelector } from "../../redux/hooks";

export default function VGMActiveShipments() {
	const shipments = useAppSelector((state) => state.vgm.shipments);
	return (
		<div className="flex flex-col h-full">
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
				<h2 className="text-[20px] font-semibold text-[#000000]">
					Active Shipments
				</h2>
				<div className="flex gap-3 w-full sm:w-auto">
					<div className="relative flex-1 sm:flex-none">
						<select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-[14px] font-medium text-[#000000] appearance-none focus:outline-none focus:ring-1 focus:ring-primary pr-9">
							<option>Last 30 Days</option>
							<option>Last 7 Days</option>
							<option>All Time</option>
						</select>
						<div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500">
							<ChevronDown className="w-4 h-4" />
						</div>
					</div>
					<button className="flex-1 sm:flex-none bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white cursor-pointer px-5 py-2.5 rounded-xl text-[14px] font-medium transition-colors whitespace-nowrap shadow-sm">
						Export As CSV
					</button>
				</div>
			</div>

			<div className="overflow-x-auto scrollbar-hide -mx-4 sm:mx-0 flex-1 border-b border-[#00000033]">
				<div className="inline-block min-w-full align-middle">
					<div className="overflow-hidden">
						<table className="min-w-full">
							<thead className="bg-[#F4F4F4]">
								<tr>
									<th
										scope="col"
										className="px-5 py-3.5 text-left text-[14px] font-medium text-[#000000CC] whitespace-nowrap rounded-tl-[10px]"
									>
										Container #
									</th>
									<th
										scope="col"
										className="px-5 py-3.5 text-left text-[14px] font-medium text-[#000000CC] whitespace-nowrap"
									>
										ISO Type
									</th>
									<th
										scope="col"
										className="px-5 py-3.5 text-left text-[14px] font-medium text-[#000000CC] whitespace-nowrap"
									>
										Cargo Wt (KG)
									</th>
									<th
										scope="col"
										className="px-5 py-3.5 text-left text-[14px] font-medium text-[#000000CC] whitespace-nowrap rounded-tr-[10px]"
									>
										Tare
									</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-100/50 bg-white">
								{shipments.map((shipment, index) => (
									<tr
										key={index}
										className="transition-colors even:bg-[#F9F9F9]"
									>
										<td className="whitespace-nowrap px-5 py-4 text-[14px] font-medium text-[#3525CD]">
											{shipment.id}
										</td>
										<td className="whitespace-nowrap px-5 py-4 text-[14px] text-[#000000] font-medium">
											{shipment.iso}
										</td>
										<td className="whitespace-nowrap px-5 py-4 text-[14px] text-[#000000] font-medium">
											{shipment.cargo}
										</td>
										<td className="whitespace-nowrap px-5 py-4 text-[14px] text-[#000000] font-medium">
											{shipment.tare}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>

			<div className="mt-5 pt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
				<span className="text-[16px] text-[#000000B2] font-medium">
					Results: 10 Out Of 143
				</span>
				<div className="flex items-center gap-1.5">
					<button className="p-1.5 border border-primary text-primary rounded-[6px]">
						<ChevronLeft className="w-[20px] h-[20px]" />
					</button>
					<button className="w-9 h-9 flex items-center justify-center border border-gray-200 text-gray-700 rounded-[6px] text-[13px] font-medium transition-colors">
						1
					</button>
					<button className="p-1.5 border border-primary text-primary rounded-[6px]">
						<ChevronRight className="w-[20px] h-[20px]" />
					</button>
				</div>
			</div>
		</div>
	);
}
