import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FinanceState } from "../../types/finance";

const initialState: FinanceState = {
	invoices: [
		{
			id: "#JOB-8842",
			customer: "Global Nexus Corp.",
			issued: "Oct 12, 2023",
			due: "Nov 12, 2023",
			amount: "₹12,450.00",
			status: "Paid",
		},
		{
			id: "#JOB-8841",
			customer: "Next Logistics",
			issued: "Sep 28, 2023",
			due: "Oct 28, 2023",
			amount: "₹12,450.00",
			status: "OVERDUE",
			isLate: true,
		},
		{
			id: "#JOB-8842",
			customer: "Swift Mart",
			issued: "Oct 14, 2023",
			due: "Nov 14, 2023",
			amount: "₹12,450.00",
			status: "PENDING",
		},
		{
			id: "#JOB-8841",
			customer: "Arctic Chill Co",
			issued: "Oct 15, 2023",
			due: "Nov 15, 2023",
			amount: "₹12,450.00",
			status: "Paid",
		},
		{
			id: "#JOB-8842",
			customer: "Global Nexus Corp.",
			issued: "Oct 18, 2023",
			due: "Nov 18, 2023",
			amount: "₹12,450.00",
			status: "Paid",
		},
		{
			id: "#JOB-8841",
			customer: "Next Logistics",
			issued: "Oct 12, 2023",
			due: "Nov 12, 2023",
			amount: "₹12,450.00",
			status: "CRITICAL",
			isLate: true,
		},
		{
			id: "#JOB-8842",
			customer: "Swift Mart",
			issued: "Oct 28, 2023",
			due: "Dec 01, 2023",
			amount: "₹12,450.00",
			status: "PENDING",
		},
		{
			id: "#JOB-8842",
			customer: "Global Nexus Corp.",
			issued: "Oct 18, 2023",
			due: "Nov 18, 2023",
			amount: "₹12,450.00",
			status: "Paid",
		},
		{
			id: "#JOB-8842",
			customer: "Swift Mart",
			issued: "Oct 28, 2023",
			due: "Dec 01, 2023",
			amount: "₹12,450.00",
			status: "PENDING",
		},
		{
			id: "#JOB-8841",
			customer: "Arctic Chill Co",
			issued: "Dec 01, 2023",
			due: "Nov 28, 2023",
			amount: "₹12,450.00",
			status: "CRITICAL",
			isLate: true,
		},
		{
			id: "#JOB-8842",
			customer: "Swift Mart",
			issued: "Oct 14, 2023",
			due: "Nov 14, 2023",
			amount: "₹12,450.00",
			status: "PENDING",
		},
	],
	activities: [
		{
			title: "Invoice Approved",
			description: "Vertex Supply Chain - INV-0089",
			time: "2 hours ago",
			iconColor: "text-[#FFFFFF] fill-primary",
			bgColor: "bg-white",
			borderColor: "border-primary",
		},
		{
			title: "Payment Received",
			description: "From Global Logistics Corp",
			time: "5 hours ago",
			iconColor: "text-[#FFFFFF] fill-[#10B981]",
			bgColor: "bg-white",
			borderColor: "border-[#10B981]",
		},
		{
			title: "Report Generated",
			description: "Monthly Cash Flow - October",
			time: "Yesterday",
			iconColor: "text-[#FFFFFF] fill-[#F59E0B]",
			bgColor: "bg-white",
			borderColor: "border-[#F59E0B]",
		},
		{
			title: "Invoice Approved",
			description: "Vertex Supply Chain - INV-0089",
			time: "2 hours ago",
			iconColor: "text-[#FFFFFF] fill-primary",
			bgColor: "bg-white",
			borderColor: "border-primary",
		},
	],
	cashFlow: [
		{ month: "Jan", inflow: 30, outflow: 70 },
		{ month: "Feb", inflow: 20, outflow: 55 },
		{ month: "Mar", inflow: 40, outflow: 65 },
		{ month: "Apr", inflow: 35, outflow: 85 },
		{ month: "May", inflow: 25, outflow: 45 },
		{ month: "Jun", inflow: 60, outflow: 80 },
	],
	paymentDistribution: [
		{
			name: "Standard Bank Transfer",
			percentage: 64,
			color: "bg-[#10B981]",
			textColor: "text-[#059669]",
		},
		{
			name: "Digital Wallets (Stripe/PayPal)",
			percentage: 22,
			color: "bg-[#2C8E6D]",
			textColor: "text-[#059669]",
		},
		{
			name: "ACH Payments",
			percentage: 14,
			color: "bg-[#F59E0B]",
			textColor: "text-[#F59E0B]",
		},
	],
	stats: {
		totalRevenue: 1248300,
		pendingPayments: 342050,
		outstandingAmount: 436250,
		overduePayments: 94200,
	},
};

const financeSlice = createSlice({
	name: "finance",
	initialState,
	reducers: {
		// We will add RTK reducers here when interacting with API
	},
});

export default financeSlice.reducer;
