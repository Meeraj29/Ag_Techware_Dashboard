"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { CreditCard, ShieldAlert, Users, Clock } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface StatCard {
	title: string;
	subTitle: string;
	subTitleClass?: string;
	value: string;
	icon: LucideIcon;
	badge: string;
	badgeClass: string;
}

export default function PurchaseStats() {
	const { purchaseStats } = useSelector((state: RootState) => state.fleet);

	const cards: StatCard[] = [
		{
			title: "TOTAL PO SPEND",
			subTitle: "(MONTHLY)",
			value: purchaseStats.totalPoSpend.value,
			icon: CreditCard,
			badge: purchaseStats.totalPoSpend.badge,
			badgeClass: "bg-[#d1eae1] text-[#1c7b57]",
		},
		{
			title: "On-Time Delivery rate",
			subTitle: "14 ACTIONS REQUIRED",
			subTitleClass: "text-red-600 font-semibold",
			value: purchaseStats.onTimeDeliveryRate.value,
			icon: ShieldAlert,
			badge: purchaseStats.onTimeDeliveryRate.badge,
			badgeClass: "bg-[#f4b3b3] text-[#a93c3c]",
		},
		{
			title: "ACTIVE VENDORS",
			subTitle: `${purchaseStats.activeVendors.value} Across Regions`,
			value: purchaseStats.activeVendors.value,
			icon: Users,
			badge: purchaseStats.activeVendors.badge,
			badgeClass: "bg-[#d1eae1] text-[#1c7b57]",
		},
		{
			title: "ON-TIME DELIVERY",
			subTitle: purchaseStats.pendingDeliveries.value,
			value: purchaseStats.pendingDeliveries.value,
			icon: Clock,
			badge: purchaseStats.pendingDeliveries.badge,
			badgeClass: "bg-[#f4b3b3] text-[#a93c3c]",
		},
	];

	return (
		<div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
			{cards.map((card, index) => {
				const Icon = card.icon;
				return (
					<div
						key={index}
						className="relative flex justify-between rounded-[20px] bg-[#f5f6f7] p-5 h-[133px]"
					>
						<div className="flex flex-col justify-between">
							<div>
								<div className="flex items-baseline gap-1.5">
									<p className="text-3xl font-bold tracking-tight text-gray-900 leading-none">
										{card.value}
									</p>
									{(card.title === "On-Time Delivery rate" ||
										card.title === "ACTIVE VENDORS") && (
										<span
											className={`text-[10px] uppercase tracking-wide ${
												card.subTitleClass || "text-gray-400 font-bold"
											}`}
										>
											{card.subTitle}
										</span>
									)}
								</div>
								<p className="mt-2 text-xs font-bold tracking-wide text-gray-500 uppercase leading-tight">
									{card.title === "On-Time Delivery rate" ||
									card.title === "ACTIVE VENDORS"
										? card.title
										: `${card.title} ${card.subTitle || ""}`}
								</p>
							</div>
						</div>

						<div className="flex flex-col justify-between items-end">
							<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#e3e5e8] text-gray-800">
								<Icon className="h-[18px] w-[18px]" />
							</div>

							<span
								className={`rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wide ${card.badgeClass}`}
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
