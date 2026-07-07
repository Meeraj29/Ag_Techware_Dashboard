import { useState } from "react";
import { Button } from "@/app/ui/Button";
import { Upload } from "lucide-react";

interface UpdateStatusModalProps {
	isOpen: boolean;
	onClose: () => void;
	jobId: string;
}

export default function UpdateStatusModal({
	isOpen,
	onClose,
	jobId,
}: UpdateStatusModalProps) {
	const [selectedType, setSelectedType] = useState("");

	const todayDate = new Date().toLocaleDateString("en-GB", {
		day: "numeric",
		month: "short",
		year: "numeric",
	}); // e.g. "14 May 2026"

	// Remove the # prefix from jobId if it exists just for display matching the design
	const displayJobId = jobId?.startsWith("#")
		? jobId.substring(1)
		: jobId || "";

	const [jobIdInput, setJobIdInput] = useState(displayJobId);
	const [updatedByInput, setUpdatedByInput] = useState("John(You)");
	const [dateInput, setDateInput] = useState(todayDate);

	if (!isOpen) return null;

	const handleUpdate = () => {
		// Currently just close modal, can dispatch actions here later
		onClose();
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
			{/* Backdrop */}
			<div className="absolute inset-0 bg-black/50" onClick={onClose} />

			{/* Modal */}
			<div className="relative bg-white rounded-2xl w-full max-w-4xl flex flex-col shadow-2xl p-8">
				<h2 className="text-lg font-semibold text-center text-gray-900 mb-8">
					Update Status
				</h2>

				<div className="grid grid-cols-3 gap-4 mb-6">
					<div>
						<label className="block text-xs font-medium text-gray-900 mb-2">
							Job ID
						</label>
						<input
							type="text"
							value={jobIdInput}
							onChange={(e) => setJobIdInput(e.target.value)}
							className="w-full bg-[#F3F4F6] text-gray-600 rounded-lg px-4 py-3 text-[14px] focus:outline-none focus:ring-1 focus:ring-[#075FB7] focus:border-[#075FB7]"
						/>
					</div>
					<div>
						<label className="block text-xs font-medium text-gray-900 mb-2">
							Updated By
						</label>
						<input
							type="text"
							value={updatedByInput}
							onChange={(e) => setUpdatedByInput(e.target.value)}
							className="w-full bg-[#F3F4F6] text-gray-600 rounded-lg px-4 py-3 text-[14px] focus:outline-none focus:ring-1 focus:ring-[#075FB7] focus:border-[#075FB7]"
						/>
					</div>
					<div>
						<label className="block text-xs font-medium text-gray-900 mb-2">
							Date & Time
						</label>
						<input
							type="text"
							value={dateInput}
							onChange={(e) => setDateInput(e.target.value)}
							className="w-full bg-[#F3F4F6] text-gray-600 rounded-lg px-4 py-3 text-[14px] focus:outline-none focus:ring-1 focus:ring-[#075FB7] focus:border-[#075FB7]"
						/>
					</div>
				</div>

				<div className="mb-6">
					<label className="block text-xs font-medium text-gray-900 mb-2">
						Choose Type <span className="text-red-500">*</span>
					</label>
					<div className="relative">
						<select
							value={selectedType}
							onChange={(e) => setSelectedType(e.target.value)}
							className="w-full bg-[#F3F4F6] text-gray-600 rounded-lg px-4 py-3 text-[14px] appearance-none focus:outline-none focus:ring-1 focus:ring-[#075FB7] focus:border-[#075FB7]"
						>
							<option value="" disabled>
								Choose transport, tracking, Financial etc.,
							</option>
							<option value="Transport">Transport</option>
							<option value="Tracking">Tracking</option>
							<option value="Financial">Financial</option>
						</select>
						{/* Custom dropdown arrow */}
						<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
							<svg
								className="w-4 h-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M19 9l-7 7-7-7"
								></path>
							</svg>
						</div>
					</div>
				</div>

				<div className="mb-8">
					<label className="block text-[15px] font-medium text-gray-900 mb-2">
						Upload Files{" "}
						<span className="text-gray-500 font-normal">(Optional)</span>
					</label>
					<div className="border border-dashed border-gray-400 rounded-xl bg-[#F9FAFB] py-12 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
						<div className="w-10 h-10 bg-gray-200 rounded-xl flex items-center justify-center mb-3">
							<Upload className="w-5 h-5 text-gray-700" />
						</div>
						<p className="text-[11px] text-gray-400 font-medium tracking-wide">
							PDF or DOC files only, up to 5MB
						</p>
					</div>
				</div>

				{/* Footer */}
				<div className="flex items-center justify-end gap-4">
					<Button
						variant="outline"
						onClick={onClose}
						className="px-10 h-11 rounded-xl cursor-pointer text-sm font-medium border-2 border-[#075FB7] text-[#075FB7]"
					>
						Cancel
					</Button>
					<Button
						variant="gradient"
						onClick={handleUpdate}
						className="px-10 h-11 cursor-pointer rounded-xl text-sm font-medium hover:bg-[#075FB7]/90 text-white"
					>
						Update
					</Button>
				</div>
			</div>
		</div>
	);
}
