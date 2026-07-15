"use client";
import React, { useState } from "react";
import { Modal } from "../../ui/Modal";
import { Check } from "lucide-react";
import { Button } from "../../ui/Button";

const DATA_WIDGETS = [
	{
		id: "1",
		title: "Shipment Status Pipeline",
		desc: "Visual flow: Created → In Transit → Delivered",
	},
	{
		id: "2",
		title: "Financial Overview",
		desc: "Revenue, pending invoices, and overdue payments",
	},
	{
		id: "3",
		title: "Active Shipments Table",
		desc: "Table of current shipments with status and ETA",
	},
	{
		id: "4",
		title: "Credit Control Alerts",
		desc: "Customers nearing or exceeding credit limits",
	},
	{
		id: "5",
		title: "Delayed Shipments Panel",
		desc: "High-priority delayed shipments requiring attention",
	},
	{
		id: "6",
		title: "Team Performance Summary",
		desc: "Jobs completed, delays, and workload by team",
	},
	{
		id: "7",
		title: "Tracking Map",
		desc: "Lightweight map showing shipment locations",
	},
	{
		id: "8",
		title: "Recent Activity Feed",
		desc: "Timeline of status updates and user actions",
	},
	{
		id: "9",
		title: "Pending Actions",
		desc: "Tasks assigned to the user or team",
	},
	{
		id: "10",
		title: "Clearance Queue",
		desc: "Jobs awaiting customs review or approval",
	},
];

interface Props {
	isOpen: boolean;
	onClose: () => void;
}

export default function ManageDataModal({ isOpen, onClose }: Props) {
	const [selected, setSelected] = useState(
		new Set(["1", "3", "5", "7", "8", "9"]),
	);

	const toggle = (id: string) => {
		setSelected((prev) => {
			const next = new Set(prev);
			if (next.has(id)) {
				next.delete(id);
			} else {
				next.add(id);
			}
			return next;
		});
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<div className="flex flex-col h-full">
				<h2 className="text-2xl font-semibold text-center text-black mb-8">
					Manage Dashboard Data
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-10">
					{DATA_WIDGETS.map((m) => (
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
