export default function RouteDetails({ routeDetails }: { routeDetails: any }) {
  return (
    <div className="bg-[#F8F9FA] rounded-2xl border border-gray-100 p-5">
      <h3 className="text-sm font-bold text-gray-900 mb-4">Route Details</h3>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-start border-b border-gray-100 pb-3">
          <p className="text-[13px] text-gray-500">Port of Loading</p>
          <div className="text-right">
            <p className="text-[13px] font-bold text-gray-900">{routeDetails.pol.name}</p>
            <p className="text-[11px] text-gray-500">{routeDetails.pol.date}</p>
          </div>
        </div>

        <div className="flex justify-between items-start border-b border-gray-100 pb-3">
          <p className="text-[13px] text-gray-500">Port of Discharge</p>
          <div className="text-right">
            <p className="text-[13px] font-bold text-gray-900">{routeDetails.pod.name}</p>
            <p className="text-[11px] text-gray-500">{routeDetails.pod.date}</p>
          </div>
        </div>

        <div className="flex justify-between items-center border-b border-gray-100 pb-3">
          <p className="text-[13px] text-gray-500">Carrier</p>
          <p className="text-[13px] font-bold text-gray-900">{routeDetails.carrier}</p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-[13px] text-gray-500">INCO Terms</p>
          <p className="text-[13px] font-bold text-[#075FB7]">{routeDetails.incoTerms}</p>
        </div>
      </div>
    </div>
  );
}
