import { createSlice } from "@reduxjs/toolkit";

export interface Shipment {
	id: string;
	customer: string;
	type: "Import" | "Export";
	status: "In Clearance" | "En Route" | "Delayed" | "Ready For Transport";
	origin: string;
}

export interface Alert {
	id: string;
	type: "Shipment Delayed" | "Missing Documentation" | "System Advisory";
	title: string;
	description: string;
	actionText?: string;
	time?: string;
	isNew?: boolean;
}

export interface Activity {
	id: string;
	type: "Payment Processed" | "Shipment Outbound" | "Customs Alert";
	title: string;
	description: string;
	time: string;
}

interface DashboardState {
	metrics: {
		activeShipments: { value: number; change: string; isPositive: boolean };
		delayed: { value: number; change: string; isPositive: boolean };
		jobsInProgress: { value: number; change: string; isPositive: boolean };
		pendingQuotes: { value: number; change: string; isPositive: boolean };
		revenue: { value: string; change: string; isPositive: boolean };
		pendingPayments: { value: string; change: string; isPositive: boolean };
	};
	pipeline: {
		quotes: number;
		jobs: number;
		clearance: number;
		transit: number;
		delivered: number;
		onTimePercentage: number;
		criticalPercentage: number;
	};
	activeShipments: Shipment[];
	clearanceStatus: {
		cleared48h: number;
		heldFlagged: number;
	};
	fleetUtilization: {
		ocean: number;
		ground: number;
		overall: number;
	};
	alerts: Alert[];
	activities: Activity[];
}

const initialState: DashboardState = {
	metrics: {
		activeShipments: { value: 1284, change: "+4.2%", isPositive: true },
		delayed: { value: 12, change: "-1.5%", isPositive: false },
		jobsInProgress: { value: 452, change: "Stable", isPositive: true },
		pendingQuotes: { value: 89, change: "+12%", isPositive: true },
		revenue: { value: "₹4.2M", change: "+12%", isPositive: true },
		pendingPayments: { value: "₹3.2M", change: "-2.1%", isPositive: false },
	},
	pipeline: {
		quotes: 42,
		jobs: 31,
		clearance: 18,
		transit: 22,
		delivered: 11,
		onTimePercentage: 84,
		criticalPercentage: 12,
	},
	activeShipments: [
		{
			id: "#JOB-8842",
			customer: "Global Nexus Corp.",
			type: "Export",
			status: "In Clearance",
			origin: "India - Los Angeles USA",
		},
		{
			id: "#JOB-8841",
			customer: "TechNova Industries",
			type: "Import",
			status: "En Route",
			origin: "India - Singapore, SG",
		},
		{
			id: "#JOB-8843",
			customer: "Global Nexus Corp.",
			type: "Export",
			status: "Delayed",
			origin: "India - Los Angeles USA",
		},
		{
			id: "#JOB-8844",
			customer: "TechNova Industries",
			type: "Import",
			status: "Ready For Transport",
			origin: "India - Singapore, SG",
		},
		{
			id: "#JOB-8845",
			customer: "Global Nexus Corp.",
			type: "Export",
			status: "In Clearance",
			origin: "India - Los Angeles USA",
		},
		{
			id: "#JOB-8846",
			customer: "TechNova Industries",
			type: "Import",
			status: "En Route",
			origin: "India - Singapore, SG",
		},
	],
	clearanceStatus: {
		cleared48h: 142,
		heldFlagged: 18,
	},
	fleetUtilization: {
		ocean: 92,
		ground: 64,
		overall: 78,
	},
	alerts: [
		{
			id: "1",
			type: "Shipment Delayed",
			title: "Port of Savannah Strike",
			description:
				"4 shipments stuck at terminal. Rerouting required for next 48h cycle.",
			actionText: "Re - Route Now",
		},
		{
			id: "2",
			type: "Missing Documentation",
			title: "Customs Form 3421-B",
			description:
				"#SHP-7742-L held at NYC border. Importer profile incomplete.",
			actionText: "Resolve",
		},
		{
			id: "3",
			type: "System Advisory",
			title: "Carrier API Maintenance",
			description:
				"Maersk tracking may experience 15min latency between 02:00-04:00 UTC.",
		},
		{
			id: "4",
			type: "Shipment Delayed",
			title: "Port of Savannah Strike",
			description:
				"4 shipments stuck at terminal. Rerouting required for next 48h cycle.",
			actionText: "Re - Route Now",
		},
	],
	activities: [
		{
			id: "1",
			type: "Payment Processed",
			title: "Payment Processed",
			description: "Invoice #INV-2094 approved for $42,500 by Finance Manager.",
			time: "12m ago",
		},
		{
			id: "2",
			type: "Shipment Outbound",
			title: "Shipment Outbound",
			description: "Batch #SHP-4922 left Singapore Port on 'Pacific Voyager'.",
			time: "1h ago",
		},
		{
			id: "3",
			type: "Customs Alert",
			title: "Customs Alert",
			description:
				"Additional documentation requested for #SHP-48992 in Tokyo.",
			time: "1h ago",
		},
		{
			id: "4",
			type: "Payment Processed",
			title: "Payment Processed",
			description: "Invoice #INV-2094 approved for $42,500 by Finance Manager.",
			time: "12m ago",
		},
		{
			id: "5",
			type: "Shipment Outbound",
			title: "Shipment Outbound",
			description: "Batch #SHP-4922 left Singapore Port on 'Pacific Voyager'.",
			time: "1h ago",
		},
		{
			id: "6",
			type: "Customs Alert",
			title: "Customs Alert",
			description:
				"Additional documentation requested for #SHP-48992 in Tokyo.",
			time: "1h ago",
		},
	],
};

export const dashboardSlice = createSlice({
	name: "dashboard",
	initialState,
	reducers: {},
});

export default dashboardSlice.reducer;
