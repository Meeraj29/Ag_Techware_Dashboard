"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { History, LineChart, Banknote, } from "lucide-react";

export default function TireStats() {
	const stats = useSelector((state: RootState) => state.fleet.tireStats);

	const cards = [
		{
			title: "REPLACEMENT DUE",
			value: stats.replacementDue.value,
			subtext: stats.replacementDue.subtext,
			icon: Banknote,
			iconColor: "text-[#808080]",
		},
		{
			title: "MONITOR STATUS",
			value: stats.monitorStatus.value,
			subtext: stats.monitorStatus.subtext,
			icon: LineChart,
			iconColor: "text-[#004AC6]",
		},
		{
			title: "AVG LIFESPAN",
			value: stats.avgLifespan.value,
			subtext: stats.avgLifespan.subtext,
			icon: History,
			iconColor: "text-[#943700]",
		},
	];

	return (
		<div className="mt-4 grid gap-4 sm:grid-cols-3">
			{cards.map((card) => {
				const Icon = card.icon;
				return (
					<div
						key={card.title}
						className="relative flex justify-between rounded-2xl bg-[#F4F4F4] p-4 h-[120px] border-1 border-[#EDEDED"
					>
						<div className="flex flex-col justify-between h-full">
							<div>
								<p className="text-sm font-medium tracking-wide text-[#000000] uppercase">
									{card.title}
								</p>
								<p className="mt-2 text-2xl font-semibold tracking-tight text-[#000000] leading-none">
									{card.value}
								</p>
							</div>
							<p className="text-xs text-[#515F74] font-medium">
								{card.subtext}
							</p>
						</div>
						<div className="flex flex-col items-end">
							<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DADADA]">
								<Icon className={`h-5 w-5 ${card.iconColor}`} strokeWidth={2.5} />
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
