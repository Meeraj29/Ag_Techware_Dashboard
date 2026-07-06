'use client';

import React, { useState } from 'react';
import { Eye, Download, Trash2, FileText, FileImage, FileSpreadsheet, FileArchive, FolderOpen, ShieldCheck, Receipt, Files } from 'lucide-react';

type DocCategory = 'All Documents' | 'Agreements' | 'KYC/Compliance' | 'Invoices';

const categories: { label: DocCategory; count: number; icon: React.ReactNode }[] = [
  { label: 'All Documents', count: 12, icon: <Files className="w-4 h-4" /> },
  { label: 'Agreements', count: 3, icon: <FileText className="w-4 h-4" /> },
  { label: 'KYC/Compliance', count: 2, icon: <ShieldCheck className="w-4 h-4" /> },
  { label: 'Invoices', count: 7, icon: <Receipt className="w-4 h-4" /> },
];

const documents = [
  {
    name: 'MSA_2023_GlobalFreight.pdf',
    ext: 'pdf',
    type: 'Agreement',
    typeClass: 'bg-gray-100 text-gray-600',
    uploaded: 'Oct 12, 2023',
    category: 'Agreements',
  },
  {
    name: 'KYC_Verification_Certificate.jpg',
    ext: 'jpg',
    type: 'KYC',
    typeClass: 'bg-[#E8F0FE] text-[#1A73E8]',
    uploaded: 'Nov 05, 2023',
    category: 'KYC/Compliance',
  },
  {
    name: 'Amendment_Clause_14A.docx',
    ext: 'docx',
    type: 'Invoice',
    typeClass: 'bg-gray-100 text-gray-600',
    uploaded: 'Dec 20, 2023',
    category: 'Invoices',
  },
  {
    name: 'Tax_Exemption_Form_2024.pdf',
    ext: 'pdf',
    type: 'Agreement',
    typeClass: 'bg-gray-100 text-gray-600',
    uploaded: 'Jan 15, 2024',
    category: 'Agreements',
  },
];

function FileIcon({ ext }: { ext: string }) {
  if (ext === 'pdf') return <FileText className="w-5 h-5 text-[#DB4437]" />;
  if (ext === 'jpg' || ext === 'png') return <FileImage className="w-5 h-5 text-[#1E8449]" />;
  if (ext === 'docx' || ext === 'doc') return <FileText className="w-5 h-5 text-[#1A73E8]" />;
  if (ext === 'xlsx') return <FileSpreadsheet className="w-5 h-5 text-[#1E8449]" />;
  return <FileArchive className="w-5 h-5 text-gray-400" />;
}

export function CustomerDocuments() {
  const [activeCategory, setActiveCategory] = useState<DocCategory>('All Documents');

  const filtered = activeCategory === 'All Documents'
    ? documents
    : documents.filter(d => d.category === activeCategory);

  return (
    <div className="flex flex-col gap-6">

      {/* Storage Card */}
      <div className="bg-white border border-gray-200 rounded-[20px] p-6">
        <h3 className="font-bold text-[16px] text-gray-800 mb-5">Storage</h3>
        <div className="flex justify-between items-end mb-2">
          <span className="text-[13px] font-medium text-gray-600">Storage Usage</span>
          <span className="text-[13px] font-bold text-[#1E8449]">98/100</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2.5 mb-2">
          <div className="bg-[#1E8449] h-2.5 rounded-full transition-all" style={{ width: '98%' }}></div>
        </div>
        <p className="text-[12px] text-gray-400">42.8 MB Of 50.0 MB Used</p>
      </div>

      {/* Documents + Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6 items-start">

        {/* Documents Table */}
        <div className="bg-white border border-gray-200 rounded-[20px] p-6">
          <div className="flex items-center gap-3 mb-6">
            <h3 className="font-bold text-[16px] text-gray-800">Documents</h3>
            <span className="text-[12px] font-semibold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
              {filtered.length} Files
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[560px]">
              <thead>
                <tr className="bg-[#F8F9FA]">
                  <th className="py-3 px-4 text-[13px] font-medium text-gray-500 rounded-tl-[8px]">Document Name</th>
                  <th className="py-3 px-4 text-[13px] font-medium text-gray-500">Type</th>
                  <th className="py-3 px-4 text-[13px] font-medium text-gray-500">Uploaded Date</th>
                  <th className="py-3 px-4 text-[13px] font-medium text-gray-500 rounded-tr-[8px]">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.map((doc, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <FileIcon ext={doc.ext} />
                        <span className="text-[13px] font-medium text-gray-800">{doc.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`text-[12px] font-semibold px-2.5 py-1 rounded-full ${doc.typeClass}`}>
                        {doc.type}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-[13px] text-gray-600">{doc.uploaded}</td>
                    <td className="py-4 px-4">
                      <div className="flex gap-2">
                        <button className="w-8 h-8 rounded-[6px] bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition text-gray-500">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="w-8 h-8 rounded-[6px] bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition text-gray-500">
                          <Download className="w-4 h-4" />
                        </button>
                        <button className="w-8 h-8 rounded-[6px] bg-gray-100 flex items-center justify-center hover:bg-red-100 hover:text-[#DB4437] transition text-gray-500">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Document Categories */}
        <div className="bg-primary rounded-[20px] p-6 text-white">
          <h3 className="font-bold text-[16px] mb-5">Document Categories</h3>
          <div className="flex flex-col gap-2">
            {categories.map((cat) => (
              <button
                key={cat.label}
                onClick={() => setActiveCategory(cat.label)}
                className={`flex items-center justify-between px-4 py-3 rounded-[10px] text-left transition ${
                  activeCategory === cat.label
                    ? 'bg-white text-primary'
                    : 'hover:bg-white/10 text-white'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  {cat.icon}
                  <span className="text-[14px] font-semibold">{cat.label}</span>
                </div>
                <span className={`text-[13px] font-bold ${activeCategory === cat.label ? 'text-primary' : 'text-white/70'}`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
