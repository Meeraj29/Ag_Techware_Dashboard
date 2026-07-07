"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { Search, MoreVertical, ChevronLeft, ChevronRight } from 'lucide-react';
import { RootState } from '../../redux/store';
import { setSearchQuery } from '../../redux/features/customersSlice';
import { Customer } from '../../types/customers';
import Image from 'next/image';
import { Ship } from "lucide-react";


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

		const matchesStatus =
			statusFilter === "All" || cust.status === statusFilter;
		const matchesType = typeFilter === "All" || cust.type === typeFilter;

		return matchesSearch && matchesStatus && matchesType;
	});

	// Pagination logic
	const totalItems = filteredCustomers.length;
	const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
	const startIndex = (currentPage - 1) * itemsPerPage;
	const paginatedCustomers = filteredCustomers.slice(
		startIndex,
		startIndex + itemsPerPage,
	);

	const handlePageChange = (page: number) => {
		if (page >= 1 && page <= totalPages) {
			setCurrentPage(page);
		}
	};
	const getStatusDotColor = (status: string) => {
		switch (status) {
			case "Active":
				return {
					dot: "bg-[#059669]",
					text: "text-[#059669]",
				};

			case "Warning":
				return {
					dot: "bg-[#C10209]",
					text: "text-[#C10209]",
				};

			case "Hold":
				return {
					dot: "bg-[#D97706]",
					text: "text-[#D97706]",
				};

			default:
				return {
					dot: "bg-gray-400",
					text: "text-gray-400",
				};
		}
	};

	const getTypeBadgeStyles = (type: string) => {
		switch (type) {
			case 'Both':
				return 'bg-[#B8EADA] text-[#005C3D]';
			case 'Export':
				return 'bg-[#C3BEF0] text-[#3525CD]';
			case 'Import':
				return 'bg-[#B0C5DA] text-[#054890]';
			default:
				return 'bg-gray-100 text-gray-800';
		}
	};



	return (
		<div className="bg-white rounded-[24px] border border-gray-200 shadow-sm overflow-hidden mb-6 relative">
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
							className="w-full h-11 rounded-[16px] border border-[#D8D8D8] bg-[#F1F1F1] pl-11 pr-4 text-sm focus:outline-none"
						/>
					</div>

					{/* Filters */}
					<div className="flex flex-wrap items-center justify-end gap-2 ">

						{/* Date */}
						<button className="h-11 rounded-[8px] border border-[#EBEBEB] bg-white px-4 text-[14px] whitespace-nowrap text-black">
							Last 30 Days
						</button>

						{/* Status */}
						<button className="h-11 rounded-[8px] border border-[#EBEBEB] bg-white px-4 text-[14px] whitespace-nowrap text-black">
							Status: All
						</button>

						{/* Customer Type */}
						<button className="h-11 rounded-[8px] border border-[#EBEBEB] bg-white px-4 text-[14px] whitespace-nowrap text-black">
							Customer Type
						</button>

						{/* Advanced Export */}
						<button className="inline-flex items-center gap-2 h-11 rounded-[8px] border border-[#EBEBEB] bg-white px-4 text-[14px] font-medium text-primary whitespace-nowrap">
							<Image
								src="/filter1.svg"
								width={20}
								height={20}
								alt="Export"
							/>
							<span>Advanced Export</span>
						</button>

					</div>

				</div>
			</div>

			{/* Table */}
			<div className="overflow-x-auto scrollbar-hide">
				<table className="w-full text-left text-[16px] text-black/80 min-w-225 whitespace-nowrap">
					<thead className="bg-[#F4F4F4] text-black/80 font-semibold border-b border-[#F4F4F4]">
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
								<td className="px-6 py-4 font-semibold text-[#3525CD]">
									{cust.id}
								</td>
								<td className="px-6 py-4 font-medium  text-black">
									{cust.name}
								</td>
								<td className="px-6 py-4">
									<div className="text-[16px] font-medium text-black">{cust.contactName}</div>
									<div className="text-[12px] text-black/69">{cust.contactPhone}</div>
								</td>
								<td className="px-6 py-4">
									<span
										className={`inline-flex items-center gap-2 text-[12px] font-semibold px-3 py-2 rounded-full whitespace-nowrap ${getTypeBadgeStyles(
											cust.type
										)}`}
									>
										<Image
											src="/boat.svg"
											width={16}
											height={16}
											alt="Ship"
											className="shrink-0"
										/>
										<span>{cust.type}</span>
									</span>
								</td>
								<td className="px-6 py-4 font-medium text-black">
									{cust.shipments}
								</td>
								<td className="px-6 py-4 font-medium text-black">
									₹{cust.creditLimit.toLocaleString('en-IN')}
								</td>
								<td className="px-6 py-4 font-medium text-black">
									₹{cust.outstanding.toLocaleString('en-IN')}
								</td>
								<td className="px-6 py-4">
									<div className="flex items-center gap-1.5">
										<span
											className={`w-2.5 h-2.5 rounded-full ${getStatusDotColor(cust.status).dot}`}
										/>
										<span
											className={`text-sm font-medium ${getStatusDotColor(cust.status).text}`}
										>
											{cust.status}
										</span>
									</div>
								</td>
								<td className="px-6 py-4 text-center">
									<button className="text-black hover:text-gray-600 p-1.5 rounded-full hover:bg-gray-100 transition">
										<MoreVertical className="w-4 h-4" />
									</button>
								</td>
							</tr>
						))}

						{filteredCustomers.length === 0 && (
							<tr>
								<td
									colSpan={9}
									className="text-center py-12 text-gray-400 font-medium"
								>
									No customers found matching filters.
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>

			{/* Pagination */}
			<div className="p-6 flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-[#D9D9D9] text-[16px] text-black/70">
				<div>
					Results: <span className=" text-black/70">{paginatedCustomers.length.toString().padStart(2, '0')}</span> Out Of <span className=" text-black/70">{filteredCustomers.length}</span>
				</div>

				<div className="flex gap-1 items-center">
					<button
						onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
						disabled={currentPage === 1}
						className="w-[48px] h-[51px] flex items-center justify-center border-2 border-primary text-primary rounded-[8px] bg-white transition"
					>
						<ChevronLeft className="w-4 h-4" />
					</button>
					<button
						className="w-[48px] h-[51px] flex items-center justify-center rounded-[8px] border-2 border-[#E0E0E0] text-black bg-white font-semibold"
					>
						{currentPage}
					</button>
					<button
						onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
						disabled={currentPage === totalPages}
						className="w-[48px] h-[51px] flex items-center justify-center border-2 border-primary text-primary rounded-[8px] bg-white transition"
					>
						<ChevronRight className="w-4 h-4" />
					</button>
				</div>
			</div>
		</div>
	);
}
