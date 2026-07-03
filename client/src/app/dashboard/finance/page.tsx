"use client";
import FinanceOverview from "../../components/finance/FinanceOverview";
import CashFlowAnalysis from "../../components/finance/CashFlowAnalysis";
import PaymentDistribution from "../../components/finance/PaymentDistribution";
import FinanceTable from "../../components/finance/FinanceTable";
import RecentActivity from "../../components/finance/RecentActivity";

export default function FinancePage() {
  return (
    <div className="w-full space-y-4 p-4 sm:p-4 bg-[#F4F4F4] min-h-[calc(100vh-80px)] overflow-y-auto scrollbar-hide">
      
      {/* Top Header Section */}
      <div className="bg-white rounded-[20px] border border-gray-100 p-4 sm:p-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div>
            <h1 className="text-[20px] sm:text-[20px] font-semibold text-[#000000]">Finance Overview</h1>
            <p className="text-[14px] text-[#000000B2] font-regular mt-0.5">Real-time monitoring of operational cash flow and vendor obligations.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white px-5 py-2.5 rounded-lg text-[16px] font-medium transition-colors whitespace-nowrap shadow-sm">
              Export Data
            </button>
            <button className="bg-gradiate hover:bg-[#03366b] text-white px-5 py-2.5 rounded-lg text-[16px] font-medium transition-colors whitespace-nowrap shadow-sm">
              Generate Invoice
            </button>
          </div>
        </div>
        <FinanceOverview />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
         <div className="lg:col-span-7 bg-white rounded-[20px] border border-gray-100 p-4 sm:p-5 h-full overflow-hidden">
           <CashFlowAnalysis />
         </div>
         <div className="lg:col-span-5 bg-white rounded-[20px] border border-gray-100 p-4 sm:p-5 h-full">
           <PaymentDistribution />
         </div>
      </div>

      <div className="bg-white rounded-[20px] border border-gray-100 p-0 sm:p-0 overflow-hidden">
        <FinanceTable />
      </div>

      <div className="bg-white rounded-[20px] border border-gray-100 p-4 sm:p-5">
        <RecentActivity />
      </div>
    </div>
  );
}
