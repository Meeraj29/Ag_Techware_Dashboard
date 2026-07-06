"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { AlertTriangle, Wallet, CreditCard, Layers } from "lucide-react";

export default function FastagStats() {
	const { fastagDashboardStats } = useSelector(
		(state: RootState) => state.fleet,
	);

	const {
		totalBalance,
		monthlySpend,
		additionalExpenses,
		totalBalanceTrend,
		monthlySpendTrend,
		additionalExpensesTrend,
		lowBalanceVehicles,
	} = fastagDashboardStats;

	const trendClass = (trend: string) =>
		trend.startsWith("⬇")
			? "bg-red-50 border border-red-100 text-red-600"
			: "bg-amber-50 border border-amber-100 text-amber-600";

	return (
		<div className="mt-4 space-y-4">
			{/* Critical Alert Banner */}
			<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 rounded-xl bg-[#FFDAD6] border border-red-100 p-4 text-xs">
				<div className="flex gap-3 items-start">
					<div className="rounded-lg bg-[#FFDAD6] p-2 text-red-600 mt-0.5 sm:mt-0">
						<AlertTriangle className="h-4 w-4" />
					</div>
					<div>
						<span className="font-bold text-red-800 uppercase tracking-wide">
							CRITICAL: Low FASTag Balance
						</span>
						<p className="text-gray-500 mt-0.5">
							{lowBalanceVehicles.length} vehicles (
							{lowBalanceVehicles.join(", ")}) are below threshold of ₹500.
						</p>
					</div>
				</div>
				<button className="text-xs font-bold text-red-600 hover:underline shrink-0 pl-11 sm:pl-0">
					Recharge All Now
				</button>
			</div>

			{/* 3 Metric Cards Row */}
			<div className="grid gap-4 sm:grid-cols-3">
				{/* Card 1 – Total FASTag Balance */}
				<div className="flex justify-between rounded-xl bg-[#F4F4F4] border border-[#EDEDED] p-5 h-[105px]">
					<div className="flex flex-col justify-between">
						<div>
							<p className="text-[16px] font-medium text-black uppercase tracking-wider">
								TOTAL FASTAG BALANCE
							</p>
							<p className="text-[26px] font-semibold text-black mt-1">
								{totalBalance}
							</p>
						</div>
						<p className="text-[12px] text-[#515F74]">Across 84 active tags</p>
					</div>
					<div className="flex flex-col justify-between items-end">
						<div className="rounded-xl bg-white p-2 shadow-sm border border-gray-100 text-gray-400">
							<Wallet className="h-4 w-4" />
						</div>
						<span
							className={`rounded-full px-2 py-0.5 text-[10px] font-bold flex items-center gap-0.5 ${trendClass(totalBalanceTrend)}`}
						>
							{totalBalanceTrend}
						</span>
					</div>
				</div>

				{/* Card 2 – Monthly Spend */}
				<div className="flex justify-between rounded-xl bg-[#f8f9fa] border border-gray-100 p-5 h-[105px]">
					<div className="flex flex-col justify-between">
						<div>
							<p className="text-[16px] font-medium text-black uppercase tracking-wider">
								MONTHLY SPEND (TOLLS)
							</p>
							<p className="text-[26px] font-semibold text-black mt-1">
								{monthlySpend}
							</p>
						</div>
						<p className="text-[12px] text-[#515F74]">October 2023</p>
					</div>
					<div className="flex flex-col justify-between items-end">
						<div className="rounded-xl bg-white p-2 shadow-sm border border-gray-100 text-gray-400">
							<CreditCard className="h-4 w-4" />
						</div>
						<span
							className={`rounded-full px-2 py-0.5 text-[10px] font-bold flex items-center gap-0.5 ${trendClass(monthlySpendTrend)}`}
						>
							{monthlySpendTrend}
						</span>
					</div>
				</div>

				{/* Card 3 – Additional Expenses */}
				<div className="flex justify-between rounded-xl bg-[#f8f9fa] border border-gray-100 p-5 h-[105px]">
					<div className="flex flex-col justify-between">
						<div>
							<p className="text-[16px] font-medium text-black uppercase tracking-wider">
								ADDITIONAL EXPENSES
							</p>
							<p className="text-[26px] font-semibold text-black mt-1">
								{additionalExpenses}
							</p>
						</div>
						<p className="text-[12px] text-[#515F74]">Fuel &amp; Parking</p>
					</div>
					<div className="flex flex-col justify-between items-end">
						<div className="rounded-xl bg-white p-2 shadow-sm border border-gray-100 text-gray-400">
							<Layers className="h-4 w-4" />
						</div>
						<span
							className="rounded-full bg-emerald-50 border border-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-600 flex items-center gap-0.5"
						>
							{additionalExpensesTrend}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
