export interface Customer {
  id: string;
  name: string;
  limit: number;
  used: number;
  outstanding: number;
  overdue: number;
  status: 'Over Limit' | 'Near Limit' | 'Within Limit';
  lastPay: string;
}

export interface Defaulter {
  id: string;
  name: string;
  initials: string;
  daysOverdue: number;
  overdueAmount: number;
}

export interface Activity {
  id: string;
  type: 'success' | 'warning' | 'error';
  title: string;
  time: string;
  relativeTime: string;
}
