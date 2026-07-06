"use client";

import React from "react";
import { useSelector } from "react-redux";

export function MasterAuditLedger() {
	const stats = useSelector(
		(state: any) =>
			state.creditControl?.stats || {
				totalAllocated: "₹12.4M",
				creditUsed: "₹8.2M",
				availableCredits: "₹4.2M",
				overdueAmount: "₹842.5K",
			},
	);

	return (
		<div className="flex flex-col gap-4 mb-6 bg-white rounded-[24px] p-4 lg:p-6 shadow-sm border border-gray-100">
			<div className="flex justify-between items-center">
				<div>
					<h1 className="text-[20px] font-semibold text-black">
						Master Audit Ledger
					</h1>
					<p className="text-[16px] text-black/70">
						Global Account Receivable & Risk Exposure
					</p>
				</div>
				<button className="bg-[linear-gradient(90deg,#0863BD_0%,#04458B_100%)] border-2 border-primary text-white px-4 py-2 rounded-[8px] hover:opacity-90 transition text-[16px]">
					Export Audit
				</button>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
				<div className="flex flex-col justify-between h-[133px] p-6 bg-[#F4F4F4] rounded-[16px] border border-[#EDEDED]">
					<p className="text-[26px] font-semibold text-black">
						{stats.totalAllocated}
					</p>
					<p className="text-[16px] text-black mb-3">Total Credit Allocated</p>
				</div>
				<div className="flex flex-col justify-between h-[133px] p-6 bg-[#F4F4F4] rounded-[16px] border border-[#EDEDED]">
					<p className="text-[26px] font-semibold text-black">
						{stats.creditUsed}
					</p>
					<p className="text-[16px] text-black mb-3">Credit Used</p>
				</div>
				<div className="flex flex-col justify-between h-[133px] p-6 bg-[#F4F4F4] rounded-[16px] border border-[#EDEDED]">
					<p className="text-[26px] font-semibold text-black">
						{stats.availableCredits}
					</p>
					<p className="text-[16px] text-black mb-3">Available Credits</p>
				</div>
				<div className="flex flex-col justify-between h-[133px] p-6 bg-white border-2 border-[#BA1A1A] rounded-[16px] shadow-sm">
					<p className="text-[26px] font-semibold text-black">
						{stats.overdueAmount}
					</p>
					<p className="text-[16px] text-black mb-3">Overdue Amount</p>
				</div>
			</div>
		</div>
	);
}
