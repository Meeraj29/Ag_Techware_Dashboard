export interface StatCardData {
	title: string;
	value: string;
	change: string;
	changeType: "increase" | "decrease" | "neutral";
	icon: string;
}

export interface ReportsStats {
	totalShipment: StatCardData;
	clearances: StatCardData;
	pending: StatCardData;
	delayed: StatCardData;
	revenue: StatCardData;
	activeAlerts: StatCardData;
}

export interface TrendData {
	day: string;
	thisMonth: number;
	lastMonth: number;
}

export interface ClearanceData {
	name: string;
	value: number;
	color: string;
}

export interface RevVsCostData {
	netRevenue: number;
	operationCost: number;
	efficiencyNote: string;
}

export interface MonthlyVolumeData {
	month: string;
	volume: number;
}

export interface ShipmentData {
	id: string;
	customer: string;
	route: string;
	subRoute: string;
	type: "Export" | "Import";
	status: "IN Transit" | "Processing" | "Alert";
	date: string;
}

export interface IntelligenceInsight {
	id: string;
	title: string;
	description: string;
}

export interface TimelineActivity {
	id: string;
	type: "success" | "info" | "warning";
	title: string;
	description: string;
}

export interface ReportsState {
	stats: ReportsStats | null;
	trends: TrendData[];
	clearanceStatus: ClearanceData[];
	revVsCost: RevVsCostData;
	monthlyVolume: MonthlyVolumeData[];
	allShipments: ShipmentData[];
	intelligenceInsights: IntelligenceInsight[];
	activityTimeline: TimelineActivity[];
}
