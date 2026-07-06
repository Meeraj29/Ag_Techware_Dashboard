import React from 'react';
import { MasterAuditLedger } from "../../components/creditcontrol/MasterAuditLedger";
import { LedgerTable } from "../../components/creditcontrol/LedgerTable";
import { TopDefaulters } from "../../components/creditcontrol/TopDefaulters";
import { RecentActivity } from "../../components/creditcontrol/RecentActivity";

export default function CreditControlPage() {
  return (
    <div className="p-2 lg:p-4 bg-gray-50/50 min-h-full">
      <MasterAuditLedger />
      <LedgerTable />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-6 items-stretch">
        <TopDefaulters />
        <RecentActivity />
      </div>
    </div>
  );
}
