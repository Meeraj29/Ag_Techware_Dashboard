import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface VendorContact {
	id: string;
	name: string;
	address: string;
	phone: string;
	email: string;
}

export interface VendorFormState {
	// Overview Tab
	companyName: string;
	partyShortcode: string;
	companyCIN: string;
	partyType: string;
	currency: string;
	email: string;
	importExport: string;
	isParentCompany1: boolean;
	isParentCompany2: boolean;
	isParentCompany3: boolean;
	sez: boolean;
	isRegisteredCompany: boolean;
	billingParty: boolean;
	groupCompanies: boolean;

	// Address Tab
	branchName: string;
	isParentCompany4: boolean;
	nonResident: boolean;
	picEmailId: string;
	country: string;
	bankName: string;
	accountNo: string;
	remarks: string;
	picName: string;
	picPhoneNo: string;
	address: string;
	activeFlag: boolean;
	kycFlag: boolean;

	// Contacts Tab
	contacts: VendorContact[];

	// KYC Tab
	companyRegNo: string;
	taxId: string;
	kycDoc1Name: string;
	kycDoc2Name: string;
	completeKyc: boolean;

	// Sales Rep Tab
	repName: string;
	repCode: string;
	repLocation: string;
	repEffectiveFrom: string;
	repMobile: string;
	repEmail: string;

	// Credit Control Tab
	creditDateFrom: string;
	creditDateTo: string;
	creditPeriodDays: string;
	creditAmount: string;
	creditCurrency: string;
}

const initialState: VendorFormState = {
	companyName: "",
	partyShortcode: "",
	companyCIN: "",
	partyType: "",
	currency: "",
	email: "",
	importExport: "",
	isParentCompany1: false,
	isParentCompany2: false,
	isParentCompany3: false,
	sez: false,
	isRegisteredCompany: false,
	billingParty: true,
	groupCompanies: true,

	branchName: "",
	isParentCompany4: false,
	nonResident: true,
	picEmailId: "",
	country: "",
	bankName: "",
	accountNo: "",
	remarks: "",
	picName: "",
	picPhoneNo: "",
	address: "",
	activeFlag: true,
	kycFlag: false,

	contacts: [
		{
			id: "1",
			name: "",
			address: "",
			phone: "",
			email: "",
		},
	],

	companyRegNo: "",
	taxId: "",
	kycDoc1Name: "",
	kycDoc2Name: "",
	completeKyc: false,

	repName: "",
	repCode: "",
	repLocation: "",
	repEffectiveFrom: "",
	repMobile: "",
	repEmail: "",

	creditDateFrom: "",
	creditDateTo: "",
	creditPeriodDays: "0",
	creditAmount: "0",
	creditCurrency: "",
};

export const vendorFormSlice = createSlice({
	name: "vendorForm",
	initialState,
	reducers: {
		updateFormField: (
			state,
			action: PayloadAction<{ field: keyof VendorFormState; value: any }>,
		) => {
			// @ts-ignore
			state[action.payload.field] = action.payload.value;
		},
		addContact: (state, action: PayloadAction<VendorContact>) => {
			state.contacts.push(action.payload);
		},
		updateContact: (
			state,
			action: PayloadAction<{
				id: string;
				field: keyof VendorContact;
				value: string;
			}>,
		) => {
			const contact = state.contacts.find((c) => c.id === action.payload.id);
			if (contact) {
				// @ts-ignore
				contact[action.payload.field] = action.payload.value;
			}
		},
		removeContact: (state, action: PayloadAction<string>) => {
			state.contacts = state.contacts.filter((c) => c.id !== action.payload);
		},
		resetForm: () => initialState,
	},
});

export const {
	updateFormField,
	addContact,
	updateContact,
	removeContact,
	resetForm,
} = vendorFormSlice.actions;

export default vendorFormSlice.reducer;
