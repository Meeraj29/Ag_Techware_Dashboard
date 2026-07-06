"use client";
import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { Clock, FileWarning, AlertTriangle } from "lucide-react";

export default function AlertsWidget() {
	const alerts = useAppSelector((state) => state.dashboard.alerts);

	return (
		<div className="bg-white rounded-xl  flex flex-col h-full overflow-y-scroll scrollbar-hide">
			<div className="flex justify-between items-center p-5 border-b border-gray-100 shrink-0">
				<h2 className="text-xl font-semibold text-black flex items-center gap-2">
					<AlertTriangle className="text-[#BA1A1A] " size={20} />
					Alerts & Exceptions
				</h2>
				<span className="bg-[#BA1A1A] text-white text-xs font-normal px-2 py-1 rounded-full">
					12 New
				</span>
			</div>

			<div className="overflow-y-auto flex-1 p-5 space-y-4 max-h-[600px] scrollbar-hide">
				{alerts.map((alert, idx) => (
					<div key={idx} className="relative pl-4 border-l-2 border-gray-100">
						{/* Custom styled vertical line indicator based on alert type */}
						<div
							className={`absolute -left-px top-0 bottom-0 w-[2px] ${
								alert.type === "Shipment Delayed"
									? "bg-[#BA1A1A]"
									: alert.type === "Missing Documentation"
										? "bg-amber-400"
										: "bg-blue-400"
							}`}
						></div>

						<div className="flex justify-between items-start mb-1">
							<span
								className={`text-xs font-medium tracking-wider ${
									alert.type === "Shipment Delayed"
										? "text-[#BA1A1A]"
										: alert.type === "Missing Documentation"
											? "text-amber-500"
											: "text-blue-400"
								}`}
							>
								{alert.type}
							</span>
							{alert.type === "Shipment Delayed" && (
								<Clock size={14} className="text-red-500" />
							)}
							{alert.type === "Missing Documentation" && (
								<FileWarning size={14} className="text-amber-500" />
							)}
						</div>

						<h3 className="text-base font-medium text-black mb-1">
							{alert.title}
						</h3>
						<p className="text-sm text-black font-normal leading-snug mb-3">
							{alert.description}
						</p>

						<div className="flex items-center gap-3">
							{alert.actionText && (
								<button className="text-xs font-bold bg-[#EDEDED] text-black border border-[#CCCCCC] px-3 py-3 rounded-md  transition-colors">
									{alert.actionText}
								</button>
							)}
							{alert.type !== "System Advisory" && (
								<button className="text-base font-medium text-primary hover:underline cursor-pointer">
									{alert.type === "Shipment Delayed" ? "View Map" : "Contact"}
								</button>
							)}
						</div>
					</div>
				))}
			</div>

			<div className="p-4 border-t border-gray-100 shrink-0 mt-auto bg-white">
				<button className="w-full py-2 border border-[#04458B] text-[#04458B] text-sm font-bold rounded-lg hover:bg-blue-50 transition-colors">
					View All
				</button>
			</div>
		</div>
	);
}
