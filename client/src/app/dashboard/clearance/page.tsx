import ClearanceHeader from "../../components/clearance/ClearanceHeader";
import ClearanceMetrics from "../../components/clearance/ClearanceMetrics";
import ClearanceTableContainer from "../../components/clearance/ClearanceTableContainer";
import ClearanceRecentActivity from "../../components/clearance/ClearanceRecentActivity";
import CCTInsights from "../../components/clearance/CCTInsights";

export default function ClearancePage() {
  return (
    <div className="min-h-full p-4 bg-[#F8F9FA] flex flex-col">
      <div className=" w-full mx-auto">
        <ClearanceHeader />
        <ClearanceMetrics />
        <ClearanceTableContainer />
        <div className="flex flex-col lg:flex-row gap-6 mt-6">
          <ClearanceRecentActivity />
          <CCTInsights />
        </div>
      </div>
    </div>
  );
}
