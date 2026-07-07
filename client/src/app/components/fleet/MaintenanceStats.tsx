"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Wrench, AlertTriangle } from "lucide-react";

export default function MaintenanceStats() {
	const stats = useSelector((state: RootState) => state.fleet.maintenanceStats);

	const cards = [
		{
			title: "UNDER MAINTANCE", // Using spelling from design
			value: stats.underMaintenance,
			icon: Wrench,
			badge: stats.underMaintenanceBadge,
			badgeClass: "bg-[#a2d4ba] text-[#24583d]",
		},
		{
			title: "OVERDUE SERVICES",
			value: stats.overdueServices,
			icon: AlertTriangle,
			badge: stats.overdueServicesBadge,
			badgeClass: "bg-[#e19a9a] text-[#712727]",
		},
	];

	return (
		<div className="mt-3 grid gap-4 sm:grid-cols-2">
			{cards.map((card) => {
				const Icon = card.icon;
				return (
					<div
						key={card.title}
						className="relative flex justify-between rounded-xl bg-[#F4F4F4] p-5 h-[110px]"
					>
						<div className="flex flex-col justify-between h-full">
							<p className="text-[26px] font-semibold tracking-tight text-[#000000] leading-none">
								{String(card.value).padStart(2, "0")}
							</p>
							<p className="text-[12px] font-medium tracking-wide text-[#000000] uppercase">
								{card.title}
							</p>
						</div>
						<div className="flex flex-col justify-between items-end h-full">
							<div className="flex h-[38px] w-[38px] items-center justify-center rounded-xl bg-[#DADADA] text-gray-800">
								<Icon className="h-[15px] w-[15px]" strokeWidth={2.5} />
							</div>
							<span
								className={`rounded-full px-2 py-0.5 text-[10px] font-medium tracking-wide ${card.badgeClass}`}
							>
								{card.badge}
							</span>
						</div>
					</div>
				);
			})}
		</div>
	);
}
