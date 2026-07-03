import React from 'react';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  labelLeft?: string;
  labelRight?: string;
  className?: string;
}

export function Toggle({ checked, onChange, labelLeft, labelRight, className = '' }: ToggleProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {labelLeft && <span className="text-sm font-medium text-gray-700">{labelLeft}</span>}
      <button 
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors cursor-pointer ${checked ? 'bg-[#075FB7]' : 'bg-gray-300'}`}
      >
        <span 
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${checked ? 'translate-x-4' : 'translate-x-1'}`} 
        />
      </button>
      {labelRight && <span className="text-sm font-medium text-gray-700">{labelRight}</span>}
    </div>
  );
}
