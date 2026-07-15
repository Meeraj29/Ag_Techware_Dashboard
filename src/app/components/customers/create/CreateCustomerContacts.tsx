"use client";

import React, { useState } from "react";
import { Trash2, Search } from "lucide-react";

interface Contact {
	id: number;
	name: string;
	address: string;
	phone: string;
	email: string;
}

export function CreateCustomerContacts() {
	const [contacts, setContacts] = useState<Contact[]>([
		{ id: 1, name: "", address: "", phone: "", email: "" },
	]);

	const addContact = () => {
		setContacts((prev) => [
			...prev,
			{ id: prev.length + 1, name: "", address: "", phone: "", email: "" },
		]);
	};

	const removeContact = (id: number) => {
		setContacts((prev) => prev.filter((c) => c.id !== id));
	};

	return (
		<div className="bg-white rounded-[16px] border border-gray-200 p-6">
			{/* Add Contact button */}
			<div className="flex justify-end mb-5">
				<button
					onClick={addContact}
					className="px-4 py-2 rounded-[8px] border border-primary text-primary text-[13px] font-bold hover:bg-blue-50 transition"
				>
					Add Contact
				</button>
			</div>

			{/* Table */}
			<div className="overflow-x-auto scrollbar-hide">
				<table className="w-full border-collapse min-w-[700px]">
					<thead>
						<tr className="bg-[#F8F9FA] border-b border-gray-100">
							<th className="py-3 px-4 text-[13px] font-medium text-gray-500 text-left w-12 rounded-tl-[8px]">
								<div className="flex items-center gap-1">
									# <Search className="w-3.5 h-3.5 text-gray-400" />
								</div>
							</th>
							<th className="py-3 px-4 text-[13px] font-medium text-gray-500 text-left">Contact Name</th>
							<th className="py-3 px-4 text-[13px] font-medium text-gray-500 text-left">Address</th>
							<th className="py-3 px-4 text-[13px] font-medium text-gray-500 text-left">Phone Number</th>
							<th className="py-3 px-4 text-[13px] font-medium text-gray-500 text-left">Email</th>
							<th className="py-3 px-4 text-[13px] font-medium text-gray-500 text-left rounded-tr-[8px]">Action</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-50">
						{contacts.map((contact, idx) => (
							<tr key={contact.id}>
								<td className="py-3 px-4 text-[13px] text-gray-500 font-medium">{idx + 1}</td>
								<td className="py-3 px-4">
									<input
										type="text"
										placeholder="Contact Name"
										className="w-full bg-[#F8F9FA] border border-gray-200 rounded-[6px] px-3 py-2 text-[13px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-primary transition"
									/>
								</td>
								<td className="py-3 px-4">
									<textarea
										placeholder="Address"
										rows={2}
										className="w-full bg-[#F8F9FA] border border-gray-200 rounded-[6px] px-3 py-2 text-[13px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-primary transition resize-none"
									/>
								</td>
								<td className="py-3 px-4">
									<input
										type="text"
										placeholder="Phone Number"
										className="w-full bg-[#F8F9FA] border border-gray-200 rounded-[6px] px-3 py-2 text-[13px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-primary transition"
									/>
								</td>
								<td className="py-3 px-4">
									<input
										type="email"
										placeholder="Email"
										className="w-full bg-[#F8F9FA] border border-gray-200 rounded-[6px] px-3 py-2 text-[13px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-primary transition"
									/>
								</td>
								<td className="py-3 px-4">
									{contacts.length > 1 && (
										<button
											onClick={() => removeContact(contact.id)}
											className="w-8 h-8 flex items-center justify-center rounded-[6px] bg-red-50 text-[#DB4437] hover:bg-red-100 transition"
										>
											<Trash2 className="w-4 h-4" />
										</button>
									)}
								</td>
							</tr>

						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
