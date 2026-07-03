"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addJob } from "@/app/redux/features/jobs/jobsSlice";

import CreateJobHeader from "@/app/components/jobs/create/CreateJobHeader";
import BasicDetailsForm from "@/app/components/jobs/create/BasicDetailsForm";
import RouteDetailsForm from "@/app/components/jobs/create/RouteDetailsForm";
import ValueAddedServicesForm from "@/app/components/jobs/create/ValueAddedServicesForm";
import LoadDetailsForm from "@/app/components/jobs/create/LoadDetailsForm";

export default function CreateJobPage() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [basicDetails, setBasicDetails] = useState<any>({});
  const [routeDetails, setRouteDetails] = useState<any>({});
  const [services, setServices] = useState<any>({});
  const [containers, setContainers] = useState([{ id: '1', type: '', quantity: '', weight: '', unit: 'KG' }]);

  const handleSaveDraft = () => {
    console.log("Draft saved");
    router.back();
  };

  const handleCancel = () => {
    router.back();
  };

  const handleSaveDetails = () => {
    // Generate random ID
    const newJobId = `#JB-${Math.floor(Math.random() * 9000) + 1000}`;

    // Map value added services to expected format
    const valueAddServicesList = Object.keys(services).filter(k => services[k]).map((k, i) => ({
      id: k,
      name: k.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()),
      description: "Added during creation",
      icon: "Plus"
    }));

    // Dispatch addJob action
    dispatch(addJob({
      _id: newJobId,
      customer: basicDetails.consignee || "New Customer",
      category: "Export",
      route: { origin: routeDetails.pol || '-', destination: routeDetails.pod || '-', type: basicDetails.freightType || 'Standard' },
      status: "Job Created",
      eta: { time: "-", date: "-", status: "Pending" },
      priority: "Medium",
      destination: routeDetails.placeOfDelivery || '-',
      issuesType: "",
      urgency: "Low",
      timeline: [],
      basicDetails: {
        freightType: basicDetails.freightType || '',
        loadType: basicDetails.loadType || '',
        bookingRef: basicDetails.bookingRef1 || '',
        shipper: basicDetails.shipper || '',
        consignee: basicDetails.consignee || '',
        billingParty: basicDetails.billingParty || '',
        customsOnly: basicDetails.isCustomsOnly || false,
        grnRequired: basicDetails.isGrnRequired || false,
      },
      actionsRequired: [],
      routeDetails: {
        pol: { name: routeDetails.pol || '-', date: '-' },
        pod: { name: routeDetails.pod || '-', date: '-' },
        carrier: routeDetails.carrier || '-',
        incoTerms: routeDetails.incoTerm || '-',
      },
      assignedTeams: [],
      valueAddServices: valueAddServicesList,
      containerDetails: containers.filter(c => c.type).map(c => ({
        id: c.id, type: c.type, quantity: c.quantity, weight: c.weight, volume: '-', hsCodes: '-'
      })),
      documents: [],
      internalNotes: [],
      activityLog: [{ id: '1', title: 'Job Created', subtitle: 'Just now', time: 'Today', type: 'general' }]
    } as any));

    router.push('/dashboard/jobs');
  };

  return (
    <div className="min-h-full p-4 bg-[#F8F9FA]">
      <div className="max-w-[1600px] w-full mx-auto pb-12">
        <CreateJobHeader
          onSaveDraft={handleSaveDraft}
          onCancel={handleCancel}
          onSaveDetails={handleSaveDetails}
        />

        <div className="flex flex-col gap-0">
          <BasicDetailsForm data={basicDetails} onChange={setBasicDetails} />
          <RouteDetailsForm data={routeDetails} onChange={setRouteDetails} />
          <ValueAddedServicesForm data={services} onChange={setServices} />
          <LoadDetailsForm containers={containers} onChange={setContainers} />
        </div>
      </div>
    </div>
  );
}
