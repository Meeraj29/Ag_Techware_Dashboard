"use client";

import React from "react";
import { useSelector } from "react-redux";
import { ReportsState } from "../../types/reports";
import { Sparkles } from "lucide-react";

export function IntelligenceInsights() {
	const insights = useSelector(
		(state: { reports: ReportsState }) => state.reports.intelligenceInsights,
	);

	if (!insights) return null;

	return (
		<div className="bg-[#0A4B9F] rounded-[24px] p-6 h-full flex flex-col text-white shadow-sm">
			<div className="flex items-center gap-2 mb-6">
				<Sparkles size={20} className="text-white" />
				<h2 className="font-bold text-lg">Logistics Intelligence Insights</h2>
			</div>

			<div className="flex flex-col gap-3 flex-1 overflow-y-auto pr-1 custom-scrollbar">
				{insights.map((insight) => (
					<div
						key={insight.id}
						className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/5"
					>
						<h3 className="font-semibold text-[15px] mb-1.5">
							{insight.title}
						</h3>
						<p className="text-sm text-blue-100 leading-relaxed opacity-90">
							{insight.description}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
