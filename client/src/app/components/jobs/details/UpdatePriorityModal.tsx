import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@/app/ui/Button";
import { updateJobPriority } from "@/app/redux/features/jobs/jobsSlice";

interface UpdatePriorityModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobId: string;
  currentPriority: 'Critical' | 'High' | 'Medium' | 'Low';
}

export default function UpdatePriorityModal({ isOpen, onClose, jobId, currentPriority }: UpdatePriorityModalProps) {
  // We initialize the local state to the current job priority, fallback to Medium if undefined
  const [selectedPriority, setSelectedPriority] = useState<'Critical' | 'High' | 'Medium' | 'Low'>(currentPriority || 'Medium');
  const dispatch = useDispatch();

  if (!isOpen) return null;

  const handleUpdate = () => {
    dispatch(updateJobPriority({ id: jobId, priority: selectedPriority }));
    onClose();
  };

  const priorities: ('Low' | 'Medium' | 'High')[] = ['Low', 'Medium', 'High'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 "
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl w-full max-w-sm flex flex-col shadow-2xl p-8">
        <h2 className="text-[22px] font-bold text-gray-900 mb-6">Update Priority</h2>

        <div className="space-y-4 mb-8">
          {priorities.map((priority) => (
            <label key={priority} className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="priority"
                value={priority}
                checked={selectedPriority === priority}
                onChange={() => setSelectedPriority(priority)}
                className="w-4 h-4 text-[#075FB7] border-gray-300 focus:ring-[#075FB7] cursor-pointer"
              />
              <span className="text-[15px] font-medium text-gray-900">{priority}</span>
            </label>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between gap-4 mt-2">
          <Button variant="outline" onClick={onClose} className="flex-1 h-11 rounded-xl cursor-pointer text-sm font-medium border-2 border-[#075FB7] text-[#075FB7]">
            Cancel
          </Button>
          <Button variant="gradient" onClick={handleUpdate} className="flex-1 h-11 cursor-pointer rounded-xl text-sm font-medium  hover:bg-[#075FB7]/90 text-white">
            Update
          </Button>
        </div>
      </div>
    </div>
  );
}
