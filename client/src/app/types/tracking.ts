export interface TrackingStats {
  activeShipments: { count: number; change: string };
  onTimeDelivery: { percentage: number; change: string };
  customersPending: { count: number; change: string };
  criticalAlerts: { count: number; change: string };
}

export interface TrackingNotification {
  id: string;
  type: 'Critical Delay' | 'Customers Hold' | 'Reroute Alert';
  message: string;
  severity: 'error' | 'warning';
}

export interface TrackingJob {
  id: string;
  customerId: string;
  customerName: string;
  status: 'In Transit' | 'Delayed' | 'At Port' | 'Cleared' | 'In Customs';
  routeOrigin: string;
  routeDestination: string;
  eta: string;
  type?: 'Export' | 'Import';
  
  details?: TrackingJobDetails;
}

export interface TrackingJobDetails {
  origin: string;
  originSub: string;
  destination: string;
  destinationSub: string;
  containers: string;
  containersSub: string;
  carrier: string;
  carrierSub: string;
  currentPosition: string;
  currentPositionSub: string;

  timeline: TrackingTimelineEvent[];
  pendingActions: TrackingPendingAction[];
  internalNotes: TrackingInternalNote[];
  activityLogs: TrackingActivityLog[];
}

export interface TrackingTimelineEvent {
  title: string;
  date: string;
  subtitle?: string;
  status: 'completed' | 'current' | 'pending';
  extraInfo?: {
    description: string;
    speed?: string;
    heading?: string;
  };
}

export interface TrackingPendingAction {
  title: string;
  subtitle: string;
  status: 'Update' | 'Pending';
}

export interface TrackingInternalNote {
  text: string;
  author: string;
}

export interface TrackingActivityLog {
  title: string;
  date: string;
}
