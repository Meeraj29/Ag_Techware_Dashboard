"use client";
import { AlertTriangle, CalendarPlus2Icon, ChevronDownIcon } from 'lucide-react';
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { setCalculatorField, calculateVGM } from "../../redux/features/vgmSlice";

export default function VGMCalculatorForm() {
  const dispatch = useAppDispatch();
  const calculator = useAppSelector((state) => state.vgm.calculator);

  const { containerNo, isoType, cargoWeight, tareWeight, dunnage, finalVGM, finalVGMTons } = calculator;

  const handleFieldChange = (field: string, value: string) => {
    dispatch(setCalculatorField({ field: field as any, value }));
  };

  const handleCalculate = () => {
    dispatch(calculateVGM());
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <div className="text-primary">
            <CalendarPlus2Icon />
          </div>
          <h2 className="text-[20px] font-semibold text-[#000000]">VGM Calculator</h2>
        </div>
        <span className="text-[#059669] text-[14px] font-medium">Current Session</span>
      </div>

      <div className="space-y-4">
        {/* Container Number */}
        <div>
          <label className="text-[14px] font-medium text-[#000000] mb-2">Container Number</label>
          <input 
            type="text" 
            value={containerNo}
            onChange={(e) => handleFieldChange('containerNo', e.target.value)}
            className="w-full bg-[#F4F4F4] border-none rounded-lg px-4 py-3 text-[14px] text-[#000000] font-medium focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        {/* ISO Type */}
        <div>
          <label className="text-[14px] font-medium text-[#000000] mb-2">ISO Type</label>
          <div className="relative">
            <select 
              value={isoType}
              onChange={(e) => handleFieldChange('isoType', e.target.value)}
              className="w-full bg-[#F4F4F4] border-none rounded-lg px-4 py-3 text-[14px] text-[#000000] font-medium appearance-none focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option>40HC - High Cube</option>
              <option>20' Std</option>
              <option>40' Dry HC</option>
              <option>45' HC</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-400">
              <ChevronDownIcon />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Cargo Weight */}
          <div>
            <label className="text-[14px] font-medium text-[#000000] mb-2">Cargo Weight (KG)</label>
            <div className="relative">
              <select 
                value={cargoWeight}
                onChange={(e) => handleFieldChange('cargoWeight', e.target.value)}
                className="w-full bg-[#F4F4F4] border-none rounded-lg px-4 py-3 text-[14px] text-[#000000] font-medium appearance-none focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option>22500</option>
                <option>21450</option>
                <option>19800</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-400">
                <ChevronDownIcon />
              </div>
            </div>
          </div>

          {/* Tare Weight */}
          <div>
            <label className="text-[14px] font-medium text-[#000000] mb-2">Tare Weight (KG)</label>
            <div className="relative">
              <select 
                value={tareWeight}
                onChange={(e) => handleFieldChange('tareWeight', e.target.value)}
                className="w-full bg-[#F4F4F4] border-none rounded-lg px-4 py-3 text-[14px] text-[#000000] font-medium appearance-none focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option>3750</option>
                <option>3800</option>
                <option>2300</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-400">
                <ChevronDownIcon />
              </div>
            </div>
          </div>
        </div>

        {/* Dunnage */}
        <div>
          <label className="text-[14px] font-medium text-[#000000] mb-2">Dunnage (KG)</label>
          <div className="relative">
            <select 
              value={dunnage}
              onChange={(e) => handleFieldChange('dunnage', e.target.value)}
              className="w-full bg-[#F4F4F4] border-none rounded-lg px-4 py-3 text-[14px] text-[#000000] font-medium appearance-none focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option>120</option>
              <option>150</option>
              <option>200</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-400">
              <ChevronDownIcon />
            </div>
          </div>
        </div>

        {/* Result Box */}
        <div className="bg-[#E5E2FF] rounded-[24px] p-4 mt-3 border border-[#DDD6FE]">
          <p className="text-[14px] font-medium text-[#000000] mb-3">Final Calculated VGM</p>
          <div className="flex justify-between items-baseline mt-1">
            <div className="flex items-baseline gap-1.5">
              <span className="text-[32px] font-semibold text-primary leading-none">{finalVGM.toLocaleString('en-US')}</span>
              <span className="text-[16px] font-semibold text-primary">KG</span>
            </div>
            <span className="text-[16px] font-semibold text-primary">{finalVGMTons} MT</span>
          </div>
        </div>

        {/* Warning Box */}
        <div className="bg-[#BA1A1A4D] rounded-[24px] p-4 flex gap-3 mt-3">
          <AlertTriangle className="text-[#BA1A1A] h-[18px] w-[18px] shrink-0 mt-0.5" />
          <p className="text-[14px] text-[#BA1A1A] font-regular leading-relaxed pr-2">
            Overweight Warning: The calculated VGM exceeds the maximum payload for a 40' Dry HC container (Max: 26,000 KG). Verification required.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <button onClick={handleCalculate} className="w-full bg-gradiate hover:from-[#044890] hover:to-[#044890] text-white py-3 rounded-lg text-[16px] font-medium transition-colors">
            Calculate VGM
          </button>
          <div className="grid grid-cols-3 gap-3">
            <button className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white py-2.5 rounded-lg text-[16px] font-medium transition-colors">
              Save VGM As
            </button>
            <button className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white py-2.5 rounded-lg text-[16px] font-medium transition-colors">
              Save Data
            </button>
            <button className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white py-2.5 rounded-lg text-[16px] font-medium transition-colors">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
