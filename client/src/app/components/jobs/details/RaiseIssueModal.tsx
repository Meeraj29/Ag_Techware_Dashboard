import { useState } from "react";
import { Button } from "@/app/ui/Button";
import { Upload } from "lucide-react";

interface RaiseIssueModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobId: string;
}

export default function RaiseIssueModal({ isOpen, onClose, jobId }: RaiseIssueModalProps) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    // Logic to submit the issue
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl w-full max-w-3xl flex flex-col shadow-2xl p-8">
        <h2 className="text-xl font-semibold text-center text-gray-900 mb-8">Raise issue</h2>

        <div className="mb-6">
          <label className="block text-sm  font-medium text-gray-900 mb-2">
            Category <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-[#F3F4F6] text-gray-600 rounded-lg px-4 py-3 text-[14px] appearance-none focus:outline-none focus:ring-1 focus:ring-[#075FB7] focus:border-[#075FB7]"
            >
              <option value="" disabled>Choose Category</option>
              <option value="Customs Delay">Customs Delay</option>
              <option value="Damaged Cargo">Damaged Cargo</option>
              <option value="Missing Documents">Missing Documents</option>
              <option value="Port Congestion">Port Congestion</option>
              <option value="Other">Other</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Tell more about the issue...."
            className="w-full bg-[#F3F4F6] text-gray-600 rounded-lg px-4 py-3 text-[14px] min-h-[120px] resize-none focus:outline-none focus:ring-1 focus:ring-[#075FB7] focus:border-[#075FB7]"
          ></textarea>
        </div>

        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Upload Files <span className="text-gray-500 font-normal">(Optional)</span>
          </label>
          <div className="border border-dashed border-gray-400 rounded-xl bg-[#F9FAFB] py-12 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 bg-gray-200 rounded-xl flex items-center justify-center mb-3">
              <Upload className="w-5 h-5 text-gray-700" />
            </div>
            <p className="text-xs text-gray-400 font-medium tracking-wide">PDF or DOC files only, up to 5MB</p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-4">
          <Button variant="outline" onClick={onClose} className="px-10 h-11 rounded-xl cursor-pointer text-sm font-medium border-2 border-[#075FB7] text-[#075FB7]">
            Cancel
          </Button>
          <Button variant="gradient" onClick={handleSubmit} className="px-10 h-11 cursor-pointer rounded-xl text-sm font-medium hover:bg-[#075FB7]/90 text-white">
            Submit Issue
          </Button>
        </div>
      </div>
    </div>
  );
}
