"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

interface Props {
	customerId: string;
}

export function InternalNotes({ customerId }: Props) {
	const detail = useSelector(
		(state: RootState) => state.customerDetail.details[customerId],
	);
	if (!detail) return null;

	return (
		<div className="bg-white rounded-[20px] border border-gray-200 p-6 w-full lg:w-[320px] shrink-0 h-full flex flex-col">
			<div className="mb-4">
				<h2 className="text-[16px] font-bold text-gray-800">
					Internal Notes ({detail.internalNotes.length})
				</h2>
			</div>

			<div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-1">
				{detail.internalNotes.map((note) => (
					<div key={note.id} className="border-l-2 border-primary pl-3 py-1">
						<p className="text-[13px] text-gray-800 leading-relaxed font-medium mb-1.5">
							{note.text}
						</p>
						<p className="text-[11px] text-gray-400">
							Added by {note.author} • {note.daysAgo}
						</p>
					</div>
				))}
			</div>

			<button className="w-full py-2.5 border border-primary text-primary text-[14px] font-semibold rounded-[10px] hover:bg-blue-50 transition mt-auto">
				Add Note
			</button>
		</div>
	);
}
