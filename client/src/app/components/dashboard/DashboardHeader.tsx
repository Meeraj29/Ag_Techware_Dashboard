"use client";
import React, { useState } from "react";
import { Button } from "../../ui/Button";
import ManageMetricsModal from "./ManageMetricsModal";
import ManageDataModal from "./ManageDataModal";

export default function DashboardHeader() {
	const [showMetrics, setShowMetrics] = useState(false);
	const [showData, setShowData] = useState(false);

	return (
		<>
			<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
				<div className="w-full md:w-auto">
					<h1 className="text-lg font-semibold text-black">
						Welcome back, Super Admin
					</h1>
					<p className="text-base font-normal text-black/70 mt-1">
						Real-time oversight of global supply chain logistics.
					</p>
				</div>
				<div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
					<Button
						variant="outline"
						className="w-full sm:w-auto cursor-pointer border-gray-300 text-gray-700 hover:bg-gray-50"
						onClick={() => setShowMetrics(true)}
					>
						Manage Metrics
					</Button>
					<Button
						variant="gradient"
						className="w-full sm:w-auto cursor-pointer"
						onClick={() => setShowData(true)}
					>
						Manage Dashboard Data
					</Button>
				</div>
			</div>

			<ManageMetricsModal
				isOpen={showMetrics}
				onClose={() => setShowMetrics(false)}
			/>
			<ManageDataModal isOpen={showData} onClose={() => setShowData(false)} />
		</>
	);
}
