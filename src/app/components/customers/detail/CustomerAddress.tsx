"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Pencil, Map, Plus, Receipt, Truck, Warehouse } from "lucide-react";
import { CustomerAddress as CustomerAddressType } from "../../../types/customers";

interface Props {
	customerId: string;
}

export function CustomerAddress({ customerId }: Props) {
	const detail = useSelector(
		(state: RootState) => state.customerDetail.details[customerId],
	);
	if (!detail) return null;

	const addresses = detail.addresses || [];

	const getIcon = (type: string) => {
		switch (type) {
			case "Billing Address":
				return <Receipt className="w-5 h-5 text-primary" />;
			case "Shipping Address":
				return <Truck className="w-5 h-5 text-primary" />;
			case "Warehouse Address":
				return <Warehouse className="w-5 h-5 text-primary" />;
			default:
				return <Receipt className="w-5 h-5 text-primary" />;
		}
	};

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{addresses.map((address: CustomerAddressType) => (
				<div
					key={address.id}
					className="bg-white rounded-[20px] p-5 shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col h-full"
				>
					<div className="flex justify-between items-start mb-4">
						<div className="flex items-center gap-2">
							{getIcon(address.type)}
							<h3 className="font-bold text-[16px] text-gray-800">
								{address.type}
							</h3>
						</div>
						<button className="text-primary hover:text-[#033a75] transition p-1">
							<Pencil className="w-4 h-4" />
						</button>
					</div>

					<div className="bg-[#F8F9FA] rounded-[16px] p-5 flex-1 mb-4">
						<p className="font-bold text-[14px] text-gray-800 mb-1">
							{address.companyName}
						</p>
						{address.addressLines.map((line, idx) => (
							<p
								key={idx}
								className="text-[13px] text-gray-600 leading-relaxed"
							>
								{line}
							</p>
						))}
					</div>

					<div className="flex justify-end mt-auto">
						<button className="flex items-center gap-1.5 text-primary text-[13px] font-bold hover:underline">
							<Map className="w-3.5 h-3.5" />
							View on Map
						</button>
					</div>
				</div>
			))}

			{/* Add New Address Card */}
			<div className="bg-white rounded-[20px] p-5 shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col h-full min-h-[220px]">
				<h3 className="font-bold text-[16px] text-gray-800 mb-4">
					Add New Address
				</h3>
				<button className="bg-[#F8F9FA] rounded-[16px] flex-1 flex items-center justify-center hover:bg-gray-100 transition border border-dashed border-gray-300">
					<Plus className="w-8 h-8 text-gray-400" />
				</button>
			</div>
		</div>
	);
}
