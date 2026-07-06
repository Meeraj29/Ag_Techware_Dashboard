import { Ship, Clock, AlertTriangle, BarChart2 } from "lucide-react";

function MetricCard({
	value,
	title,
	badge,
	icon: Icon,
	badgeType = "positive",
}: {
	value: string;
	title: string;
	badge: string;
	icon: any;
	badgeType?: "positive" | "negative" | "neutral";
}) {
	const badgeClasses = {
		positive: "bg-[#248F5F66] text-[#10B981]",
		negative: "bg-[#BA1A1A66] text-[#BA1A1A]",
		neutral: "bg-[#D9770666] text-[#D97706]",
	};

	return (
		<div className="bg-[#F4F4F4] rounded-2xl p-6 flex flex-col justify-between h-36 border border-gray-100 relative overflow-hidden">
			<div className="flex justify-between items-start z-10">
				<h2 className="text-3xl font-medium text-gray-900 tracking-tight">
					{value}
				</h2>
				<div className="w-10 h-10 rounded-md bg-[#DADADA] flex items-center justify-center shadow-sm text-gray-600">
					<Icon className="w-5 h-5" strokeWidth={1.5} />
				</div>
			</div>

			<div className="flex justify-between items-center z-10">
				<p className="text-sm font-medium text-gray-800">{title}</p>
				<span
					className={`text-xs font-medium px-3 py-1 rounded-full ${badgeClasses[badgeType]}`}
				>
					{badge}
				</span>
			</div>
		</div>
	);
}

export default function MetricsRow() {
	return (
		<div className="bg-white rounded-xl mb-8 p-8">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				<MetricCard
					value="1,428"
					title="Active Shipments"
					badge="+4.2%"
					icon={Ship}
					badgeType="positive"
				/>
				<MetricCard
					value="94.2%"
					title="ON-Time Perfomance"
					badge="+2.1%"
					icon={Clock}
					badgeType="positive"
				/>
				<MetricCard
					value="14"
					title="High risk Lodes"
					badge="↑3"
					icon={AlertTriangle}
					badgeType="negative"
				/>
				<MetricCard
					value="88.5%"
					title="Fleet Utilization"
					badge="-0%"
					icon={BarChart2}
					badgeType="neutral"
				/>
			</div>
		</div>
	);
}
