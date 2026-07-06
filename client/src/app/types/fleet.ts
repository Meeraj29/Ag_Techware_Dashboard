export interface FleetVehicle {
  [x: string]: string;
  modelName: string;
  id: string;
  vehicleNumber: string;
  type: string;
  modelYear: string;
  capacity: string;
  assignedDriver: string;
  status: string;
  regExp: string;
  insuranceExp: string;
}

export interface FleetTrip {
  id: string;
  tripId: string;
  vehicle: string;
  driver: string;
  route: string;
  departure: string;
  distance: string;
  status: string;
}

export interface FleetStats {
  totalVehicles: string;
  activeTrips: string;
  maintenance: string;
}

export interface FleetTripStats {
  activeVehicles: string;
  activeTrips: string;
  delayTrips: string;
}

export interface PurchaseOrder {
  id: number;
  po: string;
  vendor: string;
  tag: string | null;
  amount: string;
  status: string;
  statusColor: string;
  date: string;
}

export interface FastagTransaction {
  date: string;
  vehicle: string;
  plaza: string;
  amount: string;
  isNegative: boolean;
  balance: string;
  isLowBal: boolean;
}

export interface FleetPurchaseStats {
  totalPoSpend: { value: string; badge: string };
  onTimeDeliveryRate: { value: string; badge: string };
  activeVendors: { value: string; badge: string };
  pendingDeliveries: { value: string; badge: string };
}

export interface FleetFastagStats {
  totalBalance: string;
  monthlySpend: string;
  additionalExpenses: string;
  totalBalanceTrend: string;
  monthlySpendTrend: string;
  additionalExpensesTrend: string;
  lowBalanceVehicles: string[];
}

export interface FastagExpenseStats {
  totalBalance: string;
  activeWallets: string;
  lowBalanceAlerts: string;
}

export interface MaintenanceRecord {
  id: string;
  vehicleNumber: string;
  serviceType: string;
  serviceDate: string;
  mileage: string;
  serviceCenter: string;
  status: "Overdue" | "In Progress" | "Scheduled";
  cost: string;
}

export interface MaintenanceStats {
  underMaintenance: string;
  underMaintenanceBadge: string;
  overdueServices: string;
  overdueServicesBadge: string;
}

export interface RenewalItem {
  id: string;
  type: "insurance" | "pollution" | "registration";
  title: string;
  vehicle: string;
  expiresIn: string;
  actionLabel: string;
  isUrgent: boolean;
}

export interface TireRecord {
  id: string;
  vehicle: string;
  position: string;
  brand: string;
  installDate: string;
  mileage: string;
  dueIn: string;
  status: "REPLACE" | "MONITOR" | "GOOD";
  isOverdue: boolean; // Controls red text for "dueIn" field
}

export interface RotationLog {
  id: string;
  dateStr: string;
  timeStr: string;
  vehicle: string;
  description: string;
  type: "rotation" | "alignment" | "repair";
}

export interface TireStatsCard {
  value: string;
  subtext: string;
}

export interface TireManagementStats {
  replacementDue: TireStatsCard;
  monitorStatus: TireStatsCard;
  avgLifespan: TireStatsCard;
}

export interface ComplianceRecord {
  id: string;
  vehicle: string;
  docType: string;
  expiryDate: string;
  status: "Expired" | "Expired soon" | "Valid";
  lastUpdated: string;
  isOverdue: boolean; // Controls red text for expiryDate
}

export interface ComplianceStatsCard {
  value: string;
  subtext: string;
  trend?: string;
  trendColor?: string;
  isCritical?: boolean;
}

export interface ComplianceManagementStats {
  criticalAttention: ComplianceStatsCard;
  assetsHealth: ComplianceStatsCard;
  pendingRenewal: ComplianceStatsCard;
}

export interface DriverRecord {
  id: string;
  driverId: string;
  name: string;
  contact: string;
  assignedVehicle: string;
  licenseExpiry: string;
  licenseExpiryDetail: string;
  isLicenseOverdue: boolean;
  status: "Assigned" | "Available" | "Leave";
  trips: string;
  rating: string;
}

export interface DriverStatsCard {
  value: string;
  subtext: string;
  trendText?: string;
  trendClass?: string;
  isAlert?: boolean;
}

export interface DriverManagementStats {
  licenseExpiries: DriverStatsCard;
  activeDrivers: DriverStatsCard;
  avgSafetyRating: DriverStatsCard;
}

