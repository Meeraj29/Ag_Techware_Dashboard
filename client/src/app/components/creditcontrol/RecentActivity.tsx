"use client";

import React from "react";
import { useSelector } from "react-redux";
import { Activity } from "../../types/creditControl";

export function RecentActivity() {
	const activities = useSelector(
		(state: any) => state.creditControl?.recentActivity || [],
	);

	const getActivityMarkerStyles = (type: string) => {
		switch (type) {
			case "success":
				return {
					outer: "border-[#059669] bg-white",
					inner: "bg-[#059669]",
				};
			case "error":
				return {
					outer: "border-[#BA1A1A]   bg-white",
					inner: "bg-[#BA1A1A]",
				};
			case "warning":
				return {
					outer: "border-[#F59E0B] bg-white",
					inner: "bg-[#F59E0B]",
				};
			default:
				return {
					outer: "border-gray-300 bg-white",
					inner: "bg-gray-400",
				};
		}
	};

	return (
		<div className="bg-white rounded-[24px] border border-gray-200 p-6 w-full max-h-[395px] flex flex-col">
			<div className="flex justify-between items-center mb-6">
				<h2 className="font-semibold text-[20px] text-black">
					Recent Activity
				</h2>
				<button className="text-black">⋮</button>
			</div>
			<div className="flex flex-col gap-5 flex-1 overflow-y-auto pr-1">
				{activities.map((activity: Activity) => {
					const markerStyles = getActivityMarkerStyles(activity.type);
					return (
						<div
							key={activity.id}
							className="flex gap-4 items-start border-b border-gray-100/65 pb-4 last:border-b-0 last:pb-0"
						>
							<div className="shrink-0 pt-0.5">
								<div
									className={`w-[26px] h-[26px] rounded-full border-2 ${markerStyles.outer} flex items-center justify-center`}
								>
									<div
										className={`w-[12px] h-[12px] rounded-full ${markerStyles.inner}`}
									/>
								</div>
							</div>
							<div className="flex-1 flex justify-between gap-3">
								<div>
									<p className="text-[16px] font-medium text-black">
										{activity.title}
									</p>
									<p className="text-[14px] text-black mt-0.5">
										{activity.time}
									</p>
								</div>
								<span className="text-[14px] text-black/80 whitespace-nowrap pt-0.5">
									{activity.relativeTime}
								</span>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
