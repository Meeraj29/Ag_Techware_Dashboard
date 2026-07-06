"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Copy, FileText, History } from "lucide-react";

export default function TireStats() {
	const stats = useSelector((state: RootState) => state.fleet.tireStats);

	const cards = [
		{
			title: "REPLACEMENT DUE",
			value: stats.replacementDue.value,
			subtext: stats.replacementDue.subtext,
			icon: Copy, // generic icon for the card
		},
		{
			title: "MONITOR STATUS",
			value: stats.monitorStatus.value,
			subtext: stats.monitorStatus.subtext,
			icon: FileText,
		},
		{
			title: "AVG LIFESPAN",
			value: stats.avgLifespan.value,
			subtext: stats.avgLifespan.subtext,
			icon: History,
		},
	];

	return (
		<div className="mt-5 grid gap-4 sm:grid-cols-3">
			{cards.map((card) => {
				const Icon = card.icon;
				return (
					<div
						key={card.title}
						className="relative flex justify-between rounded-2xl bg-[#f5f6f7] p-6 h-36"
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
							<p className="text-[10px] text-gray-500 font-medium">
								{card.subtext}
							</p>
						</div>
						<div className="flex flex-col items-end">
							<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e3e5e8] text-gray-600">
								<Icon className="h-4 w-4" />
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
