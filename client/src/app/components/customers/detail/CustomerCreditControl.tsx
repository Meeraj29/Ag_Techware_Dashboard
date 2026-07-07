"use client";

import React, { useState } from "react";
import {
	AlertTriangle,
	CreditCard,
	TrendingUp,
	DollarSign,
	ChevronLeft,
	ChevronRight,
	Download,
	Send,
	Ban,
	Sliders,
} from "lucide-react";

const transactions = [
	{
		date: "2023-10-24",
		ref: "INV-99021",
		type: "Freight Service Invoice",
		amount: "₹18,650.00",
		amountClass: "text-gray-800",
		status: "Overdue",
		statusClass: "text-[#DB4437]",
	},
	{
		date: "2023-10-20",
		ref: "PAY-8812",
		type: "Bank Transfer Payment",
		amount: "₹5,000.00",
		amountClass: "text-[#1E8449]",
		status: "Cleared",
		statusClass: "text-[#1E8449]",
	},
	{
		date: "2023-10-15",
		ref: "INV-98544",
		type: "Customs Clearance Fees",
		amount: "₹8,200.00",
		amountClass: "text-gray-800",
		status: "Overdue",
		statusClass: "text-[#DB4437]",
	},
	{
		date: "2023-10-02",
		ref: "CRD-004",
		type: "Credit Limit Increased",
		amount: "₹10,000.00",
		amountClass: "text-[#1E8449]",
		status: "Verified",
		statusClass: "text-[#1E8449]",
	},
];

