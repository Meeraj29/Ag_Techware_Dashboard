"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

function SelectField({
	label,
	id,
	required,
	placeholder,
}: {
	label: string;
	id: string;
	required?: boolean;
	placeholder: string;
}) {
	return (
		<div className="flex flex-col gap-1.5">
			<label htmlFor={id} className="text-[13px] font-semibold text-gray-700">
				{label}
				{required && <span className="text-red-500 ml-0.5">*</span>}
			</label>
			<div className="relative">
				<select
					id={id}
					defaultValue=""
					className="w-full appearance-none bg-[#F8F9FA] border border-gray-200 rounded-[8px] px-3 py-2.5 text-[13px] text-gray-400 focus:outline-none focus:border-primary transition pr-8"
				>
					<option value="" disabled>
						{placeholder}
					</option>
				</select>
				<ChevronDown className="w-4 h-4 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
			</div>
		</div>
	);
}

function InputField({
	label,
	id,
	required,
	placeholder,
}: {
	label: string;
	id: string;
	required?: boolean;
	placeholder: string;
}) {
	return (
		<div className="flex flex-col gap-1.5">
			<label htmlFor={id} className="text-[13px] font-semibold text-gray-700">
				{label}
				{required && <span className="text-red-500 ml-0.5">*</span>}
			</label>
			<input
				id={id}
				type="text"
				placeholder={placeholder}
				className="w-full bg-[#F8F9FA] border border-gray-200 rounded-[8px] px-3 py-2.5 text-[13px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-primary transition"
			/>
		</div>
	);
}

function ToggleField({
	label,
	id,
	defaultChecked,
}: {
	label: string;
	id: string;
	defaultChecked?: boolean;
}) {
	const [checked, setChecked] = React.useState(defaultChecked ?? false);
	return (
		<div className="flex items-center gap-2">
			<button
				id={id}
				onClick={() => setChecked(!checked)}
				className={`relative inline-flex h-5 w-9 shrink-0 rounded-full transition-colors ${checked ? "bg-primary" : "bg-gray-300"}`}
			>
				<span
					className={`inline-block h-4 w-4 mt-0.5 rounded-full bg-white shadow transition-transform ${checked ? "translate-x-4" : "translate-x-0.5"}`}
				/>
			</button>
			<span className="text-[13px] text-gray-700">{label}</span>
		</div>
	);
}

export function CreateCustomerAddress() {
	return (
		<div className="bg-white rounded-[16px] border border-gray-200 p-6">
			{/* Address badge + Add Address button */}
			<div className="flex items-center justify-between mb-6">
				<span className="px-3 py-1 text-[13px] font-semibold bg-gray-100 text-gray-700 rounded-[6px] border border-gray-200">
					Address 1
				</span>
				<button className="px-4 py-2 rounded-[8px] border border-primary text-primary text-[13px] font-bold hover:bg-blue-50 transition">
					Add Address
				</button>
			</div>

			{/* Row 1: Branch Name | Radio | PIC Email */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
				<InputField
					label="Branch Name"
					id="branch-name"
					required
					placeholder="Branch Name"
				/>

				<div className="flex flex-col gap-1.5 justify-end">
					<div className="flex flex-wrap items-center gap-6 py-2.5">
						<label className="flex items-center gap-2 cursor-pointer text-[13px] text-gray-700">
							<input
								type="radio"
								name="resident-type"
								value="parent"
								className="accent-primary"
							/>
							Is Parent Company
						</label>
						<label className="flex items-center gap-2 cursor-pointer text-[13px] text-gray-700">
							<input
								type="radio"
								name="resident-type"
								value="non-resident"
								defaultChecked
								className="accent-primary"
							/>
							Non Resident
						</label>
					</div>
				</div>

				<InputField
					label="PIC Email ID"
					id="pic-email"
					placeholder="PIC Email ID"
				/>
			</div>

			{/* Row 2: Country | Bank Name + | Account No */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
				<SelectField label="Country" id="country" placeholder="Country" />

				<div className="flex flex-col gap-1.5">
					<label
						htmlFor="bank-name"
						className="text-[13px] font-semibold text-gray-700"
					>
						Bank Name
					</label>
					<div className="flex gap-2">
						<div className="relative flex-1">
							<select
								id="bank-name"
								defaultValue=""
								className="w-full appearance-none bg-[#F8F9FA] border border-gray-200 rounded-[8px] px-3 py-2.5 text-[13px] text-gray-400 focus:outline-none focus:border-primary transition pr-8"
							>
								<option value="" disabled>
									Bank Name
								</option>
							</select>
							<ChevronDown className="w-4 h-4 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
						</div>
						<button className="w-9 h-10 shrink-0 flex items-center justify-center rounded-[8px] border border-gray-200 bg-[#F8F9FA] text-gray-500 hover:bg-gray-100 transition text-[18px] font-bold">
							+
						</button>
					</div>
				</div>

				<InputField
					label="Account No."
					id="account-no"
					required
					placeholder="ACC Number"
				/>
			</div>

			{/* Row 3: Remarks | PIC | PIC Phone */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
				<InputField label="Remarks" id="remarks" placeholder="Remark" />
				<InputField label="PIC (Person In Charge)" id="pic" placeholder="PIC" />
				<InputField
					label="PIC Phone No"
					id="pic-phone"
					placeholder="PIC Phone No"
				/>
			</div>

			{/* Row 4: Address textarea | Active Flag | KYC Flag */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
				<div className="flex flex-col gap-1.5">
					<label
						htmlFor="address"
						className="text-[13px] font-semibold text-gray-700"
					>
						Address <span className="text-red-500">*</span>
					</label>
					<textarea
						id="address"
						placeholder="Address"
						rows={4}
						className="w-full bg-[#F8F9FA] border border-gray-200 rounded-[8px] px-3 py-2.5 text-[13px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-primary transition resize-none"
					/>
				</div>

				<div className="flex flex-col justify-end gap-3 pb-1">
					<ToggleField
						label="Active Flag"
						id="active-flag"
						defaultChecked={true}
					/>
				</div>

				<div className="flex flex-col justify-end gap-3 pb-1">
					<ToggleField label="KYC Flag" id="kyc-flag" defaultChecked={false} />
				</div>
			</div>
		</div>
	);
}
