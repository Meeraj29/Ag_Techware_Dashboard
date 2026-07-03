"use client";

import { Upload, X, FileText } from "lucide-react";
import { useState, useRef } from "react";

export default function UploadDocuments() {
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles((prev) => [...prev, ...Array.from(e.target.files!)]);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const removeFile = (indexToRemove: number) => {
    setFiles((prev) => prev.filter((_, idx) => idx !== indexToRemove));
  };

  return (
    <div className="w-full mb-12">
      <h2 className="text-xl font-medium text-gray-900 mb-4">
        Upload Documents <span className="text-gray-500 font-medium text-lg">(Optional)</span>
      </h2>

      <div
        onClick={() => fileInputRef.current?.click()}
        className="w-full h-40 border border-dashed border-gray-400 bg-[#F5F5F5] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-[#F0F0F0] transition-colors"
      >
        <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mb-3">
          <Upload className="h-6 w-6 text-gray-700" />
        </div>
        <p className="text-xs font-medium text-gray-500">PDF or DOC files only, up to 5MB</p>
      </div>

      <input
        type="file"
        multiple
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept=".pdf,.doc,.docx"
      />

      {files.length > 0 && (
        <div className="mt-4 flex flex-col gap-2">
          {files.map((file, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-[#F9F9F9] border border-gray-200 rounded-md">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-[#075FB7]" />
                <span className="text-sm font-medium text-gray-700 truncate max-w-md">{file.name}</span>
                <span className="text-xs text-gray-500">
                  ({(file.size / 1024 / 1024).toFixed(2)} MB)
                </span>
              </div>
              <button
                onClick={() => removeFile(idx)}
                className="text-gray-400 hover:text-red-500 hover:bg-red-50 p-1 rounded-md transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
