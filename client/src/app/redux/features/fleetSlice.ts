import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  FleetVehicle,
  FleetStats,
  FleetTrip,
  FleetTripStats,
  PurchaseOrder,
  FastagTransaction,
  FleetPurchaseStats,
  FleetFastagStats,
  FastagExpenseStats,
  MaintenanceRecord,
  MaintenanceStats,
  RenewalItem,
  TireRecord,
  TireManagementStats,
  RotationLog,
  ComplianceRecord,
  ComplianceManagementStats,
  DriverRecord,
  DriverManagementStats,
} from "../../types/fleet";
import {
  dummyVehicles,
  dummyTrips,
  dummyPurchaseOrders,
  dummyFastagTransactions,
  initialVehicleStats,
  initialTripStats,
  initialFastagStats,
  initialPurchaseStats,
  initialFastagDashboardStats,
  dummyMaintenanceRecords,
  initialMaintenanceStats,
  dummyRenewalItems,
  initialTireStats,
  dummyTireRecords,
  dummyRotationLogs,
  initialComplianceStats,
  dummyComplianceRecords,
  initialDriverStats,
  dummyDriverRecords,
} from "./fleetDummy";

// FastagExpenseStats is defined in types/fleet.ts and re-exported for convenience
export type { FastagExpenseStats };

// ---------------------------------------------------------------------------
// State shape
// ---------------------------------------------------------------------------
interface FleetState {
  // Vehicle tab
  vehicles: FleetVehicle[];
  stats: FleetStats;

  // Trip Management tab
  trips: FleetTrip[];
  tripStats: FleetTripStats;

  // Purchase Orders tab
  purchaseOrders: PurchaseOrder[];
  purchaseStats: FleetPurchaseStats;

  // Fastag & Expenses tab
  fastagTransactions: FastagTransaction[];
  fastagStats: FastagExpenseStats;        // header card indicators
  fastagDashboardStats: FleetFastagStats; // detailed metric cards

  // Maintenance tab
  maintenanceRecords: MaintenanceRecord[];
  maintenanceStats: MaintenanceStats;
  renewalItems: RenewalItem[];

  // Tire Management tab
  tireRecords: TireRecord[];
  tireStats: TireManagementStats;
  rotationLogs: RotationLog[];

  // Document & Compliance tab
  complianceRecords: ComplianceRecord[];
  complianceStats: ComplianceManagementStats;

  // Drivers tab
  driverRecords: DriverRecord[];
  driverStats: DriverManagementStats;

  // Shared UI state
  activeTab: string;
  searchQuery: string;
  typeFilter: string;
  statusFilter: string;
  dateRange: string;
}

// ---------------------------------------------------------------------------
// Initial state — sourced entirely from fleetDummy.ts
// ---------------------------------------------------------------------------
const initialState: FleetState = {
  vehicles: dummyVehicles,
  stats: initialVehicleStats,

  trips: dummyTrips,
  tripStats: initialTripStats,

  purchaseOrders: dummyPurchaseOrders,
  purchaseStats: initialPurchaseStats,

  fastagTransactions: dummyFastagTransactions,
  fastagStats: initialFastagStats,
  fastagDashboardStats: initialFastagDashboardStats,

  maintenanceRecords: dummyMaintenanceRecords,
  maintenanceStats: initialMaintenanceStats,
  renewalItems: dummyRenewalItems,

  tireRecords: dummyTireRecords,
  tireStats: initialTireStats,
  rotationLogs: dummyRotationLogs,

  complianceRecords: dummyComplianceRecords,
  complianceStats: initialComplianceStats,

  driverRecords: dummyDriverRecords,
  driverStats: initialDriverStats,

  activeTab: "Vehicles",
  searchQuery: "",
  typeFilter: "All",
  statusFilter: "All",
  dateRange: "Last 30 Days",
};

// ---------------------------------------------------------------------------
// Slice
// ---------------------------------------------------------------------------
export const fleetSlice = createSlice({
  name: "fleet",
  initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setTypeFilter: (state, action: PayloadAction<string>) => {
      state.typeFilter = action.payload;
    },
    setStatusFilter: (state, action: PayloadAction<string>) => {
      state.statusFilter = action.payload;
    },
    setDateRange: (state, action: PayloadAction<string>) => {
      state.dateRange = action.payload;
    },
  },
});

export const {
  setActiveTab,
  setSearchQuery,
  setTypeFilter,
  setStatusFilter,
  setDateRange,
} = fleetSlice.actions;

export default fleetSlice.reducer;