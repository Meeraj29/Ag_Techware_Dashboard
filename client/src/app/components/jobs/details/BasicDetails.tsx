import { Info } from "lucide-react";

export default function BasicDetails({ basicDetails }: { basicDetails: any }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Info className="w-5 h-5 text-[#075FB7]" />
          <h3 className="text-base font-medium text-gray-900">Basic Details</h3>
        </div>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={basicDetails.customsOnly} readOnly className="w-4 h-4 rounded border-gray-300 text-[#075FB7] focus:ring-[#075FB7]" />
            <span className="text-[13px] font-bold text-gray-700">Customs Only</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={basicDetails.grnRequired} readOnly className="w-4 h-4 rounded border-gray-300 text-[#075FB7] focus:ring-[#075FB7]" />
            <span className="text-[13px] font-bold text-gray-700">GRN Required</span>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#F8F9FA] p-3 rounded-lg border border-gray-100">
          <p className="text-[11px] text-gray-500 mb-1">Freight Type</p>
          <p className="text-[13px] font-bold text-gray-900">{basicDetails.freightType}</p>
        </div>
        <div className="bg-[#F8F9FA] p-3 rounded-lg border border-gray-100">
          <p className="text-[11px] text-gray-500 mb-1">Load Type</p>
          <p className="text-[13px] font-bold text-gray-900">{basicDetails.loadType}</p>
        </div>
        <div className="bg-[#F8F9FA] p-3 rounded-lg border border-gray-100">
          <p className="text-[11px] text-gray-500 mb-1">Booking Ref</p>
          <p className="text-[13px] font-bold text-gray-900">{basicDetails.bookingRef}</p>
        </div>

        <div className="bg-[#F8F9FA] p-3 rounded-lg border border-gray-100 md:col-span-1">
          <p className="text-[11px] text-gray-500 mb-1">Shipper</p>
          <p className="text-[13px] font-bold text-gray-900">{basicDetails.shipper}</p>
        </div>
        <div className="bg-[#F8F9FA] p-3 rounded-lg border border-gray-100 md:col-span-1">
          <p className="text-[11px] text-gray-500 mb-1">Consignee</p>
          <p className="text-[13px] font-bold text-gray-900">{basicDetails.consignee}</p>
        </div>
        <div className="bg-[#F8F9FA] p-3 rounded-lg border border-gray-100 md:col-span-1">
          <p className="text-[11px] text-gray-500 mb-1">Billing Party</p>
          <p className="text-[13px] font-bold text-gray-900">{basicDetails.billingParty}</p>
        </div>
      </div>
    </div>
  );
}
