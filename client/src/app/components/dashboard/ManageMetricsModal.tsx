"use client";
import React, { useState } from "react";
import { Modal } from "../../ui/Modal";
import { Check } from "lucide-react";
import { Button } from "../../ui/Button";

const METRICS = [
	{
		id: "1",
		title: "Active Shipments",
		desc: "Total shipments currently in progress",
	},
	{ id: "2", title: "Pending Invoices", desc: "Invoices awaiting payment" },
	{
		id: "3",
		title: "Delayed Shipments",
		desc: "Shipments exceeding ETA or milestone deadlines",
	},
	{
		id: "4",
		title: "In Transit Shipments",
		desc: "Shipments currently moving between locations",
	},
	{ id: "5", title: "Jobs Pending", desc: "Jobs requiring user intervention" },
	{ id: "6", title: "Outstanding Amount", desc: "Total unpaid invoice value" },
	{
		id: "7",
		title: "Pending Clearance",
		desc: "Shipments awaiting customs clearance",
	},
	{
		id: "8",
		title: "Customers on Credit Hold",
		desc: "Customers exceeding credit limits",
	},
	{
		id: "9",
		title: "Deliveries Due Today",
		desc: "Shipments scheduled for delivery today",
	},
	{
		id: "10",
		title: "Completed Shipments (MTD)",
		desc: "Successfully delivered shipments this month",
	},
];

interface Props {
	isOpen: boolean;
	onClose: () => void;
}

export default function ManageMetricsModal({ isOpen, onClose }: Props) {
	const [selected, setSelected] = useState(
		new Set(["1", "3", "4", "5", "7", "9"]),
	);

	const toggle = (id: string) => {
		setSelected((prev) => {
			const next = new Set(prev);
			if (next.has(id)) {
				next.delete(id);
			} else {
				if (next.size < 6) {
					next.add(id);
				}
			}
			return next;
		});
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<div className="flex flex-col h-full">
				<h2 className="text-2xl font-semibold text-center text-black mb-4">
					Manage Metrics
				</h2>
				<div className="mb-6">
					<p className="text-sm font-semibold">
						<span className="text-[#0863BD] font-medium text-base">
							You can select up to 6 metrics -{" "}
						</span>
						<span className="text-[#BA1A1A] font-medium text-base">
							{selected.size}/6 Selected
						</span>
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-10">
					{METRICS.map((m) => (
						<div
							key={m.id}
							className="flex gap-3 items-start cursor-pointer group"
							onClick={() => toggle(m.id)}
						>
							<button
								className={`w-5 h-5 mt-0.5 rounded flex items-center justify-center border shrink-0 transition-colors ${
									selected.has(m.id)
										? "bg-white border-[#0863BD]"
										: "border-gray-300 bg-white group-hover:border-[#0863BD]"
								}`}
							>
								{selected.has(m.id) && (
									<Check size={14} className="text-[#0863BD]" strokeWidth={3} />
								)}
							</button>
							<div>
								<h3 className="text-base font-medium text-black">{m.title}</h3>
								<p className="text-sm font-normal text-black mt-1">{m.desc}</p>
							</div>
						</div>
					))}
				</div>

				<div className="flex justify-end gap-4 mt-auto">
					<Button
						variant="outline"
						className="w-[120px] cursor-pointer font-semibold border-[#04458B] text-[#04458B] hover:bg-blue-50"
						onClick={onClose}
					>
						Cancel
					</Button>
					<Button
						variant="gradient"
						className="w-[120px] cursor-pointer font-semibold"
						onClick={onClose}
					>
						Update
					</Button>
				</div>
			</div>
		</Modal>
	);
}
