"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { updateFormField } from "../../../../redux/features/vendor/vendorFormSlice";

export default function CreditControlDetailsTab() {
	const dispatch = useDispatch();
	const formState = useSelector((state: RootState) => state.vendorForm);

	const handleChange = (field: string, value: any) => {
		dispatch(updateFormField({ field: field as any, value }));
	};

	return (
		<div className="p-6 bg-white rounded-b-xl shadow-sm">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
				{/* Date From */}
				<div>
					<label className="block text-base font-medium text-black mb-2">
						Date From
					</label>
					<input
						type="date"
						placeholder="date From"
						value={formState.creditDateFrom}
						onChange={(e) => handleChange("creditDateFrom", e.target.value)}
						className="w-full px-4 py-3 bg-[#F2F2F2] border-transparent rounded-md text-sm text-gray-800 outline-none focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all"
					/>
				</div>

				{/* date To */}
				<div>
					<label className="block text-base font-medium text-black mb-2">
						Date To
					</label>
					<input
						type="date"
						placeholder="Date To"
						value={formState.creditDateTo}
						onChange={(e) => handleChange("creditDateTo", e.target.value)}
						className="w-full px-4 py-3 bg-[#F2F2F2] border-transparent rounded-md text-sm text-gray-800 outline-none focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all"
					/>
				</div>

				{/* Period(days) */}
				<div>
					<label className="block text-base font-medium text-black  mb-2">
						Period(days)
					</label>
					<input
						type="number"
						placeholder="0"
						value={formState.creditPeriodDays}
						onChange={(e) => handleChange("creditPeriodDays", e.target.value)}
						className="w-full px-4 py-3 bg-[#F2F2F2] border-transparent rounded-md text-sm text-gray-800 outline-none focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all"
					/>
				</div>

				{/* Amount */}
				<div>
					<label className="block text-base font-medium text-black  mb-2">
						Amount
					</label>
					<input
						type="number"
						placeholder="0"
						value={formState.creditAmount}
						onChange={(e) => handleChange("creditAmount", e.target.value)}
						className="w-full px-4 py-3 bg-[#F2F2F2] border-transparent rounded-md text-sm text-gray-800 outline-none focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all"
					/>
				</div>

				{/* Currency */}
				<div>
					<label className="block text-base font-medium text-black  mb-2">
						Currency
					</label>
					<select
						value={formState.creditCurrency}
						onChange={(e) => handleChange("creditCurrency", e.target.value)}
						className="w-full px-4 py-3 bg-[#F2F2F2] border-transparent rounded-md text-sm text-gray-800 outline-none focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer"
					>
						<option value="">Currency</option>
						<option value="USD">USD</option>
						<option value="INR">INR</option>
						<option value="EUR">EUR</option>
					</select>
				</div>
			</div>
		</div>
	);
}
