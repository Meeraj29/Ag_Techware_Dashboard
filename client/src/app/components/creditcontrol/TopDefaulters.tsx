"use client";

import React from "react";
import { useSelector } from "react-redux";
import { Defaulter } from "../../types/creditControl";

export function TopDefaulters() {
	const defaulters = useSelector(
		(state: any) => state.creditControl?.topDefaulters || [],
	);

	return (
		<div className="bg-white rounded-[24px] border border-gray-200 p-6 w-full h-[395px] flex flex-col">
			<div className="flex justify-between items-center mb-6">
				<h2 className="font-semibold text-black text-[20px]">Top Defaulters</h2>
				<button className="text-black">⋮</button>
			</div>
			<div className="flex flex-col gap-5 flex-1">
				{defaulters.map((d: Defaulter) => (
					<div key={d.id} className="flex justify-between items-center">
						<div className="flex items-center gap-3">
							<div className="p-4 bg-[#DADADA] rounded-[12px] flex items-center justify-center font-semibold text-black text-[16px] shrink-0">
								{d.initials}
							</div>
							<div>
								<p className="font-medium text-black text-[16px]">{d.name}</p>
								<p className="text-[14px] text-black/80">
									{d.daysOverdue} Days Overdue
								</p>
							</div>
						</div>
						<p className="font-medium text-[#BA1A1A] text-[18px]">
							₹{d.overdueAmount.toLocaleString("en-US")}
						</p>
					</div>
				))}
			</div>
			<button className="w-full mt-4 py-2 border-2 border-primary text-primary rounded-md font-medium hover:bg-blue-50 transition text-[16px]">
				View All
			</button>
		</div>
	);
}
