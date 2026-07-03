"use client";

import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { updateFormField } from "../../../../redux/features/vendor/vendorFormSlice";
import { Button } from "../../../../ui/Button";
import { Upload, X } from "lucide-react";

export default function KYCDocumentsTab() {
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.vendorForm);

  const fileInput1 = useRef<HTMLInputElement>(null);
  const fileInput2 = useRef<HTMLInputElement>(null);

  const handleChange = (field: string, value: any) => {
    dispatch(updateFormField({ field: field as any, value }));
  };

  const handleFileUpload = (field: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const newFileNames = Array.from(files).map(f => f.name);
      const existing = formState[field as keyof typeof formState] as string;
      const existingArr = existing ? existing.split(",").filter(Boolean) : [];
      handleChange(field, [...existingArr, ...newFileNames].join(","));

      e.target.value = '';
    }
  };

  const removeFile = (field: string, indexToRemove: number) => {
    const existing = formState[field as keyof typeof formState] as string;
    const files = existing.split(",").filter(Boolean);
    files.splice(indexToRemove, 1);
    handleChange(field, files.join(","));
  };

  return (
    <div className="p-6 bg-white rounded-b-xl shadow-sm">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 mb-8">

        {/* Company Reg No */}
        <div>
          <label className="block text-base font-medium text-black  mb-2 uppercase tracking-wide">Company Registration No</label>
          <input
            type="text"
            placeholder="Company Registration No"
            value={formState.companyRegNo}
            onChange={(e) => handleChange("companyRegNo", e.target.value)}
            className="w-full px-4 py-3 bg-[#F2F2F2] border-transparent rounded-md text-base font-medium text-black  outline-none focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all"
          />
        </div>

        {/* Tax ID */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">Tax ID</label>
          <input
            type="text"
            placeholder="Tax Id"
            value={formState.taxId}
            onChange={(e) => handleChange("taxId", e.target.value)}
            className="w-full px-4 py-3 bg-[#F2F2F2] border-transparent rounded-md text-base font-medium text-black  outline-none focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all"
          />
        </div>

        {/* Upload 1 */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <div className="flex-1 border border-dashed border-gray-300 bg-[#F8F9FA] rounded-md h-16 flex items-center justify-center text-sm text-gray-500 gap-2">
              <Upload className="h-4 w-4" />
              <span>Click or drag files to upload</span>
              <input
                type="file"
                className="hidden"
                ref={fileInput1}
                onChange={(e) => handleFileUpload("kycDoc1Name", e)}
                multiple
              />
            </div>
            <Button
              variant="outline"
              onClick={() => fileInput1.current?.click()}
              className="font-semibold text-primary border-primary h-16 px-8 shrink-0"
            >
              Upload Document
            </Button>
          </div>

          {formState.kycDoc1Name && (
            <div className="flex flex-wrap gap-2">
              {formState.kycDoc1Name.split(",").filter(Boolean).map((fileName, idx) => (
                <div key={idx} className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-md text-sm text-gray-700">
                  <span className="truncate max-w-[200px]">{fileName}</span>
                  <button
                    onClick={() => removeFile("kycDoc1Name", idx)}
                    className="text-gray-500 hover:text-red-500 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Upload 2 */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <div className="flex-1 border border-dashed border-gray-300 bg-[#F8F9FA] rounded-md h-16 flex items-center justify-center text-sm text-gray-500 gap-2">
              <Upload className="h-4 w-4" />
              <span>Click or drag files to upload</span>
              <input
                type="file"
                className="hidden"
                ref={fileInput2}
                onChange={(e) => handleFileUpload("kycDoc2Name", e)}
                multiple
              />
            </div>
            <Button
              variant="outline"
              onClick={() => fileInput2.current?.click()}
              className="font-semibold text-primary border-primary h-16 px-8 shrink-0"
            >
              Upload Document
            </Button>
          </div>

          {formState.kycDoc2Name && (
            <div className="flex flex-wrap gap-2">
              {formState.kycDoc2Name.split(",").filter(Boolean).map((fileName, idx) => (
                <div key={idx} className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-md text-sm text-gray-700">
                  <span className="truncate max-w-[200px]">{fileName}</span>
                  <button
                    onClick={() => removeFile("kycDoc2Name", idx)}
                    className="text-gray-500 hover:text-red-500 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

      {/* Complete KYC Checkbox */}
      <label className="flex items-center gap-3 cursor-pointer mt-8">
        <input
          type="checkbox"
          checked={formState.completeKyc}
          onChange={(e) => handleChange("completeKyc", e.target.checked)}
          className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
        />
        <span className="text-base font-medium text-black">Complete KYC</span>
      </label>

    </div>
  );
}
