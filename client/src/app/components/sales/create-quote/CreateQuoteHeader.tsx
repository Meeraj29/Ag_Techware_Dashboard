"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "../../../ui/Button";

export default function CreateQuoteHeader() {
	const router = useRouter();

	return (
		<div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 sm:px-8 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
			<div className="flex items-center gap-3 sm:gap-4">
				<button
					onClick={() => router.back()}
					className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl sm:rounded-2xl bg-[#DADADA] hover:bg-gray-200 transition-colors shrink-0 cursor-pointer"
				>
					<ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
				</button>
				<h1 className="text-lg sm:text-xl font-semibold text-black">
					Create Quotation
				</h1>
			</div>

			<div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full md:w-auto">
				<Button
					variant="outline"
					className="flex-1 md:flex-none justify-center border-red-500 text-red-500 hover:bg-red-50 font-semibold px-3 sm:px-6 whitespace-nowrap"
				>
					Cancel
				</Button>
				<Button
					variant="outline"
					className="flex-1 md:flex-none justify-center border-[#075FB7] text-[#075FB7] hover:bg-blue-50 font-semibold px-3 sm:px-6 whitespace-nowrap"
				>
					Save As Draft
				</Button>
				<Button
					variant="default"
					className="w-full md:w-auto justify-center bg-[#054890] text-white hover:bg-[#054890]/90 font-semibold px-4 sm:px-6 cursor-pointer whitespace-nowrap"
					onClick={() => router.push("/dashboard/sales/preview")}
				>
					Create Quotation
				</Button>
			</div>
		</div>
	);
}
