import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Vendor } from "../../../types/vendor";

interface VendorState {
	vendors: Vendor[];
	searchQuery: string;
	activeTab: string;
}

const dummyVendors: Vendor[] = [
	{
		_id: "651a2b3c4d5e6f7a8b9c0d1e",
		companyName: "Unifeeder",
		shortName: "",
		emailAddress: "",
		currency: "USD",
		companyType: "Shipping Line",
		status: "Active",
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString(),
	},
	{
		_id: "651a2b3c4d5e6f7a8b9c0d2e",
		companyName: "Anogha Logistics",
		shortName: "agl",
		emailAddress: "",
		currency: "INR",
		companyType: "Agent",
		status: "Active",
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString(),
	},
	{
		_id: "651a2b3c4d5e6f7a8b9c0d3e",
		companyName: "Arabian can Industry L.L.C",
		shortName: "",
		emailAddress: "",
		currency: "INR",
		companyType: "Consignee",
		status: "Active",
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString(),
	},
	{
		_id: "651a2b3c4d5e6f7a8b9c0d4e",
		companyName: "Shetron",
		shortName: "SHTRN",
		emailAddress: "test@gmail.com",
		currency: "INR",
		companyType: "Shipper",
		status: "Active",
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString(),
	},
];

const initialState: VendorState = {
	vendors: dummyVendors,
	searchQuery: "",
	activeTab: "All",
};

export const vendorSlice = createSlice({
	name: "vendor",
	initialState,
	reducers: {
		setSearchQuery: (state, action: PayloadAction<string>) => {
			state.searchQuery = action.payload;
		},
		setActiveTab: (state, action: PayloadAction<string>) => {
			state.activeTab = action.payload;
		},
		toggleVendorStatus: (state, action: PayloadAction<string>) => {
			const vendor = state.vendors.find((v) => v._id === action.payload);
			if (vendor) {
				vendor.status = vendor.status === "Active" ? "In Active" : "Active";
			}
		},
	},
});

export const { setSearchQuery, setActiveTab, toggleVendorStatus } =
	vendorSlice.actions;

export default vendorSlice.reducer;
