export interface Vendor {
	_id: string;
	companyName: string;
	shortName?: string;
	emailAddress?: string;
	currency: string;
	companyType: string;
	status: "Active" | "In Active" | "Quoted" | "DNU" | "Lead";
	createdAt: string;
	updatedAt: string;
}
