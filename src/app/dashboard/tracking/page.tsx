"use client";

import TrackingOverview from "../../components/tracking/TrackingOverview";
import TrackingToolbar from "../../components/tracking/TrackingToolbar";
import TrackingTable from "../../components/tracking/TrackingTable";
import TrackingMapNotifications from "../../components/tracking/TrackingMapNotifications";

export default function TrackingPage() {
	return (
		<div className="w-full space-y-6 p-4 bg-[#F4F4F4]">
			{/* Top Section */}
			<div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-4">
				<div className="mb-4">
					<h1 className="text-[20px] sm:text-[20px] font-semibold text-[#000000]">
						Tracking
					</h1>
					<p className="text-[16px] text-[#000000B2] font-regular">
						Track shipment status in real time from pickup to delivery with
						clear updates.
					</p>
				</div>
				<TrackingOverview />
			</div>

			{/* Table Section */}
			<div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-4">
				<TrackingToolbar />
				<TrackingTable />
			</div>

			<TrackingMapNotifications />
		</div>
	);
}
