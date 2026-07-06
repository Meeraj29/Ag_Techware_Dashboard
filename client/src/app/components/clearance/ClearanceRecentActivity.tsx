import {
	FileText,
	CheckCircle2,
	AlertCircle,
	User,
	MessageSquare,
} from "lucide-react";

export default function ClearanceRecentActivity() {
	const activities = [
		{
			id: 1,
			title: "FFT Team uploaded docs for",
			description: "JOB-1234",
			time: "2m ago",
			icon: FileText,
			iconColor: "text-[#3525CD]",
			borderColor: "border-[#3525CD]",
		},
		{
			id: 2,
			title: "CCT Approved",
			description: "JOB-5678",
			time: "15m ago",
			icon: CheckCircle2,
			iconColor: "text-[#10B981]",
			borderColor: "border-[#10B981]",
		},
		{
			id: 3,
			title: "System Alert: SLA breached",
			description: "JOB-999",
			time: "1h ago",
			icon: AlertCircle,
			iconColor: "text-[#F59E0B]",
			borderColor: "border-[#F59E0B]",
		},
		{
			id: 4,
			title: "Admin reassigned 12 items to FFT",
			description: "Pool A",
			time: "2h ago",
			icon: User,
			iconColor: "text-[#10B981]", // Actually in image it looks a bit greener
			borderColor: "border-[#10B981]",
		},
		{
			id: 5,
			title: "Operator 4 added internal note",
			description: "JOB-4421",
			time: "Yesterday",
			icon: MessageSquare,
			iconColor: "text-[#3525CD]",
			borderColor: "border-[#3525CD]",
		},
	];

	return (
		<div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex-1">
			<h3 className="text-base font-bold text-gray-900 mb-4">
				Recent Activity
			</h3>
			<div className="flex flex-col">
				{activities.map((activity, index) => {
					const Icon = activity.icon;
					return (
						<div
							key={activity.id}
							className={`flex items-center justify-between py-4 ${index !== activities.length - 1 ? "border-b border-gray-100" : ""}`}
						>
							<div className="flex items-center gap-4">
								<div
									className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 ${activity.borderColor}`}
								>
									<Icon className={`w-4 h-4 ${activity.iconColor}`} />
								</div>
								<div>
									<p className="text-sm font-semibold text-gray-900">
										{activity.title}
									</p>
									<p className="text-xs text-gray-500 mt-0.5">
										{activity.description}
									</p>
								</div>
							</div>
							<span className="text-xs text-gray-500 font-medium">
								{activity.time}
							</span>
						</div>
					);
				})}
			</div>
		</div>
	);
}
