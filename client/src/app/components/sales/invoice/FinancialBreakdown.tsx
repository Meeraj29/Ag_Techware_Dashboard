export default function FinancialBreakdown() {
	return (
		<div className="bg-white rounded-3xl p-8">
			<h3 className="text-gray-900 font-medium text-base mb-4">
				Financial Breakdown
			</h3>

			<div className="overflow-x-auto">
				<table className="w-full text-left border-collapse">
					<thead>
						<tr className="bg-[#F9F9F9] border-b border-gray-100">
							<th className="py-3 px-4 text-xs font-medium text-gray-500 rounded-tl-lg">
								Charge Item
							</th>
							<th className="py-3 px-4 text-xs font-medium text-gray-500">
								Basis
							</th>
							<th className="py-3 px-4 text-xs font-medium text-gray-500">
								QTY
							</th>
							<th className="py-3 px-4 text-xs font-medium text-gray-500">
								Currency
							</th>
							<th className="py-3 px-4 text-xs font-medium text-gray-500">
								Rate
							</th>
							<th className="py-3 px-4 text-xs font-medium text-gray-500 text-right rounded-tr-lg">
								Total
							</th>
						</tr>
					</thead>
					<tbody>
						<tr className="border-b border-gray-50">
							<td className="py-4 px-4 text-sm font-medium text-gray-900">
								Ocean Freight (Port-To-Port)
							</td>
							<td className="py-4 px-4 text-sm font-medium text-gray-900">
								Per Container
							</td>
							<td className="py-4 px-4 text-sm font-medium text-gray-900">1</td>
							<td className="py-4 px-4 text-sm font-medium text-gray-900">
								USD
							</td>
							<td className="py-4 px-4 text-sm font-medium text-gray-900">
								12,500.00
							</td>
							<td className="py-4 px-4 text-sm font-medium text-gray-900 text-right">
								12,500.00
							</td>
						</tr>
						<tr className="border-b border-gray-50">
							<td className="py-4 px-4 text-sm font-medium text-gray-900">
								THC - Origin (Shanghai)
							</td>
							<td className="py-4 px-4 text-sm font-medium text-gray-900">
								Flat Fee
							</td>
							<td className="py-4 px-4 text-sm font-medium text-gray-900">1</td>
							<td className="py-4 px-4 text-sm font-medium text-gray-900">
								USD
							</td>
							<td className="py-4 px-4 text-sm font-medium text-gray-900">
								450.00
							</td>
							<td className="py-4 px-4 text-sm font-medium text-gray-900 text-right">
								450.00
							</td>
						</tr>
						<tr className="border-b border-gray-50">
							<td className="py-4 px-4 text-sm font-medium text-gray-900">
								Ocean Freight (Port-To-Port)
							</td>
							<td className="py-4 px-4 text-sm font-medium text-gray-900">
								Per Container
							</td>
							<td className="py-4 px-4 text-sm font-medium text-gray-900">1</td>
							<td className="py-4 px-4 text-sm font-medium text-gray-900">
								USD
							</td>
							<td className="py-4 px-4 text-sm font-medium text-gray-900">
								12,500.00
							</td>
							<td className="py-4 px-4 text-sm font-medium text-gray-900 text-right">
								12,500.00
							</td>
						</tr>
						<tr>
							<td className="py-4 px-4 text-sm font-medium text-gray-900">
								THC - Origin (Shanghai)
							</td>
							<td className="py-4 px-4 text-sm font-medium text-gray-900">
								Flat Fee
							</td>
							<td className="py-4 px-4 text-sm font-medium text-gray-900">1</td>
							<td className="py-4 px-4 text-sm font-medium text-gray-900">
								USD
							</td>
							<td className="py-4 px-4 text-sm font-medium text-gray-900">
								450.00
							</td>
							<td className="py-4 px-4 text-sm font-medium text-gray-900 text-right">
								450.00
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			{/* Summary Section */}
			<div className="flex justify-end mt-8">
				<div className="w-full md:w-96 bg-[#F5F5F5] rounded-xl p-6">
					<div className="flex justify-between items-center mb-3">
						<span className="text-xs font-medium text-gray-600">
							Provisional Income
						</span>
						<span className="text-xs font-medium text-gray-900">
							$14,820.00
						</span>
					</div>
					<div className="flex justify-between items-center mb-3">
						<span className="text-xs font-medium text-gray-600">
							Estimated Expense
						</span>
						<span className="text-xs font-medium text-gray-900">
							$11,400.00
						</span>
					</div>
					<div className="flex justify-between items-center mb-6">
						<span className="text-xs font-medium text-gray-600">
							Quote Margin (23%)
						</span>
						<span className="text-xs font-medium text-gray-900">$3,420.00</span>
					</div>

					<div className="flex justify-between items-center pt-4 border-t border-gray-200">
						<span className="text-base font-medium text-gray-900">
							Grand Total
						</span>
						<span className="text-lg font-medium text-[#075FB7]">
							$14,820.00
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
