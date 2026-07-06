"use client";
import React from 'react';
import DashboardHeader from './components/dashboard/DashboardHeader';
import DashboardMetrics from './components/dashboard/DashboardMetrics';
import ShipmentPipeline from './components/dashboard/ShipmentPipeline';
import QuickActions from './components/dashboard/QuickActions';
import ActiveShipmentsList from './components/dashboard/ActiveShipmentsList';
import ClearanceStatus from './components/dashboard/ClearanceStatus';
import FleetUtilization from './components/dashboard/FleetUtilization';
import AlertsWidget from './components/dashboard/AlertsWidget';
import ActivityTimeline from './components/dashboard/ActivityTimeline';

export default function Home() {
  return (
    <div className="p-6  max-w-9xl mx-auto pb-20">
      <div className='bg-white p-6 rounded-xl mb-4'>
        <DashboardHeader />
        <DashboardMetrics />
      </div>

      {/* Middle Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mb-6">
        <ShipmentPipeline />
        <QuickActions />
      </div>

      {/* Main Grid Bottom */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 lg:gap-6">
        <div className="xl:col-span-2 flex flex-col gap-4 lg:gap-6">
          <ActiveShipmentsList />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            <ClearanceStatus />
            <FleetUtilization />
          </div>
        </div>
        <div className="xl:col-span-1 h-full">
          <AlertsWidget />
        </div>
      </div>

      {/* Full width bottom */}
      <ActivityTimeline />
    </div>
  );
}
