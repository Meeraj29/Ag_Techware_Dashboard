"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { SalesQuotation } from "../../../types/sales";
import QuoteActions from "./QuoteActions";

export default function QuoteDetailsHeader({ quotation }: { quotation: SalesQuotation }) {
  const router = useRouter();

  const formattedDate = new Date(quotation.validFrom).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="flex flex-col xl:flex-row xl:items-center justify-between bg-white rounded-xl p-6  border border-gray-100 mb-6 gap-6">
      <div className="flex items-start gap-4">
        <button
          onClick={() => router.push('/dashboard/sales')}
          className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#DADADA] hover:bg-gray-200 transition-colors shrink-0 mt-1 cursor-pointer"
        >
          <ArrowLeft className="h-6 w-6 text-gray-700" />
        </button>

        <div>
          <div className="flex flex-wrap items-center gap-3 mb-1">
            <h1 className="text-xl font-medium text-black">Quote #{quotation.quotationNumber}</h1>
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${quotation.status === 'Approved' ? 'bg-[#A1CCB8] text-[#005C3D]' :
              quotation.status === 'Pending' ? 'bg-[#FEF3C7] text-[#92400E]' :
                quotation.status === 'Rejected' ? 'bg-[#FEE2E2] text-[#991B1B]' :
                  'bg-gray-100 text-gray-700'
              }`}>
              {quotation.status}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 font-medium">
            <span>Type: <span className="text-black text-base font-medium">{quotation.tradeType} ({quotation.mode} Freight)</span></span>
            <span className="text-gray-300">|</span>
            <span className="text-[#00000075] font-normal">Date: {formattedDate}</span>
          </div>
        </div>
      </div>

      <QuoteActions />
    </div>
  );
}
