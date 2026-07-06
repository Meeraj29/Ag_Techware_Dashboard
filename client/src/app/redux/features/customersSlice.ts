import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Customer, ActivityTimelineItem, CustomerStats } from "../../types/customers";

interface CustomersState {
  customers: Customer[];
  stats: CustomerStats;
  timeline: ActivityTimelineItem[];
  searchQuery: string;
  statusFilter: string;
  typeFilter: string;
  dateFilter: string;
}

const dummyCustomers: Customer[] = [
  {
    id: "CUS-1029",
    name: "Acme Corp",
    contactName: "James Wilson",
    contactPhone: "+1 555-0192",
    type: "Both",
    shipments: 142,
    creditLimit: 50000,
    outstanding: 12400,
    status: "Active",
  },
  {
    id: "CUS-1028",
    name: "Global Freight Ltd",
    contactName: "Marie Garcia",
    contactPhone: "+34 91 1234",
    type: "Export",
    shipments: 89,
    creditLimit: 25000,
    outstanding: 0,
    status: "Active",
  },
  {
    id: "CUS-1027",
    name: "Nordic Imports",
    contactName: "Chen Wei",
    contactPhone: "+86 10 4444",
    type: "Import",
    shipments: 34,
    creditLimit: 10000,
    outstanding: 9800,
    status: "Warning",
  },
  {
    id: "CUS-1026",
    name: "Pacific Trading Co",
    contactName: "Aisha Patel",
    contactPhone: "+971 4 2310",
    type: "Export",
    shipments: 210,
    creditLimit: 100000,
    outstanding: 45000,
    status: "Active",
  },
  {
    id: "CUS-1025",
    name: "EuroLine Logistics",
    contactName: "Robert Fox",
    contactPhone: "+31 2 560701",
    type: "Both",
    shipments: 56,
    creditLimit: 15000,
    outstanding: 16000,
    status: "Hold",
  },
  {
    id: "CUS-1024",
    name: "Oceanic Dynamics",
    contactName: "Emma Stone",
    contactPhone: "+44 161 234",
    type: "Import",
    shipments: 234,
    creditLimit: 120000,
    outstanding: 8500,
    status: "Active",
  },
  {
    id: "CUS-1023",
    name: "Apex Freight",
    contactName: "Sarah Jenkins",
    contactPhone: "+1 555-019",
    type: "Both",
    shipments: 87,
    creditLimit: 75000,
    outstanding: 0,
    status: "Active",
  },
  {
    id: "CUS-1022",
    name: "Nova Imports",
    contactName: "Mikael Chen",
    contactPhone: "+44 20 712",
    type: "Import",
    shipments: 451,
    creditLimit: 250000,
    outstanding: 150000,
    status: "Active",
  },
  {
    id: "CUS-1021",
    name: "Summit Traders",
    contactName: "Elona Rostov",
    contactPhone: "+49 8 5550",
    type: "Both",
    shipments: 63,
    creditLimit: 30000,
    outstanding: 31500,
    status: "Hold",
  },
  {
    id: "CUS-1020",
    name: "Pioneer Exports",
    contactName: "David Kim",
    contactPhone: "+1 555-2441",
    type: "Export",
    shipments: 112,
    creditLimit: 385000,
    outstanding: 15200,
    status: "Warning",
  },
];

const dummyTimeline: ActivityTimelineItem[] = [
  {
    id: "act-1",
    type: "payment",
    title: "Payment Processed",
    description: "Invoice #INV-2084 approved for $42,000 by Finance Management for Apex Freight.",
    time: "12m ago",
  },
  {
    id: "act-2",
    type: "shipment",
    title: "Shipment Outbound",
    description: "Batch #SHP-4023 left Singapore port on 'Pacific Voyager' for Oceanic Dynamics.",
    time: "1h ago",
  },
  {
    id: "act-3",
    type: "alert",
    title: "Customs Alert",
    description: "Additional documentation requested for #SHP-48992 in Tokyo for Vanguard Logistics.",
    time: "1h ago",
  },
  {
    id: "act-4",
    type: "payment",
    title: "Payment Processed",
    description: "Invoice #INV-2088 approved for $12,000 by Finance Management for Nova Imports.",
    time: "2h ago",
  },
  {
    id: "act-5",
    type: "hold",
    title: "Account Hold",
    description: "Credit limit exceeded by $15,300 for summit traders. Account placed on hold.",
    time: "2h ago",
  },
];

const initialStats: CustomerStats = {
  totalCustomers: {
    value: "1,248",
    trend: "+12%",
  },
  activeShipments: {
    value: "342",
    trend: "+18%",
  },
  totalCreditLimit: {
    value: "₹4.2M",
  },
  overdueOutstanding: {
    value: "₹142k",
    trend: "-5%",
  },
};

const initialState: CustomersState = {
  customers: dummyCustomers,
  stats: initialStats,
  timeline: dummyTimeline,
  searchQuery: "",
  statusFilter: "All",
  typeFilter: "All",
  dateFilter: "Last 30 Days",
};

export const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setStatusFilter: (state, action: PayloadAction<string>) => {
      state.statusFilter = action.payload;
    },
    setTypeFilter: (state, action: PayloadAction<string>) => {
      state.typeFilter = action.payload;
    },
    setDateFilter: (state, action: PayloadAction<string>) => {
      state.dateFilter = action.payload;
    },
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.customers.unshift(action.payload);
    },
  },
});

export const {
  setSearchQuery,
  setStatusFilter,
  setTypeFilter,
  setDateFilter,
  addCustomer,
} = customersSlice.actions;

export default customersSlice.reducer;
