import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FieldProps {
  label: string;
  type?: "select" | "text";
  placeholder: string;
  required?: boolean;
}

function FormField({ label, type = "select", placeholder, required = true }: FieldProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-sm font-semibold text-gray-900">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        {type === "select" && (
          <>
            <select defaultValue="" className="w-full h-11 px-4 bg-[#F5F5F5] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-gray-700 appearance-none cursor-pointer text-sm font-medium">
              <option value="" disabled className="text-gray-400">{placeholder}</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-900 pointer-events-none font-bold" />
          </>
        )}

        {type === "text" && (
          <input
            type="text"
            placeholder={placeholder}
            className="w-full h-11 px-4 bg-[#F5F5F5] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-gray-700 text-sm font-medium placeholder:text-gray-400"
          />
        )}
      </div>
    </div>
  );
}

function ToggleField({ label, required = true }: { label: string, required?: boolean }) {
  const [value, setValue] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold text-gray-900">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="flex items-center gap-3 mt-2 text-sm font-semibold text-gray-900">
        <span>No</span>
        <button
          type="button"
          onClick={() => setValue(!value)}
          className={`relative inline-flex h-5 w-10 items-center rounded-full transition-colors ${value ? 'bg-[#075FB7]' : 'bg-[#E4EDF7]'}`}
        >
          <span className={`inline-block h-4 w-4 transform rounded-full transition-transform ${value ? 'translate-x-5 bg-white' : 'translate-x-1 bg-[#075FB7]'}`} />
        </button>
        <span>Yes</span>
      </div>
    </div>
  );
}

export default function CargoDetails() {
  return (
    <div className="w-full mb-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Cargo Details</h2>

      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FormField label="Cargo Type" type="select" placeholder="Choose Category" />
          <FormField label="Number of Packages" type="text" placeholder="Enter Number" />
          <FormField label="Gross Weight" type="text" placeholder="Enter in KG" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField label="Volume (CBM)" type="text" placeholder="Enter Volume" />
          <FormField label="Container Type" type="select" placeholder="Select container type" />
        </div>

        <div className="flex items-center gap-12 pt-2">
          <ToggleField label="Dangerous Goods" />
          <ToggleField label="Temperature Controlled" />
        </div>
      </div>
    </div>
  );
}
