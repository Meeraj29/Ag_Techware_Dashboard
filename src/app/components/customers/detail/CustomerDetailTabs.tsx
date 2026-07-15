"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store";
import { setActiveTab } from "../../../redux/features/customerDetailSlice";

const TABS = [
	"Overview",
	"Address",
	"KYC Details",
	"Credit Control",
	"Documents",
	"Drawback Details",
];

export function CustomerDetailTabs() {
	const dispatch = useDispatch();
	const activeTab = useSelector(
		(state: RootState) => state.customerDetail.activeTab,
	);

	return (
		<div className="border-b border-gray-200 mb-6 overflow-x-auto scrollbar-hide -mx-4 px-4 lg:-mx-8 lg:px-8">
			<div className="flex gap-6 min-w-max">
				{TABS.map((tab) => (
					<button
						key={tab}
						onClick={() => dispatch(setActiveTab(tab))}
						className={`pb-3 pt-3 text-[14px] font-medium transition-all whitespace-nowrap border-b-2 ${
							activeTab === tab
								? "border-primary text-primary"
								: "border-transparent text-black/50 hover:text-black"
						}`}
					>
						{tab}
					</button>
				))}
			</div>
		</div>
	);
}
