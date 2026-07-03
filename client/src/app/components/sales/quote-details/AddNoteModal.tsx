import { useState } from "react";
import { Button } from "../../../ui/Button";
import { ChevronDown } from "lucide-react";

interface AddNoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export default function AddNoteModal({ isOpen, onClose, title }: AddNoteModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-3xl overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="p-8">
          <h2 className="text-2xl font-medium text-black text-center mb-8">Add Notes</h2>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Add Note
              </label>
              <textarea
                className="w-full bg-[#F9F9F9] h-32 p-4 border border-dashed border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none placeholder:text-gray-400"
                placeholder="Add internal note..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Assign Member
              </label>
              <div className="relative">
                <select defaultValue="" className="w-full p-4 bg-[#F9F9F9] border border-dashed border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-gray-700 appearance-none cursor-pointer">
                  <option value="" disabled className="text-gray-400">Tag Member</option>
                  <option value="john">John Smith</option>
                  <option value="jane">Jane Doe</option>
                  <option value="sales">Sales Team</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-8">
            <Button variant="outline" className="px-8 font-semibold cursor-pointer" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="gradient" className="px-8 font-semibold bg-[#054890] text-white cursor-pointer">
              Add Note
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
