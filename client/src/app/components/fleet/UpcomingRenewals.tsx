"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { FileText, ShieldCheck } from "lucide-react";

export default function UpcomingRenewals() {
	const { renewalItems } = useSelector((state: RootState) => state.fleet);

	return (
		<div className="rounded-[24px] border border-gray-100 bg-white p-6 shadow-sm mt-6">
			<h3 className="text-sm font-bold text-gray-900 mb-4">
				Upcoming Renewals
			</h3>

			<div className="space-y-3">
				{renewalItems.map((item) => (
					<div
						key={item.id}
						className={`flex items-center justify-between rounded-xl p-4 border-l-4 ${
							item.isUrgent
								? "bg-[#fff8f5] border-l-[#d35400]"
								: "bg-[#f5f8ff] border-l-[#0052cc]"
						}`}
					>
						<div className="flex items-start gap-3">
							<div
								className={`mt-0.5 ${item.isUrgent ? "text-[#d35400]" : "text-[#0052cc]"}`}
							>
								{item.type === "insurance" ? (
									<FileText className="h-4 w-4" />
								) : (
									<ShieldCheck className="h-4 w-4" />
								)}
							</div>
							<div>
								<p className="text-xs font-bold text-gray-900">{item.title}</p>
								<p className="text-[10px] text-gray-500 mt-0.5">
									{item.expiresIn}
								</p>
							</div>
						</div>

						<button
							className={`text-xs font-bold ${
								item.isUrgent ? "text-[#d35400]" : "text-[#0052cc]"
							} hover:underline`}
						>
							{item.actionLabel}
						</button>
					</div>
				))}

				{renewalItems.length === 0 && (
					<div className="py-4 text-center text-xs text-gray-500">
						No upcoming renewals.
					</div>
				)}
			</div>
		</div>
	);
}
