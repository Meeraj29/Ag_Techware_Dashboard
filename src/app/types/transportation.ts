export interface ShipmentJob {
	id: string;
	jobId: string;
	customer: string;
	type: "Export" | "Import";
	origin: string;
	dropOff: string;
	driverName: string;
	vehicleNo: string;

	scheduledTimeRange: string;
	scheduledSubText: string;

	pickupDateTime: string;
	pickupPort: string;
	etaDate: string;
	etaStatus: string;

	impact: "CRITICAL" | "MAJOR" | "MODERATE";
	delayReason: string;

	outForDeliveryRouteOrigin: string;
	outForDeliveryRouteDrop: string;
	outForDeliveryEta: string;

	deliveryDate: string;
	performance: "ON-TIME" | "EARLY" | "DELAYED";
	pod: string;

	status: string;

	details?: ShipmentJobDetails;
}

export interface ShipmentJobDetails {
	destination: string;
	destinationCode: string;
	originCode: string;
	freightType: string;
	containerCount: string;
	bookingRef: string;
	incoterms: string;
	shipper: string;
	consignee: string;
	vendorName: string;
	vendorPhone: string;
	coordinator: string;
	routePlanOrigin: string;
	routePlanDestination: string;
	containers: ContainerDetail[];
	internalNotes: InternalNote[];
	activityLogs: ActivityLogItem[];
	documents: DocumentItem[];
	expenses: ExpenseItemData[];
	insurancePolicyNumber: string;
	insuranceCoverage: string;
	insuranceExpiry: string;
	totalExpenses: string;
}

export interface ContainerDetail {
	type: string;
	quantity: number;
	grossWeight: string;
	volume: string;
	hsCodes: string;
}

export interface InternalNote {
	text: string;
	author: string;
	time: string;
}

export interface ActivityLogItem {
	title: string;
	subtitle: string;
}

export interface DocumentItem {
	name: string;
	date: string;
	type: "pdf" | "pdf-success";
}

export interface ExpenseItemData {
	name: string;
	amount: string;
	status: "Confirmed" | "Pending";
}

export interface TransportationStats {
	scheduled: number;
	inTransit: number;
	delayed: number;
	completed: number;
	outForDelivery: number;
	fleetUtilization: number;
}
