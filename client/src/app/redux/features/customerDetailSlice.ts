import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CustomerDetail, CustomerDetailState, InternalNote } from '../../types/customers';

const mockDetails: Record<string, CustomerDetail> = {
  'CUS-1029': {
    id: 'CUS-1029',
    name: 'Acme Corp',
    registeredDate: 'Oct 12, 2021',
    status: 'Active',
    legalName: 'Acme Corporation Incorporated',
    taxId: 'US-98-11223344-01',
    primaryContact: 'James Wilson',
    contactEmail: 'j.wilson@acmecorp.com',
    phone: '+1 (555) 123-4567',
    headquarters: '300 Mission Street, Suite 2400\nSan Francisco, CA 94105\nUnited States',
    type: 'Both',
    totalJobs: 142,
    totalJobsTrend: '+12%',
    activeShipments: 12,
    activeShipmentsTrend: '+18%',
    completed: 130,
    creditUsage: 65,
    creditLimit: 50000,
    creditRenewal: 'Jan 2024',
    latePaymentRate: 0.02,
    avgShipmentVol: '42 Teu',
    systemNote: 'Account eligible for Tier-1 preferential shipping rates starting next billing cycle.',
    timeline: [
      { id: 't1', dateTime: '24-11-2026', eventType: 'Shipment #XF-902-L Arrival', operators: 'System (Auto)', status: 'Pending' },
      { id: 't2', dateTime: '23-11-2026', eventType: 'Credit Limit Increase Request', operators: 'Marcus Chen', status: 'Verified' },
      { id: 't3', dateTime: '22-11-2026', eventType: 'KYC Verification Renewal', operators: 'Legal Team', status: 'Delayed' },
      { id: 't4', dateTime: '21-11-2026', eventType: 'TechNova Industries', operators: 'Marcus Chen', status: 'Verified' },
    ],
    internalNotes: [
      { id: 'n1', text: 'Customer prefers consolidated billing on the 15th of each month.', author: 'Anita K.', daysAgo: '2 days ago' },
      { id: 'n2', text: 'Urgent: Address validation required for new Singapore warehouse.', author: 'System', daysAgo: '5 days ago' },
    ],
    addresses: [
      {
        id: 'a1',
        type: 'Billing Address',
        companyName: 'Global Logistics Corp.',
        addressLines: [
          'Marina Bay Financial Centre Tower 2,',
          '10 Marina Boulevard,',
          'Singapore 018983'
        ]
      },
      {
        id: 'a2',
        type: 'Shipping Address',
        companyName: 'Swift Auto Parts',
        addressLines: [
          'Warehouse No. 18, Dubai Industrial City,',
          'Sheikh Mohammed Bin Zayed Road,',
          'Dubai, UAE 391245'
        ]
      },
      {
        id: 'a3',
        type: 'Warehouse Address',
        companyName: 'Apex Retail Group',
        addressLines: [
          'Office 504, Al Quoz Business Centre,',
          'Al Quoz Industrial Area 3,',
          'Dubai, UAE 118765'
        ]
      },
      {
        id: 'a4',
        type: 'Billing Address',
        companyName: 'Global Logistics Corp.',
        addressLines: [
          'Marina Bay Financial Centre Tower 2,',
          '10 Marina Boulevard,',
          'Singapore 018983'
        ]
      }
    ],
  },
  'CUS-1028': {
    id: 'CUS-1028',
    name: 'Global Freight Ltd',
    registeredDate: 'Mar 05, 2020',
    status: 'Active',
    legalName: 'Global Freight Limited',
    taxId: 'ES-34-98765432-01',
    primaryContact: 'Marie Garcia',
    contactEmail: 'marie.garcia@globalfreight.es',
    phone: '+34 91 1234',
    headquarters: 'Calle Gran Via 45, Floor 8\nMadrid 28013\nSpain',
    type: 'Export',
    totalJobs: 89,
    totalJobsTrend: '+8%',
    activeShipments: 7,
    activeShipmentsTrend: '+5%',
    completed: 82,
    creditUsage: 0,
    creditLimit: 25000,
    creditRenewal: 'Apr 2024',
    latePaymentRate: 0.00,
    avgShipmentVol: '28 Teu',
    systemNote: 'No outstanding issues.',
    timeline: [
      { id: 't1', dateTime: '20-11-2026', eventType: 'Shipment #GF-701 Departure', operators: 'System (Auto)', status: 'Verified' },
      { id: 't2', dateTime: '18-11-2026', eventType: 'Payment Received', operators: 'Finance Team', status: 'Verified' },
    ],
    internalNotes: [
      { id: 'n1', text: 'Client requests invoice copies in Spanish.', author: 'Maria L.', daysAgo: '1 day ago' },
    ],
    addresses: [
      {
        id: 'a1',
        type: 'Billing Address',
        companyName: 'Global Logistics Corp.',
        addressLines: [
          'Marina Bay Financial Centre Tower 2,',
          '10 Marina Boulevard,',
          'Singapore 018983'
        ]
      },
      {
        id: 'a2',
        type: 'Shipping Address',
        companyName: 'Swift Auto Parts',
        addressLines: [
          'Warehouse No. 18, Dubai Industrial City,',
          'Sheikh Mohammed Bin Zayed Road,',
          'Dubai, UAE 391245'
        ]
      },
      {
        id: 'a3',
        type: 'Warehouse Address',
        companyName: 'Apex Retail Group',
        addressLines: [
          'Office 504, Al Quoz Business Centre,',
          'Al Quoz Industrial Area 3,',
          'Dubai, UAE 118765'
        ]
      },
      {
        id: 'a4',
        type: 'Billing Address',
        companyName: 'Global Logistics Corp.',
        addressLines: [
          'Marina Bay Financial Centre Tower 2,',
          '10 Marina Boulevard,',
          'Singapore 018983'
        ]
      }
    ],
  },
  'CUS-1027': {
    id: 'CUS-1027',
    name: 'Nordic Imports',
    registeredDate: 'Jun 18, 2022',
    status: 'Warning',
    legalName: 'Nordic Imports AS',
    taxId: 'NO-42-55667788-01',
    primaryContact: 'Chen Wei',
    contactEmail: 'chen.wei@nordicimports.no',
    phone: '+86 10 4444',
    headquarters: 'Karl Johans Gate 12\nOslo 0154\nNorway',
    type: 'Import',
    totalJobs: 34,
    totalJobsTrend: '+2%',
    activeShipments: 3,
    activeShipmentsTrend: '-5%',
    completed: 31,
    creditUsage: 98,
    creditLimit: 10000,
    creditRenewal: 'Feb 2024',
    latePaymentRate: 0.12,
    avgShipmentVol: '15 Teu',
    systemNote: 'Account near credit limit — review required.',
    timeline: [
      { id: 't1', dateTime: '22-11-2026', eventType: 'Credit Warning Issued', operators: 'System (Auto)', status: 'Pending' },
      { id: 't2', dateTime: '19-11-2026', eventType: 'Late Payment Notice', operators: 'Finance Team', status: 'Delayed' },
    ],
    internalNotes: [
      { id: 'n1', text: 'Monitor account closely — credit limit almost exhausted.', author: 'Risk Team', daysAgo: '3 days ago' },
    ],
    addresses: [
      {
        id: 'a1',
        type: 'Billing Address',
        companyName: 'Global Logistics Corp.',
        addressLines: [
          'Marina Bay Financial Centre Tower 2,',
          '10 Marina Boulevard,',
          'Singapore 018983'
        ]
      },
      {
        id: 'a2',
        type: 'Shipping Address',
        companyName: 'Swift Auto Parts',
        addressLines: [
          'Warehouse No. 18, Dubai Industrial City,',
          'Sheikh Mohammed Bin Zayed Road,',
          'Dubai, UAE 391245'
        ]
      },
      {
        id: 'a3',
        type: 'Warehouse Address',
        companyName: 'Apex Retail Group',
        addressLines: [
          'Office 504, Al Quoz Business Centre,',
          'Al Quoz Industrial Area 3,',
          'Dubai, UAE 118765'
        ]
      },
      {
        id: 'a4',
        type: 'Billing Address',
        companyName: 'Global Logistics Corp.',
        addressLines: [
          'Marina Bay Financial Centre Tower 2,',
          '10 Marina Boulevard,',
          'Singapore 018983'
        ]
      }
    ],
  },
  'CUS-1026': {
    id: 'CUS-1026',
    name: 'Pacific Trading Co',
    registeredDate: 'Feb 14, 2019',
    status: 'Active',
    legalName: 'Pacific Trading Company Pte Ltd',
    taxId: 'AE-97-12345678-01',
    primaryContact: 'Aisha Patel',
    contactEmail: 'aisha.patel@pacifictrading.ae',
    phone: '+971 4 2310000',
    headquarters: 'DIFC Gate Building\nDubai, UAE',
    type: 'Export',
    totalJobs: 210,
    totalJobsTrend: '+20%',
    activeShipments: 18,
    activeShipmentsTrend: '+22%',
    completed: 192,
    creditUsage: 45,
    creditLimit: 100000,
    creditRenewal: 'Mar 2024',
    latePaymentRate: 0.01,
    avgShipmentVol: '60 Teu',
    systemNote: 'Preferred partner eligible for express customs clearance.',
    timeline: [
      { id: 't1', dateTime: '23-11-2026', eventType: 'Shipment Departure', operators: 'System (Auto)', status: 'Verified' },
    ],
    internalNotes: [
      { id: 'n1', text: 'High-volume exporter - dedicated account manager assigned.', author: 'Ops Team', daysAgo: '1 day ago' },
    ],
    addresses: [
      { id: 'a1', type: 'Billing Address', companyName: 'Pacific Trading Co', addressLines: ['DIFC Gate Building,', 'Dubai, UAE'] },
    ],
  },
  'CUS-1025': {
    id: 'CUS-1025',
    name: 'EuroLine Logistics',
    registeredDate: 'Sep 09, 2021',
    status: 'Hold',
    legalName: 'EuroLine Logistics BV',
    taxId: 'NL-31-22334455-01',
    primaryContact: 'Robert Fox',
    contactEmail: 'r.fox@euroline.nl',
    phone: '+31 2 5607010',
    headquarters: 'Coolsingel 40\nRotterdam\nNetherlands',
    type: 'Both',
    totalJobs: 56,
    totalJobsTrend: '-3%',
    activeShipments: 4,
    activeShipmentsTrend: '-8%',
    completed: 52,
    creditUsage: 107,
    creditLimit: 15000,
    creditRenewal: 'Dec 2023',
    latePaymentRate: 0.18,
    avgShipmentVol: '20 Teu',
    systemNote: 'Account on hold - outstanding overdue balance.',
    timeline: [
      { id: 't1', dateTime: '21-11-2026', eventType: 'Account Placed on Hold', operators: 'System (Auto)', status: 'Pending' },
    ],
    internalNotes: [
      { id: 'n1', text: 'Account on hold pending overdue payment clearance.', author: 'Finance Team', daysAgo: '4 days ago' },
    ],
    addresses: [
      { id: 'a1', type: 'Billing Address', companyName: 'EuroLine Logistics BV', addressLines: ['Coolsingel 40,', 'Rotterdam 3011 AD,', 'Netherlands'] },
    ],
  },
  'CUS-1024': {
    id: 'CUS-1024',
    name: 'Oceanic Dynamics',
    registeredDate: 'Jan 22, 2018',
    status: 'Active',
    legalName: 'Oceanic Dynamics Ltd',
    taxId: 'GB-44-88990011-01',
    primaryContact: 'Emma Stone',
    contactEmail: 'emma.stone@oceanicdynamics.co.uk',
    phone: '+44 161 2345678',
    headquarters: '1 Canada Square\nLondon E14 5AB\nUnited Kingdom',
    type: 'Import',
    totalJobs: 234,
    totalJobsTrend: '+15%',
    activeShipments: 21,
    activeShipmentsTrend: '+10%',
    completed: 213,
    creditUsage: 7,
    creditLimit: 120000,
    creditRenewal: 'Jun 2024',
    latePaymentRate: 0.00,
    avgShipmentVol: '75 Teu',
    systemNote: 'Excellent payment history - eligible for credit limit increase.',
    timeline: [
      { id: 't1', dateTime: '24-11-2026', eventType: 'Shipment Arrived', operators: 'System (Auto)', status: 'Verified' },
    ],
    internalNotes: [
      { id: 'n1', text: 'Top-tier client - zero late payments in 5 years.', author: 'Account Team', daysAgo: '7 days ago' },
    ],
    addresses: [
      { id: 'a1', type: 'Billing Address', companyName: 'Oceanic Dynamics Ltd', addressLines: ['1 Canada Square,', 'London E14 5AB, UK'] },
    ],
  },
  'CUS-1023': {
    id: 'CUS-1023',
    name: 'Apex Freight',
    registeredDate: 'Apr 30, 2020',
    status: 'Active',
    legalName: 'Apex Freight Solutions Inc',
    taxId: 'US-12-44556677-01',
    primaryContact: 'Sarah Jenkins',
    contactEmail: 's.jenkins@apexfreight.com',
    phone: '+1 555-0190',
    headquarters: '500 Boylston Street\nBoston, MA 02116\nUnited States',
    type: 'Both',
    totalJobs: 87,
    totalJobsTrend: '+9%',
    activeShipments: 9,
    activeShipmentsTrend: '+6%',
    completed: 78,
    creditUsage: 0,
    creditLimit: 75000,
    creditRenewal: 'Aug 2024',
    latePaymentRate: 0.00,
    avgShipmentVol: '35 Teu',
    systemNote: 'No outstanding issues. Excellent account standing.',
    timeline: [
      { id: 't1', dateTime: '22-11-2026', eventType: 'Shipment Cleared Customs', operators: 'System (Auto)', status: 'Verified' },
    ],
    internalNotes: [
      { id: 'n1', text: 'Reliable client - always pays within 15-day terms.', author: 'Finance Team', daysAgo: '10 days ago' },
    ],
    addresses: [
      { id: 'a1', type: 'Billing Address', companyName: 'Apex Freight Solutions Inc', addressLines: ['500 Boylston Street,', 'Boston, MA 02116,', 'United States'] },
    ],
  },
  'CUS-1022': {
    id: 'CUS-1022',
    name: 'Nova Imports',
    registeredDate: 'Nov 11, 2017',
    status: 'Active',
    legalName: 'Nova Imports International Ltd',
    taxId: 'GB-44-77889900-01',
    primaryContact: 'Mikael Chen',
    contactEmail: 'mikael.chen@novaimports.co.uk',
    phone: '+44 20 7120000',
    headquarters: '30 St Mary Axe\nLondon EC3A 8BF\nUnited Kingdom',
    type: 'Import',
    totalJobs: 451,
    totalJobsTrend: '+25%',
    activeShipments: 38,
    activeShipmentsTrend: '+30%',
    completed: 413,
    creditUsage: 60,
    creditLimit: 250000,
    creditRenewal: 'Oct 2024',
    latePaymentRate: 0.03,
    avgShipmentVol: '110 Teu',
    systemNote: 'Largest importer on platform - strategic account.',
    timeline: [
      { id: 't1', dateTime: '24-11-2026', eventType: 'Batch Cleared at Port', operators: 'System (Auto)', status: 'Verified' },
    ],
    internalNotes: [
      { id: 'n1', text: 'Strategic account - quarterly business reviews scheduled.', author: 'Executive Team', daysAgo: '2 days ago' },
    ],
    addresses: [
      { id: 'a1', type: 'Billing Address', companyName: 'Nova Imports International Ltd', addressLines: ['30 St Mary Axe,', 'London EC3A 8BF,', 'United Kingdom'] },
    ],
  },
  'CUS-1021': {
    id: 'CUS-1021',
    name: 'Summit Traders',
    registeredDate: 'Jul 01, 2021',
    status: 'Hold',
    legalName: 'Summit Traders GmbH',
    taxId: 'DE-49-33445566-01',
    primaryContact: 'Elona Rostov',
    contactEmail: 'e.rostov@summittraders.de',
    phone: '+49 8 5550000',
    headquarters: 'Maximilianstrasse 13\nMunich 80539\nGermany',
    type: 'Both',
    totalJobs: 63,
    totalJobsTrend: '+1%',
    activeShipments: 5,
    activeShipmentsTrend: '-10%',
    completed: 58,
    creditUsage: 105,
    creditLimit: 30000,
    creditRenewal: 'Jan 2024',
    latePaymentRate: 0.15,
    avgShipmentVol: '22 Teu',
    systemNote: 'Account on hold - credit limit exceeded. Immediate review required.',
    timeline: [
      { id: 't1', dateTime: '23-11-2026', eventType: 'Account Placed on Hold', operators: 'System (Auto)', status: 'Pending' },
    ],
    internalNotes: [
      { id: 'n1', text: 'Credit limit exceeded - account on hold until settlement.', author: 'Finance Team', daysAgo: '3 days ago' },
    ],
    addresses: [
      { id: 'a1', type: 'Billing Address', companyName: 'Summit Traders GmbH', addressLines: ['Maximilianstrasse 13,', 'Munich 80539,', 'Germany'] },
    ],
  },
  'CUS-1020': {
    id: 'CUS-1020',
    name: 'Pioneer Exports',
    registeredDate: 'Aug 17, 2016',
    status: 'Warning',
    legalName: 'Pioneer Exports Inc',
    taxId: 'US-12-55667788-01',
    primaryContact: 'David Kim',
    contactEmail: 'david.kim@pioneerexports.com',
    phone: '+1 555-2441',
    headquarters: '350 Fifth Avenue\nNew York, NY 10118\nUnited States',
    type: 'Export',
    totalJobs: 112,
    totalJobsTrend: '+4%',
    activeShipments: 10,
    activeShipmentsTrend: '-2%',
    completed: 102,
    creditUsage: 4,
    creditLimit: 385000,
    creditRenewal: 'Nov 2024',
    latePaymentRate: 0.08,
    avgShipmentVol: '55 Teu',
    systemNote: 'Late payment trend detected - monitor closely.',
    timeline: [
      { id: 't1', dateTime: '23-11-2026', eventType: 'Late Payment Warning Issued', operators: 'System (Auto)', status: 'Pending' },
      { id: 't2', dateTime: '20-11-2026', eventType: 'Shipment Cleared', operators: 'System (Auto)', status: 'Verified' },
      { id: 't3', dateTime: '16-11-2026', eventType: 'Invoice Overdue', operators: 'Finance Team', status: 'Delayed' },
    ],
    internalNotes: [
      { id: 'n1', text: 'Late payment rate increasing - flagged for quarterly review.', author: 'Risk Team', daysAgo: '1 day ago' },
    ],
    addresses: [
      { id: 'a1', type: 'Billing Address', companyName: 'Pioneer Exports Inc', addressLines: ['350 Fifth Avenue,', 'New York, NY 10118,', 'United States'] },
    ],
  },
};

const initialState: CustomerDetailState = {
  details: mockDetails,
  activeTab: 'Overview',
  selectedCustomerId: null,
};

const customerDetailSlice = createSlice({
  name: 'customerDetail',
  initialState,
  reducers: {
    setActiveTab(state, action: PayloadAction<string>) {
      state.activeTab = action.payload;
    },
    setSelectedCustomer(state, action: PayloadAction<string>) {
      state.selectedCustomerId = action.payload;
      state.activeTab = 'Overview';
    },
    addNote(state, action: PayloadAction<{ customerId: string; note: InternalNote }>) {
      const { customerId, note } = action.payload;
      if (state.details[customerId]) {
        state.details[customerId].internalNotes.unshift(note);
      }
    },
  },
});

export const { setActiveTab, setSelectedCustomer, addNote } = customerDetailSlice.actions;
export default customerDetailSlice.reducer;
