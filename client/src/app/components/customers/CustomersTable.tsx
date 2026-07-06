'use client';

import  { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { Search, MoreVertical, ChevronLeft, ChevronRight } from 'lucide-react';
import { RootState } from '../../redux/store';
import { setSearchQuery } from '../../redux/features/customersSlice';
import { Customer } from '../../types/customers';

export function CustomersTable() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { customers, searchQuery, statusFilter, typeFilter } = useSelector(
    (state: RootState) => state.customers
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Custom Dropdown states
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);


  // Filter logic
  const filteredCustomers = customers.filter((cust: Customer) => {
    const matchesSearch =
      cust.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cust.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cust.contactName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cust.contactPhone.includes(searchQuery);

    const matchesStatus = statusFilter === 'All' || cust.status === statusFilter;
    const matchesType = typeFilter === 'All' || cust.type === typeFilter;

    return matchesSearch && matchesStatus && matchesType;
  });

  // Pagination logic
  const totalItems = filteredCustomers.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCustomers = filteredCustomers.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getStatusDotColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-[#0F9D58]';
      case 'Warning':
        return 'bg-[#DB4437]';
      case 'Hold':
        return 'bg-[#F4B400]';
      default:
        return 'bg-gray-400';
    }
  };

  const getTypeBadgeStyles = (type: string) => {
    switch (type) {
      case 'Both':
        return 'bg-[#E6F4EA] text-[#13803B]';
      case 'Export':
        return 'bg-[#F3E8FF] text-[#6B21A8]';
      case 'Import':
        return 'bg-[#E8F0FE] text-[#1A73E8]';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

 

  return (
    <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden mb-6 relative">
      {openDropdown && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setOpenDropdown(null)} 
        />
      )}
      {/* Header filters */}
    {/* Header */}
<div className="border-b border-gray-100 p-6">
  <div className="flex flex-wrap items-center justify-between gap-4">

    {/* Search */}
    <div className="relative flex-1 min-w-70 max-w-105">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />

      <input
        type="text"
        placeholder="Search customers, IDs, or contacts..."
        value={searchQuery}
        onChange={(e) => {
          dispatch(setSearchQuery(e.target.value));
          setCurrentPage(1);
        }}
        className="w-full h-11 rounded-xl border border-gray-200 bg-[#F5F5F5] pl-11 pr-4 text-sm focus:outline-none"
      />
    </div>

    {/* Filters */}
    <div className="flex flex-wrap items-center justify-end gap-2">

      {/* Date */}
      <button className="h-11 rounded-xl border border-gray-200 bg-white px-4 text-sm whitespace-nowrap">
        Last 30 Days
      </button>

      {/* Status */}
      <button className="h-11 rounded-xl border border-gray-200 bg-white px-4 text-sm whitespace-nowrap">
        Status: All
      </button>

      {/* Customer Type */}
      <button className="h-11 rounded-xl border border-gray-200 bg-white px-4 text-sm whitespace-nowrap">
        Customer Type
      </button>

      {/* Advanced Export */}
      <button className="h-11 rounded-xl border border-gray-200 bg-white px-4 text-sm text-blue-600 whitespace-nowrap">
        Advanced Export
      </button>

    </div>

  </div>
</div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-600 min-w-225">
          <thead className="bg-[#F8F9FA] text-gray-500 font-semibold border-b border-gray-100">
            <tr>
              <th className="px-6 py-4">Customer Id</th>
              <th className="px-6 py-4">Customer</th>
              <th className="px-6 py-4">Contact</th>
              <th className="px-6 py-4">Type</th>
              <th className="px-6 py-4">Shipments</th>
              <th className="px-6 py-4">Credit Limit</th>
              <th className="px-6 py-4">Outstanding</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {paginatedCustomers.map((cust) => (
              <tr 
                key={cust.id} 
                className="hover:bg-gray-50/70 transition-colors cursor-pointer"
                onClick={() => router.push(`/dashboard/customers/${cust.id}`)}
              >
                <td className="px-6 py-4 font-semibold text-blue-600 hover:underline">
                  {cust.id}
                </td>
                <td className="px-6 py-4 font-bold text-gray-800">
                  {cust.name}
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-800">{cust.contactName}</div>
                  <div className="text-xs text-gray-400">{cust.contactPhone}</div>
                </td>
                <td className="px-6 py-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-xl ${getTypeBadgeStyles(cust.type)}`}>
                    {cust.type}
                  </span>
                </td>
                <td className="px-6 py-4 font-medium text-gray-800">
                  {cust.shipments}
                </td>
                <td className="px-6 py-4 font-medium text-gray-800">
                  ₹{cust.creditLimit.toLocaleString('en-IN')}
                </td>
                <td className="px-6 py-4 font-medium text-gray-800">
                  ₹{cust.outstanding.toLocaleString('en-IN')}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5">
                    <span className={`w-2.5 h-2.5 rounded-full ${getStatusDotColor(cust.status)}`} />
                    <span className="text-sm font-medium text-gray-700">{cust.status}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <button className="text-gray-400 hover:text-gray-600 p-1.5 rounded-full hover:bg-gray-100 transition">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}

            {filteredCustomers.length === 0 && (
              <tr>
                <td colSpan={9} className="text-center py-12 text-gray-400 font-medium">
                  No customers found matching filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="p-6 flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-gray-100 text-sm text-gray-500">
        <div>
          Results: <span className="font-semibold text-gray-700">{paginatedCustomers.length.toString().padStart(2, '0')}</span> Out Of <span className="font-semibold text-gray-700">{filteredCustomers.length}</span>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-lg text-gray-600 disabled:opacity-40 hover:bg-gray-50 transition"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <span className="w-8 h-8 flex items-center justify-center border border-blue-500 bg-blue-50/10 text-blue-600 font-semibold rounded-lg">
            {currentPage}
          </span>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-lg text-gray-600 disabled:opacity-40 hover:bg-gray-50 transition"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
