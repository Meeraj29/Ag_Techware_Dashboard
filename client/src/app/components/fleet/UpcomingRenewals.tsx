"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { FileText, ShieldCheck } from "lucide-react";

export default function UpcomingRenewals() {
	const { renewalItems } = useSelector((state: RootState) => state.fleet);

	return (
		<div className="rounded-2xl border border-gray-200 bg-white p-4 ">
			<h3 className="text-md font-semibold text-[#000000] mb-4">
				Upcoming Renewals
			</h3>

			<div className="space-y-3">
				{renewalItems.map((item) => (
					<div
						key={item.id}
						className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 rounded-lg p-4 border-l-4 ${item.isUrgent
								? "bg-[#F3F3FE] border-l-[#943700]"
								: "bg-[#F3F3FE] border-l-[#3525CD]"
							}`}
					>
						<div className="flex items-start gap-3">
							<div
								className={`mt-0.5 ${item.isUrgent ? "text-[#943700]" : "text-[#3525CD]"}`}
							>
								{item.type === "insurance" ? (
									<FileText className="h-4 w-4" />
								) : (
									<ShieldCheck className="h-4 w-4" />
								)}
							</div>
							<div>
								<p className="text-sm font-medium text-[#000000CC]">{item.title}</p>
								<p className="text-sm text-[#4D4D4D] mt-0.5">
									{item.expiresIn}
								</p>
							</div>
						</div>

						<button
							className={`text-md font-medium self-start sm:self-auto ml-7 sm:ml-0 ${item.isUrgent ? "text-[#943700]" : "text-[#3525CD]"
								} hover:underline`}
						>
							{item.actionLabel}
						</button>
					</div>
				))}

				{renewalItems.length === 0 && (
					<div className="py-4 text-center text-md text-[#000000]">
						No upcoming renewals.
					</div>
				)}
			</div>
		</div>
	);
}
