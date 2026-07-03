"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { MoreVertical, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function TrackingTable() {
  const jobs = useSelector((state: RootState) => state.tracking.jobs);
  const router = useRouter();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Transit": return "text-[#3525CD]";
      case "Delayed": return "text-[#F59E0B]";
      case "At Port": return "text-[#054890]";
      case "Cleared": return "text-[#005C3D]";
      case "In Customs": return "text-[#BA1A1A]";
      default: return "text-gray-500";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col mb-6">
      <div className="overflow-x-auto w-full [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <table className="w-full text-sm text-left min-w-[800px]">
          <thead className="bg-[#F4F4F4] text-[#000000] font-medium text-[16px] border-b border-gray-100">
            <tr>
              <th className="py-3 px-4 font-medium whitespace-nowrap rounded-tl-lg">Customer Id</th>
              <th className="py-3 px-4 font-medium whitespace-nowrap">Customer Name</th>
              <th className="py-3 px-4 font-medium whitespace-nowrap">Status</th>
              <th className="py-3 px-4 font-medium whitespace-nowrap">Route</th>
              <th className="py-3 px-4 font-medium whitespace-nowrap">ETA</th>
              <th className="py-3 px-4 font-medium text-center whitespace-nowrap rounded-tr-lg">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {jobs.map((job) => (
              <tr 
                key={job.id} 
                className="even:bg-[#F9F9F9] text-[#000000] transition-colors cursor-pointer"
                onClick={() => router.push(`/dashboard/tracking/${job.id}`)}
              >
                <td className="py-3.5 px-4 text-[16px] font-medium whitespace-nowrap">
                  <span className="text-[#3525CD]">{job.customerId}</span>
                </td>
                <td className="py-3.5 px-4 font-medium text-[16px] whitespace-nowrap">{job.customerName}</td>
                <td className="py-3.5 px-4 font-medium text-[16px] whitespace-nowrap flex items-center gap-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full bg-current ${getStatusColor(job.status)}`}></span>
                  <span className={getStatusColor(job.status)}>{job.status}</span>
                </td>
                <td className="py-3.5 px-4 font-medium text-[16px] whitespace-nowrap">
                  <div className="flex items-center gap-1.5">
                    {job.routeOrigin} <ArrowRight className="w-3 h-3 text-gray-700" /> {job.routeDestination}
                  </div>
                </td>
                <td className="py-3.5 px-4 font-medium text-[16px] whitespace-nowrap">{job.eta}</td>
                <td className="py-3.5 px-4 text-center whitespace-nowrap">
                  <button 
                    className="p-1 hover:bg-gray-200 rounded text-gray-500 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <MoreVertical className="w-4 h-4 text-[#1C1B1F]" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between p-4 border-t border-gray-100 gap-4">
        <div className="text-sm font-semibold text-gray-500">
          Results: 08 Out Of 143
        </div>
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 flex items-center justify-center rounded border border-[#3525CD] text-[#3525CD] hover:bg-blue-50 transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-900 font-semibold hover:bg-gray-50 transition-colors">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded border border-[#3525CD] text-[#3525CD] hover:bg-blue-50 transition-colors">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
