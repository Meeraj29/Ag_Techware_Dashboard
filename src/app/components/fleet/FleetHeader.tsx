"use client";

interface FleetHeaderProps {
	variant?: "main" | "sub";
}

export default function FleetHeader({ variant = 'main' }: FleetHeaderProps) {
	if (variant === 'sub') {
		return (
			<div className="mt-6">
				<h2 className="text-[20px] font-semibold text-black/70">Vehicle Management</h2>
				<p className="mt-1 text-[16px] text-black/70">
					Track, monitor, and maintain all vehicles efficiently.
				</p>
			</div>
		);
	}

	return (
		<div>
			<h1 className="text-[20px] font-semibold tracking-tight text-gray-900">
				Fleet Management
			</h1>
			<p className="mt-0.5 text-[16px] text-black/70">
				System
			</p>
		</div>
	);
}
