import { ShieldCheck, Droplets, Warehouse, Settings2 } from "lucide-react";

export default function ValueAddServices({ services }: { services: any[] }) {
	const getIcon = (iconName: string) => {
		switch (iconName) {
			case "shield":
				return <ShieldCheck className="w-5 h-5 text-white" />;
			case "droplet":
				return <Droplets className="w-5 h-5 text-white" />;
			case "warehouse":
				return <Warehouse className="w-5 h-5 text-white" />;
			default:
				return <ShieldCheck className="w-5 h-5 text-white" />;
		}
	};

	return (
		<div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
			<div className="flex items-center justify-between mb-4">
				<h3 className="text-sm font-medium text-gray-900">
					Value Add Services
				</h3>
				<button className="flex items-center gap-1 text-[11px] font-bold text-[#075FB7] hover:underline">
					<Settings2 className="w-3.5 h-3.5" /> Modify Services
				</button>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
				{services.map((service) => (
					<div
						key={service.id}
						className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl"
					>
						<div className="w-10 h-10 rounded-lg bg-[#515C6B] flex items-center justify-center shrink-0">
							{getIcon(service.icon)}
						</div>
						<div>
							<p className="text-[11px] text-gray-500 mb-0.5">{service.name}</p>
							<p className="text-[13px] font-bold text-gray-900 leading-tight">
								{service.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
