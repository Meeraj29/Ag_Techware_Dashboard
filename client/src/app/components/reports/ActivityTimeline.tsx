"use client";

import React from 'react';
import { useSelector } from 'react-redux';
import { ReportsState, TimelineActivity } from '../../types/reports';
import { Check, CloudUpload, AlertTriangle } from 'lucide-react';
import Image from 'next/image';
export function ActivityTimeline() {
  const activities = useSelector((state: { reports: ReportsState }) => state.reports.activityTimeline);

  if (!activities) return null;

  const getIcon = (type: TimelineActivity['type']) => {
    switch (type) {
      case 'success':
        return (
<div className="mt-8">
<Image src="/shipment.svg" alt="success" width={32} height={32} />
</div>
        );
      case 'info':
        return (
          <div className='mt-8'>
          <Image src="/export.svg" alt="success" width={32} height={32} />
          </div>
        );
      case 'warning':
        return (
          <Image src="/alert.svg" alt="success" width={32} height={32} />

        );
    }
  };

  return (
    <div className="bg-white rounded-[24px] border border-gray-200 p-6 shadow-sm min-h-[350px] lg:h-[450px] flex flex-col">
      <h2 className="font-semibold text-[20px] text-[#0F172A] mb-6">Real-time Activity Timeline</h2>

      <div className="relative flex-1 overflow-y-auto pr-2 scrollbar-hide pt-4">
        <div className="flex flex-col gap-6 relative">
          {activities.map((activity, index) => (
            <div key={activity.id} className="flex gap-4 items-center">
              <div className="relative z-10 bg-white rounded-full flex items-center justify-center w-8 h-8 shrink-0">
                {getIcon(activity.type)}
              </div>
              <div className="flex flex-col">
                <h4 className="font-semibold text-[15px] text-[#191B24] leading-tight mb-0.5">{activity.title}</h4>
                <p className="text-[13px] text-[#808080] leading-tight">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
