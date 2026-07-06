"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { StatsCards } from "../../components/customers/StatsCards";
import { CustomersTable } from "../../components/customers/CustomersTable";
import { ActivityTimeline } from "../../components/customers/ActivityTimeline";

export default function CustomersPage() {
	const router = useRouter();

	return (
		<div className="p-2 lg:p-4 bg-gray-50/50 min-h-full">
			{/* Header */}
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
				<div>
					<h1 className="text-2xl font-bold text-gray-800">Customers</h1>
					<p className="text-sm text-gray-500 mt-1">
						Manage customer profiles, KYC details, and shipment history in one
						place.
					</p>
				</div>
				<button
					onClick={() => router.push("/dashboard/customers/create")}
					className="bg-[linear-gradient(90deg,#0863BD_0%,#04458B_100%)] text-white px-5 py-2.5 rounded-[10px] font-bold hover:opacity-95 transition shadow-sm whitespace-nowrap"
				>
					Create Profile
				</button>
			</div>

			{/* Stats Cards */}
			<StatsCards />

			{/* Customers Table */}
			<CustomersTable />

			{/* Activity Timeline */}
			<ActivityTimeline />
		</div>
	);
}
