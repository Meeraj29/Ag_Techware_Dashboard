"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { Eye, AlertCircle } from "lucide-react";
import { CategoryBadge, StatusText, PriorityBadge, UrgencyBadge, ActionButton } from "./JobBadges";

import { useRouter } from "next/navigation";

export default function JobsTable({ activeTab }: { activeTab: "All jobs" | "Action Required" }) {
  const jobs = useSelector((state: RootState) => state.jobs.items);
  const router = useRouter();

  const isActionRequired = activeTab === "Action Required";

  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[#F8F9FA] border-b border-gray-100">
            <th className="py-4 px-6 text-base font-medium text-black whitespace-nowrap">Job ID</th>
            <th className="py-4 px-6 text-base font-medium text-black whitespace-nowrap">
              {isActionRequired ? "Destination" : "Customer"}
            </th>
            <th className="py-4 px-6 text-base font-medium text-black whitespace-nowrap">
              {isActionRequired ? "Issues Type" : "Category"}
            </th>
            <th className="py-4 px-6 text-base font-medium text-black whitespace-nowrap">
              {isActionRequired ? "Urgency" : "Route"}
            </th>
            {!isActionRequired && (
              <>
                <th className="py-4 px-6 text-base font-medium text-black whitespace-nowrap">Status</th>
                <th className="py-4 px-6 text-base font-medium text-black whitespace-nowrap">ETA / Last Update</th>
                <th className="py-4 px-6 text-base font-medium text-black whitespace-nowrap">Priority</th>
              </>
            )}
            <th className="py-4 px-6 text-base font-medium text-black whitespace-nowrap">Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <tr
              key={index}
              onClick={() => router.push(`/dashboard/jobs/${encodeURIComponent(job._id)}`)}
              className={`border-b border-gray-50 hover:bg-gray-100 transition-colors cursor-pointer ${index % 2 !== 0 ? 'bg-[#F8F8F8]' : 'bg-white'}`}
            >
              <td className="py-4 px-6">
                <p className="text-base font-medium text-black">{job._id}</p>
                {isActionRequired && (
                  <p className="text-xs text-gray-500 mt-0.5">Ref: PO-{4402 + index}</p>
                )}
              </td>

              <td className="py-4 px-6">
                <p className="text-base font-semibold text-gray-900">
                  {isActionRequired ? job.destination : job.customer}
                </p>
              </td>

              <td className="py-4 px-6">
                {isActionRequired ? (
                  <p className={`text-sm font-medium ${job.urgency === 'Critical' ? 'text-[#E44444]' : job.urgency === 'Medium' ? 'text-[#D97706]' : 'text-[#000000B2]'}`}>
                    {job.issuesType}
                  </p>
                ) : (
                  <CategoryBadge category={job.category} />
                )}
              </td>

              <td className="py-4 px-6">
                {isActionRequired ? (
                  <UrgencyBadge urgency={job.urgency} />
                ) : (
                  <div>
                    <p className="text-base font-medium text-black">
                      {job.route.origin} → {job.route.destination}
                    </p>
                    <p className="text-xs text-[#000000B2] mt-0.5">{job.route.type}</p>
                  </div>
                )}
              </td>

              {!isActionRequired && (
                <>
                  <td className="py-4 px-6">
                    <StatusText status={job.status} />
                  </td>

                  <td className="py-4 px-6">
                    <p className="text-base font-medium text-black">
                      {job.eta.time} <span className="font-medium text-xs text-black">{job.eta.date}</span>
                    </p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${job.eta.status.includes('Delay') || job.eta.status.includes('Stalled') ? (job.eta.status.includes('Stalled') ? 'bg-[#BA1A1A]' : 'bg-[#D97706]') : 'bg-[#059669]'}`}></div>
                      <p className={`text-xs ${job.eta.status.includes('Delay') || job.eta.status.includes('Stalled') ? (job.eta.status.includes('Stalled') ? 'text-[#BA1A1A]' : 'text-[#D97706]') : 'text-[#059669]'}`}>{job.eta.status}</p>
                    </div>
                  </td>

                  <td className="py-4 px-6">
                    <PriorityBadge priority={job.priority} />
                  </td>
                </>
              )}

              <td className="py-4 px-6">
                {isActionRequired ? (
                  <ActionButton
                    label={job.issuesType.includes('Missing') || job.issuesType.includes('Customs') ? 'Upload' : job.issuesType.includes('Damaged') ? 'Contact' : 'Review'}
                    type={job.issuesType.includes('Missing') || job.issuesType.includes('Customs') ? 'secondary' : job.issuesType.includes('Damaged') ? 'default' : 'primary'}
                  />
                ) : (
                  <div className="flex items-center gap-2">
                    <button className="w-8 h-8 flex items-center justify-center rounded bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded bg-[#E6E6E6] text-[#BA1A1A] transition-colors relative">
                      <AlertCircle className="w-4 h-4" />
                      {job.priority === 'Critical' && (
                        <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full border-2 border-white">
                          1
                        </span>
                      )}
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
