"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "../../../ui/Button";
import { TAB_ORDER } from "../../../dashboard/vendors/create/page";

interface Props {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function CreateVendorHeader({ activeTab, setActiveTab }: Props) {
  const router = useRouter();

  const currentIndex = TAB_ORDER.indexOf(activeTab);
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === TAB_ORDER.length - 1;

  const handleNext = () => {
    if (!isLast) setActiveTab(TAB_ORDER[currentIndex + 1]);
  };

  const handlePrevious = () => {
    if (!isFirst) setActiveTab(TAB_ORDER[currentIndex - 1]);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
      <div className="flex items-center gap-4">
        <button
          onClick={() => router.back()}
          className="p-2 rounded-xl bg-gray-200 hover:bg-gray-300 transition-colors text-gray-700 cursor-pointer"
        >
          <ArrowLeft className="h-8 w-8" />
        </button>
        <h1 className="text-xl font-semibold text-black">Create Address</h1>
      </div>

      <div className="flex items-center gap-3">
        <Button
          variant="dangerOutline"
          onClick={() => router.back()}
          className="font-semibold cursor-pointer border-2"
        >
          Cancel
        </Button>

        {!isFirst && (
          <Button
            variant="outline"
            onClick={handlePrevious}
            className="font-semibold cursor-pointer"
          >
            Previous
          </Button>
        )}

        <Button
          variant={isLast ? "gradient" : "outline"}
          className="font-semibold cursor-pointer"
        >
          Update
        </Button>

        {!isLast && (
          <Button
            variant="gradient"
            onClick={handleNext}
            className="font-semibold cursor-pointer"
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
}
