"use client";
import React from "react";

import { ReportsHeader } from "../../components/reports/ReportsHeader";
import { ReportsStats } from "../../components/reports/ReportsStats";
import { ShipmentTrends } from "../../components/reports/ShipmentTrends";
import { ClearanceStatus } from "../../components/reports/ClearanceStatus";
import { RevVsCost } from "../../components/reports/RevVsCost";
import { MonthlyVolume } from "../../components/reports/MonthlyVolume";
import { IntelligenceInsights } from "../../components/reports/IntelligenceInsights";
import { ActivityTimeline } from "../../components/reports/ActivityTimeline";
import { AllShipmentsTable } from "../../components/reports/AllShipmentsTable";

export default function ReportsPage() {
	return (
		<div className="p-4 lg:p-5 bg-gray-50/50 min-h-full space-y-6">
			{/* Top Section with Blue Border */}
			<div className="bg-white rounded-2xl border-2 border-white p-6 shadow-sm">
				<ReportsHeader />
				<ReportsStats />
			</div>

			{/* Charts Section */}
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				<div className="lg:col-span-2">
					<ShipmentTrends />
				</div>
				<div className="lg:col-span-1">
					<ClearanceStatus />
				</div>
			</div>

			{/* Rev vs Cost & Monthly Volume Section */}
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				<div className="lg:col-span-1">
					<RevVsCost />
				</div>
				<div className="lg:col-span-2">
					<MonthlyVolume />
				</div>
			</div>

			{/* All Shipment Table Section */}
			<div className="pb-6">
				<AllShipmentsTable />
			</div>

			{/* Insights and Timeline Section */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				<div>
					<IntelligenceInsights />
				</div>
				<div>
					<ActivityTimeline />
				</div>
			</div>
		</div>
	);
}
