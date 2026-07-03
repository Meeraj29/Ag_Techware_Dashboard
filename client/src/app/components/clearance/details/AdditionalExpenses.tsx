import { Trash2 } from "lucide-react";

export default function AdditionalExpenses({ expenses }: { expenses?: any[] }) {
  const total = expenses?.reduce((acc, curr) => acc + curr.amount, 0) || 0;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-base font-bold text-gray-900">Additional Expenses</h3>
        <button className="text-sm font-semibold text-[#075FB7] hover:underline flex items-center gap-1">
          + Add
        </button>
      </div>

      <div className="flex flex-col flex-1">
        {expenses?.map((expense) => (
          <div key={expense.id} className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4 last:mb-0">
            <span className="text-sm font-medium text-gray-900">{expense.title}</span>
            
            <div className="flex items-center gap-4">
              {expense.status && (
                <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                  expense.status === 'Pending' ? 'bg-[#FEEBC8] text-[#DD6B20]' : 'bg-[#C6F6D5] text-[#22543D]'
                }`}>
                  {expense.status}
                </span>
              )}
              <span className="text-sm font-medium text-gray-900">
                ₹{expense.amount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
              <button className="text-gray-700 hover:text-red-500 transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}

        <div className="flex items-center justify-between pt-4 mt-auto">
          <span className="text-sm font-medium text-gray-500">Total</span>
          <span className="text-lg font-bold text-gray-900">
            ₹{total.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
        </div>
      </div>
    </div>
  );
}
