"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Wrench, AlertCircle, RefreshCw } from "lucide-react";

export default function RotationHistory() {
	const { rotationLogs } = useSelector((state: RootState) => state.fleet);

	return (
		<div className="rounded-2xl border border-gray-100 bg-white p-4">
			<div className="flex items-center justify-between mb-4">
				<h3 className="text-md font-semibold text-[#000000]">Rotation History</h3>
				<button className="text-sm font-semibold text-[#044890] hover:underline">
					View All Logs
				</button>
			</div>

			<div className="relative">
				{/* Vertical line connecting the timeline dots */}
				<div className="absolute top-3 bottom-6 left-3.5 w-[2px] bg-gray-200"></div>

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
								? "bg-[#D5E3FC] text-[#004AC6]"
								: log.type === "repair"
									? "bg-[#FFDAD6] text-[#BA1A1A]"
									: "bg-[#E7E7F3] text-[#515F74]";

						return (
							<div key={log.id} className="relative flex gap-4">
								<div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full mt-1 bg-white border-2 border-white">
									<div
										className={`flex h-6 w-6 items-center justify-center rounded-full ${iconBg}`}
									>
										<Icon className="h-3 w-3" />
									</div>
								</div>

								<div className="flex-1 pb-2">
									<div className="flex items-center gap-1.5 text-[10px] text-[#515F74] font-medium mb-1">
										<span>{log.dateStr},</span>
										<span>{log.timeStr}</span>
									</div>
									<h4 className="text-md font-semibold text-[#000000] mb-0.5">
										{log.vehicle}
									</h4>
									<p className="text-xs text-[#515F74] font-regular">{log.description}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
