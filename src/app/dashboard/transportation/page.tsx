import TransportationOverview from "../../components/transportation/TransportationOverview";
import TransportationTabs from "../../components/transportation/TransportationTabs";
import TransportationToolbar from "../../components/transportation/TransportationToolbar";
import TransportationTable from "../../components/transportation/TransportationTable";
import TransportationPerformance from "../../components/transportation/TransportationPerformance";

export default function TransportationPage() {
	return (
		<div className="p-4 lg:p-4 bg-[#F4F4F4] min-h-full">
			<TransportationOverview />

			<div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col">
				<TransportationTabs />
				<TransportationToolbar />
				<TransportationTable />
			</div>

			<TransportationPerformance />
		</div>
	);
}
