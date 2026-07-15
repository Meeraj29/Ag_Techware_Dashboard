"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
	Eye,
	FileText,
	ChevronLeft,
	ChevronRight,
	Sailboat,
} from "lucide-react";
import { ShipmentJob } from "../../types/transportation";
import { useRouter } from "next/navigation";

export default function TransportationTable() {
	const router = useRouter();
	const { jobs, activeTab, searchQuery } = useSelector(
		(state: RootState) => state.transportation,
	);

	const filteredJobs = jobs.filter((job) => {
		const matchesSearch =
			job.jobId.toLowerCase().includes(searchQuery.toLowerCase()) ||
			job.customer.toLowerCase().includes(searchQuery.toLowerCase());
		return matchesSearch;
	});

	const isScheduled = activeTab === "Scheduled Pickup";
	const isDelayed = activeTab === "Delayed";
	const isOutForDelivery = activeTab === "Out For Delivery";
	const isCompleted = activeTab === "Completed";
	const isAllOrDryPort =
		activeTab === "All Shipments" || activeTab === "Dry port Transport";

	const getStatusColor = (status: string) => {
		switch (status) {
			case "In Transit":
				return "bg-[#0052CC]"; // Using primary equivalent
			case "Delayed":
				return "bg-orange-400";
			case "Completed":
				return "bg-emerald-500";
			case "Out For Delivery":
				return "bg-orange-500";
			case "Scheduled":
				return "bg-blue-400";
			default:
				return "bg-gray-400";
		}
	};

	const getStatusTextColor = (status: string) => {
		switch (status) {
			case "In Transit":
				return "text-[#0052CC]";
			case "Delayed":
				return "text-orange-500";
			case "Completed":
				return "text-emerald-600";
			case "Out For Delivery":
				return "text-orange-600";
			case "Scheduled":
				return "text-blue-500";
			default:
				return "text-gray-600";
		}
	};

	const renderTableHeader = () => {
		if (isScheduled) {
			return (
				<div className="grid grid-cols-[100px_1.5fr_100px_1fr_1fr_1.5fr_1.2fr_100px_80px] gap-4 py-3 px-6 bg-[#F4F4F4] text-xs sm:text-sm font-medium text-[#000000CC] rounded-t-xl items-center">
					<div>Job ID</div>
					<div>Customer</div>
					<div>Type</div>
					<div>Origin</div>
					<div>Drop Off</div>
					<div>Veh. No/Driver</div>
					<div>Pickup Time</div>
					<div>Status</div>
					<div className="text-center">Actions</div>
				</div>
			);
		}
		if (isDelayed) {
			return (
				<div className="grid grid-cols-[100px_1.5fr_100px_1fr_1fr_1.5fr_1.2fr_100px_1.5fr_80px] gap-4 py-3 px-6 bg-[#F4F4F4] text-xs sm:text-sm font-medium text-[#000000CC] rounded-t-xl items-center">
					<div>Job ID</div>
					<div>Customer</div>
					<div>Type</div>
					<div>Origin</div>
					<div>Drop Off</div>
					<div>Veh. No/Driver</div>
					<div>Pickup Time</div>
					<div>Impact</div>
					<div>Delay Reason</div>
					<div className="text-center">Actions</div>
				</div>
			);
		}
		if (isOutForDelivery) {
			return (
				<div className="grid grid-cols-[100px_1.5fr_100px_1fr_1fr_1.5fr_1.2fr_120px_80px] gap-4 py-3 px-6 bg-[#F4F4F4] text-xs sm:text-sm font-medium text-[#000000CC] rounded-t-xl items-center">
					<div>Job ID</div>
					<div>Customer</div>
					<div>Type</div>
					<div>Origin</div>
					<div>Drop Off</div>
					<div>Veh. No/Driver</div>
					<div>Pickup Time</div>
					<div>ETA</div>
					<div className="text-center">Actions</div>
				</div>
			);
		}
		if (isCompleted) {
			return (
				<div className="grid grid-cols-[100px_1.5fr_100px_1fr_1fr_1fr_1.5fr_120px_120px_80px] gap-4 py-3 px-6 bg-[#F4F4F4] text-xs sm:text-sm font-medium text-[#000000CC] rounded-t-xl items-center">
					<div>Job ID</div>
					<div>Customer</div>
					<div>Type</div>
					<div>Origin</div>
					<div>Drop Off</div>
					<div>Delivery Date</div>
					<div>Veh. No/Driver</div>
					<div>Performance</div>
					<div>POD</div>
					<div className="text-center">Actions</div>
				</div>
			);
		}
		if (isAllOrDryPort) {
			return (
				<div className="grid grid-cols-[100px_1.5fr_100px_80px_80px_1.5fr_1.5fr_120px_100px_80px] gap-4 py-3 px-6 bg-[#F4F4F4] text-xs sm:text-sm font-medium text-[#000000CC] rounded-t-xl items-center">
					<div>Job ID</div>
					<div>Customer</div>
					<div>Type</div>
					<div>Origin</div>
					<div>Drop Off</div>
					<div>Veh. No/Driver</div>
					<div>Pickup Time</div>
					<div>Status</div>
					<div>ETA</div>
					<div className="text-center">Actions</div>
				</div>
			);
		}
		// Default In-Transit
		return (
			<div className="grid grid-cols-[100px_1.5fr_100px_80px_80px_1.5fr_1.5fr_120px_80px] gap-4 py-3 px-6 bg-[#F4F4F4] text-xs sm:text-sm font-medium text-[#000000CC] rounded-t-xl items-center">
				<div>Job ID</div>
				<div>Customer</div>
				<div>Type</div>
				<div>Origin</div>
				<div>Drop Off</div>
				<div>Veh. No/Driver</div>
				<div>Pickup Time</div>
				<div>ETA</div>
				<div className="text-center">Actions</div>
			</div>
		);
	};

	const renderJobBadge = (job: ShipmentJob) => (
		<span
			className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-regular ${
				job.type === "Export"
					? "bg-[#3525CD4D] text-[#3525CD]"
					: "bg-[#0548904D] text-[#054890]"
			}`}
		>
			<Sailboat className="w-3.5 h-3.5" />
			{job.type}
		</span>
	);

	const renderActions = () => (
		<div className="flex items-center justify-center gap-2">
			<button className="p-1.5 rounded bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
				<Eye className="h-4 w-4" />
			</button>
			<button className="p-1.5 rounded bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
				<FileText className="h-4 w-4" />
			</button>
		</div>
	);

	const renderTableRow = (job: ShipmentJob) => {
		if (isScheduled) {
			return (
				<div
					key={job.id}
					onClick={() => router.push(`/dashboard/transportation/${job.id}`)}
					className="cursor-pointer grid grid-cols-[100px_1.5fr_100px_1fr_1fr_1.5fr_1.2fr_100px_80px] gap-4 py-4 px-6 items-center text-sm transition-colors even:bg-[#F9F9F9]"
				>
					<div className="font-medium text-[#3525CD] text-md">{job.jobId}</div>
					<div className="font-medium text-[#000000] text-md">
						{job.customer}
					</div>
					<div>{renderJobBadge(job)}</div>
					<div className="font-medium text-[#000000] text-md">{job.origin}</div>
					<div className="font-medium text-[#000000] text-md">
						{job.dropOff}
					</div>
					<div>
						<div className="font-medium text-[#000000] text-md">
							{job.driverName}
						</div>
						<div className="text-xs text-[#000000] font-regular">
							{job.vehicleNo}
						</div>
					</div>
					<div>
						<div className="font-medium text-[#000000] text-md">
							{job.scheduledTimeRange}
						</div>
						{job.scheduledSubText && (
							<div className="text-md text-[#000000] font-medium">
								{job.scheduledSubText}
							</div>
						)}
					</div>
					<div className="flex items-center gap-2">
						<div className="w-2 h-2 rounded-full bg-[#818CF8]" />
						<span className="font-medium text-md text-[#818CF8]">
							Scheduled
						</span>
					</div>
					{renderActions()}
				</div>
			);
		}

		if (isDelayed) {
			return (
				<div
					key={job.id}
					onClick={() => router.push(`/dashboard/transportation/${job.id}`)}
					className="cursor-pointer grid grid-cols-[100px_1.5fr_100px_1fr_1fr_1.5fr_1.2fr_100px_1.5fr_80px] gap-4 py-4 px-6 items-center text-sm transition-colors even:bg-[#F9F9F9]"
				>
					<div className="font-medium text-[#3525CD] text-md">{job.jobId}</div>
					<div className="font-medium text-[#000000] text-md">
						{job.customer}
					</div>
					<div>{renderJobBadge(job)}</div>
					<div className="font-medium text-[#000000] text-md">{job.origin}</div>
					<div className="font-medium text-[#000000] text-md">
						{job.dropOff}
					</div>
					<div>
						<div className="font-medium text-[#000000] text-md">
							{job.driverName}
						</div>
						<div className="text-xs text-[#000000] font-regular">
							{job.vehicleNo}
						</div>
					</div>
					<div>
						<div className="font-medium text-[#000000] text-md">
							{job.pickupDateTime}
						</div>
						<div className="text-xs text-[#04458B] font-medium">
							{job.pickupPort}
						</div>
					</div>
					<div>
						<span
							className={`px-2 py-1 rounded text-xs font-medium ${
								job.impact === "CRITICAL"
									? "bg-[#BA1A1A4D] text-[#BA1A1A]"
									: job.impact === "MAJOR"
										? "bg-[#F59E0B4D] text-[#F59E0B]"
										: "bg-[#04458B4D] text-[#04458B]"
							}`}
						>
							{job.impact}
						</span>
					</div>
					<div className="font-medium text-[#000000] text-md">
						{job.delayReason}
					</div>
					{renderActions()}
				</div>
			);
		}

		if (isOutForDelivery) {
			return (
				<div
					key={job.id}
					onClick={() => router.push(`/dashboard/transportation/${job.id}`)}
					className="cursor-pointer grid grid-cols-[100px_1.5fr_100px_1fr_1fr_1.5fr_1.2fr_120px_80px] gap-4 py-4 px-6 items-center text-sm transition-colors even:bg-[#F9F9F9]"
				>
					<div className="font-medium text-[#3525CD] text-md">{job.jobId}</div>
					<div className="font-medium text-[#000000] text-md">
						{job.customer}
					</div>
					<div>{renderJobBadge(job)}</div>
					<div className="font-medium text-[#000000] text-md">
						{job.outForDeliveryRouteOrigin}
					</div>
					<div className="font-medium text-[#000000] text-md">
						{job.outForDeliveryRouteDrop}
					</div>
					<div>
						<div className="font-medium text-[#000000] text-md">
							{job.driverName}
						</div>
						<div className="text-xs text-[#000000] font-regular">
							{job.vehicleNo}
						</div>
					</div>
					<div>
						<div className="font-medium text-[#000000] text-md">
							{job.pickupDateTime}
						</div>
						<div className="text-xs text-[#04458B] font-medium">
							{job.pickupPort}
						</div>
					</div>
					<div>
						<div className="font-medium text-[#000000] text-md">
							{job.outForDeliveryEta}
						</div>
						<div
							className={`text-xs font-medium ${
								job.etaStatus === "Weather Delay"
									? "text-[#BA1A1A]"
									: job.etaStatus === "Delivered"
										? "text-[#526784]"
										: "text-[#059669]"
							}`}
						>
							{job.etaStatus}
						</div>
					</div>
					{renderActions()}
				</div>
			);
		}

		if (isCompleted) {
			return (
				<div
					key={job.id}
					onClick={() => router.push(`/dashboard/transportation/${job.id}`)}
					className="cursor-pointer grid grid-cols-[100px_1.5fr_100px_1fr_1fr_1fr_1.5fr_120px_120px_80px] gap-4 py-4 px-6 items-center text-sm transition-colors even:bg-[#F9F9F9]"
				>
					<div className="font-medium text-[#3525CD] text-md">{job.jobId}</div>
					<div className="font-medium text-[#000000] text-md">
						{job.customer}
					</div>
					<div>{renderJobBadge(job)}</div>
					<div className="font-medium text-[#000000] text-md">{job.origin}</div>
					<div className="font-medium text-[#000000] text-md">
						{job.dropOff}
					</div>
					<div className="font-medium text-[#000000] text-md">
						{job.deliveryDate}
					</div>
					<div>
						<div className="font-medium text-[#000000] text-md">
							{job.driverName}
						</div>
						<div className="text-xs text-[#000000] font-regular">
							{job.vehicleNo}
						</div>
					</div>
					<div>
						<span
							className={`px-2 py-1 rounded text-xs font-medium ${
								job.performance === "ON-TIME"
									? "bg-[#0596694D] text-[#059669]"
									: job.performance === "EARLY"
										? "bg-[#3525CD4D] text-[#3525CD]"
										: "bg-[#F59E0B4D] text-[#F59E0B]"
							}`}
						>
							{job.performance}
						</span>
					</div>
					<div className="font-medium text-md text-[#000000]">{job.pod}</div>
					{renderActions()}
				</div>
			);
		}

		if (isAllOrDryPort) {
			return (
				<div
					key={job.id}
					onClick={() => router.push(`/dashboard/transportation/${job.id}`)}
					className="cursor-pointer grid grid-cols-[100px_1.5fr_100px_80px_80px_1.5fr_1.5fr_120px_100px_80px] gap-4 py-4 px-6 items-center text-sm transition-colors even:bg-[#F9F9F9]"
				>
					<div className="font-medium text-[#3525CD] text-md">{job.jobId}</div>
					<div className="font-medium text-[#000000] text-md">
						{job.customer}
					</div>
					<div>{renderJobBadge(job)}</div>
					<div className="font-medium text-[#000000] text-md">{job.origin}</div>
					<div className="font-medium text-[#000000] text-md">
						{job.dropOff}
					</div>
					<div>
						<div className="font-medium text-[#000000] text-md">
							{job.driverName}
						</div>
						<div className="text-xs text-[#000000] font-regular">
							{job.vehicleNo}
						</div>
					</div>
					<div>
						<div className="font-medium text-[#000000] text-md">
							{job.pickupDateTime}
						</div>
						<div className="text-xs text-[#04458B] font-medium">
							{job.pickupPort}
						</div>
					</div>
					<div className="flex items-center gap-2">
						<div
							className={`w-2 h-2 rounded-full ${getStatusColor(job.status)}`}
						/>
						<span
							className={`font-medium text-md text-[#000000] ${getStatusTextColor(job.status)}`}
						>
							{job.status}
						</span>
					</div>
					<div>
						<div className="font-medium text-[#000000] text-md">
							{job.etaDate}
						</div>
						<div
							className={`text-xs font-medium ${
								job.etaStatus === "Weather Delay"
									? "text-[#BA1A1A]"
									: job.etaStatus === "Delivered"
										? "text-[#526784]"
										: "text-[#059669]"
							}`}
						>
							{job.etaStatus}
						</div>
					</div>
					{renderActions()}
				</div>
			);
		}

		// Default In-Transit
		return (
			<div
				key={job.id}
				onClick={() => router.push(`/dashboard/transportation/${job.id}`)}
				className="cursor-pointer grid grid-cols-[100px_1.5fr_100px_80px_80px_1.5fr_1.5fr_120px_80px] gap-4 py-4 px-6 items-center text-sm transition-colors even:bg-[#F9F9F9]"
			>
				<div className="font-medium text-[#3525CD] text-md">{job.jobId}</div>
				<div className="font-medium text-[#000000] text-md">{job.customer}</div>
				<div>{renderJobBadge(job)}</div>
				<div className="font-medium text-[#000000] text-md">{job.origin}</div>
				<div className="font-medium text-[#000000] text-md">{job.dropOff}</div>
				<div>
					<div className="font-medium text-[#000000] text-md">
						{job.driverName}
					</div>
					<div className="text-xs text-[#000000] font-regular">
						{job.vehicleNo}
					</div>
				</div>
				<div>
					<div className="font-medium text-[#000000] text-md">
						{job.pickupDateTime}
					</div>
					<div className="text-xs text-[#04458B] font-medium">
						{job.pickupPort}
					</div>
				</div>
				<div>
					<div className="font-medium text-[#000000] text-md">
						{job.etaDate}
					</div>
					<div
						className={`text-xs font-medium ${
							job.etaStatus === "Weather Delay"
								? "text-[#BA1A1A]"
								: job.etaStatus === "Delivered"
									? "text-[#526784]"
									: "text-[#059669]"
						}`}
					>
						{job.etaStatus}
					</div>
				</div>
				{renderActions()}
			</div>
		);
	};

	return (
		<div className="bg-white rounded-b-xl pb-4">
			<div className="w-full overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
				<div className="min-w-[1100px]">
					{renderTableHeader()}

					<div className="divide-y divide-gray-100">
						{filteredJobs.map(renderTableRow)}

						{filteredJobs.length === 0 && (
							<div className="py-12 text-center text-gray-500">
								No shipments found matching your criteria.
							</div>
						)}
					</div>
				</div>
			</div>

			{/* Pagination Footer */}
			<div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-4 border-t border-gray-100 gap-4 sm:gap-0 mt-2">
				<p className="text-sm font-medium text-gray-500">
					Results:{" "}
					{filteredJobs.length < 10
						? `0${filteredJobs.length}`
						: filteredJobs.length}{" "}
					Out Of 143
				</p>
				<div className="flex items-center gap-2">
					<button className="p-2 border border-gray-200 text-gray-500 rounded-md hover:bg-gray-50">
						<ChevronLeft className="h-4 w-4" />
					</button>
					<button className="px-3 py-1.5 border border-gray-200 text-gray-700 font-semibold rounded-md hover:bg-gray-50">
						1
					</button>
					<button className="p-2 border border-gray-200 text-primary rounded-md hover:bg-gray-50">
						<ChevronRight className="h-4 w-4" />
					</button>
				</div>
			</div>
		</div>
	);
}
