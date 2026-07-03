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
      { name: "Sales Management", icon: ClipboardList, href: "/sales-management" },
      { name: "Jobs", icon: Briefcase, href: "/jobs" },
      { name: "Clearance", icon: FileCheck, href: "/clearance" },
      { name: "Transportation", icon: Ship, href: "/dashboard/transportation" },
      { name: "Tracking", icon: MapPin, href: "/dashboard/tracking" },
      { name: "VGM Calculator", icon: Calculator, href: "/dashboard/vgm-calculator" },
    ]
  },
  {
    title: "Finance",
    items: [
      { name: "Finance", icon: TrendingUp, href: "/finance" },
      { name: "Credit Control", icon: CreditCard, href: "/credit-control" },
    ]
  },
  {
    title: "Analytics",
    items: [
      { name: "Reports", icon: LineChart, href: "/reports" },
      { name: "Customers", icon: Users, href: "/customers" },
    ]
  }
];
