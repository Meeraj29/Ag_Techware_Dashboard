"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Truck, Activity, AlertTriangle } from "lucide-react";

export default function TripStats() {
	const tripStats = useSelector((state: RootState) => state.fleet.tripStats);

	const cards = [
		{
			title: "ACTIVE VEHICLES",
			value: tripStats.activeVehicles,
			icon: Truck,
			badge: "+12%",
			badgeClass: "bg-[#248F5F]/40 text-[#005C3D] border border-emerald-100",
		},
		{
			title: "ACTIVE TRIPS",
			value: tripStats.activeTrips,
			icon: Activity,
			badge: "In Motion",
			badgeClass: "bg-[#248F5F]/40 text-[#005C3D] border border-emerald-100",
		},
		{
			title: "DELAY TRIPS",
			value: tripStats.delayTrips,
			icon: AlertTriangle,
			badge: "↑2%",
			badgeClass: "bg-[#DC9C9C] text-[#BA1A1A] border border-red-100",
		},
	];

	return (
		<div className="mt-5 grid gap-4 sm:grid-cols-3">
			{cards.map((card) => {
				const Icon = card.icon;
				return (
					<div key={card.title} className="relative flex justify-between rounded-2xl bg-[#F4F4F4] p-6 h-36">
						<div className="flex flex-col justify-between">
							<div>
								<p className="text-[26px] font-semibold tracking-tight text-black leading-none">{card.value}</p>
								<p className="mt-2 text-[16px] font-medium tracking-wide text-black uppercase">{card.title}</p>
							</div>
						</div>
						<div className="flex flex-col justify-between items-end">
							<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e3e5e8] text-gray-800">
								<Icon className="h-5 w-5" />
							</div>
							<span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide ${card.badgeClass}`}>
								{card.badge}
							</span>
						</div>
					</div>
				);
			})}
		</div>
	);
}
