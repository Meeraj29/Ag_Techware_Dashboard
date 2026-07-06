import VendorHeader from "../../components/vendors/VendorHeader";
import VendorTabs from "../../components/vendors/VendorTabs";
import VendorToolbar from "../../components/vendors/VendorToolbar";
import VendorTable from "../../components/vendors/VendorTable";

export default function VendorsPage() {
	return (
		<div className="p-4  bg-gray-50/50 min-h-full">
			<VendorHeader />

			<div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col">
				<VendorTabs />
				<VendorToolbar />
				<VendorTable />
			</div>
		</div>
	);
}
