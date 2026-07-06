'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';

export function CreateCustomerCreditControlDetails() {
  return (
    <div className="bg-white rounded-[16px] border border-gray-200 p-6">
      {/* Row 1: Date From | Date To | Period(days) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="date-from" className="text-[13px] font-semibold text-gray-700">Date From</label>
          <input
            id="date-from"
            type="date"
            placeholder="date From"
            className="w-full bg-[#F8F9FA] border border-gray-200 rounded-[8px] px-3 py-2.5 text-[13px] text-gray-400 focus:outline-none focus:border-primary transition"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="date-to" className="text-[13px] font-semibold text-gray-700">date To</label>
          <input
            id="date-to"
            type="date"
            placeholder="Date To"
            className="w-full bg-[#F8F9FA] border border-gray-200 rounded-[8px] px-3 py-2.5 text-[13px] text-gray-400 focus:outline-none focus:border-primary transition"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="period-days" className="text-[13px] font-semibold text-gray-700">Period(days)</label>
          <input
            id="period-days"
            type="number"
            defaultValue={0}
            className="w-full bg-[#F8F9FA] border border-gray-200 rounded-[8px] px-3 py-2.5 text-[13px] text-gray-800 focus:outline-none focus:border-primary transition"
          />
        </div>
      </div>

      {/* Row 2: Amount | Currency */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="amount" className="text-[13px] font-semibold text-gray-700">Amount</label>
          <input
            id="amount"
            type="number"
            defaultValue={0}
            className="w-full bg-[#F8F9FA] border border-gray-200 rounded-[8px] px-3 py-2.5 text-[13px] text-gray-800 focus:outline-none focus:border-primary transition"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="currency-cc" className="text-[13px] font-semibold text-gray-700">Currency</label>
          <div className="relative">
            <select
              id="currency-cc"
              defaultValue=""
              className="w-full appearance-none bg-[#F8F9FA] border border-gray-200 rounded-[8px] px-3 py-2.5 text-[13px] text-gray-400 focus:outline-none focus:border-primary transition pr-8"
            >
              <option value="" disabled>Currency</option>
              <option>USD</option>
              <option>EUR</option>
              <option>INR</option>
              <option>SGD</option>
            </select>
            <ChevronDown className="w-4 h-4 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}
