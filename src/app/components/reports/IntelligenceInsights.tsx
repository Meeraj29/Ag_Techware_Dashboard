"use client";

import React from 'react';
import { useSelector } from 'react-redux';
import { ReportsState } from '../../types/reports';
import { Sparkles } from 'lucide-react';
import Image from 'next/image';
export function IntelligenceInsights() {
	const insights = useSelector(
		(state: { reports: ReportsState }) => state.reports.intelligenceInsights,
	);

	if (!insights) return null;

	return (
		<div className="bg-linear-to-r from-[#0863BD] to-[#04458B] rounded-[24px] p-6 min-h-[350px] lg:h-[450px] flex flex-col text-white shadow-sm">
			<div className="flex items-center gap-2 mb-6">
				<Image src='/logistic.svg' alt='light' width={20} height={20} />
				<h2 className="font-bold text-[20px]">Logistics Intelligence Insights</h2>
			</div>

			<div className="flex flex-col gap-3 flex-1 overflow-y-auto pr-1 scrollbar-hide">
				{insights.map((insight) => (
					<div key={insight.id} className="bg-white/20 rounded-[8px] p-4 backdrop-blur-sm border border-white/10">
						<h3 className="font-semibold text-[16px] mb-1.5">{insight.title}</h3>
						<p className="text-[12px] text-white/80 leading-relaxed opacity-90">
							{insight.description}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
