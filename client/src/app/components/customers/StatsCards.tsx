'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { Users, Package, Wallet, AlertCircle } from 'lucide-react';
import { RootState } from '../../redux/store';

export function StatsCards() {
  const stats = useSelector((state: RootState) => state.customers.stats);

  const cardData = [
    {
      title: "Total Customers",
      value: stats.totalCustomers.value,
      trend: stats.totalCustomers.trend,
      isPositive: true,
      icon: Users,
    },
    {
      title: "Active Shipments",
      value: stats.activeShipments.value,
      trend: stats.activeShipments.trend,
      isPositive: true,
      icon: Package,
    },
    {
      title: "Total Credit Limit",
      value: stats.totalCreditLimit.value,
      trend: null,
      isPositive: null,
      icon: Wallet,
    },
    {
      title: "Overdue Outstanding",
      value: stats.overdueOutstanding.value,
      trend: stats.overdueOutstanding.trend,
      isPositive: false,
      icon: AlertCircle,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
      {cardData.map((card, idx) => {
        const IconComponent = card.icon;
        return (
          <div
            key={idx}
            className="bg-[#F4F4F4] rounded-[16px] p-5 border border-[#EDEDED] shadow-sm flex items-center justify-between relative overflow-hidden"
          >
            <div className="flex flex-col gap-1">
              <span className="text-[26px] font-semibold text-black leading-none">
                {card.value}
              </span>
              <span className="text-[16px] font-medium text-black mt-2">
                {card.title}
              </span>
            </div>

            <div className="flex flex-col items-end gap-2">
              <div className="w-10 h-10 rounded-[12px] bg-[#EAEAEA] flex items-center justify-center text-gray-600">
                <IconComponent className="w-5 h-5" />
              </div>
              {card.trend && (
                <span
                  className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                    card.isPositive
                      ? 'bg-[#E1F9EB] text-[#13803B]'
                      : 'bg-[#FCE8E6] text-[#C5221F]'
                  }`}
                >
                  {card.trend}
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
