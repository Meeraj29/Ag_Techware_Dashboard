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
		<div className="bg-[#0863BC] rounded-xl p-6 shadow-sm col-span-1 flex flex-col justify-between h-64">
			<h2 className="text-lg font-semibold text-white mb-4">Quick Actions</h2>
			<div className="grid grid-cols-2 gap-3 flex-1">
				{actions.map((action, idx) => (
					<div key={idx} className="group h-full">
						<button className="w-full h-full bg-white rounded-lg flex flex-col items-center border border-primary justify-center p-3 gap-2 group-hover:bg-primary cursor-pointer transition-colors">
							<action.icon
								size={24}
								className="text-primary group-hover:text-white transition-colors"
							/>
							<span className="text-base font-bold text-primary group-hover:text-white transition-colors">
								{action.name}
							</span>
						</button>
					</div>
				))}
			</div>
		</div>
	);
}
