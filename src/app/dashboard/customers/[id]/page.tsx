"use client";

import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { setSelectedCustomer } from "../../../redux/features/customerDetailSlice";
import { CustomerDetailHeader } from "../../../components/customers/detail/CustomerDetailHeader";
import { CustomerDetailStats } from "../../../components/customers/detail/CustomerDetailStats";
import { CustomerDetailTabs } from "../../../components/customers/detail/CustomerDetailTabs";
import { EntityInformation } from "../../../components/customers/detail/EntityInformation";
import { AccountHealth } from "../../../components/customers/detail/AccountHealth";
import { OperationalTimeline } from "../../../components/customers/detail/OperationalTimeline";
import { InternalNotes } from "../../../components/customers/detail/InternalNotes";
import { CustomerAddress } from "../../../components/customers/detail/CustomerAddress";
import { CustomerKycDetails } from "../../../components/customers/detail/CustomerKycDetails";
import { CustomerCreditControl } from "../../../components/customers/detail/CustomerCreditControl";
import { CustomerDocuments } from "../../../components/customers/detail/CustomerDocuments";

export default function CustomerDetailPage() {
	const params = useParams();
	const customerId = params.id as string;
	const dispatch = useDispatch();

	const detail = useSelector(
		(state: RootState) => state.customerDetail.details[customerId],
	);
	const activeTab = useSelector(
		(state: RootState) => state.customerDetail.activeTab,
	);

	useEffect(() => {
		if (customerId) {
			dispatch(setSelectedCustomer(customerId));
		}
	}, [customerId, dispatch]);

	if (!detail) {
		return (
			<div className="p-4 lg:p-8 bg-gray-50/50 min-h-full flex items-center justify-center">
				<p className="text-gray-500">Customer not found.</p>
			</div>
		);
	}

	return (
		<div className="p-4 lg:p-8 bg-gray-50/50 min-h-full w-full max-w-full overflow-x-hidden">
			<CustomerDetailHeader customerId={customerId} />
			<CustomerDetailStats customerId={customerId} />
			<CustomerDetailTabs />

			{activeTab === "Overview" && (
				<div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
					{/* Left Column */}
					<div className="flex flex-col gap-6 min-w-0">
						<EntityInformation customerId={customerId} />
						<OperationalTimeline customerId={customerId} />
					</div>

					{/* Right Column */}
					<div className="flex flex-col gap-6">
						<AccountHealth customerId={customerId} />
						<InternalNotes customerId={customerId} />
					</div>
				</div>
			)}

			{activeTab === "Address" && <CustomerAddress customerId={customerId} />}

			{activeTab === "KYC Details" && <CustomerKycDetails />}

			{activeTab === "Credit Control" && <CustomerCreditControl />}

			{activeTab === "Documents" && <CustomerDocuments />}

			{activeTab !== "Overview" &&
				activeTab !== "Address" &&
				activeTab !== "KYC Details" &&
				activeTab !== "Credit Control" &&
				activeTab !== "Documents" && (
					<div className="bg-white rounded-[20px] border border-gray-200 p-8 flex items-center justify-center min-h-[400px]">
						<p className="text-gray-500 text-[15px]">
							{activeTab} details content goes here.
						</p>
					</div>
				)}
		</div>
	);
}
