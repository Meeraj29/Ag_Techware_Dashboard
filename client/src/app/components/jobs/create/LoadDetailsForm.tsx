import { Trash2 } from "lucide-react";
import { Button } from "@/app/ui/Button";

interface LoadDetailsFormProps {
  containers: any[];
  onChange: (containers: any[]) => void;
}

export default function LoadDetailsForm({ containers, onChange }: LoadDetailsFormProps) {
  
  const handleAddContainer = () => {
    onChange([...containers, { id: Date.now().toString(), type: '', quantity: '', weight: '', unit: 'KG' }]);
  };

  const handleRemoveContainer = (id: string) => {
    onChange(containers.filter(c => c.id !== id));
  };

  const handleUpdateContainer = (id: string, field: string, value: string) => {
    onChange(containers.map(c => c.id === id ? { ...c, [field]: value } : c));
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm mb-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-base font-bold text-gray-900">Load Details</h2>
        <Button 
          variant="outline" 
          onClick={handleAddContainer}
          className="px-4 py-2 h-auto text-[#075FB7] border-[#075FB7] font-semibold rounded-lg hover:bg-blue-50 cursor-pointer text-sm"
        >
          Add Container details
        </Button>
      </div>
      
      <div className="w-full">
        {/* Table Header */}
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 mb-2 px-2">
          <div className="text-[13px] font-bold text-gray-900">Container Type</div>
          <div className="text-[13px] font-bold text-gray-900">Quantity</div>
          <div className="text-[13px] font-bold text-gray-900">Gross Weight</div>
          <div className="text-[13px] font-bold text-gray-900">Unit</div>
          <div className="text-[13px] font-bold text-gray-900 w-12 text-center">Action</div>
        </div>

        {/* Rows */}
        <div className="flex flex-col gap-3">
          {containers.map((container) => (
            <div key={container.id} className="grid grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 items-center">
              <input 
                type="text"
                placeholder="Select container type"
                value={container.type}
                onChange={(e) => handleUpdateContainer(container.id, 'type', e.target.value)}
                className="w-full bg-[#F3F4F6] text-gray-900 placeholder:text-gray-500 rounded-lg px-4 py-2.5 text-[13px] border border-transparent focus:border-[#075FB7] focus:ring-1 focus:ring-[#075FB7] outline-none"
              />
              <input 
                type="number"
                value={container.quantity}
                onChange={(e) => handleUpdateContainer(container.id, 'quantity', e.target.value)}
                className="w-full bg-[#F3F4F6] text-gray-900 rounded-lg px-4 py-2.5 text-[13px] border border-transparent focus:border-[#075FB7] focus:ring-1 focus:ring-[#075FB7] outline-none"
              />
              <input 
                type="text"
                value={container.weight}
                onChange={(e) => handleUpdateContainer(container.id, 'weight', e.target.value)}
                className="w-full bg-[#F3F4F6] text-gray-900 rounded-lg px-4 py-2.5 text-[13px] border border-transparent focus:border-[#075FB7] focus:ring-1 focus:ring-[#075FB7] outline-none"
              />
              <input 
                type="text"
                value={container.unit}
                disabled
                className="w-full bg-[#F3F4F6] text-gray-500 rounded-lg px-4 py-2.5 text-[13px] border border-transparent outline-none"
              />
              <button 
                onClick={() => handleRemoveContainer(container.id)}
                className="w-12 h-10 flex items-center justify-center rounded-lg bg-[#FDF2F2] hover:bg-[#FCE8E8] transition-colors group cursor-pointer"
              >
                <Trash2 className="w-4 h-4 text-red-500" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
