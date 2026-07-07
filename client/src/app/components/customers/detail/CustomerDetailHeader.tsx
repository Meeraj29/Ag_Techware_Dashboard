"use client";

import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { ChevronRight, Pencil, Plus } from "lucide-react";

interface Props {
	customerId: string;
}

export function CustomerDetailHeader({ customerId }: Props) {
	const detail = useSelector(
		(state: RootState) => state.customerDetail.details[customerId],
	);
	if (!detail) return null;

	const statusColors: Record<string, string> = {
		Active: "bg-[#E6F4EA] text-[#1E8449]",
		Warning: "bg-[#FEF3C7] text-[#B45309]",
		Hold: "bg-[#FEE2E2] text-[#DC2626]",
	};

	return (
		<div className="mb-6">
			{/* Breadcrumb */}
			<div className="flex items-center gap-1.5 text-[14px] text-black/50 mb-4">
				<Link
					href="/dashboard/customers"
					className="hover:text-primary transition"
				>
					Customer
				</Link>
				<ChevronRight className="w-3.5 h-3.5" />
				<span className="text-primary font-medium">Customer Details</span>
			</div>

			{/* Title row */}
			<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
				<div>
					<div className="flex items-center gap-3 flex-wrap">
						<h1 className="text-[24px] font-bold text-black">{detail.name}</h1>
						<span
							className={`text-[12px] font-semibold px-2.5 py-1 rounded-full ${statusColors[detail.status]}`}
						>
							● {detail.status.toUpperCase()}
						</span>
					</div>
					<p className="text-[14px] text-black/50 mt-1">
						ID: {detail.id} &nbsp;•&nbsp; Registered: {detail.registeredDate}
					</p>
				</div>
				<div className="flex items-center gap-3">
					<button className="flex items-center gap-2 px-4 py-2.5 border border-[#D0D5DD] rounded-[10px] text-[14px] font-medium text-black hover:bg-gray-50 transition">
						<Pencil className="w-4 h-4" />
						Edit Customer
					</button>
					<button className="flex items-center gap-2 px-4 py-2.5 bg-primary rounded-[10px] text-[14px] font-semibold text-white hover:bg-[#033a75] transition">
						<Plus className="w-4 h-4" />
						New Jobs
					</button>
				</div>
			</div>
		</div>
	);
}
