import { ContactDetails as ContactDetailsType } from "../../../types/sales";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactDetails({
	contact,
}: {
	contact?: ContactDetailsType;
}) {
	if (!contact) return null;

	return (
		<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
			<h2 className="text-lg font-medium text-black mb-4">Contact Details</h2>

			<div className="flex items-center gap-3 mb-6">
				<div className="w-12 h-12 bg-[#C7E3FF] text-[#075FB7] rounded-full flex items-center justify-center font-medium text-lg">
					{contact.initials}
				</div>
				<div>
					<h3 className="text-sm font-medium text-black">{contact.name}</h3>
					<p className="text-xs text-gray-500">{contact.company}</p>
				</div>
			</div>

			<div className="flex flex-col gap-3">
				<div className="flex items-center justify-between bg-[#F8F9FA] p-3 rounded-lg">
					<span className="text-xs font-medium text-gray-900 truncate">
						{contact.email}
					</span>
					<Mail className="h-4 w-4 text-gray-400 shrink-0 ml-2" />
				</div>

				<div className="flex items-center justify-between bg-[#F8F9FA] p-3 rounded-lg">
					<span className="text-xs font-medium text-gray-900">
						{contact.phone}
					</span>
					<Phone className="h-4 w-4 text-gray-400 shrink-0 ml-2" />
				</div>

				<div className="flex items-start justify-between bg-[#F8F9FA] p-3 rounded-lg">
					<div>
						<span className="block text-[10px] text-gray-500 font-semibold mb-0.5">
							Billing Address
						</span>
						<span className="text-xs font-medium text-gray-900">
							{contact.address}
						</span>
					</div>
					<MapPin className="h-4 w-4 text-gray-400 shrink-0 ml-2 mt-1" />
				</div>
			</div>
		</div>
	);
}
