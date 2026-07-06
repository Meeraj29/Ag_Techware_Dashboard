import {
  LayoutDashboard,
  Contact,
  ClipboardList,
  Briefcase,
  FileCheck,
  Ship,
  MapPin,
  Calculator,
  TrendingUp,
  CreditCard,
  LineChart,
  Users
} from 'lucide-react';

export const sidebarData = [
  {
    title: "Main",
    items: [
      { name: "Dashboard", icon: LayoutDashboard, href: "/" },
      { name: "Vendor List", icon: Contact, href: "/dashboard/vendors" },
    ]
  },
  {
    title: "Operations",
    items: [
      { name: "Sales Management", icon: ClipboardList, href: "/dashboard/sales" },
      { name: "Jobs", icon: Briefcase, href: "/dashboard/jobs" },
      { name: "Clearance", icon: FileCheck, href: "/dashboard/clearance" },
      { name: "Transportation", icon: Ship, href: "/dashboard/transportation" },
      { name: "Tracking", icon: MapPin, href: "/dashboard/tracking" },
      { name: "VGM Calculator", icon: Calculator, href: "/dashboard/vgm-calculator" },
    ]
  },
  {
    title: "Finance",
    items: [
      { name: "Finance", icon: TrendingUp, href: "/dashboard/finance" },
      { name: "Credit Control", icon: CreditCard, href: "/dashboard/credit-control" },

    ]
  },
  {
    title: "Analytics",
    items: [
      { name: "Reports", icon: LineChart, href: "/dashboard/reports" },
      { name: "Customers", icon: Users, href: "/dashboard/customers" },

    ]
  },
  {
    title: "Fleet",
    items: [
      { name: "Fleet Management", icon: Ship, href: "/dashboard/fleet-management" },
    ]
  }
];
