"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { TriangleAlert, CheckCircle2, FileCheck, TrendingUp } from "lucide-react";

export default function ComplianceStats() {
	const stats = useSelector((state: RootState) => state.fleet.complianceStats);

	const cards = [
		{
			title: "CRITICAL ATTENTION REQUIRED",
			value: stats.criticalAttention.value,
			subtext: stats.criticalAttention.subtext,
			icon: TriangleAlert,
			cardBg: "bg-[#FFEFEE]",
			borderColor: "border-[#FFADA4]",
			iconBg: "bg-[#DADADA]",
			iconColor: "text-[#93000A]",
			showTrend: false,
		},
		{
			title: "ASSECTS HEALTH", // Keeping typo from design
			value: stats.assetsHealth.value,
			subtext: stats.assetsHealth.subtext,
			icon: CheckCircle2,
			cardBg: "bg-[#F4F4F4]",
			borderColor: "border-[#EDEDED]",
			iconBg: "bg-[#DADADA]",
			iconColor: "text-[#33CC16]", // green
			showTrend: true,
		},
		{
			title: "PENDING RENEWAL",
			value: stats.pendingRenewal.value.toString().padStart(2, "0"),
			subtext: stats.pendingRenewal.subtext,
			icon: FileCheck,
			cardBg: "bg-[#F4F4F4]",
			borderColor: "border-[#EDEDED]",
			iconBg: "bg-[#DADADA]",
			iconColor: "text-[#7C8EEB]", // blue
			showTrend: false,
		},
	];

	return (
		<div className="mt-4 grid gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
			{cards.map((card) => {
				const Icon = card.icon;
				return (
					<div
						key={card.title}
						className={`relative flex justify-between rounded-2xl ${card.cardBg} p-3 h-[120px] border ${card.borderColor}`}
					>
						<div className="flex flex-col justify-between h-full">
							<div>
								<p className="text-sm font-medium text-[#000000] uppercase">
									{card.title}
								</p>
								<p className="mt-2 text-2xl font-semibold tracking-tight text-[#000000] leading-none">
									{card.value}
								</p>
							</div>
							<div className="flex items-center gap-1">
								{card.showTrend && (
									<TrendingUp className="h-3 w-3 text-[#7D2D00]" />
								)}
								<p className={`text-xs font-medium ${card.showTrend ? "text-[#7D2D00]" : "text-[#515F74]"}`}>
									{card.subtext}
								</p>
							</div>
						</div>
						<div className="flex flex-col items-end">
							<div className={`flex h-10 w-10 items-center justify-center rounded-xl ${card.iconBg}`}>
								<Icon className={`h-5 w-5 ${card.iconColor}`} strokeWidth={2.5} />
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
