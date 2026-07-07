export interface ProductDetail {
	id: string;
	chargeItem: string;
	basis: string;
	qty: number;
	gst: number;
	currency: string;
	sellRate: number;
	sellTotal: number;
	exRate: number;
	taxableInr: number;
}

export interface Note {
	id: string;
	text: string;
	addedBy: string;
	timeAgo: string;
}

export interface ContactDetails {
	name: string;
	initials: string;
	company: string;
	email: string;
	phone: string;
	address: string;
}

export interface CreatedBy {
	name: string;
	initials: string;
	date: string;
}

export interface SalesQuotation {
	id: string;
	quotationNumber: string;
	tradeType: string;
	validFrom: string;
	validTo: string;
	shipper: string;
	branch: string;
	carrier: string;
	vesselName: string;
	voyageNo: string;
	placeOfCarrierReceipt: string;
	portOfLoading: string;
	estimatedTimeOfDeparture: string;
	portOfDestination: string;
	estimatedTimeOfArrival: string;
	placeOfCarrierDelivery: string;
	destinationPortFreeDays: string;
	originCarrierFreeDays: string;
	destinationCarrierFreeDays: string;
	localCurrency: string;
	mode: "Air" | "Ocean";
	cargoType: string;
	numberOfPackages: number;
	grossWeight: number;
	volume: number;
	containerType: string;
	dangerousGoods: boolean;
	temperatureControlled: boolean;
	productDetails: ProductDetail[];
	status: "Draft" | "Pending" | "Approved" | "Rejected";
	loadType?: string;
	contactDetails?: ContactDetails;
	createdBy?: CreatedBy;
	customerNotes?: Note[];
	internalNotes?: Note[];
}
