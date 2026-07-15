"use client";

import { useAppSelector } from "../../redux/hooks";

export default function PaymentDistribution() {
	const distributionData = useAppSelector(
		(state) => state.finance.paymentDistribution,
	);

	return (
		<div className="flex flex-col h-full">
			<h2 className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold text-[#000000] mb-6">
				Payment Distribution
			</h2>

			<div className="space-y-6 flex-1">
				{distributionData.map((item, idx) => (
					<div key={idx}>
						<div className="flex justify-between items-center mb-2">
							<span className="text-[14px] sm:text-[16px] text-[#000000] font-medium">
								{item.name}
							</span>
							<span
								className={`text-[16px] sm:text-[18px] font-medium ${item.textColor}`}
							>
								{item.percentage}%
							</span>
						</div>
						<div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
							<div
								className={`h-full ${item.color} rounded-full`}
								style={{ width: `${item.percentage}%` }}
							></div>
						</div>
					</div>
				))}
			</div>

			<div className="mt-4 pt-3">
				<p className="text-[14px] sm:text-[16px] text-[#000000] italic leading-relaxed">
					Operational insight: ACH payments show a 3-day faster clearing rate
					this quarter.
				</p>
			</div>
		</div>
	);
}
