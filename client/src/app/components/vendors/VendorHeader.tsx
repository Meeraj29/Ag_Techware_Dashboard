"use client";

import { Button } from "../../ui/Button";
import { useRouter } from "next/navigation";

export default function VendorHeader() {
  const router = useRouter();

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white rounded-xl p-6  border border-gray-100 mb-6 gap-4">
      <div>
        <h1 className="text-xl font-semibold text-black mb-1">Address Book</h1>
        <p className="text-base text-[#000000B2]">Manage all the Required address</p>
      </div>
      <Button
        className="cursor-pointer text-base font-medium  border-2 border-primary"
        variant="gradient"
        onClick={() => router.push("/dashboard/vendors/create")}
      >
        Add new Address
      </Button>
    </div>
  );
}
