import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VGMState } from "../../types/vgm";

const initialState: VGMState = {
	shipments: [
		{ id: "TLLU4829103", iso: "40' Dry HC", cargo: "21,450", tare: "3,800" },
		{ id: "MSCU9912285", iso: "20' Std", cargo: "19,800", tare: "2,300" },
		{ id: "CMAU5510293", iso: "45' HC", cargo: "24,100", tare: "4,950" },
		{ id: "TGBU1188220", iso: "20' Std", cargo: "14,200", tare: "2,250" },
		{ id: "HLCU6677881", iso: "40' Reefer", cargo: "18,900", tare: "4,600" },
		{ id: "MSCU9912285", iso: "20' Std", cargo: "19,800", tare: "2,300" },
		{ id: "TLLU4829103", iso: "40' Dry HC", cargo: "21,450", tare: "3,800" },
		{ id: "MSCU9912285", iso: "20' Std", cargo: "19,800", tare: "2,300" },
		{ id: "CMAU5510293", iso: "45' HC", cargo: "24,100", tare: "4,950" },
	],
	stats: {
		totalContainers: 1248,
		calculatedToday: 84,
		exportedRecords: 912,
	},
	calculator: {
		containerNo: "MSCU1234567",
		isoType: "40HC - High Cube",
		cargoWeight: "22500",
		tareWeight: "3750",
		dunnage: "120",
		finalVGM: 26370,
		finalVGMTons: 26.37,
	},
};

const vgmSlice = createSlice({
	name: "vgm",
	initialState,
	reducers: {
		setCalculatorField: (
			state,
			action: PayloadAction<{
				field: keyof VGMState["calculator"];
				value: string | number;
			}>,
		) => {
			const { field, value } = action.payload;
			(state.calculator as any)[field] = value;
		},
		calculateVGM: (state) => {
			const cargo = parseFloat(state.calculator.cargoWeight) || 0;
			const tare = parseFloat(state.calculator.tareWeight) || 0;
			const dunnage = parseFloat(state.calculator.dunnage) || 0;
			const final = cargo + tare + dunnage;
			state.calculator.finalVGM = final;
			state.calculator.finalVGMTons = Number((final / 1000).toFixed(2));
		},
	},
});

export const { setCalculatorField, calculateVGM } = vgmSlice.actions;
export default vgmSlice.reducer;
