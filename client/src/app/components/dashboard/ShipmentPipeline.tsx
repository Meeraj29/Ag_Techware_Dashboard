"use client";
import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import Link from 'next/link';
import { FileText, Briefcase, ShieldCheck, Truck, CheckCircle2 } from 'lucide-react';

export default function ShipmentPipeline() {
  const pipeline = useAppSelector((state) => state.dashboard.pipeline);

  const steps = [
    { name: "Quotes", value: pipeline.quotes, unit: "units", icon: FileText, link: "dashboard/sales" },
    { name: "Jobs", value: pipeline.jobs, unit: "units", icon: Briefcase, link: "dashboard/jobs" },
    { name: "Clearance", value: pipeline.clearance, unit: "units", icon: ShieldCheck, link: "dashboard/clearance" },
    { name: "Transit", value: pipeline.transit, unit: "units", icon: Truck, link: "dashboard/transportation" },
    { name: "Delivered", value: pipeline.delivered, unit: "units", icon: CheckCircle2, link: "dashboard/transportation" },
  ];

  return (
    <div className="bg-white rounded-xl  p-6  col-span-1 lg:col-span-2 flex flex-col justify-between">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-4">
        <h2 className="text-xl font-semibold text-black">Shipment Status Pipeline</h2>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full lg:w-auto">
          <span className="text-sm font-medium bg-[#10B9814D] text-[#10B981] px-3 py-1.5 rounded-md">
            On Time: {pipeline.onTimePercentage}%
          </span>
          <span className="text-sm font-medium bg-[#BA1A1A4D] text-[#BA1A1A] px-3 py-1.5 rounded-md">
            Critical: {pipeline.criticalPercentage}%
          </span>
          <select className="text-sm font-medium border border-gray-200 text-gray-800 rounded-md px-3 py-1.5 outline-none cursor-pointer bg-white sm:ml-auto lg:ml-0">
            <option>Last Month</option>
            <option>This Month</option>
            <option>This Year</option>
          </select>
        </div>
      </div>

      <div className="w-full overflow-x-auto pb-2 scrollbar-hide">
        <div className="flex justify-between items-start mt-6 min-w-[600px] w-full">
        {steps.map((step, idx) => (
          <Link href={`/${step.link}`} key={idx} className="group flex flex-col items-center relative flex-1 cursor-pointer min-w-[120px]">
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-[#64748B] group-hover:bg-gradiate flex items-center justify-center text-white shadow-sm z-10 transition-all">
              <step.icon size={26} strokeWidth={1.5} />
            </div>

            {/* Dot and Line Container */}
            <div className="w-full flex items-center justify-center my-4 relative">
              {/* Continuous Line Segment */}
              <div className="absolute left-[-50%] right-[-50%] top-1/2 -translate-y-1/2 h-px bg-[#E5E7EB] z-0"></div>

              {/* The Dot */}
              <div className="w-3.5 h-3.5 rounded-full bg-[#D1D5DB] group-hover:bg-gradiate z-10 relative transition-all"></div>

              {/* The Arrow (positioned halfway to the next step) */}
              {idx < steps.length - 1 && (
                <div className="absolute left-full top-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
                  <div className="w-2.5 h-2.5 border-t-2 border-r-2 border-[#D1D5DB] transform rotate-45 -ml-1"></div>
                </div>
              )}
            </div>

            {/* Texts */}
            <span className="text-base font-medium text-black whitespace-nowrap">{step.name}</span>
            <span className="text-sm font-medium text-[#054890] whitespace-nowrap mt-1">({step.value} {step.unit})</span>
          </Link>
        ))}
        </div>
      </div>
    </div>
  );
}
