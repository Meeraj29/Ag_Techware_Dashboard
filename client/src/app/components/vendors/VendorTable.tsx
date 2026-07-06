"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { toggleVendorStatus } from "../../redux/features/vendor/vendorSlice";
import { Edit2, Eye, Search } from "lucide-react";

export default function VendorTable() {
	const dispatch = useDispatch();
	const { vendors, activeTab, searchQuery } = useSelector(
		(state: RootState) => state.vendor,
	);

	const filteredVendors = vendors.filter((vendor) => {
		const matchesTab = activeTab === "All" || vendor.status === activeTab;
		const matchesSearch =
			vendor.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
			vendor.emailAddress?.toLowerCase().includes(searchQuery.toLowerCase()) ||
			vendor.shortName?.toLowerCase().includes(searchQuery.toLowerCase());
		return matchesTab && matchesSearch;
	});

	return (
		<div className="px-6 pb-6 overflow-x-auto">
			<div className="min-w-[900px]">
				<table className="w-full text-left border-separate border-spacing-y-2">
					<thead>
						<tr className="bg-[#F4F4F4] text-base font-medium text-gray-900">
							<th className="py-4 px-4 rounded-tl-xl w-[60px]">
								<div className="flex items-center gap-2">
									# <Search className="h-4 w-4" />
								</div>
							</th>
							<th className="py-4 px-4 text-base font-semibold text-black">
								Company Name
							</th>
							<th className="py-4 px-4 w-32 text-base font-semibold text-black">
								Short Name
							</th>
							<th className="py-4 px-4 text-base font-semibold text-black">
								Email Address
							</th>
							<th className="py-4 px-4 w-24 text-base font-semibold text-black">
								Currency
							</th>
							<th className="py-4 px-4 w-44 text-base font-semibold text-black">
								Company Type
							</th>
							<th className="py-4 px-4 w-24 text-base font-semibold text-black">
								Status
							</th>
							<th className="py-4 px-4 w-24 text-center rounded-tr-xl">
								Actions
							</th>
						</tr>
					</thead>

					<tbody>
						{filteredVendors.map((vendor, index) => (
							<tr
								key={vendor._id}
								className={`text-sm ${index % 2 === 1 ? "bg-[#F8F8F8]" : "bg-white"}`}
							>
								<td className="py-5 px-4 font-medium text-gray-900 rounded-l-lg">
									{index + 1}
								</td>
								<td className="py-5 px-4 font-semibold text-gray-900">
									{vendor.companyName}
								</td>
								<td className="py-5 px-4 text-gray-600">{vendor.shortName}</td>
								<td className="py-5 px-4 text-gray-600">
									{vendor.emailAddress}
								</td>
								<td className="py-5 px-4 text-gray-600 font-medium">
									{vendor.currency}
								</td>
								<td className="py-5 px-4 text-gray-600">
									{vendor.companyType}
								</td>
								<td className="py-5 px-4">
									<span
										className={`font-medium ${vendor.status === "Active" ? "text-green-600" : "text-red-500"}`}
									>
										{vendor.status}
									</span>
								</td>
								<td className="py-5 px-4 rounded-r-lg">
									<div className="flex items-center justify-center gap-2">
										<button className="p-1.5 cursor-pointer rounded bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors">
											<Edit2 className="h-4 w-4 " />
										</button>
										<button className="p-1.5 cursor-pointer rounded bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors">
											<Eye className="h-4 w-4" />
										</button>
										<button
											onClick={() => dispatch(toggleVendorStatus(vendor._id))}
											className={`w-9 h-5 flex items-center rounded-full p-1 transition-colors cursor-pointer ${
												vendor.status === "Active"
													? "bg-[#0860B8]"
													: "bg-gray-300"
											}`}
										>
											<div
												className={`bg-white w-3 h-3 rounded-full shadow-md transform transition-transform ${
													vendor.status === "Active"
														? "translate-x-4"
														: "translate-x-0"
												}`}
											/>
										</button>
									</div>
								</td>
							</tr>
						))}

						{filteredVendors.length === 0 && (
							<tr>
								<td
									colSpan={8}
									className="py-12 text-center text-gray-500 bg-white rounded-lg"
								>
									No vendors found matching your criteria.
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
}
