"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Wrench, AlertCircle, RefreshCw } from "lucide-react";

export default function RotationHistory() {
	const { rotationLogs } = useSelector((state: RootState) => state.fleet);

	return (
		<div className="rounded-[24px] border border-gray-100 bg-white p-6 shadow-sm mt-6">
			<div className="flex items-center justify-between mb-6">
				<h3 className="text-sm font-bold text-gray-900">Rotation History</h3>
				<button className="text-xs font-bold text-blue-600 hover:underline">
					View All Logs
				</button>
			</div>

			<div className="relative pl-3">
				{/* Vertical line connecting the timeline dots */}
				<div className="absolute top-3 bottom-6 left-5 w-[2px] bg-gray-100"></div>

				<div className="space-y-6">
					{rotationLogs.map((log) => {
						const Icon =
							log.type === "rotation"
								? RefreshCw
								: log.type === "repair"
									? AlertCircle
									: Wrench;
						const iconBg =
							log.type === "rotation"
								? "bg-blue-50 text-blue-500"
								: log.type === "repair"
									? "bg-red-50 text-red-500"
									: "bg-gray-100 text-gray-500";

						return (
							<div key={log.id} className="relative flex gap-4">
								<div className="relative z-10 flex h-5 w-5 items-center justify-center rounded-full mt-1 bg-white border-2 border-white">
									<div
										className={`flex h-6 w-6 items-center justify-center rounded-full ${iconBg}`}
									>
										<Icon className="h-3 w-3" />
									</div>
								</div>

								<div className="flex-1 pb-2">
									<div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-medium mb-1">
										<span>{log.dateStr},</span>
										<span>{log.timeStr}</span>
									</div>
									<h4 className="text-sm font-bold text-gray-900 mb-0.5">
										{log.vehicle}
									</h4>
									<p className="text-xs text-gray-500">{log.description}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
