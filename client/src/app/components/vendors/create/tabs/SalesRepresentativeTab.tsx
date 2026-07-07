"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { updateFormField } from "../../../../redux/features/vendor/vendorFormSlice";

export default function SalesRepresentativeTab() {
	const dispatch = useDispatch();
	const formState = useSelector((state: RootState) => state.vendorForm);

	const handleChange = (field: string, value: any) => {
		dispatch(updateFormField({ field: field as any, value }));
	};

	return (
		<div className="p-6 bg-white rounded-b-xl shadow-sm">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
				{/* Name */}
				<div>
					<label className="block text-base font-medium text-black  mb-2">
						Name <span className="text-[#BA1A1A]">*</span>
					</label>
					<input
						type="text"
						placeholder="Name"
						value={formState.repName}
						onChange={(e) => handleChange("repName", e.target.value)}
						className="w-full px-4 py-3 bg-[#F2F2F2] border-transparent rounded-md text-sm text-gray-800 outline-none focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all"
					/>
				</div>

				{/* Code */}
				<div>
					<label className="block text-base font-medium text-black  mb-2">
						Code <span className="text-[#BA1A1A]">*</span>
					</label>
					<input
						type="text"
						placeholder="code"
						value={formState.repCode}
						onChange={(e) => handleChange("repCode", e.target.value)}
						className="w-full px-4 py-3 bg-[#F2F2F2] border-transparent rounded-md text-sm text-gray-800 outline-none focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all"
					/>
				</div>

				{/* Location */}
				<div>
					<label className="block text-base font-medium text-black  mb-2">
						Location
					</label>
					<input
						type="text"
						placeholder="Location"
						value={formState.repLocation}
						onChange={(e) => handleChange("repLocation", e.target.value)}
						className="w-full px-4 py-3 bg-[#F2F2F2] border-transparent rounded-md text-sm text-gray-800 outline-none focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all"
					/>
				</div>

				{/* Effective From */}
				<div>
					<label className="block text-base font-medium text-black  mb-2">
						Effective From
					</label>
					<input
						type="date"
						placeholder="Effective From"
						value={formState.repEffectiveFrom}
						onChange={(e) => handleChange("repEffectiveFrom", e.target.value)}
						className="w-full px-4 py-3 bg-[#F2F2F2] border-transparent rounded-md text-sm text-gray-800 outline-none focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all"
					/>
				</div>

				{/* Mobile no */}
				<div>
					<label className="block text-base font-medium text-black  mb-2">
						Mobile no
					</label>
					<input
						type="text"
						placeholder="Mobile no"
						value={formState.repMobile}
						onChange={(e) => handleChange("repMobile", e.target.value)}
						className="w-full px-4 py-3 bg-[#F2F2F2] border-transparent rounded-md text-sm text-gray-800 outline-none focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all"
					/>
				</div>

				{/* Email */}
				<div>
					<label className="block text-base font-medium text-black  mb-2">
						Email
					</label>
					<input
						type="email"
						placeholder="Email"
						value={formState.repEmail}
						onChange={(e) => handleChange("repEmail", e.target.value)}
						className="w-full px-4 py-3 bg-[#F2F2F2] border-transparent rounded-md text-sm text-gray-800 outline-none focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all"
					/>
				</div>
			</div>
		</div>
	);
}
