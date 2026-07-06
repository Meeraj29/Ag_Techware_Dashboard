import { FileText, Plus, Upload, Eye } from "lucide-react";

export default function DocumentsManagement({
	documents,
}: {
	documents: any[];
}) {
	return (
		<div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
			<div className="flex items-center justify-between mb-4">
				<div className="flex items-center gap-2">
					<FileText className="w-5 h-5 text-[#075FB7]" />
					<h3 className="text-sm font-medium text-gray-900">
						Documents Management
					</h3>
				</div>
				<button className="flex items-center gap-1 text-[11px] font-bold text-[#075FB7] hover:underline">
					<Plus className="w-3.5 h-3.5" /> Add Documents
				</button>
			</div>

			<div className="overflow-x-auto">
				<table className="w-full text-left">
					<thead>
						<tr className="bg-[#F8F9FA] border-b border-gray-100">
							<th className="py-3 px-4 text-[11px] font-bold text-gray-700 whitespace-nowrap">
								Document Type
							</th>
							<th className="py-3 px-4 text-[11px] font-bold text-gray-700 whitespace-nowrap">
								Status
							</th>
							<th className="py-3 px-4 text-[11px] font-bold text-gray-700 whitespace-nowrap">
								Upload Date
							</th>
							<th className="py-3 px-4 text-[11px] font-bold text-gray-700 whitespace-nowrap">
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						{documents.map((doc, index) => (
							<tr
								key={doc.id}
								className={`${index !== documents.length - 1 ? "border-b border-gray-100" : ""} ${index % 2 !== 0 ? "bg-[#F8F8F8]" : "bg-white"}`}
							>
								<td className="py-3 px-4 text-[13px] font-semibold text-gray-900">
									{doc.type}
								</td>
								<td className="py-3 px-4">
									{doc.status === "Missing" ? (
										<span className="text-xs font-bold text-[#C5221F] flex items-center gap-1">
											<span className="w-4 h-4 rounded-full border border-[#C5221F] flex items-center justify-center text-[10px] font-black">
												!
											</span>{" "}
											Missing
										</span>
									) : (
										<span className="text-xs font-bold text-[#10B981] flex items-center gap-1">
											<span className="w-4 h-4 rounded-full border border-[#10B981] flex items-center justify-center text-[10px]">
												✓
											</span>{" "}
											Verified
										</span>
									)}
								</td>
								<td className="py-3 px-4 text-[13px] font-medium text-gray-900">
									{doc.date}
								</td>
								<td className="py-3 px-4">
									<div className="flex items-center gap-2">
										<button className="w-7 h-7 rounded bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200">
											<Upload className="w-3.5 h-3.5" />
										</button>
										{doc.status === "Verified" && (
											<button className="w-7 h-7 rounded bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200">
												<Eye className="w-3.5 h-3.5" />
											</button>
										)}
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
