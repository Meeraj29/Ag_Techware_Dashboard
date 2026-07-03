import { ArrowLeft } from "lucide-react";
import { Button } from "@/app/ui/Button";
import { useRouter } from "next/navigation";

interface CreateJobHeaderProps {
  onSaveDraft: () => void;
  onCancel: () => void;
  onSaveDetails: () => void;
}

export default function CreateJobHeader({ onSaveDraft, onCancel, onSaveDetails }: CreateJobHeaderProps) {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between mb-6 bg-white h-20 w-full p-2 rounded-lg">
      <div className="flex items-center gap-3">
        <button
          onClick={() => router.back()}
          className="w-10 h-10 flex items-center justify-center rounded-md bg-[#E5E7EB] hover:bg-gray-300 transition-colors shrink-0"
        >
          <ArrowLeft className="h-5 w-5 text-gray-700" />
        </button>
        <h1 className="text-xl font-bold text-gray-900">Create Job</h1>
      </div>

      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          onClick={onSaveDraft}
          className="px-6 py-2 h-auto text-[#075FB7] border-[#075FB7] font-semibold rounded-lg hover:bg-blue-50 cursor-pointer"
        >
          Save Draft
        </Button>
        <Button
          variant="outline"
          onClick={onCancel}
          className="px-6 py-2 h-auto text-[#075FB7] border-[#075FB7] font-semibold rounded-lg hover:bg-blue-50 cursor-pointer"
        >
          Cancel
        </Button>
        <Button
          variant="default"
          onClick={onSaveDetails}
          className="px-6 py-2 h-auto bg-[#075FB7] hover:bg-[#075FB7]/90 text-white font-semibold rounded-lg cursor-pointer"
        >
          Save details
        </Button>
      </div>
    </div>
  );
}
