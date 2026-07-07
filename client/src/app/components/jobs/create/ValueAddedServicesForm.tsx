interface ValueAddedServicesFormProps {
	data: any;
	onChange: (data: any) => void;
}

export default function ValueAddedServicesForm({
	data,
	onChange,
}: ValueAddedServicesFormProps) {
	const services = [
		{ id: "cargoInsurance", label: "Cargo Insurance" },
		{ id: "emptyContainerInsurance", label: "Empty Container Insurance" },
		{ id: "palletization", label: "Palletization" },
		{ id: "fumigation", label: "Fumigation" },
		{ id: "warehousing", label: "Warehousing/CFS" },
		{ id: "dgGoods", label: "DG Goods" },
	];

	const handleToggle = (id: string) => {
		onChange({
			...data,
			[id]: !data[id],
		});
	};

	return (
		<div className="bg-white p-6 rounded-2xl shadow-sm mb-6">
			<h2 className="text-base font-bold text-gray-900 mb-6">
				Value Added Services
			</h2>

			<div className="flex flex-wrap items-center gap-x-8 gap-y-4">
				{services.map((service) => (
					<label
						key={service.id}
						className="flex items-center gap-2.5 cursor-pointer"
					>
						<input
							type="checkbox"
							checked={data[service.id] || false}
							onChange={() => handleToggle(service.id)}
							className="w-4 h-4 rounded border-gray-300 text-[#075FB7] focus:ring-[#075FB7] bg-white cursor-pointer"
						/>
						<span className="text-[13px] font-medium text-gray-700">
							{service.label}
						</span>
					</label>
				))}
			</div>
		</div>
	);
}
