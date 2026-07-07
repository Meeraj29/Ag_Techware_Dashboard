"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { CreateCustomerAddress } from "../../../components/customers/create/CreateCustomerAddress";
import { CreateCustomerContacts } from "../../../components/customers/create/CreateCustomerContacts";
import { CreateCustomerCreditControlDetails } from "../../../components/customers/create/CreateCustomerCreditControlDetails";
import { CreateCustomerKycDocuments } from "../../../components/customers/create/CreateCustomerKycDocuments";

type Tab =
	| "Overview"
	| "Address"
	| "Contacts"
	| "KYC & Documents"
	| "Credit Control Details";

const TABS: Tab[] = [
	"Overview",
	"Address",
	"Contacts",
	"KYC & Documents",
	"Credit Control Details",
];

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

function CheckboxField({ label, id }: { label: string; id: string }) {
	return (
		<label htmlFor={id} className="flex items-center gap-2 cursor-pointer">
			<input
				id={id}
				type="checkbox"
				className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary accent-primary"
			/>
			<span className="text-[13px] text-gray-700">{label}</span>
		</label>
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
	const [checked, setChecked] = useState(defaultChecked ?? false);
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

export default function CreateCustomerPage() {
	const router = useRouter();
	const [activeTab, setActiveTab] = useState<Tab>("Overview");
	const tabOrder: Tab[] = [
		"Overview",
		"Address",
		"Contacts",
		"KYC & Documents",
		"Credit Control Details",
	];

	const goToNextTab = () => {
		const currentIndex = tabOrder.indexOf(activeTab);
		const nextIndex =
			currentIndex < tabOrder.length - 1 ? currentIndex + 1 : currentIndex;
		setActiveTab(tabOrder[nextIndex]);
	};

	return (
		<div className="min-h-full bg-gray-50/50">
			{/* Top Bar */}
			<div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
				<div className="flex items-center gap-3">
					<button
						onClick={() => router.back()}
						className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
					>
						<ArrowLeft className="w-4 h-4 text-gray-600" />
					</button>
					<h1 className="text-[18px] font-bold text-gray-800">
						Add Customer Details
					</h1>
				</div>
				<div className="flex items-center gap-3">
					<button
						onClick={() => router.back()}
						className="px-5 py-2 rounded-[8px] border border-[#DB4437] text-[#DB4437] text-[13px] font-bold hover:bg-red-50 transition"
					>
						Cancel
					</button>
					<button className="px-5 py-2 rounded-[8px] border border-primary text-primary text-[13px] font-bold hover:bg-blue-50 transition">
						Update
					</button>
					<button
						onClick={goToNextTab}
						className="px-5 py-2 rounded-[8px] bg-[linear-gradient(90deg,#0863BD_0%,#04458B_100%)] text-white text-[13px] font-bold hover:opacity-90 transition shadow-sm"
					>
						Next
					</button>
				</div>
			</div>

			<div className="p-6">
				{/* Tabs */}
				<div className="border-b border-gray-200 mb-8 overflow-x-auto scrollbar-hide">
					<div className="flex gap-0 min-w-max">
						{TABS.map((tab) => (
							<button
								key={tab}
								onClick={() => setActiveTab(tab)}
								className={`px-5 py-3 text-[14px] font-medium transition-all whitespace-nowrap border-b-2 ${
									activeTab === tab
										? "border-primary text-primary"
										: "border-transparent text-gray-500 hover:text-gray-800"
								}`}
							>
								{tab}
							</button>
						))}
					</div>
				</div>

				{/* Overview Tab Content */}
				{activeTab === "Overview" && (
					<div className="bg-white rounded-[16px] border border-gray-200 p-6">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
							<InputField
								label="Company Name"
								id="company-name"
								required
								placeholder="Name"
							/>
							<InputField
								label="Party Shortcode"
								id="party-shortcode"
								required
								placeholder="Party Shortcode"
							/>
							<InputField
								label="Company CIN"
								id="company-cin"
								placeholder="Enter CIN"
							/>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
							<SelectField
								label="Party Type"
								id="party-type"
								required
								placeholder="Select"
							/>
							<SelectField
								label="Currency"
								id="currency"
								required
								placeholder="Currency"
							/>
							<SelectField
								label="Email (semi-colon to separate)"
								id="email"
								placeholder="Email (comma-separated)"
							/>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
							<SelectField
								label="Import/Export"
								id="import-export"
								required
								placeholder="Import/Export"
							/>
						</div>

						{/* Checkboxes & Toggles */}
						<div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4">
							<CheckboxField label="Is Parent Company" id="is-parent-1" />
							<CheckboxField label="SEZ" id="sez" />
							<CheckboxField label="Is Registered Company" id="is-registered" />
							<CheckboxField label="Is Parent Company" id="is-parent-2" />
							<CheckboxField label="Is Parent Company" id="is-parent-3" />
							<ToggleField
								label="Group Companies"
								id="group-companies"
								defaultChecked={true}
							/>
							<ToggleField
								label="Billing Party"
								id="billing-party"
								defaultChecked={true}
							/>
						</div>
					</div>
				)}

				{activeTab === "Address" && <CreateCustomerAddress />}

				{activeTab === "Contacts" && <CreateCustomerContacts />}

				{activeTab === "KYC & Documents" && <CreateCustomerKycDocuments />}

				{activeTab === "Credit Control Details" && (
					<CreateCustomerCreditControlDetails />
				)}
			</div>
		</div>
	);
}
