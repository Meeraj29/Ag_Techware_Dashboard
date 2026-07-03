import { Edit2 } from "lucide-react";

export default function AssignedTeams({ teams }: { teams: any[] }) {
  return (
    <div className="bg-[#F8F9FA] rounded-2xl border border-gray-100 p-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-bold text-gray-900">Assigned Teams</h3>
        <button className="flex items-center gap-1 text-[11px] font-bold text-[#075FB7] hover:underline">
          <Edit2 className="w-3 h-3" /> Edit
        </button>
      </div>
      
      <div className="flex flex-col gap-3">
        {teams.map(team => (
          <div key={team.id} className="flex items-center justify-between bg-white border border-gray-100 rounded-lg p-2.5">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold ${team.assigned ? 'bg-gray-200 text-gray-700' : 'bg-gray-200 text-transparent'}`}>
                {team.assigned ? team.initials : ''}
              </div>
              <div>
                <p className="text-[13px] font-bold text-gray-900">{team.assigned ? team.name : 'Not Assigned'}</p>
                <p className="text-[11px] text-gray-500">{team.assigned ? team.role : team.name}</p>
              </div>
            </div>
            
            {!team.assigned ? (
              <button className="px-4 py-1 text-xs font-bold text-[#075FB7] border border-[#075FB7] rounded-md hover:bg-blue-50 transition-colors">
                Add
              </button>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
