"use client";

import { useState } from "react";
import { Button } from "@/app/ui/Button";
import SelectQuotationModal from "./SelectQuotationModal";

export default function JobsHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-xl font-semibold text-black mb-1">Operational Control Center</h1>
          <p className="text-base text-[#000000B2] font-normal">Real-time supply chain monitoring and fleet dispatch oversight.</p>
        </div>

        <Button
          variant="gradient"
          onClick={() => setIsModalOpen(true)}
          className="text-white hover:bg-[#075FB7]/90 px-6 font-semibold cursor-pointer"
        >
          Create Job
        </Button>
      </div>

      <SelectQuotationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
