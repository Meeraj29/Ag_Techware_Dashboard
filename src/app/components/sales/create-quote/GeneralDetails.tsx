"use client";

import { Calendar, ChevronDown } from "lucide-react";
import { useState, useRef } from "react";

interface FieldProps {
	label: string;
	type?: "select" | "date" | "text";
	placeholder: string;
	required?: boolean;
}

function FormField({
	label,
	type = "select",
	placeholder,
	required = true,
}: FieldProps) {
	const [dateFocused, setDateFocused] = useState(false);
	const [dateValue, setDateValue] = useState("");
	const dateRef = useRef<HTMLInputElement>(null);

	return (
		<div className="flex flex-col gap-2">
			<label className="text-base font-medium text-black">
				{label} {required && <span className="text-[#BA1A1A]">*</span>}
			</label>
			<div className="relative">
				{type === "select" && (
					<>
						<select
							defaultValue=""
							className="w-full h-11 px-4 bg-[#F5F5F5] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-gray-700 appearance-none cursor-pointer text-sm font-medium"
						>
							<option value="" disabled className="text-gray-400">
								{placeholder}
							</option>
							<option value="1">Option 1</option>
							<option value="2">Option 2</option>
						</select>
						<ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-900 pointer-events-none font-bold" />
					</>
				)}

				{type === "date" && (
					<>
						<input
							ref={dateRef}
							type={dateFocused || dateValue ? "date" : "text"}
							placeholder={placeholder}
							value={dateValue}
							onFocus={() => {
								setDateFocused(true);
								setTimeout(() => {
									try {
										dateRef.current?.showPicker();
									} catch (e) {}
								}, 10);
							}}
							onBlur={() => setDateFocused(false)}
							onChange={(e) => setDateValue(e.target.value)}
							className={`w-full h-11 px-4 bg-[#F5F5F5] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-gray-700 text-sm font-medium ${!(dateFocused || dateValue) ? "placeholder:text-gray-400 placeholder:tracking-widest" : ""} [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer`}
						/>
						<Calendar className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#075FB7] pointer-events-none" />
					</>
				)}

				{type === "text" && (
					<input
						type="text"
						placeholder={placeholder}
						className="w-full h-11 px-4 bg-[#F5F5F5] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-gray-700 text-sm font-medium placeholder:text-gray-400"
					/>
				)}
			</div>
		</div>
	);
}

export default function GeneralDetails() {
	const fields: FieldProps[] = [
		{ label: "Trade Type", type: "select", placeholder: "Choose Category" },
		{ label: "Valid From", type: "date", placeholder: "__/__/___" },
		{ label: "Valid To", type: "date", placeholder: "__/__/___" },

		{ label: "Shipper", type: "select", placeholder: "Choose shipper" },
		{ label: "Branch", type: "select", placeholder: "Choose branch" },
		{ label: "Carrier", type: "select", placeholder: "Choose carrier" },

		{ label: "Vessel Name", type: "select", placeholder: "Select Vessel" },
		{ label: "Voyage No.", type: "text", placeholder: "Enter Number" },
		{
			label: "Place Of Carrier Receipt",
			type: "select",
			placeholder: "Choose location",
		},

		{
			label: "Port of Loading",
			type: "select",
			placeholder: "Select Location",
		},
		{
			label: "Estimated Time Of Departure",
			type: "date",
			placeholder: "__/__/___",
		},
		{
			label: "Port of Destination",
			type: "select",
			placeholder: "Choose location",
		},

		{
			label: "Estimated Time Of Arrival",
			type: "date",
			placeholder: "__/__/___",
		},
		{
			label: "Place Of Carrier Delivery",
			type: "select",
			placeholder: "Choose location",
		},
		{
			label: "Destination Port Free Days",
			type: "select",
			placeholder: "Choose location",
			required: false,
		},

		{
			label: "Origin Carrier Free Days",
			type: "select",
			placeholder: "Choose location",
			required: false,
		},
		{
			label: "Destination Carrier Free Days",
			type: "select",
			placeholder: "Choose location",
			required: false,
		},
		{ label: "Local Currency", type: "select", placeholder: "INR" },
	];

	return (
		<div className="w-full mb-8">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
				{fields.map((field, idx) => (
					<FormField key={idx} {...field} />
				))}
			</div>
		</div>
	);
}
