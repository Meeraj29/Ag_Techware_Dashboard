"use client";

import React from "react";
import {
	CheckCircle,
	Shield,
	Eye,
	Download,
	Upload,
	Map,
	FileText,
	Check,
	AlertCircle,
	Truck,
	Info,
	Clock,
	Pencil,
} from "lucide-react";

export function CustomerKycDetails() {
	const completionDocs = [
		{
			name: "Business Registration Certificate",
			sub: "BRN: 201209844H",
			issue: "31 Mar 2026",
			expiry: "N/A",
			status: "Verified",
		},
		{
			name: "Tax Residency Certificate (TRC)",
			sub: "FY 2023-2024",
			issue: "01 Apr 2023",
			expiry: "31 Mar 2024",
			status: "Verified",
		},
		{
			name: "Import/Export License",
			sub: "Customs Ref: SG-33492",
			issue: "22 Nov 2021",
			expiry: "21 Nov 2026",
			status: "Verified",
		},
		{
			name: "VAT Registration Certificate",
			sub: "VAT: EU44900122",
			issue: "10 Feb 2028",
			expiry: "N/A",
			status: "Verified",
		},
	];

	const pendingDocs = [
		{
			name: "Certificate of Origin",
			due: "16 May 2026",
			status: "Pending Upload",
			dot: "bg-gray-400",
		},
		{
			name: "Packing List Document",
			due: "16 May 2026",
			status: "Awaiting Client",
			dot: "bg-gray-400",
		},
		{
			name: "Certificate of Origin",
			due: "16 May 2026",
			status: "Pending Approval",
			dot: "bg-gray-400",
		},
		{
			name: "Insurance Coverage Certificate",
			due: "16 May 2026",
			status: "Missing",
			dot: "bg-red-400",
		},
		{
			name: "Customs Declaration Form",
			due: "16 May 2026",
			status: "Pending Upload",
			dot: "bg-gray-400",
		},
	];

	const timeline = [
		{
			title: "Annual Audit Completed",
			sub: "Oct 12, 2023 \u2022 System generated",
			time: "12m ago",
			type: "success",
		},
		{
			title: "Import License Updated",
			sub: "Sep 05, 2023 \u2022 By Sarah Chen",
			time: "1h ago",
			type: "blue",
		},
		{
			title: "Document Upload: VAT Cert",
			sub: "Mar 22, 2023 \u2022 Customer Portal",
			time: "1h ago",
			type: "warning",
		},
		{
			title: "Account Created",
			sub: "Jan 10, 2020 \u2022 Global CRM Sync",
			time: "2h ago",
			type: "warning",
		},
		{
			title: "Account Created",
			sub: "Jan 10, 2020 \u2022 Global CRM Sync",
			time: "2h ago",
			type: "warning",
		},
	];

	return (
		<div className="flex flex-col gap-6">
			{/* Verification Overview */}
			<div className="bg-white rounded-[20px] p-6 border border-gray-200">
				<div className="flex justify-between items-start mb-6">
					<div className="text-gray-500 text-[13px] font-medium">
						Verification Overview
					</div>
					<Shield className="w-5 h-5 text-gray-300" />
				</div>

				<div className="flex items-center gap-4 mb-8">
					<div className="w-12 h-12 bg-[#E6F4EA] rounded-full flex items-center justify-center">
						<CheckCircle className="w-6 h-6 text-[#13803B]" />
					</div>
					<div>
						<h2 className="text-[20px] font-bold text-gray-800">Verified</h2>
						<p className="text-[13px] text-gray-500">
							Last Full Audit: Oct 12, 2023
						</p>
					</div>
				</div>

				<div className="mb-2 flex justify-between items-end">
					<span className="text-[14px] font-medium text-gray-600">
						Trust Score
					</span>
					<span className="text-[14px] font-bold text-[#13803B]">98/100</span>
				</div>
				<div className="w-full bg-gray-100 rounded-full h-2.5 mb-4">
					<div
						className="bg-[#13803B] h-2.5 rounded-full"
						style={{ width: "98%" }}
					></div>
				</div>
				<p className="text-[13px] text-gray-400 italic">
					All Mandatory Regulatory Documents Are Current And Active.
				</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">
				{/* Completion Documents */}
				<div className="bg-white rounded-[20px] p-6 border border-gray-200 min-w-0">
					<h3 className="font-bold text-[16px] text-gray-800 mb-6">
						Completion Documents
					</h3>
					<div className="overflow-x-auto scrollbar-hide">
						<table className="w-full text-left border-collapse min-w-[700px]">
							<thead>
								<tr className="bg-[#F8F9FA] border-b border-gray-100">
									<th className="py-3 px-4 text-[13px] font-medium text-gray-500 rounded-tl-[8px]">
										Document Name
									</th>
									<th className="py-3 px-4 text-[13px] font-medium text-gray-500">
										Issue Date
									</th>
									<th className="py-3 px-4 text-[13px] font-medium text-gray-500">
										Expiry
									</th>
									<th className="py-3 px-4 text-[13px] font-medium text-gray-500">
										Status
									</th>
									<th className="py-3 px-4 text-[13px] font-medium text-gray-500 rounded-tr-[8px]">
										Action
									</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-50">
								{completionDocs.map((doc, idx) => (
									<tr key={idx} className="hover:bg-gray-50/50">
										<td className="py-4 px-4">
											<div className="font-bold text-[14px] text-gray-800">
												{doc.name}
											</div>
											<div className="text-[12px] text-gray-400 mt-0.5">
												{doc.sub}
											</div>
										</td>
										<td className="py-4 px-4 text-[13px] font-semibold text-gray-700">
											{doc.issue}
										</td>
										<td className="py-4 px-4 text-[13px] font-semibold text-gray-700">
											{doc.expiry}
										</td>
										<td className="py-4 px-4">
											<span className="flex items-center gap-1.5 text-[13px] font-bold text-[#13803B]">
												<span className="w-1.5 h-1.5 rounded-full bg-[#13803B]"></span>
												{doc.status}
											</span>
										</td>
										<td className="py-4 px-4">
											<div className="flex gap-2">
												<button className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition">
													<Eye className="w-4 h-4" />
												</button>
												<button className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition">
													<Download className="w-4 h-4" />
												</button>
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>

				{/* Pending Document */}
				<div className="bg-white rounded-[20px] p-6 border border-gray-200 flex flex-col">
					<h3 className="font-bold text-[16px] text-gray-800 mb-6">
						Pending Document
					</h3>

					<div className="flex-1 flex flex-col gap-5 mb-6">
						{pendingDocs.map((doc, idx) => (
							<div key={idx} className="flex justify-between items-start">
								<div>
									<div className="font-bold text-[14px] text-gray-800">
										{doc.name}
									</div>
									<div className="text-[12px] text-gray-400 mt-0.5">
										Due date: {doc.due}
									</div>
								</div>
								<div className="flex items-center gap-1.5 mt-1">
									<span
										className={`w-1.5 h-1.5 rounded-full ${doc.dot}`}
									></span>
									<span className="text-[12px] font-medium text-gray-500">
										{doc.status}
									</span>
								</div>
							</div>
						))}
					</div>

					<button className="w-full py-2.5 rounded-[8px] border border-primary text-primary font-semibold text-[14px] hover:bg-[#F0F5FA] transition">
						Upload document
					</button>
				</div>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6">
				{/* Verification Timeline */}
				<div className="bg-white rounded-[20px] p-6 border border-gray-200">
					<h3 className="font-bold text-[16px] text-gray-800 mb-6">
						Verification Timeline
					</h3>

					<div className="flex flex-col gap-6 relative">
						<div className="absolute left-4 top-4 bottom-4 w-px bg-gray-200 z-0"></div>

						{timeline.map((item, idx) => (
							<div key={idx} className="flex gap-4 relative z-10">
								<div
									className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border-2 ${
										item.type === "success"
											? "border-[#13803B] bg-white"
											: item.type === "blue"
												? "border-[#4285F4] bg-white"
												: "border-[#F4B400] bg-white"
									}`}
								>
									{item.type === "success" && (
										<Check className="w-4 h-4 text-[#13803B]" />
									)}
									{item.type === "blue" && (
										<Truck className="w-4 h-4 text-[#4285F4]" />
									)}
									{item.type === "warning" && (
										<span className="text-[14px] font-bold text-[#F4B400]">
											!
										</span>
									)}
								</div>
								<div className="flex-1 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
									<div className="flex justify-between items-start">
										<div className="font-bold text-[14px] text-gray-800">
											{item.title}
										</div>
										<div className="text-[12px] text-gray-400">{item.time}</div>
									</div>
									<div className="text-[13px] text-gray-500 mt-1">
										{item.sub}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Business Entity Details */}
				<div className="bg-white rounded-[20px] p-6 border border-gray-200 flex flex-col">
					<div className="flex justify-between items-start mb-6">
						<h3 className="font-bold text-[16px] text-gray-800">
							Business Entity Details
						</h3>
						<button className="text-gray-400 hover:text-primary transition">
							<Pencil className="w-4 h-4" />
						</button>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
						<div className="bg-[#F8F9FA] rounded-[12px] p-4">
							<div className="text-[12px] text-gray-500 mb-1 font-medium">
								Entity Legal Name
							</div>
							<div className="font-bold text-[14px] text-gray-800">
								Private Limited Compnry
							</div>
						</div>
						<div className="bg-[#F8F9FA] rounded-[12px] p-4">
							<div className="text-[12px] text-gray-500 mb-1 font-medium">
								Primary Industry
							</div>
							<div className="font-bold text-[14px] text-gray-800">
								Electronics Manufacturing
							</div>
						</div>
						<div className="bg-[#F8F9FA] rounded-[12px] p-4">
							<div className="text-[12px] text-gray-500 mb-1 font-medium">
								Country Of Incorporation
							</div>
							<div className="font-bold text-[14px] text-gray-800">
								Singapore
							</div>
						</div>
						<div className="bg-[#F8F9FA] rounded-[12px] p-4">
							<div className="text-[12px] text-gray-500 mb-1 font-medium">
								Ultimate Parent Company
							</div>
							<div className="font-bold text-[14px] text-gray-800">
								Alliance Global Holdings
							</div>
						</div>
					</div>

					<div className="bg-[#F8F9FA] rounded-[12px] p-4 flex-1">
						<div className="text-[12px] text-gray-500 mb-1 font-medium">
							Registered Address
						</div>
						<div className="font-bold text-[14px] text-gray-800 leading-relaxed max-w-[200px]">
							12 Marina Blvd, MBFC Tower 3, Singapore 018982
						</div>
					</div>

					<div className="flex justify-end mt-4">
						<button className="flex items-center gap-1.5 text-primary text-[13px] font-bold hover:underline">
							<Map className="w-3.5 h-3.5" />
							View on Map
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
