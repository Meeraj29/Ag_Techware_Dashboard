import SalesHeader from "../../components/sales/SalesHeader";
import SalesKPIs from "../../components/sales/SalesKPIs";
import SalesToolbar from "../../components/sales/SalesToolbar";
import SalesTable from "../../components/sales/SalesTable";
import SalesActivityTimeline from "../../components/sales/SalesActivityTimeline";
import SalesTopCustomers from "../../components/sales/SalesTopCustomers";

export default function SalesManagementPage() {
	return (
		<div className="p-4  min-h-full">
			<SalesHeader />

			<div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col mb-6">
				<SalesToolbar />
				<SalesTable />
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				<SalesActivityTimeline />
				<SalesTopCustomers />
			</div>
		</div>
	);
}
