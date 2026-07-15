"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "../../../ui/Button";
import { TAB_ORDER } from "../../../dashboard/vendors/create/page";

interface Props {
	activeTab: string;
	setActiveTab: (tab: string) => void;
}

export default function CreateVendorHeader({ activeTab, setActiveTab }: Props) {
	const router = useRouter();

	const currentIndex = TAB_ORDER.indexOf(activeTab);
	const isFirst = currentIndex === 0;
	const isLast = currentIndex === TAB_ORDER.length - 1;

	const handleNext = () => {
		if (!isLast) setActiveTab(TAB_ORDER[currentIndex + 1]);
	};

	const handlePrevious = () => {
		if (!isFirst) setActiveTab(TAB_ORDER[currentIndex - 1]);
	};

	return (
		<div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center mb-6 gap-4 sm:gap-6 w-full">
			<div className="flex items-center gap-3 sm:gap-4">
				<button
					onClick={() => router.back()}
					className="p-1.5 sm:p-2 rounded-xl bg-gray-200 hover:bg-gray-300 transition-colors text-gray-700 cursor-pointer shrink-0"
				>
					<ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8" />
				</button>
				<h1 className="text-lg sm:text-xl font-semibold text-black truncate">Create Address</h1>
			</div>

			<div className="grid grid-cols-2 sm:flex sm:justify-end sm:flex-wrap items-center gap-2 sm:gap-3 w-full">
				<Button
					variant="dangerOutline"
					onClick={() => router.back()}
					className="font-semibold cursor-pointer border-2 w-full sm:w-auto"
				>
					Cancel
				</Button>

				{!isFirst && (
					<Button
						variant="outline"
						onClick={handlePrevious}
						className="font-semibold cursor-pointer w-full sm:w-auto"
					>
						Previous
					</Button>
				)}

				<Button
					variant={isLast ? "gradient" : "outline"}
					className="font-semibold cursor-pointer w-full sm:w-auto"
				>
					Update
				</Button>

				{!isLast && (
					<Button
						variant="gradient"
						onClick={handleNext}
						className="font-semibold cursor-pointer w-full sm:w-auto"
					>
						Next
					</Button>
				)}
			</div>
		</div>
	);
}
