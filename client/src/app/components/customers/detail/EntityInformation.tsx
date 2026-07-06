'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { Pencil, ExternalLink } from 'lucide-react';
import Image from 'next/image';

interface Props { customerId: string; }

export function EntityInformation({ customerId }: Props) {
  const detail = useSelector((state: RootState) => state.customerDetail.details[customerId]);
  if (!detail) return null;

  return (
    <div className="bg-white rounded-[20px] border border-gray-200 p-6 flex-1 h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[18px] font-bold text-gray-800">Entity Information</h2>
        <button className="text-gray-400 hover:text-black transition">
          <Pencil className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#F8F9FA] rounded-[16px] p-5">
          <p className="text-[13px] text-gray-500 mb-1">Legal Name</p>
          <p className="text-[15px] font-semibold text-gray-800">{detail.legalName}</p>
        </div>

        <div className="bg-[#F8F9FA] rounded-[16px] p-5">
          <p className="text-[13px] text-gray-500 mb-1">Tax ID / Vat Number</p>
          <p className="text-[15px] font-semibold text-gray-800">{detail.taxId}</p>
        </div>

        <div className="bg-[#F8F9FA] rounded-[16px] p-5">
          <p className="text-[13px] text-gray-500 mb-1">Primary Contact</p>
          <p className="text-[15px] font-semibold text-gray-800">{detail.primaryContact}</p>
          <p className="text-[13px] text-gray-400 mt-1">{detail.contactEmail}</p>
        </div>

        <div className="bg-[#F8F9FA] rounded-[16px] p-5">
          <p className="text-[13px] text-gray-500 mb-1">Phone Number</p>
          <p className="text-[15px] font-semibold text-gray-800">{detail.phone}</p>
        </div>

        <div className="bg-[#F8F9FA] rounded-[16px] p-5 md:col-span-2">
          <p className="text-[13px] text-gray-500 mb-3">Company Headquarters</p>
          <div className="flex items-start gap-4">
            <div className="w-[80px] h-[80px] bg-[#E8F0FE] rounded-[12px] flex items-center justify-center overflow-hidden shrink-0">
              <div className="text-primary font-bold">Map</div>
            </div>
            <div>
              <p className="text-[14px] font-medium text-gray-800 whitespace-pre-line leading-relaxed">
                {detail.headquarters}
              </p>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(detail.headquarters.replace(/\n/g, ' '))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[13px] font-semibold text-blue-600 mt-2 hover:underline"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
