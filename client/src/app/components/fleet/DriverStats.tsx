"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { TriangleAlert, Users2, Star } from "lucide-react";

export default function DriverStats() {
	const stats = useSelector((state: RootState) => state.fleet.driverStats);

	const cards = [
		{
			title: "LICENSE EXPIRIES (30 DAYS)",
			value: stats.licenseExpiries.value,
			subtext: stats.licenseExpiries.subtext,
			icon: TriangleAlert,
			isAlert: stats.licenseExpiries.isAlert,
		},
		{
			title: "ACTIVE DRIVERS",
			value: stats.activeDrivers.value,
			subtext: stats.activeDrivers.subtext,
			icon: Users2,
		},
		{
			title: "AVG SAFETY RATING",
			value: stats.avgSafetyRating.value,
			subtext: stats.avgSafetyRating.subtext,
			icon: Star,
			isStar: true,
		},
	];

	return (
		<div className="mt-5 grid gap-4 sm:grid-cols-3">
			{cards.map((card) => {
				const Icon = card.icon;
				return (
					<div
						key={card.title}
						className={`relative flex justify-between rounded-2xl p-6 h-36 border ${
							card.isAlert
								? "bg-[#fff8f8] border-[#ffe8e8]"
								: "bg-[#f5f6f7] border-transparent"
						}`}
					>
						<div className="flex flex-col justify-between">
							<div>
								<p className="text-[11px] font-bold tracking-wide text-gray-900 uppercase">
									{card.title}
								</p>
								<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 leading-none">
									{card.value}
								</p>
							</div>
							<p
								className={`text-[10px] font-medium ${card.isAlert ? "text-red-500" : "text-gray-500"}`}
							>
								{card.subtext}
							</p>
						</div>
						<div className="flex flex-col items-end">
							<div
								className={`flex h-10 w-10 items-center justify-center rounded-xl ${
									card.isAlert
										? "bg-[#ffe8e8] text-red-500"
										: "bg-[#e3e5e8] text-gray-800"
								}`}
							>
								<Icon
									className={`h-4 w-4 ${card.isStar ? "text-amber-500 fill-amber-500" : ""}`}
								/>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
