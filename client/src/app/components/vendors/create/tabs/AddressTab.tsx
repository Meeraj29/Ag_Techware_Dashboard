"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { updateFormField } from "../../../../redux/features/vendor/vendorFormSlice";
import { Button } from "../../../../ui/Button";
import { X, Plus } from "lucide-react";

export default function AddressTab() {
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.vendorForm);
  const [isCustomBank, setIsCustomBank] = useState(false);

  const handleChange = (field: string, value: any) => {
    dispatch(updateFormField({ field: field as any, value }));
  };

  return (
    <div className="bg-white rounded-b-xl shadow-sm overflow-x-hidden scrollbar-hide">

      {/* Top Address Pill */}
      <div className="flex items-center justify-between p-6 border-b border-gray-100">
        <div className="px-4 py-1.5 rounded-md border border-gray-200 text-sm font-semibold text-gray-400">
          Address 1
        </div>
        <Button variant="outline" className="font-semibold text-primary border-primary">
          Add Address
        </Button>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 mb-10">

          {/* Branch Name */}
          <div>
            <label className="block text-base font-medium text-black mb-2">Branch Name <span className="text-[#BA1A1A]">*</span></label>
            <input
              type="text"
              placeholder="Branch Name"
              value={formState.branchName}
              onChange={(e) => handleChange("branchName", e.target.value)}
              className="w-full px-4 py-3 bg-[#F2F2F2] border-transparent rounded-md text-sm text-gray-800 outline-none focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>

          {/* Radios */}
          <div className="flex items-center gap-6 pt-8">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="isParentCompany4"
                checked={formState.isParentCompany4}
                onChange={() => {
                  handleChange("isParentCompany4", true);
                  handleChange("nonResident", false);
                }}
                className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
              />
              <span className="text-base font-medium text-black">Is Parent Company</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="isParentCompany4"
                checked={formState.nonResident}
                onChange={() => {
                  handleChange("nonResident", true);
                  handleChange("isParentCompany4", false);
                }}
                className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
              />
              <span className="text-base font-medium text-black">Non Resident</span>
            </label>
          </div>

          {/* PIC Email ID */}
          <div>
            <label className="block text-base font-medium text-black mb-2">PIC Email ID</label>
            <input
              type="email"
              placeholder="PIC Email ID"
              value={formState.picEmailId}
              onChange={(e) => handleChange("picEmailId", e.target.value)}
              className="w-full px-4 py-3 bg-[#F2F2F2] border-transparent rounded-md text-sm text-gray-800 outline-none focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>

          {/* Country */}
          <div>
            <label className="block text-base font-medium text-black mb-2">Country</label>
            <select
              value={formState.country}
              onChange={(e) => handleChange("country", e.target.value)}
              className="w-full px-4 py-3 bg-[#F2F2F2] border-transparent rounded-md text-sm text-gray-800 outline-none focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer"
            >
              <option value="">Country</option>
              <option value="US">United States</option>
              <option value="IN">India</option>
            </select>
          </div>

          {/* Bank Name */}
          <div>
            <label className="block text-base font-medium text-black mb-2">Bank Name</label>
            <div className="flex flex-col gap-2">

              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter Bank Name"
                  value={formState.bankName.split(",")[0] || ""}
                  onChange={(e) => {
                    const parts = formState.bankName.split(",");
                    parts[0] = e.target.value;
                    handleChange("bankName", parts.join(","));
                  }}
                  className="w-full px-4 py-3 bg-[#F2F2F2] border-transparent rounded-md text-sm text-gray-800 outline-none focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
                <button
                  onClick={() => {
                    const parts = formState.bankName ? formState.bankName.split(",") : [""];
                    parts.push("");
                    handleChange("bankName", parts.join(","));
                  }}
                  className="shrink-0 w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-md text-gray-600 hover:bg-gray-50 transition-colors"
                  title="Add another bank"
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>

              {formState.bankName.split(",").slice(1).map((bank, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter Additional Bank Name"
                    value={bank}
                    onChange={(e) => {
                      const parts = formState.bankName.split(",");
                      parts[index + 1] = e.target.value;
                      handleChange("bankName", parts.join(","));
                    }}
                    className="w-full px-4 py-3 bg-[#F2F2F2] border-transparent rounded-md text-sm text-gray-800 outline-none focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    autoFocus={index === formState.bankName.split(",").length - 2}
                  />
                  <button
                    onClick={() => {
                      const parts = formState.bankName.split(",");
                      parts.splice(index + 1, 1);
                      handleChange("bankName", parts.join(","));
                    }}
                    className="shrink-0 w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-md text-gray-600 hover:bg-gray-50 transition-colors"
                    title="Remove bank"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              ))}

            </div>
          </div>

          {/* Account No */}
          <div>
            <label className="block text-base font-medium text-black mb-2">Account No. <span className="text-[#BA1A1A]">*</span></label>
            <input
              type="text"
              placeholder="ACC Number"
              value={formState.accountNo}
              onChange={(e) => handleChange("accountNo", e.target.value)}
              className="w-full px-4 py-3 bg-[#F2F2F2] border-transparent rounded-md text-sm text-gray-800 outline-none focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>

          {/* Remarks */}
          <div>
            <label className="block text-base font-medium text-black mb-2">Remarks</label>
            <input
              type="text"
              placeholder="Remark"
              value={formState.remarks}
              onChange={(e) => handleChange("remarks", e.target.value)}
              className="w-full px-4 py-3 bg-[#F2F2F2] border-transparent rounded-md text-sm text-gray-800 outline-none focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>

          {/* PIC */}
          <div>
            <label className="block text-base font-medium text-black mb-2">PIC (Person In Charge)</label>
            <input
              type="text"
              placeholder="PIC"
              value={formState.picName}
              onChange={(e) => handleChange("picName", e.target.value)}
              className="w-full px-4 py-3 bg-[#F2F2F2] border-transparent rounded-md text-sm text-gray-800 outline-none focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>

          {/* PIC Phone No */}
          <div>
            <label className="block text-base font-medium text-black mb-2">PIC Phone No</label>
            <input
              type="text"
              placeholder="PIC Phone No"
              value={formState.picPhoneNo}
              onChange={(e) => handleChange("picPhoneNo", e.target.value)}
              className="w-full px-4 py-3 bg-[#F2F2F2] border-transparent rounded-md text-sm text-gray-800 outline-none focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>

        </div>

        {/* Bottom Section - Address & Toggles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">

          {/* Address */}
          <div>
            <label className="block text-base font-medium text-black mb-2">Address <span className="text-[#BA1A1A]">*</span></label>
            <textarea
              placeholder="Address"
              value={formState.address}
              onChange={(e) => handleChange("address", e.target.value)}
              rows={4}
              className="w-full px-4 py-3 bg-[#F2F2F2] border border-dashed border-gray-300 rounded-md text-sm text-gray-800 outline-none focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
            />
          </div>

          {/* Active Flag Toggle */}
          <div className="flex items-start pt-8">
            <label className="flex items-center gap-3 cursor-pointer">
              <div
                onClick={() => handleChange("activeFlag", !formState.activeFlag)}
                className={`w-8 h-4 flex items-center rounded-full p-0.5 transition-colors border ${formState.activeFlag ? "bg-primary border-primary" : "bg-[#E6E6E6] border-none"
                  }`}
              >
                <div
                  className={`w-3 h-3 rounded-full shadow-sm transform transition-transform ${formState.activeFlag ? "bg-white translate-x-4" : "bg-[#0860B8] translate-x-0"
                    }`}
                />
              </div>
              <span className="text-base font-medium text-black ">Active Flag</span>
            </label>
          </div>

          {/* KYC Flag Toggle */}
          <div className="flex items-start pt-8">
            <label className="flex items-center gap-3 cursor-pointer">
              <div
                onClick={() => handleChange("kycFlag", !formState.kycFlag)}
                className={`w-8 h-4 flex items-center rounded-full p-0.5 transition-colors border ${formState.kycFlag ? "bg-primary border-primary" : "bg-[#E6E6E6] border-none"
                  }`}
              >
                <div
                  className={`w-3 h-3 rounded-full shadow-sm transform transition-transform ${formState.kycFlag ? "bg-white translate-x-4" : "bg-[#0860B8] translate-x-0"
                    }`}
                />
              </div>
              <span className="text-base font-medium text-black">KYC Flag</span>
            </label>
          </div>

        </div>

      </div>
    </div>
  );
}
