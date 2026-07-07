"use client";

import { useRouter } from "next/navigation";
import { Button } from "../../../ui/Button";

export default function QuoteActions() {
	const router = useRouter();

	return (
		<div className="flex flex-wrap items-center gap-3">
			<Button
				variant="dangerOutline"
				className="font-semibold px-5 cursor-pointer"
			>
				Reject
			</Button>
			<Button variant="outline" className="font-semibold px-5 cursor-pointer">
				Edit Quote
			</Button>
			<Button
				variant="outline"
				className="font-semibold px-5 cursor-pointer"
				onClick={() => router.push("/dashboard/sales/preview")}
			>
				Download Quote
			</Button>
			<Button variant="outline" className="font-semibold px-5 cursor-pointer">
				Share
			</Button>
			<Button variant="gradient" className="font-semibold px-5 cursor-pointer">
				Convert Job
			</Button>
		</div>
	);
}
