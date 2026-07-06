export interface Customer {
  id: string;
  name: string;
  contactName: string;
  contactPhone: string;
  type: 'Export' | 'Import' | 'Both';
  shipments: number;
  creditLimit: number;
  outstanding: number;
  status: 'Active' | 'Warning' | 'Hold';
}

export interface ActivityTimelineItem {
  id: string;
  type: 'payment' | 'shipment' | 'alert' | 'hold';
  title: string;
  description: string;
  time: string;
}

export interface CustomerStats {
  totalCustomers: {
    value: string;
    trend: string;
  };
  activeShipments: {
    value: string;
    trend: string;
  };
  totalCreditLimit: {
    value: string;
  };
  overdueOutstanding: {
    value: string;
    trend: string;
  };
}

export interface TimelineEntry {
  id: string;
  dateTime: string;
  eventType: string;
  operators: string;
  status: 'Pending' | 'Verified' | 'Delayed';
}

export interface InternalNote {
  id: string;
  text: string;
  author: string;
  daysAgo: string;
}

export interface CustomerAddress {
  id: string;
  type: 'Billing Address' | 'Shipping Address' | 'Warehouse Address';
  companyName: string;
  addressLines: string[];
}

export interface CustomerDetail {
  id: string;
  name: string;
  registeredDate: string;
  status: 'Active' | 'Warning' | 'Hold';
  legalName: string;
  taxId: string;
  primaryContact: string;
  contactEmail: string;
  phone: string;
  headquarters: string;
  type: 'Export' | 'Import' | 'Both';
  totalJobs: number;
  totalJobsTrend: string;
  activeShipments: number;
  activeShipmentsTrend: string;
  completed: number;
  creditUsage: number;
  creditLimit: number;
  creditRenewal: string;
  latePaymentRate: number;
  avgShipmentVol: string;
  systemNote: string;
  timeline: TimelineEntry[];
  internalNotes: InternalNote[];
  addresses?: CustomerAddress[];
}

export interface CustomerDetailState {
  details: Record<string, CustomerDetail>;
  activeTab: string;
  selectedCustomerId: string | null;
}
