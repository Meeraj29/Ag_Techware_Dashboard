function ParameterBox({ label, value }: { label: string; value: string }) {
	return (
		<div className="bg-[#F5F5F5] rounded-xl p-4">
			<p className="text-gray-500 text-xs mb-1 font-medium">{label}</p>
			<p className="text-gray-900 font-normal text-sm">{value}</p>
		</div>
	);
}

export default function ShipmentParameters() {
	return (
		<div className="bg-white rounded-3xl p-8">
			<h3 className="text-gray-900 font-medium text-base mb-4">
				Shipment Parameters
			</h3>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				<ParameterBox label="Carrier & Vessel" value="Maersk / Ever Given" />
				<ParameterBox label="Port of Loading" value="Port of Loading" />
				<ParameterBox
					label="Port of Destination"
					value="Rotterdam, NL (NLRTM)"
				/>

				<ParameterBox label="Total Weight" value="22,400 kg" />
				<ParameterBox label="Volume" value="67 CBM (40' HC Container)" />
				<ParameterBox label="Cargo Type" value="General Merch. (Electronics)" />
			</div>
		</div>
	);
}
