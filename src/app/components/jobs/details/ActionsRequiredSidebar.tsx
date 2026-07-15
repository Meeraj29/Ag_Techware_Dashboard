import { Bell } from "lucide-react";

export default function ActionsRequiredSidebar({
	actions,
}: {
	actions: any[];
}) {
	const getStyle = (type: string) => {
		switch (type) {
			case "danger":
				return {
					bg: "bg-[#FDE1E1]", // light pink/red
					border: "border-l-4 border-l-[#D32F2F]",
					title: "text-[#D32F2F]",
				};
			case "warning":
				return {
					bg: "bg-[#FFF3CE]", // light yellow/cream
					border: "border-l-4  border-l-[#F57C00]",
					title: "text-gray-900",
				};
			case "info":
				return {
					bg: "bg-[#E3E3FA]", // light lavender
					border: "border-l-4  border-l-[#7C3AED]",
					title: "text-gray-900",
				};
			default:
				return {
					bg: "bg-white",
					border: "border-l-4  border-l-gray-400",
					title: "text-gray-900",
				};
		}
	};

	return (
		<div className="bg-[#0863BC] rounded-2xl p-5  shadow-md">
			<div className="flex items-center justify-between mb-5">
				<div className="flex items-center gap-2">
					<Bell className="w-5 h-5 text-white" fill="white" />
					<h3 className="text-[15px] font-bold text-white">Actions Required</h3>
				</div>
				<button className="px-5 py-2.5 bg-linear-to-r from-[#001933] to-[#04458B] rounded-md text-[13px] font-semibold cursor-pointer text-white hover:opacity-90 transition-opacity">
					View All
				</button>
			</div>

			<div className="flex flex-col gap-3">
				{actions.map((action) => {
					const style = getStyle(action.type);
					return (
						<div
							key={action.id}
							className={`p-4 rounded-l-xl ${style.bg} ${style.border}`}
						>
							<div className="flex justify-between items-center gap-4">
								<div className="flex-1 pr-2">
									<h4 className={`text-sm font-bold mb-1 ${style.title}`}>
										{action.title}
									</h4>
									<p className="text-sm text-gray-700 leading-snug">
										{action.description}
									</p>
								</div>
								<button className="shrink-0 px-4 py-2 border-[1.5px] border-[#04458B] text-sm font-bold text-[#04458B] bg-white hover:bg-blue-50 transition-colors">
									{action.actionText}
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
