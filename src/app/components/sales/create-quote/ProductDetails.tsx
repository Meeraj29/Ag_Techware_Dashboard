"use client";

import { Trash2, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "../../../ui/Button";

function TableSelect({
	options,
	defaultValue,
}: {
	options: string[];
	defaultValue?: string;
}) {
	return (
		<div className="relative w-full">
			<select
				defaultValue={defaultValue || ""}
				className="w-full h-10 px-3 bg-[#F5F5F5] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-gray-700 appearance-none cursor-pointer text-sm font-medium"
			>
				{options.map((opt, i) => (
					<option key={i} value={opt}>
						{opt}
					</option>
				))}
			</select>
			<ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-900 pointer-events-none" />
		</div>
	);
}

function TableInput({
	defaultValue,
	prefix,
}: {
	defaultValue?: string;
	prefix?: string;
}) {
	return (
		<div className="relative w-full">
			{prefix && (
				<span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-medium text-gray-700">
					{prefix}
				</span>
			)}
			<input
				type="text"
				defaultValue={defaultValue}
				className={`w-full h-10 ${prefix ? "pl-7" : "px-3"} bg-[#F5F5F5] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-gray-700 text-sm font-medium`}
			/>
		</div>
	);
}

export default function ProductDetails() {
	const [rows, setRows] = useState([{ id: Date.now() }]);

	const addRow = () => {
		setRows([...rows, { id: Date.now() }]);
	};

	const removeRow = (id: number) => {
		if (rows.length > 1) {
			setRows(rows.filter((row) => row.id !== id));
		}
	};

	return (
		<div className="w-full mb-8">
			<div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
				<h2 className="text-xl font-medium text-gray-900">Product Details</h2>

				<div className="flex flex-wrap items-center gap-4">
					<div className="flex items-center gap-2 text-sm">
						<span className="font-semibold text-gray-900">Prov. Income :</span>
						<span className="px-3 py-1 bg-[#F0FDF4] text-[#166534] font-semibold rounded-md border border-[#BBF7D0]">
							₹ 0.00
						</span>
					</div>
					<div className="flex items-center gap-2 text-sm">
						<span className="font-semibold text-gray-900">Prov. Expense :</span>
						<span className="px-3 py-1 bg-[#FEF2F2] text-[#991B1B] font-semibold rounded-md border border-[#FECACA]">
							₹ 0.00
						</span>
					</div>
					<div className="flex items-center gap-2 text-sm">
						<span className="font-semibold text-gray-900">Prov. Margin :</span>
						<span className="px-3 py-1 bg-[#F0FDF4] text-[#166534] font-semibold rounded-md border border-[#BBF7D0]">
							₹ 0.00
						</span>
					</div>
					<Button
						onClick={addRow}
						variant="outline"
						className="font-semibold cursor-pointer border-[#075FB7] text-[#075FB7]"
					>
						Add Charge Item
					</Button>
				</div>
			</div>

			<div className="overflow-x-auto border border-gray-200 rounded-lg">
				<table className="w-full text-left border-collapse min-w-[1000px]">
					<thead>
						<tr className="bg-white border-b border-gray-200">
							<th
								className="py-2 px-4 border-r border-gray-200"
								colSpan={2}
							></th>
							<th
								className="py-2 px-4 border-r border-gray-200 text-center text-sm font-bold text-gray-900 bg-[#F9F9FB]"
								colSpan={2}
							>
								Quantity
							</th>
							<th
								className="py-2 px-4 border-r border-gray-200 text-center text-sm font-bold text-gray-900"
								colSpan={5}
							>
								Sell Estimates
							</th>
							<th className="py-2 px-4"></th>
						</tr>
						<tr className="bg-white border-b border-gray-200">
							<th className="py-3 px-4 text-sm font-bold text-gray-900 border-r border-gray-200 w-16 text-center">
								#S.no
							</th>
							<th className="py-3 px-4 text-sm font-bold text-gray-900 border-r border-gray-200 min-w-[150px]">
								Charge Item <span className="text-red-500">*</span>
							</th>
							<th className="py-3 px-4 text-sm font-bold text-gray-900 border-r border-gray-200 w-[120px]">
								Basis <span className="text-red-500">*</span>
							</th>
							<th className="py-3 px-4 text-sm font-bold text-gray-900 border-r border-gray-200 w-[120px]">
								QTY <span className="text-red-500">*</span>
							</th>
							<th className="py-3 px-4 text-sm font-bold text-gray-900 border-r border-gray-200 w-[100px]">
								GST <span className="text-red-500">*</span>
							</th>
							<th className="py-3 px-4 text-sm font-bold text-gray-900 border-r border-gray-200 w-[100px]">
								Cur.<span className="text-red-500">*</span>
							</th>
							<th className="py-3 px-4 text-sm font-bold text-gray-900 border-r border-gray-200 w-[120px]">
								Sell Rate <span className="text-red-500">*</span>
							</th>
							<th className="py-3 px-4 text-sm font-bold text-gray-900 border-r border-gray-200 w-[120px]">
								Sell Total <span className="text-red-500">*</span>
							</th>
							<th className="py-3 px-4 text-sm font-bold text-gray-900 border-r border-gray-200 w-[100px]">
								Ex. Rate <span className="text-red-500">*</span>
							</th>
							<th className="py-3 px-4 text-sm font-bold text-gray-900 border-r border-gray-200 w-[140px]">
								Taxable (INR) <span className="text-red-500">*</span>
							</th>
							<th className="py-3 px-4 text-sm font-bold text-gray-900 w-16 text-center">
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						{rows.map((row, index) => (
							<tr
								key={row.id}
								className="bg-white border-b border-gray-100 last:border-none hover:bg-gray-50/50"
							>
								<td className="py-3 px-4 text-sm font-semibold text-gray-900 border-r border-gray-200 text-center">
									{String(index + 1).padStart(2, "0")}
								</td>
								<td className="py-3 px-2 border-r border-gray-200">
									<TableSelect
										options={["Item 1", "Item 2"]}
										defaultValue="Item 1"
									/>
								</td>
								<td className="py-3 px-2 border-r border-gray-200">
									<TableSelect
										options={["Item 1", "Item 2"]}
										defaultValue="Item 1"
									/>
								</td>
								<td className="py-3 px-2 border-r border-gray-200">
									<TableSelect
										options={["Item 1", "Item 2"]}
										defaultValue="Item 1"
									/>
								</td>
								<td className="py-3 px-2 border-r border-gray-200">
									<TableInput defaultValue="0%" />
								</td>
								<td className="py-3 px-2 border-r border-gray-200">
									<TableSelect options={["INR", "USD"]} defaultValue="INR" />
								</td>
								<td className="py-3 px-2 border-r border-gray-200">
									<TableInput defaultValue="0.0" />
								</td>
								<td className="py-3 px-2 border-r border-gray-200">
									<TableInput defaultValue="0.0" />
								</td>
								<td className="py-3 px-2 border-r border-gray-200">
									<TableInput defaultValue="1" />
								</td>
								<td className="py-3 px-2 border-r border-gray-200">
									<TableInput defaultValue="0.00" prefix="₹" />
								</td>
								<td className="py-3 px-4 text-center">
									<button
										onClick={() => removeRow(row.id)}
										className={`p-2 rounded-md transition-colors cursor-pointer ${rows.length > 1 ? "text-red-500 hover:bg-red-50" : "text-gray-300 cursor-not-allowed"}`}
										disabled={rows.length === 1}
									>
										<Trash2 className="h-5 w-5" />
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
