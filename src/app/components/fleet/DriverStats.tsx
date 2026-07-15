"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { TriangleAlert, Users2, Star, TrendingUp, CheckCircle2, History } from "lucide-react";

export default function DriverStats() {
	const stats = useSelector((state: RootState) => state.fleet.driverStats);

	const cards = [
		{
			title: "LICENSE EXPIRIES",
			titleHighlight: "(30 DAYS)",
			value: stats.licenseExpiries.value,
			subtext: "+4 from last month",
			icon: TriangleAlert,
			cardBg: "bg-[#F4F4F4]",
			iconBg: "bg-[#DADADA]",
			iconColor: "text-[#93000A]",
			TrendIcon: TrendingUp,
			trendColor: "text-[#515F74]",
		},
		{
			title: "ACTIVE DRIVERS",
			value: stats.activeDrivers.value,
			subtext: "148 currently assigned",
			icon: Users2,
			cardBg: "bg-[#F4F4F4]",
			iconBg: "bg-[#DADADA]",
			iconColor: "text-[#004AC6]",
			TrendIcon: CheckCircle2,
			trendColor: "text-[#515F74]",
		},
		{
			title: "AVG SAFETY RATING",
			value: stats.avgSafetyRating.value,
			subtext: "Stable vs last week",
			icon: Star,
			cardBg: "bg-[#F4F4F4]",
			iconBg: "bg-[#DADADA]",
			iconColor: "text-[#943700]",
			isStar: true,
			TrendIcon: History,
			trendColor: "text-[#515F74]",
		},
	];

	return (
		<div className="mt-4 grid gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
			{cards.map((card) => {
				const Icon = card.icon;
				const TrendIcon = card.TrendIcon;
				return (
					<div
						key={card.title}
						className={`relative flex justify-between rounded-2xl ${card.cardBg} p-4 h-[120px] border border-[#EDEDED]`}
					>
						<div className="flex flex-col justify-between h-full">
							<div>
								<p className="text-sm font-medium text-[#000000] uppercase">
									{card.title}
									{card.titleHighlight && (
										<span className="text-[#BA1A1A] ml-1">{card.titleHighlight}</span>
									)}
								</p>
								<p className="mt-2 text-2xl font-semibold tracking-tight text-[#000000] leading-none">
									{card.value}
								</p>
							</div>
							<div className="flex items-center gap-1.5">
								{TrendIcon && (
									<TrendIcon className={`h-3.5 w-3.5 ${card.trendColor}`} />
								)}
								<p className={`text-xs font-medium ${card.trendColor}`}>
									{card.subtext}
								</p>
							</div>
						</div>
						<div className="flex flex-col items-end">
							<div className={`flex h-10 w-10 items-center justify-center rounded-xl ${card.iconBg}`}>
								<Icon className={`h-5 w-5 ${card.iconColor} ${card.isStar ? "fill-[#943700]" : ""}`} strokeWidth={2.5} />
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
