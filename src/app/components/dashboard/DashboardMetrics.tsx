"use client";
import React from "react";
import { useAppSelector } from "../../redux/hooks";
import {
	Ship,
	Clock,
	CheckCircle,
	FileText,
	IndianRupee,
	CreditCard,
} from "lucide-react";

export default function DashboardMetrics() {
	const metrics = useAppSelector((state) => state.dashboard.metrics);

	const metricCards = [
		{
			title: "Active Shipments",
			value: metrics.activeShipments.value,
			change: metrics.activeShipments.change,
			isPositive: metrics.activeShipments.isPositive,
			icon: Ship,
		},
		{
			title: "Delayed",
			value: metrics.delayed.value,
			change: metrics.delayed.change,
			isPositive: metrics.delayed.isPositive,
			icon: Clock,
		},
		{
			title: "Jobs In Progress",
			value: metrics.jobsInProgress.value,
			change: metrics.jobsInProgress.change,
			isPositive: metrics.jobsInProgress.isPositive,
			icon: CheckCircle,
		},
		{
			title: "Pending Quotes",
			value: metrics.pendingQuotes.value,
			change: metrics.pendingQuotes.change,
			isPositive: metrics.pendingQuotes.isPositive,
			icon: FileText,
		},
		{
			title: "Revenue (YTD)",
			value: metrics.revenue.value,
			change: metrics.revenue.change,
			isPositive: metrics.revenue.isPositive,
			icon: IndianRupee,
		},
		{
			title: "Pending Payments",
			value: metrics.pendingPayments.value,
			change: metrics.pendingPayments.change,
			isPositive: metrics.pendingPayments.isPositive,
			icon: CreditCard,
		},
	];

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-6">
			{metricCards.map((card, idx) => (
				<div
					key={idx}
					className="bg-[#F4F4F4] rounded-xl p-5 border border-[#EDEDED] flex flex-col justify-between h-36 relative overflow-hidden"
				>
					<div className="flex justify-between items-start">
						<span className="text-2xl font-semibold text-black">
							{card.value}
						</span>
						<div className="p-2 bg-[#DADADA] rounded-md text-black">
							<card.icon size={28} />
						</div>
					</div>
					<div className="flex justify-between items-end">
						<span className="text-base font-medium text-black">
							{card.title}
						</span>
						<span
							className={`text-xs font-bold px-2 py-1 rounded-full ${
								card.change === "Stable"
									? "bg-[#3525CD66] text-[#3525CD]"
									: card.isPositive
										? "bg-[#248F5F66] text-[#10B981]"
										: "bg-[#BA1A1A66] text-[#BA1A1A]"
							}`}
						>
							{card.change}
						</span>
					</div>
				</div>
			))}
		</div>
	);
}
