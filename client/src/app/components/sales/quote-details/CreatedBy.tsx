import { CreatedBy as CreatedByType } from "../../../types/sales";

export default function CreatedBy({ creator }: { creator?: CreatedByType }) {
  if (!creator) return null;

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
      <h2 className="text-lg font-medium text-black mb-4">Created by</h2>

      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-[#C7E3FF] text-[#075FB7] rounded-full flex items-center justify-center font-medium text-lg">
          {creator.initials}
        </div>
        <div>
          <h3 className="text-sm font-medium text-black">{creator.name}</h3>
          <p className="text-xs text-gray-500">{creator.date}</p>
        </div>
      </div>
    </div>
  );
}
