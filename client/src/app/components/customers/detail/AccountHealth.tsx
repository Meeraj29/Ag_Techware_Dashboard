'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { ShieldCheck, Info } from 'lucide-react';

interface Props { customerId: string; }

export function AccountHealth({ customerId }: Props) {
  const detail = useSelector((state: RootState) => state.customerDetail.details[customerId]);
  if (!detail) return null;

  return (
    <div className="bg-white rounded-[20px] border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[18px] font-bold text-gray-800">Account Health</h2>
        <ShieldCheck className="w-5 h-5 text-[#10B981]" />
      </div>

      <div className="mb-6">
        <p className="text-[13px] text-gray-500 mb-1">Credit Limits</p>
        <div className="flex items-end justify-between">
          <p className="text-[24px] font-bold text-gray-800">${detail.creditLimit.toLocaleString()}</p>
          <p className="text-[13px] text-gray-500 mb-1">Renewal: {detail.creditRenewal}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center pb-4 border-b border-gray-100">
          <p className="text-[14px] text-gray-600">Late Payment Rate</p>
          <p className="text-[14px] font-bold text-[#10B981]">{(detail.latePaymentRate * 100).toFixed(2)}%</p>
        </div>

        <div className="flex justify-between items-center pb-4 border-b border-gray-100">
          <p className="text-[14px] text-gray-600">Avg. Shipment Vol/mo</p>
          <p className="text-[14px] font-bold text-gray-800">{detail.avgShipmentVol}</p>
        </div>
      </div>

      <div className="mt-6 bg-[#EFF6FF] rounded-[12px] p-4 border border-[#BFDBFE]">
        <div className="flex items-center gap-1.5 mb-2">
          <Info className="w-4 h-4 text-[#3B82F6]" />
          <p className="text-[12px] font-bold text-[#3B82F6]">System Note</p>
        </div>
        <p className="text-[13px] text-[#1E3A8A] leading-relaxed">
          {detail.systemNote}
        </p>
      </div>
    </div>
  );
}
