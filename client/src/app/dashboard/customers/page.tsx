'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { StatsCards } from '../../components/customers/StatsCards';
import { CustomersTable } from '../../components/customers/CustomersTable';
import { ActivityTimeline } from '../../components/customers/ActivityTimeline';

export default function CustomersPage() {
  const router = useRouter();

  return (
    <div className="p-2 lg:p-4 bg-gray-50/50 min-h-full">
      {/* Header */}
    {/* Header */}
<div className="bg-white rounded-[20px] border border-gray-200 p-4 sm:p-5 lg:p-6 mb-6">
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
    <div>
      <h1 className="text[20px] font-semibold text-black">
        Customers
      </h1>

      <p className="text-[16px] text-black/70 mt-1">
        Manage customer profiles, KYC details, and shipment history in one place.
      </p>
    </div>

  <button
  onClick={() => router.push('/dashboard/customers/create')}
  className="border-2 border-primary inline-flex h-[48px] items-center justify-center bg-[linear-gradient(90deg,#0863BD_0%,#04458B_100%)] text-white text-[16px] font-bold px-8 rounded-[8px] hover:opacity-95 transition shadow-sm whitespace-nowrap"
>
  Create Profile
</button>
  </div>
   {/* Stats Cards */}
      <StatsCards />

</div>

     
      {/* Customers Table */}
      <CustomersTable />

      {/* Activity Timeline */}
      <ActivityTimeline />
    </div>
  );
}
