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
			subTitle: " ACTIONS REQUIRED",
			subTitleClass: "text-[#880000] font-medium",
			value: purchaseStats.onTimeDeliveryRate.value,
			icon: ShieldAlert,
			badge: purchaseStats.onTimeDeliveryRate.badge,
			badgeClass: "bg-[#f4b3b3] text-[#a93c3c]",
		},
		{
			title: "ACTIVE VENDORS",
			subTitle: `Across Regions`,
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
		<div className="mt-5 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
			{cards.map((card, index) => {
				const Icon = card.icon;
				
				// Determine how to display the text based on the card title
				let topText = card.value;
				let topSuffix = "";
				let bottomText = card.title;
				let bottomSuffix = card.subTitle;

				if (card.title === "On-Time Delivery rate") {
					topSuffix = " ACTIONS REQUIRED";
					bottomText = "ON-TIME DELIVERY RATE";
					bottomSuffix = "";
				} else if (card.title === "ACTIVE VENDORS") {
					topSuffix = " ACROSS REGIONS";
					bottomText = "ACTIVE VENDORS";
					bottomSuffix = "";
				} else if (card.title === "ON-TIME DELIVERY") {
					topSuffix = "";
					bottomText = "ON-TIME DELIVERY";
					bottomSuffix = ""; // Don't append the '3' to the title
				}

				return (
					<div
						key={index}
						className="relative flex justify-between gap-2 rounded-[20px] bg-[#f5f6f7] p-5 min-h-[133px]"
					>
						<div className="flex flex-col justify-between">
							<div>
								<div className="flex items-baseline gap-1.5 flex-wrap">
									<p className="text-[26px] font-semibold tracking-tight text-black leading-none">
										{topText}
									</p>
									{topSuffix && (
										<span
											className={`text-[15px] uppercase tracking-wide ${card.subTitleClass || "text-black font-medium"
												}`}
										>
											{topSuffix}
										</span>
									)}
								</div>
								<p className="mt-2 text-[14px] font-medium tracking-wide text-black uppercase leading-tight max-w-[120px]">
									{bottomText} {bottomSuffix && <span className="block">{bottomSuffix}</span>}
								</p>
							</div>
						</div>

						<div className="flex flex-col justify-between items-end">
							<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#e3e5e8] text-gray-800 shrink-0">
								<Icon className="h-[18px] w-[18px]" />
							</div>

							<span
								className={`rounded-full px-2 py-0.5 text-[14px] font-bold tracking-wide shrink-0 ${card.badgeClass}`}
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