export function CustomerCreditControl() {
	const [page, setPage] = useState(1);
	const totalResults = 143;

	return (
		<div className="flex flex-col gap-6">
			{/* Overdue Alert Banner */}
			<div className="bg-[#FFF5F4] border border-[#FECACA] rounded-[14px] px-5 py-4 flex items-start justify-between gap-4">
				<div className="flex items-start gap-3">
					<div className="mt-0.5">
						<AlertTriangle className="w-5 h-5 text-[#DB4437]" />
					</div>
					<div>
						<div className="font-bold text-[14px] text-[#DB4437]">
							Overdue Payments Detected
						</div>
						<div className="text-[13px] text-gray-600 mt-0.5">
							This account has 2 invoices totaling $12,450.00 that are more than
							30 days overdue. Credit privileges may be restricted soon.
						</div>
					</div>
				</div>
				<button className="text-[13px] font-bold text-primary hover:underline whitespace-nowrap mt-0.5">
					View Invoices
				</button>
			</div>

			{/* Stats Cards Row */}
			<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
				{/* Credits limit */}
				<div className="bg-white border border-gray-200 rounded-[16px] p-5 flex justify-between items-start">
					<div>
						<div className="text-[13px] text-gray-500 mb-2">Credits limit</div>
						<div className="text-[22px] font-bold text-gray-800">
							₹50,000.00
						</div>
						<div className="text-[12px] text-gray-400 mt-1">
							↩ Last updated 2 days ago
						</div>
					</div>
					<div className="w-9 h-9 bg-gray-100 rounded-[8px] flex items-center justify-center">
						<CreditCard className="w-4 h-4 text-gray-400" />
					</div>
				</div>

				{/* Credit used */}
				<div className="bg-white border border-gray-200 rounded-[16px] p-5 flex justify-between items-start">
					<div>
						<div className="text-[13px] text-gray-500 mb-2">Credit used</div>
						<div className="text-[22px] font-bold text-gray-800">
							₹34,210.00
						</div>
						<div className="text-[12px] text-gray-400 mt-1">
							68% of limit used
						</div>
					</div>
					<div className="w-9 h-9 bg-gray-100 rounded-[8px] flex items-center justify-center">
						<TrendingUp className="w-4 h-4 text-gray-400" />
					</div>
				</div>

				{/* Available credit */}
				<div className="bg-white border border-gray-200 rounded-[16px] p-5 flex justify-between items-start">
					<div>
						<div className="text-[13px] text-gray-500 mb-2">
							Available credit
						</div>
						<div className="text-[22px] font-bold text-gray-800">
							₹15,790.00
						</div>
						<div className="text-[12px] text-[#1E8449] mt-1">
							Healthy buffer remaining
						</div>
					</div>
					<div className="w-9 h-9 bg-gray-100 rounded-[8px] flex items-center justify-center">
						<DollarSign className="w-4 h-4 text-gray-400" />
					</div>
				</div>

				{/* Outstanding Amt */}
				<div className="bg-white border border-gray-200 rounded-[16px] p-5 flex justify-between items-start">
					<div>
						<div className="text-[13px] text-gray-500 mb-2">
							Outstanding Amt
						</div>
						<div className="text-[22px] font-bold text-[#DB4437]">
							₹18,650.00
						</div>
						<div className="text-[12px] text-[#DB4437] mt-1">
							₹12,450.00 overdue
						</div>
					</div>
					<div className="w-9 h-9 bg-gray-100 rounded-[8px] flex items-center justify-center">
						<CreditCard className="w-4 h-4 text-gray-400" />
					</div>
				</div>
			</div>

			{/* Quick Actions + Payment Behavior */}
			<div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6">
				{/* Quick Actions */}
				<div className="bg-white border border-gray-200 rounded-[20px] p-6">
					<h3 className="font-bold text-[16px] text-gray-800 mb-5">
						Quick Actions
					</h3>
					<div className="flex flex-col gap-3">
						<button className="flex items-center gap-3 px-5 py-3.5 rounded-[10px] bg-[#EFF6FF] text-primary font-semibold text-[14px] hover:bg-[#DBEAFE] transition text-left">
							<Send className="w-4 h-4" />
							Send Payment Reminder
						</button>
						<button className="flex items-center gap-3 px-5 py-3.5 rounded-[10px] bg-[#FFF5F4] text-[#DB4437] font-semibold text-[14px] hover:bg-[#FFE5E2] transition text-left">
							<Ban className="w-4 h-4" />
							Block New Jobs
						</button>
						<button className="flex items-center gap-3 px-5 py-3.5 rounded-[10px] hover:bg-gray-50 text-gray-700 font-semibold text-[14px] border border-gray-200 transition text-left">
							<Sliders className="w-4 h-4" />
							Adjust Credit Limit
						</button>
					</div>
				</div>

				{/* Payment Behavior */}
				<div className="bg-white border border-gray-200 rounded-[20px] p-6 flex flex-col items-center justify-center">
					<h3 className="font-bold text-[16px] text-gray-800 w-full mb-6">
						Payment Behavior
					</h3>

					{/* Circle gauge */}
					<div className="relative w-32 h-32 mb-4">
						<svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
							<circle
								cx="60"
								cy="60"
								r="50"
								fill="none"
								stroke="#E5E7EB"
								strokeWidth="10"
							/>
							<circle
								cx="60"
								cy="60"
								r="50"
								fill="none"
								stroke="url(#gauge-gradient)"
								strokeWidth="10"
								strokeDasharray={`${2 * Math.PI * 50 * 0.75} ${2 * Math.PI * 50 * 0.25}`}
								strokeLinecap="round"
							/>
							<defs>
								<linearGradient
									id="gauge-gradient"
									x1="0%"
									y1="0%"
									x2="100%"
									y2="0%"
								>
									<stop offset="0%" stopColor="#044890" />
									<stop offset="100%" stopColor="#4285F4" />
								</linearGradient>
							</defs>
						</svg>
						<div className="absolute inset-0 flex items-center justify-center">
							<span className="text-[22px] font-bold text-gray-800">75%</span>
						</div>
					</div>

					<div className="text-center">
						<div className="text-[14px] font-semibold text-gray-700">
							On-Time Payment Score
						</div>
						<div className="text-[13px] text-gray-400 mt-0.5">
							Average delay: 4.2 days
						</div>
					</div>
				</div>
			</div>

			{/* Recent Transactions Table */}
			<div className="bg-white border border-gray-200 rounded-[20px] p-6">
				<div className="flex justify-between items-center mb-6">
					<h3 className="font-bold text-[16px] text-gray-800">
						Recent Transaction &amp; Credit Events
					</h3>
					<button className="flex items-center gap-2 bg-primary text-white text-[13px] font-semibold px-4 py-2 rounded-[8px] hover:bg-[#033a75] transition">
						Export PDF
						<Download className="w-4 h-4" />
					</button>
				</div>

				<div className="overflow-x-auto">
					<table className="w-full text-left border-collapse min-w-[640px]">
						<thead>
							<tr className="bg-[#F8F9FA]">
								<th className="py-3 px-4 text-[13px] font-medium text-gray-500 rounded-tl-[8px]">
									Date
								</th>
								<th className="py-3 px-4 text-[13px] font-medium text-gray-500">
									Reference
								</th>
								<th className="py-3 px-4 text-[13px] font-medium text-gray-500">
									Event Type
								</th>
								<th className="py-3 px-4 text-[13px] font-medium text-gray-500">
									Amount
								</th>
								<th className="py-3 px-4 text-[13px] font-medium text-gray-500 rounded-tr-[8px]">
									Status
								</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-gray-50">
							{transactions.map((tx, idx) => (
								<tr key={idx} className="hover:bg-gray-50/50 transition">
									<td className="py-4 px-4 text-[13px] text-gray-700 font-medium">
										{tx.date}
									</td>
									<td className="py-4 px-4 text-[13px] text-gray-700 font-medium">
										{tx.ref}
									</td>
									<td className="py-4 px-4 text-[13px] text-gray-700">
										{tx.type}
									</td>
									<td
										className={`py-4 px-4 text-[13px] font-bold ${tx.amountClass}`}
									>
										{tx.amount}
									</td>
									<td className="py-4 px-4">
										<span
											className={`flex items-center gap-1.5 text-[13px] font-bold ${tx.statusClass}`}
										>
											<span
												className={`w-1.5 h-1.5 rounded-full ${tx.statusClass === "text-[#DB4437]" ? "bg-[#DB4437]" : "bg-[#1E8449]"}`}
											></span>
											{tx.status}
										</span>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				{/* Pagination */}
				<div className="flex justify-between items-center mt-5 pt-4 border-t border-gray-100">
					<span className="text-[13px] text-gray-500">
						Results: 08 Out Of {totalResults}
					</span>
					<div className="flex items-center gap-2">
						<button
							onClick={() => setPage((p) => Math.max(1, p - 1))}
							className="w-8 h-8 rounded-[6px] border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition text-gray-600 disabled:opacity-40"
							disabled={page === 1}
						>
							<ChevronLeft className="w-4 h-4" />
						</button>
						<span className="w-8 h-8 rounded-[6px] border border-gray-200 flex items-center justify-center text-[13px] font-semibold text-gray-800">
							{page}
						</span>
						<button
							onClick={() => setPage((p) => p + 1)}
							className="w-8 h-8 rounded-[6px] border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition text-gray-600"
						>
							<ChevronRight className="w-4 h-4" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
