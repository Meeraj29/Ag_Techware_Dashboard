import { CheckCircle2, Circle, Ship, Anchor, Warehouse } from "lucide-react";

export default function StatusTimeline({ timeline }: { timeline: any[] }) {
	const getIcon = (stepName: string, status: string) => {
		if (status === "completed")
			return <CheckCircle2 className="w-6 h-6 text-white" />;

		switch (stepName) {
			case "In Transit":
				return <Ship className="w-5 h-5 text-white" />;
			case "Port Arrival":
				return <Anchor className="w-5 h-5 text-white" />;
			case "Delivered":
				return <Warehouse className="w-5 h-5 text-white" />;
			default:
				return <Circle className="w-5 h-5 text-white" />;
		}
	};

	// Calculate line spans based on dynamic timeline length
	const segmentWidth = 100 / timeline.length;
	const startOffsetPercent = segmentWidth / 2;

	let blueLineStyle = {
		left: `calc(${startOffsetPercent}% - 28px)`,
		width: "0%",
	};
	const currentIndex = timeline.findIndex((t) => t.status === "current");
	if (currentIndex !== -1) {
		blueLineStyle.width = `calc(${currentIndex * segmentWidth}% + 28px)`;
	} else if (timeline.every((t) => t.status === "completed")) {
		blueLineStyle.width = `calc(${(timeline.length - 1) * segmentWidth}% + 56px)`;
	} else {
		const lastCompletedIndex = timeline
			.map((t) => t.status)
			.lastIndexOf("completed");
		if (lastCompletedIndex !== -1) {
			blueLineStyle.width = `calc(${lastCompletedIndex * segmentWidth}% + 28px)`;
		}
	}

	return (
		<div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 overflow-x-auto">
			<h3 className="text-base font-medium text-gray-900 mb-8">
				Status Timeline
			</h3>

			<div className="flex items-start justify-between min-w-4xl relative">
				{/* Full width background gray line starting from left edge of first icon to right edge of last icon */}
				<div
					className="absolute top-[81px] h-px bg-gray-200 z-0 -translate-y-1/2"
					style={{
						left: `calc(${startOffsetPercent}% - 28px)`,
						right: `calc(${startOffsetPercent}% - 28px)`,
					}}
				></div>

				{/* Active blue line */}
				<div
					className="absolute top-[81px] h-px bg-[#D9D9D9] z-0 -translate-y-1/2 transition-all duration-500"
					style={blueLineStyle}
				></div>

				{timeline.map((item, index) => {
					const isCompleted = item.status === "completed";
					const isCurrent = item.status === "current";
					const isPastOrCurrent = isCompleted || isCurrent;
					const isNextLineBlue = item.status === "completed";

					return (
						<div
							key={index}
							className="flex flex-col items-center relative flex-1"
						>
							{/* Arrow pointing right at the exact boundary between flex items */}
							{index !== timeline.length - 1 && (
								<div
									className={`absolute top-[81px] right-0 translate-x-1/2 -translate-y-1/2 z-10 ${isNextLineBlue ? "text-[#075FB7]" : "text-gray-300"}`}
								>
									<svg
										width="8"
										height="10"
										viewBox="0 0 8 10"
										fill="currentColor"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M0 0L8 5L0 10Z" />
									</svg>
								</div>
							)}

							{/* Top Icon Box */}
							<div
								className={`w-14 h-14 rounded-md flex items-center justify-center mb-5 relative z-10 ${
									isPastOrCurrent ? "bg-gradiate" : "bg-[#677180]"
								}`}
							>
								{getIcon(item.step, item.status)}
							</div>

							{/* The Dot on the line */}
							<div
								className={`w-[10px] h-[10px] rounded-full relative z-10 mb-3 ${
									isPastOrCurrent ? "bg-[#075FB7]" : "bg-[#E5E7EB]"
								}`}
							></div>

							{/* Text */}
							<div className="text-center flex flex-col items-center w-full px-2">
								<p className="text-xs font-medium text-gray-900 leading-[16px] wrap-break-word">
									{item.step.split(" ").map((word: string, i: number) => (
										<span key={i} className="block">
											{word}
										</span>
									))}
								</p>
								<p
									className={`text-[10px] mt-1 ${isCurrent ? "text-[#04458B] font-semibold" : "text-gray-500"}`}
								>
									{item.date}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
