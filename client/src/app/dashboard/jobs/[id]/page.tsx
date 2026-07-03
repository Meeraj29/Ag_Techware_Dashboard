"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { use } from "react";
import JobDetailsHeader from "@/app/components/jobs/details/JobDetailsHeader";
import StatusTimeline from "@/app/components/jobs/details/StatusTimeline";
import ActionsRequiredSidebar from "@/app/components/jobs/details/ActionsRequiredSidebar";
import BasicDetails from "@/app/components/jobs/details/BasicDetails";
import RouteDetails from "@/app/components/jobs/details/RouteDetails";
import AssignedTeams from "@/app/components/jobs/details/AssignedTeams";
import ValueAddServices from "@/app/components/jobs/details/ValueAddServices";
import LoadContainerDetails from "@/app/components/jobs/details/LoadContainerDetails";
import DocumentsManagement from "@/app/components/jobs/details/DocumentsManagement";
import InternalNotes from "@/app/components/jobs/details/InternalNotes";
import ActivityLog from "@/app/components/jobs/details/ActivityLog";

export default function JobDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const resolvedParams = use(params);
  const decodedId = decodeURIComponent(resolvedParams.id);

  // Fetch the specific job based on ID from Redux
  const job = useSelector((state: RootState) =>
    state.jobs.items.find(j => j._id === decodedId)
  );

  if (!job) {
    return (
      <div className="min-h-full p-8 bg-[#F8F9FA] flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Job Not Found</h2>
        <button
          onClick={() => router.back()}
          className="text-[#075FB7] hover:underline flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-full p-4 bg-[#F8F9FA] flex flex-col">
      <div className=" w-full mx-auto">
        {/* Header Section */}
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => router.back()}
            className="w-10 h-10 flex items-center justify-center rounded-md bg-[#DADADA] hover:bg-gray-300 transition-colors shrink-0"
          >
            <ArrowLeft className="h-5 w-5 text-gray-700" />
          </button>
          <JobDetailsHeader job={job} />
        </div>

        {/* Timeline Section */}
        <StatusTimeline timeline={job.timeline} />

        {/* Main Content Layout: Two Columns */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-6 mt-6">

          {/* Left Column: Details */}
          <div className="flex flex-col gap-6">
            <BasicDetails basicDetails={job.basicDetails} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-5 rounded-2xl shadow-sm">
              <RouteDetails routeDetails={job.routeDetails} />
              <AssignedTeams teams={job.assignedTeams} />
            </div>

            <ValueAddServices services={job.valueAddServices} />
          </div>

          {/* Right Column: Sidebar */}
          <div className="flex flex-col gap-6">
            <ActionsRequiredSidebar actions={job.actionsRequired} />
          </div>

        </div>

        {/* Full Width Sections */}
        <div className="flex flex-col gap-6 mt-6">
          <LoadContainerDetails containers={job.containerDetails} />
          <DocumentsManagement documents={job.documents} />
          <InternalNotes notes={job.internalNotes} />
          <ActivityLog log={job.activityLog} />
        </div>
      </div>
    </div>
  );
}
