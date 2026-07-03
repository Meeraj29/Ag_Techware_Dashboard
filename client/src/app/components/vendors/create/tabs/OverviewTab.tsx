"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { updateFormField } from "../../../../redux/features/vendor/vendorFormSlice";

export default function OverviewTab() {
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.vendorForm);

  const handleChange = (field: string, value: any) => {
    dispatch(updateFormField({ field: field as any, value }));
  };

  return (
    <div className="p-6 bg-white rounded-b-xl shadow-sm">

      {/* 3 Column Grid for Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 mb-10">

        {/* Company Name */}
        <div>
          <label className="block text-base font-medium text-black mb-2">Company Name <span className="text-[#BA1A1A]">*</span></label>
          <input
            type="text"
            placeholder="Name"
            value={formState.companyName}
            onChange={(e) => handleChange("companyName", e.target.value)}
            className="w-full px-4 py-3 bg-[#F2F2F2] border-transparent rounded-md text-sm text-gray-800 placeholder:text-[#000000B2] outline-none focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all"
          />
        </div>

        {/* Party Shortcode */}
        <div>
          <label className="block text-base font-medium text-black  mb-2">Party Shortcode <span className="text-[#BA1A1A]">*</span></label>
          <input
            type="text"
            placeholder="Party Shortcode"
            value={formState.partyShortcode}
            onChange={(e) => handleChange("partyShortcode", e.target.value)}
            className="w-full px-4 py-2.5 bg-gray-100 border-transparent rounded-md text-sm text-gray-800 outline-none focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all"
          />
        </div>

        {/* Company CIN */}
        <div>
          <label className="block text-base font-medium text-black  mb-2">Company CIN</label>
          <input
            type="text"
            placeholder="Enter CIN"
            value={formState.companyCIN}
            onChange={(e) => handleChange("companyCIN", e.target.value)}
            className="w-full px-4 py-3 bg-[#F2F2F2] border-transparent rounded-md text-sm text-gray-800 outline-none focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all"
          />
        </div>

        {/* Party Type */}
        <div>
          <label className="block text-base font-medium text-black  mb-2">Party Type <span className="text-[#BA1A1A]">*</span></label>
          <select
            value={formState.partyType}
            onChange={(e) => handleChange("partyType", e.target.value)}
            className="w-full px-4 py-3 bg-[#F2F2F2] border-transparent rounded-md text-sm text-gray-800 outline-none focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer"
          >
            <option value="">Select</option>
            <option value="Agent">Agent</option>
            <option value="Shipper">Shipper</option>
            <option value="Consignee">Consignee</option>
          </select>
        </div>

        {/* Currency */}
        <div>
          <label className="block text-base font-medium text-black  mb-2">Currency <span className="text-[#BA1A1A]">*</span></label>
          <select
            value={formState.currency}
            onChange={(e) => handleChange("currency", e.target.value)}
            className="w-full px-4 py-3 bg-[#F2F2F2] border-transparent rounded-md text-sm text-gray-800 outline-none focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer"
          >
            <option value="">Currency</option>
            <option value="USD">USD</option>
            <option value="INR">INR</option>
            <option value="EUR">EUR</option>
          </select>
        </div>

        {/* Email */}
        <div>
          <label className="block text-base font-medium text-black  mb-2">Email (semi-colon to separate)</label>
          <select
            value={formState.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full px-4 py-3 bg-[#F2F2F2] border-transparent rounded-md text-sm text-gray-800 outline-none focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer"
          >
            <option value="">Email (comma-separated)</option>
            <option value="test@gmail.com">test@gmail.com</option>
          </select>
        </div>

        {/* Import/Export */}
        <div>
          <label className="block text-base font-medium text-black  mb-2">Import/Export <span className="text-[#BA1A1A]">*</span></label>
          <select
            value={formState.importExport}
            onChange={(e) => handleChange("importExport", e.target.value)}
            className="w-full px-4 py-3 bg-[#F2F2F2] border-transparent rounded-md text-sm text-gray-800 outline-none focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer"
          >
            <option value="">Import/Export</option>
            <option value="Import">Import</option>
            <option value="Export">Export</option>
            <option value="Both">Both</option>
          </select>
        </div>

      </div>

      <hr className="border-gray-200 mb-6" />

      {/* Checkboxes / Switches */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">

        {/* Column 1 */}
        <div className="flex flex-col gap-4">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formState.isParentCompany1}
              onChange={(e) => handleChange("isParentCompany1", e.target.checked)}
              className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
            />
            <span className="text-base font-medium text-black">Is Parent Company</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <div
              onClick={() => handleChange("billingParty", !formState.billingParty)}
              className={`w-8 h-4 flex items-center rounded-full p-0.5 transition-colors border ${formState.billingParty ? "bg-primary border-primary" : "bg-[#E6E6E6] border-none"
                }`}
            >
              <div
                className={`w-3 h-3 rounded-full shadow-sm transform transition-transform ${formState.billingParty ? "bg-white translate-x-4" : "bg-[#0860B8] translate-x-0"
                  }`}
              />
            </div>
            <span className="text-base font-medium text-black">Billing Party</span>
          </label>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-4">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formState.sez}
              onChange={(e) => handleChange("sez", e.target.checked)}
              className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
            />
            <span className="text-base font-medium text-black">SEZ</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formState.isParentCompany3}
              onChange={(e) => handleChange("isParentCompany3", e.target.checked)}
              className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
            />
            <span className="text-base font-medium text-black">Is Parent Company</span>
          </label>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-4">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formState.isRegisteredCompany}
              onChange={(e) => handleChange("isRegisteredCompany", e.target.checked)}
              className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
            />
            <span className="text-base font-medium text-black">Is Registered Company</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <div
              onClick={() => handleChange("groupCompanies", !formState.groupCompanies)}
              className={`w-8 h-4 flex items-center rounded-full p-0.5 transition-colors border ${formState.groupCompanies ? "bg-primary border-primary" : "bg-[#E6E6E6] border-none"
                }`}
            >
              <div
                className={`w-3 h-3 rounded-full shadow-sm transform transition-transform ${formState.groupCompanies ? "bg-white translate-x-4" : "bg-[#0860B8] translate-x-0"
                  }`}
              />
            </div>
            <span className="text-base font-medium text-black">Group Companies</span>
          </label>
        </div>

      </div>
    </div>
  );
}
