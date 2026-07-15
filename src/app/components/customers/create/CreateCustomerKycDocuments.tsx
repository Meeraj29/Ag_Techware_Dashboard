"use client";

import React from "react";
import { Upload } from "lucide-react";

function UploadArea({ label, inputId }: { label: string; inputId: string }) {
	return (
		<div>
			<label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-2">
				{label}
			</label>
			<input
				type="text"
				placeholder={
					label === "COMPANY REGISTRATION NO"
						? "Company Registration No"
						: "Tax Id"
				}
				className="w-full bg-[#F8F9FA] border border-gray-200 rounded-[8px] px-3 py-2.5 text-[13px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-primary transition mb-3"
			/>
			<div className="flex gap-3 items-center">
				<label
					htmlFor={inputId}
					className="flex-1 flex items-center justify-center gap-2 border border-dashed border-gray-300 rounded-[8px] py-3 px-4 text-[13px] text-gray-400 cursor-pointer hover:bg-gray-50 transition"
				>
					<Upload className="w-4 h-4" />
					Click or drag files to upload
					<input id={inputId} type="file" className="hidden" />
				</label>
				<button className="px-4 py-3 rounded-[8px] border border-primary text-primary text-[13px] font-bold hover:bg-blue-50 transition whitespace-nowrap">
					Upload Document
				</button>
			</div>
		</div>
	);
}

export function CreateCustomerKycDocuments() {
	return (
		<div className="bg-white rounded-[16px] border border-gray-200 p-6">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
				<UploadArea label="COMPANY REGISTRATION NO" inputId="upload-reg" />
				<UploadArea label="TAX ID" inputId="upload-tax" />
			</div>

			<label className="flex items-center gap-2 cursor-pointer">
				<input
					type="checkbox"
					className="w-4 h-4 rounded border-gray-300 accent-primary"
				/>
				<span className="text-[13px] font-semibold text-gray-700">
					Complete KYC
				</span>
			</label>
		</div>
	);
}
