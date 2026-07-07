"use client";
import { CheckCircle2 } from "lucide-react";

import { useAppSelector } from "../../redux/hooks";

export default function RecentActivity() {
	const activities = useAppSelector((state) => state.finance.activities);

	return (
		<div className="flex flex-col h-full w-full">
			<h2 className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold text-[#000000] mb-2">
				Recent Activity
			</h2>

			<div className="flex flex-col divide-y divide-gray-300">
				{activities.map((activity, idx) => (
					<div
						key={idx}
						className="flex justify-between items-start py-3 group"
					>
						<div className="flex items-start gap-4">
							<div
								className={`w-8 h-8 rounded-full flex items-center border-1 justify-center shrink-0 ${activity.bgColor} ${activity.borderColor}`}
							>
								<CheckCircle2 className={`w-6 h-6 ${activity.iconColor}`} />
							</div>
							<div className="flex flex-col">
								<h3 className="text-[14px] sm:text-[16px] font-medium text-[#000000]">
									{activity.title}
								</h3>
								<p className="text-[12px] sm:text-[14px] text-[#000000B2] font-regular mt-0.5">
									{activity.description}
								</p>
							</div>
						</div>
						<span className="text-[12px] sm:text-[14px] text-[#000000CC] font-regular whitespace-nowrap">
							{activity.time}
						</span>
					</div>
				))}
			</div>
		</div>
	);
}
