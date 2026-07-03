import JobsHeader from "../../components/jobs/JobsHeader";
import MetricsRow from "../../components/jobs/MetricsRow";
import JobsTableContainer from "../../components/jobs/JobsTableContainer";
import RecentActivity from "../../components/jobs/RecentActivity";

export default function JobsPage() {
  return (
    <div className="min-h-full p-4 bg-[#F8F9FA] flex flex-col">
      <div className="max-w-9xl w-full mx-auto">
        <JobsHeader />
        <MetricsRow />
        <JobsTableContainer />
        <RecentActivity />
      </div>
    </div>
  );
}