import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface JobDocument {
  _id: string;
  customer: string;
  category: string;
  route: {
    origin: string;
    destination: string;
    type: string;
  };
  status: string;
  eta: {
    time: string;
    date: string;
    status: string;
  };
  priority: 'Critical' | 'High' | 'Medium' | 'Low';
  destination: string;
  issuesType: string;
  urgency: 'Critical' | 'High' | 'Medium' | 'Low';
  
  // Extended Details
  timeline: { step: string; status: 'completed' | 'current' | 'pending'; date: string }[];
  basicDetails: {
    freightType: string;
    loadType: string;
    bookingRef: string;
    shipper: string;
    consignee: string;
    billingParty: string;
    customsOnly: boolean;
    grnRequired: boolean;
  };
  actionsRequired: { id: string; title: string; description: string; type: 'danger' | 'warning' | 'info'; actionText: string }[];
  routeDetails: {
    pol: { name: string; date: string };
    pod: { name: string; date: string };
    carrier: string;
    incoTerms: string;
  };
  assignedTeams: { id: string; name: string; initials: string; role: string; assigned: boolean }[];
  valueAddServices: { id: string; name: string; description: string; icon: string }[];
  containerDetails: { id: string; type: string; quantity: string; weight: string; volume: string; hsCodes: string }[];
  documents: { id: string; type: string; status: 'Missing' | 'Verified' | 'Pending'; date: string }[];
  internalNotes: { id: string; content: string; author: string; time: string }[];
  activityLog: { id: string; title: string; subtitle: string; time: string; type: 'status' | 'document' | 'note' | 'general' }[];
  additionalExpenses?: { id: string; title: string; amount: number; status?: string }[];
}

const detailedMockData = {
  timeline: [
    { step: 'Quote Approved', status: 'completed', date: 'Oct 12, 09:15' },
    { step: 'Job Created', status: 'completed', date: 'Oct 13, 14:30' },
    { step: 'Docs Pending', status: 'completed', date: 'Oct 14, 11:00' },
    { step: 'Clearance', status: 'completed', date: 'Oct 15, 18:45' },
    { step: 'In Transit', status: 'current', date: 'Current Status' },
    { step: 'Port Arrival', status: 'pending', date: 'Est. Oct 22' },
    { step: 'Delivered', status: 'pending', date: 'Est. Oct 25' },
  ],
  basicDetails: {
    freightType: 'Ocean',
    loadType: 'FCL (Full Container Load)',
    bookingRef: 'EVG-9920-X1',
    shipper: 'Zhejiang Manufacturing Hub',
    consignee: 'Global Tech Distribution Center',
    billingParty: 'Global Tech Industries Inc.',
    customsOnly: false,
    grnRequired: true,
  },
  actionsRequired: [
    { id: '1', title: 'Missing BL Document', description: 'Carrier evergreen has not received the Master BL. Shipment cannot clear customs without it.', type: 'danger', actionText: 'Upload' },
    { id: '2', title: 'Clearance Approval', description: 'Client approval needed for revised HS code mapping for electronics batch US-99.', type: 'info', actionText: 'Approve' },
    { id: '3', title: 'Transport Assignment', description: 'Last-mile drayage from Long Beach port to warehouse US-L81 needs scheduling.', type: 'warning', actionText: 'Assign' },
    { id: '4', title: 'Carrier Confirmation Pending', description: 'Waiting for FastShip to confirm truck assignment for last-mile delivery.', type: 'warning', actionText: 'Send nudge' },
  ],
  routeDetails: {
    pol: { name: 'Mumbai (India)', date: 'ETD: Oct 12, 2024' },
    pod: { name: 'Long Beach (USLGB)', date: 'ETA: Oct 28, 2024' },
    carrier: 'Evergreen Marine Corp.',
    incoTerms: 'FOB (Free On Board)',
  },
  assignedTeams: [
    { id: '1', name: 'FFT Team', initials: 'FF', role: 'Not Assigned', assigned: false },
    { id: '2', name: 'CC Team', initials: 'CC', role: 'Not Assigned', assigned: false },
    { id: '3', name: 'FastShip Transport', initials: 'FS', role: 'Transport', assigned: true },
  ],
  valueAddServices: [
    { id: '1', name: 'Cargo Insurance', description: 'Policy #INS-9002', icon: 'shield' },
    { id: '2', name: 'Fumigation', description: 'Cert Issued Oct 10', icon: 'droplet' },
    { id: '3', name: 'Warehousing', description: '3 Days Pre-Gate', icon: 'warehouse' },
  ],
  containerDetails: [
    { id: '1', type: "40' High Cube", quantity: '02', weight: '22,400 Kg', volume: '134.00', hsCodes: '8517.12.00' },
    { id: '2', type: "20' Standard", quantity: '01', weight: '11,200 Kg', volume: '33.20', hsCodes: '8517.12.00' },
  ],
  documents: [
    { id: '1', type: 'Bill Of Lading (Master)', status: 'Missing', date: '---' },
    { id: '2', type: 'Commercial Invoice', status: 'Verified', date: 'Oct 11, 2024' },
    { id: '3', type: 'Packing List', status: 'Verified', date: 'Oct 11, 2024' },
    { id: '4', type: 'Customs Entry Form 7501', status: 'Verified', date: 'Oct 11, 2024' },
  ],
  internalNotes: [
    { id: '1', content: 'Customer requested a 5% volume discount if they confirm by Friday.', author: 'Sales Team', time: '2 hours ago' },
    { id: '2', content: 'Customer requested a 4% volume discount if they confirm by Friday.', author: 'Sales Team', time: '3 hours ago' },
  ],
  activityLog: [
    { id: '1', title: "Status updated to 'In Transit'", subtitle: 'Today, 09:15 AM - System Automator', time: 'Today', type: 'status' },
    { id: '2', title: "Document 'Commercial Invoice' verified", subtitle: 'Yesterday, 04:30 PM - Sarah (FFT)', time: 'Yesterday', type: 'document' },
    { id: '3', title: 'New note: "Customer requested expedited delivery."', subtitle: 'Oct 22, 11:10 AM - Alex Chen', time: 'Oct 22', type: 'note' },
    { id: '4', title: 'Job Created', subtitle: 'Oct 12, 14:20', time: 'Oct 12', type: 'general' },
  ],
  additionalExpenses: [
    { id: '1', title: 'Port handling Fee', amount: 3205.00 },
    { id: '2', title: 'Customers Clearance', status: 'Pending', amount: 3250.00 },
    { id: '3', title: 'Insurance Premium', status: 'Confirmed', amount: 3260.00 },
  ],
} as any;

