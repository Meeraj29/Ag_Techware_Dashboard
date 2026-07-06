"use client";

import { CheckSquare, CalendarDays } from "lucide-react";

export default function DriverComplianceWidgets() {
  return (
    <div className="grid gap-6 mt-6 md:grid-cols-2">
      {/* Compliance Score Widget */}
      <div className="rounded-[24px] border border-gray-100 bg-white p-6 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-4 w-full">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
            <CheckSquare className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-gray-900">Compliance Score</span>
              <span className="text-xs font-extrabold text-blue-600">92%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-1.5">
              <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: "92%" }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Renewal Queue Widget */}
      <div className="rounded-[24px] border border-gray-100 bg-white p-6 shadow-sm flex items-center">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
            <CalendarDays className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-gray-900">Renewal Queue</h4>
            <p className="text-[10px] text-gray-500 mt-1">5 drivers scheduled for medical exam next week.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
