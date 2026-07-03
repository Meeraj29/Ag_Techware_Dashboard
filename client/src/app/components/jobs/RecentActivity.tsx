import { CheckCircle2, Truck, AlertCircle } from "lucide-react";

export default function RecentActivity() {
  const activities = [
    {
      id: 1,
      title: "Carrier Assigned",
      description: "Maersk Line for",
      time: "2m ago",
      icon: CheckCircle2,
      iconColor: "text-[#10B981]",
      borderColor: "border-[#10B981]",
    },
    {
      id: 2,
      title: "Invoice Generated",
      description: "Financial team processed #INV-4022",
      time: "1h ago",
      icon: Truck,
      iconColor: "text-[#3525CD]",
      borderColor: "border-[#3525CD]",
    },
    {
      id: 3,
      title: "Exception Flagged",
      description: "Customs hold reported for #ORD-89245",
      time: "1h ago",
      icon: AlertCircle,
      iconColor: "text-[#F59E0B]",
      borderColor: "border-[#F59E0B]",
    },
    {
      id: 4,
      title: "Scheduled Update",
      description: "ETA refreshed for West Coast fleet",
      time: "2h ago",
      icon: CheckCircle2,
      iconColor: "text-[#10B981]",
      borderColor: "border-[#10B981]",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mt-6">
      <h3 className="text-xl font-semibold text-black mb-2">Recent Activity</h3>
      <div className="flex flex-col">
        {activities.map((activity, index) => {
          const Icon = activity.icon;
          return (
            <div
              key={activity.id}
              className={`flex items-center justify-between py-4 ${index !== activities.length - 1 ? 'border-b border-gray-100' : ''}`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 ${activity.borderColor}`}>
                  <Icon className={`w-4 h-4 ${activity.iconColor}`} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{activity.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{activity.description}</p>
                </div>
              </div>
              <span className="text-xs text-gray-500">{activity.time}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
