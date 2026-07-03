"use client";

import { Button } from "../../ui/Button";
import { useRouter } from "next/navigation";
import SalesKPIs from "./SalesKPIs";

export default function SalesHeader() {
  const router = useRouter();
  return (
    <div className="bg-white rounded-xl p-4  border border-gray-100 mb-6 flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-xl font-semibold text-black mb-1">Sales management</h1>
          <p className="text-base font-medium text-black/50">Manage and track your import & export Quotes.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="outline" className="font-semibold cursor-pointer">
            Manage Terms & Conditions
          </Button>
          <Button variant="outline" className="font-semibold cursor-pointer">
            Configure Quote Fields
          </Button>
          <Button variant="gradient" className="font-semibold cursor-pointer" onClick={() => router.push('/dashboard/sales/create')}>
            Create Quote
          </Button>
        </div>
      </div>
      <SalesKPIs />
    </div>
  );
}
