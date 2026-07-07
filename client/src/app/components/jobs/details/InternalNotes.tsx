export default function InternalNotes({ notes }: { notes: any[] }) {
	return (
		<div className="bg-white rounded-2xl border border-gray-100 p-6">
			<div className="flex items-center justify-between mb-4">
				<h3 className="text-sm font-medium text-gray-900">
					Internal Notes ({notes.length})
				</h3>
				<button className="text-[11px] font-bold text-[#3525CD] hover:underline">
					Add Note
				</button>
			</div>

			<div className="flex flex-col gap-3">
				{notes.map((note) => (
					<div key={note.id} className="bg-gray-100 rounded-lg p-3">
						<p className="text-[13px] font-bold text-gray-900 mb-1">
							{note.content}
						</p>
						<p className="text-[10px] font-medium text-gray-500">
							Added by {note.author} • {note.time}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
