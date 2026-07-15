import { CheckCircle2, FileText, CheckCircle, PenLine } from "lucide-react";

export default function ActivityLog({ log }: { log: any[] }) {
	const getIconColor = (type: string) => {
		switch (type) {
			case "status":
				return "text-[#075FB7]";
			case "document":
				return "text-[#075FB7]";
			case "note":
				return "text-[#075FB7]";
			default:
				return "text-[#075FB7]";
		}
	};

	return (
		<div className="bg-white rounded-2xl p-6 mt-4">
			<h3 className="text-sm font-medium text-gray-900 mb-6">Activity Log</h3>

			<div className="flex flex-col relative">
				{log.map((item, index) => (
					<div key={item.id} className="flex gap-4 relative pb-6 last:pb-0">
						{/* Dot/Icon */}
						<div className="relative z-10 w-2 h-2 rounded-full bg-[#0657A9] flex items-center justify-center mt-1 shrink-0">
							<div className="w-1.5 h-1.5 bg-[#0657A9] rounded-full"></div>
						</div>

						<div>
							<p className="text-[13px] font-bold text-gray-900">
								{item.title}
							</p>
							<p className="text-[11px] text-gray-500 mt-0.5">
								{item.subtitle}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
