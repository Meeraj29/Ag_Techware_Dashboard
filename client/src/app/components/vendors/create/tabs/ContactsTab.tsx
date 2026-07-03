"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { addContact, updateContact, removeContact } from "../../../../redux/features/vendor/vendorFormSlice";
import { Button } from "../../../../ui/Button";

export default function ContactsTab() {
  const dispatch = useDispatch();
  const contacts = useSelector((state: RootState) => state.vendorForm.contacts);

  const handleAddContact = () => {
    dispatch(addContact({
      id: Date.now().toString(),
      name: "",
      address: "",
      phone: "",
      email: ""
    }));
  };

  return (
    <div className="bg-white rounded-b-xl shadow-sm pb-6">

      <div className="flex items-center justify-end p-6 border-b border-gray-100">
        <Button
          variant="outline"
          onClick={handleAddContact}
          className="font-semibold text-primary border-primary"
        >
          Add Contact
        </Button>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-[#F2F2F2] border-b border-gray-200">
              <th className="py-4 px-6 text-base font-medium text-black  w-16">#</th>
              <th className="py-4 px-6 text-base font-medium text-black w-1/4">Contact Name</th>
              <th className="py-4 px-6 text-base font-medium text-black w-1/4">Address</th>
              <th className="py-4 px-6 text-base font-medium text-black w-1/5">Phone Number</th>
              <th className="py-4 px-6 text-base font-medium text-black w-1/5">Email</th>
              <th className="py-4 px-6 text-base font-medium text-black w-24">Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-8 text-center text-gray-500 text-sm">
                  No contacts added yet. Click "Add Contact" to create one.
                </td>
              </tr>
            ) : (
              contacts.map((contact, index) => (
                <tr key={contact.id} className="border-b border-gray-100 last:border-none">
                  <td className="py-4 px-6 text-sm text-gray-800">{index + 1}</td>
                  <td className="py-4 px-6">
                    <input
                      type="text"
                      placeholder="Contact Name"
                      value={contact.name}
                      onChange={(e) => dispatch(updateContact({ id: contact.id, field: "name", value: e.target.value }))}
                      className="w-full px-4 py-2 bg-[#F2F2F2] border-transparent rounded-md text-sm text-gray-800 outline-none focus:bg-white focus:border-primary focus:ring-1 transition-all"
                    />
                  </td>
                  <td className="py-4 px-6">
                    <textarea
                      placeholder="Address"
                      rows={4}
                      value={contact.address}
                      onChange={(e) => dispatch(updateContact({ id: contact.id, field: "address", value: e.target.value }))}
                      className="w-full px-4 py-2 bg-[#F2F2F2] border border-dashed border-gray-300 rounded-md text-sm text-gray-800 outline-none focus:bg-white focus:border-primary  transition-all resize-none"
                    />
                  </td>
                  <td className="py-4 px-6">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      value={contact.phone}
                      onChange={(e) => dispatch(updateContact({ id: contact.id, field: "phone", value: e.target.value }))}
                      className="w-full px-4 py-2 bg-[#F2F2F2] border-transparent rounded-md text-sm text-gray-800 outline-none focus:bg-white focus:border-primary focus:ring-1 transition-all"
                    />
                  </td>
                  <td className="py-4 px-6">
                    <input
                      type="email"
                      placeholder="Email"
                      value={contact.email}
                      onChange={(e) => dispatch(updateContact({ id: contact.id, field: "email", value: e.target.value }))}
                      className="w-full px-4 py-2 bg-[#F2F2F2] border-transparent rounded-md text-sm text-gray-800 outline-none focus:bg-white focus:border-primary focus:ring-1 transition-all"
                    />
                  </td>
                  <td className="py-4 px-6">
                    <button
                      onClick={() => dispatch(removeContact(contact.id))}
                      className="text-red-500 hover:text-red-700 text-sm font-semibold transition-colors"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
