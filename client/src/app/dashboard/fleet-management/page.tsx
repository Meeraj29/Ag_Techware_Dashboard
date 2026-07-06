"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import FleetHeader from "../../components/fleet/FleetHeader";
import FleetTabs from "../../components/fleet/FleetTabs";
import FleetStats from "../../components/fleet/FleetStats";
import FleetToolbar from "../../components/fleet/FleetToolbar";
import FleetTable from "../../components/fleet/FleetTable";

// Trip Management sub-components
import TripStats from "../../components/fleet/TripStats";
import TripToolbar from "../../components/fleet/TripToolbar";
import TripTable from "../../components/fleet/TripTable";

// Purchase Orders sub-components
import PurchaseStats from "../../components/fleet/PurchaseStats";
import PurchaseToolbar from "../../components/fleet/PurchaseToolbar";
import PurchaseTable from "../../components/fleet/PurchaseTable";

// Fastag & Expenses sub-components
import FastagStats from "../../components/fleet/FastagStats";
import FastagToolbar from "../../components/fleet/FastagToolbar";
import FastagTable from "../../components/fleet/FastagTable";
import FastagDashboardWidgets from "../../components/fleet/FastagDashboardWidgets";

// Maintenance sub-components
import MaintenanceStats from "../../components/fleet/MaintenanceStats";
import MaintenanceToolbar from "../../components/fleet/MaintenanceToolbar";
import MaintenanceTable from "../../components/fleet/MaintenanceTable";
import UpcomingRenewals from "../../components/fleet/UpcomingRenewals";

// Tire Management sub-components
import TireStats from "../../components/fleet/TireStats";
import TireToolbar from "../../components/fleet/TireToolbar";
import TireTable from "../../components/fleet/TireTable";
import RotationHistory from "../../components/fleet/RotationHistory";

// Document & Compliance sub-components
import ComplianceStats from "../../components/fleet/ComplianceStats";
import ComplianceToolbar from "../../components/fleet/ComplianceToolbar";
import ComplianceTable from "../../components/fleet/ComplianceTable";

// Drivers sub-components
import DriverStats from "../../components/fleet/DriverStats";
import DriverToolbar from "../../components/fleet/DriverToolbar";
import DriverTable from "../../components/fleet/DriverTable";
import DriverComplianceWidgets from "../../components/fleet/DriverComplianceWidgets";

export default function FleetManagementPage() {
	const activeTab = useSelector((state: RootState) => state.fleet.activeTab);

	return (
		<div className="p-3 sm:p-6 bg-[#f8f9fa] min-h-screen space-y-4 sm:space-y-6">
			<div className="mx-auto max-w-[1560px] space-y-4 sm:space-y-6">
				{/* Container 1: Header, Tabs, and Per-tab Stats */}
				<div className="rounded-2xl sm:rounded-[24px] border border-gray-100 bg-white p-4 sm:p-6 shadow-sm">
					<FleetHeader variant="main" />
					<FleetTabs />

					{/* Sub Header (Title/Desc depends on tab) */}
					<div className="mt-6">
						<h2 className="text-base font-bold text-gray-900">
							{activeTab === "Vehicles"
								? "Vehicle Management"
								: activeTab === "Trip Management"
									? "Trip Management"
									: activeTab === "Purchase Orders"
										? "Purchase Orders"
										: activeTab === "Maintenance"
											? "Fleet Maintenance"
											: activeTab === "Tire Management"
												? "Tire Management"
												: activeTab === "Document & Compliance"
													? "Documents & Compliance"
													: activeTab === "Drivers"
														? "Driver Directory"
														: activeTab}
						</h2>
						<p className="mt-1 text-xs text-gray-400">
							{activeTab === "Vehicles"
								? "Track, monitor, and maintain all vehicles efficiently."
								: activeTab === "Trip Management"
									? "Real-time Oversight of Ongoing and upcoming logistics Operations."
									: activeTab === "Purchase Orders"
										? "Create, track, and manage purchase requests efficiently."
										: activeTab === "Maintenance"
											? "Schedule routine services and monitor asset health across the entire operational grid."
											: activeTab === "Tire Management"
												? "Real-time Oversight of Ongoing and upcoming logistics Operations."
												: activeTab === "Document & Compliance"
													? "Manage and track fleet-wide regulatory compliance documentation."
													: activeTab === "Drivers"
														? "Manage and monitor fleet operator assignments and compliance."
														: "Manage your fleet operations effectively."}
						</p>
					</div>

					{activeTab === "Vehicles" && <FleetStats />}
					{activeTab === "Trip Management" && <TripStats />}
					{activeTab === "Purchase Orders" && <PurchaseStats />}
					{activeTab === "Maintenance" && <MaintenanceStats />}
					{activeTab === "Tire Management" && <TireStats />}
					{activeTab === "Document & Compliance" && <ComplianceStats />}
					{activeTab === "Drivers" && <DriverStats />}
					{/* Fastag: alert banner + 3 metric cards live here in Container 1 */}
					{activeTab === "Fastag & Expenses" && <FastagStats />}
				</div>

				{/* Container 2: Toolbar + Table (Vehicles / Trip / Purchase / Maintenance / Tire Management / Document & Compliance / Drivers) */}
				{(activeTab === "Vehicles" ||
					activeTab === "Trip Management" ||
					activeTab === "Purchase Orders" ||
					activeTab === "Maintenance" ||
					activeTab === "Tire Management" ||
					activeTab === "Document & Compliance" ||
					activeTab === "Drivers") && (
					<div className="rounded-2xl sm:rounded-[24px] border border-gray-100 bg-white p-4 sm:p-6 shadow-sm space-y-4">
						{activeTab === "Vehicles" && (
							<>
								<FleetToolbar />
								<FleetTable />
							</>
						)}
						{activeTab === "Trip Management" && (
							<>
								<TripToolbar />
								<TripTable />
							</>
						)}
						{activeTab === "Purchase Orders" && (
							<>
								<PurchaseToolbar />
								<PurchaseTable />
							</>
						)}
						{activeTab === "Maintenance" && (
							<>
								<MaintenanceToolbar />
								<MaintenanceTable />
							</>
						)}
						{activeTab === "Tire Management" && (
							<>
								<TireToolbar />
								<TireTable />
							</>
						)}
						{activeTab === "Document & Compliance" && (
							<>
								<ComplianceToolbar />
								<ComplianceTable />
							</>
						)}
						{activeTab === "Drivers" && (
							<>
								<DriverToolbar />
								<DriverTable />
							</>
						)}
					</div>
				)}

				{/* Maintenance: Upcoming Renewals */}
				{activeTab === "Maintenance" && <UpcomingRenewals />}

				{/* Tire Management: Rotation History */}
				{activeTab === "Tire Management" && <RotationHistory />}

				{/* Drivers: Compliance widgets */}
				{activeTab === "Drivers" && <DriverComplianceWidgets />}

				{/* Fastag & Expenses: toolbar + table + dashboard widgets */}
				{activeTab === "Fastag & Expenses" && (
					<>
						<div className="rounded-2xl sm:rounded-[24px] border border-gray-100 bg-white p-4 sm:p-6 shadow-sm space-y-4">
							<FastagToolbar />
							<FastagTable />
						</div>
						<FastagDashboardWidgets />
					</>
				)}
			</div>
		</div>
	);
}
