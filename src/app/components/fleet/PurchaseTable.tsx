"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function PurchaseTable() {
  const { purchaseOrders, searchQuery, statusFilter } = useSelector(
    (state: RootState) => state.fleet
  );

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredOrders = purchaseOrders.filter((order) => {
    const matchesSearch =
      order.po.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.vendor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "All" || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Pagination metrics
  const totalPages = Math.max(1, Math.ceil(filteredOrders.length / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedOrders = filteredOrders.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="overflow-x-auto scrollbar-hide">
      <div className="min-w-[900px]">
        <table className="w-full border-separate border-spacing-y-2">
          <thead>
            <tr className="bg-[#F4F4F4] text-[16px] font-medium text-black/80 whitespace-nowrap align-middle">
              <th className="py-3 px-4 rounded-l-xl text-left font-medium w-[160px]">Po Number</th>
              <th className="py-3 px-4 text-left font-medium w-[240px]">Vendor</th>
              <th className="py-3 px-4 text-left font-medium w-[130px]">Category</th>
              <th className="py-3 px-4 text-left font-medium w-[130px]">Amount</th>
              <th className="py-3 px-4 text-left font-medium w-[150px]">Status</th>
              <th className="py-3 px-4 text-left font-medium w-[130px]">Delivery Date</th>
              <th className="py-3 px-4 rounded-r-xl text-right font-medium w-[100px]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedOrders.map((item) => (
              <tr
                key={item.id}
                className="text-[16px] text-gray-600 border-b border-gray-100 last:border-0 align-middle"
              >
                <td className="py-3.5 px-4 font-bold text-[#3525CD] hover:underline cursor-pointer whitespace-nowrap">
                  {item.po}
                </td>
                <td className="py-3.5 px-4 font-medium text-black/80 whitespace-nowrap">
                  {item.vendor}
                </td>
                <td className="py-3.5 px-4 whitespace-nowrap">
                  {item.tag && (
                    <span
                      className={`px-2.5 py-1 rounded-full font-medium text-[12px] uppercase ${item.tag === "Tires"
                        ? "bg-[#054B94]/15 text-primary"
                        : item.tag === "SPARE PARTS"
                          ? "bg-[#707070]/13 text-[#2E2E2E]"
                          : "bg-[#FFD7D7] text-[#880000]"
                        }`}
                    >
                      {item.tag}
                    </span>
                  )}
                </td>
                <td className="py-3.5 px-4 font-semibold text-black/80 whitespace-nowrap">
                  {item.amount}
                </td>
                <td className="py-3.5 px-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-semibold text-[11px] ${item.statusColor}`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    {item.status}
                  </span>
                </td>
                <td className="py-3.5 px-4 text-black/80 font-medium whitespace-nowrap">
                  {item.date}
                </td>
                <td className="text-right whitespace-nowrap">
                  <div className="flex items-center justify-end gap-1.5">
                    <button className="rounded-lg bg-[#f5f6f7] text-gray-500 hover:bg-gray-202 w-[40px] h-[40px] inline-flex items-center justify-center">
                      <Image src="/action1.svg" alt="View" width={40} height={40} />
                    </button>
                    <button className="rounded-lg bg-[#f5f6f7] text-gray-500 hover:bg-gray-202 w-[40px] h-[40px] inline-flex items-center justify-center">
                      <Image src="/action2.svg" alt="View" width={40} height={40} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredOrders.length === 0 && (
          <div className="py-12 text-center text-gray-500">
            No purchase orders found matching your filters.
          </div>
        )}

        {/* Footer Navigation Section Layout */}
        <div className="mt-6 flex items-center justify-between text-xs font-medium text-gray-400">
          <div>
            Showing {filteredOrders.length === 0 ? 0 : startIndex + 1}-
            {Math.min(startIndex + itemsPerPage, filteredOrders.length)} Of {filteredOrders.length} Orders
          </div>
          <div className="flex gap-1 items-center">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-[48px] h-[51px] flex items-center justify-center border-2 border-primary text-primary rounded-[8px] bg-white transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-[48px] h-[51px] flex items-center justify-center rounded-[8px] text-[14px] font-medium transition ${page === currentPage
                  ? "border-2 border-[#E0E0E0] text-black bg-white font-semibold"
                  : "border border-transparent text-gray-500 hover:border-gray-200 hover:text-black"
                  }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="w-[48px] h-[51px] flex items-center justify-center border-2 border-primary text-primary rounded-[8px] bg-white transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
