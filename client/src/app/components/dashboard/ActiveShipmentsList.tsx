"use client";
import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import { Ship } from 'lucide-react';

export default function ActiveShipmentsList() {
  const activeShipments = useAppSelector((state) => state.dashboard.activeShipments);

  return (
    <div className="bg-white rounded-xl  col-span-1 lg:col-span-2 overflow-auto scrollbar-hide">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 border-b border-gray-100 gap-4 sm:gap-0">
        <h2 className="text-lg font-semibold text-black">Active Shipments</h2>
        <div className="flex gap-3 w-full sm:w-auto">
          <select className="flex-1 sm:flex-none text-sm border border-gray-300 rounded-md px-3 py-1.5 outline-none cursor-pointer text-gray-700">
            <option>Last 30 Days</option>
            <option>Last 60 Days</option>
            <option>All Time</option>
          </select>
          <button className="flex-1 sm:flex-none text-sm font-semibold text-[#04458B] border border-[#04458B] rounded-md px-4 py-1.5 hover:bg-blue-50 transition-colors whitespace-nowrap">
            View All
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-gray-50 text-gray-600 font-bold border-b border-gray-100">
            <tr>
              <th className="py-3 px-5 text-[#000000CC] text-base font-medium">Job ID</th>
              <th className="py-3 px-5 text-[#000000CC] text-base font-medium">Customer</th>
              <th className="py-3 px-5 text-[#000000CC] text-base font-medium">Type</th>
              <th className="py-3 px-5 text-[#000000CC] text-base font-medium">Status</th>
              <th className="py-3 px-5 text-[#000000CC] text-base font-medium">Origin</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 text-gray-800 font-medium">
            {activeShipments.map((shipment, idx) => (
              <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-5 text-[#3525CD] font-medium text-base">{shipment.id}</td>
                <td className="py-4 px-5 font-medium text-base">{shipment.customer}</td>
                <td className="py-4 px-5">
                  <span className={`px-3 py-2 rounded-full text-xs font-medium flex items-center w-fit gap-1 ${shipment.type === 'Export' ? 'bg-[#3525CD4D] text-[#3525CD]' : 'bg-[#0548904D] text-[#054890]'
                    }`}>
                    {/* Ship icon from lucide-react */}
                    <Ship size={12} />
                    {shipment.type}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <span className={`flex items-center gap-2 ${shipment.status === 'Delayed' ? 'text-red-500' :
                    shipment.status === 'In Clearance' ? 'text-[#D97706]' :
                      shipment.status === 'Ready For Transport' ? 'text-[#4338CA]' :
                        'text-[#059669]'
                    }`}>
                    <span className="w-2 h-2 rounded-full bg-current"></span>
                    {shipment.status}
                  </span>
                </td>
                <td className="py-4 px-5 text-black text-base font-medium whitespace-normal min-w-[200px]">{shipment.origin}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
