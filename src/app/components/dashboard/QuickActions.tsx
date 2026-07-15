import React from "react";
import { FilePlus, Target, PlusCircle, UploadCloud } from "lucide-react";

export default function QuickActions() {
	const actions = [
		{ name: "Create Quote", icon: FilePlus },
		{ name: "Track Shipment", icon: Target },
		{ name: "Create Job", icon: PlusCircle },
		{ name: "Upload Docs", icon: UploadCloud },
	];

	return (
		<div className="bg-[#0863BC] rounded-xl p-4 sm:p-6 shadow-sm col-span-1 md:col-span-1 flex flex-col justify-between h-auto w-full">
			<h2 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Quick Actions</h2>
			<div className="grid grid-cols-2 gap-3 sm:gap-4 flex-1">
				{actions.map((action, idx) => (
					<div key={idx} className="group h-full min-h-[90px] sm:min-h-0">
						<button className="w-full h-full bg-white rounded-lg flex flex-col items-center border border-primary justify-center p-2 sm:p-3 gap-1 sm:gap-2 group-hover:bg-primary cursor-pointer transition-colors">
							<action.icon
								size={24}
								className="text-primary group-hover:text-white transition-colors w-5 h-5 sm:w-6 sm:h-6"
							/>
							<span className="text-xs sm:text-sm md:text-base font-bold text-primary group-hover:text-white transition-colors text-center">
								{action.name}
							</span>
						</button>
					</div>
				))}
			</div>
		</div>
	);
}
