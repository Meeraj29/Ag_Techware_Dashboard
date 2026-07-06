import { createSlice } from '@reduxjs/toolkit';
import { Customer, Defaulter, Activity } from '../../types/creditControl';

export interface CreditControlState {
  stats: {
    totalAllocated: string;
    creditUsed: string;
    availableCredits: string;
    overdueAmount: string;
  };
  customers: Customer[];
  topDefaulters: Defaulter[];
  recentActivity: Activity[];
}

const initialState: CreditControlState = {
  stats: {
    totalAllocated: "₹12.4M",
    creditUsed: "₹8.2M",
    availableCredits: "₹4.2M",
    overdueAmount: "₹842.5K",
  },
  customers: [
    {
      id: "CUST-9021",
      name: "Global Nexus Corp.",
      limit: 500000,
      used: 542000,
      outstanding: 124500,
      overdue: 42000,
      status: "Over Limit",
      lastPay: "Oct 12, 2023"
    },
    {
      id: "CUST-4412",
      name: "Next Logistics",
      limit: 250000,
      used: 238000,
      outstanding: 45000,
      overdue: 0,
      status: "Near Limit",
      lastPay: "Nov 01, 2023"
    },
    {
      id: "CUST-9023",
      name: "Swift Mart",
      limit: 1200000,
      used: 450000,
      outstanding: 12400,
      overdue: 0,
      status: "Within Limit",
      lastPay: "Oct 28, 2023"
    },
    {
      id: "CUST-9024",
      name: "Arctic Chill Co",
      limit: 100000,
      used: 145000,
      outstanding: 88200,
      overdue: 64500,
      status: "Over Limit",
      lastPay: "Sep 15, 2023"
    }
  ],
  topDefaulters: [
    { id: "1", initials: "AL", name: "Apex Logistics", daysOverdue: 92, overdueAmount: 42000 },
    { id: "2", initials: "DE", name: "Dynamic Express", daysOverdue: 64, overdueAmount: 64500 },
    { id: "3", initials: "FS", name: "FastShip Co", daysOverdue: 45, overdueAmount: 18200 }
  ],
  recentActivity: [
    { id: "1", type: "success", title: "Payment received from Continental Freight", time: "Today, 10:24 AM", relativeTime: "2 hours ago" },
    { id: "2", type: "error", title: "Credit Limit Exceeded for Apex Logistics", time: "Today, 08:15 AM", relativeTime: "5 hours ago" },
    { id: "3", type: "warning", title: "Automated reminder sent to Blue Water Shipping", time: "Yesterday, 04:30 PM", relativeTime: "Yesterday" }
  ]
};

export const creditControlSlice = createSlice({
  name: 'creditControl',
  initialState,
  reducers: {}
});

export default creditControlSlice.reducer;
