import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ClearanceJob {
  id: string;
  customer: string;
  type: "Import" | "Export";
  port: string;
  stage?: string;
  status: "Under Review" | "Pending" | "Hold" | "Approved";
  alertType?: "Missing Documents" | "Valuation Query";
  slaTimer: string;
}

export type PrimaryTabType = "Pending Reviews" | "Alerts" | "All";
export type SecondaryTabType = "FFT Team Alert" | "CCT Team Alert";

interface ClearanceState {
  jobs: ClearanceJob[];
  primaryTab: PrimaryTabType;
  secondaryTab: SecondaryTabType;
}

const initialState: ClearanceState = {
  jobs: [
    {
      id: "#JB-44092",
      customer: "Global Tech Industries",
      type: "Import",
      port: "Port of Rotterdam, NL",
      stage: "Health Cert",
      status: "Under Review",
      slaTimer: "00:24:22",
    },
    {
      id: "#JB-8812-C",
      customer: "Walmart Inc",
      type: "Export",
      port: "Hamburg Container Term.",
      stage: "Health Cert",
      status: "Pending",
      slaTimer: "01:45:06",
    },
    {
      id: "#JB-7721-F",
      customer: "Tesla Giga",
      type: "Export",
      port: "Chicago Hub, IL",
      stage: "Health Cert",
      status: "Under Review",
      slaTimer: "00:24:22",
    },
    {
      id: "#JB-4450-X",
      customer: "Pfizer Global",
      type: "Import",
      port: "Hamburg Container Term.",
      stage: "Health Cert",
      status: "Pending",
      slaTimer: "01:45:06",
    },
    // Alert specific data (from second screenshot)
    {
      id: "#JB-9042-A_2",
      customer: "Amazon Logistics",
      type: "Import",
      port: "Chicago Hub, IL",
      status: "Hold",
      alertType: "Missing Documents",
      slaTimer: "Expired",
    },
    {
      id: "#JB-44092",
      customer: "Global Tech Industries",
      type: "Import",
      port: "Port of Rotterdam, NL",
      status: "Pending",
      alertType: "Valuation Query",
      slaTimer: "01:45:06",
    },
    {
      id: "#JB-8812-C",
      customer: "Walmart Inc",
      type: "Export",
      port: "Hamburg Container Term.",
      status: "Approved",
      alertType: "Missing Documents",
      slaTimer: "-------",
    },
    {
      id: "#JB-7721-F",
      customer: "Tesla Giga",
      type: "Export",
      port: "Chicago Hub, IL",
      status: "Pending",
      alertType: "Valuation Query",
      slaTimer: "01:45:06",
    },
    // All specific data (from third screenshot)
    {
      id: "#JB-4450-X",
      customer: "Pfizer Global",
      type: "Import",
      port: "Hamburg Container Term.",
      stage: "Final Release",
      status: "Approved",
      slaTimer: "Completed",
    },
    {
      id: "#JB-9042-A_2",
      customer: "Amazon Logistics",
      type: "Import",
      port: "Chicago Hub, IL",
      stage: "Gate Out",
      status: "Hold",
      slaTimer: "-04:22",
    },
    {
      id: "#JB-44092",
      customer: "Global Tech Industries",
      type: "Import",
      port: "Port of Rotterdam, NL",
      stage: "Document Scan",
      status: "Pending",
      slaTimer: "08:45",
    },
    {
      id: "#JB-8812-C",
      customer: "Walmart Inc",
      type: "Export",
      port: "Hamburg Container Term.",
      stage: "Customs Check",
      status: "Under Review",
      slaTimer: "01:15",
    },
    {
      id: "#JB-7721-F",
      customer: "Tesla Giga",
      type: "Export",
      port: "Chicago Hub, IL",
      stage: "Customs Check",
      status: "Approved",
      slaTimer: "Completed",
    },
    {
      id: "#JB-4450-X",
      customer: "Pfizer Global",
      type: "Import",
      port: "Hamburg Container Term.",
      stage: "Gate Out",
      status: "Under Review",
      slaTimer: "01:15",
    },
  ],
  primaryTab: "Pending Reviews",
  secondaryTab: "FFT Team Alert",
};

export const clearanceSlice = createSlice({
  name: "clearance",
  initialState,
  reducers: {
    setPrimaryTab: (state, action: PayloadAction<PrimaryTabType>) => {
      state.primaryTab = action.payload;
    },
    setSecondaryTab: (state, action: PayloadAction<SecondaryTabType>) => {
      state.secondaryTab = action.payload;
    },
  },
});

export const { setPrimaryTab, setSecondaryTab } = clearanceSlice.actions;
export default clearanceSlice.reducer;
