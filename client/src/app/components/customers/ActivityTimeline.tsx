"use client";

import React from "react";
import { useSelector } from "react-redux";
import { Check, Truck, AlertCircle, AlertTriangle } from "lucide-react";
import { RootState } from "../../redux/store";
import { ActivityTimelineItem } from "../../types/customers";

export function ActivityTimeline() {
	const timeline = useSelector((state: RootState) => state.customers.timeline);

	const getIconStyles = (type: string) => {
		switch (type) {
			case "payment":
				return {
					icon: Check,
					bg: "bg-[#E6F4EA]",
					border: "border-[#13803B]/20",
					text: "text-[#13803B]",
				};
			case "shipment":
				return {
					icon: Truck,
					bg: "bg-[#E8F0FE]",
					border: "border-[#1A73E8]/20",
					text: "text-[#1A73E8]",
				};
			case "alert":
				return {
					icon: AlertCircle,
					bg: "bg-[#FEF7E0]",
					border: "border-[#F9AB00]/20",
					text: "text-[#F9AB00]",
				};
			case "hold":
				return {
					icon: AlertTriangle,
					bg: "bg-[#FCE8E6]",
					border: "border-[#C5221F]/20",
					text: "text-[#C5221F]",
				};
			default:
				return {
					icon: AlertCircle,
					bg: "bg-gray-100",
					border: "border-gray-200",
					text: "text-gray-600",
				};
		}
	};

	return (
		<div className="bg-white rounded-3xl border border-gray-200 p-6 w-full">
			<h2 className="text-lg font-bold text-gray-800 mb-6">
				Activity Timeline
			</h2>

			<div className="relative pl-6 flex flex-col gap-6">
				{/* Timeline line */}
				<div className="absolute left-4.75 top-4 bottom-4 w-0.5 bg-gray-100"></div>

				{timeline.map((item: ActivityTimelineItem) => {
					const styles = getIconStyles(item.type);
					const IconComponent = styles.icon;
					return (
						<div
							key={item.id}
							className="relative flex justify-between items-start gap-4"
						>
							{/* Timeline marker */}
							<div className="absolute -left-7.75 mt-0.5 z-10">
								<div
									className={`w-8 h-8 rounded-full border ${styles.bg} ${styles.border} ${styles.text} flex items-center justify-center`}
								>
									<IconComponent className="w-4 h-4" />
								</div>
							</div>

							{/* Content */}
							<div className="flex-1 min-w-0">
								<p className="text-sm font-bold text-gray-800">{item.title}</p>
								<p className="text-sm text-gray-500 mt-0.5">
									{item.description}
								</p>
							</div>

							{/* Time */}
							<span className="text-xs text-gray-400 whitespace-nowrap shrink-0 pt-0.5">
								{item.time}
							</span>
						</div>
					);
				})}
			</div>
		</div>
	);
}
