import { CheckCircle2, AlertCircle, AlertTriangle } from "lucide-react";

export function CategoryBadge({ category }: { category: string }) {
	let bgColor = "bg-gray-100";
	let textColor = "text-gray-600";

	if (category.includes("Import - FCL")) {
		bgColor = "bg-[#0548904D]";
		textColor = "text-[#054890]";
	} else if (category.includes("Export - LCL")) {
		bgColor = "bg-[#3525CD4D]";
		textColor = "text-[#3525CD]";
	} else if (category.includes("Export - FCL")) {
		bgColor = "bg-[#10B9814D]";
		textColor = "text-[#10B981]";
	} else if (category.includes("Import - LCL")) {
		bgColor = "bg-[#F59E0B4D]";
		textColor = "text-[#F59E0B]";
	} else if (category.includes("Import - AIR")) {
		bgColor = "bg-[#10B9814D]";
		textColor = "text-[#10B981]";
	}

	return (
		<span
			className={`px-2.5 py-2 text-xs font-bold rounded-md ${bgColor} ${textColor}`}
		>
			{category}
		</span>
	);
}

export function StatusText({ status }: { status: string }) {
	let color = "text-gray-600";
	if (status === "In Transit") color = "text-blue-600";
	if (status === "Delayed") color = "text-orange-500";
	if (status === "Halted") color = "text-red-500";
	if (status === "Final Mile") color = "text-blue-600";

	return <span className={`text-sm font-medium ${color}`}>{status}</span>;
}

export function PriorityBadge({ priority }: { priority: string }) {
	if (priority === "Low") {
		return (
			<div className="flex items-center gap-1.5 px-3 py-2 bg-[#04785733] border border-[#047857] text-[#137333] rounded-full text-xs font-semibold w-fit">
				<CheckCircle2 className="w-4 h-4" />
				Low
			</div>
		);
	}
	if (priority === "Medium") {
		return (
			<div className="flex items-center gap-1.5 px-3 py-2 bg-[#D6702233] border border-[#D67022] text-[#D67022] rounded-full text-xs font-semibold w-fit">
				<AlertCircle className="w-3.5 h-3.5" />
				Medium
			</div>
		);
	}
	if (priority === "High" || priority === "Critical") {
		return (
			<div className="flex items-center gap-1.5 px-3 py-2 bg-[#E63F3F33] border border-[#E63F3F] text-[#E63F3F] rounded-full text-xs font-semibold w-fit">
				<AlertTriangle className="w-3.5 h-3.5" />
				{priority}
			</div>
		);
	}
	return null;
}

export function UrgencyBadge({ urgency }: { urgency: string }) {
	let bgColor = "bg-gray-100";
	let textColor = "text-gray-600";
	let borderColor = "border-gray-200";

	if (urgency === "Critical") {
		bgColor = "bg-[#FCE8E6]";
		textColor = "text-[#C5221F]";
		borderColor = "border-[#FAD2CF]";
	} else if (urgency === "Medium") {
		bgColor = "bg-[#FEF7E0]";
		textColor = "text-[#E37400]";
		borderColor = "border-[#FEEFC3]";
	}

	return (
		<span
			className={`px-4 py-1.5 text-xs font-bold rounded-md border ${bgColor} ${textColor} ${borderColor}`}
		>
			{urgency}
		</span>
	);
}

export function ActionButton({
	label,
	type,
}: {
	label: string;
	type: "primary" | "secondary" | "default";
}) {
	const baseStyle =
		"px-4 py-1.5 text-xs font-semibold rounded-md border transition-colors";
	if (type === "primary") {
		return (
			<button
				className={`${baseStyle} bg-[#075FB7] text-white border-[#075FB7] hover:bg-[#064a8f]`}
			>
				{label}
			</button>
		);
	}
	if (type === "secondary") {
		return (
			<button
				className={`${baseStyle} bg-[#E8F0FE] text-[#075FB7] border-transparent hover:bg-[#d2e3fc]`}
			>
				{label}
			</button>
		);
	}
	return (
		<button
			className={`${baseStyle} bg-white text-gray-700 border-gray-300 hover:bg-gray-50`}
		>
			{label}
		</button>
	);
}
