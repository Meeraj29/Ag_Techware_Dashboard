"use client";

import { useState } from "react";
import CreateVendorHeader from "@/app/components/vendors/create/CreateVendorHeader";
import CreateVendorTabs from "@/app/components/vendors/create/CreateVendorTabs";
import OverviewTab from "@/app/components/vendors/create/tabs/OverviewTab";
import AddressTab from "@/app/components/vendors/create/tabs/AddressTab";
import ContactsTab from "@/app/components/vendors/create/tabs/ContactsTab";
import KYCDocumentsTab from "@/app/components/vendors/create/tabs/KYCDocumentsTab";
import SalesRepresentativeTab from "@/app/components/vendors/create/tabs/SalesRepresentativeTab";
import CreditControlDetailsTab from "@/app/components/vendors/create/tabs/CreditControlDetailsTab";

export const TAB_ORDER = [
  "Overview",
  "Address",
  "Contacts",
  "KYC & Documents",
  "Sales Representative",
  "Credit Control Details"
];

export default function CreateVendorPage() {
  const [activeTab, setActiveTab] = useState(TAB_ORDER[0]);

  return (
    <div className="p-4 bg-gray-50 min-h-full ">
      <CreateVendorHeader activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex flex-col">
        <CreateVendorTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === "Overview" && <OverviewTab />}
        {activeTab === "Address" && <AddressTab />}
        {activeTab === "Contacts" && <ContactsTab />}
        {activeTab === "KYC & Documents" && <KYCDocumentsTab />}
        {activeTab === "Sales Representative" && <SalesRepresentativeTab />}
        {activeTab === "Credit Control Details" && <CreditControlDetailsTab />}
      </div>
    </div>
  );
}
