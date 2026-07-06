"use client";

import Image from "next/image";
import { AlertCircle } from "lucide-react";

export default function FastagDashboardWidgets() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_380px] mt-6">
      
      {/* Box A: Additional Expenses Tracker List */}
      <div className="rounded-[24px] border border-gray-100 bg-white p-5 shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[20px] font-semibold text-black">Additional Expenses</h3>
            <button className="rounded-lg bg-linear-to-r from-[#0863BD] to-[#04458B] border-2 border-primary px-3 py-1.5 text-[16px] font-medium text-white hover:bg-blue-700">
              Add Expense
            </button>
          </div>

          <div className="space-y-2">
            {[
              { title: "Diesel Refill - Shell Pune", sub: "MH-12-QE-1230 • Today, 10:15 AM", val: "₹8,450", label: "VERIFIED", lCol: "bg-[#D5E3FC] text-[#57657A] border-blue-100", imgSrc: "/diesel.svg" },
              { title: "Parking - IGI Airport T3", sub: "DL-10-ZZ-0012 • Yesterday", val: "₹450", label: "PENDING", lCol: "bg-[#FFDBCD] text-[#7D2D00] border-amber-100", imgSrc: "/parking.svg" },
              { title: "Diesel Refill - HP Delhi", sub: "HR-55-AT-4432 • 22 Oct", val: "₹12,200", label: "VERIFIED", lCol: "bg-[#D5E3FC] text-[#57657A] border-blue-100", imgSrc: "/diesel.svg" },
              { title: "Parking - IGI Airport T3", sub: "DL-10-ZZ-0012 • Yesterday", val: "₹450", label: "PENDING", lCol: "bg-[#FFDBCD] text-[#7D2D00] border-amber-100", imgSrc: "/parking.svg" },
            ].map((exp, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl border border-gray-50 bg-[#f8f9fa]">
                <div className="flex items-center gap-3">
                  <div className="w-[40px] h-[40px] relative shrink-0 flex items-center justify-center">
                    <Image 
                      src={exp.imgSrc} 
                      alt={exp.title} 
                      width={40} 
                      height={40} 
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-[16px] font-semibold text-[#191B23]">{exp.title}</h4>
                    <span className="text-[12px] text-[#515F74]">{exp.sub}</span>
                  </div>
                </div>
                <div className="text-right flex flex-col items-end">
                  <span className="text-[16px] font-bold text-[#191B23]">{exp.val}</span>
                  <span className={`text-[8px] font-bold tracking-wide px-1.5 py-0.5 rounded border mt-0.5 ${exp.lCol}`}>{exp.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="text-xs font-bold text-blue-600 hover:underline text-center w-full mt-4 block">View All Expenses</button>
      </div>

      {/* Side Column Widgets (Distribution Chart & Attention Required Items) */}
      <div className="space-y-4 flex flex-col justify-between">
        
        {/* Box B: Expense Distribution Breakdown Chart Preview */}
        <div className="rounded-[24px] border border-gray-100 bg-white p-5 shadow-sm">
          <h3 className="text-[20px] font-semibold text-black mb-4">Expense Distribution</h3>
          
          <div className="bg-[#F9F9F9] p-5 rounded-[20px] flex items-center justify-between gap-6">
            {/* Optimized to border-12 based on tailwind suggestion */}
            <div className="w-[84px] h-[84px] rounded-[12px] border-16 border-[#943700] bg-white flex flex-col items-center justify-center shrink-0">
              <span className="text-[12px] font-semibold text-[#191B23] leading-none mb-0.5">Total</span>
              <span className="text-[16px] font-bold text-[#191B23] leading-none">₹18.5L</span>
            </div>
            
            <div className="flex-1 space-y-3 text-[14px]">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 font-medium text-[#191B23]">
                  <span className="h-3 w-3 rounded-full bg-[#004AC6] shrink-0" /> 
                  FASTag (Tolls)
                </div>
                <span className="font-bold text-[#191B23]">68%</span>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 font-medium text-[#191B23]">
                  <span className="h-3 w-3 rounded-full bg-[#943700] shrink-0" /> 
                  Fuel Costs
                </div>
                <span className="font-bold text-[#191B23]">22%</span>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 font-medium text-[#191B23]">
                  <span className="h-3 w-3 rounded-full bg-[#515F74] shrink-0" /> 
                  Parking & Fine
                </div>
                <span className="font-bold text-[#191B23]">10%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Box C: Attention Required Quick Balances List */}
        <div className="rounded-[24px] border border-gray-100 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2 text-[12px] font-semibold text-[#BA1A1A] mb-4">
            <AlertCircle className="h-5 w-5 fill-[#BA1A1A] text-white shrink-0" /> 
            Attention Required
          </div>
          
          <div className="space-y-2">
            {[
              { reg: "KA-01-JK-2210", val: "₹142" },
              { reg: "TS-09-ER-3342", val: "₹312" },
              { reg: "MH-12-DE-9944", val: "₹405" },
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="flex justify-between items-center bg-[#F9F9F9] px-4 py-3 rounded-xl text-[16px] font-medium"
              >
                <span className="text-[#191B23] font-normal">{item.reg}</span>
                <span className="font-bold text-[#BA1A1A]">{item.val}</span>
              </div>
            ))}
          </div>
        </div>

      </div> {/* ← Correctly closes the side column div layout container */}

    </div> /* ← Correctly closes the parent root grid container */
  );
}