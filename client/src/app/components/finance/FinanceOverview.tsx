"use client";
import { CircleDollarSign, FileText, Truck, CalendarX2, PiggyBank } from "lucide-react";
import { useAppSelector } from "../../redux/hooks";

export default function FinanceOverview() {
  const stats = useAppSelector((state) => state.finance.stats);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {/* Card 1 */}
      <div className="bg-[#F4F4F4] rounded-[16px] p-4 flex flex-col justify-between min-h-[110px]">
        <div className="flex justify-between items-start">
          <h2 className="text-[20px] sm:text-[22px] xl:text-[22px] 2xl:text-[26px] font-semibold text-[#000000] leading-tight">₹{stats.totalRevenue.toLocaleString('en-US')}</h2>
          <div className="w-10 h-10 rounded-xl bg-[#DADADA] flex items-center justify-center shrink-0">
            <PiggyBank className="w-5 h-5 text-[#000000]" />
          </div>
        </div>
        <div className="flex justify-between items-end mt-2">
          <p className="text-[16px] text-[#000000] font-medium">Total Revenue</p>
          <span className="bg-[#248F5F66] text-[#10B981] text-[12px] font-medium px-2.5 py-1 rounded-full">+12.5%</span>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-[#F4F4F4] rounded-[16px] p-4 flex flex-col justify-between min-h-[110px]">
        <div className="flex justify-between items-start">
          <h2 className="text-[20px] sm:text-[22px] xl:text-[22px] 2xl:text-[26px] font-semibold text-[#000000] leading-tight">₹{stats.pendingPayments.toLocaleString('en-US')}</h2>
          <div className="w-10 h-10 rounded-xl bg-[#DADADA] flex items-center justify-center shrink-0">
            <FileText className="w-5 h-5 text-[#000000]" />
          </div>
        </div>
        <div className="flex justify-between items-end mt-2">
          <p className="text-[16px] text-[#000000] font-medium">Pending Payments</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-[#F4F4F4] rounded-[16px] p-4 flex flex-col justify-between min-h-[110px]">
        <div className="flex justify-between items-start">
          <h2 className="text-[20px] sm:text-[22px] xl:text-[22px] 2xl:text-[26px] font-semibold text-[#000000] leading-tight">₹{stats.outstandingAmount.toLocaleString('en-US')}</h2>
          <div className="w-10 h-10 rounded-xl bg-[#DADADA] flex items-center justify-center shrink-0">
            <Truck className="w-5 h-5 text-[#000000]" />
          </div>
        </div>
        <div className="flex justify-between items-end mt-2">
          <p className="text-[16px] text-[#000000] font-medium">Outstanding Amount</p>
        </div>
      </div>

      {/* Card 4 (Overdue) */}
      <div className="bg-[#F4F4F4] border-2 border-[#BA1A1A] rounded-[16px] p-4 flex flex-col justify-between min-h-[110px]">
        <div className="flex justify-between items-start">
          <h2 className="text-[20px] sm:text-[22px] xl:text-[22px] 2xl:text-[26px] font-semibold text-[#000000] leading-tight">₹{stats.overduePayments.toLocaleString('en-US')}</h2>
          <div className="w-10 h-10 rounded-xl bg-[#FEE2E2] flex items-center justify-center shrink-0">
            <CalendarX2 className="w-5 h-5 text-[#BA1A1A]" />
          </div>
        </div>
        <div className="flex justify-between items-end mt-2">
          <p className="text-[16px] text-[#000000] font-medium">Overdue Payments</p>
        </div>
      </div>
    </div>
  );
}
