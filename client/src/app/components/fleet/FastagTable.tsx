"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Eye, Trash2, Settings, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function FastagTable() {
  const { fastagTransactions, searchQuery } = useSelector(
    (state: RootState) => state.fleet
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredTransactions = fastagTransactions.filter((row) => {
    const matchesSearch =
      row.vehicle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.plaza.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const totalPages = Math.max(1, Math.ceil(filteredTransactions.length / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedTransactions = filteredTransactions.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="overflow-x-auto scrollbar-hide">
      <div className="min-w-[850px]">
        <table className="w-full border-separate border-spacing-y-2">
          <thead>
            <tr className="bg-[#F4F4F4] text-[16px] font-medium text-black/80 whitespace-nowrap align-middle">
              <th className="py-2.5 px-4 rounded-l-xl text-left font-medium w-[150px]">Date &amp; Time</th>
              <th className="py-2.5 px-4 text-left font-medium w-[150px]">Vehicle</th>
              {/* Set a concrete width here to eliminate the dead gap space */}
              <th className="py-2.5 px-4 text-left font-medium w-[280px]">Toll Plaza</th>
              <th className="py-2.5 px-4 text-left font-medium w-[130px]">Amount</th>
              <th className="py-2.5 px-4 text-left font-medium w-[130px]">Balance</th>
              <th className="py-2.5 px-4 rounded-r-xl text-right font-medium w-[110px]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedTransactions.map((row, idx) => (
              <tr
                key={idx}
                className="text-[16px] text-gray-600 hover:bg-gray-50/50 align-middle"
              >
                <td className="py-3 px-4 text-black/80 whitespace-nowrap">
                  {row.date}
                </td>
                <td className="py-3 px-4 font-medium text-[#3525CD] cursor-pointer hover:underline whitespace-nowrap">
                  {row.vehicle}
                </td>
                <td className="py-3 px-4 font-medium text-black/80 whitespace-nowrap">
                  {row.plaza}
                </td>
                <td
                  className={`py-3 px-4 font-bold whitespace-nowrap ${row.isNegative ? "text-[#BA1A1A]" : "text-[#004AC6]"
                    }`}
                >
                  {row.amount}
                </td>
                <td
                  className={`py-3 px-4 font-semibold whitespace-nowrap ${row.isLowBal
                    ? "text-[#BA1A1A] font-bold"
                    : "text-[#191B23]"
                    }`}
                >
                  {row.balance}
                </td>
                <td className=" text-right whitespace-nowrap">
                  <div className="flex items-center justify-end gap-1">
                    <button className=" text-gray-400 bg-gray-50 rounded h-[40px] w-[40px]">
                      <Image src="/action4.svg" alt="View" width={40} height={40} />
                    </button>
                    <button className=" text-gray-400 bg-gray-50 rounded h-[40px] w-[40px]">
                      <Image src="/action5.svg" alt="Delete" width={40} height={40} />
                    </button>
                    <button className=" text-gray-400 bg-gray-50 rounded h-[40px] w-[40px]">
                      <Image src="/eye1.svg" alt="Settings" width={40} height={40} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredTransactions.length === 0 && (
          <div className="py-12 text-center text-gray-500">
            No transactions found matching your filters.
          </div>
        )}

        {/* Footer Navigation Section Layout */}
        <div className="mt-4 flex items-center justify-between text-[16px] text-black/80 font-medium px-2">
          <div>
            Showing {filteredTransactions.length === 0 ? 0 : startIndex + 1}-
            {Math.min(startIndex + itemsPerPage, filteredTransactions.length)} of{" "}
            {filteredTransactions.length} Transactions
          </div>
          <div className="flex gap-1 items-center">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-[48px] h-[51px] flex items-center justify-center border-2 border-primary text-primary rounded-[8px] bg-white transition"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-[48px] h-[51px] flex items-center justify-center rounded-[8px] text-[14px] font-medium transition ${page === currentPage
                  ? 'border-2 border-[#E0E0E0] text-black bg-white font-semibold'
                  : 'border border-transparent text-gray-500 hover:border-gray-200 hover:text-black'
                  }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="w-[48px] h-[51px] flex items-center justify-center border-2 border-primary text-primary rounded-[8px] bg-white transition"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
