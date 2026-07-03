import { Ship, Clock, AlertTriangle, BarChart2 } from "lucide-react";

function MetricCard({
  value,
  title,
  badge,
  icon: Icon,
  badgeType = "positive"
}: {
  value: string;
  title: string;
  badge: string;
  icon: any;
  badgeType?: "positive" | "negative" | "neutral" | "efficiency";
}) {
  const badgeClasses = {
    positive: "bg-[#4F46E533] text-[#4F46E5]",
    negative: "bg-[#BA1A1A33] text-[#BA1A1A]",
    neutral: "bg-[#D9770633] text-[#D97706]",
    efficiency: "bg-[#05966933] text-[#059669]",
  };

  return (
    <div className="bg-[#F4F4F4] rounded-2xl p-6 flex flex-col justify-between h-36 border border-gray-100 relative overflow-hidden">
      <div className="flex justify-between items-start z-10">
        <div>
          <p className="text-lg font-semibold text-black mb-1">{title}</p>
          <h2 className="text-2xl font-semibold text-black tracking-tight">{value}</h2>
        </div>
        <div className="w-10 h-10 rounded-md bg-[#DADADA] flex items-center justify-center shadow-sm text-gray-600">
          <Icon className="w-5 h-5" strokeWidth={1.5} />
        </div>
      </div>

      <div className="flex justify-between items-center z-10">
        <p className={`text-xs font-medium ${title === "Jobs" ? "text-[#4F46E5]" :
          title === "Critical" ? "text-[#BA1A1A]" :
            title === "Efficiency" ? "text-[#059669]" :
              "text-[#D97706]"
          }`}>
          {title === "Jobs" ? "Awaiting Clearance" : title === "Critical" ? "Document Pendency" : title === "Efficiency" ? "Avg. Processing Time" : "Released today"}
        </p>
        <span className={`text-[10px] font-semibold px-4 py-1 rounded-full ${badgeClasses[badgeType]}`}>
          {badge}
        </span>
      </div>
    </div>
  );
}

export default function ClearanceMetrics() {
  return (
    <div className="bg-white rounded-xl mb-8 p-6 shadow-sm border border-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          value="1,284"
          title="Jobs"
          badge="+4.2%"
          icon={Ship}
          badgeType="positive"
        />
        <MetricCard
          value="42"
          title="Critical"
          badge="Urgent"
          icon={Clock}
          badgeType="negative"
        />
        <MetricCard
          value="18.4h"
          title="Efficiency"
          badge="-4.2h"
          icon={AlertTriangle}
          badgeType="efficiency"
        />
        <MetricCard
          value="1,284"
          title="Units"
          badge="Live Feed"
          icon={BarChart2}
          badgeType="neutral"
        />
      </div>
    </div>
  );
}
