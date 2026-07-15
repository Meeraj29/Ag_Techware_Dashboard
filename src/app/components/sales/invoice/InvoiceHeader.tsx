import Image from "next/image";
import Logo from "../../../assets/Logo/agtechlogo.svg";

export default function InvoiceHeader() {
	return (
		<div className="flex flex-col">
			<div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-0 mb-8">
				{/* Logo */}
				<div className="flex items-center w-full md:w-auto">
					<Image
						src={Logo}
						alt="AG Techware Logo"
						width={200}
						height={40}
						className="w-auto h-10 object-contain"
					/>
				</div>

				{/* Invoice Details */}
				<div className="text-left md:text-right w-full md:w-auto">
					<div className="flex justify-start md:justify-end gap-3 mb-1 text-sm">
						<span className="text-gray-500">Quotation ID</span>
					</div>
					<div className="text-lg font-bold text-gray-900 mb-4">
						QTE-99201-LX
					</div>

					<div className="flex justify-start md:justify-end gap-3 text-sm mb-1">
						<span className="text-gray-500 w-24 text-left md:text-right">Date issued:</span>
						<span className="text-gray-900 font-semibold w-28 text-left md:text-right">
							Oct 24, 2023
						</span>
					</div>

					<div className="flex justify-start md:justify-end gap-3 text-sm">
						<span className="text-gray-500 w-24 text-left md:text-right">Valid Until:</span>
						<span className="text-gray-900 font-semibold w-28 text-left md:text-right">
							Nov 07, 2023
						</span>
					</div>
				</div>
			</div>
			<hr className="border-gray-200" />
		</div>
	);
}
