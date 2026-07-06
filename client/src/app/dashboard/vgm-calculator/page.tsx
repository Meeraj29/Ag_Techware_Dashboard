"use client";

import VGMOverview from "../../components/vgm-calculator/VGMOverview";
import VGMCalculatorForm from "../../components/vgm-calculator/VGMCalculatorForm";
import VGMActiveShipments from "../../components/vgm-calculator/VGMActiveShipments";

export default function VGMCalculatorPage() {
	return (
		<div className="w-full space-y-4 p-4 sm:p-4 bg-[#F4F4F4] min-h-[calc(100vh-80px)] overflow-y-auto scrollbar-hide">
			{/* Top Section */}
			<div className="bg-white rounded-[20px] shadow-sm border border-gray-100 p-4 sm:p-4">
				<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
					<div>
						<h1 className="text-[20px] sm:text-[20px] font-semibold text-[#000000]">
							VGM Calculator Overview
						</h1>
						<p className="text-[16px] text-[#000000B2] font-regular mt-0.5">
							SOLAS Compliant Verified Gross Mass Management
						</p>
					</div>
					<button className="bg-gradiate text-white px-5 py-2.5 rounded-lg text-[16px] font-medium transition-colors whitespace-nowrap w-full sm:w-auto">
						Export Audit
					</button>
				</div>
				<VGMOverview />
			</div>

			{/* Main Section */}
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
				{/* Left Column - Form */}
				<div className="lg:col-span-4 xl:col-span-5 bg-white rounded-[20px] shadow-sm border border-gray-100 p-4 sm:p-5">
					<VGMCalculatorForm />
				</div>

				{/* Right Column - Table */}
				<div className="lg:col-span-8 xl:col-span-7 bg-white rounded-[20px] shadow-sm border border-gray-100 p-4 sm:p-5">
					<VGMActiveShipments />
				</div>
			</div>
		</div>
	);
}
