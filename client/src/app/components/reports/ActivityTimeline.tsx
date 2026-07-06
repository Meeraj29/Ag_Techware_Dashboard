"use client";

import React from 'react';
import { useSelector } from 'react-redux';
import { ReportsState, TimelineActivity } from '../../types/reports';
import { Check, CloudUpload, AlertTriangle } from 'lucide-react';

export function ActivityTimeline() {
  const activities = useSelector((state: { reports: ReportsState }) => state.reports.activityTimeline);

  if (!activities) return null;

  const getIcon = (type: TimelineActivity['type']) => {
    switch (type) {
      case 'success':
        return (
          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0 z-10 border-2 border-white">
            <Check size={14} className="text-green-600" />
          </div>
        );
      case 'info':
        return (
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0 z-10 border-2 border-white">
            <CloudUpload size={14} className="text-blue-600" />
          </div>
        );
      case 'warning':
        return (
          <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center shrink-0 z-10 border-2 border-white">
            <AlertTriangle size={14} className="text-orange-500" />
          </div>
        );
    }
  };

  return (
    <div className="bg-white rounded-[24px] border border-gray-200 p-6 shadow-sm h-full flex flex-col">
      <h2 className="font-bold text-lg text-gray-800 mb-6">Real-time Activity Timeline</h2>
      
      <div className="relative flex-1 overflow-y-auto pr-2 custom-scrollbar">
        {/* Continuous vertical line */}
        <div className="absolute left-4 top-4 bottom-4 w-px bg-gray-100 z-0"></div>

        <div className="flex flex-col gap-6 relative">
          {activities.map((activity, index) => (
            <div key={activity.id} className="flex gap-4">
              {getIcon(activity.type)}
              <div className="pt-1.5 pb-2">
                <h4 className="font-bold text-sm text-gray-800 leading-none mb-1.5">{activity.title}</h4>
                <p className="text-xs text-gray-500">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
