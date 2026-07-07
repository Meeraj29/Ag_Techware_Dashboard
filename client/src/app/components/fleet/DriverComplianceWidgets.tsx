"use client";

import { CheckSquare, CalendarDays } from "lucide-react";

export default function DriverComplianceWidgets() {
	return (
		<div className="grid gap-4 mt-4 md:grid-cols-2">
			{/* Compliance Score Widget */}
			<div className="rounded-2xl border border-[#EDEDED] bg-white p-4 flex items-center justify-between">
				<div className="flex items-center gap-4 w-full p-4 bg-[#F8F8F8] rounded-2xl">
					<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EDEDF9] text-[#004AC6]">
						<CheckSquare className="h-5 w-5" />
					</div>
					<div className="flex-1">
						<div className="flex items-center gap-3 mb-2">
							<span className="text-sm font-medium text-[#000000]">
								Compliance Score
							</span>
						</div>
						<div className="flex items-center gap-3 w-full">
							<div className="w-full bg-[#E1E2ED] rounded-full h-1.5">
								<div
									className="bg-[#004AC6] h-1.5 rounded-full"
									style={{ width: "92%" }}
								></div>
							</div>
							<span className="text-xs font-bold text-[#004AC6]">92%</span>
						</div>
					</div>
				</div>
			</div>

			{/* Renewal Queue Widget */}
			<div className="rounded-2xl border border-[#EDEDED] bg-white p-4 flex items-center justify-between">
				<div className="flex items-center gap-4 w-full p-4 bg-[#F8F8F8] rounded-2xl">
					<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FEEBDE] text-[#943700]">
						<CalendarDays className="h-5 w-5" />
					</div>
					<div>
						<h4 className="text-sm font-medium text-[#000000]">Renewal Queue</h4>
						<p className="text-[12px] text-[#4A4C4F] font-medium mt-0.5">
							5 drivers scheduled for medical exam next week.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
