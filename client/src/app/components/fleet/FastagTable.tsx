"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Eye, Trash2, Settings, ChevronLeft, ChevronRight } from "lucide-react";

export default function FastagTable() {
  const { fastagTransactions, searchQuery } = useSelector(
    (state: RootState) => state.fleet
  );

  const filteredTransactions = fastagTransactions.filter((row) => {
    const matchesSearch =
      row.vehicle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.plaza.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="overflow-x-auto scrollbar-hide">
      <div className="min-w-[850px]">
        <div className="grid grid-cols-[140px_140px_1fr_120px_120px_120px] gap-4 py-2.5 px-4 bg-gray-50 text-[11px] font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100">
          <div>Date &amp; Time</div>
          <div>Vehicle</div>
          <div>Toll Plaza</div>
          <div>Amount</div>
          <div>Balance</div>
          <div className="text-right">Actions</div>
        </div>

        <div className="divide-y divide-gray-100">
          {filteredTransactions.map((row, idx) => (
            <div
              key={idx}
              className="grid grid-cols-[140px_140px_1fr_120px_120px_120px] gap-4 py-3 px-4 items-center text-xs text-gray-600 hover:bg-gray-50/50"
            >
              <div className="text-gray-400">{row.date}</div>
              <div className="font-bold text-blue-600 cursor-pointer hover:underline">
                {row.vehicle}
              </div>
              <div className="font-medium text-gray-800">{row.plaza}</div>
              <div
                className={`font-bold ${
                  row.isNegative ? "text-red-500" : "text-blue-600"
                }`}
              >
                {row.amount}
              </div>
              <div
                className={`font-semibold ${
                  row.isLowBal
                    ? "text-red-600 font-bold"
                    : "text-gray-700"
                }`}
              >
                {row.balance}
              </div>
              <div className="flex items-center justify-end gap-1">
                <button className="p-1.5 text-gray-400 bg-gray-50 rounded hover:bg-gray-100">
                  <Eye className="h-3.5 w-3.5" />
                </button>
                <button className="p-1.5 text-gray-400 bg-gray-50 rounded hover:bg-gray-100">
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
                <button className="p-1.5 text-gray-400 bg-gray-50 rounded hover:bg-gray-100">
                  <Settings className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}

          {filteredTransactions.length === 0 && (
            <div className="py-12 text-center text-gray-500">
              No transactions found matching your filters.
            </div>
          )}
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-gray-400 font-medium px-2">
          <div>
            Showing 1-{filteredTransactions.length} of{" "}
            {fastagTransactions.length} Transactions
          </div>
          <div className="inline-flex items-center gap-1">
            <button className="border border-gray-200 p-1.5 rounded-lg bg-white text-gray-400 hover:bg-gray-50">
              <ChevronLeft className="h-3.5 w-3.5" />
            </button>
            <span className="border border-gray-200 px-2.5 py-1 rounded-lg text-gray-700 bg-gray-50 font-bold">
              1
            </span>
            <button className="border border-gray-200 p-1.5 rounded-lg bg-white text-gray-400 hover:bg-gray-50">
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}