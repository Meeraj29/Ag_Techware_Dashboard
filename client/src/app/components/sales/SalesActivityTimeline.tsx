"use client";

import { CheckCircle2, FileText, XCircle } from "lucide-react";

export default function SalesActivityTimeline() {
	const activities = [
		{
			id: 1,
			title: "QT-2024-001 converted to job",
			time: "10 min ago",
			icon: CheckCircle2,
			iconBg: "bg-green-100",
			iconColor: "text-green-600",
		},
		{
			id: 2,
			title: "New quote requested by Global",
			time: "1 hour ago",
			icon: FileText,
			iconBg: "bg-blue-100",
			iconColor: "text-blue-600",
		},
		{
			id: 3,
			title: "QT-2024-004 rejected by prime",
			time: "3 hour ago",
			icon: XCircle,
			iconBg: "bg-red-100",
			iconColor: "text-red-500",
		},
	];

	return (
		<div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col h-full">
			<div className="flex justify-between items-center mb-6">
				<h2 className="text-xl font-semibold text-black">Activity Timeline</h2>
				<button className="text-[#3525CD] text-sm font-bold hover:underline">
					View ALL
				</button>
			</div>

			<div className="flex flex-col gap-6">
				{activities.map((activity) => (
					<div key={activity.id} className="flex gap-4">
						<div
							className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${activity.iconBg}`}
						>
							<activity.icon className={`h-5 w-5 ${activity.iconColor}`} />
						</div>
						<div className="flex flex-col">
							<span className="text-base font-medium text-black">
								{activity.title}
							</span>
							<span className="text-xs font-normal text-[#8A8A8A] mt-1">
								{activity.time}
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
