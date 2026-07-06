"use client";

export default function FastagDashboardWidgets() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_380px] mt-6">
      
      {/* Box A: Additional Expenses Tracker List */}
      <div className="rounded-[24px] border border-gray-100 bg-white p-5 shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-gray-900">Additional Expenses</h3>
            <button className="rounded-lg bg-[#0052cc] px-3 py-1.5 text-[11px] font-bold text-white hover:bg-blue-700">
              Add Expense
            </button>
          </div>

          <div className="space-y-2">
            {[
              { title: "Diesel Refill - Shell Pune", sub: "MH-12-QE-1230 • Today, 10:15 AM", val: "₹8,450", label: "VERIFIED", lCol: "bg-blue-50 text-blue-600 border-blue-100", icon: "⛽" },
              { title: "Parking - IGI Airport T3", sub: "DL-10-ZZ-0012 • Yesterday", val: "₹450", label: "PENDING", lCol: "bg-amber-50 text-amber-600 border-amber-100", icon: "🅿️" },
              { title: "Diesel Refill - HP Delhi", sub: "HR-55-AT-4432 • 22 Oct", val: "₹12,200", label: "VERIFIED", lCol: "bg-blue-50 text-blue-600 border-blue-100", icon: "⛽" },
              { title: "Parking - IGI Airport T3", sub: "DL-10-ZZ-0012 • Yesterday", val: "₹450", label: "PENDING", lCol: "bg-amber-50 text-amber-600 border-amber-100", icon: "🅿️" },
            ].map((exp, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl border border-gray-50 bg-[#f8f9fa]">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{exp.icon}</span>
                  <div>
                    <h4 className="text-xs font-bold text-gray-800">{exp.title}</h4>
                    <span className="text-[10px] text-gray-400">{exp.sub}</span>
                  </div>
                </div>
                <div className="text-right flex flex-col items-end">
                  <span className="text-xs font-bold text-gray-900">{exp.val}</span>
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
          <h3 className="text-sm font-bold text-gray-900 mb-4">Expense Distribution</h3>
          <div className="flex items-center gap-6">
            <div className="relative flex items-center justify-center w-20 h-20 rounded-xl bg-amber-800 border-4 border-amber-900 text-white flex-col">
              <span className="text-[9px] uppercase tracking-wider text-amber-200">Total</span>
              <span className="text-xs font-extrabold">₹18.5L</span>
            </div>
            <div className="flex-1 space-y-2 text-[11px]">
              <div className="flex justify-between items-center"><div className="flex items-center gap-1.5 font-medium text-gray-600"><span className="h-2 w-2 rounded-full bg-blue-600"/> FASTag (Tolls)</div><span className="font-bold text-gray-800">68%</span></div>
              <div className="flex justify-between items-center"><div className="flex items-center gap-1.5 font-medium text-gray-600"><span className="h-2 w-2 rounded-full bg-amber-700"/> Fuel Costs</div><span className="font-bold text-gray-800">22%</span></div>
              <div className="flex justify-between items-center"><div className="flex items-center gap-1.5 font-medium text-gray-600"><span className="h-2 w-2 rounded-full bg-slate-500"/> Parking & Fine</div><span className="font-bold text-gray-800">10%</span></div>
            </div>
          </div>
        </div>

        {/* Box C: Attention Required Quick Balances List */}
        <div className="rounded-[24px] border border-gray-100 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-1.5 text-xs text-red-600 font-bold mb-3 uppercase tracking-wider">
            <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse" /> Attention Required
          </div>
          <div className="space-y-1 text-xs">
            {[
              { reg: "KA-01-JK-2210", val: "₹142" },
              { reg: "TS-09-ER-3342", val: "₹312" },
              { reg: "MH-12-DE-9944", val: "₹405" },
            ].map((item, idx) => (
              <div key={idx} className="flex justify-between py-2 border-b border-gray-50 last:border-0 font-medium text-gray-600">
                <span>{item.reg}</span>
                <span className="font-bold text-red-600">{item.val}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}