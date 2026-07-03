import { Toggle } from "@/app/ui/Toggle";

interface RouteDetailsFormProps {
  data: any;
  onChange: (data: any) => void;
}

export default function RouteDetailsForm({ data, onChange }: RouteDetailsFormProps) {
  
  const InputSelect = ({ label, required, value, field, placeholder = "Select" }: { label: string, required?: boolean, value: string, field: string, placeholder?: string }) => (
    <div className="flex flex-col gap-1.5">
      <label className="text-[13px] font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select 
        value={value}
        onChange={(e) => onChange({ ...data, [field]: e.target.value })}
        className="w-full bg-[#F3F4F6] text-gray-600 rounded-lg px-4 py-3 text-[13px] border border-transparent focus:border-[#075FB7] focus:ring-1 focus:ring-[#075FB7] outline-none appearance-none"
      >
        <option value="">{placeholder}</option>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
      </select>
    </div>
  );

  const InputText = ({ label, required, value, field }: { label: string, required?: boolean, value: string, field: string }) => (
    <div className="flex flex-col gap-1.5">
      <label className="text-[13px] font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input 
        type="text"
        value={value}
        onChange={(e) => onChange({ ...data, [field]: e.target.value })}
        className="w-full bg-[#F3F4F6] text-gray-900 rounded-lg px-4 py-3 text-[13px] border border-transparent focus:border-[#075FB7] focus:ring-1 focus:ring-[#075FB7] outline-none"
      />
    </div>
  );

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm mb-6 mt-6">
      <h2 className="text-base font-bold text-gray-900 mb-6">Route Details</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <InputSelect label="Place of Receipt" value={data.placeOfReceipt || ''} field="placeOfReceipt" />
        <InputSelect label="Port of Loading" required value={data.pol || ''} field="pol" placeholder="Search port" />
        <InputSelect label="Port of Discharge" required value={data.pod || ''} field="pod" />

        <InputSelect label="Place of Delivery" value={data.placeOfDelivery || ''} field="placeOfDelivery" placeholder="Search Place of delivery" />
        <InputSelect label="ETD" value={data.etd || ''} field="etd" />
        <InputSelect label="ETA/ATA" value={data.eta || ''} field="eta" />

        <InputSelect label="Carrier" required value={data.carrier || ''} field="carrier" />
        <InputSelect label="INCO Term" value={data.incoTerm || ''} field="incoTerm" />
        <InputText label="Free Time" value={data.freeTime || ''} field="freeTime" />
      </div>

      <div className="mt-6">
        <label className="text-[13px] font-medium text-gray-700 block mb-2">Remarks</label>
        <textarea
          value={data.remarks || ''}
          placeholder="remarks"
          onChange={(e) => onChange({ ...data, remarks: e.target.value })}
          className="w-full bg-[#F3F4F6] text-gray-900 placeholder:text-gray-500 rounded-lg px-4 py-3 text-[13px] min-h-[100px] border border-transparent focus:border-[#075FB7] focus:ring-1 focus:ring-[#075FB7] outline-none resize-none"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-medium text-gray-700 mb-2">Place of Delivery Same as POD</label>
          <Toggle 
            checked={data.deliverySameAsPod || false} 
            onChange={(c) => onChange({ ...data, deliverySameAsPod: c })} 
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-medium text-gray-700 mb-2">CFS Required</label>
          <Toggle 
            checked={data.cfsRequired || false} 
            onChange={(c) => onChange({ ...data, cfsRequired: c })} 
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-medium text-gray-700 mb-2">Is Transhipment Required</label>
          <Toggle 
            checked={data.isTranshipmentRequired || false} 
            onChange={(c) => onChange({ ...data, isTranshipmentRequired: c })} 
            labelLeft="No"
            labelRight="Yes"
          />
        </div>
      </div>
    </div>
  );
}
