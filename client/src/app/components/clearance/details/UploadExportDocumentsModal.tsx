import { useState } from "react";
import { Button } from "@/app/ui/Button";
import { Upload, Eye } from "lucide-react";

interface UploadExportDocumentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobId: string;
}

const initialDocuments = [
  { id: 1, type: "Shipping Bill", status: "Not Uploaded", date: "---" },
  { id: 2, type: "Custom Gate Pass", status: "Not Uploaded", date: "---" },
  { id: 3, type: "OC Copy", status: "Not Uploaded", date: "---" },
  { id: 4, type: "Booking Copy", status: "Not Uploaded", date: "---" },
  { id: 5, type: "VGM", status: "Not Uploaded", date: "---" },
];

export default function UploadExportDocumentsModal({ isOpen, onClose, jobId }: UploadExportDocumentsModalProps) {
  const [documents, setDocuments] = useState(initialDocuments);

  if (!isOpen) return null;

  const handleUpload = (id: number) => {
    // Mock upload action to demonstrate state change
    setDocuments(docs => docs.map(doc =>
      doc.id === id ? { ...doc, status: "Uploaded", date: "June 16, 2026" } : doc
    ));
  };

  const handleSubmit = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl w-full max-w-4xl flex flex-col shadow-2xl p-8">
        <h2 className="text-xl font-semibold text-center text-gray-900 mb-8">Upload Export Documents</h2>

        <div className="border border-gray-100 rounded-xl overflow-hidden mb-8">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#F3F4F6]">
                <th className="py-4 px-6 text-sm font-medium text-gray-700">Document Type</th>
                <th className="py-4 px-6 text-sm font-medium text-gray-700">Status</th>
                <th className="py-4 px-6 text-sm font-medium text-gray-700">Upload Date</th>
                <th className="py-4 px-6 text-sm font-medium text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {documents.map((doc, idx) => (
                <tr key={doc.id} className={idx !== documents.length - 1 ? "border-b border-gray-50" : ""}>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">{doc.type}</td>
                  <td className="py-4 px-6">
                    <span className={`text-sm font-medium ${doc.status === 'Uploaded' ? 'text-[#027A48]' : 'text-[#D92D20]'}`}>
                      {doc.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">{doc.date}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleUpload(doc.id)}
                        className="w-8 h-8 rounded-md bg-[#E5E7EB] flex items-center justify-center hover:bg-gray-300 transition-colors"
                      >
                        <Upload className="w-4 h-4 text-gray-700" />
                      </button>
                      {doc.status === 'Uploaded' && (
                        <button className="w-8 h-8 rounded-md bg-[#E5E7EB] flex items-center justify-center hover:bg-gray-300 transition-colors">
                          <Eye className="w-4 h-4 text-gray-700" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 mt-auto">
          <Button
            variant="outline"
            onClick={onClose}
            className="px-8 py-2.5 h-auto cursor-pointer text-[#075FB7] border-[#075FB7] hover:bg-blue-50 font-semibold rounded-lg"
          >
            Cancel
          </Button>
          <Button
            variant="gradient"
            onClick={handleSubmit}
            className="px-8 py-2.5 h-auto cursor-pointer hover:bg-[#075FB7]/90 text-white font-semibold rounded-lg"
          >
            Update
          </Button>
        </div>
      </div>
    </div>
  );
}
