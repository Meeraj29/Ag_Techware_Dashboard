"use client";

import { Eye, Ship, Anchor } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ClearanceJob } from "../../redux/features/clearance/clearanceSlice";
import { useRouter } from "next/navigation";

export default function ClearanceTable() {
	const router = useRouter();
	const { jobs, primaryTab, secondaryTab } = useSelector(
		(state: RootState) => state.clearance,
	);

	// Filter jobs based on active tab
	const filteredJobs = jobs.filter((job) => {
		if (primaryTab === "Pending Reviews") {
			return job.status === "Under Review" || job.status === "Pending";
		}
		if (primaryTab === "Alerts") {
			return job.alertType !== undefined;
		}
		return true; // "All"
	});

	const getStatusBadge = (status: ClearanceJob["status"]) => {
		switch (status) {
			case "Under Review":
				return (
					<span className="flex items-center gap-1.5 text-base font-medium text-[#F59E0B]">
						<span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]"></span>Under
						Review
					</span>
				);
			case "Pending":
				return (
					<span className="flex items-center gap-1.5 text-base font-medium text-[#2563EB]">
						<span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
						Pending
					</span>
				);
			case "Hold":
				return (
					<span className="flex items-center gap-1.5 text-base font-medium text-[#B91C1C]">
						<span className="w-1.5 h-1.5 rounded-full bg-[#B91C1C]"></span>Hold
					</span>
				);
			case "Approved":
				return (
					<span className="flex items-center gap-1.5 text-base font-medium text-[#047857]">
						<span className="w-1.5 h-1.5 rounded-full bg-[#047857]"></span>
						Approved
					</span>
				);
			default:
				return null;
		}
	};

	const getSlaTimerStyle = (timer: string, status: string) => {
		if (timer === "Expired") return "text-red-500  text-base font-medium";
		if (timer === "Completed") return "text-green-500 text-base font-medium";
		if (timer.startsWith("-"))
			return "text-red-500 font-medium text-base flex items-center gap-1";
		if (status === "Under Review")
			return "text-red-500 font-medium text-base flex items-center gap-1"; // Matching screenshot color
		return "text-gray-600 font-medium text-base flex items-center gap-1";
	};

	return (
		<div className="overflow-x-auto">
			<table className="w-full text-left border-collapse">
				<thead>
					<tr className="bg-[#F8F9FA] border-y border-gray-100">
						<th className="px-6 py-4 text-base font-medium text-black">
							Job ID
						</th>
						<th className="px-6 py-4 text-base font-medium text-black">
							Customer
						</th>
						<th className="px-6 py-4 text-base font-medium text-black">Type</th>
						<th className="px-6 py-4 text-base font-medium text-black">Port</th>
						{primaryTab !== "Alerts" && (
							<th className="px-6 py-4 text-base font-medium text-black">
								Stage
							</th>
						)}
						<th className="px-6 py-4 text-base font-medium text-black">
							Status
						</th>
						{primaryTab === "Alerts" && (
							<th className="px-6 py-4 text-base font-medium text-black">
								Alert Type
							</th>
						)}
						<th className="px-6 py-4 text-base font-medium text-black">
							Sla Timer
						</th>
						<th className="px-6 py-4 text-base font-medium text-black text-center">
							Actions
						</th>
					</tr>
				</thead>
				<tbody className="divide-y divide-gray-100 bg-white">
					{filteredJobs.map((job, index) => (
						<tr
							key={index}
							onClick={() =>
								router.push(
									`/dashboard/clearance/${encodeURIComponent(job.id)}`,
								)
							}
							className="hover:bg-gray-50/50 transition-colors cursor-pointer"
						>
							<td className="px-6 py-4">
								<span className="text-base font-medium text-[#075FB7]">
									{job.id}
								</span>
							</td>
							<td className="px-6 py-4">
								<span className="text-base font-medium text-gray-900">
									{job.customer}
								</span>
							</td>
							<td className="px-6 py-4">
								<span
									className={`inline-flex items-center gap-1.5 px-2.5 py-2 rounded-full text-sm font-medium ${job.type === "Export"
										? "bg-[#3525CD4D] text-[#3525CD]"
										: "bg-[#0548904D] text-[#054890]"
										}`}
								>
									{job.type === "Export" ? (
										<Ship className="w-3 h-3" />
									) : (
										<Anchor className="w-3 h-3" />
									)}
									{job.type}
								</span>
							</td>
							<td className="px-6 py-4">
								<span className="text-base font-medium text-gray-500">
									{job.port}
								</span>
							</td>

							{primaryTab !== "Alerts" && (
								<td className="px-6 py-4">
									<span className="text-base font-medium text-gray-500">
										{job.stage}
									</span>
								</td>
							)}

							<td className="px-6 py-4 ">{getStatusBadge(job.status)}</td>

							{primaryTab === "Alerts" && (
								<td className="px-6 py-4">
									<span
										className={`text-base font-medium ${job.alertType === "Missing Documents" ? "text-[#BA1A1A]" : "text-[#64748B]"}`}
									>
										{job.alertType}
									</span>
								</td>
							)}

							<td className="px-6 py-4">
								<span
									className={`text-base ${getSlaTimerStyle(job.slaTimer, job.status)}`}
								>
									{job.slaTimer !== "Expired" &&
										job.slaTimer !== "Completed" &&
										job.slaTimer !== "-------" && (
											<ClockIcon className="w-3.5 h-3.5" />
										)}
									{job.slaTimer}
								</span>
							</td>
							<td className="px-6 py-4">
								<div className="flex items-center justify-center">
									<button className="w-8 h-8 rounded bg-gray-100 text-gray-500 hover:bg-gray-200 flex items-center justify-center transition-colors">
										<Eye className="w-4 h-4" />
									</button>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

// Simple clock SVG to match the screenshot
function ClockIcon({ className }: { className?: string }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className={className}
		>
			<circle cx="12" cy="12" r="10" />
			<polyline points="12 6 12 12 16 14" />
		</svg>
	);
}
