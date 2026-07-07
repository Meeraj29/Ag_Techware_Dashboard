export interface FinanceInvoice {
	id: string;
	customer: string;
	issued: string;
	due: string;
	amount: string;
	status: string;
	isLate?: boolean;
}

export interface FinanceActivity {
	title: string;
	description: string;
	time: string;
	iconColor: string;
	bgColor: string;
	borderColor: string;
}

export interface CashFlowData {
	month: string;
	inflow: number;
	outflow: number;
}

export interface PaymentDistributionData {
	name: string;
	percentage: number;
	color: string;
	textColor: string;
}

export interface FinanceState {
	invoices: FinanceInvoice[];
	activities: FinanceActivity[];
	cashFlow: CashFlowData[];
	paymentDistribution: PaymentDistributionData[];
	stats: {
		totalRevenue: number;
		pendingPayments: number;
		outstandingAmount: number;
		overduePayments: number;
	};
}
