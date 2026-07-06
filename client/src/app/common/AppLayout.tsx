"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

/**
 * Routes that should render as full-page (no sidebar).
 * Sidebar is hidden and content spans full width.
 */
const FULL_PAGE_ROUTES = [
  "/dashboard/customers/create",
];

export default function AppLayout({
  children,
  defaultCollapsed = false
}: {
  children: React.ReactNode;
  defaultCollapsed?: boolean;
}) {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);

  const pathname = usePathname();
  const isFullPage = FULL_PAGE_ROUTES.some((route) => pathname.startsWith(route));

  const hiddenSidebarRoutes = [
    "/dashboard/vendors/create",
    "/dashboard/sales/create",
    "/dashboard/sales/preview",
    "/dashboard/jobs/create"
  ];
  const hideSidebar = hiddenSidebarRoutes.includes(pathname);

  const toggleCollapse = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    document.cookie = `agtech_sidebar_collapsed=${newState}; path=/; max-age=31536000`;
  };

  if (isFullPage) {
    return (
      <div className="flex h-screen flex-col bg-white">
        {/* NavBar only – no sidebar, logo shown in navbar */}
        <NavBar showLogo={true} />
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-white">
      {/* Mobile sidebar overlay */}
      {!hideSidebar && sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      {!hideSidebar && (
        <div
          className={`fixed inset-y-0 left-0 z-50 transform bg-white transition-all duration-300 ease-in-out lg:relative lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
            } w-64 ${isCollapsed ? "lg:w-20" : "lg:w-64"}`}
        >
          <SideBar
            onClose={() => setSidebarOpen(false)}
            isCollapsed={isCollapsed}
          />

          {/* Desktop Collapse Toggle */}
          <button
            onClick={toggleCollapse}
            className="absolute -right-5 top-14 cursor-pointer z-50 hidden h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm hover:bg-gray-50 lg:flex text-gray-700 transition-transform hover:scale-105"
          >
            {isCollapsed ? (
              <PanelLeftOpen className="h-5 w-5" />
            ) : (
              <PanelLeftClose className="h-5 w-5" />
            )}
          </button>
        </div>
      )}

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <NavBar onMenuClick={() => setSidebarOpen(true)} showLogo={hideSidebar} />
        <main className="flex-1 overflow-auto scrollbar-hide bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
}
