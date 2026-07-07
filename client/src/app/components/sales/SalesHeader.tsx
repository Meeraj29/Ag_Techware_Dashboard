"use client";

import { Button } from "../../ui/Button";
import { useRouter } from "next/navigation";
import SalesKPIs from "./SalesKPIs";

export default function SalesHeader() {
	const router = useRouter();
	return (
		<div className="bg-white rounded-xl p-4  border border-gray-100 mb-6 flex flex-col gap-6">
			<div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
				<div className="w-full xl:w-auto">
					<h1 className="text-xl font-semibold text-black mb-1">
						Sales management
					</h1>
					<p className="text-base font-medium text-black/50">
						Manage and track your import & export Quotes.
					</p>
				</div>
				<div className="flex flex-col sm:flex-row flex-wrap items-center gap-3 w-full xl:w-auto">
					<Button
						variant="outline"
						className="font-semibold cursor-pointer w-full sm:w-auto sm:flex-1 xl:flex-none"
					>
						Manage Terms & Conditions
					</Button>
					<Button
						variant="outline"
						className="font-semibold cursor-pointer w-full sm:w-auto sm:flex-1 xl:flex-none"
					>
						Configure Quote Fields
					</Button>
					<Button
						variant="gradient"
						className="font-semibold cursor-pointer w-full sm:w-auto sm:flex-1 xl:flex-none"
						onClick={() => router.push("/dashboard/sales/create")}
					>
						Create Quote
					</Button>
				</div>
			</div>
			<SalesKPIs />
		</div>
	);
}
