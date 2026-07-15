"use client";
import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { CheckCircle2, Truck, AlertCircle } from "lucide-react";

export default function ActivityTimeline() {
	const activities = useAppSelector((state) => state.dashboard.activities);

	return (
		<div className="bg-white rounded-xl  p-5 mt-6">
			<h2 className="text-xl font-semibold text-black mb-4">
				Activity Timeline
			</h2>

			<div className="flex flex-col">
				{activities.map((activity, idx) => (
					<div
						key={idx}
						className="flex gap-4 items-start py-4 border-b border-[#F0F0F0] first:pt-0 last:border-0 last:pb-0"
					>
						<div
							className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border mt-0.5 ${
								activity.type === "Payment Processed"
									? "border-[#10B981] text-[#10B981]"
									: activity.type === "Shipment Outbound"
										? "border-[#3525CD] text-[#3525CD]"
										: "border-[#F59E0B] text-[#F59E0B]"
							}`}
						>
							{activity.type === "Payment Processed" && (
								<CheckCircle2 size={16} strokeWidth={2} />
							)}
							{activity.type === "Shipment Outbound" && (
								<Truck size={14} strokeWidth={2} />
							)}
							{activity.type === "Customs Alert" && (
								<AlertCircle size={16} strokeWidth={2} />
							)}
						</div>

						<div className="flex-1">
							<div className="flex justify-between items-start mb-1">
								<h3 className="text-base font-medium text-black">
									{activity.title}
								</h3>
								<span className="text-sm font-normal text-black mt-0.5">
									{activity.time}
								</span>
							</div>
							<p className="text-xs text-black font-normal">
								{activity.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
