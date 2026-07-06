"use client";

interface FleetHeaderProps {
	variant?: "main" | "sub";
}

export default function FleetHeader({ variant = "main" }: FleetHeaderProps) {
	if (variant === "sub") {
		return (
			<div className="mt-6">
				<h2 className="text-base font-bold text-gray-900">
					Vehicle Management
				</h2>
				<p className="mt-1 text-xs text-gray-400">
					Track, monitor, and maintain all vehicles efficiently.
				</p>
			</div>
		);
	}

	return (
		<div>
			<h1 className="text-xl font-bold tracking-tight text-gray-900">
				Fleet Management
			</h1>
			<p className="mt-0.5 text-xs text-gray-400">System</p>
		</div>
	);
}
