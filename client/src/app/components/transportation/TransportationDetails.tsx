"use client";

import { useState, useEffect } from "react";
import { Check, Truck, Anchor, Warehouse, FileText, Download, User, ArrowRight, FilePlus, ChevronLeft, PenSquare, Paperclip, MapPin, Map, Globe, BellDot, ChevronDown, Sailboat, Ship, Home, CircleCheck, SquareCheck, Info, Plus, Trash2, Maximize2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import transportMapImg from "../../assets/transportmap.png";

export default function TransportationDetails() {
  const { id } = useParams();
  const job = useSelector((state: RootState) => state.transportation.jobs.find(j => j.id === id));
  
  const [isAddNoteModalOpen, setIsAddNoteModalOpen] = useState(false);

  useEffect(() => {
    if (isAddNoteModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isAddNoteModalOpen]);

  if (!job) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
        <div className="text-gray-400"><MapPin className="w-12 h-12" /></div>
        <h2 className="text-xl font-bold text-gray-900">Shipment Not Found</h2>
        <p className="text-gray-500">The requested job could not be located in our records.</p>
        <Link href="/dashboard/transportation" className="px-4 py-2 bg-primary text-white font-semibold rounded-lg">
          Back to Shipments
        </Link>
      </div>
    );
  }

  const { details } = job;
  if (!details) return null;

  return (
    <div className="w-full space-y-4 sm:space-y-6">
      
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
        <div className="shrink-0">
          <div className="flex items-center gap-3 mb-2">
            <Link href="/dashboard/transportation" className="p-1.5 bg-white border border-gray-200 rounded-md hover:bg-gray-50 text-gray-500 shrink-0">
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-lg sm:text-xl font-semibold text-[#000000] whitespace-nowrap">Job ID {job.jobId}</h1>
            <span className={`px-2 py-1 sm:px-3 text-[10px] sm:text-xs font-bold rounded-full whitespace-nowrap ${
              job.status === "In Transit" ? "bg-[#3525CD4D] text-[#3525CD]" :
              job.status === "Delayed" ? "bg-[#F59E0B33] text-[#F59E0B]" :
              job.status === "Completed" ? "bg-[#05966933] text-[#059669]" :
              "bg-[#E05C0A33] text-[#E05C0A]"
            }`}>
              {job.status}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#000000] sm:pl-11">
            <span className="font-medium text-[#000000]">Customer: {job.customer}</span>
            <span className="text-gray-300">|</span>
            <span className={`flex items-center gap-1.5 px-2.5 py-1 text-[10px] sm:text-xs font-regular rounded-full ${
              job.type === "Export" ? "bg-[#C3BEF0] text-[#3525CD]" : "bg-[#0548904D] text-[#054890]"
            }`}>
              {job.type === "Export" ? <Sailboat className="w-3 h-3" /> : <Sailboat className="w-3 h-3" />}
              {job.type}
            </span>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <button className="px-3 sm:px-4 py-1.5 sm:py-2 border-2 border-primary text-primary font-medium text-xs sm:text-sm rounded-lg hover:bg-primary hover:text-white transition-colors">
            Change ETA
          </button>
          <button className="px-3 sm:px-4 py-1.5 sm:py-2 border-2 border-primary text-primary font-medium text-xs sm:text-sm rounded-lg hover:bg-primary hover:text-white transition-colors">
            Update Status
          </button>
          <button className="px-3 sm:px-4 py-1.5 sm:py-2 border-2 border-primary text-primary font-medium text-xs sm:text-sm rounded-lg hover:bg-primary hover:text-white transition-colors">
            Upload Documents
          </button>
          <button className="px-3 sm:px-4 py-1.5 sm:py-2 border-2 border-red-500 text-red-500 font-medium text-xs sm:text-sm rounded-lg hover:bg-primary hover:text-white transition-colors">
            Raise Issue
          </button>
          <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradiate text-white font-medium text-xs sm:text-sm rounded-lg hover:from-primary hover:to-primary transition-colors">
            Product Delivered
          </button>
        </div>
      </div>

      {/* STATUS TIMELINE */}
      <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <h2 className="text-md font-semibold text-[#000000] mb-6 sm:mb-8">Status Timeline</h2>
        <div className="relative flex flex-row items-start justify-between min-w-[800px] w-full mx-auto">
          <TimelineStep title="Quote Approved" date="Oct 12, 09:15" active />
          <TimelineStep title="Job Created" date="Oct 13, 14:30" active />
          <TimelineStep title="Docs Pending" date="Oct 14, 11:00" active />
          <TimelineStep title="Clearance" date="Oct 15, 16:45" active />
          <TimelineStep title={job.status === "In Transit" ? "In Transit" : job.status} date="Current Status" active current icon={<Ship className="w-6 h-6" />} />
          <TimelineStep title="Port Arrival" date="Est. Oct 22" icon={<Anchor className="w-6 h-6" />} />
          <TimelineStep title="Delivered" date="Est. Oct 25" isLast icon={<Home className="w-6 h-6" />} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        
        {/* --- ROW 1 --- */}
        {/* Shipment & Assignment Group (Span 2) */}
        <div className="lg:col-span-2 bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
          
          {/* Shipment Overview */}
          <div className="bg-[#F4F4F4] rounded-xl p-4 sm:p-6 flex flex-col border border-gray-100">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h2 className="text-[16px] sm:text-[18px] font-semibold text-[#000000]">Shipment Overview</h2>
              <BellDot className="w-4 h-4 text-[#000000] fill-[#000000]" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-y-6 gap-x-4 text-sm flex-1">
              <div>
                <div className="text-gray-500 mb-1">Origin</div>
                <div className="font-bold text-gray-900 break-words">{job.origin}</div>
                <div className="text-xs text-gray-500">{details.originCode}</div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">Destination</div>
                <div className="font-bold text-gray-900 break-words">{details.destination}</div>
                <div className="text-xs text-gray-500">{details.destinationCode}</div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">Freight Type</div>
                <div className="font-bold text-primary flex items-center gap-1">
                  <Anchor className="w-3 h-3" /> {details.freightType}
                </div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">Container Count</div>
                <div className="font-bold text-gray-900">{details.containerCount}</div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">Booking Ref</div>
                <div className="font-bold text-gray-900">{details.bookingRef}</div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">Incoterms</div>
                <div className="font-bold text-gray-900">{details.incoterms}</div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">Shipper</div>
                <div className="font-bold text-gray-900">{details.shipper}</div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">Consignee</div>
                <div className="font-bold text-gray-900">{details.consignee}</div>
              </div>
            </div>
          </div>

          {/* Assignment Details */}
          <div className="bg-[#F4F4F4] rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 flex flex-col">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h2 className="text-[16px] sm:text-[18px] font-semibold text-[#000000]">Assignment Details</h2>
              <button className="text-primary flex items-center gap-1 text-sm font-semibold hover:underline">
                <PenSquare className="w-4 h-4" /> Edit
              </button>
            </div>
            <div className="space-y-4 sm:space-y-6 flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-white p-3 sm:p-2 rounded-lg gap-3 sm:gap-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden shrink-0">
                    <img src="https://i.pravatar.cc/100?img=11" alt="Driver" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{job.driverName}</div>
                    <div className="text-xs text-gray-500">{details.vendorPhone}</div>
                  </div>
                </div>
                <div className="sm:text-right">
                  <div className="text-xs text-gray-500 mb-0.5">Vendor</div>
                  <div className="font-bold text-gray-900 text-sm">{details.vendorName}</div>
                </div>
              </div>
              <hr className="border-gray-200" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-gray-500 mb-1">Vehicle</div>
                  <div className="font-bold text-gray-900">{job.vehicleNo}</div>
                </div>
                <div className="sm:text-right">
                  <div className="text-gray-500 mb-1">Coordinator</div>
                  <div className="font-bold text-gray-900">{details.coordinator}</div>
                </div>
              </div>
              <div className="pt-2">
                <div className="text-gray-500 text-sm mb-1">Route Plan</div>
                <div className="font-bold text-gray-900 text-sm flex flex-wrap items-center gap-2">
                  {details.routePlanOrigin} <ArrowRight className="w-3 h-3 text-gray-400 shrink-0" /> {details.routePlanDestination}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Documents (Span 1) */}
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 flex flex-col">
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <h2 className="text-sm font-bold text-gray-900">Documents</h2>
            <button className="text-primary flex items-center gap-1 text-sm font-semibold hover:underline">
              <Plus className="w-4 h-4" /> Add Doc
            </button>
          </div>
          <div className="space-y-4 flex-1">
            {details.documents.map((doc, i) => (
              <DocItem key={i} name={doc.name} date={doc.date} type={doc.type} />
            ))}
          </div>
        </div>


        {/* --- ROW 2 --- */}
        {/* Load & Container Details (Span 2) */}
        <div className="lg:col-span-2 bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 flex flex-col overflow-hidden">
          <h2 className="text-[16px] sm:text-[18px] font-semibold text-[#000000] mb-4 sm:mb-6">Load & Container Details</h2>
          <div className="overflow-x-auto flex-1 w-full">
            <table className="w-full text-sm text-left min-w-[500px]">
              <thead className="bg-[#F4F4F4] text-[#000000CC] font-medium border-b border-gray-100">
                <tr>
                  <th className="py-3 px-4 font-medium rounded-tl-lg whitespace-nowrap">Container Type</th>
                  <th className="py-3 px-4 font-medium whitespace-nowrap">Quantity</th>
                  <th className="py-3 px-4 font-medium whitespace-nowrap">Gross Weight</th>
                  <th className="py-3 px-4 font-medium whitespace-nowrap">Volume (CBM)</th>
                  <th className="py-3 px-4 font-medium rounded-tr-lg whitespace-nowrap">HS Codes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {details.containers.map((c, i) => (
                  <tr key={i} className="even:bg-[#F8F8F8] text-[#000000] hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4 font-medium whitespace-nowrap">{c.type}</td>
                    <td className="py-4 px-4 font-medium whitespace-nowrap">{c.quantity < 10 ? `0${c.quantity}` : c.quantity}</td>
                    <td className="py-4 px-4 font-medium whitespace-nowrap">{c.grossWeight}</td>
                    <td className="py-4 px-4 font-medium whitespace-nowrap">{c.volume}</td>
                    <td className="py-4 px-4 font-medium whitespace-nowrap">{c.hsCodes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Transport Insurance (Span 1) */}
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 flex flex-col">
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <h2 className="text-[16px] sm:text-[18px] font-semibold text-[#000000]">Transport Insurance</h2>
            <span className="px-2 py-0.5 bg-[#ACF1AD] text-[#249209] text-[10px] font-semibold rounded">Active</span>
          </div>
          <div className="space-y-4 flex-1">
            <div>
              <div className="text-xs text-gray-500 mb-1">Policy Number</div>
              <div className="font-bold text-gray-900 text-sm">{details.insurancePolicyNumber}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">Coverage</div>
              <div className="font-bold text-gray-900 text-sm">{details.insuranceCoverage}</div>
            </div>
            <div className="bg-red-50 text-red-600 rounded-lg p-3 text-sm flex flex-col gap-1">
              <div className="flex items-center gap-2 font-semibold">
                <FileText className="w-4 h-4 shrink-0" /> Commercial Invoice
              </div>
              <div className="text-xs opacity-80 ml-6">Oct 11, 2024</div>
            </div>
            <div>
              <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">{details.insuranceCoverage.toUpperCase()}</div>
              <div className="font-bold text-gray-900 text-sm">{details.insuranceExpiry}</div>
            </div>
          </div>
        </div>


        {/* --- ROW 3 --- */}
        {/* Internal Notes (Span 2) */}
        <div className="lg:col-span-2 bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 flex flex-col">
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <h2 className="text-[16px] sm:text-[18px] font-semibold text-[#000000]">Internal Notes</h2>
            <button onClick={() => setIsAddNoteModalOpen(true)} className="text-primary text-sm font-semibold hover:underline">Add Note</button>
          </div>
          <div className="space-y-4 flex-1">
            {details.internalNotes.map((note, i) => (
              <div key={i} className="bg-[#F2F2F2] rounded-lg p-4">
                <p className="text-sm text-[#000000] font-medium mb-2">{note.text}</p>
                <p className="text-xs text-[#000000B2] font-regular">Added by {note.author} • {note.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Expenses (Span 1) */}
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 flex flex-col">
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <h2 className="text-[16px] sm:text-[18px] font-semibold text-[#000000]">Additional Expenses</h2>
            <button className="text-primary flex items-center gap-1 text-sm font-semibold hover:underline">
              + Add
            </button>
          </div>
          <div className="space-y-4 flex-1">
            {details.expenses.map((exp, i) => (
              <ExpenseItem key={i} name={exp.name} amount={exp.amount} status={exp.status} />
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
            <span className="text-sm text-gray-500">Total</span>
            <span className="text-md font-semibold text-[#000000]">{details.totalExpenses}</span>
          </div>
        </div>


        {/* --- ROW 4 --- */}
        {/* Activity Log (Span 2) */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 flex flex-col">
          <h2 className="text-[16px] sm:text-[18px] font-semibold text-[#000000] mb-4 sm:mb-6">Activity Log</h2>
          <div className="space-y-2 relative">
            
            {details.activityLogs.map((log, i) => (
              <div key={i} className="relative flex items-start gap-4">
                <div className="w-3 h-3 mt-1 rounded-full bg-primary shrink-0 z-10 outline outline-4 outline-white"></div>
                <div>
                  <div className="text-md font-medium text-[#000000]">{log.title}</div>
                  <div className="text-sm text-[#000000]/70 font-regular mt-1">{log.subtitle}</div>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* Real-time Transit Map (Span 1) */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 flex flex-col">
          <h2 className="text-[16px] sm:text-[18px] font-semibold text-[#000000] mb-4 sm:mb-6">Real-time Transit Map</h2>
          <div className="relative h-48 sm:h-auto rounded-2xl overflow-hidden flex items-center justify-center flex-1 min-h-[192px]">
            <div className="absolute inset-0">
              <Image src={transportMapImg} alt="Transit Map" fill className="object-cover object-center" />
            </div>
            <div className="absolute top-2 right-2 p-1.5 bg-black/40 rounded backdrop-blur-sm text-white hover:bg-black/60 transition-colors cursor-pointer z-10">
              <Maximize2 className="w-4 h-4" />
            </div>
            
            <div className="absolute bottom-3 left-3 px-3 py-2 bg-white text-gray-900 text-xs font-bold rounded shadow-sm z-10">
              Current Zone: EU North
            </div>
          </div>
        </div>

      </div>

      {/* ADD NOTE MODAL */}
      {isAddNoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl overflow-hidden p-6 sm:p-8 relative">
            <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-900 mb-8">Add Notes</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">Add Note</label>
                <textarea 
                  className="w-full border border-dashed border-gray-300 rounded-lg p-4 text-sm text-gray-900 focus:outline-none focus:border-primary placeholder-gray-400 min-h-[140px] resize-none"
                  placeholder="Add internal note..."
                ></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">Assign Member</label>
                <div className="relative">
                  <select 
                    defaultValue=""
                    className="w-full border border-dashed border-gray-300 rounded-lg p-3.5 text-sm text-gray-500 focus:outline-none focus:border-primary appearance-none bg-white cursor-pointer"
                  >
                    <option value="" disabled>Tag Member</option>
                    <option value="1" className="text-gray-900">John Doe</option>
                    <option value="2" className="text-gray-900">Jane Smith</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <ChevronDown className="w-5 h-5 text-gray-900" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center justify-end gap-3 sm:gap-4 mt-10">
              <button 
                onClick={() => setIsAddNoteModalOpen(false)}
                className="px-6 sm:px-10 py-2.5 rounded-lg border border-[#044890] text-[#044890] font-semibold text-sm hover:bg-blue-50 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => setIsAddNoteModalOpen(false)}
                className="px-6 sm:px-10 py-2.5 rounded-lg bg-[#044890] text-white font-semibold text-sm hover:bg-[#03366c] transition-colors"
              >
                Add Note
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

function TimelineStep({ title, date, active, current, icon, isLast }: { title: string, date: string, active?: boolean, current?: boolean, icon?: React.ReactNode, isLast?: boolean }) {
  return (
    <div className="relative flex flex-col items-center flex-1">
      {/* Connector Line to the next step */}
      {!isLast && (
        <div className={`absolute top-[86px] left-[50%] w-full h-[2px] flex items-center z-0 ${active && !current ? 'bg-[#E5E7EB]' : 'bg-[#E5E7EB]'}`}>
           <div className="mx-auto bg-white px-1.5">
             <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M8 5L0.5 9.33013L0.5 0.669873L8 5Z" fill={active && !current ? "#04458B" : "#D1D5DB"}/>
             </svg>
           </div>
        </div>
      )}
      
      {/* Icon Squircle */}
      <div className={`relative z-10 w-[56px] h-[56px] rounded-[18px] flex items-center justify-center text-white mb-6 ${
        active || current ? 'bg-linear-to-b from-[#075EB6] to-[#04478E]' : 'bg-[#64748B]'
      }`}>
        {icon ? icon : active ? <CircleCheck className="w-7 h-7" /> : null}
      </div>
      
      {/* Small Dot */}
      <div className={`relative z-10 w-[14px] h-[14px] rounded-full mb-3 outline outline-[3px] outline-white ${
        active || current ? 'bg-[#04458B]' : 'bg-[#D1D5DB]'
      }`}></div>
      
      {/* Text */}
      <div className="text-center px-2">
        <div className={`text-xs font-medium ${current ? 'text-[#000000]' : 'text-[#000000]'}`}>{title}</div>
        <div className={`text-[10px] mt-1 ${current ? 'text-[#04458B] font-regular' : 'text-[#000000]'}`}>{date}</div>
      </div>
    </div>
  );
}

function DocItem({ name, date, type }: { name: string, date: string, type: 'pdf' | 'pdf-success' }) {
  return (
    <div className="flex items-center justify-between group border-b border-gray-300 pb-4 last:border-0 last:pb-0">
      <div className="flex items-center gap-3 overflow-hidden">
        <div className={`p-2 rounded shrink-0 ${type === 'pdf-success' ? 'bg-[#248700]/10' : 'bg-[#FF0000]/10'}`}>
          {type === 'pdf-success' ? (
            <SquareCheck className="w-4 h-4 text-[#248700]" />
          ) : (
            <Info className="w-4 h-4 text-[#FF0000]" />
          )}
        </div>
        <div className="min-w-0">
          <div className="text-sm font-bold text-gray-900 truncate">{name}</div>
          <div className="text-xs text-gray-500 truncate">{date}</div>
        </div>
      </div>
      <button className="p-1.5 text-black hover:text-gray-900 transition-colors shrink-0">
        <Download className="w-4 h-4" />
      </button>
    </div>
  );
}

function ExpenseItem({ name, amount, status }: { name: string, amount: string, status: 'Confirmed' | 'Pending' }) {
  return (
    <div className="flex flex-wrap sm:flex-nowrap items-center justify-between text-sm gap-2">
      <div className="text-[#000000] font-medium text-sm">{name}</div>
      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        <span className={`px-2 py-0.5 text-[10px] font-semibold rounded ${
          status === 'Confirmed' ? 'bg-[#ACF1AD7D] text-[#249209]' : 'bg-[#FFDA9C9E] text-[#D98C0B]'
        }`}>
          {status}
        </span>
        <div className="font-medium text-[#000000] w-16 sm:w-20 text-right">{amount}</div>
        <button className="text-black hover:text-gray-900">
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
