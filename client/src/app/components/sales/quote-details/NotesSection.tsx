"use client";

import { useState } from "react";
import { Note } from "../../../types/sales";
import { Button } from "../../../ui/Button";
import AddNoteModal from "./AddNoteModal";

interface NotesSectionProps {
	title: string;
	notes?: Note[];
	showReminder?: boolean;
}

export default function NotesSection({
	title,
	notes = [],
	showReminder = false,
}: NotesSectionProps) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
			<div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
				<h2 className="text-lg font-medium text-black">{title}</h2>
				<div className="flex items-center gap-3">
					{showReminder && (
						<>
							<span className="text-sm font-medium text-[#D97706]">
								No reminder Added
							</span>
							<Button
								variant="outline"
								className="font-semibold text-sm cursor-pointer"
							>
								Set Reminder
							</Button>
						</>
					)}
					{!showReminder && (
						<Button
							variant="outline"
							className="font-semibold text-sm cursor-pointer"
							onClick={() => setIsModalOpen(true)}
						>
							Add Note
						</Button>
					)}
					{showReminder && (
						<Button
							variant="gradient"
							className="font-semibold text-sm cursor-pointer"
							onClick={() => setIsModalOpen(true)}
						>
							Add Note
						</Button>
					)}
				</div>
			</div>

			<div className="flex flex-col gap-3">
				{notes.length === 0 ? (
					<p className="text-sm text-gray-500 italic">No notes available.</p>
				) : (
					notes.map((note) => (
						<div key={note.id} className="bg-[#F2F2F2] p-4 rounded-lg">
							<p className="text-sm font-medium text-gray-900 mb-2">
								{note.text}
							</p>
							<p className="text-xs text-gray-500">
								Added by {note.addedBy} &bull; {note.timeAgo}
							</p>
						</div>
					))
				)}
			</div>

			<AddNoteModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				title={title}
			/>
		</div>
	);
}
