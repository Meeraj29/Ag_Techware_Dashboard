"use client";

import Image from "next/image";
import { Maximize2, Wind, CheckCircle2 } from "lucide-react";
import transportMapImg from "../../assets/transportmap.png";

export default function TransportationPerformance() {
	return (
		<div className="grid gap-6 mt-6">
			<div className="flex flex-col lg:flex-row gap-6">
				{/* On-Time Performance */}
				<div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-row items-center justify-between gap-6 flex-1">
					<div className="flex-1">
						<h2 className="text-lg font-semibold text-[#000000] mb-2">
							On-Time Performance
						</h2>
						<p className="text-md font-regular text-[#000000] mb-6">
							Across all active corridors, efficiency is trending{" "}
							<span className="text-[#059669] font-medium">upward by 2.4%</span>
							.
						</p>
						<button className="px-4 py-2 border-2 border-primary text-primary font-semibold text-sm rounded-lg hover:bg-primary hover:text-white transition-colors">
							View Details
						</button>
					</div>

					{/* Simple Donut Chart Representation */}
					<div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
						<svg
							className="w-full h-full transform -rotate-90"
							viewBox="0 0 36 36"
						>
							<circle
								cx="18"
								cy="18"
								r="15.91549430918954"
								fill="transparent"
								stroke="#E5E7EB"
								strokeWidth="3"
							></circle>
							<circle
								cx="18"
								cy="18"
								r="15.91549430918954"
								fill="transparent"
								stroke="#044890"
								strokeWidth="3"
								strokeDasharray="80 20"
							></circle>
						</svg>
						<div className="absolute inset-0 flex items-center justify-center">
							<span className="text-sm font-bold text-gray-900">80%</span>
						</div>
					</div>
				</div>

				{/* Regional Performance Distribution */}
				<div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex-1">
					<h2 className="text-lg font-semibold text-[#000000] mb-6">
						Regional Performance Distribution
					</h2>
					<div className="space-y-6">
						<div>
							<div className="flex justify-between text-sm font-medium mb-2">
								<span className="text-[#000000]">North America (NA)</span>
								<span className="text-[#059669]">99.1%</span>
							</div>
							<div className="w-full bg-gray-200 rounded-full h-2">
								<div
									className="bg-[#10B981] h-2 rounded-full"
									style={{ width: "99.1%" }}
								></div>
							</div>
						</div>

						<div>
							<div className="flex justify-between text-sm font-medium mb-2">
								<span className="text-[#000000]">Europe (EMEA)</span>
								<span className="text-[#059669]">98.4%</span>
							</div>
							<div className="w-full bg-gray-200 rounded-full h-2 flex">
								<div
									className="bg-[#10B981] h-2 rounded-full"
									style={{ width: "98.4%" }}
								></div>
							</div>
						</div>

						<div>
							<div className="flex justify-between text-sm font-medium mb-2">
								<span className="text-[#000000]">Asia-Pacific (APAC)</span>
								<span className="text-[#F59E0B]">92.7%</span>
							</div>
							<div className="w-full bg-gray-200 rounded-full h-2">
								<div
									className="bg-[#F59E0B] h-2 rounded-full"
									style={{ width: "92.7%" }}
								></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
