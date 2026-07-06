"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
	setPrimaryTab,
	setSecondaryTab,
	PrimaryTabType,
	SecondaryTabType,
} from "../../redux/features/clearance/clearanceSlice";
import ClearanceTableFilters from "./ClearanceTableFilters";
import ClearanceTable from "./ClearanceTable";
import { Button } from "@/app/ui/Button";

export default function ClearanceTableContainer() {
	const dispatch = useDispatch();
	const { primaryTab, secondaryTab, jobs } = useSelector(
		(state: RootState) => state.clearance,
	);

	const pendingCount = jobs.filter(
		(j) => j.status === "Under Review" || j.status === "Pending",
	).length;
	const alertCount = jobs.filter((j) => j.alertType !== undefined).length;
	const allCount = jobs.length;

	return (
		<div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col mb-8 mt-4">
			{/* Primary Tabs */}
			<div className="px-6 pt-6 pb-2 border-b border-gray-100 bg-[#F8F9FA] flex gap-2">
				<div className="bg-[#EEF1F3] flex items-center justify-center gap-3 p-2 rounded-lg">
					<Button
						variant={primaryTab === "Pending Reviews" ? "gradient" : "ghost"}
						onClick={() => dispatch(setPrimaryTab("Pending Reviews"))}
						className={`px-4 py-2 h-auto text-sm font-semibold cursor-pointer rounded-md transition-colors flex items-center gap-2 ${primaryTab === "Pending Reviews" ? "" : "text-gray-600 hover:bg-gray-200 hover:text-gray-800"}`}
					>
						Pending Reviews
						<span
							className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${primaryTab === "Pending Reviews" ? "bg-white text-[#075FB7]" : "bg-gray-200 text-gray-500"}`}
						>
							{pendingCount}
						</span>
					</Button>
					<Button
						variant={primaryTab === "Alerts" ? "gradient" : "ghost"}
						onClick={() => dispatch(setPrimaryTab("Alerts"))}
						className={`px-4 py-2 h-auto text-sm font-semibold cursor-pointer rounded-md transition-colors flex items-center gap-2 ${primaryTab === "Alerts" ? "" : "text-gray-600 hover:bg-gray-200 hover:text-gray-800"}`}
					>
						Alerts
						<span
							className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${primaryTab === "Alerts" ? "bg-white text-[#075FB7]" : "bg-gray-200 text-gray-500"}`}
						>
							{alertCount}
						</span>
					</Button>
					<Button
						variant={primaryTab === "All" ? "gradient" : "ghost"}
						onClick={() => dispatch(setPrimaryTab("All"))}
						className={`px-4 py-2 h-auto text-sm font-semibold cursor-pointer rounded-md transition-colors flex items-center gap-2 ${primaryTab === "All" ? "" : "text-gray-600 hover:bg-gray-200 hover:text-gray-800"}`}
					>
						All
						<span
							className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${primaryTab === "All" ? "bg-white text-[#075FB7]" : "bg-gray-200 text-gray-500"}`}
						>
							{allCount}
						</span>
					</Button>
				</div>
			</div>

			{/* Secondary Tabs (Only show if Alerts is selected) */}
			{primaryTab === "Alerts" && (
				<div className="px-6 flex gap-6 border-b border-gray-200 pt-4 bg-white">
					<button
						onClick={() => dispatch(setSecondaryTab("FFT Team Alert"))}
						className={`pb-3 text-sm cursor-pointer font-semibold flex items-center gap-2 border-b-2 transition-colors ${secondaryTab === "FFT Team Alert" ? "border-[#075FB7] text-[#075FB7]" : "border-transparent text-gray-500 hover:text-gray-700"}`}
					>
						FFT Team Alert
					</button>
					<button
						onClick={() => dispatch(setSecondaryTab("CCT Team Alert"))}
						className={`pb-3 text-sm cursor-pointer font-semibold flex items-center gap-2 border-b-2 transition-colors ${secondaryTab === "CCT Team Alert" ? "border-[#075FB7] text-[#075FB7]" : "border-transparent text-gray-500 hover:text-gray-700"}`}
					>
						CCT Team Alert
					</button>
				</div>
			)}

			<ClearanceTableFilters />

			<ClearanceTable />

			{/* Pagination Footer */}
			<div className="flex items-center justify-between px-6 py-4 border-t border-gray-100 bg-white">
				<span className="text-sm text-gray-500 font-medium">
					Showing 1-10 of 1,482 jobs
				</span>
				<div className="flex gap-2">
					<button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-500 hover:bg-gray-50">
						{"<"}
					</button>
					<button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-900 font-medium hover:bg-gray-50">
						1
					</button>
					<button className="w-8 h-8 flex items-center justify-center rounded border border-[#075FB7] text-[#075FB7] font-medium hover:bg-blue-50">
						{">"}
					</button>
				</div>
			</div>
		</div>
	);
}
