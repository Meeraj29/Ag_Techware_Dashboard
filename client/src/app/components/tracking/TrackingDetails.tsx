"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useParams } from "next/navigation";
import { AlertTriangle, RefreshCw, ArrowLeft, Sailboat } from "lucide-react";
import Link from "next/link";

export default function TrackingDetails() {
  const { id } = useParams();
  const foundJob = useSelector((state: RootState) => state.tracking.jobs.find(j => j.id === id));
  const fallbackJob = useSelector((state: RootState) => state.tracking.jobs[0]);
  
  const job = foundJob || fallbackJob;
  const details = job?.details || fallbackJob?.details;

  if (!job || !details) return null;

  return (
    <div className="w-full space-y-4 sm:space-y-6 p-4">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <Link href="/dashboard/tracking" className="p-1 -ml-1 rounded-full hover:bg-gray-100 transition-colors">
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </Link>
            <h1 className="text-lg sm:text-xl font-semibold text-[#000000]">Job ID #{job.id}</h1>
            <span className="px-2 py-1 sm:px-3 text-[10px] sm:text-xs font-semibold rounded-lg bg-[#FFDA9C9E] text-[#D98C0B]">
              {job.status} - On Time
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-sm sm:text-sm text-[#000000]">
            <span className="font-medium text-[#000000]">Customer: {job.customerName}</span>
            <span className="text-gray-300">|</span>
            <span className="flex items-center gap-1.5 px-2.5 py-1 text-[10px] sm:text-xs font-medium rounded-full bg-[#C3BEF0] text-[#3525CD]">
              <Sailboat className="w-3 h-3" />
              {job.type || "Export"}
            </span>
          </div>
          <div className="text-[12px] text-[#0863BD] font-medium mt-2 flex items-center gap-1">
            <RefreshCw className="w-3 h-3" /> Last Updated 2 mins ago
          </div>
        </div>
        
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <button className="px-3 sm:px-4 py-1.5 sm:py-2 border border-[#04458B] text-[#04458B] font-semibold text-xs sm:text-sm rounded-lg hover:bg-primary hover:text-white transition-colors">
            Refresh Tracking
          </button>
          <button className="px-3 sm:px-4 py-1.5 sm:py-2 border border-red-500 text-red-500 font-semibold text-xs sm:text-sm rounded-lg hover:bg-primary hover:text-white transition-colors">
            Report Issue
          </button>
          <button className="px-5 sm:px-8 py-1.5 sm:py-2 bg-gradiate text-white font-semibold text-xs sm:text-sm rounded-lg hover:bg-primary hover:text-white transition-colors">
            Export
          </button>
        </div>
      </div>

      {/* ALERT BANNER */}
      <div className="bg-[#FFFBEB] rounded-xl p-4 sm:p-5 flex items-start gap-4">
        <div className="w-13 h-13 shrink-0 rounded bg-[#D9770633] flex items-center justify-center">
          <AlertTriangle className="w-8 h-8 fill-[#D97706]" />
        </div>
        <div>
          <div className="text-xl font-semibold text-[#78350F] mb-1">Potential Port Congestion Alert</div>
          <div className="text-md font-regular text-[#92400E]">Minimal impact expected for current schedule, but monitoring local labor activity in Rotterdam.</div>
        </div>
      </div>

      {/* 5 CARDS */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 bg-white rounded-xl p-4 sm:p-4 border border-gray-150">
        <div className="bg-[#F4F4F4] border-1 border-[#EDEDED] rounded-xl p-3 flex flex-col justify-center">
          <div className="text-[14px] font-medium text-[#464555] mb-1">Origin</div>
          <div className="text-lg font-semibold text-[#000000]">{details.origin}</div>
          <div className="text-[14px] font-regular text-[#464555] mt-1">{details.originSub}</div>
        </div>
        <div className="bg-[#F4F4F4] border-1 border-[#EDEDED] rounded-xl p-3 flex flex-col justify-center">
          <div className="text-[14px] font-medium text-[#464555] mb-1">Destination</div>
          <div className="text-lg font-semibold text-[#000000]">{details.destination}</div>
          <div className="text-[14px] font-regular text-[#464555] mt-1">{details.destinationSub}</div>
        </div>
        <div className="bg-[#F4F4F4] border-1 border-[#EDEDED] rounded-xl p-3 flex flex-col justify-center">
          <div className="text-[14px] font-medium text-[#464555] mb-1">Containers</div>
          <div className="text-lg font-semibold text-[#000000]">{details.containers}</div>
          <div className="text-[14px] font-regular text-[#464555] mt-1">{details.containersSub}</div>
        </div>
        <div className="bg-[#F4F4F4] border-1 border-[#EDEDED] rounded-xl p-3 flex flex-col justify-center">
          <div className="text-[14px] font-medium text-[#464555] mb-1">Carrier</div>
          <div className="text-lg font-semibold text-[#000000]">{details.carrier}</div>
          <div className="text-[14px] font-regular text-[#464555] mt-1">{details.carrierSub}</div>
        </div>
        <div className="bg-[#F4F4F4] border-1 border-[#EDEDED] rounded-xl p-3 flex flex-col justify-center col-span-2 lg:col-span-1">
          <div className="text-[14px] font-medium text-[#464555] mb-1">Current Position</div>
          <div className="text-lg font-semibold text-[#000000]">{details.currentPosition}</div>
          <div className="text-[14px] font-regular text-[#464555] mt-1">{details.currentPositionSub}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-4">
        
        {/* TIMELINE */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-4 sm:p-4 shadow-sm border border-gray-100">
          <h2 className="text-[16px] sm:text-[18px] font-semibold text-[#000000] mb-6 sm:mb-8">Live Status Timeline</h2>
          <div className="relative pl-6 space-y-4 before:absolute before:inset-0 before:ml-[0.5px] before:h-full before:w-[1px] before:bg-gray-400">
            {details.timeline.map((event, i) => (
              <div key={i} className="relative">
                {event.status === 'completed' && (
                  <div className="absolute -left-[30px] top-1.5 w-[14px] h-[14px] rounded-full bg-[#00B87C] outline outline-[4px] outline-white z-10"></div>
                )}
                {event.status === 'current' && (
                  <div className="absolute -left-[30px] top-1.5 w-[14px] h-[14px] rounded-full bg-[#0863BD] outline outline-[4px] outline-white z-10"></div>
                )}
                {event.status === 'pending' && (
                  <div className="absolute -left-[30px] top-1.5 w-[14px] h-[14px] rounded-full bg-[#E6E6E6] outline outline-[4px] outline-white z-10"></div>
                )}
                
                {event.status === 'current' ? (
                  <div className="bg-[#04489033] rounded-xl p-3 sm:p-4 ml-2 -mt-2">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1 sm:gap-0">
                      <div className="font-semibold text-[#044890] text-[16px]">{event.title}</div>
                      <div className="text-[12px] font-semibold text-[#044890]">{event.date}</div>
                    </div>
                    {event.extraInfo && (
                      <>
                        <p className="text-[14px] text-[#1B1B24] font-regular mb-3">{event.extraInfo.description}</p>
                        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[13px] font-medium text-[#464555]">
                          <div>Speed: <span className="font-semibold text-[#1B1B24]">{event.extraInfo.speed}</span></div>
                          <div>Heading: <span className="font-semibold text-[#1B1B24]">{event.extraInfo.heading}</span></div>
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <div className="ml-2 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0">
                    <div>
                      <div className={`font-semibold text-[16px] ${event.status === 'pending' ? 'text-[#505050]' : 'text-[#000000]'}`}>{event.title}</div>
                      {event.subtitle && <div className="text-[14px] text-[#464555] font-regular mt-1">{event.subtitle}</div>}
                    </div>
                    <div className={`text-[12px] font-medium ${event.status === 'pending' ? 'text-[#505050]' : 'text-[#464555]'}`}>{event.date}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* PENDING ACTIONS */}
        <div className="bg-white rounded-2xl p-4 sm:p-4 shadow-sm border border-gray-100 flex flex-col">
          <h2 className="text-[16px] sm:text-[18px] font-semibold text-[#1B1B24] mb-4 sm:mb-4">Pending Tracking Actions</h2>
          <div className="space-y-3 flex-1">
            {details.pendingActions.map((action, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-[#F4F4F4] rounded-xl p-4 gap-3 sm:gap-0">
                <div>
                  <div className="text-[14px] font-semibold text-[#1B1B24]">{action.title}</div>
                  <div className="text-[12px] font-regular text-[#464555] mt-1">{action.subtitle}</div>
                </div>
                {action.status === 'Update' ? (
                  <div className="flex items-center gap-2 text-[14px] font-medium text-[#F59E0B]">
                    <div className="w-2 h-2 rounded-full bg-[#F59E0B]"></div> Update
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-[14px] font-medium text-[#808080]">
                    <div className="w-2 h-2 rounded-full bg-[#808080]"></div> Pending
                  </div>
                )}
              </div>
            ))}
          </div>
          <button className="w-full py-2.5 mt-4 text-[13px] font-regular text-[#464555] bg-white border border-[#C7C4D8] rounded-lg hover:bg-gray-50 transition-colors">
            View More
          </button>
        </div>

        {/* INTERNAL NOTES (Span 3) */}
        <div className="lg:col-span-3 bg-white rounded-2xl p-4 sm:p-4 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4 sm:mb-4">
            <h2 className="text-[20px] sm:text-[18px] font-medium text-[#000000]">Internal Notes</h2>
            <button className="text-[#3525CD] text-sm font-medium hover:underline">Add Note</button>
          </div>
          <div className="space-y-2">
            {details.internalNotes.map((note, i) => (
              <div key={i} className="bg-[#F2F2F2] rounded-xl p-4 flex flex-col sm:flex-row justify-between gap-4">
                <p className="text-sm font-medium text-[#000000] max-w-2xl">{note.text}</p>
                <div className="text-[12px] font-regular text-[#000000B2] shrink-0 self-end sm:self-auto">{note.author}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ACTIVITY LOG (Span 3) */}
        <div className="lg:col-span-3 bg-white rounded-2xl p-4 sm:p-4 shadow-sm border border-gray-100">
          <h2 className="text-[16px] sm:text-[18px] font-semibold text-[#000000] mb-4 sm:mb-4">Activity Log</h2>
          <div className="space-y-3 relative before:absolute before:inset-0 before:ml-[5px] before:h-full before:w-[2px] before:bg-gray-200">
            {details.activityLogs.map((log, i) => (
              <div key={i} className="relative flex items-start gap-4">
                <div className="w-[12px] h-[12px] mt-1 rounded-full bg-[#0657A9] shrink-0 z-10 outline outline-[3px] outline-white"></div>
                <div>
                  <div className="text-sm font-medium text-gray-900">{log.title}</div>
                  <div className="text-[12px] font-regular text-[#000000B2] mt-1">{log.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
