"use client";
import { sidebarData } from "../../config/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import agtechLogo from "../assets/Logo/agtechlogo.svg";

export default function SideBar({
  onClose,
  isCollapsed = false
}: {
  onClose?: () => void;
  isCollapsed?: boolean;
}) {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col border-r border-gray-200 bg-white shadow-[10px_0_24px_rgba(0,0,0,0.06)] overflow-hidden relative z-20">
      {/* Logo Area */}
      <div className={`flex h-20 items-center border-b border-gray-100 shrink-0 px-6 ${isCollapsed ? 'lg:justify-center lg:px-2' : ''}`}>
        <span className={`text-xl font-extrabold text-primary italic tracking-tight ${isCollapsed ? 'hidden lg:block' : 'hidden'}`}>
          AG
        </span>
        <Image src={agtechLogo} alt="AG Techware Logo" className={`h-8 w-auto min-w-[120px] ${isCollapsed ? 'lg:hidden' : ''}`} />
      </div>

      {/* Nav Links */}
      <div className="flex-1 overflow-y-auto py-6 overflow-x-hidden">
        {sidebarData.map((section, idx) => (
          <div key={idx} className="mb-6">
            <h3 className={`mb-3 px-6 text-[11px] font-bold uppercase tracking-wider text-gray-500 whitespace-nowrap ${isCollapsed ? 'lg:hidden' : ''}`}>
              {section.title}
            </h3>
            {isCollapsed && (
              <div className="mb-3 hidden lg:flex justify-center">
                <div className="h-px w-6 bg-gray-200 rounded-full"></div>
              </div>
            )}
            <ul className={`space-y-1 px-4 ${isCollapsed ? 'lg:px-3' : ''}`}>
              {section.items.map((item) => {
                const isActive = pathname === item.href || (pathname === '/' && item.href === '/');
                const Icon = item.icon;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      title={isCollapsed ? item.name : undefined}
                      className={`flex items-center rounded-lg py-2.5 font-medium transition-colors gap-3 px-3 ${isCollapsed ? 'lg:justify-center lg:px-2' : ''
                        } ${isActive
                          ? "bg-gradiate text-white shadow-sm"
                          : "text-gray-700 hover:bg-gray-100"
                        }`}
                    >
                      <Icon className={`shrink-0 h-5 w-5 ${isCollapsed ? 'lg:h-6 lg:w-6' : ''} ${isActive ? "text-white" : "text-gray-500"}`} strokeWidth={2} />
                      <span className={`whitespace-nowrap text-sm ${isCollapsed ? 'lg:hidden' : ''}`}>{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}