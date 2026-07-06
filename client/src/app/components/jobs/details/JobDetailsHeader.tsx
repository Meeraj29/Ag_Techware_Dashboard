"use client";

import { useState } from "react";
import { JobDocument } from "@/app/redux/features/jobs/jobsSlice";
import { CategoryBadge } from "../JobBadges";
import { Button } from "@/app/ui/Button";
import UpdatePriorityModal from "./UpdatePriorityModal";
import UpdateStatusModal from "./UpdateStatusModal";
import RaiseIssueModal from "./RaiseIssueModal";
import UploadDocumentsModal from "./UploadDocumentsModal";
import UploadExportDocumentsModal from "@/app/components/clearance/details/UploadExportDocumentsModal";

export default function JobDetailsHeader({
	job,
	isClearance = false,
}: {
	job: JobDocument;
	isClearance?: boolean;
}) {
	const [isPriorityModalOpen, setIsPriorityModalOpen] = useState(false);
	const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
	const [isRaiseIssueModalOpen, setIsRaiseIssueModalOpen] = useState(false);
	const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

	return (
		<>
			<div className="flex-1 flex flex-col xl:flex-row xl:items-center justify-between gap-4">
				<div className="flex flex-col gap-2">
					<div className="flex flex-wrap items-center gap-3">
						<h1 className="text-xl font-medium text-gray-900">
							Job ID {job._id}
						</h1>
						<span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-[#FEF7E0] text-[#E37400]">
							{job.status}
						</span>
					</div>
					<div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-[13px] text-gray-600 font-medium">
						<p className="whitespace-nowrap">
							Customer:{" "}
							<span className="font-bold text-gray-900">{job.customer}</span>
						</p>
						<div className="hidden sm:block w-px h-3 bg-gray-300"></div>
						<p className="whitespace-nowrap">
							Priority:{" "}
							<span
								className={`font-bold ${job.priority === "Critical" || job.priority === "High" ? "text-[#C5221F]" : "text-gray-900"}`}
							>
								{job.priority}
							</span>
						</p>
						<div className="hidden sm:block w-px h-3 bg-gray-300"></div>
						<div className="whitespace-nowrap mt-3 md:mt-0">
							<CategoryBadge category={job.category} />
						</div>
					</div>
				</div>

				<div className="flex flex-wrap items-center gap-3 w-full xl:w-auto">
					<Button
						variant="outline"
						onClick={() => setIsPriorityModalOpen(true)}
						className="flex-1 sm:flex-none px-4 py-2 h-auto rounded-lg border cursor-pointer border-[#075FB7] text-[#075FB7] text-[13px] font-semibold hover:bg-blue-50 transition-colors whitespace-nowrap"
					>
						Update Priority
					</Button>
					<Button
						variant="outline"
						onClick={() => setIsStatusModalOpen(true)}
						className="flex-1 sm:flex-none px-4 py-2 h-auto rounded-lg border cursor-pointer border-[#075FB7] text-[#075FB7] text-[13px] font-semibold hover:bg-blue-50 transition-colors whitespace-nowrap"
					>
						Update Status
					</Button>
					<Button
						variant="dangerOutline"
						onClick={() => setIsRaiseIssueModalOpen(true)}
						className="flex-1 sm:flex-none px-4 py-2 h-auto rounded-lg cursor-pointer border border-red-500 text-red-500 text-[13px] font-semibold hover:bg-red-50 transition-colors whitespace-nowrap"
					>
						Raise Issue
					</Button>
					<Button
						variant="gradient"
						onClick={() => setIsUploadModalOpen(true)}
						className="flex-1 sm:flex-none px-6 py-2 h-auto rounded-lg cursor-pointer text-white text-[13px] font-semibold hover:bg-[#075FB7]/90 transition-colors whitespace-nowrap"
					>
						Upload Documents
					</Button>
				</div>
			</div>

			<UpdatePriorityModal
				isOpen={isPriorityModalOpen}
				onClose={() => setIsPriorityModalOpen(false)}
				jobId={job._id}
				currentPriority={job.priority}
			/>

			<UpdateStatusModal
				isOpen={isStatusModalOpen}
				onClose={() => setIsStatusModalOpen(false)}
				jobId={job._id}
			/>

			<RaiseIssueModal
				isOpen={isRaiseIssueModalOpen}
				onClose={() => setIsRaiseIssueModalOpen(false)}
				jobId={job._id}
			/>

			{isClearance ? (
				<UploadExportDocumentsModal
					isOpen={isUploadModalOpen}
					onClose={() => setIsUploadModalOpen(false)}
					jobId={job._id}
				/>
			) : (
				<UploadDocumentsModal
					isOpen={isUploadModalOpen}
					onClose={() => setIsUploadModalOpen(false)}
					jobId={job._id}
				/>
			)}
		</>
	);
}