const initialState: { items: JobDocument[] } = {
  items: [
    {
      _id: '#JB-44092',
      customer: 'Global Tech Industries',
      category: 'Import - FCL',
      route: { origin: 'ORD', destination: 'LAX', type: 'Linehaul Premium' },
      status: 'In Transit',
      eta: { time: '14:30 PM', date: '(Today)', status: 'On Time' },
      priority: 'High',
      destination: 'Port of Rotterdam, NL',
      issuesType: 'Missing Bill of Lading',
      urgency: 'Critical',
      ...detailedMockData
    },
    {
      _id: '#JB-8812-C',
      customer: 'Walmart Inc',
      category: 'Export - LCL',
      route: { origin: 'DFW', destination: 'JFK', type: 'Refrigerated' },
      status: 'Delayed',
      eta: { time: '09:15 AM', date: '(Tomorrow)', status: '+45m Delay' },
      priority: 'Medium',
      destination: 'Hamburg Container Term.',
      issuesType: 'Customs Delay (+12h)',
      urgency: 'Medium',
      ...detailedMockData
    },
    {
      _id: '#JB-7721-F',
      customer: 'Tesla Giga',
      category: 'Export - FCL',
      route: { origin: 'SFO', destination: 'SEA', type: 'High Value' },
      status: 'Halted',
      eta: { time: 'Unknown', date: '', status: 'Stalled 2h' },
      priority: 'High',
      destination: 'Chicago Hub, IL',
      issuesType: 'Damaged Cargo Alert',
      urgency: 'Low',
      ...detailedMockData
    },
    {
      _id: '#JB-4450-X',
      customer: 'Pfizer Global',
      category: 'Import - LCL',
      route: { origin: 'LHR', destination: 'FRA', type: 'Cold Chain' },
      status: 'Final Mile',
      eta: { time: '11:00 AM', date: '(Today)', status: 'On Time' },
      priority: 'Medium',
      destination: 'Hamburg Container Term.',
      issuesType: 'Quote Approval Needed',
      urgency: 'Critical',
      ...detailedMockData
    },
    {
      _id: '#JB-9042-A_2',
      customer: 'Amazon Logistics',
      category: 'Import - AIR',
      route: { origin: 'ORD', destination: 'LAX', type: 'Linehaul Premium' },
      status: 'In Transit',
      eta: { time: '14:30 PM', date: '(Today)', status: 'On Time' },
      priority: 'Low',
      destination: 'Chicago Hub, IL',
      issuesType: 'Regulatory Hold',
      urgency: 'Medium',
      ...detailedMockData
    },
    {
      _id: '#JB-7721-F_2',
      customer: 'Tesla Giga',
      category: 'Import - FCL',
      route: { origin: 'SFO', destination: 'SEA', type: 'High Value' },
      status: 'Halted',
      eta: { time: 'Unknown', date: '', status: 'Stalled 2h' },
      priority: 'High',
      destination: 'Hamburg Container Term.',
      issuesType: 'Customs Delay (+12h)',
      urgency: 'Critical',
      ...detailedMockData
    },
    {
      _id: '#JB-9042-A_3',
      customer: 'Amazon Logistics',
      category: 'Export - FCL',
      route: { origin: 'ORD', destination: 'LAX', type: 'Linehaul Premium' },
      status: 'In Transit',
      eta: { time: '14:30 PM', date: '(Today)', status: 'On Time' },
      priority: 'Low',
      destination: 'Chicago Hub, IL',
      issuesType: 'Damaged Cargo Alert',
      urgency: 'Medium',
      ...detailedMockData
    },
    {
      _id: '#JB-8812-C_2',
      customer: 'Walmart Inc',
      category: 'Import - FCL',
      route: { origin: 'DFW', destination: 'JFK', type: 'Refrigerated' },
      status: 'Delayed',
      eta: { time: '09:15 AM', date: '(Tomorrow)', status: '+45m Delay' },
      priority: 'Medium',
      destination: 'Port of Rotterdam, NL',
      issuesType: 'Missing Bill of Lading',
      urgency: 'Medium',
      ...detailedMockData
    }
  ]
};

export const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    addJob: (state, action: PayloadAction<JobDocument>) => {
      state.items.push(action.payload);
    },
    deleteJob: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(job => job._id !== action.payload);
    },
    updateJobPriority: (state, action: PayloadAction<{ id: string; priority: 'Critical' | 'High' | 'Medium' | 'Low' }>) => {
      const job = state.items.find(j => j._id === action.payload.id);
      if (job) {
        job.priority = action.payload.priority;
      }
    }
  },
});

export const { addJob, deleteJob, updateJobPriority } = jobsSlice.actions;

export default jobsSlice.reducer;
