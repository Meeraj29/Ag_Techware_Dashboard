"use client";

import { Button } from "../../ui/Button";

export default function VendorHeader() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6 gap-4">
      <div>
        <h1 className="text-xl font-bold text-gray-900 mb-1">Address Book</h1>
        <p className="text-sm text-gray-500">Manage all the Required address</p>
      </div>
      <Button variant="gradient">Add new Address</Button>
    </div>
  );
}
