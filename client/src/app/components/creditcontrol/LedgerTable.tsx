"use client";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Customer } from "../../types/creditControl";
import { Search, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export function LedgerTable() {
	const customers = useSelector(
		(state: any) => state.creditControl?.customers || [],
	);
	const [searchTerm, setSearchTerm] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 5;

	// Custom Dropdown states
	const [openDropdown, setOpenDropdown] = useState<string | null>(null);
	const [selectedDate, setSelectedDate] = useState("Last 30 Days");
	const [selectedCredit, setSelectedCredit] = useState("All");
	const [selectedPayment, setSelectedPayment] = useState("All");

	const getStatusColor = (status: string) => {
		switch (status) {
			case "Over Limit":
				return "bg-[#BA1A1A]/20 text-[#BA1A1A]";
			case "Near Limit":
				return "bg-[#F59E0B]/20 text-[#F59E0B]";
			case "Within Limit":
				return "bg-[#059669]/20 text-[#059669]";
			default:
				return "bg-gray-100 text-gray-700";
		}
	};

	const filteredCustomers = customers.filter((c: Customer) => {
		const matchesSearch =
			c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			c.id.toLowerCase().includes(searchTerm.toLowerCase());

		const matchesCredit =
			selectedCredit === "All" || c.status === selectedCredit;

		const matchesPayment =
			selectedPayment === "All" ||
			(selectedPayment === "Paid" && c.overdue === 0) ||
			(selectedPayment === "Unpaid" && c.overdue > 0);

		return matchesSearch && matchesCredit && matchesPayment;
	});

	const totalPages = Math.max(
		1,
		Math.ceil(filteredCustomers.length / pageSize),
	);
	const paginatedCustomers = filteredCustomers.slice(
		(currentPage - 1) * pageSize,
		currentPage * pageSize,
	);

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
		setCurrentPage(1); // reset to page 1 on new search
	};

	const toggleDropdown = (dropdown: string) => {
		if (openDropdown === dropdown) {
			setOpenDropdown(null);
		} else {
			setOpenDropdown(dropdown);
		}
	};

	return (
		<div className="bg-white rounded-[24px] shadow-sm border border-gray-200 mb-6 relative">
			{openDropdown && (
				<div
					className="fixed inset-0 z-40"
					onClick={() => setOpenDropdown(null)}
				/>
			)}
			<div className="p-6 flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 relative z-10">
				{/* Search */}
				<div className="relative w-full lg:w-[420px]">
					<Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />

					<input
						type="text"
						placeholder="Job ID, Company name......"
						value={searchTerm}
						onChange={handleSearchChange}
						className="w-full h-11 rounded-2xl border border-gray-200 bg-gray-50 pl-11 pr-4 text-sm placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none"
					/>
				</div>
				{/* Filters */}
				<div className="flex flex-wrap items-center gap-2">
					{/* Date Filter */}
					<div className="relative">
						<button
							onClick={() => toggleDropdown("date")}
							className="border border-[#EBEBEB] rounded-[12px] px-4 py-2.5 text-[14px] bg-white outline-none flex items-center gap-1.5 text-black font-semibold cursor-pointer hover:bg-gray-50/50"
						>
							<span>{selectedDate}</span>
							<ChevronDown className="w-4 h-4 text-black/70" />
						</button>
						{openDropdown === "date" && (
							<div className="absolute top-full left-0 mt-1 bg-white border border-[#EBEBEB] rounded-[12px] shadow-lg py-1.5 min-w-[150px] z-50">
								{["Last 30 Days", "Last 90 Days", "All Time"].map((option) => (
									<div
										key={option}
										onClick={() => {
											setSelectedDate(option);
											setOpenDropdown(null);
										}}
										className="px-4 py-2 hover:bg-[#F5F5F5] text-[14px] text-black cursor-pointer font-medium"
									>
										{option}
									</div>
								))}
							</div>
						)}
					</div>

					{/* Credit Status Filter */}
					<div className="relative">
						<button
							onClick={() => toggleDropdown("credit")}
							className="border border-[#EBEBEB] rounded-[12px] px-4 py-2.5 text-[14px] bg-white outline-none flex items-center gap-1.5 cursor-pointer hover:bg-gray-50/50"
						>
							<span className="text-black/60 font-medium">Credit Status:</span>
							<span className="text-black font-semibold">{selectedCredit}</span>
							<ChevronDown className="w-4 h-4 text-black/70" />
						</button>
						{openDropdown === "credit" && (
							<div className="absolute top-full left-0 mt-1 bg-white border border-[#EBEBEB] rounded-[12px] shadow-lg py-1.5 min-w-[180px] z-50">
								{["All", "Within Limit", "Near Limit", "Over Limit"].map(
									(option) => (
										<div
											key={option}
											onClick={() => {
												setSelectedCredit(option);
												setOpenDropdown(null);
											}}
											className="px-4 py-2 hover:bg-[#F5F5F5] text-[14px] text-black cursor-pointer font-medium"
										>
											{option}
										</div>
									),
								)}
							</div>
						)}
					</div>

					{/* Payment Status Filter */}
					<div className="relative">
						<button
							onClick={() => toggleDropdown("payment")}
							className="border border-[#EBEBEB] rounded-[12px] px-4 py-2.5 text-[14px] bg-white outline-none flex items-center gap-1.5 cursor-pointer hover:bg-gray-50/50"
						>
							<span className="text-black/60 font-medium">Payment Status:</span>
							<span className="text-black font-semibold">
								{selectedPayment}
							</span>
							<ChevronDown className="w-4 h-4 text-black/70" />
						</button>
						{openDropdown === "payment" && (
							<div className="absolute top-full left-0 mt-1 bg-white border border-[#EBEBEB] rounded-[12px] shadow-lg py-1.5 min-w-[190px] z-50">
								{["All", "Paid", "Unpaid"].map((option) => (
									<div
										key={option}
										onClick={() => {
											setSelectedPayment(option);
											setOpenDropdown(null);
										}}
										className="px-4 py-2 hover:bg-[#F5F5F5] text-[14px] text-black cursor-pointer font-medium"
									>
										{option}
									</div>
								))}
							</div>
						)}
					</div>

					<button className="text-[14px] font-medium text-[#04468D] hover:text-gray-800 whitespace-nowrap px-3 py-2.5 flex items-center gap-1.5 border border-[#D8D8D8] rounded-[12px]">
						Advanced Filters
						<Image width={14} height={14} src="/Filter.svg" alt="" />
					</button>
				</div>
			</div>
			<div className="overflow-x-auto px-6 scrollbar-hide">
				<table className="w-full min-w-[800px] lg:min-w-full border-separate border-spacing-0 text-left text-[16px] text-black/80">
					<thead>
						<tr className="bg-[#F4F4F4]  text-gray-500 font-medium whitespace-nowrap">
							<th className="pl-5 pr-7 py-3 rounded-l-[16px]">Customer</th>
							<th className="px-7 py-3">Limit</th>
							<th className="px-7 py-3">Used</th>
							<th className="px-7 py-3">Outstanding</th>
							<th className="px-7 py-3">Overdue</th>
							<th className="px-7 py-3">Status</th>
							<th className="px-7 py-3">Last Pay</th>
							<th className="px-7 py-3 rounded-r-[16px]">Actions</th>
						</tr>
					</thead>

					<tbody className="divide-y divide-gray-100">
						{paginatedCustomers.map((c: Customer) => (
							<tr key={c.id} className="hover:bg-gray-50 transition-colors">
								<td className="pl-5 pr-7 py-5 whitespace-nowrap">
									<p className="font-medium text-black text-[16px]">{c.name}</p>
									<p className="text-[14px] text-black/80">ID: {c.id}</p>
								</td>

								<td className="px-7 py-5 whitespace-nowrap text-black text-[16px]">
									₹{c.limit.toLocaleString("en-US")}
								</td>

								<td className="px-7 py-5 whitespace-nowrap text-black text-[16px]">
									₹{c.used.toLocaleString("en-US")}
								</td>

								<td className="px-7 py-5 whitespace-nowrap text-black text-[16px]">
									₹{c.outstanding.toLocaleString("en-US")}
								</td>

								<td
									className={`px-7 py-5 font-medium whitespace-nowrap ${
										c.overdue > 0
											? "text-[#BA1A1A] text-[16px]"
											: "text-black text-[16px]"
									}`}
								>
									₹{c.overdue.toLocaleString("en-US")}
								</td>

								<td className="px-7 py-5 whitespace-nowrap">
									<span
										className={`text-[12px] px-3 py-1.5 rounded-md ${getStatusColor(
											c.status,
										)}`}
									>
										{c.status}
									</span>
								</td>

								<td className="px-7 py-5 whitespace-nowrap text-[16px] text-black">
									{c.lastPay}
								</td>

								<td className="px-7 py-5 whitespace-nowrap">
									<button className=" flex items-center justify-center  p-2">
										<Image width={32} height={32} src="/Eye.svg" alt="View" />
									</button>
								</td>
							</tr>
						))}

						{paginatedCustomers.length === 0 && (
							<tr>
								<td colSpan={8} className="py-8 text-center text-gray-500">
									{searchTerm
										? `No records found matching "${searchTerm}"`
										: "No records available."}
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
			<div className="p-7 flex justify-between items-center text-[16px] text-black/70 border-t border-[#D9D9D9]">
				<span>
					Results:{" "}
					<span className="font-semibold text-black">
						{Math.min(currentPage * pageSize, filteredCustomers.length)}
					</span>{" "}
					Out Of{" "}
					<span className="font-semibold text-black">
						{filteredCustomers.length}
					</span>
				</span>
				<div className="flex gap-1 items-center">
					<button
						onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
						disabled={currentPage === 1}
						className="w-8 h-8 flex items-center justify-center border-2 border-primary text-primary rounded-[8px] bg-white transition disabled:cursor-not-allowed disabled:opacity-50"
					>
						<ChevronLeft className="w-4 h-4" />
					</button>
					{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
						<button
							key={page}
							onClick={() => setCurrentPage(page)}
							className={`w-8 h-8 flex items-center justify-center rounded-[8px] text-[14px] font-medium transition ${
								page === currentPage
									? "border border-[#E0E0E0] text-black bg-white font-semibold"
									: "border border-transparent text-gray-500 hover:border-gray-200 hover:text-black"
							}`}
						>
							{page}
						</button>
					))}
					<button
						onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
						disabled={currentPage === totalPages}
						className="w-8 h-8 flex items-center justify-center border-2 border-primary text-primary rounded-[8px] bg-white transition disabled:cursor-not-allowed disabled:opacity-50"
					>
						<ChevronRight className="w-4 h-4" />
					</button>
				</div>
			</div>
		</div>
	);
}
