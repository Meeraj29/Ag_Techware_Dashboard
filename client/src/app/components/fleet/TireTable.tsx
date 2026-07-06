"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Eye, FileText, ChevronLeft, ChevronRight } from "lucide-react";

const STATUS_STYLES: Record<string, string> = {
  REPLACE: "bg-red-50 text-red-500 border border-red-100",
  MONITOR: "bg-orange-50 text-orange-500 border border-orange-100",
  GOOD:    "bg-blue-50 text-blue-500 border border-blue-100",
};

export default function TireTable() {
  const { tireRecords, searchQuery, typeFilter, statusFilter } =
    useSelector((state: RootState) => state.fleet);

  const filteredRecords = tireRecords.filter((record) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      record.vehicle.toLowerCase().includes(q) ||
      record.brand.toLowerCase().includes(q) ||
      record.position.toLowerCase().includes(q);
    const matchesType =
      typeFilter === "All Types" || typeFilter === "All" ||
      record.position.toLowerCase().includes(typeFilter.toLowerCase());
    const matchesStatus =
      statusFilter === "Status: All" || statusFilter === "All" ||
      record.status === statusFilter.replace("Status: ", "");
    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <div className="overflow-x-auto pb-4 scrollbar-hide">
      <div className="min-w-[1050px]">

        {/* ── Table Header ── */}
        <div className="grid grid-cols-[160px_150px_170px_120px_120px_130px_110px_100px] gap-3 py-3 px-4 bg-gray-50 rounded-t-xl text-[11px] font-bold text-gray-500 uppercase tracking-wide items-center">
          <div>Vehicle</div>
          <div>Position</div>
          <div>Brand</div>
          <div>Install Date</div>
          <div>Mileage (KM)</div>
          <div>Due In</div>
          <div>Status</div>
          <div className="text-right">Actions</div>
        </div>

        {/* ── Rows ── */}
        <div className="divide-y divide-gray-100">
          {filteredRecords.map((record) => (
            <div
              key={record.id}
              className="grid grid-cols-[160px_150px_170px_120px_120px_130px_110px_100px] gap-3 py-3.5 px-4 items-center text-xs text-gray-600 hover:bg-gray-50/60 transition-colors"
            >
              {/* Vehicle */}
              <div className="font-bold text-blue-600 hover:underline cursor-pointer truncate">
                {record.vehicle}
              </div>

              {/* Position */}
              <div className="text-gray-700 truncate">{record.position}</div>

              {/* Brand */}
              <div className="text-gray-700 truncate">{record.brand}</div>

              {/* Install Date */}
              <div className="text-gray-600">{record.installDate}</div>

              {/* Mileage */}
              <div className="text-gray-600">{record.mileage}</div>

              {/* Due In — red if overdue */}
              <div
                className={`font-semibold ${
                  record.isOverdue ? "text-red-500" : "text-gray-700"
                }`}
              >
                {record.dueIn}
              </div>

              {/* Status pill */}
              <div>
                <span
                  className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wide ${
                    STATUS_STYLES[record.status] ?? STATUS_STYLES.GOOD
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  {record.status}
                </span>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-1.5">
                <button
                  title="View"
                  className="rounded-lg p-2 bg-[#f5f6f7] text-gray-500 hover:bg-gray-200 transition-colors"
                >
                  <Eye className="h-3.5 w-3.5" />
                </button>
                <button
                  title="Document"
                  className="rounded-lg p-2 bg-[#f5f6f7] text-gray-500 hover:bg-gray-200 transition-colors"
                >
                  <FileText className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}

          {filteredRecords.length === 0 && (
            <div className="py-12 text-center text-sm text-gray-400">
              No tire records found matching your filters.
            </div>
          )}
        </div>

        {/* ── Pagination ── */}
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs font-medium text-gray-400 px-2">
          <div>
            Showing 1–{filteredRecords.length} Of {tireRecords.length} Tier Management
          </div>
          <div className="inline-flex items-center gap-1">
            <button className="rounded-lg border border-gray-200 p-2 text-gray-400 hover:bg-gray-50 transition-colors">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="rounded-lg border border-gray-200 px-3 py-2 text-gray-700 bg-gray-50 font-bold">
              1
            </span>
            <button className="rounded-lg border border-gray-200 p-2 text-gray-400 hover:bg-gray-50 transition-colors">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
