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
			badgeClass: "bg-emerald-50 text-emerald-600 border border-emerald-100",
		},
		{
			title: "OVERDUE SERVICES",
			value: stats.overdueServices,
			icon: AlertTriangle,
			badge: stats.overdueServicesBadge,
			badgeClass: "bg-red-50 text-red-500 border border-red-100",
		},
	];

	return (
		<div className="mt-5 grid gap-4 sm:grid-cols-2">
			{cards.map((card) => {
				const Icon = card.icon;
				return (
					<div
						key={card.title}
						className="relative flex justify-between rounded-2xl bg-[#f5f6f7] p-6 h-36"
					>
						<div className="flex flex-col justify-between">
							<div>
								<p className="text-3xl font-bold tracking-tight text-gray-900 leading-none">
									{card.value}
								</p>
								<p className="mt-2 text-xs font-bold tracking-wide text-gray-500 uppercase">
									{card.title}
								</p>
							</div>
						</div>
						<div className="flex flex-col justify-between items-end">
							<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e3e5e8] text-gray-800">
								<Icon className="h-5 w-5" />
							</div>
							<span
								className={`rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide ${card.badgeClass}`}
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
