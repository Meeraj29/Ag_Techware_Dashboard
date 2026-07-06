import { Toggle } from "@/app/ui/Toggle";

interface BasicDetailsFormProps {
	data: any;
	onChange: (data: any) => void;
}

export default function BasicDetailsForm({
	data,
	onChange,
}: BasicDetailsFormProps) {
	const InputSelect = ({
		label,
		required,
		value,
		field,
	}: {
		label: string;
		required?: boolean;
		value: string;
		field: string;
	}) => (
		<div className="flex flex-col gap-1.5">
			<label className="text-[13px] font-medium text-gray-700">
				{label} {required && <span className="text-red-500">*</span>}
			</label>
			<select
				value={value}
				onChange={(e) => onChange({ ...data, [field]: e.target.value })}
				className="w-full bg-[#F3F4F6] text-gray-600 rounded-lg px-4 py-3 text-[13px] border border-transparent focus:border-[#075FB7] focus:ring-1 focus:ring-[#075FB7] outline-none appearance-none"
			>
				<option value="">Select</option>
				<option value="Option 1">Option 1</option>
				<option value="Option 2">Option 2</option>
			</select>
		</div>
	);

	const InputText = ({
		label,
		required,
		value,
		field,
	}: {
		label: string;
		required?: boolean;
		value: string;
		field: string;
	}) => (
		<div className="flex flex-col gap-1.5">
			<label className="text-[13px] font-medium text-gray-700">
				{label} {required && <span className="text-red-500">*</span>}
			</label>
			<input
				type="text"
				value={value}
				placeholder="Select"
				onChange={(e) => onChange({ ...data, [field]: e.target.value })}
				className="w-full bg-[#F3F4F6] text-gray-900 placeholder:text-gray-500 rounded-lg px-4 py-3 text-[13px] border border-transparent focus:border-[#075FB7] focus:ring-1 focus:ring-[#075FB7] outline-none"
			/>
		</div>
	);

	return (
		<div className="bg-white p-6 rounded-2xl shadow-sm mb-6">
			<h2 className="text-base font-bold text-gray-900 mb-6">Basic Details</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<InputSelect
					label="Freight Type"
					required
					value={data.freightType || ""}
					field="freightType"
				/>
				<InputSelect
					label="Load Type"
					required
					value={data.loadType || ""}
					field="loadType"
				/>
				<InputSelect
					label="Shipment Type"
					required
					value={data.shipmentType || ""}
					field="shipmentType"
				/>

				<InputSelect
					label="Consignee"
					required
					value={data.consignee || ""}
					field="consignee"
				/>
				<InputSelect
					label="Agent"
					required
					value={data.agent || ""}
					field="agent"
				/>
				<InputSelect
					label="Billing Party"
					value={data.billingParty || ""}
					field="billingParty"
				/>

				<InputText
					label="Booking Ref No."
					value={data.bookingRef1 || ""}
					field="bookingRef1"
				/>
				<InputSelect
					label="Branch"
					required
					value={data.branch || ""}
					field="branch"
				/>
				<InputSelect
					label="Multiple Shipper"
					value={data.multipleShipper || ""}
					field="multipleShipper"
				/>

				<InputSelect
					label="Multiple Consignee"
					value={data.multipleConsignee || ""}
					field="multipleConsignee"
				/>
				<InputSelect
					label="Billing Branch"
					value={data.billingBranch || ""}
					field="billingBranch"
				/>
				<InputSelect
					label="Shipper"
					required
					value={data.shipper || ""}
					field="shipper"
				/>

				<InputText
					label="Booking Ref No."
					value={data.bookingRef2 || ""}
					field="bookingRef2"
				/>

				<div className="flex flex-col gap-1.5 pt-1">
					<label className="text-[13px] font-medium text-gray-700 mb-2">
						Is Customs Only
					</label>
					<Toggle
						checked={data.isCustomsOnly || false}
						onChange={(c) => onChange({ ...data, isCustomsOnly: c })}
					/>
				</div>

				<div className="flex flex-col gap-1.5 pt-1">
					<label className="text-[13px] font-medium text-gray-700 mb-2">
						Is GRN Required
					</label>
					<Toggle
						checked={data.isGrnRequired || false}
						onChange={(c) => onChange({ ...data, isGrnRequired: c })}
					/>
				</div>

				<div className="flex flex-col gap-1.5 pt-1">
					<label className="text-[13px] font-medium text-gray-700 mb-2">
						Is Transmission Required
					</label>
					<Toggle
						checked={data.isTransmissionRequired || false}
						onChange={(c) => onChange({ ...data, isTransmissionRequired: c })}
						labelLeft="No"
						labelRight="Yes"
					/>
				</div>
			</div>
		</div>
	);
}
